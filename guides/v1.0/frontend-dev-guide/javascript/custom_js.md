---
layout: default
group: fedg
subgroup: Javascript
title: Use custom JavaScript
menu_order: 3
menu_title: Use custom JavaScript
github_link: frontend-dev-guide/javascript/custom_js.md
---

<h2 id="custom_js_overview">Overview</h2>
This topic talks about how to use custom Javascript components, together with the default ones used in Magento or having replaced them with custom implementations.

<h2 id="js_replace">Use custom implementations instead of default JS components</h2>

We strongly recommend not to change the default 
To use a custom implementation of a certain existing Magento JS component:
<ol>
<li>Place the custom component source file in one of the following locations:
<ul>
<li>Your theme JS files: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/js</code></li>
<li>Your module view files: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend/web/js</code></li>
</ul>
</li>
<li>Create a RequireJS configuration file <code>requirejs-config.js</code>, having specified the following:

<p class="q">Need help to create a general sample</p>

For example, if you want to use the custom implementation of <code>navigation-menu.js</code> 
<pre>
var config = {
  &quot;map&quot;: {
    &quot;*&quot;: {
      &quot;menu&quot;: &quot;js/navigation-menu&quot;,
      &quot;mage/backend/menu&quot;: &quot;js/navigation-menu&quot;,
    }
  }
};
</pre>


</li>
</ul>