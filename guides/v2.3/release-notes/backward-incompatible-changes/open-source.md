---
group: release-notes
version: 2.3
title: Backward incompatible changes in Magento Open Source
---

The changes are aggregated into two tables:

1. **Changes in classes** that contains backward incompatible changes made to the Magento classes
2. **Changes in interfaces** that contains backward incompatible changes made to the Magento interfaces

{% include note.html
type="warning"
content="When the [@api] and [@deprecated] doc blocks tags are added to the code base, they are recognized as _Class was added_ or _Method has been added_. "
%}

## 2.2.0 - 2.3-develop

{% include note.html
type='info'
content='This table is updated when new commits are merged into the "2.3-develop" branch on a daily basis.'
%}

{% include backward-incompatible-changes/open-source/2.2.0-develop.html %}

<!-- LINK DEFINITIONS -->

[@api]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#api
[@deprecated]: {{ page.baseurl }}/coding-standards/docblock-standard-general.html#deprecated