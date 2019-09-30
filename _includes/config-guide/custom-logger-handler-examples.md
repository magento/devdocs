You can use one of the following approaches for logging into custom file:

- setup custom log file in the `di.xml`
- setup custom file in the custom logger handler class 

## Setup custom log file in the `di.xml`

1. Define a custom log file in the virtual type:

```xml
<virtualType name="Magento\Payment\Model\Method\MyCustomDebug" type="Magento\Framework\Logger\Handler\Base">
    <arguments>
        <argument name="fileName" xsi:type="string">/var/log/payment.log</argument>
    </arguments>
</virtualType>
```

where, `Magento\Payment\Model\Method\MyCustomDebug` is the unique [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types) identifier.

1. Specify the handler which will be used:

```xml
<virtualType name="Magento\Payment\Model\Method\MyCustomLogger" type="Magento\Framework\Logger\Monolog">
    <arguments>
        <argument name="handlers" xsi:type="array">
            <item name="debug" xsi:type="object">Magento\Payment\Model\Method\MyCustomDebug</item>
        </argument>
    </arguments>
</virtualType>
```

where, `Magento\Payment\Model\Method\MyCustomLogger` is the unique [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types) identifier.

1. Inject the declared virtual type (`Magento\Payment\Model\Method\MyCustomLogger`) into our object (`Magento\Payment\Model\Method\Logger`):

```xml
<type name="Magento\Payment\Model\Method\Logger">
    <arguments>
        <argument name="logger" xsi:type="object">Magento\Payment\Model\Method\MyCustomLogger</argument>
    </arguments>
</type>
```

1. The virtual class `Magento\Payment\Model\Method\MyCustomLogger` will be injected into the `debug` handler of tbe `$logger` property
 
```xml
...
  <argument name="handlers" xsi:type="array">
      <item name="debug" xsi:type="object">Magento\Payment\Model\Method\MyCustomDebug</item>
  </argument>
...
``` 

in the `Magento\Payment\Model\Method\Logger` class and will log exception messages into `/var/log/payment.log` file.

## Setup custom file in the custom logger handler class

1. Create a class which will log the necessary data. 

    Create a new file `app/code/Vendor/ModuleName/Logger/Handler/ErrorHandler.php` with the next content

    ```php
    <?php
    /**
     * @author Vendor
     * @copyright Copyright (c) 2019 Vendor (https://www.vendor.com/)
     */
    namespace Vendor\ModuleName\Logger\Handler;

    use Magento\Framework\Logger\Handler\Base as BaseHandler;
    use Monolog\Logger as MonologLogger;

    /**
     * Class ErrorHandler
     */
    class ErrorHandler extends BaseHandler
    {
        /**
         * Logging level
         *
         * @var int
         */
        protected $loggerType = MonologLogger::ERROR;

        /**
         * File name
         *
         * @var string
         */
        protected $fileName = '/var/log/my_custom_logger/error.log';
    }
    ```

1. Define it for the specific handler type in the `di.xml`: 

    For example, `Vendor\ModuleName\Logger\Handler\ErrorHandler` will be defined for the error handler:

    ```xml
    <virtualType name="MyCustomLogger" type="Magento\Framework\Logger\Monolog">
        <arguments>
            <argument name="handlers" xsi:type="array">
                <item name="error" xsi:type="object">Vendor\ModuleName\Logger\Handler\ErrorHandler</item>
            </argument>
        </arguments>
    </virtualType>
    ```

    where, `MyCustomLogger` is the unique identifier of [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types).

1. Specify a class name that you will use in your custom logger handler.

    For example, you will use a custom logger handler in the `Vendor\ModuleName\Observer\MyObserver` class:

    ```xml
    <type name="Vendor\ModuleName\Observer\MyObserver">
        <arguments>
            <argument name="logger" xsi:type="object">MyCustomLogger</argument>
        </arguments>
    </type>
    ```

1. Source code of `Vendor\ModuleName\Observer\MyObserver` class:

    ```php
    <?php
    /**
     * @author Vendor
     * @copyright Copyright (c) 2019 Vendor (https://www.vendor.com/)
     */
    declare(strict_types=1);

    namespace Vendor\ModuleName\Observer;

    use Psr\Log\LoggerInterface as PsrLoggerInterface;
    use Exception;
    use Magento\Framework\Event\ObserverInterface;
    use Magento\Framework\Event\Observer;

    /**
     * Class MyObserver
     */
    class MyObserver implements ObserverInterface
    {
        /**
         * @var PsrLoggerInterface
         */
        private $logger;

        /**
         * MyObserver constructor.
         *
         * @param PsrLoggerInterface $logger
         */
        public function __construct(
            PsrLoggerInterface $logger
        ) {
            $this->logger = $logger;
        }

        /**
         * @param Observer $observer
         */
        public function execute(Observer $observer)
        {
            try {
                // some code goes here
            } catch (Exception $e) {
                $this->logger->error($e->getMessage());
            }
        }
    }
    ```

1. Class `Vendor\ModuleName\Logger\Handler\ErrorHandler` will be injected into the `error` handler of the `$logger` property

    ```xml
    ...
     <argument name="handlers" xsi:type="array">
        <item name="error" xsi:type="object">Vendor\ModuleName\Logger\Handler\ErrorHandler</item>
     </argument>
    ...
    ```

    in the `Vendor\ModuleName\Observer\MyObserver` and will log exception messages into `/var/log/my_custom_logger/error.log` file.
