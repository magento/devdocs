---
group: php-developer-guide
title: Handling outdated in-memory object states
functional_areas:
  - Configuration
  - System
  - Setup
---

When Magento is launched, the store's configuration is loaded and copied into memory. Magento uses that copy in memory for queue message transactions. When the store's configuration is updated in the admin, the copy in memory does not automatically refresh resulting in an outdated in-memory object state.

To ensure the copy in memory is re-instantiated after an update, use the poison pill interface available in the MessageQueue module. Before a new message is processed, the poison pill interface compares the version of the in-memory copy to the latest in the database. If the versions are different, the in-memory copy is destroyed and a new copy is created when the next cron:run job executes.

The poison pill interface includes the following:

Interface | Description
--- | ---
PoisonPillCompareInterface | Compares the in-memory copy to the database.
PoisonPillPutInterface | Location where you want to begin the compare.
PoisonPillReadInterface | Result of the compare so you can process as needed.

**Example**

The following example demonstrates how to implement the poison pill interface.

``` php
public function afterSave()
    {
        if ($this->isObjectNew()) {
            $this->_storeManager->reinitStores();
        }
        $this->pillPut->put();
        return parent::afterSave();
    }
```

<!--Copy of config is stored in memory
If config changes, copy in memory becomes stale/out-of-date
This feature detects if copy in memory is stale and reinitializes them with a new valid state

"Poison Pill is a rather melodramatic name for simply placing a certain, known, data item on the queue and when the consumer reads this item it closes down. Obviously, the poison pill has to be the last item placed on the queue or else the consumer will shut down prematurely. "

"The poison pill is used when you need to send a message from one thread/process to another to terminate"

In this case however, it doesn't terminate, but rather reinstantiate's the consumer

We need an example of how to manually create task that 

We read version of consumer config and compare to version of config in memory. If equal, do nothing, if not equal, destroy config in memory and reinstantiate.
-->