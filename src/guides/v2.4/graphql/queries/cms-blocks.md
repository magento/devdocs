---
group: graphql
title: cmsBlocks query
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/cms-blocks/
layout: migrated
---

The `cmsBlocks` query returns information about blocks that were developed with the Magento Content Management System (CMS).

## Syntax

Return the contents of one or more CMS blocks:

`cmsBlocks(identifiers: [String]): CmsBlocks`

## Example usage

The following query returns information about the `login-data` block:

**Request:**

```graphql
{
  cmsBlocks(identifiers: "login-data") {
    items {
      identifier
      title
      content
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "cmsBlocks": {
      "items": [
        {
          "identifier": "login-data",
          "title": "Login Info Block",
          "content": "<div class=\"message info\" style=\"margin-top: 50px;\">\n    <p><strong>Try Demo Customer Access</strong></p>\n    <p><span style=\"display:inline-block; width: 80px; padding-right: 10px;\">Email:</span>roni_cost@example.com</p>\n    <p><span style=\"display:inline-block; width: 80px; padding-right: 10px;\">Password:</span>roni_cost3@example.com</p>\n</div>"
        }
      ]
    }
  }
}
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`id` | Int | Deprecated. Use `identifier` instead.
`identifiers` | [String] | An array containing a comma-separated list of block identifiers

## Output attributes

The `CmsBlocks` object contains an array of `items`, each of which can contain a `CmsBlock` object.

### CmsBlock attributes

{% include graphql/cms-block-object.md %}

## Errors

Error | Description
--- | ---
`The CMS block with the "XXXX" ID doesn't exist` | The specified CMS block ID is invalid.
`"identifiers" of CMS blocks should be specified"` | The `identifiers` array parameter is required for identifying the CMS blocks.
