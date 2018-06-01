---
layout: default
group: coding-standards
subgroup: Coding standards
title: Layout XML Coding Standards
menu_title: Layout XML Coding Standards
menu_order: 100
contributor_name: SwiftOtter Studios
contributor_link: https://swiftotter.com/
version: 2.1
github_link: coding-standards/layout-coding-standard.md
---

# Layout XML Coding Standard

### Name attribute

The `name` attribute should adhere to the guidelines listed below. The `name` attribute should:

- Should explain element's purpose rather than its position on the page .
- Be unique to the module that declares it by prepending it with module's namespace as `<vendor>.<module>`
- Have segments separated by a `.` (period).
- Be all lowercase.
- Never use `_` (underscores).

*Example:*

```xml
<block name="magento.catalog.product.preview">
  <block name="magento.catalog.price"/>
</block>
```

### As attribute

The `as` attribute should follow the guidelines below. The value of `as`:

- Only needs to be unique to the block that contains it.
- Should be as concise as possible, but with enough clarity to be understood within the block.
- Can use an `_` (underscore) as a separator.
- Should only be added if necessary.
- Should be all lowercase.


*Example:*

```xml
<block name="magento.catalog.product.preview">
  <block name="magento.catalog.total.price" as="total_price"/>
</block>
```
