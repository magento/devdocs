---
group: php-developer-guide
title: Magento versioning schema
---

Magento software and Magento module releases have their own unique version number.

## Software version format

A change in the version for the Magento software indicates a patch or feature release.
This version change does not reflect the nature of the changes in the code base.

## Module version format

The `version` field in a modules [`composer.json`][composer-json] file specifies the module version and consists of three numbers in the following format:

`MAJOR.MINOR.PATCH`

The format follows [Semantic Versioning][semantic-versioning] rules:

*  The MAJOR version increments when incompatible API changes are made.
*  The MINOR version increments when backward-compatible functionality has been added.
*  The PATCH version increments when backward-compatible bug fixes occur.

### Pre-release versions

For pre-release versions, the format is:

`MAJOR.MINOR.PATCH-<alpha | beta | rc>n`

|||
|--|--|
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

### Version usage example

The following example shows how versions are used with composer to install software and third-party extensions.

This example uses several composer packages on the public GitHub to simulate a merchant site, 2 core Magento modules, and a third-party extension.

1. Start by cloning the master branch from GitHub.

   This sample in `composer.json` states this site is dependent on a release candidate of a simulated Magento 2.0 release.

    ```json
    {
      "name": "myexamplestore/sample-site",
      "description": "A sample site",
      "type": "project",
      "version": "1.0.0",
      "require": {
        "myexamplestore/product-bundle": "2.0.0-RC1"
        }
    }
    ```

1. Run the <code>composer update</code> command. Core modules a & b are pulled down from the repository.

1. Now the SI includes a third-party extension by adding the composer dependency. This extension trusts our BC and sets the appropriate version on the module-a core dependency.

    ```json
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
    ```

1. Run `composer update` and see the new extension downloaded.

1. When Magento releases 2.0 GA, the SI updates the site `composer.json` to the release version.

    ```json{
      "name": "myexamplestore/sample-site",
      "description": "A sample site",
      "type": "project",
      "version": "1.0.0",
      "require": {
        "myexamplestore/product-bundle": "2.0.0",
        "myexamplestore/acme-extension": "~1.0"
        }
    }
    ```

1. Run `composer update` and notice the core modules were updated since RC1, but the extension remains unchanged because of BC policy.

    This step repeats with each subsequent release of Magento (2.1, 2.2, 2.3, etc.). Deprecation strategy and community communication happens in 2.3.

1. Magento decides backward incompatible changes are allowed and does this as part of the upcoming release 2.4.

    ```json
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
    ```

1. Run `composer update` and notice that `acme-extension` is marked as incompatible.

1. Based upon previous communication, the developer has updated the extension so the SI updates to the new extension version.

    ```json
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
    ```

1. Run `composer update`. Updates to core modules are returned as third-party extensions.

## Related Topics

[Module version dependencies][version-dependencies] - Information about how your module can depend on the version of other modules.
[Codebase changes][codebase-changes] - Information on how changes in a Magento module's codebase affect versions.
[version-dependencies]: {{ page.baseurl }}/extension-dev-guide/versioning/dependencies.html
[codebase-changes]: {{ page.baseurl }}/extension-dev-guide/versioning/codebase-changes.html
[semantic-versioning]: http://semver.org/
[composer-versioning]: https://getcomposer.org/doc/04-schema.md#version
[php-version-compare]: http://php.net/version_compare
[composer-json]: {{ page.baseurl }}/extension-dev-guide/build/composer-integration.html
