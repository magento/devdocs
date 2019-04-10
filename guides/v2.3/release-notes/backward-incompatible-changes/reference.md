---
group: release-notes
title: Full reference of the backward incompatible changes
---

The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the PHP classes
2. **Changes in interfaces** that contains backward incompatible changes made to the PHP interfaces

{: .bs-callout .bs-callout-warning }
When the [@api] and [@deprecated] doc blocks tags are added to the code base, they are recognized as _Class was added_ or _Method has been added_.

## 2.3.0 - 2.3.1 {#releases-2_3_0-2_3_1}

{% include backward-incompatible-changes/open-source/2.3.0-2.3.1.md %}

{% include backward-incompatible-changes/commerce/2.3.0-2.3.1.md %}

{% collapsibleh2 2.2.0 - 2.3.0 %}

{% include backward-incompatible-changes/open-source/2.2.0-2.3.0.md %}

{% include backward-incompatible-changes/commerce/2.2.0-2.3.0.md %}

{% endcollapsibleh2 %}

{% collapsibleh2 2.1.0 - 2.3.0 %}

{% include backward-incompatible-changes/open-source/2.1.0-2.3.0.md %}

{% include backward-incompatible-changes/commerce/2.1.0-2.3.0.md %}

{% endcollapsibleh2 %}

<!-- LINK DEFINITIONS -->

[@api]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#api
[@deprecated]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#deprecated