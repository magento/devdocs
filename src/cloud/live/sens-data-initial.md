---
group: cloud-guide
title: Example of managing system-specific settings
functional_areas:
  - Cloud
  - Deploy
---

Configuration management exports your configurations to a file for pushing across your environments. This file, `config.php`, keeps your configurations consistent across all environments, decreases downtime by moving static deploy to build, and much more. This information details an example for configuring your settings, exporting the file, and deploying it.

This example shows how to use the [recommended procedure]({{ site.baseurl }}/cloud/live/sens-data-over.html) for managing the configuration:

1. Enter your configurations in your Integration environment Admin panel.
1. Create `config.php` and transfer it to your local system.
1. Push `config.php` to the branch and Integration environment.
1. Verify your settings are not editable in the Admin panel. Any configurations exported to `config.php` make those fields in the Admin panel read-only and disabled for edits.
1. Update and modify configurations again in Integration, update the file, and check it into Git:

   *  Change configuration settings on the Integration environment.
   *  To add new configurations, run the command to create `config.php` again. New configurations are appended to the file.
   *  To remove or edit existing configurations, manually edit the file.
   *  Commit and push to Git.

<!-- {:.bs-callout-info}
This example shows how you can set and lock configuration values for everything _except_ sensitive settings. You must set sensitive settings either as configuration variables or in the [Magento Admin](https://glossary.magento.com/magento-admin). For more information, see [Sensitive and system-specific]({{ site.baseurl }}/guides/v2.3/config-guide/prod/config-reference-sens.html).
-->
For example, you may want to set the following settings:

*  Disable [locale](https://glossary.magento.com/locale) and static file optimization settings in your Integration environment
*  Enable static file optimization in Staging and Production environments
*  Configure Fastly in Staging and Production with specific credentials for each

_Static file optimization_ means merging and minifying [JavaScript](https://glossary.magento.com/javascript) and Cascading Style Sheets, and minifying [HTML](https://glossary.magento.com/html) templates.

## Prerequisites {#prereqs}

To complete these configuration management tasks, you need the following:

*  Minimum a project reader role with [environment administrator]({{ site.baseurl }}/cloud/project/user-admin.html) privileges
*  Magento Admin panel URL and credentials for Integration, Staging, and Production environments
*  Push all updated code to your Integration environment:

   *  For Starter: To an Integration branch and environment
   *  For Pro: To the Integration `master` branch and environment

## Configure Magento through the Integration Admin panel {#configure}

In the Integration environment, you can log in to the Magento Admin panel to modify system configuration settings for stores, websites, modules or extensions, static file optimization, and system values related to static content deployment. See [Configuration data]({{ site.baseurl }}/cloud/live/sens-data-over.html#configuration-data).

To change locale and static file optimization settings:

1. Log in to the Integration environment Admin panel. You can access this URL through the Project Web Console.
1. Navigate to **Stores** > Settings > **Configuration** > General > **General**.
1. In the right pane, expand **Locale Options**.
1. From the **Locale** list, change the locale. You can change it back later.

   ![Change the locale]({{ site.baseurl }}/common/images/cloud/cloud_var_locale.png){:width="400px"}

1. Click **Save Config**.
1. In the left navigation pane, click **Advanced** > **Developer**.
1. In the right pane, expand **Template Settings**.
1. Clear the **Use default value** checkbox next to the **Minify Html** list.
1. From the **Minify Html** list, click **No**.
1. In the right pane, expand **CSS Settings**.
1. From the **Merge CSS Files** list, click **No**.
1. From the **Minify CSS Files** list, click **No**.

   ![Set static file optimization settings]({{ site.baseurl }}/common/images/cloud/cloud_vars_set-minify.png){:width="550px"}

1. Click **Save Config**.
1. If prompted, [flush the Magento cache](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).
1. Log out of the Magento Admin.

## Export values and transfer config.php to your local system {#export}

This step creates and transfers the `config.php` configuration file on the Integration environment using a command you run on your local machine.

This procedure corresponds to step 2 in the [recommended procedure]({{ site.baseurl }}/cloud/live/sens-data-over.html). After you create `config.php`, transfer it to your local system so you can add it to Git.

To create and transfer `config.php`:

1. On your local system, find the integration server's SSH URL.

   ```bash
   magento-cloud environment:ssh --pipe
   ```

1. Create `config.php` on the integration server.

   ```bash
   ssh <SSH URL> "php vendor/bin/ece-tools config:dump"
   ```

   For example,

   ```bash
   ssh itnu84v4m4e5k-master-ouhx5wq@ssh.us.magentosite.cloud "php vendor/bin/ece-tools config:dump"
   ```

1. If you haven't done so already, change to the project root directory.
1. Transfer `config.php` to your local system.

   ```bash
   rsync <SSH URL>:app/etc/config.php ./app/etc/config.php
   ```

The following snippet from `config.php` shows an example of changing the default locale to `en_GB` and changing static file optimization settings:

```php?start_inline=1
'general' => [
     'locale' => [
         'code' => 'en_GB',
         'timezone' => 'UTC',
     ],

     ... more ...

 'dev' => [
     'template' => [
         'allow_symlink' => '0',
         'minify_html' => '0',
     ],
     'js' => [
         'merge_files' => '0',
         'enable_js_bundling' => '0',
         'minify_files' => '0',
     ],
     'css' => [
         'merge_css_files' => '0',
         'minify_files' => '0',
     ],

     ... more ...
```
{:.no-copy}

## Push and deploy config.php to environments {#deploy}

Now that you've created `config.php` and transferred it to your local system, commit it to Git and push it to your environments. This procedure corresponds to step 3 and 4 in the [recommended procedure]({{ site.baseurl }}/cloud/live/sens-data-over.html).

The following command adds, commits, and pushes to master:

```bash
git add app/etc/config.php && git commit -m "Add system-specific configuration" && git push origin master
```

Complete code deployment to Staging and Production. For Starter, you push to `staging` and `master` branches. For Production, you will need to SSH into your environments and push. For details on deployment commands, see [Deploy your store]({{ site.baseurl }}/cloud/live/stage-prod-live.html).

Wait for deployment to complete in all environments.

## Verify your configuration changes {#cloud-set-verify}

After you push `config.php` to your environments, any values you changed should be read-only in the Magento Admin. In this example, the modified default locale and static file optimization settings should not be editable in the Magento Admin. These configuration settings are set in `config.php`.

To verify your configuration changes:

1. If you haven't done so already, log out of the Magento Admin in one of the environments.
1. Log back in to the Magento Admin.
1. Click **Stores** > Settings > **Configuration** > General > **General**.
1. In the right pane, expand **Locale Options**.

   Notice several fields cannot be edited, as shown in the following sample. These configuration settings are maintained by `config.php`.

   ![Can't edit certain values in the Admin]({{ site.baseurl }}/common/images/cloud/cloud_var_not-editable.png){:width="550px"}

1. In the left navigation pane, click Advanced > **Developer**.
1. In the right pane, expand **Template Settings**, **JavaScript Settings**, and **CSS Settings**.

   Notice several fields cannot be edited, as shown in the following sample. These configuration settings are maintained by `config.php`.

   ![Can't edit certain values in the Admin ]({{ site.baseurl }}/common/images/cloud/cloud_var_not-editable2.png){:width="550px"}

1. Log out of the Magento Admin.

## Change and update system-specific configuration settings {#modify}

If you need to modify any of these settings and update `config.php`, you will need to modify the file manually with a text editor. After completing edits or removals, you can push it to Git following the previous steps.

To add new configurations, modify your Integration environment and run the command again to generate the file. Any new configurations are appended to the code in the file. Push it to Git following the previous steps.

For an overview, see the [recommended procedure]({{ site.baseurl }}/cloud/live/sens-data-over.html).

For this example, we'll modify static file optimization settings and add a new setting for JavaScript.

### Add new configurations in Integration {#change-settings}

To add additional configuration values in the Integration environment Magento Admin. For this example, we are merging JavaScript files.

1. If you haven't done so already, log out of the Integration Admin.
1. Log in to the Integration Admin.
1. Click **Stores** > Settings > **Configuration** > **Advanced** > **Developer**.
1. In the right pane, expand **JavaScript Settings**.
1. From the **Merge JavaScript Files** list, click **Yes**.
1. Click **Save Config**.
1. If prompted, [flush the Magento cache](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).
1. Log out of the Magento Admin.

### Run the config.php command {#regenerate}

By running the command again for `php vendor/bin/ece-tools config:dump`, the new configuration is appended to the file.

1. On your local system, find the integration server's SSH URL.

   ```bash
   magento-cloud environment:ssh --pipe
   ```

1. Run the `config.php` creation command again on the Integration server.

   ```bash
   ssh <SSH URL> "php vendor/bin/ece-tools config:dump"
   ```

   For example,

   ```bash
   ssh itnu84v4m4e5k-master-ouhx5wq@ssh.us.magentosite.cloud "php vendor/bin/ece-tools config:dump"
   ```

1. If you haven't done so already, change to the project root directory.
1. Transfer `config.php` to your local system.

   ```bash
   rsync <SSH URL>:app/etc/config.php ./app/etc/config.php
   ```

### Edit config.php with new settings {#change-config}

On your local, use a text editor to edit the updated `app/etc/config.php` file. Edit these settings to enable minifying for JavaScript, HTML, and CSS files.

```php?start_inline=1
 'dev' => [
     'template' => [
         'allow_symlink' => '0',
         'minify_html' => '0',
     ],

     ... more ...

     'js' => [
         'merge_files' => '0',
         'enable_js_bundling' => '0',
         'minify_files' => '0',
     ],
     'css' => [
         'merge_css_files' => '0',
         'minify_files' => '0',
     ],
```
{:.no-copy}

To modify settings to allow minification, edit `'0'` to `'1'` for `'minify_html'` and each `'minify_files'` option:

```php?start_inline=1
 'dev' => [
     'template' => [
         'allow_symlink' => '0',
         'minify_html' => '1',
     ],

     ... more ...

     'js' => [
         'merge_files' => '0',
         'enable_js_bundling' => '0',
         'minify_files' => '1',
     ],
     'css' => [
         'merge_css_files' => '0',
         'minify_files' => '1',
     ],
```
{:.no-copy}

Save the changes to the file.

### Push the changes to Git {#push-again}

To push your changes, enter the following command:

```bash
git add app/etc/config.php && git commit -m "Add system-specific configuration and edit settings" && git push origin master
```

Wait for deployment to complete.

Repeat the deployment process for pushing the code to all environments.
