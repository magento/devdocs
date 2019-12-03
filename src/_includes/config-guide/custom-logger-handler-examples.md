You can use one of the following approaches for logging into a custom file:

-  Set up a custom log file in the `di.xml`
-  Set up a custom file in the custom logger handler class

## Set up a custom log file in the `di.xml`

This example shows how to use [virtual types]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types) to log `debug` messages into a custom log file instead of a standard Magento `/var/log/debug.log`.

1. In the `di.xml` file of your module, define a custom log file as a [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types).

   ```xml
   <virtualType name="Magento\Payment\Model\Method\MyCustomDebug" type="Magento\Framework\Logger\Handler\Base">
       <arguments>
           <argument name="fileName" xsi:type="string">/var/log/payment.log</argument>
        </arguments>
   </virtualType>
   ```

   The `name` value of `Magento\Payment\Model\Method\MyCustomDebug` must be unique.

1. Define the handler in another [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types) with a unique `name`:

   ```xml
   <virtualType name="Magento\Payment\Model\Method\MyCustomLogger" type="Magento\Framework\Logger\Monolog">
       <arguments>
           <argument name="handlers" xsi:type="array">
               <item name="debug" xsi:type="object">Magento\Payment\Model\Method\MyCustomDebug</item>
           </argument>
       </arguments>
   </virtualType>
   ```

1. Inject the `MyCustomLogger` [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types) in the `Magento\Payment\Model\Method\Logger` object:

   ```xml
   <type name="Magento\Payment\Model\Method\Logger">
       <arguments>
           <argument name="logger" xsi:type="object">Magento\Payment\Model\Method\MyCustomLogger</argument>
       </arguments>
   </type>
   ```

1. The virtual class `Magento\Payment\Model\Method\MyCustomLogger` will be injected into the `debug` handler of the `$logger` property in the `Magento\Payment\Model\Method\Logger` class.

   ```xml
   ...
   <argument name="handlers" xsi:type="array">
       <item name="debug" xsi:type="object">Magento\Payment\Model\Method\MyCustomDebug</item>
   </argument>
   ```

Exception messages are logged into the `/var/log/payment.log` file.

## Set up a custom file in the custom logger handler class

This example shows how to use a custom logger handler class to log `error` messages into a specific log file.

1. Create a class that logs data. In this example, the class is defined in `app/code/Vendor/ModuleName/Logger/Handler/ErrorHandler.php`.

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

1. Define the handler for this class as a [virtual type]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html#virtual-types) in the module's `di.xml` file.

   ```xml
   <virtualType name="MyCustomLogger" type="Magento\Framework\Logger\Monolog">
       <arguments>
           <argument name="handlers" xsi:type="array">
               <item name="error" xsi:type="object">Vendor\ModuleName\Logger\Handler\ErrorHandler</item>
           </argument>
       </arguments>
   </virtualType>
   ```

   `MyCustomLogger` is a unique identifier.

1. In the `type` definition, specify the class name where the custom logger handler will be injected. Use the virtual type name from the previous step as an argument for this type.

   ```xml
   <type name="Vendor\ModuleName\Observer\MyObserver">
       <arguments>
           <argument name="logger" xsi:type="object">MyCustomLogger</argument>
       </arguments>
   </type>
   ```

   Source code of `Vendor\ModuleName\Observer\MyObserver` class:

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

1. The class `Vendor\ModuleName\Logger\Handler\ErrorHandler` will be injected into the `error` handler of the `$logger` property in the `Vendor\ModuleName\Observer\MyObserver`.

   ```xml
   ...
   <argument name="handlers" xsi:type="array">
       <item name="error" xsi:type="object">Vendor\ModuleName\Logger\Handler\ErrorHandler</item>
   </argument>
   ...
   ```

Exception messages will be logged into `/var/log/my_custom_logger/error.log` file.
