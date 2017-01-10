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
github_link: coding-standards/xml-coding-standard.md
---

# Layout XML Coding Standard

### Name attribute

The `name` attribute should adhere to the guidelines listed below. The `name` attribute should:

- Be unique to the project.
- Use a namespace approach where each child block's name contains its parent's name as well.
- Have segments separated by a `.` (period).
- Be all lowercase.
- Never use `_` (underscores).

*Example:*

```xml
<block name="header">
  <block name="header.right">
    <block name="header.right.search">
      <block name="header.right.search.autocomplete" />
    </block>
  </block>
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
<block name="header">
  <block name="header.right" as="right_actions">
    <block name="header.right.search" as="search">
      <block name="header.right.search.autocomplete" as="autocomplete" />
    </block>
  </block>
</block>
```
