---
group: release-notes
title: Backward incompatible changes in Magento Commerce
---

{: .bs-callout .bs-callout-info }
To track all changes in {{site.data.var.ee}}, consider [changes in {{site.data.var.ce}}].

The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the PHP classes
2. **Changes in interfaces** that contains backward incompatible changes made to the PHP interfaces

{% include note.html
type="warning"
content="When the [@api] and [@deprecated] doc blocks tags are added to the code base, they are recognized as _Class was added_ or _Method has been added_. "
%}

## 2.2.0 - 2.3.0 {#releases-2_2_0-2_3_0}

{% include backward-incompatible-changes/commerce/2.2.0-2.3.0.md %}

## 2.1.0 - 2.3.0 {#releases-2_1_0-2_3_0}

{% include backward-incompatible-changes/commerce/2.1.0-2.3.0.md %}

<!-- LINK DEFINITIONS -->

[changes in {{site.data.var.ce}}]: ./open-source.html
[@api]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#api
[@deprecated]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#deprecated