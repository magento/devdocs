---
group: release-notes
version: 2.3
title: Backward incompatible changes in Magento Commerce
github_link: release-notes/backward-incompatible-changes/commerce.md
---

<div class="bs-callout bs-callout-info" markdown="1">
To track all changes in {{site.data.var.ee}}, consider [changes in {{site.data.var.ce}}].
</div>

The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the PHP classes
2. **Changes in interfaces** that contains backward incompatible changes made to the PHP interfaces

{% include note.html
type="warning"
content="**Temporary issue**: Added docblock tags like [@deprecated] are defined in **How Changed** as _Class was added_ or _Method has been added_."
%}

## 2.2.0 - 2.3-develop

{% include note.html
type="info"
content='The following tables are updated when new commits are merged into the "2.3-develop" branch on a daily basis.'
%}

{% include backward-incompatible-changes/commerce/2.2.0-develop.html %}

<!-- LINK DEFINITIONS -->

[changes in {{site.data.var.ce}}]: ./open-source.html
[@deprecated]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#deprecated