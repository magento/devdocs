---
layout: default
group: extension-dev-guide
subgroup: Versioning
title: Versioning
menu_title: Versioning
menu_order: 1000
menu_node: parent
version: 2.3
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

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If Magento is installed from GitHub without using Composer, the `version` is not included. Magento Admin displays the version as `Magento ver. dev-<GitHub-branch-name>`. In addition, Magento modules inside the `require` declaration  list a version of `*`. For example, `"magento/framework": "*"`
</div>


## Related Topics

[Module version dependencies][version-dependencies] - Information about how your module can depend on the version of other modules.

[Codebase changes][codebase-changes] - Information on how changes in a Magento module's codebase affect versions.

[Backward compatible development]({{page.baseurl}}/contributor-guide/backward-compatible-development/index.html) - Information about MAJOR and MINOR changes and how they impact extension developers.



[version-dependencies]: {{page.baseurl}}/extension-dev-guide/versioning/dependencies.html
[codebase-changes]: {{page.baseurl}}/extension-dev-guide/versioning/codebase-changes.html
[semantic-versioning]: http://semver.org/
[composer-versioning]: https://getcomposer.org/doc/04-schema.md#version
[php-version-compare]: http://php.net/version_compare
[composer-json]: {{page.baseurl}}/extension-dev-guide/build/composer-integration.html
