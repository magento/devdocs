We recommend creating a back up of the project your project before an upgrade. Use the following steps to back up your Integration, Staging, and Production environments.

#### To back up your Integration environment database and code:

1.  Create a local backup of the remote database.

    ```bash
    magento-cloud db:dump
    ```

1.  Back up code and media.

    ```bash
    php bin/magento setup:backup --code [--media]
    ```

    Optionally, you can omit `[--media]` if you have a large number of static files that are already in source control.

#### To back up your Staging or Production environment database before deploying to those environments:

1.  Use SSH to log in to the remote server.

2.  Create a database dump.

    ```bash
    vendor/bin/ece-tools db-dump
    ```

-   We recommend putting the application in maintenance mode before doing a database dump in Production environments.
-   The command creates an `dump-<timestamp>.sql.gz` archive file in your local project directory. Refer to [Snapshot and backup management](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) for more information.

