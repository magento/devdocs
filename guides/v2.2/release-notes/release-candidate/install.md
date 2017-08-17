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
github_link: release-notes/release-candidate/install.md
---

We now offer {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackages{% endglossarytooltip %} for installing the latest release candidate code using [Composer](https://getcomposer.org/){:target="&#95;blank">}.

<div class="bs-callout bs-callout-tip" markdown="1">
You can still install release candidate code by [cloning Github repositories](#install-with-github), but we recommend using Composer.
</div>

## Install with Composer
The Composer installation process is the same for {{site.data.var.ce}} and {{site.data.var.ee}}:

-   Get the Composer metapackage

-   Install the {{site.data.var.b2b}} extension (optional)

-   Complete the installation

-   Install sample data (optional)

-   Complete {{site.data.var.b2b}} post-installation configuration

<div class="bs-callout bs-callout-warning" markdown="1">
The {{site.data.var.b2b}} extension is only available for {{site.data.var.ee}} v2.2.0. You can install it after installing {{site.data.var.ee}}.
</div>

### Get the Composer metapackage
Before you begin, install Composer:

    curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/bin --filename=composer

1.  Log in to your Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.

2.	Change to the web server docroot directory, or to a directory you've configured as a virtual host docroot.

3.	Download the {{site.data.var.ce}} or {{site.data.var.ee}} metapackage.

    -   Enter the following command for {{site.data.var.ce}}:

            composer create-project -s RC --repository-url=https://repo.magento.com/ magento/project-community-edition <install-directory-name> 2.2.0-rc20

    -   Enter the following command for {{site.data.var.ee}}:

            composer create-project -s RC --repository-url=https://repo.magento.com/ magento/project-enterprise-edition <install-directory-name> 2.2.0-rc20

	When prompted, enter your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>. Your *public key* is your username; your *private key* is your password.

	This command creates the project and downloads dependencies for it. The project is in a directory named `<installation-directory-name>` if you provided the parameter or `project-enterprise-edition` if you did not.

  <div class="bs-callout bs-callout-info" id="info" markdown="1">
The following error indicates your tokens are incorrect:

    Could not find package magento/project-enterprise-edition with version 2.2.0-rc2

If the following error displays, see [troubleshooting]({{page.baseurl}}install-gde/trouble/tshoot_composer-fail.html):

    file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory
  </div>

### Install the B2B extension (optional)
Change to your installation directory and enter the following command to update your `composer.json` file and install the {{site.data.var.b2b}} extension:

    composer require magento/extension-b2b

When prompted, enter your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>. Your *public key* is your username; your *private key* is your password.

<div class="bs-callout bs-callout-info" markdown="1">
If you installed EE prior to installing B2B, run the following commands after Composer finishes updating modules:

    bin/magento setup:upgrade

    bin/magento setup:di:compile

    bin/magento setup:static-content:deploy
</div>

### Complete the installation
Now that you've downloaded all dependencies, proceed with the installation:

1.  Set file permissions on the `<install-directory-name>`:

    ```
    cd /var/www/html/magento2
    find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
    find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
    chown -R :<web-server-group> .
    chmod u+x bin/magento
    ```
  Refer to [Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html) for more information.

2.	Open a web browser and go to `http://<Magento-host-or-IP>/<path-to-magento- root>/setup` to launch the [Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html).

    For example:

    `http://localhost/magento2ee/setup`

<div class="bs-callout bs-callout-info" markdown="1">
You can also install using the [command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html).
</div>

After completing the installation, you must follow the [B2B post-install steps and configuration](#b2b-post-install-steps-and-configuration).

## Install with Github
The Github installation process is the same for {{site.data.var.ce}} and {{site.data.var.ee}}:

-   Clone the repositories you want to install

-   Prepare files for installation

-   Update installation dependencies

-   Complete the installation

-   Install sample data (optional)

-   Complete {{site.data.var.b2b}} post-installation configuration

<div class="bs-callout bs-callout-warning" markdown="1">
If you want to evaluate the new {{site.data.var.b2b}} extension, you must install it when you install {{site.data.var.ee}}. The {{site.data.var.b2b}} extension is only available for {{site.data.var.ee}} v2.2.0.
</div>

### Release candidate code repositories
There are three Magento code repositories on GitHub where you can find release candidate code. When cloning repositories, be sure to checkout the specified branches.

<table>
  <tr>
    <th><b>Magento edition</b></th>
    <th><b>Location</b></th>
    <th><b>Branch</b></th>
    <th><b>Availability</b></th>
  </tr>
<tr>
    <td><b>{{site.data.var.ce}}</b></td>
    <td><a href="https://github.com/magento/magento2">https://github.com/magento/magento2</a></td>
    <td>2.2.0-preview</td>
    <td>Publicly available</td>
</tr>
<tr>
    <td><b>{{site.data.var.ce}}</b></td>
    <td><a href="https://github.com/magento/magento2ee">https://github.com/magento/magento2ee</a></td>
    <td>2.2.0-release-candidate</td>
    <td>Available after contract has been signed</td>
</tr>
<tr>
    <td><b>{{site.data.var.b2b}}</b></td>
    <td><a href="https://github.com/magento/magento2b2b">https://github.com/magento/magento2b2b</a></td>
    <td>1.0.0-release-candidate</td>
    <td>Available after contract has been signed</td>
</tr>
</table>

### Clone the Magento Github repositories
These instructions assume you have experience working with Github repositories. Refer to Github's documentation if you need help setting up [SSH keys](https://help.github.com/articles/connecting-to-github-with-ssh/){:target="&#95;blank"} or [cloning repositories](https://help.github.com/articles/cloning-a-repository/){:target="&#95;blank"}.

1.  Clone the `magento2/` repository to your server's [docroot](http://devdocs.magento.com/guides/v2.2/install-gde/basics/basics_docroot.html):

    ```
    cd /var/www/html
    git clone -b 2.2.0-preview git@github.com:magento/magento2.git
    ```

2.  Clone the `magento2ee/` and `magento2b2b/` repositories inside the `magento2/` repository:

    ```
    cd /var/www/html/magento2
    git clone -b 2.2.0-release-candidate git@github.com:magento/magento2ee.git
    git clone -b 1.0.0-release-candidate git@github.com:magento/magento2b2b.git
    ```

### Prepare files for installation
Create symlinks to the `magento2ee/` and `magento2b2b/` directories from the `magento2/` directory. Symlinks preserve the git history for each repository so that you can make code contributions.

1.  Change to the `magento2/` directory:

    ```
    cd /var/www/html/magento2
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
    lrwxrwxrwx   1 root    root      57 Jun 22 22:43 B2b -> /var/www/html/magento2/magento2b2b/app/code/Magento/B2b
    drwxrwxr-x  15 magento magento 4.0K Jun 22 22:26 Backend
    drwxrwxr-x  11 magento magento 4.0K Jun 22 22:26 Backup
    lrwxrwxrwx   1 root    root      59 Jun 22 22:42 Banner -> /var/www/html/magento2/magento2ee/app/code/Magento/Banner
    lrwxrwxrwx   1 root    root      74 Jun 22 22:42 BannerCustomerSegment -> /var/www/html/magento2/magento2ee/app/code/Magento/BannerCustomerSegment
    ```
<div class="bs-callout bs-callout-info" markdown="1">
If you mistyped something when creating symlinks and need to remove them and try again, run the following command: `php -f ./magento2ee/dev/tools/build-ee.php -- --command unlink --ce-source .`
</div>

### Update installation dependencies
<div class="bs-callout bs-callout-warning" markdown="1">
If you're installing {{site.data.var.ee}} or {{site.data.var.b2b}}, you must replace the `composer.json` and `composer.lock ` files in the `magento2/` directory with the `composer.json` and `composer.lock` files from inside the `magento2ee` directory before updating dependencies.
</div>

From the `magento2/` directory, run Composer to update dependencies:

```
composer install
```

Refer to [Update installation dependencies](http://devdocs.magento.com/guides/v2.2/install-gde/install/prepare-install.html) for more information.

### Complete the installation
Now that you've cloned all the repositories you need and prepared the files, proceed with the installation:

1.  Set file permissions on the `magento2/` installation directory:

    ```
    cd /var/www/html/magento2
    find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
    find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
    chown -R :<web-server-group> .
    chmod u+x bin/magento
    ```
  Refer to [Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html) for more information.

2.	Open a web browser and go to `http://<Magento host or IP>/<path to Magento root>/setup` to launch the [Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html).

    For example:

    `http://localhost/magento2/setup`

<div class="bs-callout bs-callout-info" markdown="1">
You can also install using the [command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html).
</div>

## Install sample data (optional)
The release candidate repositories don't contain any sample data, but you can [install sample data]({{ page.baseurl }}install-gde/install/sample-data-after-clone.html) with another repository after you finish installing the release candidate.

## B2B post-install steps and configuration
After installing the {{site.data.var.b2b}} extension, follow these instructions to launch {{site.data.var.b2b}}.

### Message queues

#### Start message consumers
The {{site.data.var.b2b}} extension uses MySQL for message queue management. To succesfully launch the {{site.data.var.b2b}} extension, start the message consumer services after installation.

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

#### Add message consumers to cron
You may also add these two message consumers to the cron job. For this, add these lines in your `crontab.xml`:

{%highlight xml%}
* * * * * ps ax | grep [s]haredCatalogUpdateCategoryPermissions >>/dev/null 2>&1 || nohup php /var/www/html/magento2/bin/magento queue:consumers:start sharedCatalogUpdateCategoryPermissions &
* * * * * ps ax | grep [s]haredCatalogUpdatePrice >>/dev/null 2>&1 || nohup php /var/www/html/magento2/bin/magento queue:consumers:start sharedCatalogUpdatePrice &
{%endhighlight%}

#### Specify parameters for message consumers
Depending on your system configuration, to prevent possible issues, you may also need to specify the following parameters when starting the services:

-   `--max-messages`: manages the consumer's lifetime and allows to specify the maximum number of messages processed by the consumer. The best practice for a PHP application is to restart the long-running processes to prevent possible memory leaks

-   `--batch-size`: allows to limit the system resources consumed by the consumers (CPU, memory). Using smaller batches reduces resource usage and, thus, leads to slower processing

### Enable B2B Features in Magento Admin
1.  Access the Magento Admin and click **Stores** > **Configuration** > **General** > **B2B Features**.

2.  Select **Yes** from the drop-down menus to enable B2B features:

    ![Enable B2B features]({{site.baseurl}}common/images/enable_b2b_features.png)

3.  Click **Save Config**.
