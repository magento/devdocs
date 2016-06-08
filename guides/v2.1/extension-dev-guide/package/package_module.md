---
layout: default
group: extension-dev-guide
subgroup: 05_Package
title: Package a component
menu_title: Package a component
menu_order: 2
github_link21: extension-dev-guide/package/package_module.md
---

##{{page.menu_title}}

#### Contents
*   <a href="#package-over">Overview of packaging</a>
*   <a href="#composer">Create a Magento Composer file</a>
*   <a href="#packaging">Package and publish your extension</a>

<h2 id="package-over">Overview of packaging</h2>
The Magento application uses Composer packages to distribute, install, and upgrade components in an application instance.

To package a component, you must:

*   Create a Magento Composer file (`composer.json`).
*   Register the component using `registration.php`
*   Package and publish your component.

    Use our [validation tool](https://github.com/magento/marketplace-tools){:target="_blank"} to check your package before you distribute it.


<h2 id="composer">Create a Magento Composer file</h2>
The Magento `composer.json` file defines the name, requirements, version, and other basic information about the component. This file must be placed in the root directory of the module.

The `composer.json` uses [Composer's generic schema](https://getcomposer.org/doc/04-schema.md), with the following restrictions:

<table>
<tbody>
<tr>
<th>Element</th>
<th>Description</th>
</tr>
<tr>
<td><code>name</code></td>
<td>A fully-qualified component name, in the format <code>&lt;vendor-name&gt;/module-&lt;component-name&gt;</code>. All letters must be in lowercase. Use dashes in the <code>&lt;component-name&gt;</code> to separate words.</td>
</tr>
<tr>
<td><code>type</code> </td>
<td>For modules, this value must be set to <code>magento2-module</code>. Other possible types are <code>metapackage</code>, <code>magento2-theme</code>, and <code>magento2-language</code>.</td>
</tr>
<td><code>autoload </code></td>
<td>Specify necessary information to be loaded, such as [registration.php]({{site.gdeurl21}}extension-dev-guide/build/component-registration.html). For more information, see <a href="https://getcomposer.org/doc/01-basic-usage.md#autoloading">Autoloading</a> from Composer.</td>

</tr>
</tbody>
</table>

{% include php-dev/composer-types.md %}

<h3 id="package-metapackage">Using metapackages</h3>
Metapackages allow you to group an extension that consists of multiple packages into a cohesive unit. This works exactly as described in standard [composer.json documentation](https://getcomposer.org/doc/04-schema.md#type). If you have an extension that uses more than one package you must use a metapackage as the *root package*. Otherwise you should not use metapackage. A metapackage that you submit to Magento Marketplace should be a .zip file containing only the metapackage `composer.json` file.

<div class="bs-callout bs-callout-info" id="info">
  <p>We recommend metapackages refer to specific component versions. Do not use wildcards to represent version ranges.</p>
</div>


####Metapackage example
The following example is a `composer.json` for a metapackage:


{% highlight JSON %}

{
    "name": "magento/product-community-edition",
    "description": "A sample metapackage",
    "version": "2.0.0",
    "type": "metapackage",
    "require": {
        "php": "~5.5.0|~5.6.0|~7.0.0",
        "zendframework/zend-stdlib": "~2.4.6",
        "zendframework/zend-code": "~2.4.6",
        "zendframework/zend-server": "~2.4.6",
        "zendframework/zend-soap": "~2.4.6",
        "zendframework/zend-uri": "~2.4.6",
        "zendframework/zend-validator": "~2.4.6",
        "zendframework/zend-crypt": "~2.4.6",
        "zendframework/zend-console": "~2.4.6",
        "zendframework/zend-modulemanager": "~2.4.6",
        "zendframework/zend-mvc": "~2.4.6",
        "zendframework/zend-text": "~2.4.6",
        "zendframework/zend-i18n": "~2.4.6",
        "ext-ctype": "*",
        "ext-gd": "*",
        "ext-spl": "*",
        "ext-dom": "*",
        "ext-simplexml": "*",
        "ext-mcrypt": "*",
        "ext-hash": "*",
        "ext-curl": "*",
        "ext-iconv": "*",
        "ext-intl": "*",
        "ext-xsl": "*",
        "ext-mbstring": "*",
        "ext-openssl": "*"
        },
    "license": [
        "OSL-3.0",
        "AFL-3.0"
    ]
}


{% endhighlight %}

### Sample composer.json file
The following example is a `composer.json` file for a module:

{% highlight JSON %}
{
  "name": "magento/sample-module-newpage",
  "description": "A Magento 2 module that creates a new page",
  "type": "magento2-module",
  "version": "1.0.0",
  "license": [
    "OSL-3.0",
    "AFL-3.0"
  ],
  "require": {
    "php": "~5.5.0|~5.6.0|~7.0.0",
    "magento/framework": "~100.0.4"
  },
  "autoload": {
    "files": [ "registration.php" ],
    "psr-4": {
      "Magento\\SampleNewPage\\": ""
    }
  }
}

{% endhighlight %}

<h2 id="packaging">Package and publish your extension</h2>
Create a package of your extension by performing a zip operation on the directory with your extension (excluding unnecessary directories). For example:

    zip -r vendor-name_package-name-1.0.0.zip package-path/ -x 'package-path/.git/*'

Use alphanumeric characters for the package filename with dashes to separate words. Do not use whitespaces.

Magento can retrieve your extension package from any valid GitHub URL.




<!-- After you have created the module's `composer.json` file in the root directory of the module, Composer can recognize your package as compatible with its deployment strategy. Such packages can be published to a code repository (GitHub, SVN, etc.), packagist.org, or on your own private package repository. -->



<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Third party repositories are supported.</p></span>
</div>



<h3 id="hosting">Hosting on GitHub and Packagist</h3>
Prerequisite: git must be set up on your machine.

1. Navigate to your component directory, with the `composer.json` file in the root, and make it a new git repository. See the [GitHub documentation](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for details.
2. When you have committed and pushed your component to your GitHub repository, you can either:
  * Use [Composer to refer to it directly](https://getcomposer.org/doc/05-repositories.md#vcs), or
  * Use the following steps to refer to the package through Packagist.
    1. Register an account at [packagist.org](https://packagist.org/).
    2. Click the Submit Package button and paste your GitHub repository link. Packagist automatically gathers the information from the component's `composer.json` file and link it to the GitHub repository, allowing you to reference the package as `vendor/module` without any additional repository information, because this is required solely using GitHub.

<h3 id="private_repos">Hosting on a private repository</h3>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you use the Setup Wizard, you must use the Magento Marketplace repository.
A private repository can be used for development or private code but installation must be done with a command line interface (you can install a  that specifies a private repository only with a command line installation).</p></span>
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
