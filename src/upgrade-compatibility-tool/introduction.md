---
group: software-update-guide
title: Introduction
ee_only: True
redirect_from:
  - /safe-upgrade-tool/introduction.html
functional_areas:
  - Upgrade
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/overview.html?lang=en
layout: migrated
---

The {{site.data.var.uct}} is a command-line tool that checks an {{site.data.var.ee}} customized instance against a specific version by analyzing all modules and core code installed in it. It returns a list of critical issues, errors, and warnings that must be addressed before upgrading to the latest version of {{site.data.var.ee}}. It also identifies potential problems that must be fixed in your code before attempting to upgrade to a newer version of {{site.data.var.ee}}.

The {{site.data.var.uct}} allows you to identify when core code changes have been made to customized features. See the [Run the tool](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/run.html) topic for more information.

It is distributed as a Composer package with every release of an {{site.data.var.ee}} version. See the [Developer](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/developer.html) topic for more information.

Refer to the [Install](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/install.html) for the first steps with the {{site.data.var.uct}}.

## Help improve the Upgrade Compatibility Tool

To connect with the {{site.data.var.uct}} team contact us on the Engineering Slack channel [Upgrade Compatibility Tool](https://magentocommeng.slack.com/archives/C019Y143U9F).

{:.bs-callout-info}
We want to hear your feedback, issues and suggestions to help us improve the tool.

Do you have an idea how to improve our compatibility analysis?. Check the [how to contribute]({{site.baseurl}}/guides/v2.4/coding-standards/contributing.html) page for more information.

See the [Resources]({{site.baseurl}}/community/resources/resources.html) page for more information.
