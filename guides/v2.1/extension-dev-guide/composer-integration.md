---
layout: default
group: extension-dev-guide
subgroup: 2_Prepare
title: Composer integration
menu_title: Composer integration
menu_order: 2
github_link: extension-dev-guide/composer-integration.md
redirect_from: /guides/v1.0/extension-dev-guide/composer-integration.html

---
##{{page.menu_title}}


[Composer](https://getcomposer.org/) is a dependency manager for PHP. Magento 2 uses Composer to package components and product editions. <!-- Each component or product edition may be presented as a Composer package and published to Magento Connect. In addition, --> 
Some third party components that the Magento system uses may be actually not present in the code base. Instead, they are listed as dependencies in the root `composer.json` file. 
 

<h2>Overview of composer.json files</h2>
Certain Magento components and product editions are represented with `composer.json` files. 

<table><tbody>
<tr>
<th> Type of composer.json </th>
<th> Location </th>
<th> Naming convention </th>
<th> Composer type </th>
<th> Notes </th>
</tr>
<tr>
<td> Root</td>
<td> <tt>composer.json</tt> </td>
<td>
<pre>magento/magento2ce</pre>
</td>
<td>
<pre>project</pre>
</td>
<td>This is the main <tt>composer.json</tt> file. Magento uses this file to declare dependencies on third-party components. This file is used as a template for any other root <tt>composer.json</tt> files 
 </td>
</tr>
<tr>
<td>CE project</td>
<td> <tt>composer.json</tt> </td>
<td>
<pre>magento/project-community-edition</pre>
</td>
<td>
<pre>project</pre>
</td>
<td> This file represents the Magento Community Edition project. The package only includes the <tt>composer.json</tt>, which declares the dependencies on the magento product as well as the class autoloader. This can be used by Magento system integrators to deploy Magento using Composer. </td>
</tr>
<tr>
<td>CE product</td>
<td> <tt>composer.json</tt> </td>
<td>
<pre>magento/product-community-edition</pre>
</td>
<td>
<pre>metapackage</pre>
</td>
<td> This file represents Magento Community Edition product. The package only includes composer.json that declares the dependencies on magento components (modules, themes, and so on) and third-party components. This can be used by Magento system integrators to deploy Magento using Composer. </td>
</tr>
<tr>
<td>module </td>
<td> <tt>app/code/Magento/&lt;Module&gt;/composer.json</tt> </td>
<td>
<pre>magento/module-catalog-inventory
magento/module-checkout</pre>
</td>
<td>
<pre>magento2-module</pre>
</td>
<td> The fully qualified module name, broken down into vendor, with the rest of the words as suffixes. The "module" prefix is mandatory to disambiguate from other types (for example, Magento_Backend module versus Magento/backend theme).</td>
</tr>
<tr>
<td>theme</td>
<td> <tt>app/design/&lt;area&gt;/Magento/&lt;theme&gt;/composer.json</tt> </td>
<td>
<pre>magento/theme-frontend-blank
magento/theme-adminhtml-backend</pre>
</td>
<td>
<pre>magento2-theme</pre>
</td>
<td> Themes belong to areas, so the area name has to be the first suffix </td>
</tr>
<tr>
<td>language packages</td>
<td> <tt>app/i18n/magento/&lt;language&gt;/composer.json</tt> </td>
<td>
<pre>magento/language-en_gb
magento/language-de_de</pre>
</td>
<td>
<pre>magento2-language</pre>
</td>
<td>The language identifier must be lowercase.</td>
</tr>
<tr>
<td>Magento framework</td>
<td> <tt>lib/internal/Magento/Framework/composer.json</tt> </td>
<td>
<pre>magento/framework</pre>
</td>
<td>n/a</td>
<td>Used only by the framework</td>
</tr>
</tbody></table>

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento does not currently support the <a href="https://getcomposer.org/doc/05-repositories.md#path" target="_blank"><code>path</code></a> repository.</p>
</div>

<h3>Naming conventions</h3>
The namespace of Composer packages is global within a package repository (such as [packagist.org](http://packagist.org)). The Composer specification requires that a package name use the format: 

{% highlight XML %}
<vendor_name>/<package_name>

{% endhighlight %}

As a result, vendors of different packages are distinguished, and there is a low risk of overlapping (unless different vendors names themselves exactly the same). All letters in the name must be lowercase. Therefore, the format for package names released by Magento Inc is:

{% highlight XML %}
magento/*

{% endhighlight %}

The package name is up to the vendor (as long as it is lowercase). If this name is meant to consist of multiple words, the Composer specification recommends separating them with dash. The convention for Magento package names is this:

{% highlight XML %}
magento/<type-prefix>-<suffix>[-<suffix>]...

{% endhighlight %}

Where:

`type-prefix` is a type of component in a Magento-specific domain.

`suffix` is anything that allows distinguishing/disambiguating the component within that type.

<h3>Magento-specific package types</h3>
Each Magento component can be categorized into one of the types listed in the preceding table. If any component does not fit into a specific category, it can be generalized to `magento-component`.

Having an identifier type for each component allows the system to marshal the directories and files of each component to the correct locations, based on the Magento 2 directory structure. 

<h3>Composer Binary Location</h3>
Magento's bin/magento script uses composer from the vendor/composer directory in your Magento 2 installation, not your globally installed composer. Keep this in mind while customizing or updating composer or troubleshooting Composer issues while working with Magento 2.
