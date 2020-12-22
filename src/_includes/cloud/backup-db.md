We recommend creating a backup of your project before an upgrade. Use the following steps to back up your Integration, Staging, and Production environments.

{:.procedure}
To back up your Integration environment database and code:

1. Create a local backup of the remote database.

   ```bash
   magento-cloud db:dump
   ```

    {:.bs-callout-info}
   The `magento-cloud db:dump` command runs the [mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html) command with the `--single-transaction` flag, which allows you to back up your database without locking the tables.

1. Back up code and media.

   ```bash
   php bin/magento setup:backup --code [--media]
   ```

   Optionally, you can omit `[--media]` if you have a large number of static files that are already in source control.

{:.procedure}
To back up your Staging or Production environment database before deploying:

1. Use SSH to log in to the remote server.

1. Create a database dump.

   ```bash
   vendor/bin/ece-tools db-dump
   ```

   The dump operation creates a `dump-<timestamp>.sql.gz` archive file in your remote project directory. See [Snapshot and backup management]({{ site.baseurl }}/cloud/project/project-webint-snap.html#db-dump).
