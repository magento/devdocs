{% assign categories = include.data.categories %}
{% if include.categories %}
{% assign categories = include.data.categories | where: "name", include.categories %}
{% endif %}

<!-- **Planned**{:.status.planned} - Lorem ipsum dolor sit amet

**In progress**{:.status.in-progress} – Lorem ipsum dolor sit amet

**Complete**{:.status.complete} – Lorem ipsum dolor sit amet -->

<!-- <table class="status-table">
  {% for categories in categories %}
  <tbody>
    <tr class="category-name">
      <th>Planned</th>
      <th>In progress</th>
    </tr>
    <tr class="category-feature">
      <td>{% if categories.name.status == "planned" }} %}{{ categories.name }}</td>
      <td>{% elsif categories.name.status == "in progress" }} %}{{ categories.name }}</td>
      {% endif %}
    </tr>
  </tbody>
  {% endfor %}
</table> -->

<table class="status-table">
  <tbody>
    <tr class="category-name">
      <th>Planned</th>
      <th>In progress</th>
    </tr>
    <tr class="category-feature">
      <td>Accessibility improvments</td>
      <td>PHP 8.1 support</td>
    </tr>
    <tr class="category-feature">
      <td>PWA Studio - B2B support</td>
      <td></td>
    </tr>
    <tr class="category-feature">
      <td>PWA Studio - Performance improvements</td>
      <td></td>
    </tr>
    <tr class="category-feature">
      <td>UI library upgrades</td>
      <td></td>
    </tr>
  </tbody>
</table>

<style>
/*** Table ***/

.status-table {
  table-layout: fixed;
}

/*** Rows ***/

.category-feature {
  transition: all .2s;
  height: 26px;
}

.category-feature:hover {
  background: rgba(20,115,230,10%);
}

tbody tr.category-feature:last-child td {
  padding-bottom: 5px;
}

/*** Columns ***/

.category-name th {
  padding: 10px;
  font-size: 14px !important;
  font-weight: bold;
  color: black;
  background-color: #f1f1f1;
}

/* .category-name th:nth-child(1) {
   width: 100%;
}

.category-name th:nth-child(2) {
  width: 90px;
  text-align: center;
} */

/*** Cells ***/

.category-feature td {
  padding: 7px 0px 0px 10px;
}

/* .category-feature td:nth-child(2) {
  text-align: center;
} */

/*** Icons ***/

  .status {
    height: 32px;
    font-size: 14px;
    font-weight: 400;
  }

  .status::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 12px;
  }

  .status.complete::before {
    background: rgb(45, 157, 120);
  }

  .status.in-progress::before {
    background: rgb(230, 134, 25);
  }

  .status.planned {
    font-style: italic;
  }

  .status.planned::before {
    background: rgb(179, 179, 179);
  }

</style>
