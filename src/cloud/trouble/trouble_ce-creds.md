---
group: cloud-guide
title: Incorrect credentials
functional_areas:
  - Cloud
  - Configuration
---

## Incorrect credentials

This topic discusses how to resolve issues with incorrect credentials in your `auth.json`. You might have entered {{site.data.var.ce}} credentials or shared keys for {{site.data.var.ee}}.

### Symptom

The most common symptom of incorrect credentials is a deployment failure with an authentication error similar to the following:

   ```text
   The 'https://repo.magento.com/archives/magento/magento-cloud-configuration/magento-magento-cloud-configuration-1.0.3.0.zip' URL could not be accessed: HTTP/1.1 403 Forbidden
   ```

To see the error log:

1. [Log in to your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-access).
1. Click **Failure** to view the log as the following figure shows.

   ![View the log for a failed deployment]({{ site.baseurl }}/common/images/cloud/cloud_deploy-failure-creds.png){:width="600px"}

### Solution

To resolve this issue, you must clone the project locally and update `auth.json` with the correct {{site.data.var.ee}} [authorization keys]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/connect-auth.html) and run `composer update` to update project dependencies. After that, you can deploy your project successfully and get started with your development.

Verify that you are using your own keys, and *not* [shared account keys](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html).

#### Get started

To get started:

1. Log in to the machine on which your SSH keys are located.
1. Log in to your project:

   ```bash
   magento-cloud login
   ```

1. List your projects:

   ```bash
   magento-cloud project:list
   ```

1. If necessary, clone a project.

   ```bash
   magento-cloud project:get <project ID>
   ```

1. Change to a project directory.

   For example if your project is named Magento 2, `cd magento-2`

#### Update `auth.json` and redeploy the environment

To resolve the issue with credentials:

1. If you haven't done so already, change to the project root directory.
1. Open `auth.json` in a text editor.
1. Change the value of `username` to your {{site.data.var.ee}} public key.
1. Change the value of `password` to your {{site.data.var.ee}} private key.
1. Save your changes to `auth.json` and exit the text editor.
1. Update project dependencies:

   ```bash
   composer update
   ```

1. Add, commit, and push your changes:

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "<message>"
   ```

   ```bash
   git push origin master
   ```

1. Wait for the project to deploy.

   A snippet of messages for a successful deployment follows:

   ```terminal
   Building application 'mymagento' (runtime type: php:7.0, tree: e8450f9)
      Generating runtime configuration.

      Moving the application to the output directory
      Prewarming composer cache.
        Pre-downloaded 3 packages referenced in `composer.lock`

      Found a `composer.json`, installing dependencies.

      Executing post-build hook...
        [2016-05-31 14:36:58] Start build.
        [2016-05-31 14:36:58] Patching Magento.
        [2016-05-31 14:36:58] Command:/usr/bin/php /app/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/../../../patch.php
        [2016-05-31 14:36:59] Status:0
        [2016-05-31 14:36:59] Output:array (

   ... more ...

   [2016-05-31 14:36:59] Command:cd bin/; /usr/bin/php ./magento setup:di:compile
        [2016-05-31 14:38:27] Status:0
        [2016-05-31 14:38:27] Output:array (
          0 => 'Compilation was started.',
          1 => '%message% 0/7 [>---------------------------]   0% 1 sec 42.0 MiB%message% 0/7 [>---------------------------]   0% 1 sec 42.0 MiBProxies code generation... 0/7 [>---------------------------]   0% 1 sec 42.0 MiB',
          2 => 'Proxies code generation... 1/7 [====>-----------------------]  14% 1 sec 48.0 MiB',
          3 => 'Repositories code generation... 1/7 [====>-----------------------]  14% 1 sec 48.0 MiB',
          4 => 'Repositories code generation... 2/7 [========>-------------------]  28% 12 secs 60.0 MiB',
          5 => 'Service data attributes generation... 2/7 [========>-------------------]  28% 12 secs 60.0 MiB',
          6 => 'Service data attributes generation... 3/7 [============>---------------]  42% 12 secs 60.0 MiB',
          7 => 'Application code generator... 3/7 [============>---------------]  42% 12 secs 60.0 MiB',
          8 => 'Application code generator... 4/7 [================>-----------]  57% 34 secs 174.0 MiB',
          9 => 'Interceptors generation... 4/7 [================>-----------]  57% 34 secs 174.0 MiB',
          10 => 'Interceptors generation... 5/7 [====================>-------]  71% 53 secs 180.0 MiB',
          11 => 'Area configuration aggregation... 5/7 [====================>-------]  71% 53 secs 180.0 MiB',
          12 => 'Area configuration aggregation... 6/7 [========================>---]  85% 2 mins 180.0 MiB',
          13 => 'Interception cache generation... 6/7 [========================>---]  85% 2 mins 180.0 MiB',
          14 => 'Interception cache generation... 7/7 [============================] 100% 2 mins 180.0 MiB',
          15 => 'Generated code and dependency injection configuration successfully.',
        )
        [2016-05-31 14:38:27] Clearing temporary directory.
        [2016-05-31 14:38:27] Command:rm -rf ../init/*
        [2016-05-31 14:38:27] Status:0
        [2016-05-31 14:38:27] Output:array (

   ... more ...

      Executing pre-flight checks...

      Compressing application.
      Beaming package to its final destination.

   Creating environment aqf7hrijhl52o-master.
      Environment configuration:
        mymagento (type: php:7.0, size: S, disk: 2048)
        mysql (type: mysql:10.0, size: S, disk: 2048)
        redis (type: redis:3.0, size: S)
        solr (type: solr:4.10, size: S, disk: 1024)

      Environment routes:
        http://master-aqf7hrijhl52o.us.magentosite.cloud/ is served by application `mymagento`
        https://master-aqf7hrijhl52o.us.magentosite.cloud/ is served by application `mymagento`

   To aqf7hrijhl52o@git.us.magento.cloud:aqf7hrijhl52o.git
      34afd91..98c2166  master -> master
   ```

#### Verify the deployment

To verify the deployment was successful, enter one of the URLs displayed under `Environment routes:` in a web browser.

{:.bs-callout-warning}
For security reasons, we strongly recommend you change your Magento Admin URI, administrator username, and administrator password. For step-by-step details, see [Set environment and project variables]({{ site.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).
