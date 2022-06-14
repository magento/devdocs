---
group: testing
title: Using PHP built-in attributes
---

[PHP built-in attributes][] help to declare context in your code. Attributes can be used alone or together with Annotations to help to declare context in your code.

{:.bs-callout-info}
Using PHP built-in attributes is available now for the developers, and will be publicly available with Magento 2.4.5 release.
[PHPUnit annotations][] are still available for use with Magento.

## Quick overview

The following attributes are available in integration tests:

| Name                            | Attribute                        | Description                                                                                                                                                                                                                                                                              |
|---------------------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Application Isolation           | [AppIsolation][]                 | Enables or disables application isolation when you run tests. When enabled, an application state after a test run will be the same as before the test run. For example, you should enable it, when you want to create sessions in a test, but you don't want them to affect other tests. |
| Configuration Fixture           | [Config][]                       | Sets up configuration settings for a particular test. The list of settings is stored in the `core_config_data` database table. Multiple configuration parameters can be set with a signle command. After the test execution, the settings revert to their original state.                |
| Database Isolation              | [DbIsolation][]                  | Enables or disables database isolation. Disabled by default, unless you are using `DataFixture()` attribute, in which case it is enabled by default. All data, required for a test, live during transaction only. Any test results won't be written in a database.                       |
| Data Fixture                    | [DataFixture][]                  | Points to a class or a method which creates testing entities (fixtures) for test execution. These are applied during the transaction.                                                                                                                                                    |
| Data Fixture Before Transaction | [DataFixtureBeforeTransaction][] | Points to a class or a method which creates testing entities (fixtures) for test execution before the transaction has begun. You will need to implement a rollback method changes made here.                                                                                             |
| Application Area                | [AppArea][]                      | Configures test environment in the context of specified application area.                                                                                                                                                                                                                |
| Enable/Disable Cache            | [Cache][]                        | Enables or disables certain cache segment or all of them to prevent isolation problems.                                                                                                                                                                                                  |
| Indexer Dimension Mode          | [IndexerDimensionMode][]         | Sets the indexer dimension mode for the test run. More information can be found in the [DevBlog](https://community.magento.com/t5/Magento-DevBlog/Indexers-parallelization-and-optimization/ba-p/104922).                                                                                |
| Register Components             | [ComponentsDir][]                | Registers fixture components from specified directory (recursively). Unregisters the components after the test is finished.                                                                                                                                                              |


## Applying annotations

The Magento-specific annotations for integration tests are applied in the following order:

1. `AppIsolation`
1. `DbIsolation`
1. `DataFixtureBeforeTransaction`
1. `DataFixture`
1. `IndexerDimensionMode`
1. `ComponentsDir`
1. `AppArea`
1. `Cache`
1. `Config`

This order is necessary to meet the requirement of setting up the store-scoped configuration values for fixture stores (stores that are created by data fixtures).

{:.bs-callout-info}
[PHP built-in attributes][] are only available with PHP8 and above. 

<!-- LINK DEFINITIONS -->

[PHPUnit annotations]: {{ page.baseurl }}/test/integration/annotations.html
[PHP built-in attributes]: https://www.php.net/manual/en/language.attributes.overview.php
[AppIsolation]: {{ page.baseurl }}/test/integration/attributes/magento-app-isolation.html
[Config]: {{ page.baseurl }}/test/integration/attributes/magento-config-fixture.html
[DbIsolation]: {{ page.baseurl }}/test/integration/attributes/magento-db-isolation.html
[DataFixture]: {{ page.baseurl }}/test/integration/attributes/magento-data-fixture.html
[DataFixtureBeforeTransaction]: {{ page.baseurl }}/test/integration/attributes/magento-data-fixture-before-transaction.html
[AppArea]: {{ page.baseurl }}/test/integration/attributes/magento-app-area.html
[Cache]: {{ page.baseurl }}/test/integration/attributes/magento-cache.html
[IndexerDimensionMode]: {{ page.baseurl }}/test/integration/attributes/magento-indexer-dimension-mode.html
[ComponentsDir]: {{ page.baseurl }}/test/integration/attributes/magento-components-dir.html