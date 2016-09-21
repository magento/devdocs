---
layout: default
group: get-started
subgroup: Web API request samples
title: Filtering products by categories
menu_title: Filtering products by categories
menu_order: 9
version: 2.0
github_link: get-started/product-category-filter.md
redirect_from: /guides/v2.0/get-started/product-categry-filter.html
---
## Overview

The one of the popular product filters is categories. However in product interface there is no category field. 
So what is the proper way to retrieve all product information, using filter by desired field?
The on way to do this is to filter by _category_id_ field. 

### Common information 

For both API`s we will use Product Repository Service. And call method getList:

{% highlight PHP %}
\Magento\Catalog\Api\ProductRepositoryInterface::getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)
{% endhighlight %}

Search Criteria pseudo code will be looks like this: 

{% highlight PHP %}
<?php

searchCriteria => [
  'filterGroups' => [
    0 => [
      'filters' => [
         0 => [
           'field' => 'category_id',
           'value' => '2',
         ]
      ]
    ]
  ]

{% endhighlight %}


### Search Criteria

There are some differences building search criteria in REST and SOAP APIs. 

#### REST

Lets assume we want to filter by category with id - 2: 
<code>http://magento.host/rest/default/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=2</code>

If we want to filter using 2 or more categories we need to add them to url as one more filter. For category_ids (2, 3): 
<code>http://magento.host/rest/default/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=2&searchCriteria[filter_groups][0][filters][1][field]=category_id&searchCriteria[filter_groups][0][filters][1][value]=3</code>


#### SOAP

In Soap we need to add filters by way, represented below: 

{% highlight PHP %}
<?php
[
    'searchCriteria' => [
        'filterGroups' => [
            [
                'filters' => [
                    [
                        'field' => 'category_id',
                        'value' => 2
                    ],
                    [
                        'field' => 'category_id',
                        'value' => 3
                    ]

                ]
            ]
        ]
    ]
]


{% endhighlight %}

