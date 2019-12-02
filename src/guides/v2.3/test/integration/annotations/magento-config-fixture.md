---
group: testing
title: Configuration fixture annotation
---

To set Magento configuration values for individual tests and revert them after the test execution, use the `@magentoConfigFixture` annotation.

## Format

```php
/**
 * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>
 */
```

-  `<store_code>` is the code of the store to be configured.
   When a global scope is required, this should be omitted and the `config path` is prefixed with `default/`. See below for an example.
   To specify the current store, use `current`.
-  `<config_path>` is the XPath to the configuration option.
   See [configuration reference][] for available options.
-  `<config_value>` is a fixture value for the configuration option.

## Principles

1. The `@magentoConfigFixture` is available at the test method level only.
   It is not available on the test case level.
1. A test may contain several configuration options.

## Example

```php
<?php

/**
 * Test class for \Magento\TestFramework\Annotation\ConfigFixture.
 */
namespace Magento\Test\Annotation;

class ConfigFixtureTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var \Magento\TestFramework\Annotation\ConfigFixture|\PHPUnit_Framework_MockObject_MockObject
     */
    protected $_object;

    protected function setUp()
    {
        $this->_object = $this->createPartialMock(
            \Magento\TestFramework\Annotation\ConfigFixture::class,
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

     /**
     * @magentoConfigFixture default/dev/restrict/allow_ips 192.168.0.2
     */
    public function testGlobalStoreConfig()
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
