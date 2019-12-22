
## Install sample data by cloning repositories   {#sample-clone}

This topic discusses how to clone and add Magento sample data if you cloned the Magento GitHub repository. This method is intended only for contributing developers (that is, developers who plan to contribute to the Magento 2 codebase).

If you're not a contributing developer, choose one of the other options displayed in the table of contents on the left side of the page.

Contributing developers can use this method of installing sample data *only* if all of the following are true:

*  You use {{site.data.var.ce}}
*  You [cloned the Magento 2 repository]({{ page.baseurl }}/install-gde/prereq/dev_install.html).

{:.bs-callout-warning}
You can use sample data with either the `develop` branch (more current) or a released branch (such as `2.2` or `2.2.5` (more stable)). We recommend you use a released branch because it's more stable. If you're contributing code to the Magento 2 repository and you need the most recent code, use the `develop` branch. Regardless of the branch you choose, you must [clone]({{ page.baseurl }}/install-gde/prereq/dev_install.html) the corresponding branch of the Magento 2 GitHub repository. For example, sample data for the `develop` branch can be used *only* with the Magento 2 `develop` branch.

See the following sections:

*  [Clone the sample data repository](#clone-sample-repo)
*  [Set file system ownership and permissions](#samp-data-perms)

## Clone the sample data repository {#clone-sample-repo}

This section discusses how to install Magento sample data by cloning the sample data repository. You can clone the sample data repository in any of the following ways:

*  Clone with the [SSH protocol](#clone-sample-repo-ssh)
*  Clone with the [HTTPS protocol](#instgde-prereq-compose-clone-https)

### Clone with SSH {#clone-sample-repo-ssh}

To clone the Magento sample data GitHub repository using the SSH protocol:

1. In a web browser, go to [the Magento sample data repository](https://github.com/magento/magento2-sample-data).
1. Next to the name of the branch, click **SSH** from the list.
1. Click **Copy to clipboard**

   The following figure shows an example.

   ![Clone the Magento GitHub repository using SSH]({{ site.baseurl }}/common/images/install_mage2_clone-ssh.png){:width="650px"}

1. Change to your web server's docroot directory.

   Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

   Need [help locating the docroot?]({{ page.baseurl }}/install-gde/basics/basics_docroot.html)

1. Enter `git clone` and paste the value you obtained from step 1.

   An example follows:

   ```bash
   git clone git@github.com:magento/magento2-sample-data.git
   ```

1. Wait for the repository to clone on your server.

   {:.bs-callout-info}
   If the following error displays, make sure you [shared your SSH key](https://help.github.com/articles/generating-ssh-keys/) with GitHub:<br>

   ```terminal
   Cloning into 'magento2'...
   Permission denied (publickey).
   fatal: The remote end hung up unexpectedly
   ```

1. Ensure you checkout the branch of the sample data repository that corresponds with the branch you used from the main `magento2` repository.

   For example:

   If you used the `2.2-develop` branch of the Magento 2 repository, the Sample Data branch should be `2.2-develop`.

   If you used the `2.2.5` branch of the Magento 2 repository, the Sample Data branch should be `2.2.5`.

   To checkout the correct branch, run the following command from the sample data repository's root directory (assuming you need the `2.2.5` branch):

   ```bash
   git checkout 2.2.5
   ```

1. Change to `<magento_root>`.
1. Enter the following command to create symbolic links between the files you just cloned so sample data works properly:

   ```bash
   php -f <sample-data_clone_dir>/dev/tools/build-sample-data.php -- --ce-source="<path_to_your_magento_instance>"
   ```

1. Wait for the command to complete.

1. See [Set file system permissions and ownership](#samp-data-perms).

### Clone with HTTPS {#instgde-prereq-compose-clone-https}

To clone the Magento sample data GitHub repository using the HTTPS protocol:

1. In a web browser, go to [the Magento sample data repository](https://github.com/magento/magento2-sample-data).
1. On the right side of the page, under the **clone URL** field, click **HTTPS**.
1. Click **Copy to clipboard**.

   The following figure shows an example.

   ![Clone the Magento GitHub repository using HTTPS]({{ site.baseurl }}/common/images/install_mage2_clone-https.png){:width="650px"}

1. Change to your web server's docroot directory.

   Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

1. Enter `git clone` and paste the value you obtained from step 1.

   An example follows:

   ```bash
   git clone https://github.com/magento/magento2-sample-data.git
   ```

1. Wait for the repository to clone on your server.
1. Ensure you checkout the branch of the sample data repository that corresponds with the branch you used from the main `magento2` repository.

   For example:

   If you used the `2.2-develop` branch of the Magento 2 repository, the Sample Data branch should be `2.2-develop`.

   If you used the `2.2.5` branch of the Magento 2 repository, the Sample Data branch should be `2.2.5`.

   To checkout the correct branch, run the following command from the sample data repository's root directory (assuming you need the `2.2.5` branch):

   ```bash
   git checkout 2.2.5
   ```

1. Change to `<magento_root>`.
1. Enter the following command to create symbolic links between the files you just cloned so sample data works properly:

   ```bash
   php -f <sample-data_clone_dir>/dev/tools/build-sample-data.php -- --ce-source="<path_to_your_magento_instance>"
   ```

   For example,

   ```bash
   php -f <sample-data_clone_dir>/dev/tools/build-sample-data.php -- --ce-source="/var/www/magento2"
   ```

1. Wait for the command to complete.
1. See the next section.

{:.bs-callout-warning}
If you're installing sample data _after_ installing Magento, you must also run the following command to update the database and schema:

```bash
<magento_root>/bin/magento setup:upgrade
```

## Set file system ownership and permissions {#samp-data-perms}

Because the `php build-sample-data.php` script creates symlinks between the sample data repository and your Magento 2 repository, you must set file system permissions and ownership in the sample data repository. Failure to do so results in errors accessing the storefront.

To set file system permissions and ownership on the sample data repository:

1. Change to your sample data clone directory.
1. Set ownership:

   ```bash
   chown -R :<your web server group name> .
   ```

   Typical examples:

   *  CentOS: `chown -R :apache .`

   *  Ubuntu: `chown -R :www-data .`

1. Set permissions:

   ```bash
   find . -type d -exec chmod g+ws {} +
   ```

1. Clear static files:

   ```bash
   cd <your {{site.data.var.ce}} install dir>/var
   ```

   ```bash
   rm -rf cache/* page_cache/* generation/*
   ```

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase
