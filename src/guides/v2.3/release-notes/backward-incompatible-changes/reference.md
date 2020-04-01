---
group: release-notes
title: Backward incompatible changes reference
redirect_from:
- /guides/v2.3/release-notes/backward-incompatible-changes/commerce.html
- /guides/v2.3/release-notes/backward-incompatible-changes/open-source.html
---

Use this page to review high-level reference information for all backward incompatible changes in each release. Backward incompatible changes that have a major impact and require detailed explanation and special instructions are documented in the [Backward incompatible changes highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html) topic.

We use a custom tool that extends a PHP semantic version checker to auto-generate this content. The tool compares the code base from a previous release with the code base from the latest release. Backward incompatible changes for each release are aggregated into the following tables (if applicable):

-  Class changes
-  Class API membership changes
-  Interface changes
-  System changes
-  XSD changes

{:.bs-callout-info}
Patch releases are primarily focused on delivering security and quality enhancements on a regular basis to help you keep your sites performing at their peak. On an exceptional basis, breaking changes or additional patches or hotfixes may be released to address security or compliance issues and high-impact quality issues. On the module level, these are mostly PATCH-level changes; sometimes MINOR-level changes. See [Release policy]({{site.baseurl}}\release/policy/).

## 2.3.4 - 2.3.5

{% include backward-incompatible-changes/open-source/2.3.4-2.3.5-develop.html %}

{% include backward-incompatible-changes/commerce/2.3.4-2.3.5-develop.html %}

## 2.3.3 - 2.3.4

{% include backward-incompatible-changes/open-source/2.3.3-2.3.4.md %}

{% include backward-incompatible-changes/commerce/2.3.3-2.3.4.md %}

## 2.3.2 - 2.3.3

{% include backward-incompatible-changes/open-source/2.3.2-2.3.3.md %}

{% include backward-incompatible-changes/commerce/2.3.2-2.3.3.md %}

## 2.3.1 - 2.3.2

{% include backward-incompatible-changes/open-source/2.3.1-2.3.2.md %}

{% include backward-incompatible-changes/commerce/2.3.1-2.3.2.md %}

## 2.3.0 - 2.3.1

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
