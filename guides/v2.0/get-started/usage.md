---
layout: default
group: get-started
subgroup: C_REST
title: Usage notes
menu_title: Usage Notes
menu_order: 4

github_link: get-started/usage.md
---

<h2>searchCriteria </h2>

POST, PUT, and DELETE requests to the REST Web API require the service method parameters to be in the body of the request. For example, to create a Customer, you would specify a JSON array (or XML structure) in the body of the message.

For search APIs that invoke a `*Repository::getList(SearchCriteriaInterface *)` call, the searchCriteria must be specified in the URL of the GET request. The basic pattern for specifying the criteria is 

{% highlight html %}
`searchCriteria[filter_groups][<index>][filters][<index>][field=<field_name>]`
`searchCriteria[filter_groups][<index>][filters][<index>][value=<search_value>]`
`searchCriteria[filter_groups][<index>][filters][<index>][condition_type=<operator>]`
{% endhighlight %}

`condition_type` is optional if the operator is `eq` (equals).

For example, the following query finds all users whose first name starts with "Jo".

{% highlight html %}

`GET http://<magento_host>/rest/V1/customers/search?`

`searchCriteria[filterGroups][0][filters][0][field]=firstname&`
`searchCriteria[filterGroups][0][filters][0][value]=Jo%25&`
`searchCriteria[filterGroups][0][filters][0][condition_type]=like`

{% endhighlight %}

The system creates an array :

{% highlight PHP %}
<?php
searchCriteria => [
  'filterGroups' => [
    0 => [
      'filters' => [
         0 => [
           'field' => 'firstname',
           'value' => 'Jo%',
           'condition_type' => 'like'
         ]
      ]
    ]
  ] ?>
{% endhighlight %}

This example searches for products whose attributes are `size=Large` and `color=Red`.

{% highlight html %}

`GET http://<magento_host>/rest/V1/products?`
`searchCriteria[filter_groups][0][filters][0][field]=size&`
`searchCriteria[filter_groups][0][filters][0][value]=Large&`
`searchCriteria[filter_groups][0][filters][0][condition_type]=eq&`
`searchCriteria[filter_groups][0][filters][1][field]=color&`
`searchCriteria[filter_groups][0][filters][1][value]=Red&`
`searchCriteria[filter_groups][0][filters][1][condition_type]=eq`
{% endhighlight %}

{% highlight PHP %}
<?php
searchCriteria => [
  'filterGroups' => [
    0 => [
      'filters' => [
         0 => [
           'field' => 'size',
           'value' => 'Large',
           'condition_type' => 'eq'
         ]
         1 => [
           'color' => 'color',
           'value' => 'Red',
           'condition_type' => 'eq'
         ]
      ]
    ]
  ] ?>
{% endhighlight %}