---
layout: default
group: integration-testing
subgroup: 30_Custom_DocBlock_Annotations
title: Custom DocBlock Annotations
menu_title: Custom DocBlock Annotations
menu_node: parent
version: 2.0
github_link: test/integration/annotations.md
---

DocBlock annotations can help to declare context in your code. In addition to built-in [PHPUnit annotations] you can use custom annotations described in this topic.

The following annotations are available in integration tests:

Name|Annotation|Format|Description
---|---|---|---
Application Isolation|`@magentoAppIsolation`|`@magentoAppIsolation enabled|disabled` [invalid???]|Many integration tests rely on application state, which can be altered during execution of some tests. Such changes to the environment may cause a failure of other tests. The integration testing framework keeps tests relatively isolated and provides optimal performance simultaneously. Isolation can be controlled using the @magentoAppIsolation annotation. More information
Configuration Fixture|`@magentoConfigFixture`|`@magentoConfigFixture [<store_code>_store] <config_path> <config_value>`|Allows Magento configuration values to be set for individual tests, then reverted to their original state following test execution.
Database Isolation|`@magentoDbIsolation`| `@magentoDbIsolation enabled|disabled`|Isolates database changes, utilizing database transaction mechanism: a transaction must be started before the test, transaction commit must be avoided during the test, and the transaction must be rolled back after the test.
Data Fixture|`@magentoDataFixture`|`@magentoDataFixture <script_filename>|<method_name>`|Makes available to prepare database data as a precondition for a specific test or test case and then revert it automatically.
Application Area|`@magentoAppArea`|`@magentoAppArea adminhtml|frontend|global`|Configures test environment in the context of specified application area.
Enable/Disable Cache|`@magentoCache`|`@magentoCache <type>|all enabled|disabled`|Some integration tests introduce fixtures that may leave residue in cache. The cache may carry over into other tests, thus corrupting them. Using this directive, it is possible to disable certain cache segment (or all of them), thus preventing isolation problems.
Register Components|`@magentoComponentsDir`|`@magentoComponentsDir <dir_path>`|Registers fixture components from specified directory (recursively). Unregisters the components after the test is finished.

## Applying annotations

The Magento-specific annotations for integration tests are applied in the following order:

1. `@magentoAppIsolation`
1. `@magentoDbIsolation`
1. `@magentoDataFixture`
1. `@magentoComponentsDir`
1. `@magentoAppArea`
1. `@magentoCache`
1. `@magentoConfigFixture`

This order is necessary to meet the requirement of setting up the store-scoped configuration values for fixture stores (stores that are created by data fixtures), for example:

``` php?start_inline=1
class Mage_Newsletter_Model_TemplateTest extends PHPUnit_Framework_TestCase
{
    /**
     * Note: isolation should be raised to flush the stores memory cache
     * @magentoAppIsolation enabled
     * @magentoAppArea frontend
     * @magentoDataFixture Mage/Core/_files/store.php
     * @magentoConfigFixture fixturestore_store design/theme/full_name default/default/blue
     */
    public function testGetProcessedTemplate()
    {
        $template = new Mage_Newsletter_Model_Template;
        $text = '{{view url="Mage_Page::favicon.ico"}}';
        $template->setTemplateTextPreprocessed($text)->setTemplateText($text);
 
        $this->assertStringEndsWith(
            'skin/frontend/default/default/default/en_US/Mage_Page/favicon.ico', $template->getProcessedTemplate()
        );
 
        $storeId = Mage::app()->getStore('fixturestore')->getId();
        $template->setDesignConfig(array('area' => 'frontend', 'store' => $storeId));
        $this->assertStringEndsWith(
            'skin/frontend/default/default/blue/en_US/Mage_Page/favicon.ico', $template->getProcessedTemplate()
        );
    }
}
```

Добавить описание примера{: style="color: red"}

## Reverting Annotation

The Magento annotations for integration tests are reverted in exactly the reverse of the order in which they are applied:

1. `@magentoConfigFixture`
1. `@magentoCache`
1. `@magentoComponentsDir`
1. `@magentoAppArea`
1. `@magentoDataFixture`
1. `@magentoDbIsolation`
1. `@magentoAppIsolation`


<!-- LINK DEFINITIONS -->

[PHPUnit annotations]: https://wiki.corp.magento.com/display/MAGE2/Custom+DocBlock+Annotations#CustomDocBlockAnnotations-RevertingAnnotation


[invalid???]: https://github.com/magento/magento2/blob/develop/dev/tests/integration/framework/tests/unit/testsuite/Magento/Test/Annotation/AppIsolationTest.php