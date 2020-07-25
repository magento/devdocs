---
group: php-developer-guide
title: Magento versioning schema
redirect_from:
  - /guides/v2.3/architecture/versioning.html
---

Magento software and Magento module releases have their own unique version number.

## Software version format

A change in the version for the Magento software indicates a patch or feature release.
This version change does not reflect the nature of the changes in the code base.

## Module version format

The `version` field in a modules [`composer.json`][composer-json] file specifies the module version and consists of three numbers in the following format:

`MAJOR.MINOR.PATCH`

The format follows [Semantic Versioning][semantic-versioning] rules for any `@api` annotated by `code`:

*  The MAJOR version increments when incompatible API changes are made.
*  The MINOR version increments when backward-compatible functionality has been added or if the module's customization points have changed.
*  The PATCH version increments when backward-compatible bug fixes occur.

### Pre-release versions

For pre-release versions, the format is:

`MAJOR.MINOR.PATCH-<alpha | beta | rc>n`

| `alpha`, `beta` or `rc` | Stability indicators, as described in the [`version_compare()`][php-version-compare]{:target="_blank"} specification|
| `n` | An increment number to distinguish releases of the non-stable versions |

Magento's module versioning policy complies with the following specifications:

*  [Semantic Versioning][semantic-versioning]{:target="_blank"}
*  [Composer version specification][composer-versioning]{:target="_blank"}
*  [PHP `version_compare()` specification][php-version-compare]{:target="_blank"}

## Where versioning is used

The software version can be found in the source code of any [Magento component](https://glossary.magento.com/magento-component) or bundle, inside the `composer.json` file.

It can be declared as the version of the component:

```json
"name": "acme/foo",
"version": 1.2.0
```

Or it can be used to declare a dependency on a particular version of a component:

```json
"require": {
    "acme/foo": "1.2.*",
    "acme/bar": "2.2.0"
}
```

 {:.bs-callout-info}
If Magento is installed from GitHub without using Composer, the `version` is not included. Magento Admin displays the version as `Magento ver. dev-<GitHub-branch-name>`. In addition, Magento modules inside the `require` declaration  list a version of `*`. For example, `"magento/framework": "*"`

## Related Topics

[Module version dependencies][version-dependencies] - Information about how your module can depend on the version of other modules.

[Codebase changes][codebase-changes] - Information on how changes in a Magento module's codebase affect versions.

[Backward compatible development]({{ site.baseurl }}/contributor-guide/backward-compatible-development/index.html) - Information about MAJOR and MINOR changes and how they impact extension developers.

[version-dependencies]: {{ page.baseurl }}/extension-dev-guide/versioning/dependencies.html
[codebase-changes]: {{ page.baseurl }}/extension-dev-guide/versioning/codebase-changes.html
[semantic-versioning]: http://semver.org/
[composer-versioning]: https://getcomposer.org/doc/04-schema.md#version
[php-version-compare]: http://php.net/version_compare
[composer-json]: {{ page.baseurl }}/extension-dev-guide/build/composer-integration.html
