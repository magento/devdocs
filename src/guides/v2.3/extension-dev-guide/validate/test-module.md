---
group: php-developer-guide
title: Test your component
---

## Unit and Integration Tests {#test-unit}

Run the PHPUnit based Magento unit and integration tests.
See the [Magento Testing Overview].

## Functional testing {#test-functional}

For further testing with the Magento functional testing frameworks, see
[Functional Testing Framework] and [Magento Functional Testing Framework].

## Test using {{site.data.var.ce}} {#test-comm}

Test your component by deploying {{site.data.var.ce}} and adding the component to the project's `composer.json`. To install, see [Install using Composer].

```json
"require": {
    "magento/magento-composer-installer": "*",
    "yourvendorname/module-one": "0.1.1"
},
```

[Register] your component, including the file location. Verify it works as expected, without compromising Magento functionality.

## Test installing your component {#test-install}

Before you publish your component, test installing it using the [Magento Component Manager]. Access this feature through [Web Setup Wizard] in the Magento Admin.

1. [Package your component] in a GitHub repository that is accessible by the machine on which you run the [Magento Admin](https://glossary.magento.com/magento-admin).
1. On that machine, create a static route from `https://repo.magento.com` to your GitHub repository.

    To create a static route, add a line similar to the following to your `hosts` file:

    ```conf
    <IP or hostname of your GitHub repository> https://repo.magento.com
    ```

1. [Install your component], like a merchant.
1. Verify it installed correctly.

## More information

See these resources for testing in [PHP](https://glossary.magento.com/php) and validating Magento components:

*  The [Magento Coding Standard] provides a set of rules and sniffs for the [PHP_CodeSniffer] tool
*  [Technical Deep Dive: How to Pass the Magento Marketplace Extension Quality Program] (video) from Magento Imagine 2017
*  [Extension Quality Program]({{ site.baseurl }}/marketplace/sellers/extension-quality-program.html) in the Magento User Guide
*  [01 The Module Skeleton Kata] (video) by [Mage2Katas]

[Magento Testing Overview]: {{ page.baseurl }}/test/testing.html
[Magento Functional Testing Framework]: https://devdocs.magento.com/mftf/docs/introduction.html
[register]: {{ page.baseurl }}/extension-dev-guide/build/component-registration.html
[Magento Component Manager]: {{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html
[Web Setup Wizard]: https://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html
[Package your component]: {{ page.baseurl }}/extension-dev-guide/package/package_module.html
[Install your component]: {{ site.baseurl }}/extensions/install/
[Install using Composer]: {{ page.baseurl }}/install-gde/install/sample-data-after-composer.html
[Magento Coding Standard]: https://github.com/magento/magento-coding-standard
[PHP_CodeSniffer]: https://github.com/squizlabs/PHP_CodeSniffer
[Technical Deep Dive: How to Pass the Magento Marketplace Extension Quality Program]: https://magento.com/resources/technical-deep-dive-how-pass-magento-marketplace-extension-quality-program
[01 The Module Skeleton Kata]: https://www.youtube.com/watch?v=JvBWJ6Lm9MU)
[Mage2Katas]: http://mage2katas.com/
