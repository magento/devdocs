---
group: cloud-guide
title: SendGrid
functional_areas:
  - Cloud
  - Setup
  - Services
---

The SendGrid-based SMTP proxy service provides email authentication, reputation monitoring, and dedicated IP addresses. A basic set up includes 12,000 emails per month and excludes use in marketing campaigns. See [SendGrid and Magento—Email Delivery. Simplified](https://sendgrid.com/partners/magento/).

Magento automates the SendGrid integration for Starter and Pro Integration environments. The Pro Production and Staging environments require manual provisioning and configuration during the IaaS hardware provisioning process.

You must add the DNS records—three sub-domains provided by SendGrid—that permits SendGrid to send transactional messages on your behalf. Also, each SendGrid account receives a unique TXT record that you must add to the DNS to authenticate outbound mailings.

Add the corresponding host and value CNAME records to the DNS:

```terminal
em.example.com IN CNAME <sendgrid.net>
s1.example.com IN CNAME <s1.example.sendgrid.net>
s2.example.com IN CNAME <s2.example.sendgrid.net>
```

The CNAME records resolve to the Domain Keys Identified Mail (DKIM) and Sender Policy Framework (SPF) records managed by SendGrid, so that spam filters are less likely to inhibit your messages.

Magento does not support whitelisting, but you can review the [Sender Policy Framework (SPF)](https://sendgrid.com/docs/Glossary/spf.html) guidelines to improve delivery.
