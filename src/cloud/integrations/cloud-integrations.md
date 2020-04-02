---
group: cloud-guide
title: Integrations
functional_areas:
  - Cloud
  - Setup
---

Integrations are useful for leveraging the functionality of external services—such as Git hosting or Slack bots—and maintaining your current development processes, such as using the code review pull request function in GitHub. You can add the following integrations to your {{site.data.var.ece}} project:

-  [Health notifications]({{ site.baseurl }}/cloud/integrations/health-notifications.html):
   -  Email
   -  Slack interactive bot
   -  PagerDuty integration
-  Git-based hosting services:
   -  [Bitbucket]({{ site.baseurl }}/cloud/integrations/bitbucket-integration.html)
   -  [GitHub]({{ site.baseurl }}/cloud/integrations/github-integration.html)
   -  [GitLab]({{ site.baseurl }}/cloud/integrations/gitlab-integration.html)

Use the `magento-cloud` CLI to list the integrations configured for your project:

```bash
magento-cloud integration:list
```

Sample response:

```terminal
+----------+--------------+---------------------------------------------------------------------------+
| ID       | Type         | Summary                                                                   |
+----------+--------------+---------------------------------------------------------------------------+
| <int-id> | bitbucket    | Repository: user/magento-int                                              |
|          |              | Hook URL:                                                                 |
|          |              | https://magento-url.cloud/api/projects/projectID/integrations/int-ID/hook |
| <int-id> | health.email | From: you@example.com                                                     |
|          |              | To: them@example.com                                                      |
+----------+--------------+---------------------------------------------------------------------------+
```
{:.no-copy}

## Generic webhooks

You can capture events and `POST` JSON messages that report activity to a _webhook_ URL. Add a webhook URL using the following syntax:

```bash
magento-cloud integration:add --type=webhook --url=https://hook-url.example.com
```

-  `type`—Specify the `webhook` integration type.
-  `url`—Provide the webhook URL that can receive JSON messages.

The sample response shows a series of prompts that provide an opportunity to customize the integration. Using the default (blank) response sends messages about all events on all environments in a project.

You can customize the integration to report specific [events](#events-to-report), such as pushing code to a branch. For example, you can specify the `environment.push` event to send a message when a user pushes code to a branch:

```terminal
Events to report (--events)
A list of events to report, e.g. environment.push
Default: *
Enter comma-separated values (or leave this blank)
>
```
{:.no-copy}

You can choose to report events in a `pending`, `in_progress`, or `complete` state:

```terminal
States to report (--states)
A list of states to report, e.g. pending, in_progress, complete
Default: complete
Enter comma-separated values (or leave this blank)
>
```
{:.no-copy}

And you can _include_ or _exclude_ messages for specific environments:

```terminal
Included environments (--environments)
The environment IDs to include
Default: *
Enter comma-separated values (or leave this blank)
>

Excluded environments (--excluded-environments)
The environment IDs to exclude
Enter comma-separated values (or leave this blank)
>
```
{:.no-copy}

When the integration is complete, you receive a summary of the values:

```terminal
Created integration integration-ID (type: webhook)
+-----------------------+------------------------------+
| Property              | Value                        |
+-----------------------+------------------------------+
| id                    | integration-ID               |
| type                  | webhook                      |
| events                | - '*'                        |
| environments          | - '*'                        |
| excluded_environments | {  }                         |
| states                | - complete                   |
| url                   | https://hook-url.example.com |
+-----------------------+------------------------------+
```
{:.no-copy}

### Update existing integration

You can update an existing integration. For example, change the states from `complete` to `pending` using the following:

```bash
magento-cloud integration:update --states=pending <integration-ID>
```

Sample response:

```terminal
Integration integration-ID (webhook) updated
+-----------------------+------------------------------+
| Property              | Value                        |
+-----------------------+------------------------------+
| id                    | integration-ID               |
| type                  | webhook                      |
| events                | - '*'                        |
| environments          | - '*'                        |
| excluded_environments | {  }                         |
| states                | - pending                    |
| url                   | https://hook-url.example.com |
+-----------------------+------------------------------+
```
{:.no-copy}

### Events to report

Event | Description
----- | :-----------
`environment.access.add`    | A user has been granted access to the environment
`environment.access.remove` | A user has been removed from the environment
`environment.activate`      | A branch has been "activated" with an environment
`environment.backup`        | A user triggered a snapshot
`environment.branch`        | A branch has been created using the management console
`environment.deactivate`    | A branch has been "deactivated". The code is still there but the environment was destroyed
`environment.delete`        | A branch has been deleted
`environment.initialize`    | The master branch of the project initialized with a first commit
`environment.merge`         | An active branch has been merged using the management console or API
`environment.push`          | A user pushed code to a branch
`environment.restore`       | A user restored a snapshot
`environment.route.create`  | A route has been created using the management console
`environment.route.delete`  | A route has been deleted using the management console
`environment.route.update`  | A route has been modified using the management console
`environment.subscription.update` | The master environment has been resized because the subscription has changed, but here are no content changes
`environment.synchronize`   | An environment has had data or code re-copied from its parent environment
`environment.update.http_access` | HTTP access rules for an environment have been modified
`environment.update.restrict_robots` | The block-all-robots feature has been enabled or disabled
`environment.update.smtp`   | Sending of emails has been enabled or disabled for an environment
`environment.variable.create` | A variable has been created
`environment.variable.delete` | A variable has been deleted
`environment.variable.update` | A variable has been modified
`project.domain.create`     | A domain has been created and added to the project
`project.domain.delete`     | A domain associated with the project has been removed
`project.domain.update`     | A domain associated with the project has been updated
