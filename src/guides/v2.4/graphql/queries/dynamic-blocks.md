---
group: graphql
title: dynamicBlocks query
---

Dynamic blocks can be inserted in CMS pages and blocks using widgets. The `dynamicBlocks` query returns the content of dynamic blocks that implement the Dynamic Blocks Rotator widget.

The `type` input attribute is required and indicates the type of dynamic block that can be displayed in the widget. The attribute can have one of the following values:

Value | Description
--- | ---
CART_PRICE_RULE_RELATED | Includes only dynamic blocks that are associated with a cart price rule
CATALOG_PRICE_RULE_RELATED | Includes only dynamic blocks that are associated with a catalog price rule.
SPECIFIED | Includes only specific dynamic blocks

## Syntax

```graphql
dynamic_blocks(
    input: DynamicBlocksFilterInput
    pageSize: Int
    currentPage: Int
    ): DynamicBlocks!
```

## Example usage

The following query returns all catalog price rule dynamic blocks that can be placed in a header or footer.

**Request:**

```graphql
{
  dynamicBlocks(input: 
  {
    type: CATALOG_PRICE_RULE_RELATED
    locations: [
      HEADER
      FOOTER
    ]
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

```json
{
  "data": {
    "dynamicBlocks": {
      "items": [
        {
          "uid": "MQ==",
          "content": {
            "html": "<h3>Save 10% on all Gear</h3>\r\n<p>(Some restrictions may apply)</p>"
          }
        }
      ],
      "page_info": {
        "current_page": 1,
        "page_size": 20,
        "total_pages": 1
      },
      "total_count": 1
    }
  }
}
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`dynamic_block_uids` | [ID] | An array of dynamic block UIDs to filter on
`locations` | [DynamicBlockLocationEnum] |An array indicating the locations the dynamic block can be placed. The possible values are CONTENT, HEADER, FOOTER, LEFT, and RIGHT
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
