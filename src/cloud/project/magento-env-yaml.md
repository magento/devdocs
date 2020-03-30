---
group: cloud-guide
title: Build and deploy
functional_areas:
  - Cloud
  - Configuration
---

The `.magento.env.yaml` file uses environment variables to centralize the management of build and deploy actions across all of your environments, including Pro Staging and Production. To configure unique actions in each environment, you must modify this file in each environment.

## File structure

The `.magento.env.yaml` file includes the following sections:

-  **`stage`**—Accommodates the following stages of deployment:
   -  `global`—Controls actions in both the build, deploy, and post-deploy phases. You can override these settings in the build, deploy, and post-deploy sections.
   -  `build`—Controls actions in the build phase only. If you do not specify settings in this section, the build phase uses settings from the global section.
   -  `deploy`—Controls actions in the deploy phase only. If you do not specify settings in this section, the deploy phase uses settings from the global section.
   -  `post-deploy`—Controls actions _after_ deploying your application and _after_ the container begins accepting connections.
-  **`log`**—Controls [notifications]({{ site.baseurl }}/cloud/env/setup-notifications.html), including notification types and level of detail.
   -  `slack`—Configure a message to send to a Slack bot.
   -  `email`—Configure an email to send to one or more email recipients.
   -  [logging handlers]({{ site.baseurl }}/cloud/env/log-handlers.html)—Configure hardware and software application messages sent to a remote logging server.

The latest sample of the `.magento.env.yaml` file contains a detailed definition for all variables described in the following reference topics:

-  [Application]({{ site.baseurl }}/cloud/env/environment-vars_magento.html)—variables control administrative credentials
-  [Global]({{ site.baseurl }}/cloud/env/variables-global.html)—variables control actions in the following stages:
   -  [Build]({{ site.baseurl }}/cloud/env/variables-build.html)—variables control build actions
   -  [Deploy]({{ site.baseurl }}/cloud/env/variables-deploy.html)—variables control deploy actions
   -  [Post-deploy]({{ site.baseurl }}/cloud/env/variables-post-deploy.html)—variables control actions after deploy

## PHP constants

{:.bs-callout-warning}
Constant parsing does not work when using a `symfony/yaml` package version earlier than 3.2.

You can use PHP constants in `.magento.env.yaml` file definitions instead of hard-coding values. The following example defines the `driver_ options` using a PHP constant:

```yaml
stage:
  deploy:
    DATABASE_CONFIGURATION:
      connection:
        default:
          driver_options:
            !php/const:\PDO::MYSQL_ATTR_LOCAL_INFILE : 1
        indexer:
          driver_options:
            !php/const:\PDO::MYSQL_ATTR_LOCAL_INFILE : 1
      _merge: true
```

## Error handling

When a failure occurs because of an unexpected value in the `.magento.env.yaml` configuration file, you receive an error message. For example, the following error message presents a list of suggested changes to each item with an unexpected value, in some cases providing valid options:

```terminal
- Environment configuration is not valid. Please correct .magento.env.yaml file with next suggestions:
  Item CRON_CONSUMERS_RUNNER is not supposed to be in stage build. Please move it to one of possible stages: global, deploy
  Item SKIP_SCD has unexpected type string. Please use one of next types: boolean
  Item VERBOSE_COMMANDS has unexpected type boolean. Please use one of next types: string
  Item SKIP_HTML_MINIFICATION has unexpected type string. Please use one of next types: boolean
  Item CRON_CONSUMERS_RUNNER has unexpected type boolean. Please use one of next types: array
  Item VAR_WARM_UP_PAGES is not allowed in configuration.
  Item WARM_UP_PAGES has unexpected type string. Please use one of next types: array
```

Make any corrections, commit, and push the changes. If you do not receive an error message, then the changes to your configuration file pass the validation.
