---
group: cloud-guide
title: Managed Cloud WAF
functional_areas:
  - Cloud
  - Install
---

Powered by Fastly, the Managed Cloud WAF is a web application firewall service that detects, logs, and blocks malicious request traffic before it can damage your sites or network.

As a managed service, the Magento WAF provides the following benefits:
- **PCI compliance**—WAF enablement ensures that {{ site.data.var.ee }} storefronts in production environments meet PCI DSS 6.6 security requirements.
- **Default WAF policy**—The default WAF policy, configured and maintained by Fastly, provides a collection of security rules tailored to protect your {{ site.data.var.ee }} web applications from a wide range of attacks, including injection attacks, malicious inputs, cross-site scripting, data exfiltration, HTTP protocol violations, and other [OWASP Top Ten](https://www.owasp.org/index.php/Top_Ten) security threats.
- **WAF onboarding and enablement**—Magento works with you to plan and schedule the WAF rollout to deploy the WAF, tune the default WAF policy in your environment, and enable the service.
- **Operations and maintenance support**—
  - Magento and Fastly set up and manage your WAF logs and alerts.
  - Customer support tickets related to WAF issues that block legitimate traffic are triaged as Priority 1 issues.
  - WAF version upgrades to ensure immediate coverage for new or evolving exploits. See [WAF maintenance and upgrades](#waf-maintenance-and-updates).

Both the {{ site.data.var.ece }} Pro and Starter subscriptions include the Managed Cloud WAF at no additional cost. The WAF service is available only on Production environments.

{:.bs-callout .bs-callout-tip}
For additional information about maintaining PCI compliance for your {{ site.var.data.ece }} stores, see [Magento Approach to PCI compliance](https://magento.com/pci-compliance).

### Enabling the WAF

Fastly implements the managed web application firewall for {{ site.data.var.ece }} using the Fastly CDN service. You do not have to install or maintain any hardware or software.

For new {{ site.data.var.ece }} accounts, your Magento technical account manager works with you during the onboarding and launch process to plan and schedule WAF enablement. For existing {{ site.data.var.ece }} projects, contact your account manager or CSM for help enabling the WAF. See [Managed Cloud WAF FAQ](https://support.magento.com/hc/en-us/articles/360016353452--Web-Application-Firewall-WAF-powered-by-Fastly-the-FAQ).

{:.bs-callout .bs-callout-info}
Before you can use the WAF, all external traffic to your {{ site.data.var.ece }} project must route through the Fastly service. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/configure-fastly.html).

## How it works

The Managed Cloud WAF integrates with Fastly and uses the cache logic within the Fastly CDN
service to filter traffic at the Fastly global nodes. We enable the WAF service in your Production environment with a default WAF policy based on [ModSecurity Rules from Trustwave SpiderLabs](https://www.modsecurity.org/rules.html) and the OWASP Top Ten security threats.

The Managed Cloud WAF filters HTTP and HTTPS traffic (GET and POST requests) against the WAF ruleset and blocks traffic that is malicious or does not comply with specific rules. The WAF service filters only origin-bound traffic that attempts to refresh the cache. As a result, we stop most attack traffic at the Fastly cache, protecting your origin traffic from malicious attacks. By processing only origin traffic, the Managed Cloud WAF preserves cache performance, introducing only an estimated 1.5 milliseconds (ms) to 20 ms of latency to every non-cached request.

### Troubleshooting blocked requests

When the Managed Cloud WAF is enabled, it filters all web and admin traffic against the WAF rules and WAF blocks any web request that triggers a WAF rule. When a request is blocked, the requestor sees a default `403 Forbidden` error page that includes a reference ID for the blocking event.

![WAF error page]

You can customize this error response page from the Magento Admin UI. See [Customize the WAF response page]({{ page.baseurl }}/cloud/cdn/cloud-fastly-custom-response.html#customize-the-waf-error-page).

If your {{ site.data.var.ee }} admin page or storefront returns a `403 Forbidden` error page in response to a legitimate URL request, submit a [Magento support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket). Copy the reference ID from the error response page and paste it into the ticket description.

### WAF maintenance and updates

Fastly maintains and updates the WAF ruleset based on rule updates from commercial third parties, Fastly research, and open sources. Fastly updates the published rules into a policy as needed, or when changes to the rules are available from their respective sources. Also, Fastly can add new rules that match the published classes of rules into the WAF instance of any service after the WAF is enabled. These updates ensure immediate coverage for new or evolving exploits.

Magento and Fastly manage the update process to ensure that new or modified WAF rules work effectively in your Production environment before the updates are deployed in blocking mode. See [Fastly WAF rule set update and maintenance](https://docs.fastly.com/guides/web-application-firewall/fastly-waf-rule-set-updates-maintenance).

### Limitations

The standard Magento Cloud WAF powered by Fastly does not support the following features:

- Filtering for TCP, UDP, or ICMP requests
- Protection against malware or bot mitigation
- Rate limiting or virtual patching
- Configuring a logging endpoint for customer

Although the WAF does not allow you to block or allow traffic based on IP addresses, you can add access control lists (ACL) and custom VCL snippets to your Fastly service to specify the IP addresses and VCL logic for blocking or allowing traffic. See [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

[WAF error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-waf-403-error.png
{:width="550px"}

