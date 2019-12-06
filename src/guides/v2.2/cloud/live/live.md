---
group: cloud-guide
title: Go live and launch
functional_areas:
  - Cloud
---

When you have completed deployment and testing in Integration and Staging environments, you can start going live. First, you should complete all development and testing prior to touching Production. Feel ready to launch? Review our checklists, best practices, and final steps to go live.

If you checked this information prior to deploying and testing in Staging, consider reviewing the benefits of testing in Staging first in the next section. Staging is a near-production environment running on similar hardware, configurations, architecture, and services. It can reduce your downtime and make your extension, service, custom configurations, and merchant User Acceptance Testing vital components to releasing your sites and stores.

## Info you need to go live {#goliveinfo}

You need the following information to go live:

*  CNAME record information for configuring the DNS
*  List of all storefront domains to add to the certificate
*  SSL certificate if not using the shared-SSL (requires option purchase)

As part of {{site.data.var.ece}} subscription, you have access to a shared Domain-Validated SSL (HTTPS) certificate that is issued by GlobalSign. This certificate is shared with other merchants and included for all Cloud accounts. If you want to deploy an Extended Validation SSL (not-shared) certificate for your company, this option can be purchased when you first sign-up with Magento Commerce. If you need to purchase this option, contact your account representative.

## Why test fully in Integration and Staging? {#whytest}

We strongly recommend testing in these environments due to the complexity of your custom code, themes, Magento extensions, 3rd party integrations all working together to provide a single or multiple stores. Every deployment can differ between merchants. The following are common issues you can find early and solve before touching Production:

*  Staging supports all Production services, features, database data, technology stack, architecture, and more. It mirrors Production, which means if errors occur in Staging, you have a **warning before it occurs in Production**.
*  Extensions may need to be installed and configured in a specific order. Some extensions touch similar pieces of code in the back and frontend, sometimes clashing and causing errors.
*  Extensions typically are heavily tested in [Developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html), not Production mode. When you move to Staging and use Production mode, you may find error and surprises between extensions, your custom code, and Magento.
*  Configurations and code may work great in your developer Integration environments and run into issues in Staging and Production. Working in your local does not confirm it works perfectly in production.
*  Integration environments do not have all the incredible services available in Staging and Production, like Fastly, New Relic, and Blackfire.
*  [Fully test]({{ page.baseurl }}/cloud/live/stage-prod-test.html#loadtest) your site with a variety of tools in Staging for load, stress, performance, and site assets
*  Integration environments may only have databases populated with test data, not matching a production-like environment

## Set up Magento Security Scan Tool {#security-scan}

{%
include note.html
type='info'
content='The security scan tool uses the following public IP addresses:

```text
52.72.230.169
52.86.204.1
52.87.98.44
```

You must whitelist these IP addresses in your network firewall rules to allow the tool to scan your site. The tool posts requests to ports 80 and 443 only.'
%}

The Magento Security Scan Tool enables you to regularly monitor your store websites and receive updates for known security risks, malware, and out-of-date software. This is a free service available for all implementations and versions of {{site.data.var.ece}}. You access the tool through your [Magento Marketplace account](https://account.magento.com/customer/account/login).

*  Monitor your sites security status and applied security updates
*  Receive security updates and site-specific notifications

See the [Magento User Guide](http://docs.magento.com/m2/ee/user_guide/magento/security-scan.html) for information about setting up and using the security scan tool. Typically, you start using this tool when you begin user acceptance testing (UAT).

Each site you scan must be registered through the Magento Security Scan tab. During the registration process, you must accept the Magento disclaimer before you can begin scanning.  You control both the schedule and authorizing the user to receive notifications when each scan is complete.  You can schedule scans for a specific, recurring date and time, or run a scan on demand as needed.

The Magento Security Scan Tool uses several user agent strings to simulate real-life malware activity. You might see the following user agents in your analytics or access logs:

```text
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0
GuzzleHttp/6.3.3 curl/7.29.0 PHP/7.1.18
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36
Visbot/2.0 (+http://www.visvo.com/en/webmasters.jsp;bot@visvo.com)
```

## Scan your site

{:.procedure}
To scan your site:

1. Access your [Magento Marketplace account](https://account.magento.com/customer/account/login).
1. Click the Security Scan tab and select **Go to Security Scan**.
1. In the _Actions_ column for the site, select **Run Scan**. A notification status displays the scheduled scan.

{:.procedure}
To review the report:

1. When the report completes, a notification displays.
1. In the site row, select the report you want to view from the **Reports** column. The order is latest to oldest.

The report lists issues including Failed Scans, Unidentified Results, and Successful Scans. Each entry provides detailed information for the scan, a list of issues to investigate, and actions to take. Some of these actions may require downloading and installing security patches. You can add those to a development branch on your local workstation.

Scan results include a label that describes scan pass or fail status with detailed information about the checks performed:

*  "Failed" indicates that the website contains a serious vulnerability.
*  "Unidentified" suggests that a deeper review is required by your team or hosting provider to determine if further action is required.

The scan results also provide suggested remediation steps for each failed security test. Security scan results are protected and viewable only by the registered user. Only users designated in the site registration process receive scan completion notifications.

## Ready to go live {#ready}

When you are ready to begin the go-live process, see the following:

*  [Go live checklist]({{ page.baseurl }}/cloud/live/go-live-checklist.html)
*  [Launch steps]({{ page.baseurl }}/cloud/live/launch-steps.html)
