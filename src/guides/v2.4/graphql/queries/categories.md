---
group: graphql
title: categories query
---

The `categories` query 

## Syntax

```graphql
categories(
    filters: CategoryFilterInput
    pageSize: Int = 20
    currentPage: Int = 1
): CategoryResult
```

## Example usage

### Some

The following query 

**Request:**

```graphql

```

**Response:**

```json

```


## Input attributes

You must specify the `filters` attribute as input to your query.

Attribute | Data type | Description
--- | --- | ---
`filters` | CategoryFilterInput | Contains filter definitions
`pageSize` | Int | Specifies the maximum number of results to return at once. The default value is 20
`currentPage` | Int | Specifies which page of results to return. The default value is 1

### CategoryFilterInput object

{% include graphql/category-filter-input.md %}

## Output attributes {#Categories}

The query returns a `CategoryTree` object, which implements [`CategoryInterface`]({{page.baseurl}}/graphql/product/category-interface.html). The `CategoryTree` object can contain the following attribute and all attributes defined in `CategoryInterface`:

Attribute | Data type | Description
--- | --- | ---
`children` | `CategoryTree` | An array containing the next level of subcategories. By default, you can specify up to 10 levels of child categories
