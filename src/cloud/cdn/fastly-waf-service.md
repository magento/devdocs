---
group: cloud-guide
title: Web Application Firewall (WAF)
functional_areas:
  - Cloud
  - Install
  - Security
  - Compliance
---

Powered by Fastly, the web application firewall (WAF) service for {{ site.data.var.ece }} detects, logs, and blocks malicious request traffic before it can damage your sites or network. The WAF service is available on production environments only.

The WAF service provides the following benefits:

-  **PCI compliance**—WAF enablement ensures that {{ site.data.var.ee }} storefronts in Production environments meet PCI DSS 6.6 security requirements.
-  **Default WAF policy**—The default WAF policy, configured and maintained by Fastly, provides a collection of security rules tailored to protect your {{ site.data.var.ee }} web applications from a wide range of attacks, including injection attacks, malicious inputs, cross-site scripting, data exfiltration, HTTP protocol violations, and other [OWASP Top Ten](https://www.owasp.org/index.php/Top_Ten) security threats.
-  **WAF onboarding and enablement**—Magento deploys and enables the default WAF policy in your Production environment within 2 to 3 weeks after provisioning is final.
-  **Operations and maintenance support**—
   -  Magento and Fastly set up and manage your logs and alerts for the WAF service.
   -  Magento triages customer support tickets related to WAF service issues that block legitimate traffic as Priority 1 issues.
   -  Automated upgrades to the WAF service version ensure immediate coverage for new or evolving exploits. See [WAF maintenance and upgrades](#waf-maintenance-and-updates).

{:.bs-callout-tip}
For additional information about maintaining PCI compliance for your {{ site.var.data.ece }} stores, see [Magento Approach to PCI compliance](https://magento.com/pci-compliance).

### Enabling the WAF

Magento enables the WAF service on new accounts within 2 to 3 weeks after provisioning is final. The WAF is implemented through the Fastly CDN service. You do not have to install or maintain any hardware or software.

{:.bs-callout-info}
Before you can use the WAF service, all external traffic to your {{ site.data.var.ece }} project must route through the Fastly service. See [Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

## How it works

The WAF service integrates with Fastly and uses the cache logic within the Fastly CDN
service to filter traffic at the Fastly global nodes. We enable the WAF service in your Production environment with a default WAF policy based on [ModSecurity Rules from Trustwave SpiderLabs](https://www.modsecurity.org/rules.html) and the OWASP Top Ten security threats.

The WAF service filters HTTP and HTTPS traffic (GET and POST requests) against the WAF ruleset and blocks traffic that is malicious or does not comply with specific rules. The service filters only origin-bound traffic that attempts to refresh the cache. As a result, we stop most attack traffic at the Fastly cache, protecting your origin traffic from malicious attacks. By processing only origin traffic, the WAF service preserves cache performance, introducing only an estimated 1.5 milliseconds (ms) to 20 ms of latency to every non-cached request.

### Troubleshooting blocked requests

When the WAF service is enabled, it filters all web and admin traffic against the WAF rules and blocks any web request that triggers a rule. When a request is blocked, the requestor sees a default `403 Forbidden` error page that includes a reference ID for the blocking event.

![WAF error page]

You can customize this error response page from the Magento Admin UI. See [Customize the WAF response page]({{ site.baseurl }}/cloud/cdn/cloud-fastly-custom-response.html#customize-the-waf-error-page).

If your {{ site.data.var.ee }} admin page or storefront returns a `403 Forbidden` error page in response to a legitimate URL request, submit a [Magento support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket). Copy the reference ID from the error response page and paste it into the ticket description.

### WAF maintenance and updates

Fastly maintains and updates the WAF ruleset based on rule updates from commercial third parties, Fastly research, and open sources. Fastly updates the published rules into a policy as needed, or when changes to the rules are available from their respective sources. Also, Fastly can add new rules that match the published classes of rules into the WAF instance of any service after the WAF service is enabled. These updates ensure immediate coverage for new or evolving exploits.

Magento and Fastly manage the update process to ensure that new or modified WAF rules work effectively in your Production environment before the updates are deployed in blocking mode. See [Fastly WAF rule set update and maintenance](https://docs.fastly.com/guides/web-application-firewall/fastly-waf-rule-set-updates-maintenance).

### Limitations

The standard WAF service powered by Fastly does not support the following features:

-  Protection against malware or bot mitigation
-  Rate limiting
-  Configuring a logging endpoint for customer

Although the WAF service does not allow you to block or allow traffic based on IP addresses, you can add access control lists (ACL) and custom VCL snippets to your Fastly service to specify the IP addresses and VCL logic for blocking or allowing traffic. See [Custom Fastly VCL snippets]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

Filtering for TCP, UDP, or ICMP requests is not supported by the WAF service. However, this functionality is provided by the built-in DDoS protection included with the Fastly CDN service. See [DDoS protection]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#ddos-protection).

[WAF error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-waf-403-error.png
{:width="550px"}
