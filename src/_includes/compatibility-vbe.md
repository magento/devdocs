{% assign packages = site.data.composer_lock.packages %}

{% assign versionsNumber = include.data.versions.size %}
{% assign extensions = include.data.extension %}
{% if include.extension %}
{% assign extensions = include.data.extension | where: "name", include.extension %}
{% endif %}

**Supported**{: .status-light.supported } – version that has been fully tested by Magento and is supported.

<!-- **Compatible**{: .status-light.compatible } – independent release version that has not been fully tested by Magento, but is confirmed to be compatible. -->

**Not&nbsp;supported**{: .status-light.not-supported } - version that is not compatible with a Magento release.

<table class="compatibility-table">
  <thead>
    <tr class="magento-version">
      <th>&nbsp;</th>
    {% for version in include.data.versions %}
      <th>Magento {{version}}</th>
    {% endfor %}
    </tr>
  </thead>
  {% for extension in extensions %}
  <tbody>
    <tr class="extension-name">
      <th colspan="{{ versionsNumber | plus: 1 }}">{{ extension.name }}</th>
    </tr>
    {% for extensionVersion in extension.versions %}
    <tr class="extension-version">
      <td>{{ extension.name }} {{ extensionVersion.name }}</td>
      {% for version in include.data.versions %}
      <td><span class="status-light {{ extensionVersion.support[version] | replace: ' ', '-' }}">{{ extensionVersion.support[version] | capitalize }}</span></td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
  {% endfor %}
</table>

<style>
.compatibility-table {
  table-layout: auto;
}

.compatibility-table .magento-version th {
  padding: 5px 15px;
  background: none;
}
.extension-version {
  transition: all .2s;
}
.extension-version:hover {
  background: rgba(20,115,230,10%);
}

.compatibility-table .extension-name th {
  padding: 5px 15px;
}

.status-light {
  height: 32px;
  font-size: 14px;
  font-weight: 400;
}

.status-light::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 12px;
}

.status-light.supported::before {
  background: rgb(45, 157, 120);
}

.status-light.compatible::before {
  background: rgb(230, 134, 25);
}

.status-light.not-supported {
  font-style: italic;
}

.status-light.not-supported::before {
  background: rgb(179, 179, 179);
}

</style>
