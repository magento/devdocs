---
group: mftf
title: MFTF action group reference
functional_areas:
- Test
---

Action groups are important building blocks for quickly creating tests for the Magento Functional Testing Framework.
This page lists all current action groups so developers can see what is available to them.

## {{ site.data.var.ce }}

{% assign action_groups = site.data.codebase.v2_4.mftf.ce.action-groups %}

{% include mftf/action-groups-template.md %}

## {{ site.data.var.ee }} specific

{% assign action_groups = site.data.codebase.v2_4.mftf.ee.action-groups %}

{% include mftf/action-groups-template.md %}

## {{ site.data.var.b2b }} specific

{% assign action_groups = site.data.codebase.v2_4.mftf.b2b.action-groups %}

{% include mftf/action-groups-template.md %}
