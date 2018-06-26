---
group: b2b
subgroup: 10_REST
title: Assign categories and products to a shared catalog
menu_title: Assign categories and products
menu_order: 23
version: 2.2
ee_only: True
level3_menu_node: level3child
level3_subgroup: shared
github_link: b2b/shared-cat-product-assign.md
functional_areas:
  - B2B
  - Catalog
  - Integration
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

The following example adds the Luma Gear category (`id=3`) as well as its subcategories (`id=4,5,6`) to a custom shared catalog.

**Sample usage**

`POST /V1/sharedCatalog/2/assignCategories`

**Payload**

{% highlight json %}
{
  "categories": [
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

`POST /V1/sharedCatalog/2/unassignCategories`

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

`GET  /V1/sharedCatalog/2/categories`

**Payload**

Not applicable

**Response**

{% highlight json %}
[
  3,
  4,
  5,
  6
]
{% endhighlight %}

## Assign products

The `sharedCatalogProductManagementV1` service is based on `catalogProductManagementV1`. To return a list of products defined within a category, call `GET /V1/categories/:categoryId/products`.

**Service name**

`sharedCatalogProductManagementV1 `

**REST endpoints**

{% highlight json %}
POST  /V1/sharedCatalog/:id/assignProducts
POST  /V1/sharedCatalog/:id/unassignProducts
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

The following example adds two products each in the Bags, Fitness Equipment, and Watches categories to a custom shared catalog. The specified products do not have to be in the same category.

**Sample usage**

`POST /V1/sharedCatalog/2/assignProducts`

**Payload**

{% highlight json %}
{
	"products": [
    	{
        	"sku": "24-MB01"
    	},
    	{
        	"sku": "24-MB04"
    	},
    	{
        	"sku": "24-UG06"
    	},
    	{
        	"sku": "24-UG07"
    	},
    	{
        	"sku": "24-MG04"
    	},
    	{
        	"sku": "24-MG01"
    	}
	]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

### Unassign products from the shared catalog

Unassigning a product does not remove it from its category or categories.

**Sample usage**

`POST /V1/sharedCatalog/2/unassignProducts`

**Payload**
{% highlight json %}
{
  "products": [
  	{
  		"sku": "24-MG01"
  	}
  ]
}
{% endhighlight %}

**Response**

`true`, indicating the operation was successful

### List the shared catalog categories

The `GET` call returns an array of SKUs.

**Sample Usage**

`GET  /V1/sharedCatalog/2/products`

**Payload**

Not applicable

**Response**

{% highlight json %}
[
    "24-MB01",
    "24-MB04",
    "24-UG06",
    "24-UG07",
    "24-MG04"
]
{% endhighlight %}

## Related information

* [Integrate with the SharedCatalog module]({{ page.baseurl }}/b2b/shared-catalog.html)
* [Manage shared catalogs]({{ page.baseurl }}/b2b/shared-cat-manage.html)
* [Assign companies]({{ page.baseurl }}/b2b/shared-cat-company.html)
