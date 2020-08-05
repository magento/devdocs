---
group: cloud-guide
title: Error message reference for ece-tools
functional_areas:
  - Cloud
  - Deploy
  - Configuration
redirect_from:
  - /cloud/reference/error-codes.html
---

This error message reference provides information to troubleshoot errors that can occur during the {{site.data.var.ece }} build, deploy, and post-deploy processes.

All critical and warning error messages that occur during deployment are written to both the `var/log/cloud.log` and `/var/log/cloud.error.log` files. The Cloud error log file contains only errors from the latest deployment. An empty file indicates a successful deployment with no errors.

In the `cloud.error.log` file, each entry is formatted as a JSON string for easier parsing:

```json
{"errorCode":1006,"stage":"build","step":"validate-config","suggestion":"No stores/website/locales found in config.php\n  To speed up the deploy process do the following:\n  1. Using SSH, log in to your Magento Cloud account\n  2. Run \"php ./vendor/bin/ece-tools config:dump\"\n  3. Using SCP, copy the app/etc/config.php file to your local repository\n  4. Add, commit, and push your changes to the app/etc/config.php file","title":"The configured state is not ideal","type":"warning"}
```

Error messages are categorized by deployment stage–*build*, *deploy*, and *post-deploy*. Each section provides a list of associated errors with the following information for each error:

-  **Error code**:  The Magento-assigned identifier for the error message
-  **Stage**:  Indicates whether the error occurred during the build, deploy, or post-deploy stage
-  **Step**:  Indicates the step in the deployment scenario that can return the error. If the _Step_ column is blank, the error is a general error that can be returned by multiple steps, or during pre-processing operations. See [Scenario-based deployment]({{ site.baseurl }}/cloud/deploy/scenario-based-deployment.html) for more information about the build, deploy, and post-deploy steps.
-  **Suggestion**: Provides guidance to troubleshoot and resolve the error
-  **Title (Error description)**: A description that summarizes the cause of the error
-  **Type**: Indicates whether the error is a critical error or a warning

{%include cloud/error-codes.md%}
