---
group: marketplace-sellers
title: Technical Review Guidelines
---

During technical review, your code is examined to detect the presence of viruses, malware, and any indication of plagiarism. The process also ensures that the package meets Composer packaging and format requirements and Magento coding standards.

## Submission

The technical review begins as soon as you upload an extension package at [Developer Portal](https://developer.magento.com/) and consists of two mandatory steps to generate the submission id and trigger further extension testing:

1. [Malware Scan]({{ site.baseurl }}/marketplace/sellers/malware-scan.html) &mdash; Ensures that uploaded packages do not contain viruses or malware software.
1. Extension Package Verification &mdash; Checks that the uploaded file is a zip archive which is a [Composer](https://getcomposer.org/) package with Magento extension.

### Extension Package Verification

Package submissions must contain a Magento module, theme, language pack, or metapackage that meets Composer packaging and format requirements:

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

1. The package does not use `*` as a version restriction for Magento packages (packages with `magento` vendor). You must specify version restriction according to the [recommendations]({{ site.baseurl }}/guides/v2.4/extension-dev-guide/versioning/dependencies.html#determine-module-dependency) in the _Magento PHP Developer Guide_.

1. [Require inline aliases](https://getcomposer.org/doc/articles/aliases.md#require-inline-alias) are not used in the `composer.json` file.

Additional requirements for package declarations are applied based on the package type:

1. Magento modules (packages with type `magento2-module`) must have valid `etc/module.xml` and `registration.php` files. Configured [autoloading](https://getcomposer.org/doc/04-schema.md#autoload) in `composer.json`: `autoload.files` must include at least a `registration.php` file and the `autoload.psr-4` section must declare at least one namespace.
1. Magento themes (package type `magento2-theme`) must have valid `theme.xml` and `registration.php` files. You must include the registration file in the `autoload.files` section of `composer.json`.  Do not include an `autoload.psr-4` declaration in a theme package.
1. Magento language packages (type `magento2-language`) must have valid `language.xml` and `registration.php` files. You must include the registration file in the `autoload.files` section of `composer.json`. Do not include an `autoload.psr-4` declaration in a language package.
1. Packages of type `metapackage` must declare at least one dependency in the `require` section.

_See also:_

-  [PHP Developer Guide]({{ site.baseurl }}/guides/v2.4/extension-dev-guide/bk-extension-dev-guide.html)
-  [How to Package Magento Extensions]({{ site.baseurl }}/guides/v2.4/extension-dev-guide/package/package_module.html)

## Extension Validation and QA

After accepting a package for Technical Review, a series of automated checks and manual checks are scheduled.

### Code Sniffer: Check code quality/syntax

The Marketplace coding standard review uses a custom set of coding sniffs. If the submitted code fails the review, Magento generates a technical report that describes each issue found and its location in the codebase.

_More details:_ [Code Sniffer]({{ site.baseurl }}/marketplace/sellers/code-sniffer.html)

_See also:_ [Coding Standards]({{ site.baseurl }}/guides/v2.4/coding-standards/bk-coding-standards.html)

### Copy Paste Detector: Check for plagiarism

All code and marketing content that is submitted to Magento Marketplace is checked for plagiarism to ensure that it has not been copied from existing Marketplace extensions or from the Magento codebase.

If the extension contains source code from the Open Source Edition, the extension must be licensed under [Open Source License v. 3.0][3] and properly credit Adobe, Inc.

_More details:_ [Copy Paste Detector]({{ site.baseurl }}/marketplace/sellers/copy-paste-detector.html)

_See also:_ [OSL 3.0: A Better License for Open Source Software][4]

### Installation and Varnish Tests: Verify that product installs and caching works correctly

Extensions for Magento are installed with Varnish Cache enabled for each supported version of PHP and switched from development to [production mode]({{ site.baseurl }}/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html). If you have shared packages and dependencies required for your extension, the Installation test also tests Magento installation and usage with those packages included.

In addition, cacheable pages are accessed to ensure that they are served directly from Varnish Cache. You will be notified if your extension fails the test.

_More details:_ [Installation and Varnish Tests]({{ site.baseurl }}/marketplace/sellers/installation-and-varnish-tests.html)

_See also:_

-  [Configure and Use Varnish]({{ site.baseurl }}/guides/v2.4/config-guide/varnish/config-varnish.html)
-  [Magento System Requirements]({{ site.baseurl }}/guides/v2.4/install-gde/system-requirements.html)

### Quality Assurance: Pass Manual QA

This check verifies that the extension installs without error, is configurable (as applicable), and operates as expected.

Manual QA can be skipped if the [Semantic Version Check]({{ site.baseurl }}/marketplace/sellers/semantic-version-check.html) confirms that only patch-level changes were introduced in a new version of an already listed extension.

#### Documentation and resources
Magento uses the documentation provided with the extension during manual QA. The submitted documentation must comply with the following requirements:

1. Submit the user guide in one of the following formats:

   -  A PDF that describes the extension setup and features.
   -  A PDF containing a link to a wiki or a similar page that describes the extension setup and features.

1. Extension documentation must cover all features of the extension.

1. Extension documentation must not direct users to make purchases on sites other than Marketplace.

_See also:_ [Polishing your Marketplace submission: 7 tips from the Marketplace EQP team](https://community.magento.com/t5/Magento-DevBlog/Polishing-your-Marketplace-submission-7-tips-from-the/ba-p/142382)

#### Manual QA checklist

To pass Manual QA, the extension must meet the following requirements:

1. Installs with Composer.
1. Compiles without errors using the following command: [`deploy:mode:set production`](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html#change-to-production-mode)
1. Extension has all supporting documentation that complies with the [documentation requirements](#documentation-and-resources)
1. Works with each version of Magento that the extension claims to support in the extension product profile.

   -  Basic Magento functionality works as expected with the installed extension.
   -  Basic test suite includes, but is not limited to the following scenarios:

      -  Create order as guest user (Simple product, Configurable product)
      -  Create a new customer
      -  Create order as (Simple product, Configurable product)
      -  Place an order via "Check Out with Multiple Addresses"
      -  Create re-order from previously created order
      -  Add product to Wishlist
      -  Add product to Comparison list
      -  As store admin: Create Invoice, Shipping, Credit Memo
      -  As store admin: Create new order (re-order)
      -  As store admin: Create new product with images (Simple product, Configurable product)
      -  As store admin: Create new product category

1. Works with each version of PHP that is supported by the Magento version that the extension claims to support in the extension product profile.
1. Has all functionality that is described in the extension documentation and vice versa.
1. Does not crash with unhandled errors.
1. Does not hang when invalid data is submitted.

_See also:_

-  [Install an Extension via Composer](https://devdocs.magento.com/cloud/howtos/install-components.html#install-an-extension)
-  [General CLI installation](https://devdocs.magento.com/extensions/install/)

#### Additional checks for Page Builder extensions

Extensions that claim to support Magento Page Builder are subject to the following additional checks:

1. New and extended content types can be dragged to the stage, edited, duplicated, moved, hidden, saved and deleted from the stage without errors.
1. New and extended content types are rendered on the storefront without errors.
1. Extensions that use Page Builder must also support correct operation of all Page Builder content creation functions. This includes, but is not limited to, all the functions previously described for new and extended content types rendered in the Admin stage and the storefront.

#### Exit criteria for testing

1. At least one major issue found in Magento functionality which was affected by an installed extension.
1. Blocking issue found that affects entire extension functionality.
1. For big extensions, where functionality is not concentrated in one particular area we can switch to the unaffected area and continue to test it in order to provide more errors to the developer. At the same time, we can stop testing once we have found 2 blockers in separate areas of an extension.

[3]: https://opensource.org/licenses/OSL-3.0
[4]: http://rosenlaw.com/OSL3.0-explained.htm
