---
group: cloud
title: Site availability
version: 2.0
functional_areas:
  - Cloud
  - Configuration
  - Services
---

If you have site availability issues, the first thing you should do is review your [deployment logs]({{ page.baseurl }}/cloud/trouble/environments-logs.html#log-deploy-log) to see if you can identify the problem.

You may be able to resolve your issue by searching your logs for one of the examples in this topic and trying the associated solution.

## CredisException

This exception is caused by a known issue with how Magento handles simultaneous connections to Redis during static content deployment in the deploy phase.

    [2018-01-30 18:56:52] Generating static content for locales: en_US
    [2018-01-30 18:56:52] Command:php ./bin/magento setup:static-content:deploy --jobs=3  en_US

      [CredisException]
      read error on connection

During static content deployment in the deploy phase, the default number of processing jobs is set to `3`. We recommend setting the number of processing jobs to `1` as a workaround.

You can also move static content deployment from the deploy phase to the build phase, which does not have access to Redis. Refer to [Configuration management]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html) for more information.

<div class="bs-callout bs-callout-info" markdown="1">
Static content deployment in the build phase also reduces downtime. The deploy phase puts your application in maintenance mode, which takes your site offline until static content deployment is complete. If static content deployment fails in the deploy phase, your site gets stuck in maintenance mode. A failure during the build phase prevents deployment, which prevents downtime.
</div>

### Symptoms

-   Your site is not functioning at all. HTTP requests result in 50x errors.
-   Your site is functioning normally, but fails to refresh static assets.

### Solution

Modify the deploy phase using the `STATIC_CONTENT_THREADS` environment variable and redeploy your site.

1.  In a terminal, log in to your project.

        magento-cloud-login

1.  Set the variable.

        magento-cloud variable:set STATIC_CONTENT_THREADS '1' -e <environment>

Refer to [Manage variables]({{ page.baseurl }}/cloud/env/variables-intro.html) and [Redis and static-content deployment]({{ page.baseurl }}/cloud/trouble/redis-troubleshooting.html#static-content) for more information.

<div class="bs-callout bs-callout-info" markdown="1">
For Pro projects **created before October 23, 2017**, you must open a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to add this environment variable to your production and staging environments.
</div>
