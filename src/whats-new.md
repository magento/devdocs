---
layout: full-width
title: What's new on DevDocs
---

{% assign whatsnew = site.data.whats-new %}

<a class="btn" href="{{ whatsnew.thread }}"><img src="{{ site.baseurl }}/assets/i/icons/rss.svg" /> RSS feed</a>
<!-- The link enables RSS readers to recognize the whatsnew-feed thread on the page -->
<link rel="alternate" type="application/atom+xml" title="What's new on Magento DevDocs" href= "{{ whatsnew.thread }}" />

{{ whatsnew.description }}

{% assign entries = whatsnew.entries %}

{% assign grouped_by_year = entries | group_by_exp: "entry", "entry.date | date: '%Y'" %}

{% for year_group in grouped_by_year limit:2 %}

{% assign grouped_by_month = year_group.items | group_by_exp: "entry", "entry.date | date: '%B'" %}
## {{ year_group.name }}

{% for month_group in grouped_by_month %}
### {{ month_group.name }}

{% assign grouped_by_date = month_group.items | group_by: "date" %}

{% for date_group in grouped_by_date %}
#### {{ date_group.name }}

<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Versions</th>
      <th>Type</th>
      <th>Pull request</th>
    </tr>
  </thead>
  <tbody>
  {% for item in date_group.items %}
    <tr>
      <td>{{ item.description | markdownify }}</td>
      <td>{{ item.versions }}</td>
      <td>{{ item.type }}</td>
      <td><a href="{{ item.link }}">{{ item.link | split: "/" | last }}</a></td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% endfor %}<!-- date_group -->
{% endfor %}<!-- month_group -->

{% endfor %}<!-- year_group -->
