---
group: cloud-guide
subgroup: 165_live
title: Go live and launch
menu_title: Go live and launch
menu_order: 1
menu_node: parent
functional_areas:
  - Cloud
---

When you have completed deployment and testing in Integration and Staging environments, you can start going live. First, you should complete all development and testing prior to touching Production. Feel ready to launch? Review our checklists, best practices, and final steps to go live.

If you checked this information prior to deploying and testing in Staging, consider reviewing the benefits of testing in Staging first in the next section. Staging is a near-production environment running on similar hardware, configurations, architecture, and services. It can reduce your downtime and make your extension, service, custom configurations, and merchant User Acceptance Testing vital components to releasing your sites and stores.

## Info you need to go live {#goliveinfo}

You need the following information to go live:

* CNAME record information for configuring the DNS
* List of all storefront domains to add to the certificate
* SSL certificate if not using the shared-SSL (requires option purchase)

As part of {{site.data.var.ece}} subscription, you have access to a shared Domain-Validated SSL (HTTPS) certificate that is issued by GlobalSign. This certificate is shared with other merchants and included for all Cloud accounts. If you want to deploy an Extended Validation SSL (not-shared) certificate for your company, this option can be purchased when you first sign-up with Magento Commerce. If you need to purchase this option, contact your account representative.

## Why test fully in Integration and Staging? {#whytest}

We strongly recommend testing in these environments due to the complexity of your custom code, themes, Magento extensions, 3rd party integrations all working together to provide a single or multiple stores. Every deployment can differ between merchants. The following are common issues you can find early and solve before touching Production:

* Staging supports all Production services, features, database data, technology stack, architecture, and more. It mirrors Production, which means if errors occur in Staging, you have a **warning before it occurs in Production**.
* Extensions may need to be installed and configured in a specific order. Some extensions touch similar pieces of code in the back and frontend, sometimes clashing and causing errors.
* Extensions typically are heavily tested in [Developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html), not Production mode. When you move to Staging and use Production mode, you may find error and surprises between extensions, your custom code, and Magento.
* Configurations and code may work great in your developer Integration environments and run into issues in Staging and Production. Working in your local does not confirm it works perfectly in production.
* Integration environments do not have all the incredible services available in Staging and Production, like Fastly, New Relic, and Blackfire.
* [Fully test]({{ page.baseurl }}/cloud/live/stage-prod-test.html#loadtest) your site with a variety of tools in Staging for load, stress, performance, and site assets
* Integration environments may only have databases populated with test data, not matching a production-like environment

## Set up Magento Security Scan Tool {#security-scan}

The Magento Security Scan Tool enables you to regularly monitor your store websites and receive updates for known security risks, malware, and out of date software. This is a free service available for all implementations and versions of {{site.data.var.ece}}. You access the tool through your [Magento Marketplace account](https://account.magento.com/customer/account/login).

* Monitor your sites security status and applied security updates
* Receive security updates and site specific notifications

For detailed instructions to set up and perform scans, see the [Magento User Guide](http://docs.magento.com/m2/ee/user_guide/magento/security-scan.html). Typically, you want to start using this tool as you enter UAT testing.

Each site to be scanned must be registered through Magento Security Scan tab. This registration process includes acceptance of Magento’s disclaimer prior to scanning. You control both scan scheduling and the authorization of personnel to be notified when each scan is completed. Scans can be scheduled for either a specific, recurring date and time or on-demand as required.

To scan your site:

1. Access your [Magento Marketplace account](https://account.magento.com/customer/account/login).
2. Click the Security Scan tab and select **Go to Security Scan**.
3. In the **Actions** column for the site, select Run Scan. A notification status displays the scheduled scan.

To review the report:

1. When the report completes, a notification displays.
2. In the site row, select the report you want to view from the **Reports** column. The order is latest to oldest.

The report lists issues including Failed Scans, Unidentified Results, and Successful Scans. Each entry provides detailed information for the scan, a list of issues to investigate, and actions to take. Some of these actions may require downloading and installing security patches. You can add those to a development branch on your local workstation.

Scan results include a general label that describes whether a site passed or failed plus detailed information about the checks performed. Failed indicates that the website contains a serious vulnerability, while unidentified suggests that a deeper review is required by your team or hosting provider to determine if further action is required. We also provide suggested remediation steps for each failed security test. Security scan results are protected and viewable only by the registered user, and notifications of scan completion are restricted to the users designated in the site registration process.

## Ready to go live {#ready}

You are ready to start go live steps:

* [Go live checklist]({{ page.baseurl }}/cloud/live/go-live-checklist.html)
* [Launch steps]({{ page.baseurl }}/cloud/live/launch-steps.html)
