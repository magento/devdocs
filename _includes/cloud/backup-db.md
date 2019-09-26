We recommend creating a backup of your project before an upgrade. Use the following steps to back up your Integration, Staging, and Production environments.

{:.procedure}
To back up your Integration environment database and code:

1.  Create a local backup of the remote database.

    ```bash
    magento-cloud db:dump
    ```

1.  Back up code and media.

    ```bash
    php bin/magento setup:backup --code [--media]
    ```

    Optionally, you can omit `[--media]` if you have a large number of static files that are already in source control.

{:.procedure}
To back up your Staging or Production environment database before deploying:

1.  Use SSH to log in to the remote server.

2.  Create a database dump.

    ```bash
    vendor/bin/ece-tools db-dump
    ```

-   We recommend setting the application in maintenance mode before doing a database dump in Production environments.
-   This creates an `dump-<timestamp>.sql.gz` archive file in your local project directory. See [Snapshot and backup management]({{ site.baseurl }}/guides/v2.2/cloud/project/project-webint-snap.html#db-dump).
