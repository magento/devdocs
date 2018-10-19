---
group: cloud-guide
title: Managed Cloud WAF
functional_areas:
  - Cloud
  - Install
---

Powered by Fastly, the Managed Cloud WAF is a web application firewall service that detects, logs, and blocks malicious request traffic before it can damage your sites or network. This service is included with your {{ site.data.var.ece }} subscription to protect production environments at no additional cost. It is not available for staging environments.

As a managed service, the Magento WAF provides the following benefits: 
- **PCI compliance**—WAF enablement ensures that {{ site.data.var.ee }} storefronts in production environments meet PCI DSS 6.6 security requirements.
- **Default WAF policy**—The default WAF policy, configured and maintained by Fastly, provides a collection of security rules tailored to protect {{ site.data.var.ee }} projects from a wide range of attacks, including the OWASP Top Ten.
- **WAF onboarding and enablement**—Magento works with you to plan and schedule the WAF rollout to deploy the WAF, tune the default WAF policy in your environment, and enable the service.
- **Operations support**—
  - Magento and Fastly set up and manage your WAF logs and alerts.
  - Customer support tickets related to WAF issues that block legitimate traffic are triaged as Priority 1 issues. 

The Magento WAF service is integrated into Fastly's global nodes and runs as a part of the cache logic within the Fastly CDN service. Magento enables the WAF in your production environment with a default WAF policy-based on [ModSecurity Rules from Trustwave SpiderLabs](https://www.trustwave.com/Products/Application-Security/ModSecurity-Rules-and-Support/) and the [OWASP Top Ten](https://www.owasp.org/index.php/Top_Ten) security threats.


Once deployed, the WAF monitors web and admin traffic to identify any suspicious activity. It filters HTTP and HTTPS traffic (GET and POST requests) against the WAF ruleset and blocks traffic that is malicious or does not comply with specific rules. It can block SQL injection attacks, cross-site scripting attacks, and more.


### Enabling the WAF

Fastly implements the managed web application firewall for {{ site.data.var.ece }} using the Fastly CDN service. You do not have to install or maintain any hardware or software. Before you can use the WAF, you must set up your Fastly service and configure Origin shielding so that 
all external traffic routes through the Fastly service. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).

For new {{ site.data.var.ece }} accounts, your Magento technical account manager works with you during the onboarding and launch process to plan and schedule WAF enablement. For existing {{ site.data.var.ece }} projects, contact your account manager or CSM for help enabling the WAF. 

### Troubleshooting blocked requests

When the Managed Cloud WAF is enabled, it filters all web and admin traffic against the WAF rules and WAF blocks any web request that triggers a WAF rule. When a request is blocked, the requestor sees a default `403 Forbidden` error page that includes a reference ID for the blocking event.

![WAF error response page]

You can customize this error response page from the Magento Admin UI. See [Create a custom error response page]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#fastly-errpg).

If your {{ site.data.var.ee }} admin page or storefront returns a `403 Forbidden` error page in response to a legitimate URL request, submit a [Magento support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket). Copy the reference ID from the error response page and paste it into the ticket description.

### WAF maintenance and updates

Fastly maintains and updates the WAF ruleset based on rule updates from commercial third parties, Fastly research, and open sources. Fastly updates the published rules into a policy as needed, or when changes to the rules are available from their respective sources. Also, Fastly can add new rules that match the published classes of rules into the WAF instance of any service after the WAF is enabled. These updates ensure immediate coverage for new or evolving exploits.

Magento and Fastly manage the update process to ensure that new or modified WAF rules work effectively in your production environment before the updates are deployed in blocking mode. See [Fastly WAF rule set update and maintenance](https://docs.fastly.com/guides/web-application-firewall/fastly-waf-rule-set-updates-maintenance).


### Limitations

The standard Magento Cloud WAF powered by Fastly does not support the following features:

- Filtering for TCP, UDP, or ICMP requests
- Protection against malware or bot mitigation
- Rate limiting or virtual patching
- Configuring a logging endpoint for customer

You can add blacklist and whitelist filtering for IP addresses by uploading custom VCL snippets to the Fastly CDN service. See [Custom VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).


[WAF error response page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-waf-403-error.png
{:width="550px"}


