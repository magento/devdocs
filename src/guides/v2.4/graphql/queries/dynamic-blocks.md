---
group: graphql
title: dynamicBlocks query
---

The `dynamicBlocks` query returns a list of dynamic blocks that have been placed in a Dynamic Blocks Rotator inline widget and meet the specified criteria.

{:.bs-callout-info}
The Banner functionality was removed from Magento 2.4.0 and replaced with dynamic blocks.

When a [Dynamic Blocks Rotator inline widget is created]({{ site.user_guide_url }}/cms/dynamic-blocks-rotate.html), the Magento administrator can select the following options:

*  **Specified Dynamic Blocks**
*  **Cart Price Rule Related**
*  **Catalog Price Rule Related**

Widgets defined with the **Specified Dynamic Blocks** option affect CMS page rendering. The other two options are used for rendering cart, product, and catalog pages and are not applicable for PWA applications. Therefore, in most cases for a CMS page, your query should assign the value of `SPECIFIED` to the `type` input attribute.

{:.bs-callout-info}
Magento GraphQL supports the **Display all instead of rotating** rotation mode only.

## Syntax

```graphql
dynamic_blocks(
    input: DynamicBlocksFilterInput
    pageSize: Int
    currentPage: Int
    ): DynamicBlocks!
```

## Example usage

The following query returns all dynamic blocks of type `SPECIFIED`. The returned item is a dynamic block containing only text. The second item contains a PNG file.

**Request:**

```graphql
{
  dynamicBlocks(input:
  {
    type: SPECIFIED
  })
  {
    items {
      uid
      content {
        html
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
```

**Response:**

{% raw %}
```json
{
  "data": {
    "dynamicBlocks": {
      "items": [
        {
          "uid": "MQ==",
          "content": {
            "html": "<h2><strong>SAVE 20%</strong></h2>\r\n<p>(some restrictions apply)</p>\r\n<p>&nbsp;</p>"
          }
        },
        {
          "uid": "Mg==",
          "content": {
            "html": "<p><img src=\"{{media url=&quot;wysiwyg/save20.png&quot;}}\" alt=\"save 20% red\"></p>"
          }
        }
      ],
      "page_info": {
        "current_page": 1,
        "page_size": 20,
        "total_pages": 1
      },
      "total_count": 2
    }
  }
}
```
{% endraw %}

**cmsPage query response:**

The following code illustrates the definition of the dynamic block with the `uid` of `MQ==`, as returned by the [`cmsPage` query]({{page.baseurl}}/graphql/queries/cms-page.html). The response has been reformatted for readability.

```html
<div class=\"widget block block-banners\"
  data-bind=\"scope: 'banner'\"
  data-banner-id=\"833e4819d6c46ab41e9910f17dc04f72329cb84f1b0dc3aa76d43bcb11d605a6\"
  data-types=\"\"
  data-display-mode=\"fixed\"
  data-ids=\"1\"
  data-rotate=\"\"
  data-store-id=\"1\"
  data-uids=\"MQ==\">\n

  <ul class=\"banner-items\"
    data-bind=\"afterRender: registerBanner\">\n

    <!-- ko foreach: getItems833e4819d6c46ab41e9910f17dc04f72329cb84f1b0dc3aa76d43bcb11d605a6() -->\n

    <li class=\"banner-item\"
      data-bind=\"attr: {'data-banner-id': $data.bannerId}\">\n

      <div class=\"banner-item-content\" data-bind=\"bindHtml: $data.html\"></div>\n
    </li>\n

    <!-- /ko -->\n
  </ul>\n
</div>
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`dynamic_block_uids` | [ID] | An array of dynamic block UIDs to filter on
`locations` | [DynamicBlockLocationEnum] | An array indicating the locations the dynamic block can be placed. The possible values are CONTENT, HEADER, FOOTER, LEFT, and RIGHT. If this attribute is not specified, the query returns all locations
`type` | DynamicBlockTypeEnum! | A value indicating the type of dynamic block to filter on. The possible values are CART_PRICE_RULE_RELATED, CATALOG_PRICE_RULE_RELATED, and SPECIFIED

## Output attributes

The `DynamicBlocks` output object contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
`items` | [DynamicBlock]! | An array containing individual dynamic blocks
`page_info` | SearchResultPageInfo | Metadata for pagination rendering
`total_count` | Int! | The number of returned dynamic blocks

### DynamicBlock attributes

The `DynamicBlock` object contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
`content` | ComplexTextValue! | Contains the renderable HTML code of the dynamic block
`uid` | ID! | The unique ID of a DynamicBlock object

### ComplexTextValue attributes

The `DynamicBlock` object contains the following attributes.

Attribute | Data type | Description
--- | --- | ---
`html` | String! | The HTML content of the dynamic block
