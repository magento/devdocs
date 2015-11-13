---
layout: default
group: extension-dev-guide
subgroup: 5_Package
title: Package a module
menu_title: Package a module
menu_order: 2
github_link: extension-dev-guide/package_module.md
redirect_from: /guides/v1.0/extension-dev-guide/package_module.html

---
##{{page.menu_title}}

The Magento system uses Composer packages to distribute, install, and upgrade modules in an application instance.

To package an module, you must:

* Create a Magento Composer file (`composer.json`).
* Package and publish your module. 

Publish your module on the [Magento Marketplace](http://magento.com), Magento&#8217;s eCommerce application marketplace.

<h2 id="composer">Create a Magento Composer file</h2>

The Magento `composer.json` file defines the name, requirements, version, and other basic information about the module. This file must be placed in the root directory of the module.

The `composer.json` uses [Composer's generic schema](https://getcomposer.org/doc/04-schema.md), with the following restrictions:

<table>
<tbody>
<tr>
<th>Element</th>
<th>Description</th>
</tr>
<tr>
<td><code>name</code></td>
<td>A fully-qualified module name, in the format <code>&lt;vendor-name&gt;/module-&lt;module-name&gt;</code>. All letters must be in lowercase. Use dashes in the <code>&lt;module-name&gt;</code> to separate words.</td>
</tr>
<tr>
<td><code>type</code> </td>
<td>For modules, this value must be set to <code>magento2-module</code>. Other possible types are <code>metapackage</code>, <code>magento2-theme</code>, and <code>magento2-language</code>.</td>
</tr>



<td><code>autoload </code></td>
<td>Specify necessary information to be loaded, such as [registration.php](component-registration.html). For more information, see <a href="https://getcomposer.org/doc/01-basic-usage.md#autoloading">Autoloading</a> from Composer.</td>

<!-- <td><code>extra-&gt;map</code>  </td>
<td>The mapping information for the marshaling of the package. The first line specifies which files to marshal. Specify <code>"*"</code> to marshal all files. The second line specifies where to place them, relative to the <code>&lt;Vendor></code> directory. </td> -->

</tr>

</tbody>
</table>



A description of the types of packages that you can submit to Marketplace:

* __magento2-module__&#8212;A package that usually contains source files plus the top level composer.json, which indicates dependencies. This can be sold in the store directly, or it can be a dependent package hierarchy of some parent package.

* __metapackage__&#8212;A placeholder used to group a collection of packages together. 

* __magento2-theme__&#8212;For theme packages. It can be sold independently in the store directly, or it could a dependent package hierarchy of some parent package.

* __magento2-language__&#8212;For language packages. These usually contain .csv files to aid in translation of certain contents.  It can be sold directly in Marketplace, or could be part of a dependent package hierarchy of some parent package.



###Using Metapackages

Metapackages allow you to group an extension that consists of multiple packages into a cohesive unit. This works exactly as described in standard [composer.json documentation](https://getcomposer.org/doc/04-schema.md#type). If you have an extension that uses more than one package you must use a metapackage as the *root package*. Otherwise you should not use metapackage. A metapackage that you submit to Magento Marketplace should be a .zip file containing only the metapackage composer.json file.


####Metapackage example 

The following example is a `composer.json` metapackage file for a module:


{% highlight JSON %}

{
    "name": "magento/sample-data",
    "version": "1.0.0-beta",
    "type": "metapackage",
    "require": {
        "magento/module-sample-data": "self.version",
        "magento/sample-data-media": "~0.42.0-beta2",
    },
    "autoload": {
        "files": [ "registration.php" ],
        "psr-4": {
            "Magento\\sample-data": ""
                }
    }
}


{% endhighlight %}

### Sample composer.json file


The following example is a `composer.json` file for a module:

{% highlight JSON %}
{
    "name": "Acme/module-one",
    "description": "N/A",
    "require": {
        "php": "5.4.*|5.5.*"
    },
    "autoload": {
        "files": [ "registration.php" ],
        "psr-4": {
            "Magento\\module-one": ""
                },
    },
    "type": "magento2-module",
    "version": "0.1.1",
}
{% endhighlight %}


<h2 id="packaging">Package and publish the module</h2>

<!-- 

Plan A (AppC):

1. No github support (yet). 
2. Package it up with metapackage composer.json into a zip file.
3. Follow submission process (which is...?), including uploading the zip file. 
 
Plan-B:

1. Based on github.
2. And then?... -->


 

After you have created the module's `composer.json` file in the root directory of the module, Composer can recognize your package as compatible with its deployment strategy. Such packages can be published to a code repository (GitHub, SVN, etc.), packagist.org, or on your own private package repository.



<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Third party repositories are supported.</p></span>
</div>



<h3 id="hosting">Hosting on GitHub and Packagist</h3>
Prerequisite: git must be set up on your machine.

1. Navigate to your module directory, with the `composer.json` file in the root, and make it a new git repository. See the [GitHub documentation](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for details. 
2. When you have committed and pushed your module to your GitHub repository, you can either:
  * Use [Composer to refer to it directly](https://getcomposer.org/doc/05-repositories.md#vcs), or 
  * Use the following steps to refer to the package through Packagist.
    1. Register an account at [packagist.org](https://packagist.org/).
    2. Click the Submit Package button and paste your GitHub repository link. Packagist automatically gathers the information from the module's `composer.json` file and link it to the GitHub repository, allowing you to reference the package as `vendor/module` without any additional repository information, as is required solely using GitHub.

<h3 id="private_repos">Hosting on a private repository</h3>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you use the Setup Wizard, you must use the Magento Marketplace repository. 
A private repository can be used for development or private code but installation must be done with a command line interface (you can install a module that specifies a private repository only with a command line installation).</p></span>
</div>

1. Set up your own Composer packaging repository using a system such as [Satis](https://getcomposer.org/doc/articles/handling-private-packages-with-satis.md) or [Toran](https://toranproxy.com/).
2. Create the package in a way similar to the described above.
3. Submit/register the package on your own repository. For example, it can be hosted as a reference to a code repository or submitted as a zip-archive.
4. To use the private packaging repository in a project, add the following to your `composer.json`file:

{% highlight JSON %}

{
    "repositories": [
        {
            "type": "composer",
            "url": [repository url here]
        }
    ]
}
{% endhighlight %}

All packages on the private repository can now be referenced within the `require` field.

<!-- ##Submitting your module to Marketplace -->


