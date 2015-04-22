---
layout: default
group: extension-dev-guide
subgroup: How to
title: Package an extension
menu_title: Package an extension
menu_order: 3
github_link: extension-dev-guide/package_extension.md

---

The Magento system uses Composer packages to distribute, install, and upgrade extensions in an application instance.

To package an extension, you must:

* Create a Magento Composer file (`composer.json`).
* Package and publish the extension. 



<h2 id="composer">Create a Magento Composer file</h2>

The Magento `composer.json` file defines the name, requirements, version, and other basic information about the extension. This file must be placed in the root directory of the extension.

The `composer.json` uses [Composer's generic schema](https://getcomposer.org/doc/04-schema.md), with the following restrictions:

`name` - A fully-qualified module name, in the format `<vendor_name>/module-<module-name>`. All letters must be in lowercase. Use dashes in the `<module-name>` to separate words.

`type` - For extensions, this value must be set to `magento2-module`.

`extra->map` - The mapping information for the marshalling of the package. The first line specifies which files to marshall. Specify `"*"` to marshall all files. The second line specifies where to place them, relative to the `app/code/<Vendor>` directory.  

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


<h2 id="packaging">Package and publish an extension</h2>

After you have created the `composer.json` file and placed it in the root directory of the extension, Composer can recognize your package as compatible with its deployment strategy. Such packages can be published to a code repository (GitHub, SVN, etc.), packagist.org, or on your own private package repository.

<h3 id="hosting">Hosting on GitHub and Packagist</h3>
Prerequisite: git must be set up on your machine.

1. Navigate to your extension directory, with the `composer.json` file in the root, and make it a new git repository. See the [GitHub documentation](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for details. 
2. When you have committed and pushed your extension to your GitHub repository, you can either:
  * Use [Composer to refer to it directly](https://getcomposer.org/doc/05-repositories.md#vcs), or 
  * Use the following steps to refer to the package through Packagist
    1. Register an account at [packagist.org](https://packagist.org/).
    2. Click the Submit Package button and paste your GitHub repository link. Packagist will automatically gather the information from the extension's `composer.json` file and link it to the GitHub repository, allowing you to reference the package as `vendor/extension` without any additional repository information, as is required solely using GitHub.

<h3 id="private_repos">Hosting on a private packaging repository</h3>

1. Set up your own Composer packaging repository using a system such as [Satis](https://getcomposer.org/doc/articles/handling-private-packages-with-satis.md) or [Toran](https://toranproxy.com/).
2. Create the package in a way similar to the described above.
3. Submit/register the package on your own repository. For example, it can be hosted as a reference to a code repository or submitted as a zip-archive.
4. To use the private packaging repository in a project, add the following to your `composer.json`:

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

All packages on the private packaging repository can now be referenced within the `require`	 field.

<h2 id="test">Test your extension</h2>
Test your extension by deploying a Magento Community Edition and adding it to the project's <code>composer.json</code>. The extension should be marshalled into the <code>app/code</code> directory.

{% highlight JSON %}
"require": {
    "magento/magento-composer-installer": "*",
    "magento/product-community-edition": "2.0.0",
    "foovendor/module-one": "0.1.1"
},
{% endhighlight %}