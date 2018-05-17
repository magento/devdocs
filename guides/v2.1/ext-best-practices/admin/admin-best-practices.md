---
group: ext-best-practices
subgroup: 01_Admin
title: Admin
menu_title: Admin
menu_order: 1
menu_node: parent
version: 2.1
tabgroup: best-practices
tablabel: Admin
tabweight: 20
github_link: ext-best-practices/admin/admin-best-practices.md
functional_areas:
  - Standards
---

This section of the Best Practices Guide discusses the Admin, the UI panel used by Magento administrators. It is where Magento system and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} parameters can be modified and configured. Third-party extensions installed by the system {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}admin{% endglossarytooltip %} or merchant are also found in this area, along with any of their configuration settings.

This is an important section to read, because what {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers choose to do (or not do) when coding to integrate their extensions has a big impact on the look and feel of the Admin UI.

<div class="bs-callout bs-callout-info" id="info">
  <p>Remember that most merchants have multiple extensions installed, and most of these extensions are exposed through the Admin. In order to prevent a cluttered Admin, please follow the guidelines, and communicate with Magento and the community when you have questions.</p>
</div>

For additional information on design topics for the Admin, read the [Admin Pattern Library]({{ page.baseurl }}/pattern-library/bk-pattern.html) and the [Admin Style Guide]({{ page.baseurl }}/design-styleguide/bk-styleguide.html).

### Articles

{% assign subgroup = site.pages | where: "guide_version", page.guide_version | where:"group","ext-best-practices" | where: "subgroup","01_Admin" | where: "menu_node",null | sort: "menu_order" %}

{% for node in subgroup %}
*  [{{ node.menu_title }}]({{ page.baseurl }}/{{ node.github_link | replace: ".md",".html" }})
{% endfor %}
