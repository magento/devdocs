---
group: testing
title: Using DocBlock Annotations
---

DocBlock annotations help to declare context in your code. In addition to built-in [PHPUnit annotations][]
, the Integration testing framework provides custom annotations described in this topic.

### Quick overview

The following annotations are available in integration tests:

Name|Annotation|Format|Description
---|---|---|---
Application Isolation|`@magentoAppIsolation`|`@magentoAppIsolation enabled|disabled`|Enables or disables application isolation when you run tests. When enabled, an application state after a test run will be the same as before the test run. For example, you should enable it, when you want to create sessions in a test, but you don't want them to affect other tests.
Configuration Fixture|`@magentoConfigFixture`|`@magentoConfigFixture [<store_code>_store] <config_path> <config_value>`|Sets up configuration settings for a particular test. The list of settings is stored in the `core_config_data` database table. After the test execution, the settings revert to their original state.
Database Isolation|`@magentoDbIsolation`|`@magentoDbIsolation enabled|disabled`|Enables or disables database isolation. Disabled by default, unless you are using `@magentoDataFixture`, in which case it is enabled by default. All data, required for a test, live during transaction only. Any test results won't be written in a database.
Data Fixture|`@magentoDataFixture`|`@magentoDataFixture <script_filename>|<method_name>`|Points to a class or a method which creates testing entities (fixtures) for test execution.
Application Area|`@magentoAppArea`|`@magentoAppArea adminhtml|frontend|global`|Configures test environment in the context of specified application area.
Enable/Disable Cache|`@magentoCache`|`@magentoCache <type>|all enabled|disabled`|Enables or disables certain cache segment or all of them to prevent isolation problems.
Register Components|`@magentoComponentsDir`|`@magentoComponentsDir <dir_path>`|Registers fixture components from specified directory (recursively). Unregisters the components after the test is finished.

### Applying annotations

The Magento-specific annotations for integration tests are applied in the following order:

1. `@magentoAppIsolation`
1. `@magentoDbIsolation`
1. `@magentoDataFixture`
1. `@magentoComponentsDir`
1. `@magentoAppArea`
1. `@magentoCache`
1. `@magentoConfigFixture`

This order is necessary to meet the requirement of setting up the store-scoped configuration values for fixture stores (stores that are created by data fixtures).

<!-- LINK DEFINITIONS -->

[PHPUnit annotations]: https://phpunit.readthedocs.io/en/7.4/annotations.html
