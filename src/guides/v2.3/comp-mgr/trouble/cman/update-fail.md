---
group: software-update-guide
subgroup: 50_trouble
title: Roll back after update failure
menu_title: Roll back after update failure
menu_node:
menu_order: 110
functional_areas:
  - Upgrade
---

If your component update fails, messages similar to the following display in the Console Log:

```terminal
[2015-08-14 12:12:02 CDT] Job "update {"components":[{"name":"example/module","version":"1.1.0"}]}" has been started
[2015-08-14 12:12:02 CDT] Starting composer update...
[2015-08-14 12:12:02 CDT] An error occurred while executing job "update {"components":
[{"name":"example/module","version":"1.1.0"}]}": Could not complete update {"components":
[{"name":"example/module","version":"1.1.0"}]} successfully: Cannot find component to update
```

In the preceding example, there is no component version to which to roll back. Contact the component vendor or try to resolve the issue yourself.

Meantime, you can roll back to a previous backing by clicking **Rollback**. Magento recovers your data even if you did not back up previously.
