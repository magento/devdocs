<div markdown="1">
We recommend that you first back up the database of the system you are upgrading. Use the following steps to back up your Integration, Staging, and Production environments.

Back up your Integration environment database and code:

1.  Enter the following command to make a local backup of the remote database:

        magento-cloud db:dump
2.  Enter the following command to back up code and media:

        php bin/magento setup:backup --code [--media]

    You can optionally omit `[--media]` if you have a large number of static files that are already in source control.

Back up your Staging or Production environment database before deploying to those environments:

1.  [SSH to the server]({{ page.baseurl }}/cloud/env/environments-ssh.html).

2.  Enter the following command to create a database dump:

        vendor/bin/ece-tools db-dump

<div class="bs-callout bs-callout-info" markdown="1">
-   We recommend putting the application in maintenance mode before doing a database dump in Production environments.
-   The command creates an archive in your local project directory called  `dump-<timestamp>.sql.gz`. Refer to [Snapshot and backup management](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) for more information.
</div>
