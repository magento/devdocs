---
group: payments-integrations
title: Prevent braintree card attack
contributor_name: Ziffity
contributor_link: https://www.ziffity.com/
--- 

Reference to [Carding Attack #28614](https://github.com/magento/magento2/issues/28614) Gene Commerce has come up with latest version [GitHub](https://github.com/genecommerce/module-braintree-magento2/releases/tag/4.0.7)

### Requirements

**Magento** | **PHP** | **Braintree**
--- | --- | ---
`2.3,2.4` | `> 7.x` | `>= 4.0.7`

### How to prevent a Braintree card bot attack

1. The bot attacker will create the order several times using the REST endpoint `POST <host>/rest/<store_code>/V1/guest-carts/<cart-id>/payment-information`.

1. To avoid the card bot attack, it is necessary to enable the default `Magento` & `Braintree` reCaptcha configuration from admin.

### How to enable the configuration

1. Log in to [Admin](https://glossary.magento.com/admin).
1. These configuration values are available in the `Magento` Admin.

   *  Go to *Stores* > *Settings* > *Configuration* > *Security* > *Google reCaptcha* > *Frontend* > *Enable* > *Yes*.
   *  Go to *Stores* > *Settings* > *Configuration* > *Security* > *Google reCaptcha* > *General* > *reCaptcha type* > *Invisible reCaptcha v2*
   *  Go to *Stores* > *Settings* > *Configuration* > *Sales* > *Payment Methods* > *Recommended Solutions* > *Braintree Payments* > *Configure* > *Advanced Braintree Settings* > *Enable ReCaptcha* > *Yes*.

{:.bs-callout-info}
For more information :- [reCaptcha Configuration](https://docs.magento.com/user-guide/stores/security-google-recaptcha.html)

### Send payment information using REST endpoints

**Endpoint:**

```http
POST <host>/rest/<store_code>/V1/guest-carts/<cart-id>/payment-information
```

**Headers:**

`Content-Type: application/json`

**Payload:**

{% collapsible Show request %}

```json
{
   "cartId":"xxxxxxxxxxxxxxxxxxxxxxxxx",
   "billingAddress":{
      "email":"xxxx@gmail.com",
      "countryId":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "regionId":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "regionCode":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "region":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "street":[
         "xxxxxxxxxxxxxxxxxxxxxxxxx"
      ],
      "company":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "telephone":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "postcode":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "city":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "firstname":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "lastname":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "region_id":"",
      "region_code":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "country_id":"xxxxxxxxxxxxxxxxxxxxxxxxx",
      "extension_attributes":{
         "advanced_conditions":{
            "payment_method":null,
            "shipping_address_line":[
               "xxxxxxxxxxxxxxxxxxxxxxxxx"
            ],
            "city":"xxxxxxxxxxxxxxxxxxxxxxxxx",
            "billing_address_country":"xxxxxxxxxxxxxxxxxxxxxxxxx",
            "currency":"xxxxxxxxxxxxxxxxxxxxxxxxx"
         }
      },
      "saveInAddressBook":null
   },
   "paymentMethod":{
      "method":"braintree",
      "po_number":null,
      "additional_data":{
         "cc_cid":"xxxxxxxxxxxxxxxxxxxxxxxxx",
         "cc_type":"xxxxxxxxxxxxxxxxxxxxxxxxx",
         "cc_exp_year":"xxxxxxxxxxxxxxxxxxxxxxxxx",
         "cc_exp_month":"xxxxxxxxxxxxxxxxxxxxxxxxx",
         "cc_number":"xxxxxxxxxxxxxxxxxxxxxxxxx"
      }
   },
   "email":"xxxx@gmail.com"
}
```

{% endcollapsible %}

**Response:**

{% collapsible Show response %}

```json
{
  "message": "Cannot resolve reCaptcha response."
}
```

{% endcollapsible %}

{:.bs-callout-info}
For more information :- [REST tutorials]({{ site.baseurl }}/guides/v2.3/rest/tutorials/index.html)