---
layout: default
group: release-notes
version: 2.2
title: Backward Incompatible Changes in Magento Commerce for B2B
github_link: release-notes/changes/b2b_changes.md
---

This topic provides details about backward incompatible changes related to {{site.data.var.b2b}} 1.0.

All changes are generated automatically using the codebase of corresponding releases in private repository that contains additional modules only.

<div class="bs-callout bs-callout-info" markdown="1">
To track all changes in {{site.data.var.b2b}}, consider [changes in {{site.data.var.ce}}] and [changes in {{site.data.var.ee}}].
</div>

The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the Magento classes
2. **Changes in interfaces** that contains backward incompatible changes made to the Magento interfaces

<div class="bs-callout bs-callout-warning" markdown="1">
**Temporary issue**: Added docblock tags like [@deprecated] are defined in **How Changed** as _Class was added_ or _Method has been added_.
</div>


## 1.0.1 - 1.0.2 {#releases-1_0_1-1_0_2}

{% include changes/b2b/1.0.1-1.0.2.html %}

## 1.0.0 - 1.0.1 {#releases-1_0_0-1_0_1}

{% include changes/b2b/1.0.0-1.0.1.html %}

<!-- LINK DEFINITIONS -->

[changes in {{site.data.var.ce}}]: ce_changes.html
[changes in {{site.data.var.ee}}]: ee_changes.html
[@deprecated]: {{page.baseurl}}coding-standards/docblock-standard-general.html#deprecated