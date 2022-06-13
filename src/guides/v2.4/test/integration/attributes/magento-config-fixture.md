---
group: testing
title: Configuration fixture attribute
---

To set Magento configuration values for individual tests and revert them after the test execution, use the `Config` attribute.

## Format

```php
#[
   Config(<config_path>, <config_value>, <scope_type>, <scope_value>)
]
```

-  `<config_path>` is the XPath to the configuration option.
   See [configuration reference][] for available options.
-  `<config_value>` is a fixture value for the configuration option.
-  `<scope_type>` is the scope to use to set config value. Allowed values: default, store, group and website. Default: default
-  `<store_code>` is the code of the scope to be configured.
   If "default" scope is provided, this parameter can be omitted. If the scope type is store, group or website, the default value of this parameter is the current value of the specified scope.

## Principles

1. The `Config` attribute is available at the test method level only.
   It is not available on the test case level.
1. A test may contain several configuration options.

## Example

```php
<?php

/**
 * Test class for \Magento\TestFramework\attribute\ConfigFixture.
 */
namespace Magento\Test\attribute;

class ConfigFixtureTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var \Magento\TestFramework\attribute\ConfigFixture|\PHPUnit_Framework_MockObject_MockObject
     */
    protected $_object;

    protected function setUp()
    {
        $this->_object = $this->createPartialMock(
            \Magento\TestFramework\attribute\ConfigFixture::class,
            ['_getConfigValue', '_setConfigValue']
        );
    }

    #[
         Config('web/unsecure/base_url', 'http://example.com/', 'store')
    ]
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

    #[
         Config( 'dev/restrict/allow_ips', '192.168.0.1', 'store')
    ]
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

    #[
         Config('dev/restrict/allow_ips', '192.168.0.2', 'store', 'admin')
    ]
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

    #[
         Config('dev/restrict/allow_ips', '192.168.0.2')
    ]
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

    #[
         Config('current_store', 'web/unsecure/base_url', 'http://example.com/')
    ]
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
