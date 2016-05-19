---
layout: default
group: extension-dev-guide
subgroup: 02_Prepare
title: Component types and versioning
menu_title: Component types and versioning
menu_order: 2
menu_node:
github_link: extension-dev-guide/prepare/dev-modtypes.md
---

#### Contents
*	<a href="#types-spt">Supported component types</a>
*	<a href="#types-vers">Versioning</a>

<h2 id="types-spt">Supported component types</h2>

{% include php-dev/composer-types.md %}

<div class="bs-callout bs-callout-info" id="info">
  <p>Each component type has a different <a href="{{site.gdeurl21}}extension-dev-guide/build/module-file-structure.html" target="_blank">directory structure</a> and different contents for <a href="{{site.gdeurl21}}extension-dev-guide/build/composer-integration.html" target="_blank"><code>composer.json</code></a>.</p>
</div>

## Versioning {#component-version}
{% include php-dev/component-versioning.md %}

#### Next
<a href="{{site.gdeurl21}}extension-dev-guide/prepare/prepare_file-str.html">About component file structure</a>
