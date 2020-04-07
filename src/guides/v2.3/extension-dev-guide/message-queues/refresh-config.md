---
group: php-developer-guide
title: Handling outdated in-memory object states
functional_areas:
  - Configuration
  - System
---

When Magento is launched, the store's configuration is loaded into memory. Magento uses the in-memory configuration for queue message transactions. When the store's configuration is updated in the admin, the copy in memory does not refresh automatically, resulting in an outdated in-memory object state.

To ensure the copy in memory is re-instantiated after an update, use the `PoisonPill` interfaces available in the MessageQueue module.
There are three type of the `PoisonPill` interfaces:

*. `Magento\Framework\MessageQueue\PoisonPill\PoisonPillPutInterface` - The interface contains the `put` method. An implementation of the method puts a new version of poison pill inside the database.
*. `Magento\Framework\MessageQueue\PoisonPill\PoisonPillReadInterface` - The interface contains the `getLatestVersion` method. An implementation of the method gets and returns get latest version of the poison pill.
*. `Magento\Framework\MessageQueue\PoisonPill\PoisonPillCompareInterface` - The interface contains the `isLatestVersion` method. An implementation of the method checks if the version of current poison pill is the latest.

Before a new message is processed, the `PoisonPillCompareInterface` compares the version of the in-memory copy to the latest in the database. If the versions are different, the in-memory copy is destroyed and a new copy is created when the next `cron:run` job executes.

In addition to changes in the configuration, a new store view or a new website can also trigger the `PoisonPill` interface.

If `PoisonPill` determines the copy of the in-memory state needs to be re-instantiated and you have set up a `consumers_runner` cron job, Magento will automatically restart all consumers on the next run of the job. If you did not set up the cron job, you will need to manually restart any consumers that were terminated by `PoisonPill`.

### How to use `PoisonPill` interfaces in Magento {#how-to-use}

The method `put` of `PoisonPillPutInterface` using in the `Magento\Store\Model\Website`

```php
 /**
  * Clear configuration cache after creation website
  * @return $this
  * @since 100.2.0
  */
 public function afterSave()
 {
   ...
   $this->pillPut->put();
   return parent::afterSave();
 }
```

The method `getLatestVersion` of `PoisonPillReadInterface` using in the `Magento\Framework\MessageQueue\CallbackInvoker`:

```php
 /**
  * Run short running process
  * @param QueueInterface $queue
  * @param int $maxNumberOfMessages
  * @param \Closure $callback
  * @return void
  */
 public function invoke(QueueInterface $queue, $maxNumberOfMessages, $callback)
 {
   $this->poisonPillVersion = $this->poisonPillRead->getLatestVersion();
   ...
 }
```

The method `isLatestVersion` of `PoisonPillCompareInterface` using in the `Magento\Framework\MessageQueue\CallbackInvoker`:

```php
 /**
  * Run short running process
  *
  * @param QueueInterface $queue
  * @param int $maxNumberOfMessages
  * @param \Closure $callback
  * @return void
  */
 public function invoke(QueueInterface $queue, $maxNumberOfMessages, $callback)
 {
     $this->poisonPillVersion = $this->poisonPillRead->getLatestVersion();
     for ($i = $maxNumberOfMessages; $i > 0; $i--) {
         do {
             $message = $queue->dequeue();
             // phpcs:ignore Magento2.Functions.DiscouragedFunction
            } while ($message === null && (sleep(1) === 0));
         if (false === $this->poisonPillCompare->isLatestVersion($this->poisonPillVersion)) {
             $queue->reject($message);
             // phpcs:ignore Magento2.Security.LanguageConstruct.ExitUsage
             exit(0);
         }
         $callback($message);
     }
 }
```
