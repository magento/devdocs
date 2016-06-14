---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: Component load order
menu_title: Component load order
menu_order: 8
version: 2.1
github_link21: extension-dev-guide/build/module-load-order.md
---

##{{page.menu_title}}


You may need to specify your component's dependency on other components or files from other components using your component's <a href="{{ site.gdeurl21 }}extension-dev-guide/build/create_component.html#add-component-xml">composer.json</a>. Further, you can specify a load order in your component's `module.xml` file using the `<sequence>` tag to ensure that needed files from other components are already loaded when your component loads.

`<sequence>` declares the list of components that must be loaded before the current component is loaded. It's used for loading different kind of files: configuration files, view files (including CSS, LESS, and template files), or setup classes. Note that `<sequence>` does not affect the loading of regular classes (non-setup classes).
*Setup* classes are classes in the component that create or update database schema or data.

If you know that your component's logic depends on something in another component then you should add it to `require` in `composer.json` and `<sequence>` in `module.xml`.

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>If you change the component load order using <code>&lt;sequence></code>, you must regenerate the component list in <code>config.php</code>; otherwise, the load order does not take effect.</p>
<p>Currently, the only way to do this is to enable the component using <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable"><code>magento module:enable &lt;module-list></code></a>, where <code>&lt;module-list></code> is the component or components to which you added <code>&lt;sequence></code>.</p></span>
</div>


###Examples

Assume you have a component that needs a configuration file from another component:

__Component A__ introduces `gadgetlayout.xml`, which updates block `gadgetBlock` from __component B__. In this case, layout files from __component A__ should be loaded before __component B__, so you should specify that in __component B's__ `<sequence>` entry in module.xml.



For each particular scenario, files of the same type are loaded from different components taking into account the sequence information provided in each component's `module.xml` file.

In another scenario, let's say you want to load all of the layout files with the name `default.xml`. __Component A__ specifies __component B__ in `<sequence>`. The files load in the following order:

42. `component X/view/frontend/layout/default.xml`&mdash;Either we don't care about when component X loads or perhaps component B requires it to be loaded before it.
42. `component B/view/frontend/layout/default.xml`
42. `component A/view/frontend/layout/default.xml`&mdash;Loads after __component B__ because __component B__ is listed in __component A's__ `<sequence>` tag.
42. `component Z/view/frontend/layout/default.xml`&mdash;Either we don't care about the sequence for component Z or perhaps component Z requires component A files to be loaded before it.

There are no limitations&mdash;you can specify any valid component in `<sequence>`.

If you do specify a component in `<sequence>`, make sure that you have also added it to the `require` section in that component's `composer.json` file.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Take care when using <code>&lt;sequence></code> in multiple components because it's possible to define circular dependencies. If you do, Magento aborts the installation when it detects the circular dependency.</p></span>
</div>

##Next

[Enable or disable your component]({{site.gdeurl21}}extension-dev-guide/build/enable-module.html)
