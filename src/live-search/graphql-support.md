---
group: live-search
title: GraphQL Support
ee_only: True
redirect_from: 
  - /live-search/graphql-playground.html
  - /live-search/live-search-api-reference.html
---

GraphQL is a data query language that allows the caller to specify exactly what data to return. When a customer searches for products, the overhead of returning all possible product information and removing unnecessary data leads to longer processing times and unfavorable user experiences.

Live Search provides GraphQL functionality that is currently separate from the GraphQL support provided in {{site.data.var.ce}} and {{site.data.var.ee}}. Live Search GraphQL requires connecting to a different endpoint and specifying a different set of HTTP headers.

You can connect to the Live Search GraphQL endpoint to test sample queries using an Integrated Development Environment (IDE) in two ways:

-  Through the GraphQL Playground IDE embedded in the {{site.data.var.ee}} Admin. The embedded IDE manages the endpoint URL and required HTTP headers.

-  Through a standalone version of GraphQL Playground, or any other IDE, such as GraphiQL or Postman. In these applications you must specify the endpoint URL and provide a set of HTTP headers for each call.

Go to the [GraphQL Developer Guide]({{ site.baseurl }}{{ site.gdeurl }}/graphql/index.html) for general information about {{site.data.var.ee}} GraphQL.

## Run queries using the embedded GraphQL Playground

{:.bs-callout-info}
You can run only queries that are specific to Live Search in the embedded GraphQL Playground IDE. As a starting point, copy code examples from the [attributeMetadata query]({{ page.baseurl }}/live-search/attribute-metadata.html) and [productSearch query]({{ page.baseurl }}/live-search/product-search.html) topics.

1. In the Admin, go to **Marketing** > SEO & Search > **Live Search**.
1. For multiple stores, set **Scope** to the store view where the settings apply.
1. Click the **GraphQL** tab.
1. Enter the query code.
1. Click **Play**.

   ![graphQL example]({{ page.baseurl }}/live-search/images/graphql-example.png)
   _GraphQL - example product query_

## Run queries on a standalone GraphQL browser {#headers-list}

1. Set the GraphQL endpoint to `https://commerce.adobe.io/search/graphql`.

1. Add the following HTTP headers to all Live Search GraphQL calls:

   Header name| Header value | Description
   --- | --- | ---
   Magento-Environment-Id | This value is displayed at **Stores** > **Configuration** > **Services** > **Magento Services** > **SaaS Environment** or can be obtained by running the `bin/magento config:show services_connector/services_id/environment_id` command.
   Magento-Website-Code | The code assigned to the website associated with the active store view. For example, `base`.
   Magento-Store-Code | The code assigned to the store associated with the active store view. For example, `main_website_store`.
   Magento-Store-View-Code | The code assigned to the active store view. For example, `default`.
   X-Api-Key | This value must be set to `search_gql`

1. Enter the query code.

1. Run the the query.

## Error Codes

The Live Search queries can return the following error codes when a query encounters an error.

|**Error Code**|**Description**|
|---|---|
|1000 |Catches any other error that is not recognized by the service.|
|1001 |`index_not_found_exception`<br />Live Search exception message.|
|1002 |`search_phase_execution_exception`<br />Live Search exception message.|
|1003 |`mapper_parsing_exception`<br />Live Search exception message.|
|1004 |`invalid_argument_exception`<br /> The request has an invalid argument.|
