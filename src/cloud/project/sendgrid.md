---
group: cloud-guide
title: SendGrid SMTP Proxy
functional_areas:
  - Cloud
  - Setup
  - Services
redirect_to: https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/project/sendgrid.html
status: migrated
---

The SendGrid Simple Mail Transfer Protocol (SMTP) proxy service provides outbound email authentication and reputation monitoring services, including support for:

*  All outbound transactional emails
*  Dedicated IP addresses
*  Domain registration, DomainKeys Identified Mail (DKIM) signatures for email domain validation (Pro only)
*  Up to 12,000 outbound transactional emails per month, excluding marketing campaigns
*  Custom domain registration (Pro only)
*  Automated integration for Starter and Pro Integration environments. Pro Production and Staging environments require manual provisioning and configuration during the Infrastructure as a Service (IaaS) hardware provisioning process

The SendGrid SMTP proxy is not intended for use as a general-purpose email server to receive incoming email or for use with email marketing campaigns.

{:.bs-callout-tip}
You can find SendGrid details for your account in the [Onboarding UI](https://cloud.magento.com) and select the **Project Details** > **Hosting Info** tab.

## Enable or disable email

By default, email support is disabled on Staging and Production environments. You must enable email support on an environment in order to send transactional emails including Welcome, password reset, and two-factor authentication emails for Cloud project users. See [Configure emails for testing](https://devdocs.magento.com/cloud/project/project-webint-basic.html#email).

## DomainKeys Identified Mail (DKIM)

DKIM is an email authentication technology that enables Internet Service Providers (ISPs) to identify both legitimate and fake sender addresses, a technique commonly used in phishing and email scams. DKIM relies on a domain owner managing the domain's DNS records. When using DKIM, the sender server uses a private key to sign the messages. Also, the domain owner adds a DKIM record, which is a modified `TXT` record, to the sender domain's DNS records. This `TXT` record contains a public key recipient mail servers use to verify the signature of a message. The DKIM public-key cryptography procedure enables recipients to verify the authenticity of a sender. See [DKIM Records Explained](https://docs.sendgrid.com/ui/account-and-settings/dkim-records).

{: .bs-callout-warning}
**SendGrid DKIM signatures and domain authentication support** is available only on {{site.data.var.ece}} Pro and not on Starter. As a result, outbound transactional emails are likely to be flagged by spam filters. Using DKIM improves the delivery rate as an authenticated email sender. To improve message delivery rate, you can upgrade from Starter to Pro or use your own SMTP server or email delivery service provider.

## Sender and Domain authentication

For SendGrid to send transactional emails on your behalf, you must configure your DNS settings to include the three SendGrid subdomain DNS entries. Each SendGrid account is assigned a unique `TXT` record which is used to authenticate outbound emails.

{:.procedure}
To enable domain authentication:

1. Open a [support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) and request to enable the DKIM on a specific domain.
1. Update your DNS configuration with the `TXT` and `CNAME` records provided to you in the support ticket.

**Example `TXT` record with account ID:**

```text
v=spf1 include:u17504801.wl.sendgrid.net -all
```

**Example `CNAME` records:**

| Domain   | Points To | Record Type
|----------|----------|-------------|
| em.emaildomain.com  | uxxxxxxxx.wlxxx.sendgrid.net | CNAME |
| s1._domainkey.emaildomain.com | s1.domainkey.uxxxxxx.wlxxxx.sendgrid.net | CNAME |
| s2._domainkey.emaildomain.com | s2.domainkey.uxxxxxx.wlxxxx.sendgrid.net | CNAME |

## DKIM signatures and automated security

You can select between automated and manual security when setting up an authenticated domain. If you choose automated security, SendGrid manages your DKIM and SPF records automatically. This means that when you add a new dedicated sending IP address to your account, SendGrid updates your DNS settings and DKIM signature immediately. If you turn automated security off, you are responsible for updating your DKIM signature anytime you make changes to your sending domain.

### DKIM record example with automated security on

```text
subdomain.mydomain.com. | CNAME | uXXXXXXX.wlXXX.sendgrid.net
s1._domainkey.mydomain.com. | CNAME | s1.domainkey.uXXX.wlXXX.sendgrid.net
s2._domainkey.mydomain.com. | CNAME | s2.domainkey.uXXX.wlXXX.sendgrid.net
```
### DKIM record example with automated security off

```text
me12345.mydomain.com | MX | mx.sendgrid.net
me12345.mydomain.com | TXT | v=spf1 include:sendgrid.net ~all
m1._mydomain.com | TXT | k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojW4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXV0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXV
```

After domain authentication is set up, SendGrid automatically handles Security Policy Framework (SPF) and DKIM records for you. After SendGrid provides the `CNAME` records to add to your DNS records, you can add dedicated IP addresses and make other account updates without having to manage your SPF records manually. See [Automated Security and Your DKIM Signature](https://docs.sendgrid.com/ui/account-and-settings/dkim-records#automated-security-and-your-dkim-signature).
## Test your DNS configuration

To test your DNS configuration, run `dig`:

```terminal
dig CNAME em.domain_name
dig CNAME s1._domainkey.domain_name
dig CNAME s2._domainkey.domain_name
```
## Transactional email credits

The 12,000 transactional email threshold refers to the number of transactional email messages that you can send on a monthly basis from {{site.data.var.ece}} Pro Production, Integration, and Staging branches. The threshold is designed to protect against sending spam and potentially damaging your email reputation.

*  Transactional email credits renew on the first day of each month
*  If you run out of credits, you can either request more credits or wait for the renewal count to reset the first day of each month
*  There are no hard limits on the number of emails that can be sent in Production, as long as the Sender Reputation score is over 95%. The reputation is affected by the number of bounced/rejected emails and whether DNS-based spam registries have flagged your domain as a potential spam source

{:.procedure}
To check if maximum credits are exceeded:

1. Use SSH to log in to the remote environment.

    ```bash
    magento-cloud ssh
    ```

1. Check the `/var/log/mail.log` for `authentication failed : Maxium credits exceeded` entries.

If you see any `authentication failed` log entries, you can [submit a support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) to request a credit allotment increase.

## Email sending reputation

An email sending reputation is a score assigned by an Internet Service Provider (ISP) to a company sending email messages. The higher the score, the more likely an ISP delivers messages to a recipient's inbox. If the score falls below a certain level, the ISP may route messages to recipients' spam folder or even reject messages completely. The reputation score is determined by several factors such as a 30-day average of your IP addresses rank against other IP addresses and spam complaint rate. See [5 Ways to Check Your Sending Reputation](https://sendgrid.com/blog/5-ways-check-sending-reputation/).
