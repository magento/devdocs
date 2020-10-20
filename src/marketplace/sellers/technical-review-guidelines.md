---
group: marketplace-sellers
title: Technical Review Guidelines
---

During technical review, your code is examined to detect the presence of viruses, malware, and any indication of plagiarism. The process also ensures that the package meets Composer packaging and format requirements and Magento coding standards.

## Validate: Verify package for required files

The submitted package must be a Magento module, theme, language pack, or metapackage, that meets Composer packaging and format requirements. All Magento modules, themes, and language packs must contain a `composer.json` and `registration.php` file.

### Required Files

|--- |--- |
|All|`composer.json` <br/>`registration.php`|
|Module|`etc/module.xml`|
|Theme|`theme.xml`|
|Language Pack|`language.xml`|
|Metapackage|`composer.json`|

Developers of Magento 2.x extensions can use the validation tool to test the package before it is submitted to Magento Marketplace. To download the tool, see the Marketplace Tools GitHub repository.

_See also:_

-  [PHP Developer Guide]({{ site.baseurl }}/guides/v2.3/extension-dev-guide/bk-extension-dev-guide.html)
-  [How to Package Magento Extensions]({{ site.baseurl }}/guides/v2.3/extension-dev-guide/package/package_module.html)
-  [Packaging Magento Version 1.x Extensions]({{ site.baseurl }}/marketplace/sellers/packaging-v1x-extensions.html)

## Coding Standards: Check code quality/syntax

The Marketplace coding standard review uses a custom set of coding sniffs. If the submitted code fails to pass the review, a technical report is generated that describes each issue found, and its location in the codebase.

_See also:_ [Coding Standards]({{ site.baseurl }}/guides/v2.3/coding-standards/bk-coding-standards.html)

## Package Validation: verify that submitted code is a valid Magento extension

This check verifies that submitted code:

-  Is packaged as a valid Magento module, theme, language package, or meta-package
-  Enforces best practices for Magento code distribution
-  Helps to avoid common pitfalls

