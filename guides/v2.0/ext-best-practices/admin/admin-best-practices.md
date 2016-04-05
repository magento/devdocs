---
layout: default
group: ext-best-practices
subgroup: 01_Admin
title: Admin
menu_title: Admin
menu_order: 1
menu_node: parent
github_link: ext-best-practices/admin/admin-best-practices.md
---

##{{page.menu_title}}

The Admin is the area in Magento that is reserved only for Magento administrators. It is where Magento system and storefront parameters can be modified and configured. Third party extensions installed by the system admin are also found in this area along with any of their configuration settings.

For in depth information on design topics for the Admin, read the [Admin Pattern Library]({{site.gdeurl}}pattern-library/bk-pattern.html).

###Articles

{% assign subgroup = site.articles | where:"group","ext-best-practices" | where: "subgroup","01_Admin" | where: "menu_node",null | sort: "menu_order" %}

{% for node in subgroup %}
*  [{{ node.menu_title }}]({{site.gdeurl}}{{ node.github_link | replace: ".md",".html" }})
{% endfor %}
