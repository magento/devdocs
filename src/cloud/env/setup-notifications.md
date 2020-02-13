---
group: cloud-guide
title: Set up notifications
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

By default, {{site.data.var.ece}} writes build and deploy actions to the `app/var/log/cloud.log` file inside the Magento root application directory. Optionally, you can send logs to a messaging system, such as Slack and email, to receive real-time notifications.

For example, you could send a Slack message to alert a group of people when a deployment fails, and prompt an investigation into what went wrong.

## Plan notifications

Before you configure notifications, consider the following:

-  What kind of notifications do you want to receive (Slack messages, email, both)?
-  How much detail do you want to see in the logs?
-  Where do you want to set up notifications (Integration, Staging, Production)?

For example, during initial development you may prefer email notifications that show detailed logs about your Integration environment to help you debug issues before deploying to the Staging environment. When you are ready to deploy to the Staging or Production environment, you may prefer a Slack message that contains less detailed information.

{:.bs-callout-info}
The configuration file used to set up notifications is at the root of your project directory, so it applies when you push changes to any environment. If you want to customize notifications per environment, you must modify the configuration file before pushing it to that environment.

## Configure notifications

To configure notifications:

1. Open a terminal and [checkout a branch]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html#branch) in your local environment.
1. In the `.magento.env.yaml` file in your project root, add your messaging system settings, including preferred notification [Log levels]({{ site.baseurl }}/cloud/env/log-handlers.html#log-levels).

    For example, to configure both Slack _and_ email configurations, use the following:

    ```yaml
    log:
      slack:
        token: "<your-slack-token>"
        channel: "<your-slack-channel>"
        username: "SlackHandler"
        min_level: "info"
      email:
        to: <your-email>
        from: <your-email>
        subject: "Log notification from Magento Cloud"
        min_level: "notice"
    ```

    {:.bs-callout-info}
    {{site.data.var.ece}} only sends emails during the deployment phase.

1. Commit and push your changes to the remote server.

   ```bash
   git -A && git commit -m "Configure build/deploy notifications"
   ```

   ```bash
   git push origin <branch-name>
   ```

### Example Slack configuration

The following example shows a Slack-only configuration:

```yaml
log:
  slack:
    token: "<your-slack-token>"
    channel: "<your-slack-channel>"
    username: "SlackHandler"
    min_level: "info"
```

-  `token`—Your Slack [user token](https://api.slack.com/docs/token-types#user). Your user token authorizes {{site.data.var.ece}} to send messages.
-  `channel`—Name of the Slack channel {{site.data.var.ece}} sends notifications.
-  `username`—Username {{site.data.var.ece}} uses to send notification messages in Slack.
-  `min_level`—Minimum log level for notification messages. We recommend using `info`.

### Example email configuration

The following example shows an email-only configuration:

{:.bs-callout-info}
{{site.data.var.ece}} only sends emails during the deployment phase.

```yaml
log:
  email:
    to: <your-email>
    from: <your-email>
    subject: "Log notification from Magento Cloud"
    min_level: "notice"
```

-  `to`—Email address {{site.data.var.ece}} sends notification messages.
-  `from`—Email address for sending notification messages to recipients.
-  `subject`—Description of the email.
-  `min_level`—Minimum log level for notification messages. We recommend using `notice` or `warning`.
