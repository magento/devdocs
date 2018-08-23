---
group: release-notes
title: Backward incompatible changes in Magento Open Source
redirect_from: /guides/v2.2/release-notes/changes/ce_changes.html
---

This topic provides details about backward incompatible changes related to {{site.data.var.ce}} 2.2.

All changes are generated automatically using the codebase of the corresponding releases in [magento/magento2] repository.
The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the Magento classes
2. **Changes in interfaces** that contains backward incompatible changes made to the Magento interfaces

{% include note.html
type="warning"
content="When the [@api] and [@deprecated] doc blocks tags are added to the code base, they are recognized as _Class was added_ or _Method has been added_. "
%}

## 2.2.4 - 2.2.5 {#releases-2_2_4-2_2_5}

{% include backward-incompatible-changes/open-source/2.2.4-2.2.5.html %}

## 2.2.3 - 2.2.4 {#releases-2_2_3-2_2_4}

{% include backward-incompatible-changes/open-source/2.2.3-2.2.4.html %}

## 2.2.2 - 2.2.3 {#releases-2_2_2-2_2_3}

{% include backward-incompatible-changes/open-source/2.2.2-2.2.3.html %}

## 2.2.1 - 2.2.2 {#releases-2_2_1-2_2_2}

{% include backward-incompatible-changes/open-source/2.2.1-2.2.2.html %}

## 2.2.0 - 2.2.1 {#releases-2_2_0-2_2_1}

{% include backward-incompatible-changes/open-source/2.2.0-2.2.1.html %}

{% collapsibleh2 2.1.0 - 2.2.0 %}

{% include backward-incompatible-changes/open-source/2.1.0-2.2.0.html %}

{% endcollapsibleh2 %}

{% collapsibleh2 2.0.0 - 2.2.0 %}

{% include backward-incompatible-changes/open-source/2.0.0-2.2.0.html %}

{% endcollapsibleh2 %}

<!-- LINK DEFINITIONS -->

[magento/magento2]: https://github.com/magento/magento2
[@api]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#api
[@deprecated]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#deprecated
