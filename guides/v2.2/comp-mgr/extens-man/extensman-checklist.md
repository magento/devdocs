---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Run the Extension Manager
menu_title: Run the Extension Manager
menu_node: parent
menu_order: 1
version: 2.2
github_link: comp-mgr/extens-man/extensman-start.md
---

## Run the Extension Manager from the Magento Admin
The Extension Manager enables you to install, uninstall, and update extensions, including those you purchase from Magento Marketplace. The term *package* means:

*	Modules (extend Magento capabilities)
*	Themes (change the look and feel of your storefront and Admin)
*	Language packages (localize the storefront and Admin)

<div class="bs-callout bs-callout-warning">
    <p>If you installed the Magento application by <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">cloning the GitHub repository</a>, you <em>cannot</em> use the Extension Manager to update components. Instead, you must <a href="{{page.baseurl}}install-gde/install/cli/dev_options.html">update them manually</a>.</p>
</div>

## Prerequisites
Before continuing, complete all tasks discussed in [Prerequisites]({{page.baseurl}}comp-mgr/prereq/prereq_compman.html).

## Extension Manager checklist
{% include install/update/checklist.md %}

#### Next step
[Start the Extension Manager]({{ page.baseurl }}comp-mgr/extens-man/extensman-main-pg.html)