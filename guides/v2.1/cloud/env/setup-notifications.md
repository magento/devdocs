---
layout: default
group: cloud
title: Set up notifications
version: 2.1
github_link: cloud/env/setup-notifications.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

By default, {{site.data.var.ece}} writes build and deploy actions to the `app/var/log/cloud.log` file inside the Magento root application directory. Optionally, you can send logs to a messaging system, such as Slack and email, to receive real-time notifications.

For example, you could send a Slack message to alert a group of people when a deployment fails, and prompt an investigation into what went wrong.

## Plan your notifications
Before you configure notifications, consider the following:

-   What kind of notifications do you want to receive (Slack messages, email, both)?
-   How much detail do you want to see in the logs (see [Log levels](#log-levels))?
-   Where do you want to set up notifications (integration, staging, production)?

For example, during initial development you may prefer email notifications that show detailed logs about your Integration environment to help you debug issues before deploying to the Staging environment. However, when you are ready to deploy to the Staging or Production environment, you may prefer a Slack message that contains less detailed information.

<div class="bs-callout bs-callout-warning" markdown="1">
The configuration file used to set up notifications is at the root of your project directory, so it applies when you push changes to any environment. If you want to customize notifications per environment, you must modify the configuration file before pushing it to that environment.
</div>

## Configure notifications
To configure notifications:

1.  Open a terminal and [checkout a branch]({{page.baseurl}}/cloud/before/before-setup-env-2_clone.html#branch) in your local environment.
1.  Locate the `.magento.env.yaml.sample` file in your project root and rename it `.magento.env.yaml`. The code in this file is commented out by default.
1.  Remove the code comments and add your messaging system settings, including preferred notification [log level](#log-levels).

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

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    {{site.data.var.ece}} only sends emails during the deployment phase.
    </div>

1. Commit and push your changes to the remote server.

    ```bash
    git -A && git commit -m "Configure build/deploy notifications"
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

-   `token`—Your Slack [user token](https://api.slack.com/docs/token-types#user){:target="\_blank"}. Your user token authorizes {{site.data.var.ece}} to send messages.
-   `channel`—Name of the Slack channel {{site.data.var.ece}} sends notifications.
-   `username`—Username {{site.data.var.ece}} uses to send notification messages in Slack.
-   `min_level`—Minimum log level for notification messages. We recommend using `info`.

### Example email configuration
The following example shows an email-only configuration:

<div class="bs-callout bs-callout-info" id="info" markdown="1">
{{site.data.var.ece}} only sends emails during the deployment phase.
</div>

```yaml
log:
  email:
      to: <your-email>
      from: <your-email>
      subject: "Log notification from Magento Cloud"
      min_level: "notice"
```

-   `to`—Email address {{site.data.var.ece}} sends notification messages.
-   `from`—Email address for sending notification messages to recipients.
-   `subject`—Description of the email.
-   `min_level`—Minimum log level for notification messages. We recommend using `notice` or `warning`.

### Log levels
Log levels determine the level of detail your notification messages contain. You can choose from the following options:

-   **debug**—Detailed debug information.
-   **info**—Interesting events. For example, a user logs in, SQL logs, etc.
-   **notice**—Normal but significant events.
-   **warning**—Exceptional occurrences that are not errors. For example, use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.
-   **error**—Runtime errors that don't require immediate action but should be logged and monitored.
-   **critical**—Critical conditions. For example, an unavailable application component, unexpected exceptions.
-   **alert**—Action must be taken immediately. For example, your website is down, the database is unavailable, etc. This should trigger SMS alerts and wake you up.
-   **emergency**—The system is unusable.