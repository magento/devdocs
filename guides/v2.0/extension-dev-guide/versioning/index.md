---
layout: default
group: extension-dev-guide
subgroup: Versioning
title: Versioning
menu_title: Versioning
menu_order: 1000
menu_node: parent
version: 2.0
github_link: extension-dev-guide/versioning/index.md
redirect_from: 
  - /guides/v2.0/architecture/versioning.html
  - /guides/v2.1/architecture/versioning.html
  - /guides/v2.2/architecture/versioning.html
---

Magento software and Magento module releases have their own unique version number.

## Software version format

A change in the version for the Magento software indicates a patch or feature release.
This version change does not reflect the nature of the changes in the code base.

## Module version format

The `version` field in a modules [`composer.json`][composer-json] file specifies the module version and consists of three numbers in the following format:

`MAJOR.MINOR.PATCH`

The format follows [Semantic Versioning][semantic-versioning] rules:

* The MAJOR version increments when incompatible API changes are made.
* The MINOR version increments when backward-compatible functionality has been added.
* The PATCH version increments when backward-compatible bug fixes occur.

### Pre-release versions

For pre-release versions, the format is: 

`MAJOR.MINOR.PATCH-<alpha | beta | rc>n`

| `alpha`, `beta` or `rc` | Stability indicators, as described in the [`version_compare()`][php-version-compare]{:target="_blank"} specification|
| `n` | An increment number to distinguish releases of the non-stable versions |

Magento's module versioning policy complies with the following specifications:

* [Semantic Versioning][semantic-versioning]{:target="_blank"}
* [Composer version specification][composer-versioning]{:target="_blank"}
* [PHP `version_compare()` specification][php-version-compare]{:target="_blank"}

## Where versioning is used

The software version can be found in the source code of any {% glossarytooltip 3425e9ae-5edf-4fc6-b645-06023e9e5e5b %}Magento component{% endglossarytooltip %} or bundle, inside the `composer.json` file.

It can be declared as the version of the component:

{% highlight JSON %}
"name": "acme/foo",
"version": 1.2.0
{% endhighlight %}

Or it can be used to declare a dependency on a particular version of a component:

{% highlight JSON %}
"require": {
    "acme/foo": "1.2.*",
    "acme/bar": "2.2.0"
}
{% endhighlight %}

### Version usage example

The following example shows how versions are used with composer to install software and third-party extensions.

This example uses several composer packages on the public github to simulate a merchant site, 2 core Magento modules, and a third-party extension.

<ol>
<li>Start by cloning the master branch from github.


  This sample in <code>composer.json</code> states this site is dependent on a release candidate of a simulated Magento 2.0 release.

{% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.0.0-RC1"
    }
}
{% endhighlight %}
</li>

<li>Run the <code>composer update</code> command. Core modules a & b are pulled down from the repository.</li>

<li>Now the SI includes a third-party extension by adding the composer dependency. This extension trusts our BC and sets the appropriate version on the module-a core dependency.

{% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.0.0-RC1",
    "myexamplestore/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and see the new extension downloaded.</li>

<li>When Magento releases 2.0 GA, the SI updates the site <code>composer.json</code> to the release version.

{% highlight JSON %}{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.0.0",
    "myexamplestore/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and notice the core modules were updated since RC1, but the extension remains unchanged because of BC policy.

   This step repeats with each subsequent release of Magento (2.1, 2.2, 2.3, etc.). Deprecation strategy and community communication happens in 2.3.
</li>

<li>Magento decides backward incompatible changes are allowed and does this as part of the upcoming release 2.4.

   {% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.4.0-RC1",
    "myexamplestore/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and notice that <code>acme-extension</code> is marked as incompatible. </li>

<li>Based upon previous communication, the developer has updated the extension so the SI updates to the new extension version.

{% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.4.0-RC1",
    "myexamplestore/acme-extension": "~2.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code>. Updates to core modules are returned as third-party extensions.</li>

</ol>

## Related Topics

[Module version dependencies][version-dependencies] - Information about how your module can depend on the version of other modules.

[Codebase changes][codebase-changes] - Information on how changes in a Magento module's codebase affect versions.

[version-dependencies]: {{page.baseurl}}/extension-dev-guide/versioning/dependencies.html
[codebase-changes]: {{page.baseurl}}/extension-dev-guide/versioning/codebase-changes.html
[semantic-versioning]: http://semver.org/
[composer-versioning]: https://getcomposer.org/doc/04-schema.md#version
[php-version-compare]: http://php.net/version_compare
[composer-json]: {{page.baseurl}}/extension-dev-guide/build/composer-integration.html
