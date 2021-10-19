{% assign roadmap = include.data.roadmap %}
{% if include.roadmap %}
{% assign roadmap = include.data.roadmap | where: "name", include.roadmap %}
{% endif %}

![Extension icon]({{ site.baseurl }}/common/images/Smock_Extension_18_N.svg) Indicates extensions available on the Commerce Marketplace.

<table class="roadmap-table">
  <tr class="roadmap-header">
      {% for roadmap in roadmap %}
      <th>{{roadmap.name}}</th>
      {% endfor %}
  </tr>
  <tr>
    {% for roadmap in roadmap %}
    <td class="table-container">
      <table class="inner-table">
        {% for roadmapFeature in roadmap.features %}
        <tr class="inner-row"><td class="inner-cell">{{ roadmapFeature.name }}</td></tr>
        {% endfor %}
      </table>
    </td>
    {% endfor %}
  </tr>
</table>

<style>

/****************/
/***— Tables —***/
/****************/

/**
 * Main Table
 */
table.roadmap-table {
  padding: 0.5em;
  margin: 0;
  border: 1 solid #ddd;
}

/**
 * Inner Tables
 */
table.roadmap-table tr td.table-container table.inner-table {
  padding: 0.5em;
  margin: 0;
  border: 0 solid #ddd;
}

/*****************/
/***— Headers —***/
/*****************/

/**
 * Main Table Header
 */
table.roadmap-table tr.roadmap-header th {
  padding: .7rem;
  margin: 0;
  border: 1 solid #ddd;
  text-align: left;
  background-color: #f5f5f5;
  font-weight: bold;
  color: #333;
  font-size: 1rem;
}

/**************/
/***— Rows —***/
/**************/

/**
 * Main Table Row
 */
 table.roadmap-table tr {
  padding: 0.7rem;
  margin-left: 1rem;
  border: 0 solid #ddd;
  border-collapse: collapse;
}

/**
 * Inner Table Rows
 */
table.roadmap-table tr td.table-container table.inner-table tr.inner-row {
  padding: 0.7rem;
  margin: 0;
  border-bottom: 1 solid #ddd;
  border-collapse: collapse;
}

/***************/
/***— Cells —***/
/***************/

/**
 * Main Table Cell
 */
 table.roadmap-table tr td.table-container {
  padding: 0;
  margin: 0;
  border: 0 solid #ddd;
  border-collapse: collapse;
}

/**
 * Inner Table Cell
 */
table.roadmap-table tr td.table-container table.inner-table tr.inner-row td.inner-cell {
  padding: 0.7rem;
  margin: 0;
  border: 0 solid #ddd;
  border-collapse: collapse;
  font-size: .9rem;
}

/***************/
/***— Icons —***/
/***************/

.extension::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 12px;
}

</style>
