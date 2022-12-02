---
group: cloud-guide
title: Variables
functional_areas:
  - Cloud
  - Setup
  - Application
redirect_to: https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/configure/app/properties/variables-property.html
layout: migrated
---
The following environment variables are included in the `.magento.app.yaml` file.

Required for {{site.data.var.ee}} 2.2.x to 2.3.x:

```yaml
variables:
    env:
        CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
        CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL: 'Magento_Enterprise_Cloud_BT'
        CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
```

For {{site.data.var.ee}} 2.4.x, set the following variables:

```yaml
variables:
    env:
        CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
        CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
```