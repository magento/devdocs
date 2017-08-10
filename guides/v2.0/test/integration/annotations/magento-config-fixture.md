---
layout: default
group: integration-testing
subgroup: 30_Custom_DocBlock_Annotations
title: magentoConfigFixture
menu_title: magentoConfigFixture
version: 2.0
github_link: test/integration/annotations/magento-config-fixture.md
---

Integration testing framework allows Magento configuration values to be set for individual tests, then reverted to their original state following test execution. Annotation @magentoConfigFixture is used for this purpose.

```
Fixture for Configuration Option
/**
 * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>
 */
```

Where:
- `<store_code>` – store code in which specified fixture value take effect. When omitted, configuration option is considered to have global scope. Reserved value current can be used to specify the current store.
- `<config_path>` – XPath of a configuration option
- `config_value>` – fixture value for a configuration option

## In a test case

Not supported.

## In a test

Emulates config values within a method context

## Example

The annotation can be used multiple times in one test to declare required precondition values for multiple configuration options. For example, setting up configuration values:

{% highlight php startinline=1 %}
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
{% endhighlight %}

