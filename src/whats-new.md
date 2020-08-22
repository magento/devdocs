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

{% for group in grouped_by_year limit:2 %}

## {{ group.name }}

<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Versions</th>
      <th>Type</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
  {% for item in group.items %}
    <tr>
      <td>{{ item.description | markdownify }}</td>
      <td>{{ item.versions }}</td>
      <td>{{ item.type }}</td>
      <td>
          {%- if item.link -%}
              <a href="{{ item.link }}">{{ item.date | date: "%B&nbsp;%e" }}</a>
          {%- else -%}
              {{ item.date | date: "%B&nbsp;%e" }}
          {%- endif -%}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

{% endfor %}
