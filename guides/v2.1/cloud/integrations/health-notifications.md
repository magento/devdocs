---
group: cloud-guide
title: Health notifications
functional_areas:
  - Cloud
  - Setup
---

{{site.data.var.ece}} monitors disk space usage on all applications and services in your Starter environment or your Pro Integration environment. The health status check occurs every 5 minutes. There are three low-disk warnings for health notifications:

-  **Warning**—available disk space drops below 20%
-  **Critical**—available disk space drops below 10%
-  **All-clear**—available disk space returns above 20%, after a Low disk event

#### To receive health notifications in email:

The health email integration requires an origination address and at least one recipient address. You can use the same email address for the `from-address` and the `recipient` address. The following example registers a health email integration with two recipients.

```bash
magento-cloud integration:add --type health.email --from-address you@example.com --recipients them@example.com --recipients others@example.com
```

#### To receive health notifications in a Slack channel:

Before you can receive health notifications in Slack, you must create a new, custom [bot user](https://api.slack.com/bot-users) for your Slack group. After you configure the bot-user for your channel, or channels, save the API Token provided by Slack to register your integration, as follows:

```bash
magento-cloud integration:add --type health.slack --token SLACK_API_TOKEN --channel '#slack-channel-name'
```
