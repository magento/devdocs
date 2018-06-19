---
group: integration-testing
version: 2.1
title: Configuration Fixture Annotation
github_link: /test/integration/annotations/magentoConfigFixture.md
---

Integration testing framework allows Magento configuration values to be set for individual tests, then reverted to their original state following test execution.
Annotation `@magentoConfigFixture` is used for this purpose.

## Format

> Fixture for the configuration option

```php?start_inline=1
/**
 * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>
 */
```

Here,
* `<store_code>` is a store code in which specified fixture value take effect. When omitted, configuration option is considered to have global scope.
  Reserved value current can be used to specify the current store.
* `<config_path>` is XPath of the configuration option.
* `<config_value>` is a fixture value for the configuration option.

## Usage

The annotation can be used multiple times in one test to declare required precondition values for multiple configuration options.
For example:

> Configuration values setup

```php?start_inline=1
class Magento_Test_Annotation_ConfigFixtureTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Mage_Core_Model_Config
     */
    protected $_config;
 
    /**
     * Core store config
     *
     * @var Magento_Core_Model_Store_Config
     */
    protected $_coreStoreConfig = null;
 
    /**
     * @magentoConfigFixture               web/unsecure/base_url  http://example.com/
     * @magentoConfigFixture               web/secure/base_url    https://example.com/
     * @magentoConfigFixture current_store dev/restrict/allow_ips 192.168.0.1
     * @magentoConfigFixture admin_store   dev/restrict/allow_ips 192.168.0.2
     */
    public function testConfigFixtures()
    {
        $this->assertEquals('http://example.com/', (string)$this->_config->getNode('web/unsecure/base_url'));
        $this->assertEquals('https://example.com/', (string)$this->_config->getNode('web/secure/base_url'));
        $this->assertEquals('192.168.0.1', $this->_coreStoreConfig->getConfig('dev/restrict/allow_ips'));
        $this->assertEquals('192.168.0.2', $this->_coreStoreConfig->getConfig('dev/restrict/allow_ips', 'admin'));
    }
}
```

Unlike `@magentoDataFixture`, the `@magentoConfigFixture` cannot be used on test case level.
{:.bs-callout .bs-call-info}