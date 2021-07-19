{% assign releases = site.data.core-releases %}
{% assign now_in_seconds = "now" | date: "%s" %}

{% for minor_release in releases %}
{% assign minor_release_version = minor_release[0] %}
{% assign end_of_support = minor_release[1].end-of-support %}
{% assign end_of_support_array = end_of_support | split: '-' %}
## {{ minor_release_version }}

{% if end_of_support_array[0] contains '?' %}
The date when support of the {{ minor_release_version }} release line ends has not been set yet.
{% elsif end_of_support_array[1] contains '?' %}
Support for the {{ minor_release_version }} release line ends in {{ end_of_support | replace: '??', '01' | date: "%Y" }}.
{% elsif end_of_support_array[2] contains '?' %}
Support for the {{ minor_release_version }} release line ends in {{ end_of_support | replace: '??', '01' | date: "%B, %Y" }}.
{% else %}
{% assign end_of_support_in_seconds = end_of_support | date: "%s" %}
{% if end_of_support_in_seconds < now_in_seconds %}
Support for the {{ minor_release_version }} release line ended on {{ end_of_support_in_seconds | date: "%B&nbsp;%e, %Y" }}.
{% elsif end_of_support_in_seconds > now_in_seconds %}
Support for the {{ minor_release_version }} release line ends on {{ end_of_support | date: "%B&nbsp;%e, %Y" }}.
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
