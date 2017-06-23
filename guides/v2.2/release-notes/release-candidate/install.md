---
layout: default
group: release-notes
subgroup: 2.2.0 Release Candidate
title: Install the Release Candidate
menu_title: Install the Release Candidate
menu_order: 2000
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-candidate/install.md
---

## Installation
The Magento Release Candidate 1 installation process is the same for CE and EE:

-   Clone the repositories you want to install

-   Prepare files for installation

-   Update installation dependencies

-   Complete the installation

-   Install sample data (optional)

-   Complete B2B post-installation configuration

<div class="bs-callout bs-callout-warning" markdown="1">
If you want to evaluate the new B2B module, you must install it when you install EE. The B2B module is only available for Magento EE v2.2.0.
</div>

### Release Candidate 1 code repositories
There are three Magento code repositories on GitHub where you can find Release Candidate 1 code. When cloning repositories, be sure to checkout the specified branches.

<table>
  <tr>
    <th><b>Magento edition</b></th>
    <th><b>Location</b></th>
    <th><b>Branch</b></th>
    <th><b>Availability</b></th>
  </tr>
<tr>
    <td><b>Magento CE</b></td>
    <td><a href="https://github.com/magento/magento2ce">https://github.com/magento/magento2ce</a></td>
    <td>2.2.0-RC1.1</td>
    <td>Publicly available</td>
</tr>
<tr>
    <td><b>Magento EE</b></td>
    <td><a href="https://github.com/magento/magento2ee">https://github.com/magento/magento2ee</a></td>
    <td>2.2.0-RC1.1</td>
    <td>Available after contract has been signed</td>
</tr>
<tr>
    <td><b>Magento B2B</b></td>
    <td><a href="https://github.com/magento/magento2b2b">https://github.com/magento/magento2b2b</a></td>
    <td>1.0.0-RC1.1</td>
    <td>Available after contract has been signed</td>
</tr>
</table>

### Clone the Magento Github repositories
These instructions assume you have experience working with Github repositories. Refer to Github's documentation if you need help setting up [SSH keys](https://help.github.com/articles/connecting-to-github-with-ssh/){:target="	&#95;blank"} or [cloning repositories](https://help.github.com/articles/cloning-a-repository/){:target="	&#95;blank"}.

1.  Clone the `magento2ce/` repository to your server's [docroot](http://devdocs.magento.com/guides/v2.1/install-gde/basics/basics_docroot.html):

    ```
    cd /var/www/html
    git clone -b 2.2.0-RC1.1 git@github.com:magento/magento2ce.git
    ```

2.  Clone the `magento2ee/` and `magento2b2b/` repositories inside the `magento2ce/` repository:

    ```
    cd /var/www/html/magento2ce
    git clone -b 2.2.0-RC1.1 git@github.com:magento/magento2ee.git
    git clone -b 1.0.0-RC1.1 git@github.com:magento/magento2b2b.git
    ```

### Prepare files for installation
Create symlinks to the `magento2ee/` and `magento2b2b/` directories from the `magento2ce/` directory. Symlinks preserve the git history for each repository so that you can make code contributions.

1.  Change to the `magento2ce/` directory:

    ```
    cd /var/www/html/magento2ce
    ```

1.  Create symlinks to the `magento2ee/` directory:

    ```
    php -f ./magento2ee/dev/tools/build-ee.php -- --command link --exclude true --ce-source . --ee-source ./magento2ee
    ```

2.  Create symlinks to the `magento2b2b/` directory:

    ```
    php -f ./magento2ee/dev/tools/build-ee.php -- --command link --exclude true --ce-source . --ee-source ./magento2b2b
    ```

3.  Run the following command to verify the links:

    ```
    ls -alh app/code/Magento/
    ```

    You should see output similar to the following:

    ```
    lrwxrwxrwx   1 root    root      57 Jun 22 22:43 B2b -> /var/www/html/magento2ce/magento2b2b/app/code/Magento/B2b
    drwxrwxr-x  15 magento magento 4.0K Jun 22 22:26 Backend
    drwxrwxr-x  11 magento magento 4.0K Jun 22 22:26 Backup
    lrwxrwxrwx   1 root    root      59 Jun 22 22:42 Banner -> /var/www/html/magento2ce/magento2ee/app/code/Magento/Banner
    lrwxrwxrwx   1 root    root      74 Jun 22 22:42 BannerCustomerSegment -> /var/www/html/magento2ce/magento2ee/app/code/Magento/BannerCustomerSegment
    ```
<div class="bs-callout bs-callout-info" markdown="1">
If you mistyped something when creating symlinks and need to remove them and try again, run the following command: `php -f ./magento2ee/dev/tools/build-ee.php -- --command unlink --ce-source .`
</div>

### Update installation dependencies
From the `magento2ce/` directory, run Composer to update dependencies:

```
composer install
```

Refer to [Update installation dependencies](http://devdocs.magento.com/guides/v2.1/install-gde/install/prepare-install.html) for more information.

### Complete the installation
Now that you've cloned all the repositories you need and prepared the files, proceed with the installation:

1.  Set file permissions on the `magento2ce/` installation directory:

    ```
    cd /var/www/html/magento2ce
    find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
    find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
    chown -R :<web-server-group> .
    chmod u+x bin/magento
    ```
  Refer to [Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html) for more information.

2.	Open a web browser and go to `http://<Magento host or IP>/<path to Magento root>/setup` to launch the [Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html).

    For example:

    `http://localhost/magento2ce/setup`

<div class="bs-callout bs-callout-info" markdown="1">
You can also install using the [command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html).
</div>

### Install sample data (optional)
The Release Candidate 1 repositories don't contain any sample data, but you can [install sample data]({{ page.baseurl }}install-gde/install/sample-data-after-clone.html) with another repository after you finish installing the Release Candidate.

### B2B post-installation steps and configuration
You only need to follow these instructions if you installed the B2B module.

The B2B module uses MySQL for message queue management. To succesfully launch the B2B module, you must manually start the message consumer services after installation.

1.  List the available message consumers:

    ```
    bin/magento queue:consumers:list
    ```

    You should see the following consumers:

    ```
    sharedCatalogUpdatePrice
    sharedCatalogUpdateCategoryPermissions
    quoteItemCleaner
    inventoryQtyCounter
    ```

2.  Start each service separately:

    ```
    bin/magento queue:consumers:start <consumer_name>
    ```

    For example:

    ```
    bin/magento queue:consumers:start sharedCatalogUpdatePrice
    ```

Refer to [Manage message queues with MySQL]({{page.baseurl}}config-guide/mq/manage-mysql.html) for more information.

Depending on your system configuration, you may also need to specify the following parameters when starting the services:

-   `--max-messages`: manages the consumer's lifetime and allows to specify the maximum number of messages processed by the consumer. The best practice for a PHP application is to restart the long-running processes to prevent possible memory leaks

-   `batch-size`: allows to limit the system resources consumed by the consumers (CPU, memory). Using smaller batches reduces resource usage and, thus, leads to slower processing.

3.  Open your admin panel and click **Stores** > **Configuration** > **General** > **B2B Features**.

4.  Select **Yes** from the drop-down boxes enable B2B features:

    ![enable B2B features]({{ site.baseurl }}common/images/enable_b2b_features.png)

5.  Click **Save Config**.
