{% assign versionsNumber = include.data.versions.size %}
{% assign features = include.data.features %}
{% if include.features %}
{% assign features = include.data.features | where: "name", include.features %}
{% endif %}

<table class="comparison-table">
  {% for features in features %}
  <tbody>
    <tr class="feature-name">
      <th>{{ features.name }}</th>
      {% for version in include.data.versions %}
      <th>{{version}}</th>
    {% endfor %}
    </tr>
    {% for featuresVersion in features.versions %}
    <tr class="feature-version">
      <td>{{ featuresVersion.name }}</td>
      {% for version in include.data.versions %}
      <td><span class="status-light {{ featuresVersion.support[version] | replace: ' ', '-' }}"></span></td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
  {% endfor %}
</table>

<style>
.comparison-table {
  table-layout: auto;
}

.comparison-table .magento-version th {
  padding: 15px 15px;
  background: none;
}

.feature-version {
  transition: all .2s;
}

.feature-version:hover {
  background: rgba(20,115,230,10%);
}

.comparison-table .feature-name th {
  padding: 15px 15px;
  font-size: 14px !important;
  font-weight: bold;
  color: black;
  background-color: lightgray;
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

.status-light.true::before {
  background: rgb(45, 157, 120);
}

.status-light.false::before {
  background: none;
}

</style>
