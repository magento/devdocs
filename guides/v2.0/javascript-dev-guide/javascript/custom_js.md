---
group: jsdg
subgroup: 1_Javascript
title: Use custom JavaScript
menu_order: 15
menu_title: Use custom JavaScript
version: 2.0
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/custom_js.html
 - /guides/v1.0/frontend-dev-guide/javascript/custom_js.html
---

## Overview   {#custom_js_overview}

This topic discusses how to use custom {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} components with the components provided by Magento or having replaced them with custom implementations.

We strongly recommend not changing the source code of default Magento components and widgets. All customizations must be implemented in custom modules or themes.

## Add a custom JS component 

To add a custom JS component (module), take the following steps:

1. Place the custom component source file in one of the following locations:
	- Your theme JS files: `<theme_dir>/web/js` or `<theme_dir>/<VendorName>_<ModuleName>/web/js`. In this case the component is available in your theme and its [child themes]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html). 
	- Your module view JS files: `<module_dir>/view/frontend/web/js`. In this case the component is available in all modules and themes (if your module is enabled). 

2. Optionally, in the corresponding {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} or theme, create a `requirejs-config.js` configuration file, if it does not yet exist there and set path for your resource.

## Replace a default JS component   {#js_replace}

To use a custom implementation of an existing Magento JS component:
<ol>
  <li markdown="1">Place the custom component source file in one of
  the following locations:
<ul>
  <li markdown="1">Place the custom component source file in one of
  the following locations:
  </li>
</ul>
<ul>
  <li markdown="1">Your theme JS files: `/web/js` or `/_/web/js`
  </li>
  <li>Your module view JS files:
  <code>&lt;module_dir&gt;/view/frontend/web/js</code>
  </li>
</ul>
  </li>
  <li markdown="1">Create a RequireJS configuration file
  <code>requirejs-config.js</code>, having specified the following:

{% highlight JavaScript %} 
var config = {
  "map": {
    "*": {
      "<default_component>": "<custom_component>"
    }
  }
};

{% endhighlight %} 

<ul>
  <li>
    <code>&lt;default_component&gt;</code>: the name of the default
    component you replace
  </li>
  <li>
    <code>&lt;custom_component&gt;</code>: the name of the custom
    component
  </li>
</ul>

For example, if you want to use custom <code>navigation-menu.js</code> script instead of the default menu widgets, your <code>requirejs-config.js</code> should contain the following: 

{% highlight JavaScript %}
var config = {
  "map": {
    "*": {
      "menu": "js/navigation-menu",
      "mage/backend/menu": "js/navigation-menu"
    }
  }
};
{%endhighlight %}
  
</li>
  <li>Place your <code>requirejs-config.js</code> file in one of
  the following directories (according to the location of your
  custom script, see step 1 of this procedure):
    <ul>
      <li>Your {% glossarytooltip
      d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{%
      endglossarytooltip %} files: <code>&lt;theme_dir&gt;</code>
      </li>
      <li>Your module view files:
      <code>&lt;module_dir&gt;/view/frontend</code>
      </li>
    </ul>
  </li>
</ol>

This way your custom JS component is used instead of the {% glossarytooltip 3425e9ae-5edf-4fc6-b645-06023e9e5e5b %}Magento component{% endglossarytooltip %} in all entries all over the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} area.

## Extend a default JS component   {#extend_js}

You can add a custom JS component/widget, which will extend a default Magento component/widget.

### Extend Magento widget   {#extend_js_widget}

To extend a default Magento {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} widget, create `<your_widget_name>.js` with the following contents:

{% highlight JavaScript %}
define([
  'jquery',
  'jquery/ui',
  'mage/<widget.name>' // usually widget can be found in /lib/web/mage dir
], function($){
 
  $.widget('<your_namespace>.<your_widget_name>', $.mage.<widget.name>, { ... });
 
  return $.<your_namespace>.<your_widget_name>;
});
{% endhighlight %}

Where the following notation is used:
<ul>
  <li>
    <code>&lt;your_namespace&gt;.&lt;your_widget_name&gt;</code> -
    the name of your custom {% glossarytooltip
    f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{%
    endglossarytooltip %}. According to the jQuery widgets naming
    convention, must contain a {% glossarytooltip
    621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{%
    endglossarytooltip %} and name.
  </li>
  <li>
    <code>mage.&lt;widget.name&gt;</code> - the name of the Magento
    widget that you extend.
  </li>
</ul>

For information about how to initialize your custom widget in a `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

### Extend a default Ui component   {#extend_js_component}

To extend a default JS Ui component, your custom script must contain the following:

{% highlight JavaScript %}
define([
  '<component_path>'
], function(<component_alias>){
 
  return <component_alias>.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
{% endhighlight %}

Where the following notation is used:

<ul>
  <li>
    <code>&lt;component_path&gt;</code>: path to the default
    component that you extend
  </li>
  <li>
    <code>&lt;component_alias&gt;</code>: variable containing the
    default component that you extend
  </li>
</ul>

For example, <code>Filters.js</code> script extends the default <code>filters.js</code>:

{% highlight JavaScript %}
define([
  'Magento_Ui/js/grid/filters/filters'
], function(Filters){
 
  return Filters.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
{% endhighlight %}


For information about how to initialize your custom JS component in a `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

## Disable default Magento JS   {#disable_default_js}

To disable the auto-loading of default Magento JS components and widget initialization:
<ol>
  <li>Create a <code>requirejs-config.js</code> file with the
  following content: {% highlight JavaScript %} var config = {
  deps: [ ] }; {% endhighlight %}
  </li>
  <li>Put the <code>requirejs-config.js</code> file in one of the
  following locations:
    <ul>
      <li>Your custom theme files: <code>&lt;theme_dir&gt;</code>
      </li>
      <li>Your custom module files:
      <code>&lt;module_dir&gt;/view/frontend</code>
      </li>
    </ul>
  </li>
</ol>
If you need to enable the loading of default Magento JS components and widget initialization on a certain stage, add the following code in your JS script:

{% highlight JavaScript %}
$(mage.apply);
{% endhighlight %}

#### Related topic

- [JavaScript resources in Magento]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html)
- [About AMD modules and RequireJS]({{ page.baseurl }}/javascript-dev-guide/javascript/requirejs_concept.html)

