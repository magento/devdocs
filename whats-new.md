---
layout: full-width
title: What's new on DevDocs
redirect_from:
  - /guides/v2.2/magento-devdocs-whatsnew.html
  - /guides/v2.3/magento-devdocs-whatsnew.html
---

{% assign whatsnew = site.data.whats-new %}

<a class="btn" href="{{ whatsnew.thread }}"><img src="{{ site.baseurl }}/i/icons/rss.svg" /> RSS feed</a>
<!-- The link enables RSS readers to recognize the whatsnew-feed thread on the page -->
<link rel="alternate" type="application/atom+xml" title="What's new on Magento DevDocs" href= "{{ whatsnew.thread }}" />

{{ whatsnew.description }}

{% assign entries = whatsnew.entries %}

{% assign grouped_by_year = entries | group_by_exp: "entry", "entry.date | date: '%Y'" %}

{% for group in grouped_by_year %}

## {{ group.name }}

Description |	Versions |	Type	| Date
---|---|---|---{% for item in group.items %}
{{ item.description }} | {{ item.versions }} | {{ item.type }} |
{%- if item.link -%}
[{{ item.date | date: "%B&nbsp;%e" }}]({{ item.link }})
{%- else -%}
{{ item.date | date: "%B&nbsp;%e" }}
{%- endif -%}
{% endfor %}

{% endfor %}