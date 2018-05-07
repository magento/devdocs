---
layout: default
group: b2b
subgroup: 10_REST
title: Manage company objects
menu_title: Manage company objects
menu_order: 12
version: 2.2
ee_only: True
level3_menu_node: level3child
level3_subgroup: company
github_link: b2b/company-object.md
functional_areas:
  - B2B
  - Integration
---


## Manage company objects

This section describes the REST endpoints used to manage `Company` objects.

**Service Name**

`companyCompanyRepositoryV1`

**REST Endpoints**

{% highlight json %}
POST /V1/company/
PUT /V1/company/:companyId
GET /V1/company/:companyId
DELETE /V1/company/:companyId
GET /V1/company/
{% endhighlight %}

**CompanyInterface Parameters**

The following table lists the parameters defined in `CompanyInterface`.

<table>
<tr>
<th>Name</th><th>Description</th><th>Format</th><th>Requirements</th></tr>
<tr>
<td><code>id</code></td><td>System-generated company ID </td><td>integer </td><td>Required for updates and deletes. </td></tr>
<tr>
<td><code>status</code></td><td>0 - Pending approval<br>1 - Approved<br>2 - Rejected<br>3 - Blocked </td><td>integer </td><td>Optional </td></tr>
<tr>
<td><code>company_name </code></td><td>Company name </td><td>string </td><td>Required to create or update a company. </td></tr>
<tr>
<td><code>legal_name </code></td><td>Legal name </td><td>string </td><td>Optional </td></tr>
<tr>
<td><code>company_email </code></td><td>Official e-mail address of the company. It does not have to be unique. </td><td>string</td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>vat_tax_id </code></td><td>The company's Value Added Tax ID </td><td>string </td><td>Optional </td></tr>
<tr>
<td><code>reseller_id </code></td><td>Unique ID of the company reseller </td><td>string </td><td>Optional </td></tr>
<tr>
<td><code>comment </code></td><td>Additional details about the company</td><td>string</td><td>Optional </td></tr>
<tr>
<td><code>street</code></td><td>Street address where the company is registered. The array can contain one or two lines.</td><td>Array[string]</td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>city</code></td><td>The company's city </td><td>string </td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>country_id</code></td><td>The country where the company is registered.</td><td>string </td><td>Required to create or update a company. </td></tr>
<tr>
<td><code>region</code></td><td>State or province</td><td>string</td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>region_id</code></td><td>An ID assigned to a state or province</td><td>string </td><td>Optional</td></tr>
<tr>
<td><code>postcode</code></td><td>The company's ZIP or postal code</td><td>string </td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>telephone</code></td><td>The company contact's phone number</td><td>string</td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>customer_group_id </code></td><td>Defines the company's shared catalog. A value of `1` assigns the default shared catalog.</td><td>integer</td><td>Required to create or update a company.</td></tr>
<tr>
<td><code>sales_representative_id</code></td><td>User ID of the Sales Representative for the company</td><td>integer</td><td>Optional</td></tr>
<tr>
<td><code>reject_reason</code></td><td>Specifies why a company's request to be a B2B customer is rejected</td><td>string</td><td>Optional </td></tr>
<tr>
<td><code>rejected_at</code></td><td>A timestamp incdicating when the company was rejected.</td><td>string</td><td>Optional</td></tr>
<tr>
<td><code>super_user_id</code></td><td>The `customer_id` of the company administrator. When creating a company, the `customer_id` must already exist. </td><td>integer</td><td>Required to create or update a company.</td></tr>
</table>


### Create a company

The following example creates a company and assigns the default shared catalog (`customer_group_id`). The company admin (`super_user_id`) must be a previously-defined `customer_id`.

**Sample Usage**

`POST /V1/company/`

**Payload**

{% highlight json %}
{
  "company": {
    "company_name": "Test company",
    "company_email": "newemail@example.com",
    "street":[
    "100 Big Tree Avenue"
    ],
    "city": "San Francisco",
    "country_id": "US",
    "region": "CA",
    "region_id": "12",
    "postcode": "99999",
    "telephone": "4155551212",
    "super_user_id": 5,
    "customer_group_id": 1
  }
}

{% endhighlight %}

**Response**

