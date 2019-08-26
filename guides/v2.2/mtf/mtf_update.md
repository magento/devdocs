---
group: functional-testing-framework-guide
title: Update the Functional Testing Framework
---

{: .bs-callout-info}
The Magento Testing Framework (MTF) is superseded by the Magento Functional Testing Framework ([MFTF][]).
While the MTF is still functional, all MTF tests are being ported over to the MFTF. We recommend using the MFTF for testing.

Two types of updates are available.

-     [Install a new version of the Functional Testing Framework](#mtf_update_install)

{: .bs-callout-info }
Use this type of update if the version of the Functional Testing Framework in `<magento2>/dev/tests/functional/composer.json` and last version in `<magento2>/dev/tests/functional/vendor/magento/mtf/CHANGELOG.md` are different. For example, when you updated Magento.

-    [Update components from dependencies in `<magento2>/dev/tests/functional/composer.json`](#mtf_update_depend)

{: .bs-callout-info }
Use this type of update if you want to update dependent software from `composer.json`, or changed `composer.json` dependencies.

### Install a new version of the Functional Testing Framework {#mtf_update_install}

Step 1.    To avoid conflicts with the previous version, remove directory `<magento2_root_dir>/dev/tests/functional/generate`.

Step 2.    Remove file `<magento2_root_dir>/dev/tests/functional/composer.lock`.

{: .bs-callout-info }
**Why:** [Composer](https://glossary.magento.com/composer) reads dependencies from `composer.lock` instead of reading `composer.json`. File `composer.lock` currently is not maintained.

Step 3.    [Perform and check installation.]({{ page.baseurl }}/mtf/mtf_installation.html#mtf_install_perform)

### Update components from dependencies in <code>composer.json</code> {#mtf_update_depend}

Enter in terminal:

```bash
cd <magento2_root_dir>/dev/tests/functional/
```

```bash
composer update
```

[MFTF]: https://devdocs.magento.com/mftf/docs/introduction.html
