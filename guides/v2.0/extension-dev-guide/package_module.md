---
layout: default
group: extension-dev-guide
subgroup: 4_Package
title: Module guide
menu_title: Package a module
menu_order: 2
github_link: extension-dev-guide/package_module.md
redirect_from: /guides/v1.0/extension-dev-guide/package_module.html

---
##{{page.menu_title}}

The Magento system uses Composer packages to distribute, install, and upgrade modules in an application instance.

To package an module, you must:

* Create a Magento Composer file (`composer.json`).
* Package and publish the module. 



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
<td>A fully-qualified module name, in the format <code>&lt;vendor_name&gt;/module-&lt;module-name&gt;</code>. All letters must be in lowercase. Use dashes in the <code>&lt;module-name&gt;</code> to separate words.</td>
</tr>
<tr>
<td><code>type</code> </td>
<td>For modules, this value must be set to <code>magento2-module</code>. Other possible types are <code>magento2-component</code>, <code>magento2-theme</code>, <code>magento2-language</code>, and <code>magento2-library</code></td>
</tr>
<tr>
<td><code>extra-&gt;map</code>  </td>
<td>The mapping information for the marshalling of the package. The first line specifies which files to marshall. Specify <code>"*"</code> to marshall all files. The second line specifies where to place them, relative to the <code>app/code/&lt;Vendor&gt;</code> directory. </td>
</tr>

</tbody>
</table>


The following example is a `composer.json` file for a module:

{% highlight JSON %}
{
    "name": "foovendor/module-one",
    "description": "N/A",
    "require": {
        "php": "5.4.*|5.5.*"
    },
    "type": "magento2-module",
    "version": "0.1.1",
    "extra": {
        "map": [
            [
                "*",
                "Foovendor/ModuleOne"
            ]
        ]
    }
}
{% endhighlight %}


<h2 id="packaging">Package and publish an module</h2>

After you have created the module's `composer.json` file in the root directory of the module, Composer can recognize your package as compatible with its deployment strategy. Such packages can be published to a code repository (GitHub, SVN, etc.), packagist.org, or on your own private package repository.

<h3 id="hosting">Hosting on GitHub and Packagist</h3>
Prerequisite: git must be set up on your machine.

1. Navigate to your module directory, with the `composer.json` file in the root, and make it a new git repository. See the [GitHub documentation](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for details. 
2. When you have committed and pushed your module to your GitHub repository, you can either:
  * Use [Composer to refer to it directly](https://getcomposer.org/doc/05-repositories.md#vcs), or 
  * Use the following steps to refer to the package through Packagist.
    1. Register an account at [packagist.org](https://packagist.org/).
    2. Click the Submit Package button and paste your GitHub repository link. Packagist automatically gathers the information from the module's `composer.json` file and link it to the GitHub repository, allowing you to reference the package as `vendor/module` without any additional repository information, as is required solely using GitHub.

<h3 id="private_repos">Hosting on a private packaging repository</h3>

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

All packages on the private packaging repository can now be referenced within the `require` field.