Any code submitted for technical review at [Magento Developers Portal](https://developer.magento.com/) is examined to ensure that:

1. Code submitted as a zip archive.
1. Submitted package does not exceed 30 MB.
1. Submitted package contains a `composer.json` file.
1. The `composer.json` file specifies:
   -  `name`
   -  `type`
   -  `version`
1. The `composer.json` does not declare:
   -  `extra.map`
   -  `extra.magento-root-dir`
1. The package has valid Composer package type:
   -  for extensions, valid types are: `magento2-module`, `magento2-language`, `metapackage`
   -  for themes, valid types is only `magento2-theme`
   -  for shared libraries, valid types are: `magento2-module`, `magento2-theme`, `magento2-language`
1. The package does not restict a set of compatible PHP versions declared by supported Magento versions.
1. The package does not declare any of the following packages as a dependency:
   -  `magento/magento-composer-installer`
   -  `magento/magento2-base`
   -  `magento/product-community-edition`
   -  `magento/magento2-ee-base`
   -  `magento/product-enterprise-edition`
1. The package does not use `*` as a version restriction for Magento packages (packages with `magento` vendor). Version restriction should be specified according to [recommendations](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/versioning/dependencies.html?itm_source=devdocs&itm_medium=quick_search&itm_campaign=federated_search&itm_term=versio#determine-module-dependency).
1. [Require inline aliases](https://getcomposer.org/doc/articles/aliases.md#require-inline-alias) are not used in the `composer.json` file.

Additional requirements for package declarations are applied depending on the package type.

Magento modules (packages with type `magento2-module`) must have a valid `registrar.php` file. Configured [autoloading](https://getcomposer.org/doc/04-schema.md#autoload) in `compopser.json`: `autoload.files` must include at least a `registrar.php` file and `autoload.psr-4` is expected to declare at least one namespace.

Magento themes (package type `magento2-theme`) and language packages (type `magento2-language`) must have a valid `registrar.php` file, which must be included in the `autoload.files` section of `composer.json`. `autoload.psr-4` must not be used for these types of packages.

Packages of type `metapackage` must declare at least one dependency in the `require` section.

## Intellectual Property: Check for plagiarism

All code and marketing content that is submitted to Magento Marketplace is checked for plagiarism to ensure that it has not been copied from existing Marketplace extensions or from the Magento codebase.

If the extension contains source code from the Community Edition of Magento 1.x or 2.x, the extension must be licensed under [Open Source License v. 3.0][3] and properly credit Adobe, Inc.

_See also:_ [OSL 3.0: A Better License for Open Source Software][4]

## Installation (M2 only): Verify that product installs correctly

Extensions for Magento 2.x are installed with Varnish Cache enabled for each supported version of PHP, and switched from development to [production mode]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-mode.html). If you have shared packages and dependencies required for your extension, also test installs and usage with those packages.

_See also:_ [Magento System Requirements]({{ site.baseurl }}/guides/v2.3/install-gde/system-requirements.html)

## Page Caching (M2 only): Verify that Varnish works correctly

In addition to the Production Mode test, cacheable pages are accessed to ensure that they are served directory from Varnish Cache. You will be notified if your extension fails the test.

_See also:_ [Configure and Use Varnish]({{ site.baseurl }}/guides/v2.3/config-guide/varnish/config-varnish.html)

## Quality Assurance (M2 only): Pass manual QA

This check verifies that the extension installs without error, is configurable (as applicable), and operates as expected. To pass Manual QA, the extension must meet the following requirements:

-  Installs with Composer
-  Compiles without errors using the following command: [`deploy:mode:set production`](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html#change-to-production-mode)
-  Extension has all supportive documentation that complies with [Documentation guides](#Documentation and Resources)
-  Works with each version of Magento that is shown as supported in the extension product profile.
    -  Basic Magento functionality works as expected with the installed extension.
    -  Basic test suite includes, but not limited to the next scenarios:
       - Create order as guest user (Simple product, Configurable product)
       - Create a new customer
       - Create order as (Simple product, Configurable product)
       - Place an order via "Check Out with Multiple Addresses"
       - Create re-order from previously created order
       - Add product to Wishlist
       - Add product to Comparison list
       - As store admin: Create Invoice, Shipping, Credit Memo
       - As store admin: Create new order (re-order)
       - As store admin: Create new product with images (Simple product, Configurable product)
       - As store admin: Create new product category
-  Works with each version of PHP that is supported by the Magento version that is shown as supported in the extension product profile.
-  Has all functionality that is described in the extension documentation and vice versa.
-  Does not crash with unhandled errors.
-  Does not hang when invalid data is submitted.

### Exit criteria for testing

-  At least one major issue found in Magento functionality which was affected by an installed extension.
-  Blocking issue found and it affects entire extension functionality.
    -  For big extensions, where functionality not concentrated in one particular area we can switch to the not affected area and continue to test it in order to provide more errors to the developer. At the same time, we can stop testing once we have found 2 blockers in separate areas of an extension. 

_See also:_
-  [Install an Extension via Composer](https://devdocs.magento.com/cloud/howtos/install-components.html#install-an-extension)
-  [General CLI installation](https://devdocs.magento.com/extensions/install/)

## Documentation and Resources

The documentation provided with the extension should comply with the next requirements:

-  User guide should be submitted in one of the following formats:
    -  A PDF that describes the extension setup and features.
    -  A PDF containing a link to a wiki or a similar page that describes the extension setup and features.
-  Extension documentation should cover all features of the extension. 
-  Extension documentation should not direct users to make purchases on sites other than Marketplace.

_See also:_
-  [Polishing your Marketplace submission: 7 tips from the Marketplace EQP team](https://community.magento.com/t5/Magento-DevBlog/Polishing-your-Marketplace-submission-7-tips-from-the/ba-p/142382)

## For Page Builder extensions

-  New and extended content types can be dragged to the stage, edited, duplicated, moved, hidden, saved, and deleted from the stage without errors.
-  New and extended content types are rendered on the storefront without errors.
-  Extensions that use Page Builder should also ensure that all Page Builder content creation functions work correctly. This includes, but is not limited to, all the functions previously described for new and extended content types rendered in the Admin stage and the storefront.

[3]: https://opensource.org/licenses/OSL-3.0
[4]: http://rosenlaw.com/OSL3.0-explained.htm
