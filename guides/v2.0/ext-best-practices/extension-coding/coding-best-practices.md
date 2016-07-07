---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Extension Coding
menu_title: Extension Coding
menu_order: 1
menu_node: parent
version: 2.0
github_link: ext-best-practices/extension-coding/coding-best-practices.md
---
##{{page.menu_title}}
{:.no_toc}

The coding best practices presented in this section should be known and understood by you the developer when creating or maintaining your extensions. This ensures that the extension you develop behaves and functions correctly within the Magento application architecture. This guide is not only meant to educate you about coding best practices but to also highlight some pitfalls we have seen other extension developers fall into so that you may avoid them.

For in depth content about creating extensions, see the [PHP Developer Guide]({{page.baseurl}}extension-dev-guide/bk-extension-dev-guide.html).

###Articles

{% assign subgroup = site.articles | where: "guide_version", page.guide_version | where:"group","ext-best-practices" | where: "subgroup","02_Extension-Coding" | where: "menu_node",null | sort: "menu_order" %}

{% for node in subgroup %}
*  [{{ node.menu_title }}]({{page.baseurl}}{{ node.github_link | replace: ".md",".html" }})
{% endfor %}
