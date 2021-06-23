{% assign releases = site.data.core-releases %}
{% assign now_in_seconds = "now" | date: "%s" %}

{% for minor_release in releases %}

## {{ minor_release[0] }}
{% if minor_release[1].end-of-support == 'not available yet' %}
The date when support of the {{ minor_release[0] }} release line ends has not been set yet.
{% else %}
{% assign end_of_support_in_seconds = minor_release[1].end-of-support | date: "%s" %}
{% if end_of_support_in_seconds < now_in_seconds %}
Support for the {{ minor_release[0] }} release line ended on {{ end_of_support_in_seconds | date: "%B&nbsp;%e, %Y" }}.
{% elsif end_of_support_in_seconds > now_in_seconds %}
Support for the {{ minor_release[0] }} release line ends on {{ minor_release[1].end-of-support | date: "%B&nbsp;%e, %Y" }}.
{% endif %}
{% endif %}

<table>
  <thead>
    <tr>
      <th>Patch version</th>
      <th>Release date</th>
    </tr>
  </thead>
  <tbody>
  {% for patch_release in minor_release[1].releases %}
    <tr>
        <td>{{ patch_release.tagName }}</td>
        <td>{{ patch_release.publishedAt | date: "%B&nbsp;%e, %Y" }}</td>
    </tr>
  {% endfor %}<!-- patch_releases -->
  </tbody>
</table>

{% endfor %} <!-- minor_releases -->
