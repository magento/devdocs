---
group: extension-best-practices
title: Run configuration
functional_areas:
  - Standards
---

Run Configurations are used to run internal and external processes from within IntelliJ Platform based products.

See the [Run/Debug configurations topic](https://www.jetbrains.com/help/idea/run-debug-configuration.html) in the IntelliJ IDEA to understand the concept of a run configuration.

This Run Configuration is a Graphical User Interface (GUI) for the {{site.data.var.uct}}.

Allows the {{site.data.var.uct}} instance to be configured via composer. It is recommended that the {{site.data.var.uct}} is installed in the current project. However, if the {{site.data.var.uct}} is located outside the current project, a message is shown alerting of the possibility to download and install {{site.data.var.uct}} in the current project.

{:.bs-callout-warning}
The {{site.data.var.uct}} is an {{site.data.var.ee}} feature, keep in mind that you should have your {{site.data.var.ee}} license key to install it.

When you create a new run configuration for a specific tool, you create it from one of the dedicated configuration templates, which implement the startup logic, define the list of parameters and their default values.

The {{site.data.var.uct}} Run Configuration template can be found in the Run/Debug configurations dialog -> Add New Configuration -> Upgrade Compatibility Tool


[official documentation](https://plugins.jetbrains.com/docs/intellij/code-inspections.html).## Run {{site.data.var.uct}} via PHPstorm plugin

![]({{site.baseurl}}/common/images/phpstorm/xml-file-header.png)