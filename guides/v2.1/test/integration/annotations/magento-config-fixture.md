---
group: testing
title: Configuration fixture annotation
---

To set the Magento configuration values for individual tests and revert them after the test executes, use the `@magentoConfigFixture` annotation.

## Format

```php?start_inline=1
/**
 * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>
 */
```

- `<store_code>` is a code of the store to be configured.
  By default, the configuration option is applied globally.
  To specify the current store, use `current`.
- `<config_path>` is an XPath to the configuration option.
  See [configuration reference][] for available options.
- `<config_value>` is a fixture value for the configuration option.

## Principles

1. The `@magentoConfigFixture` is available at the test method level only.
   It is not available on a test case level.
2. A test can contain several configuration options.

## Example

```php?start_inline=1
<?php

/**
 * Test class for \Magento\TestFramework\Annotation\ConfigFixture.
 */
namespace Magento\Test\Annotation;

class ConfigFixtureTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var \Magento\TestFramework\Annotation\ConfigFixture|\PHPUnit_Framework_MockObject_MockObject
     */
    protected $_object;

    protected function setUp()
    {
        $this->_object = $this->getMock(
            'Magento\TestFramework\Annotation\ConfigFixture',
            ['_getConfigValue', '_setConfigValue']
        );
    }

    /**
     * @magentoConfigFixture current_store web/unsecure/base_url http://example.com/
     */
    public function testGlobalConfig()
    {
        $this->_object->expects(
            $this->at(0)
        )->method(
            '_getConfigValue'
        )->with(
            'web/unsecure/base_url'
        )->will(
            $this->returnValue('http://localhost/')
        );
        $this->_object->expects(
            $this->at(1)
        )->method(
            '_setConfigValue'
        )->with(
            'web/unsecure/base_url',
            'http://example.com/'
        );
        $this->_object->startTest($this);

        $this->_object->expects(
            $this->once()
        )->method(
            '_setConfigValue'
        )->with(
            'web/unsecure/base_url',
            'http://localhost/'
        );
        $this->_object->endTest($this);
    }

    /**
     * @magentoConfigFixture current_store dev/restrict/allow_ips 192.168.0.1
     */
    public function testCurrentStoreConfig()
    {
        $this->_object->expects(
            $this->at(0)
        )->method(
            '_getConfigValue'
        )->with(
            'dev/restrict/allow_ips',
            ''
        )->will(
            $this->returnValue('127.0.0.1')
        );
        $this->_object->expects(
            $this->at(1)
        )->method(
            '_setConfigValue'
        )->with(
            'dev/restrict/allow_ips',
            '192.168.0.1',
            ''
        );
        $this->_object->startTest($this);

        $this->_object->expects(
            $this->once()
        )->method(
            '_setConfigValue'
        )->with(
            'dev/restrict/allow_ips',
            '127.0.0.1',
            ''
        );
        $this->_object->endTest($this);
    }

    /**
     * @magentoConfigFixture admin_store dev/restrict/allow_ips 192.168.0.2
     */
    public function testSpecificStoreConfig()
    {
        $this->_object->expects(
            $this->at(0)
        )->method(
            '_getConfigValue'
        )->with(
            'dev/restrict/allow_ips',
            'admin'
        )->will(
            $this->returnValue('192.168.0.1')
        );
        $this->_object->expects(
            $this->at(1)
        )->method(
            '_setConfigValue'
        )->with(
            'dev/restrict/allow_ips',
            '192.168.0.2',
            'admin'
        );
        $this->_object->startTest($this);

        $this->_object->expects(
            $this->once()
        )->method(
            '_setConfigValue'
        )->with(
            'dev/restrict/allow_ips',
            '192.168.0.1',
            'admin'
        );
        $this->_object->endTest($this);
    }

    public function testInitStoreAfterOfScope()
    {
        $this->_object->expects($this->never())->method('_getConfigValue');
        $this->_object->expects($this->never())->method('_setConfigValue');
        $this->_object->initStoreAfter();
    }

    /**
     * @magentoConfigFixture current_store web/unsecure/base_url http://example.com/
     */
    public function testInitStoreAfter()
    {
        $this->_object->startTest($this);
        $this->_object->expects(
            $this->at(0)
        )->method(
            '_getConfigValue'
        )->with(
            'web/unsecure/base_url'
        )->will(
            $this->returnValue('http://localhost/')
        );
        $this->_object->expects(
            $this->at(1)
        )->method(
            '_setConfigValue'
        )->with(
            'web/unsecure/base_url',
            'http://example.com/'
        );
        $this->_object->initStoreAfter();
    }
}

```

<!-- Link definitions -->

[configuration reference]: {{ page.baseurl }}/config-guide/prod/config-reference-sens.html