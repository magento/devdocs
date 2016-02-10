---
layout: default
group: extension-dev-guide
subgroup: 02_Prepare
title: Component types and versioning
menu_title: Component types and versioning
menu_order: 2
menu_node: 
github_link: extension-dev-guide/dev-modtypes.md
redirect_from: /guides/v2.0/mktpl-quickstart/dev-modtypes.html
---

#### Contents
*	<a href="#types-spt">Supported component types</a>
*	<a href="#types-vers">Versioning</a>

<h2 id="types-spt">Supported component types</h2>

{% include php-dev/composer-types.md %}

<div class="bs-callout bs-callout-info" id="info">
  <p>Each component type has a different <a href="{{ site.gdeurl }}extension-dev-guide/module-file-structure.html" target="_blank">directory structure</a> and different contents for <a href="{{ site.gdeurl }}extension-dev-guide/composer-integration.html" target="_blank"><code>composer.json</code></a>.</p>
</div>

## Versioning {#component-version}
{% include php-dev/component-versioning.md %}

#### Next
<a href="{{ site.gdeurl }}mktpl-quickstart/dev-filesys.html">Set up your component's file structure</a>