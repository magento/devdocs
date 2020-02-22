---
title: Technical Review Guidelines
redirect_from:
  - /extensions/review-technical.html
  - /getting-started/guidelines.html
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

Developers of Magento 2.x extensions can use the validation tool to test the package before it is submitted to Magento Marketplace. To download the tool, see the [Marketplace Tools][1] GitHub repository.

**_See also:_**

* [PHP Developer Guide][2]{: target="_blank"}
* [How to Package Magento Extensions][3]{: target="_blank"}
* [Packaging Magento Version 1.x Extensions]({% link sellers/packaging-v1x-extensions.md %})

## Coding Standards: Check code quality/syntax

The Marketplace coding standard review uses a custom set of coding sniffs. If the submitted code fails to pass the review, a technical report is generated that describes each issue found, and its location in the codebase.

**_See also:_** [Coding Standards][4]{: target="_blank"}

## Intellectual Property: Check for plagiarism

All code and marketing content that is submitted to Magento Marketplace is checked for plagiarism to ensure that it has not been copied from existing Marketplace extensions or from the Magento codebase.

If the extension contains source code from the Community Edition of Magento 1.x or 2.x, the extension must be licensed under [Open Source License v. 3.0][5]{: target="_blank"} and properly credit Magento, Inc.

**_See also:_** [OSL 3.0: A Better License for Open Source Software][6]{: target="_blank"}

## Installation (M2 only): Verify that product installs correctly

Extensions for Magento 2.x are installed with Varnish Cache enabled for each supported version of PHP, and switched from development to [production mode][7]{: target="_blank"}. If you have shared packages and dependencies required for your extension, also test installs and usage with those packages.

**_See also:_** [Magento System Requirements][8]{: target="_blank"}

## Page Caching (M2 only): Verify that Varnish works correctly

In addition to the Production Mode test, cacheable pages are accessed to ensure that they are served directory from Varnish Cache. You will be notified if your extension fails the test.

**_See also:_** [Configure and Use Varnish][9]{: target="_blank"}

## Quality Assurance (M2 only): Pass manual QA

This check verifies that the extension installs without error, is configurable (as applicable), and operates as expected. To pass Manual QA, the extension must meet the following requirements:

* Installs with Composer
* Compiles without errors using the following command: `deploy:mode:set production`
* Works with each version of Magento that is shown as supported in the extension product profile
* Works with each version of PHP that is supported by the Magento version that is shown as supported in the extension product profile
* Has all functionality that is described in the extension documentation
* Does not crash with unhandled errors
* Does not hang when invalid data is submitted

**For Page Builder extensions:**

* New and extended content types can be dragged to the stage, edited, duplicated, moved, hidden, saved, and deleted from the stage without errors.
* New and extended content types are rendered on the storefront without errors.
* Extensions that use Page Builder should also ensure that all Page Builder content creation functions work correctly. This includes, but is not limited to, all the functions previously described for new and extended content types rendered in the Admin stage and the storefront.

[1]: https://github.com/magento/marketplace-tools
[2]: http://devdocs.magento.com/guides/v2.3/extension-dev-guide/bk-extension-dev-guide.html
[3]: http://info2.magento.com/rs/magentosoftware/images/packagingmagentoconnectextensions6 0.pdf
[4]: http://devdocs.magento.com/guides/v2.3/coding-standards/bk-coding-standards.html
[5]: https://opensource.org/licenses/OSL-3.0
[6]: http://rosenlaw.com/OSL3.0-explained.htm
[7]: http://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-mode.html
[8]: https://devdocs.magento.com/guides/v2.3/install-gde/system-requirements.html
[9]: http://devdocs.magento.com/guides/v2.3/config-guide/varnish/config-varnish.html
