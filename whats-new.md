---
layout: full-width
title: What's new on DevDocs
redirect_from:
  - /guides/v2.0/magento-devdocs-whatsnew.html
  - /guides/v2.1/magento-devdocs-whatsnew.html
  - /guides/v2.2/magento-devdocs-whatsnew.html
  - /guides/v2.3/magento-devdocs-whatsnew.html
---

This page contains recent changes that we think you'd like to know about.
We exclude from this list proofreading, spelling checks, and all minor updates.

{% assign entries = site.data.whats-new.entries %}

{% assign grouped_by_year = entries | group_by_exp: "entry", "entry.date | date: '%Y'" %}

{% for group in grouped_by_year %}

## {{ group.name }}

{:style="table-layout:auto;"}
Description |	Versions |	Type	| Date
---|---|---|---{% for item in group.items %}
{{ item.description }} | {{ item.versions }} | {{ item.type }} | {{ item.date | date: "%B %e" }}{% endfor %}
{% endfor %}