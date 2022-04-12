---
group: cloud-guide
title: SendGrid SMTP Proxy
functional_areas:
  - Cloud
  - Setup
  - Services
---

The SendGrid Simple Mail Transfer Protocol (SMTP) proxy service provides outbound email authentication and reputation monitoring services, including support for:

*  All outbound email messaging
*  Domain registration, DomainKeys Identified Mail (DKIM) signatures for email domain validation (Pro only)
*  Up to 12,000 outbound transactional emails per month, excluding marketing campaigns
*  Custom domain registration (Pro only)
*  Automated integration for Starter and Pro Integration environments. Pro Production and Staging environments require manual provisioning and configuration during the Infrastructure as a Service (IaaS) hardware provisioning process.

The SendGrid SMTP proxy is not intended for use as a general-purpose email server to receive incoming email or for use with email marketing campaigns.

{:.bs-callout-tip}
You can find SendGrid details for your account in the [Onboarding UI](https://cloud.magento.com) and select the **Project Details** > **Hosting  Info** tab.
## Ports
Emails are proxied through SendGrid's SMTP proxy host and encrypted over port 465 before being sent outbound.

*  Use Port 465 and 587 to send mail to your external mail server
*  Use Port 25 to send through `MAGENTO_CLOUD_SMTP_HOST`

## Enable or disable email
By default, email support is disabled on Staging and Production environments. You must enable email support on an environment to send emails including Welcome, password reset, and two-factor authentication emails for Cloud project users. See [Configure emails for testing](https://devdocs.magento.com/cloud/project/project-webint-basic.html#email).

## DomainKeys Identified Mail (DKIM)
DKIM is an email authentication protocol that helps Internet Service Providers (ISP) better identify both legitimate email senders and counterfeit sender addresses in email, a technique frequently exploited using phishing and email scams. DKIM enables the recipient to verify that an email purporting to originate from a certain domain was truly approved by the domain owner. DKIM is based on the concept of a domain owner who is in charge of the domain's DNS records. When sending email with DKIM enabled, the transmitting server uses a private key to sign the messages. Also, the domain owner adds a DKIM record, which is a modified `TXT` record, to the sender domain's DNS records. This `TXT` record contains a public key recipient mail servers use to verify the signature of a message. The DKIM public-key cryptography procedure enables recipients to verify the authenticity of a sender. See [DKIM Records Explained](https://docs.sendgrid.com/ui/account-and-settings/dkim-records).

{: .bs-callout-info}
**SendGrid DKIM signatures and domain authentication support** are available only on {{site.data.var.ece}} Pro and not on Starter. As a result, outbound emails are likely to be flagged by spam filters. Using DKIM improves the delivery rate as an authenticated email sender. A workaround is to upgrade from Starter to Pro or use your own SMTP server or email delivery service provider.

After domain authentication is set up, SendGrid automatically handles Security Policy Framework (SPF) and DKIM records for you. After SendGrid provides the `CNAME` records to add to your DNS records, you can add dedicated IP addresses and make other account updates without having to manage your SPF records manually.
## Enable DKIM for your domain
For SendGrid to send transactional emails on your behalf, configure your DNS settings to include the three SendGrid subdomain DNS entries. Each SendGrid account is assigned a unique `TXT` record which is used to authenticate outbound emails.

1. Open a [support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) and provide the domain you want to enable DKIM for.
1. Update your DNS configuration with the `TXT` and `CNAME` records provided to you in the support ticket.

**Example `TXT` record with your account ID:**

```bash
>v=spf1 include:u17504801.wl.sendgrid.net -all
```

**Example `CNAME` records to add to your DNS:**

```bash
em.example.com IN CNAME <sendgrid.net>
s1.example.com IN CNAME <s1.example.sendgrid.net>
s2.example.com IN CNAME <s2.example.sendgrid.net>
```

**To validate your configuration using Domain Information Groper (DiG):**

```terminal
dig CNAME em.domain_name
dig CNAME s1.domainkey.domain_name
dig CNAME s2.domainkey.domain_name
```

## Outbound transactional email credits
The SendGrid SMTP proxy service 12,000 email threshold refers to the number of allocated transactional emails that you can send on a monthly basis from {{site.data.var.ece}} Pro Production, Integration, and Staging branches.

*  Transactional email credits renew on the first day of each month
*  If you run out of credits, you can either request more credits or wait for the renewal count to reset the first day of each month
*  There are no hard limits on the number of emails that can be sent in Production, as long as the Sender Reputation score is over 95%. The reputation is affected by the number of bounced/rejected emails and whether DNS-based spam registries have flagged your domain as a potential spam source.

### Check if maximum credits are exceeded

1. Use SSH to log in to the remote environment.

    ```bash
    magento-cloud ssh
    ```

1. Check the `/var/log/mail.log` for `authentication failed : Maxium credits exceeded` entries.

If you see any authentication failed log entries, you can [submit a support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) to request a credit allotment increase.
## Email reputation monitoring
An email sender reputation is a score assigned by an Internet Service Provider (ISP) to a company that sends emails. It is an important part of your email deliverability. The higher the score, the more likely an ISP delivers emails to a recipient's inbox. If the score falls below a certain level, the ISP may route messages to recipients' spam folders or even reject them completely. The score is determined by several factors. See [5 Ways to Check Your Sending Reputation](https://sendgrid.com/blog/5-ways-check-sending-reputation/).

## Allowlists
Allowlists for {{site.data.var.ece}} is not supported. To improve your email reputation score, review the [Sender Policy Framework (SPF)](https://docs.sendgrid.com/ui/account-and-settings/spf-records#spf-overview) guidelines.
