---
group: advanced-reporting
title: Advanced Reporting
functional_areas:
    - Reports
---

[Advanced reporting functionality]{:target="_blank"} is provided through integration of a Magento instance with the [Magento Business Intelligence]{:target="_blank"} (MBI).
Magento collects data and sends this information to the MBI for analytics.

## Prerequisites

1. The website must run on a public web server.
2. The domain must have a valid security (SSL) certificate.
3. Magento must have been installed or upgraded successfully without error.
4. In the Magento configuration, the [Base URL (Secure) setting][base url]{:target="_blank"} for the store view must point to the secure URL. For example https://yourdomain.com.
5. In the Magento configuration, **Use Secure URLs on Storefront**, **and Use Secure URLs in Admin** must be set to **Yes**.
6. Make sure that [Magento crontab]{:target="_blank"} is created and cron jobs are running on the installed server.

The merchant can now click on the Go to Advanced Reporting button on the Admin dashboard to launch the advanced reporting features at `https://advancedreporting.rjmetrics.com/report`.

{: .bs-callout-info }
The first synchronization of a Magento instance and the MBI can take up to a day to complete after the successful subscription.

## Recommendations

To avoid system overload during its prime time, you can set the preferable time of a day for a data collection.

## Extensibility

Though the Analytics module provides API, it is used specifically to interchange data with the MBI. We do not recommend to extend the advanced reporting functionality in this version.

## Related topics

[Magento modules that implement the functionality][modules]{:target="_blank"}

[Data collection configuration and settings][collection]{:target="_blank"}

<!-- LINK DEFINITIONS -->

[modules]: modules.html
[collection]: data-collection.html

[Advanced reporting functionality]: http://docs.magento.com/m2/ce/user_guide/reports/advanced-reporting.html
[base url]: http://docs.magento.com/m2/ce/user_guide/stores/store-urls.html
[Magento Business Intelligence]: https://magento.com/products/business-intelligence
[Magento crontab]: {{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-cron.html
