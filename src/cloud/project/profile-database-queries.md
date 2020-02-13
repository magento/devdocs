---
group: cloud-guide
title: Profile database queries
functional_areas:
  - Cloud
  - Setup
  - Services
---

When making changes to a database, you may find it helpful to run profiling to identify the impact of those changes. Profiling maintains a log of database queries and increases run-time precision.

{:.procedure}
To enable database query profiling:

1. [Log in to the database]({{ site.baseurl }}/cloud/env/environments-start.html#commands).

1. Enable profiling.

   ```sql
   SET @@profiling = 1;
   ... run some queries
   ```

1. Display the log of queries.

   ```sql
   SHOW profiles
   ```

1. Clear the profile queue.

   ```sql
   SET @@profiling = 0;
   SET @@profiling_history_size = 0;
   SET @@profiling_history_size = 100;
   SET @@profiling = 1;
   ```

## Example log

{:.no-copy}
```sql
MariaDB [6fck2obu3244c]> show profiles;
+----------+------------+---------------------------------------------------------------------------------------------------------------------------------+
| Query_ID | Duration   | Query                                                                                                                           |
+----------+------------+---------------------------------------------------------------------------------------------------------------------------------+
|        2 | 0.00375905 | ALTER TABLE mcom_logged_messages_queue DROP INDEX status                                                                        |
|        3 | 1.13660446 | CREATE INDEX `idx_status_direction` ON mcom_logged_messages_queue (status, direction)                                           |
|        4 | 0.00270735 | SELECT count(*) FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC |
|        5 | 0.00376312 | ALTER TABLE mcom_logged_messages_queue DROP INDEX status                                                                        |
|        6 | 0.00585975 | ALTER TABLE mcom_logged_messages_queue DROP INDEX idx_status_direction                                                          |
|        7 | 1.16887269 | CREATE INDEX `idx_status` ON mcom_logged_messages_queue (status)                                                                |
|        8 | 0.00299303 | SELECT count(*) FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC |
|        9 | 0.00379892 | ALTER TABLE mcom_logged_messages_queue DROP INDEX status                                                                        |
|       10 | 0.00737345 | ALTER TABLE mcom_logged_messages_queue DROP INDEX idx_status                                                                    |
|       11 | 1.05551113 | CREATE INDEX `idx_direction` ON mcom_logged_messages_queue (direction)                                                          |
|       12 | 1.02493811 | SELECT count(*) FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC |
|       13 | 0.00368751 | ALTER TABLE mcom_logged_messages_queue DROP INDEX status                                                                        |
|       14 | 0.00706102 | ALTER TABLE mcom_logged_messages_queue DROP INDEX idx_direction                                                                 |
|       15 | 0.29753293 | SELECT count(*) FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC |
|       16 | 1.24034449 | CREATE INDEX `idx_direction` ON mcom_logged_messages_queue (direction)                                                          |
|       17 | 0.74422050 | SELECT count(*) FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC |
|       18 | 1.16976630 | CREATE INDEX `idx_status` ON mcom_logged_messages_queue (status)                                                                |
|       19 | 0.00293179 | SELECT count(*) FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC |
|       20 | 0.02663829 | SELECT * FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC        |
|       21 | 0.00736756 | ALTER TABLE mcom_logged_messages_queue DROP INDEX idx_direction                                                                 |
|       22 | 0.00406736 | ALTER TABLE mcom_logged_messages_queue DROP INDEX status                                                                        |
|       23 | 0.00815528 | ALTER TABLE mcom_logged_messages_queue DROP INDEX idx_status                                                                    |
|       24 | 0.37585821 | SELECT * FROM `mcom_logged_messages_queue` WHERE (status = 'FAILED') AND (direction = 'outgoing') ORDER BY `sent_at` ASC        |
+----------+------------+---------------------------------------------------------------------------------------------------------------------------------+
```
