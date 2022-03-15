---
group: cloud-guide
title: SendGrid
functional_areas:
  - Cloud
  - Setup
  - Services
---

The SendGrid-based SMTP proxy service provides email authentication and reputation monitoring. A basic set up includes 12,000 emails per month and excludes use in marketing campaigns.

Adobe automates the SendGrid integration for Starter and Pro Integration environments. The Pro Production and Staging environments require manual provisioning and configuration during the IaaS hardware provisioning process.

You must add the DNS records—three sub-domains provided by SendGrid—that permits SendGrid to send transactional messages on your behalf. Also, each SendGrid account receives a unique TXT record that you must add to the DNS to authenticate outbound mailings.

Add the corresponding host and value CNAME records to the DNS:

```terminal
em.example.com IN CNAME <sendgrid.net>
s1.example.com IN CNAME <s1.example.sendgrid.net>
s2.example.com IN CNAME <s2.example.sendgrid.net>
```

{: .bs-callout-tip}
You can find Sendgrid details for your account in the Onboarding UI. Use the `https://cloud.magento.com/project/_project-id_/setup/project_details` URL and select the **Project Details** > **Hosting Info** tab.

For {{site.data.var.ece}} Pro, the CNAME records resolve to the Domain Keys Identified Mail (DKIM) and Sender Policy Framework (SPF) records managed by SendGrid, so that spam filters are less likely to inhibit your messages.

{: .bs-callout-info}
**SendGrid DKIM signatures** are not available in Commerce Cloud Starter. They are only available in Commerce Cloud Pro.

Adobe does not support allowlists, but you can review the [Sender Policy Framework (SPF)](https://docs.sendgrid.com/ui/account-and-settings/spf-records#spf-overview) guidelines to improve delivery.
