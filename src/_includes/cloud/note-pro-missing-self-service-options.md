For {{site.data.var.ece}} Pro Staging and Production environments, you can update many configuration options in your local development environment and commit the changes to apply them to these environments. However, you must submit a [Support ticket](https://support.magento.com/hc/en-us) to update the following configuration options:

-  Install or update services in the `.magento/services.yaml` file.
-  Change the configuration for the `mounts` and `disk` properties in the `.magento.app.yaml` file.

{:.bs-callout-warning}
Some **Pro projects** require a support ticket to update the route configuration in the `routes.yaml` file and the cron configuration in the `.magento.app.yaml` file. Adobe recommends updating and testing YAML configuration files in an Integration environment, then deploying changes to the Staging environment. If you discover that your configuration changes are not applied to Staging sites after you redeploy and do not see any related error messages in the log, then you **MUST** submit a [Support ticket](https://support.magento.com/hc/en-us) that describes the attempted configuration changes. Include any updated YAML configuration files in the ticket.
