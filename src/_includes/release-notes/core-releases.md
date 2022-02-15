{% assign releases = site.data.core-releases %}
{% assign now_in_seconds = "now" | date: "%s" %}

{% for minor_release in releases %}
{% assign minor_release_version = minor_release[0] %}
{% assign patch_releases = minor_release[1].releases %}
{% assign end_of_support = minor_release[1].end-of-support %}
{% assign end_of_support_array = end_of_support | split: '-' %}
## {{ minor_release_version }}

{% assign release_notes = false %}
{% for patch_release in patch_releases %}
{% if patch_release.releaseNotes %}
{% assign release_notes = true %}
{% endif %}
{% endfor %}

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
      {% if release_notes %}<th>Release notes</th>{% endif %}
    </tr>
  </thead>
  <tbody>
  {% for patch_release in patch_releases %}
    <tr>
        <td>{{ patch_release.tagName }}</td>
        <td>{{ patch_release.publishedAt | date: "%B&nbsp;%e, %Y" }}</td>
        {% if release_notes %}
          <td>
              {% if patch_release.releaseNotes.commerce %}<a href="{{ patch_release.releaseNotes.commerce}}">Adobe Commerce Release Notes</a><br>{% endif %}
              {% if patch_release.releaseNotes.opensource %}<a href="{{ patch_release.releaseNotes.opensource}}">Magento Open Source Release Notes</a><br>{% endif %}
              {% if patch_release.releaseNotes.common %}<a href="{{ patch_release.releaseNotes.common}}">Release Notes</a><br>{% endif %}
          </td>
        {% endif %}
    </tr>
    {% else %}
    <tr>
        <td colspan="2" align="center">See in <a href="{{ site.baseurl }}/release/">Upcoming releases</a></td>
    </tr>
  {% endfor %}<!-- patch_releases -->
  </tbody>
</table>

{% endfor %} <!-- minor_releases -->
