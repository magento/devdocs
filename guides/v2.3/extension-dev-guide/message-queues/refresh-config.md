---
group: php-developer-guide
title: Handling outdated in-memory object states
functional_areas:
  - Configuration
  - System
---

When Magento is launched, the store's configuration is loaded and copied into memory. Magento uses that copy in memory for queue message transactions. When the store's configuration is updated in the admin, the copy in memory does not automatically refresh, resulting in an outdated in-memory object state.

To ensure the copy in memory is re-instantiated after an update, use the `PoisonPill` interface available in the MessageQueue module. Before a new message is processed, the implementation of the `PoisonPillCompareInterface` compares the version of the in-memory copy to the latest in the database. If the versions are different, the in-memory copy is destroyed and a new copy is created when the next `cron:run` job executes.

In addition to changes in the configuration, a new store view or a new website also trigger the `PoisonPill` interface.

If `PoisonPill` determines the copy of the in-memory state needs to be re-instantiated and you have set up a `consumers_runner` cron job, Magento will automatically restart all consumers on the next run of the job. If you did not set up the cron job, you will need to manually restart any consumers that were terminated by `PoisonPill`.
