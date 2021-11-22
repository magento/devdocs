---
group: release-notes
title: Payment Services Release Notes
---

These release notes describe the initial release of Payment Services and include:

*  {:.new}New features
*  {:.fix}Fixes and improvements
*  {:.bug}Known issues

### v1.0.0

*  {:.new}<!-- Issue PAY-2127 -->General availability release!. [Payment Services](https://marketplace.magento.com/) is now compatible with Adobe Commerce versions 2.4.0 to 2.4.3-p1.

*  {:.new}<!-- Issue PAY-124 -->The Payment Services extension for Adobe Commerce and Magento Open Source can be installed either for [{{site.data.var.ece}}]({{site.base_url}}payment-services/install-payments.html#magento-commerce-cloud) or [On-premises]({{site.base_url}}payment-services/install-payments.html#on-premises) instances. These methods require the use of a Command Line Interface.

*  {:.new}<!-- Issue PAY-1986 -->A [sandbox account]({{site.user_guide_url}}/payment-services/onboard-payments.html#enable-sandbox-testing) that allows merchants to use the extension in test mode.

*  {:.new}<!-- Issue PAY-666 -->Merchants can [configure Payment Services]({{site.user_guide_url}}/payment-services/configure-payments.html) extension with basic payment behaviours (i.e. Auth-capture together, switch between sandbox or production environments).

*  {:.new}<!-- Issue PAY-780 -->[Create an entire order]({{site.user_guide_url}}/payment-services/order-admin-payments.html) in Admin using Payment Services.

*  {:.new}<!-- Issue PAY-1856 -->Payment Services offer merchants comprehensive [reporting]({{site.user_guide_url}}/payment-services/financial-reporting.html) so that you can get a clear view of your store orders and payments.

*  {:.new}<!-- Issue PAY-311 -->Tiered pricing (based on TPV) adapted to any merchant.

*  {:.bug}<!-- Issue PAY-1443 -->It is possible to customise the look and feel of PayPal buttons and the CC fields for the [Payment Services]({{site.base_url}}payment-services/customize-buttons-messaging.html) extension.

*  {:.bug}<!-- Issue PAY-2473 -->Using [incorrect Composer keys](https://support.magento.com/hc/en-us/articles/4406603542541) during installation of Payment Services extension.

*  {:.bug}<!-- Issue PAY-2474 -->Payment Services [reports](https://support.magento.com/hc/en-us/articles/4406114741517) for Payout and Order payment status may not synchronize immediately.

*  {:.bug}<!-- Issue PAY-2475 -->[PayPal sandbox account](https://support.magento.com/hc/en-us/articles/4406954952461) for Payment Services cannot be verified.

### Documentation

To learn more about Payment Services and Payment Services development:

*  [{{site.data.var.ee}} Developer Documentation]({{page.baseurl}}/payment-services/index.html).
*  [{{site.data.var.ee}} User Guide](https://docs.magento.com/user-guide/payment-services/index.html).
