---
layout: default
group: extension-dev-guide
subgroup: 2_Prepare
title: PHP developers guide
menu_title: Composer integration
menu_order: 2
github_link: extension-dev-guide/composer-integration.md
redirect_from: /guides/v1.0/extension-dev-guide/composer-integration.html

---
##{{page.menu_title}}


[Composer](https://getcomposer.org/) is a dependency manager for PHP. Magento 2 uses Composer to package components and product editions. <!-- Each component or product edition may be presented as a Composer package and published to Magento Connect. In addition, --> 
Some third party components that the Magento system uses may be actually not present in the code base. Instead, they are listed as dependencies in the root `composer.json` file. 
 

<h2>Overview of composer.json files</h2>

Certain Magento components and product editions are represented with `composer.json` files. A directory with a `composer.json` file and other component files constitute a package.

<table><tbody>
<tr>
<th> Type of composer.json </th>
<th> Location </th>
<th> Naming Convention </th>
<th> Type of Package </th>
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
<td>This is the main <tt>composer.json</tt> file. Magento uses this file to declare dependencies on 3rd-party components. This file is used as a template for any other root <tt>composer.json</tt> files 
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
<td> This file represents Magento Community Edition product. The package only includes composer.json that declares the dependencies on magento components (modules, themes, etc.) and 3rd-party components. This can be used by Magento system integrators to deploy Magento using composer. </td>
</tr>
<tr>
<td>base</td>
<td> <tt>composer.json</tt> </td>
<td>
<pre>magento/magento2-base</pre>
</td>
<td>
<pre>magento2-component</pre>
</td>
<td> This file represents Magento Community Edition base package. This package doesn't include any of Magento components (modules, themes, etc.) The package contains all other files/directories besides the components and lists the latter at the "require" section.</td>
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
<td>language packs</td>
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
<td>Magento framework/libraries </td>
<td> <tt>lib/internal/Magento/Framework/composer.json</tt> </td>
<td>
<pre>magento/framework</pre>
</td>
<td>
<pre>magento2-library</pre>
</td>
<td>Currently there is only "magento/framework" package. We don't distinguish particular libraries as separate components. In the future, if we do, we'll use "framework-" prefix (as provided in the example). </td>
</tr>
</tbody></table>

<h3>Naming conventions</h3>

The namespace of Composer packages is global within a package repository (such as [packagist.org](packagist.org)). The Composer specification requires that a package name use the format: 

`<vendor_name>/<package_name>` 

As a result, vendors of different packages are distinguished, and there is a low risk of overlapping (unless different vendors names themselves exactly the same). All letters in the name must be lowercase. Therefore, the format for package names released by Magento Inc is:

`magento/*`

The package name is up to the vendor (as long as it is lowercase). If this name is meant to consist of multiple words, the Composer specification recommends separating them with dash. The convention for Magento package names is this:

`magento/<type-prefix>-<suffix>[-<suffix>]`...

Where:

`type-prefix` stands for a type of component in a Magento-specific domain.

`suffix` would be anything that allows distinguishing/disambiguating the component within that type.

<h3>Magento-Specific Package Types</h3>
Each Magento component can be categorized into one of the types listed in the table. If any component does not fit into a specific category, it can be generalized to `magento-component`.

Having an identifier type for each component allows the system to marshall the directories and files of each component to the correct locations, based on the Magento 2 directory structure. 

<h3>The <code>extra</code> Section</h3>
The [Composer specification](https://getcomposer.org/doc/04-schema.md#extra) permits adding an `extra` section in `composer.json` files can be used for any custom needs of the project. 

<h4>Marshalling Map</h4>
By default, when you install a package, Composer puts it into `vendor/<package>` directory, such as `vendor/magento-module-catalog`.  However, the Magento framework requires Magento components to be in different locations, such as `app/code/Magento/Catalog`. The process of copying or moving contents of packages from default to the necessary location is called *marshalling*.

To enable marshalling, the Magento-Composer integration uses a special component, `magento-composer-installer`. This is a Composer plugin that uses an `extra->map` section in `composer.json` files to perform the marshalling. Each Magento component must include a dependency on the installer in order to be properly marshalled.

For example, in the Catalog module, the `extra->map` section would look as follows:

{% highlight JSON %}
"type": "magento2-module",
"require": {
    "magento/magento-composer-installer": "*"
},
"extra": {
    "map": [
        [
            "*",
            "Magento/Catalog"
        ]
    ]
}
{% endhighlight %}

This code instructs the Composer installer to put everything in this package under the module's `Magento/Catalog` subdirectory. Whenever this package is updated, the map determines which files and directories to delete and replace with new package contents.

The following example is for the root `composer.json` file:

{% highlight JSON %}
"type": "magento2-component",
"require": {
    "magento/magento-composer-installer": "*"
},
"extra": {
    "map": [
        [
            "app/.htaccess",
            "app/.htaccess"
        ],
...
        [
            "var/.htaccess",
            "var/.htaccess"
        ]
    ]
}
{% endhighlight %}

Instead of using the wildcard character, this sample specifies which files from this package are placed in the target location. In case of the root `composer.json` file, it is the same location. Whenever the root (or "skeleton") package is updated, only the specified paths will be affected and any other files/directories will be preserved.

For more details about marshalling implementation, see the [magento-composer-installer documentation](https://github.com/magento/magento-composer-installer).

<h4>Component Paths Map</h4>
The section `extra->component_paths` is used in the root `composer.json` file to specify a custom location for the components that are listed in the `replace` section:

{% highlight JSON %}
{
    "replace": {
        "foo/bar": "1.1.0",
        "bar/baz": "1.2.3",
        "foo/baz": "dev-master#f33623e228dc03f77c12d39690217baa87370b3d"
    }
    "extra": {
        "component_paths": {
            "foo/bar": "path/to/bar/directory",
            "bar/baz": "path/to/baz/file.php",
            "foo/baz": [
                "path/to/baz/another_directory",
                "path/to/baz/another_file.php"
            ]
        }
    }
}
{% endhighlight %}

The values may specify the path to a directory or file, or a list of paths. The paths are relative to the root directory of Magento code base.

This is needed when the Magento code base incorporates ("replaces") source code of a library, but it happens to be in a location that is non-compliant to Composer. Declaring these components in `replace` section prevents other components from declaring dependencies on the incompatible versions of the same components. Declaring them in `extra->component_paths` section informs the developer where to look for them.

