<!-- {% assign categories = include.data.categories %}
{% if include.categories %}
{% assign categories = include.data.categories | where: "name", include.categories %}
{% endif %} -->

<!-- <table class="status-table">
  <tbody>
    <tr class="category-name">
      <th>In progress</th>
      <th>Planned</th>
    </tr>
    {% for categories in categories %}
    {% for categoryFeature in categories.features %}
    <tr class="category-feature">
      {% if categories.name == "In progress" %}
      <td>{{ categoryFeature.name }}</td>
      <td></td>
      {% elsif categories.name == "Planned" %}
      <td></td>
      <td>{{ categoryFeature.name }}</td>
      {% endif %}
    </tr>
    {% endfor %}
    {% endfor %}
  </tbody>
</table> -->

<table class="status-table">
  <tbody>
    <tr class="category-name">
      <th>In progress</th>
      <th>Planned</th>
    </tr>
   <tr class="category-feature">
      <td>Framework updates (e.g. KnockoutJS, RequireJS, etc.)</td>
      <td>Accelerated checkout powered by Bolt (extension) <img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"></td>
   </tr>
   <tr class="category-feature">
      <td>GraphQL - Admin configuration</td>
      <td>Accessibility improvements for storefront/admin</td>
    </tr>
    <tr class="category-feature">
      <td>GraphQL - Caching updates</td>
      <td>Framework updates (e.g. KnockoutJS, RequireJS, etc.)</td>
    </tr>
    <tr class="category-feature">
      <td>jQuery 3.6.x support</td>
      <td>GraphQL - Personalization updates</td>
    </tr>
    <tr class="category-feature">
      <td>OpenSearch 1.x support</td>
      <td>GraphQL - Page Builder improvements</td>
    </tr>
    <tr class="category-feature">
      <td>PayPal and Braintree updates <img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"></td>
      <td>GraphQL - Inventory improvements</td>
    </tr>
    <tr class="category-feature">
      <td>PHP 8.1 support</td>
      <td>Page Builder - Mobile layout optimization</td>
    </tr>
    <tr class="category-feature">
      <td>PWA - Global theming/styling</td>
      <td>Page Builder - Column grid layouts (viewports)</td>
    </tr>
    <tr class="category-feature">
      <td>PWA - Custom product attributes</td>
      <td>Payment services (extension) <img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"></td>
    </tr>
    <tr class="category-feature">
      <td>PWA - Performance optimizations</td>
      <td>PWA - Server-side rendering (SSR)</td>
    </tr>
    <tr class="category-feature">
      <td>PWA - Shopping and cart improvements</td>
      <td>PWA - Extensibility improvements (payment/ship)</td>
    </tr>
    <tr class="category-feature">
      <td>Security and quality improvements</td>
      <td>PWA - Bundle product type</td>
    </tr>
    <tr class="category-feature">
      <td>Vendor Bundled Extensions (VBEs) – Updates <img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"></td>
      <td>Security and quality improvements</td>
    </tr>
    <tr class="category-feature">
      <td></td>
      <td>Walmart Marketplace (extension) <img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"></td>
    </tr>
  </tbody>
</table>

![Extension icon]({{ site.baseurl }}/common/images/Smock_Extension_18_N.svg) Indicates extensions available on the Commerce Marketplace.

<style>
/***Table***/

.status-table {
  table-layout: fixed;
}

/***Rows***/

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

/***Columns***/

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

/***Cells***/

.category-feature td {
  padding: 10px;
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
