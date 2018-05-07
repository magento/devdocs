---
layout: default
group: compman
subgroup: 06_UseExtMan
title: Run the Extension Manager
menu_title: Run the Extension Manager
menu_node: parent
menu_order: 1
version: 2.2
github_link: comp-mgr/extens-man/extensman-checklist.md
functional_areas:
  - Upgrade
---

## Run the Extension Manager from the Magento Admin
The {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}Extension{% endglossarytooltip %} Manager enables you to install, uninstall, and update extensions, including those you purchase from Magento Marketplace. The term *extension* means:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and Admin)
*	Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-warning">
    <p>If you installed the Magento application by <a href="{{page.baseurl}}/install-gde/prereq/dev_install.html">cloning the GitHub repository</a>, you <em>cannot</em> use the Extension Manager to update components. Instead, you must <a href="{{page.baseurl}}/install-gde/install/cli/dev_options.html">update them manually</a>.</p>
</div>

## Prerequisites
Before continuing, complete all tasks discussed in [Prerequisites]({{page.baseurl}}/comp-mgr/prereq/prereq_compman.html).

## Extension Manager checklist
{% include comp-man/checklist_2.2.md %}

#### Next step
[Start the Extension Manager]({{ page.baseurl}}/comp-mgr/extens-man/extensman-main-pg.html)
