---
group: software-update-guide
title: Introduction
ee_only: True
redirect_from:
  - /safe-upgrade-tool/introduction.html
functional_areas:
  - Upgrade
---

The Upgrade Compatibility Tool is a command-line tool that checks an {{site.data.var.ee}} customized instance against a specific version by analyzing all modules and core code installed in it. Returns a list of errors and warnings that must be addressed before upgrading to the latest version of {{site.data.var.ee}}. Identifies potential problems that must be fixed in your code before attempting to upgrade to a newer version of {{site.data.var.ee}}.

The Upgrade Compatibility Tool allows to identify when core code changes have been made to customized features. See the [Run the tool]({{site.baseurl}}/upgrade-compatibility-tool/run.html) topic for more information.

It is distributed as a Composer package with every release of an {{site.data.var.ee}} version. See the [Developer]({{site.baseurl}}/upgrade-compatibility-tool/developer.html) topic for more information.

Refer to the [Install]({{site.baseurl}}/upgrade-compatibility-tool/install.html) for the first steps with the Upgrade Compatibility Tool.
