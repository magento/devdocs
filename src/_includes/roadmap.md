<!-- {% assign categories = include.data.categories %}
{% if include.categories %}
{% assign categories = include.data.categories | where: "name", include.categories %}
{% endif %}

<table class="status-table">
  <tbody>
    <tr class="category-name">
      <th>In progress</th>
      <th>Planned</th>
    </tr>
    {% for categories in categories %}
    {% if categories.name == "In progress" %}
    <tr class="category-feature">
      <td>{{ categories.features }}</td>
      <td></td>
    </tr>
    {% elsif categories.name == "Planned" %}
    <tr class="category-feature">
      <td></td>
      <td>{{ categories.features }}</td>
    </tr>
    {% endif %}
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
      <td>GraphQL - Asynchronous orders</td>
      <td>Accessibility improvements for storefront/admin</td>
    </tr>
    <tr class="category-feature">
      <td>GraphQL - Admin configuration</td>
      <td>Framework updates (e.g. KnockoutJS, RequireJS, etc.)</td>
    </tr>
    <tr class="category-feature">
      <td>GraphQL - Caching updates</td>
      <td>GraphQL - Personalization updates</td>
    </tr>
    <tr class="category-feature">
      <td>jQuery 3.6.x support</td>
      <td>GraphQL - Page Builder improvements</td>
    </tr>
    <tr class="category-feature">
      <td>OpenSearch 1.x support</td>
      <td>GraphQL - Inventory improvements</td>
    </tr>
    <tr class="category-feature">
      <td><img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"> PayPal and Braintree updates</td>
      <td><img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"> Walmart Marketplace (extension)</td>
    </tr>
    <tr class="category-feature">
      <td>PHP 8.1 support</td>
      <td><img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"> Page Builder - Mobile layout optimization</td>
    </tr>
    <tr class="category-feature">
      <td>PWA - Global theming/styling</td>
      <td><img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"> Page Builder - Column grid layouts (viewports)</td>
    </tr>
    <tr class="category-feature">
      <td>PWA - Custom product attributes</td>
      <td><img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"> Payment services (extension)</td>
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
      <td>PWA - Staging and preview</td>
    </tr>
    <tr class="category-feature">
      <td><img src="{{ site.baseurl }}/common/images/Smock_Extension_18_N.svg"> Vendor Bundled Extensions (VBEs) – Updates</td>
      <td>PWA - Bundle product type</td>
    </tr>
    <tr class="category-feature">
      <td></td>
      <td>PWA - Live Search (Venia)</td>
    </tr>
    <tr class="category-feature">
      <td></td>
      <td>Security and quality improvements</td>
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
