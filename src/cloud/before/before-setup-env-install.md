---
group: cloud-guide
title: Install
redirect_from:
  - /cloud/before/before-setup-env-perms.html
functional_areas:
  - Cloud
  - Install
  - Setup
  - Configuration
---

{:.ref-header}
Previous step

[Clone and branch the project]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html)

With your workspace prepared, install {{site.data.var.ee}} on your local workstation to verify custom code, extensions, and more. This section includes the installation prep, options, and post-installation configuration you should complete.

## Prepare to install {{site.data.var.ee}} {#prepare}

To customize the {{site.data.var.ee}} software on your local workstation, prepare the following:

-  Hostname or IP address of your machine
-  Admin username, password, and URL created earlier
-  Authentication keys for downloading the {{site.data.var.ee}} Composer metapackage

### List the Admin environment variables

You need the ADMIN environment variables for the installation command line.

List the environment variables.

```bash
magento-cloud variable:get -e <environment-ID>
```

```terminal
+----------------+---------------+-----------+------+
| ID             | Value         | Inherited | JSON |
+----------------+---------------+-----------+------+
| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
| ADMIN_URL      | magento_A8v10 | Yes       | No   |
| ADMIN_USERNAME | admin_A456    | Yes       | No   |
+----------------+---------------+-----------+------+
```

### Get authentication keys

You need authentication keys to install {{site.data.var.ee}} in your local development environment. These are different than the authentication keys included in the code repository `auth.json` file. See [Add authentication keys]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html).

{:.procedure}
To create authentication keys:

1. Log in to the [Commerce Marketplace](https://marketplace.magento.com). If you do not have an account, click **Register**.

1. Click your account name in the top-right and select **My Profile**.

1. Click **Access Keys** under _My Products_ in the _Marketplace_ tab.

   ![Click Access Keys]({{ site.baseurl }}/common/images/cloud/cloud_access-key.png)

1. Click **Create A New Access Key**.

1. Enter a specific name for the keys, for example _CloudProductOwner_ or the name of the developer receiving the keys.

1. The keys generate a **Public** and **Private** key you can click to copy. Save this information or keep the page open when installing {{site.data.var.ee}}.

## Set the docroot

Set the `docroot` to the `/magento` directory until you complete the setup.

For the Production environment, set the `docroot` to `/magento/pub`, which helps restrict access to vulnerable areas of the system. The webserver `docroot` should be set to `/magento/pub` only after {{site.data.var.ee}} is installed (including any upgrades and patches), configured, and static files generated and populated in `/magento/pub`. Alternatively, you could create a subdomain (for example, `install.domain.com`) and configure your webserver `docroot` to the {{site.data.var.ee}} installed root folder.

## Set file system permissions and ownership {#file-system-permissions}

After you have installed {{site.data.var.ee}}, you need to set the file system permissions and ownership.

1. Log in to your server as, or switch to, the [file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).

1. Enter the following commands in the order shown:

   ```bash
   cd <magento_root>
   ```

   ```terminal
   find var vendor pub/static pub/media app/etc -type f   -exec chmod g+w {} +
   find var vendor pub/static pub/media app/etc -type d   -exec chmod g+ws {} +
   ```

   ```bash
   chown -R :<web server group> .
   ```

   ```bash
   chmod u+x bin/magento
   ```

{% include install/file-system-perms-twouser_cmds-only.md %}

## Install {{site.data.var.ee}}

Prior to installing, you should [Update installation dependencies]({{ site.baseurl }}/guides/v2.3/install-gde/install/prepare-install.html#install-composer-install) using Composer commands.

Be ready to install {{site.data.var.ee}} using the [command line]({{ site.baseurl }}/guides/v2.3/install-gde/install/cli/install-cli.html).

{:.procedure}
To install {{site.data.var.ee}} using the command line:

1. Switch to the user.

   ```bash
   sudo su - magento
   ```

1. Change directories for the installation.

   ```bash
   cd /app/bin
   ```

1. Enter a CLI command with options for entering the name, email, ADMIN credentials, URL, and additional information. For a list of all options, see [Installer help commands]({{ site.baseurl }}/guides/v2.3/install-gde/install/cli/install-cli-install.html#instgde-cli-help-cmds).

   ```bash
   bin/magento setup:install \
     --admin-firstname=John \
     --admin-lastname=Smith \
     --admin-email=jsmith@mail.com \
     --admin-user=admin \
     --admin-password=password1 \
     --base-url=http://magento.local/ \
     --db-host=localhost \
     --db-name=magento \
     --db-user=magento \
     --db-password=magento \
     --currency=USD \
     --timezone=America/Chicago \
     --language=en_US \
     --use-rewrites=1 \
     --search-engine=elasticsearch7 \
     --elasticsearch-host=es-host.example.com \
     --elasticsearch-port=9200
   ```

## Post-install configurations

After installing {{site.data.var.ee}}, run the commands for [compile]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-compiler.html) and [deploy]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-view.html) for the code:

1. Switch to the correct user.

   ```bash
   sudo su - magento
   ```

1. Change to the `app/bin` directory.

1. Compile {{site.data.var.ee}}.

   ```bash
   bin/magento setup:di:compile
   ```

1. Deploy {{site.data.var.ee}}

   ```bash
   bin/magento setup:static:deploy
   ```

Optionally, if you used Vagrant with the _hostmanager_ plugin, update the hosts file.

1. Access the `localdev` root for the Vagrant box.

1. Update the hosts file.

   ```bash
   vagrant hostmanager
   ```

## Additional software and services

For development and testing in an environment as close to Integration as possible, you may also want to install additional tools, software, and services. These services are configured using [`services.yaml`]({{ site.baseurl }}/cloud/project/services.html).

-  [Redis]({{ site.baseurl }}/cloud/project/services-redis.html)
-  [ElasticSearch]({{ site.baseurl }}/cloud/project/services-elastic.html)
-  [RabbitMQ]({{ site.baseurl }}/cloud/project/services-rabbit.html)
-  [Additional software]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/optional.html)

## Verify your local workspace

To verify the local, access the store using the URL you passed in the install command. For this example, you can access the local {{site.data.var.ee}} store using the following URL formats:

-  `http://magento.local/`
-  `http://magento.local/admin`

To change the URI for the Admin panel, use this command to locate it:

```bash
bin/magento info:adminuri
```

To verify the Integration master branch environment, log into the Project Web Interface and select your named project. In the list of branches, select the Master. Click Access site to pull up a list of URLs (HTTP and HTTPS) and click the preferred link to open the site. To view the admin, add /admin or other configured Admin URI.

![Click Access for list of URLs]({{ site.baseurl }}/common/images/cloud/cloud-project-master-access.png){:width="297px"}

With these steps completed, you should have:

-  A {{site.data.var.ee}} account and initial project setup and master branch
-  A local workspace configured with installations of required software, `magento-cloud` CLI
-  SSH keys set up
-  The file system owner configured
-  Your initial code branch
-  Authentication keys set up and configured in the project and your local workstation

{:.ref-header}
Next step

For **Pro projects**, we strongly recommend fully deploying this base template `master` branch without any code or configuration changes to Staging and Production. For instructions, see [First time deployment]({{ site.baseurl }}/cloud/setup/first-time-deploy.html).

For **Starter projects**, you are ready to start developing.
