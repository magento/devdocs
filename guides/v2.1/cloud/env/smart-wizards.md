---
group: cloud
title: Smart wizards
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The smart wizards can assist you in determining if your Cloud configuration follows best practices. The available wizards can assist with the following configurations:

-  Ideal state for minimal deployment downtime
-  Static Content Deployment (SCD) for on-demand, the build stage, or the deploy stage
-  Load balancing configuration for database and Redis

Each of the smart wizard commands provides a verification response and, if applicable, a recommendation for the proper configuration.

Command | Description
------- | -----------
`wizard:ideal-state` | Check that SCD is on the _build_ stage, the `SKIP_HTML_MINIFICATION` variable is set to `true`, and the post_deploy hook configured.
`wizard:master-slave` | Check that the `REDIS_USE_SLAVE_CONNECTION` variable  and the `MYSQL_USE_SLAVE_CONNECTION` variable is set to `true`.
`wizard:scd-on-demand` | Check that the `SCD_ON_DEMAND` global environment variable is `true`.
`wizard:scd-on-build ` | Check that the `SCD_ON_DEMAND` global environment variable is `false` and the `SKIP_SCD` environment variable is `false` for the _build_ stage. Verifies the `config.php` file contains information for stores, store groups, and websites.
`wizard:scd-on-deploy` | Check that the `SCD_ON_DEMAND` global environment variable is `false` and the `SKIP_SCD` environment variable is `false` for the _deploy_ stage. Verifies the `config.php` file does _NOT_ contain the list of stores, store groups, and websites with related information.

## Assisting the SCD on-demand configuration

To verify your configuration properly enables the SCD on-demand feature:

```bash
./vendor/bin/ece-tools wizard:scd-on-demand
```

A successful configuration returns:

```terminal
SCD on-demand is enabled
```

A failed configuration returns:

```terminal
SCD on-demand is disabled
```

## Verifying an ideal configuration

The _ideal_ configuration for your Cloud project helps to minimize deployment downtime by warming the cache and generating static content when requested by the user. If your Cloud is not configured for this _ideal state_, then you receive a message similar to the following:

```terminal
- SCD on build is not configured
- Post-deploy hook is not configured
- Skip HTML minification is disabled

Ideal state is not configured
```

Make the following corrections to your configuration:

1.  Disable the Skip HTML minification:

    > .magento.env.yaml
    
    ```yaml
    stage:
      global:
        SKIP_HTML_MINIFICATION: true
    ```

1.  Configure the post-deploy hook:

    > .magento.app.yaml
    
    ```yaml
        post_deploy: |
            php ./vendor/bin/ece-tools post-deploy
    ```

1.  Push your code changes and run the test again. When your configuration is _ideal_, you receive the following message:

    ```terminal
    Ideal state is configured
    ```