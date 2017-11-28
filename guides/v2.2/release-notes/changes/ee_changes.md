---
layout: default
group: release-notes
version: 2.2
title: Magento Commerce Backward Incompatible Changes
github_link: release-notes/changes/ee_changes.md
---

This topic provides details about backward incompatible changes related to {{site.data.var.ee}} 2.2.

All changes are generated automatically using the codebase of corresponding releases in private repository that contains additional modules only.

<div class="bs-callout bs-callout-info" markdown="1">
To track all changes in {{site.data.var.ee}}, consider [changes in {{site.data.var.ce}}].
</div>

The changes are aggregated into two tables:

- that contains backward incompatible changes made to Magento classes
- that contains backward incompatible changes made to the Magento interfaces

<div class="bs-callout bs-callout-warning" markdown="1">
**Temporary issue**: Added docblock tags like [@api] or [@deprecated] are defined in **How Changed** as _Class was added_ or _Method has been added_.  
</div>

## 2.2.0 - 2.2.1 {#releases-2_2_0-2_2_1}

{% include changes/ee/2.2.0-2.2.1.html %}

## 2.1.0 - 2.2.0 {#releases-2_1_0-2_2_0}

{% include changes/ce/2.1.0-2.2.0.html %}

<!-- LINK DEFINITIONS -->

[changes in {{site.data.var.ce}}]: ./ce_changes.html
[@api]: {{page.baseurl}}coding-standards/docblock-standard-general.html#api
[@deprecated]: {{page.baseurl}}coding-standards/docblock-standard-general.html#deprecated