---
layout: default
group: b2b
subgroup: 10_REST
title: Assign categories and products to a shared catalog
menu_title: Assign categories and products
menu_order: 23
version: 2.2
ee_only: true
level3_menu_node: level3child
level3_subgroup: shared
github_link: b2b/shared-cat-product-assign.md
---

The shared catalog configuration process includes assigning categories and products to the shared catalog. To assign these items to a shared catalog, the following conditions must be met:

* The category structure must already be defined. You cannot create a new category to be included in a shared catalog. Use endpoints like `POST /V1/categories` to create a new category.

* Each category must already be populated with products. You cannot add a new product to a category to be included in a shared catalog. Use endpoints like `POST /V1/products` to create a new product.

## Assign categories

The `sharedCatalogCategoryManagementV1` service is based on `catalogCategoryManagementV1`. To view a store's category structure, call `GET /V1/categories`.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Products that are defined within a category are not included when you assign a category to a shared catalog. You must add products separately.
</div>


**Service name**

`sharedCatalogCategoryManagementV1`

**REST Endpoints**

{% highlight json %}
POST /V1/sharedCatalog/:id/assignCategories
POST /V1/sharedCatalog/:id/unassignCategories
GET  /V1/sharedCatalog/:id/categories
{% endhighlight %}

**Category parameters**

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Although you can specify other parameters defined within a `categories` object, the `id` is the only one used to assign or unassign a category to a shared catalog.
</div>

Name | Description | Format | Requirements
--- | --- | --- | ---
`id` | The category ID number | integer | Required to assign or unassign a category

### Assign categories to shared catalog

In this example, the store has the following category structure:

{% highlight xml %}
Root catalog (id 1)
|-- Default category (id 2)
|   |-- Category 1 (id 3)
|   |-- Cateogry 2 (id 4)
|   |-- Cateogry 3 (id 5)
|   |-- Cateogry 4 (id 6)
|   |-- Cateogry 5 (id 7)
|   |-- Cateogry 6 (id 8)

{% endhighlight %}

**Sample usage**

`POST /V1/sharedCatalog/8/assignCategories`

**Payload**

{% highlight json %}
{
  "categories": [
    {
      "id": 1
    },
    {
      "id": 2
    },
    {
      "id": 3
    },
    {
      "id": 4
    },
    {
      "id": 5
    },
    {
      "id": 6
    },
    {
      "id": 7
    },
    {
      "id": 8
    }
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

### Unassign categories from a shared catalog

When you unassign a category from a shared catalog, Magento also removes its products from the shared catalog. If a product is assigned to multiple categories, then Magento removes the product from the unassigned category only.

The following example removes two categories from the shared catalog.

**Sample usage**

`POST /V1/sharedCatalog/8/unassignCategories`

**Payload**

{% highlight json %}
{
  "categories": [
    {
      "id": 7
    },

    {
      "id": 8
    }
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

### List the shared catalog categories

The `GET` call returns an array of catalog IDs.

**Sample Usage**

`GET  /V1/sharedCatalog/8/categories`

**Payload**

Not applicable

**Response**

{% highlight json %}
[
  1,
  2,
  3,
  4,
  5,
  6
]
{% endhighlight %}

## Assign products

The `sharedCatalogProductManagementV1` service is based on `catalogProductManagementV1`. To return of products defined within a category, call `GET /V1/categories/:categoryId/products`.

**Service name**

`sharedCatalogProductManagementV1 `

**REST endpoints**

{% highlight json %}
POST   /V1/sharedCatalog/:id/assignProducts
POST   /V1/sharedCatalog/:id/unassignProducts
GET  /V1/sharedCatalog/:id/products
{% endhighlight %}

**Category parameters**

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Although you can specify other parameters defined within a `products` object, the `sku` is the only one used to assign or unassign a product to a shared catalog.
</div>

Name | Description | Format | Requirements
--- | --- | --- | ---
`sku` | The product's SKU identifier | string | Required to assign or unassign a product to a shared catalog

### Assign products to shared catalog

The following example adds four products to the shared catalog. The specified products can be in any category.

**Sample usage**

`POST /V1/sharedCatalog/8/assignProducts`

**Payload**

{% highlight json %}
{
  "products": [
  	{
  		"sku": "product_dynamic_2"
  	},
	  {
  		"sku": "product_dynamic_3"
	  },
	  {
  		"sku": "product_dynamic_4"
	  },
	 {
  		"sku": "product_dynamic_5"
	 }
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

### Unassign products from the shared catalog

Unassigning a product does not remove it from its category or categories.

**Sample usage**

`POST /V1/sharedCatalog/8/unassignProducts`

**Payload**
{% highlight json %}
{
  "products": [
  	{
  		"sku": "product_dynamic_2"
  	}
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

### List the shared catalog categories

The `GET` call returns an array of SKUs.

**Sample Usage**

`GET  /V1/sharedCatalog/8/products`

**Payload**

Not applicable

**Response**

{% highlight json %}
[
  "product_dynamic_3",
  "product_dynamic_4",
  "product_dynamic_5"
]
{% endhighlight %}

## Related information

* [Integrate with the SharedCatalog module]({{page.baseurl}}b2b/shared-catalog.html)
* [Manage shared catalogs]({{page.baseurl}}b2b/shared-cat-manage.html)
* [Assign companies]({{page.baseurl}}b2b/shared-cat-company.html)
