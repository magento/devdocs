---
layout: default
group: quickstart
subgroup: 02_Dev
title: Component types
menu_title: Component types
menu_order: 2
menu_node: 
version: 2.1
github_link: mktpl-quickstart/dev-modtypes.md
---

#### Contents
*	<a href="#types-spt">Supported component types</a>
*	<a href="#types-vers">Versioning</a>

<h2 id="types-spt">Supported component types</h2>

{% include php-dev/composer-types.md %}

<div class="bs-callout bs-callout-info" id="info">
  <p>Each component type has a different <a href="{{ site.gdeurl21 }}extension-dev-guide/module-file-structure.html" target="_blank">directory structure</a> and different contents for <a href="{{ site.gdeurl21 }}extension-dev-guide/composer-integration.html" target="_blank"><code>composer.json</code></a>.</p>
</div>

<h2 id="types-vers">Versioning</h2>
Components have the following types of versions:

*	Marketing version; in other words, the version the merchant interacts with. 

	Your initial version might be 1.0.0 or 2.0.0, for example. You should follow <a href="{{ site.gdeurl21 }}architecture/versioning.html" target="_blank">our versioning policy</a> guidelines when setting your version.

*	Composer version; in other words, the version of each module, theme, language package, third-party package, and dependencies. 

Using Magento code as an example, Magento CE marketing version 2.0.0 includes component versions such as 100.0.1, 100.0.2, and so on. These versioning strategy prevents collisions between the marketing version and component versions.

#### Next
<a href="{{ site.gdeurl21 }}mktpl-quickstart/dev-filesys.html">Set up your component's file structure</a>
