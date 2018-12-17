---
group: integration-testing
title: Configuration Fixture Annotation
---

The Integration Testing Framework (ITF) enables you to set the Magento configuration values for individual tests and revert them after the test execution.
Use the `@magentoConfigFixture` annotation for this purpose.

## Format

Code format for a fixture setting the configuration option:

```php?start_inline=1
/**
 * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>
 */
```

Here,

- `<store_code>` is a code of the store to be configured.
 If it is not specified, the configuration option is applied globally.
 To specify the current store, use `current`.
- `<config_path>` is XPath of the configuration option. See [configuration reference]({{ page.baseurl }}/config-guide/prod/config-reference-sens.html) for available options.
- `<config_value>` is a fixture value for the configuration option.

## Principles

1. The `@magentoConfigFixture` is applicable in scope of a test method only.
   It is not available on a test case level.
2. You can declare more than one configuration option for a test.

## Usage

The following example demonstrates the `testConfigFixtures` test that uses the special Magento configuration, where:

- `web/unsecure/base_url` equals `http://example.com/` globally
- `web/secure/base_url` equals `https://example.com/` globally
- `dev/restrict/allow_ips` equals `192.168.0.1` for the current store
- `dev/restrict/allow_ips` equals `192.168.0.2` for the `admin_store` store

The test asserts that the specified configuration options have been applied.

```php?start_inline=1
namespace Magento\Test\Annotation;

class Magento\Test\Annotation\ConfigFixtureTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var Mage_Core_Model_Config
     */
    protected $_config;

    /**
     * Core store config
     *
     * @var \Magento\Core\Model\Store\Config
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