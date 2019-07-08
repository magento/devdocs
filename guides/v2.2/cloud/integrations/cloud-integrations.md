---
group: cloud-guide
title: Integrations
functional_areas:
  - Cloud
  - Setup
---

Integrations are useful for leveraging the functionality of external services—such as Git hosting or Slack bots—and maintaining your current development processes, such as using the code review pull request function in GitHub. You can add the following integrations to your {{site.data.var.ece}} project:

-  [Health notifications]({{ page.baseurl }}/cloud/integrations/health-notifications.html):
    -  Email
    -  Slack interactive bot
    -  PagerDuty integration
-  Git-based hosting services:
    -  [Bitbucket]({{ page.baseurl }}/cloud/integrations/bitbucket-integration.html)
    -  [GitHub]({{ page.baseurl }}/cloud/integrations/github-integration.html)
    <!-- -  [GitLab]({{ page.baseurl }}/cloud/integrations/gitlab-integration.html) -->

#### To list the configured integrations:

```bash
magento-cloud integration:list
```

```terminal
+----------+--------------+---------------------------------------------------------------------------+
| ID       | Type         | Summary                                                                   |
+----------+--------------+---------------------------------------------------------------------------+
| <int-id> | bitbucket    | Repository: user/magento-int.git                                          |
|          |              | Hook URL:                                                                 |
|          |              | https://magento-url.cloud/api/projects/projectID/integrations/int-ID/hook |
| <int-id> | health.email | From: you@example.com                                                     |
|          |              | To: them@example.com                                                      |
+----------+--------------+---------------------------------------------------------------------------+
```
{: .no-copy}
