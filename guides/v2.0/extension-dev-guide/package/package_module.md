---
group: extension-dev-guide
subgroup: 05_Package
title: Package a component
menu_title: Package a component
menu_order: 2
version: 2.0
redirect_from:
  - /guides/v1.0/extension-dev-guide/package_module.html
  - /guides/v2.0/extension-dev-guide/package_module.html
---

#### Contents

*   <a href="#package-over">Overview of packaging</a>
*   <a href="#composer">Create a Magento Composer file</a>
*   <a href="#packaging">Package and publish your extension</a>

## Overview of packaging   {#package-over}

The Magento application uses {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} packages to distribute, install, and upgrade components in an application instance.

To package a component, you must:

*   Create a Magento Composer file (`composer.json`).
*   Register the component using `registration.php`
*   Package and publish your component.

    Use our [validation tool](https://github.com/magento/marketplace-tools){:target="_blank"} to check your package before you distribute it.

## Create a Magento Composer file   {#composer}

The Magento `composer.json` file defines the name, requirements, version, and other basic information about the component. This file must be placed in the root directory of the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

The `composer.json` uses [Composer's generic schema](https://getcomposer.org/doc/04-schema.md), with the following restrictions:


Element | Description
--- | ---
`name` | A fully-qualified component name, in the format `<vendor-name>/<component-name>`. All letters must be in lowercase. Use dashes in the `<component-name>` to separate words.
`type` | For modules, this value must be set to `magento2-module`. Other possible types are `metapackage`, `magento2-theme`, and `magento2-language`.
`autoload` | Specify necessary information to be loaded, such as [registration.php]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html). For more information, see <a href="https://getcomposer.org/doc/01-basic-usage.md#autoloading">Autoloading</a> from Composer.


{% include php-dev/composer-types.md %}

### Using metapackages   {#package-metapackage}

Metapackages allow you to group an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} that consists of multiple packages into a cohesive unit. This works exactly as described in standard [composer.json documentation](https://getcomposer.org/doc/04-schema.md#type). If you have an extension that uses more than one package you must use a {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} as the *root package*. Otherwise you should not use metapackage. A metapackage that you submit to Magento Marketplace should be a .zip file containing only the metapackage `composer.json` file.

<div class="bs-callout bs-callout-info" id="info">
  <p>We recommend metapackages refer to specific component versions. Do not use wildcards to represent version ranges.</p>
</div>

#### Metapackage example

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

## Package and publish your extension   {#packaging}

Create a package of your extension by performing a zip operation on the directory with your extension (excluding unnecessary directories). For example:

    zip -r vendor-name_package-name-1.0.0.zip package-path/ -x 'package-path/.git/*'

Use alphanumeric characters for the package filename with dashes to separate words. Do not use whitespaces.

Magento can retrieve your extension package from any valid GitHub {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.




<!-- After you have created the module's `composer.json` file in the root directory of the module, Composer can recognize your package as compatible with its deployment strategy. Such packages can be published to a code repository (GitHub, SVN, etc.), packagist.org, or on your own private package repository. -->



<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Third party repositories are supported.</p></span>
</div>

### Hosting on GitHub and Packagist   {#hosting}

Prerequisite: git must be set up on your machine.

1. Navigate to your component directory, with the `composer.json` file in the root, and make it a new git repository. See the [GitHub documentation](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for details.
2. When you have committed and pushed your component to your GitHub repository, you can either:
  * Use [Composer to refer to it directly](https://getcomposer.org/doc/05-repositories.md#vcs), or
  * Use the following steps to refer to the package through Packagist.
    1. Register an account at [packagist.org](https://packagist.org/).
    2. Click the Submit Package button and paste your GitHub repository link. Packagist automatically gathers the information from the component's `composer.json` file and link it to the GitHub repository, allowing you to reference the package as `vendor/module` without any additional repository information, because this is required solely using GitHub.

### Hosting on a private repository   {#private_repos}

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you use the Setup Wizard, you must use the Magento Marketplace repository.
A private repository can be used for development or private code but installation must be done with a command line interface (you can install a package that specifies a private repository only with a command line installation).</p></span>
</div>

1. Set up your own Composer packaging repository using a system such as [Satis](https://getcomposer.org/doc/articles/handling-private-packages-with-satis.md) or [Private Packagist](https://packagist.com/).
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

Refer to the [official documentation](https://packagist.com/features/private-vcs-packages) for more details on how to configure your project to use Private Packagist.
<!-- ##Submitting your module to Marketplace -->
