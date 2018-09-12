---
group: release-notes
title: Backward incompatible changes in Magento Commerce
redirect_from: /guides/v2.2/release-notes/changes/ee_changes.html
---

This topic provides details about backward incompatible changes related to {{site.data.var.ee}} 2.2.

All changes are generated automatically using the codebase of corresponding releases in private repository that contains additional modules only.

{: .bs-callout .bs-callout-info }
To track all changes in {{site.data.var.ee}}, consider [changes in {{site.data.var.ce}}].

The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the Magento classes
2. **Changes in interfaces** that contains backward incompatible changes made to the Magento interfaces

{% include note.html
type="warning"
content="When the [@api] and [@deprecated] doc blocks tags are added to the code base, they are recognized as _Class was added_ or _Method has been added_. "
%}

## 2.2.4 - 2.2.5 {#releases-2_2_4-2_2_5}

{% include backward-incompatible-changes/commerce/2.2.4-2.2.5.html %}

## 2.2.3 - 2.2.4 {#releases-2_2_3-2_2_4}

{% include backward-incompatible-changes/commerce/2.2.3-2.2.4.html %}

## 2.2.2 - 2.2.3 {#releases-2_2_2-2_2_3}

{% include backward-incompatible-changes/commerce/2.2.2-2.2.3.html %}

## 2.2.1 - 2.2.2 {#releases-2_2_1-2_2_2}

{% include backward-incompatible-changes/commerce/2.2.1-2.2.2.html %}

## 2.2.0 - 2.2.1 {#releases-2_2_0-2_2_1}

{% include backward-incompatible-changes/commerce/2.2.0-2.2.1.html %}

{% collapsibleh2 2.1.0 - 2.2.0 %}

{% include backward-incompatible-changes/commerce/2.1.0-2.2.0.html %}

{% endcollapsibleh2 %}

{% collapsibleh2 2.0.0 - 2.2.0 %}

{% include backward-incompatible-changes/commerce/2.0.0-2.2.0.html %}

{% endcollapsibleh2 %}

<!-- LINK DEFINITIONS -->

[changes in {{site.data.var.ce}}]: ./open-source.html
[@api]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#api
[@deprecated]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#deprecated
