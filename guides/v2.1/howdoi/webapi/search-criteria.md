---
layout: default
group: howdoi
subgroup: Web APIs
title: Search using REST APIs
menu_title: Search using REST
menu_order: 2
github_link: howdoi/webapi/search-criteria.md


---

<h2>Specifying searchCriteria </h2>

POST, PUT, and DELETE requests to the REST Web API require the service method parameters to be in the body of the request. For example, to create a Customer, you would specify a JSON array (or XML structure) in the body of the message.

For search APIs that invoke a `*Repository::getList(SearchCriteriaInterface *)` call, the searchCriteria must be specified in the URL of the GET request. The basic pattern for specifying the criteria is

{% highlight html %}
searchCriteria[filter_groups][<index>][filters][<index>][field=<field_name>]
searchCriteria[filter_groups][<index>][filters][<index>][value=<search_value>]
searchCriteria[filter_groups][<index>][filters][<index>][condition_type=<operator>]
{% endhighlight %}

where `condition_type` is one of the following values:

Condition | Notes
--- | ---
`eq` | Equals
`finset` | Value in set
`from` | Must be used with `to`
`gt` | Greater than
`gteq` |  Greater than or equal
`in` | In
`like` | Like
`lt` | Less than
`lteq` | Less than or equal
`moreq` | More or equal
`neq` | Not equal
`nin` | Not in
`notnull` | Not null
`null` | Null
`to` | Must be used with `from`

`condition_type` is optional if the operator is `eq`.

For example, the following query finds all users whose first name starts with "Jo".

{% highlight html %}

GET http://<magento_host>/rest/V1/customers/search?
searchCriteria[filter_groups][0][filters][0][field]=firstname&
searchCriteria[filter_groups][0][filters][0][value]=Jo%25&
searchCriteria[filter_groups][0][filters][0][condition_type]=like

{% endhighlight %}

The system creates an array, as shown in the following pseudo-code.

<pre>
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
  ]
</pre>

The following example searches for products whose attributes are `size=Large` and `color=Red`. The generated array follows.

{% highlight html %}

GET http://<magento_host>/rest/V1/products?`
searchCriteria[filter_groups][0][filters][0][field]=size&
searchCriteria[filter_groups][0][filters][0][value]=Large&
searchCriteria[filter_groups][0][filters][0][condition_type]=eq&
searchCriteria[filter_groups][0][filters][1][field]=color&
searchCriteria[filter_groups][0][filters][1][value]=Red&
searchCriteria[filter_groups][0][filters][1][condition_type]=eq
{% endhighlight %}

<pre>
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
  ]
</pre>