{% highlight json %}
{
  "id": 2,
  "company_name": "Test company",
  "company_email": "newemail@example.com",
  "street": [
    "100 Big Tree Avenue"
  ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "customer_group_id": 1,
  "sales_representative_id": 1,
  "reject_reason": null,
  "rejected_at": null,
  "super_user_id": 5,
  "extension_attributes": {
    "quote_config": {
      "company_id": "2",
      "is_quote_enabled": false
    }
  }
}
{% endhighlight %}

### Update the company

The following call changes the company status to Rejected (`2`) and explains why.

**Sample Usage**

`PUT /V1/company/2`

**Payload**

{% highlight json %}
{
  "company": {
  	"id": 2,
  	"company_name": "Test company",
    "company_email": "newemail@example.com",
    "customer_group_id": 1,
        "street":[
    "100 Big Tree Avenue"
    ],
    "city": "San Francisco",
    "country_id": "US",
    "region": "CA",
    "region_id": "12",
    "postcode": "99999",
    "telephone": "4155551212",
    "super_user_id": 5,
    "status": 2,
    "reject_reason": "Failed background check."

  }
}
{% endhighlight %}

**Response**

{% highlight json %}
{
  "id": 2,
  "company_name": "Test company",
  "company_email": "newemail@example.com",
  "street": [
    "100 Big Tree Avenue"
  ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "customer_group_id": 1,
  "sales_representative_id": 1,
  "reject_reason": null,
  "rejected_at": null,
  "super_user_id": 5,
  "extension_attributes": {
    "quote_config": {
      "company_id": "2",
      "is_quote_enabled": true
    }
  }
}
{% endhighlight %}

### Return all information about a company

This call returns detailed information about the specified company.
**Sample Usage**

`GET /V1/company/2`

**Payload**

None

**Response**

{% highlight json %}
{
  "id": 2,
  "status": 0,
  "company_name": "Test company",
  "company_email": "newemail@example.com",
  "street": [
    "100 Big Tree Avenue"
  ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "customer_group_id": 1,
  "sales_representative_id": 1,
  "reject_reason": null,
  "rejected_at": null,
  "super_user_id": 5,
  "extension_attributes": {
    "quote_config": {
      "company_id": "2",
      "is_quote_enabled": true
    }
  }
}
{% endhighlight %}


### Delete a company

When you delete a company, Magento assigns the "Inactive" status to all company members. The system also removes company ID from the customer profile of all company members.

**Sample Usage**

`DELETE /V1/company/2`

**Payload**

None

**Response**

`true`, indicating the request was successful

### Search for companies

The following call returns all companies that are located in California (`region_id` = `12`)

See [Search using REST APIs]({{page.baseurl}}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage**

`GET /V1/company?searchCriteria[filter_groups][0][filters][0][field]=region_id&searchCriteria[filter_groups][0][filters][0][value]=12&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

**Payload**

None

**Response**

{% collapsible Show code sample %}
{% highlight json %}
{
    "items": [
        {
            "id": 2,
            "status": 1,
            "company_name": "Test Company",
            "legal_name": "Test Company",
            "company_email": "newemail@example.com",
            "street": [
                "100 Big Tree Avenue"
            ],
            "city": "San Francisco",
            "country_id": "US",
            "region": "California",
            "region_id": "12",
            "postcode": "99999",
            "telephone": "4155551212",
            "customer_group_id": 1,
            "sales_representative_id": 1,
            "reject_reason": null,
            "rejected_at": null,
            "super_user_id": 3,
            "extension_attributes": {
                "applicable_payment_method": 0,
                "available_payment_methods": "banktransfer,cashondelivery,checkmo,payflowpro,payflow_advanced,payflow_link,braintree,cybersource,eway,authorizenet_directpost,free,braintree_paypal,paypal_billing_agreement,payflow_express_bml,paypal_express_bml,paypal_express,payflow_express,hosted_pro,worldpay,companycredit,purchaseorder,braintree_paypal_vault,braintree_cc_vault,payflowpro_cc_vault",
                "use_config_settings": 1,
                "quote_config": {
                    "is_quote_enabled": true
                }
            }
        },
        {
            "id": 3,
            "status": 1,
            "company_name": "Widgets, Inc",
            "legal_name": "Widgets, Inc",
            "company_email": "widgetsinc@example.com",
            "street": [
                "8383 Wilshire Blvd",
                "Ste 1500"
            ],
            "city": "Beverly Hills",
            "country_id": "US",
            "region": "California",
            "region_id": "12",
            "postcode": "90211",
            "telephone": "(310) 555-0000",
            "customer_group_id": 1,
            "sales_representative_id": 1,
            "reject_reason": null,
            "rejected_at": null,
            "super_user_id": 10,
            "extension_attributes": {
                "applicable_payment_method": 0,
                "available_payment_methods": "banktransfer,cashondelivery,checkmo,payflowpro,payflow_advanced,payflow_link,braintree,cybersource,eway,authorizenet_directpost,free,braintree_paypal,paypal_billing_agreement,payflow_express_bml,paypal_express_bml,paypal_express,payflow_express,hosted_pro,worldpay,companycredit,purchaseorder,braintree_paypal_vault,braintree_cc_vault,payflowpro_cc_vault",
                "use_config_settings": 1,
                "quote_config": {
                    "is_quote_enabled": true
                }
            }
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "region_id",
                        "value": "12",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 2
}
{% endhighlight %}
{% endcollapsible %}

## Related information

* [Integrate with the Company module]({{page.baseurl}}/b2b/company.html)
* [Manage company users]({{page.baseurl}}/b2b/company-users.html)
* [Manage company roles]({{page.baseurl}}/b2b/roles.html)
* [Manage company structures]({{page.baseurl}}/b2b/company-structures.html)
