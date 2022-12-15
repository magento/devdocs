---
group: extension-best-practices
title: Run the Upgrade Compatibility Tool
functional_areas:
  - Standards
redirect_to: https://developer.adobe.com/commerce/php/best-practices/phpstorm/run-configuration/
status: migrated
---

Run Configurations are used to run internal and external processes from within IntelliJ Platform-based products.

## Setup the Run Configuration

See the [Run/Debug configurations topic](https://www.jetbrains.com/help/idea/run-debug-configuration.html) in the IntelliJ IDEA to understand the concept of a run configuration.

The Run Configuration is a Graphical User Interface (GUI) for the {{site.data.var.uct}}. This allows the {{site.data.var.uct}} instance to be configured using Composer. We recommend that you install the {{site.data.var.uct}} in the current project. However, if the {{site.data.var.uct}} is located outside the current project, a message displays providing an optoin to download and install it in the current project.

{:.bs-callout-warning}
The {{site.data.var.uct}} is an {{site.data.var.ee}} feature. You need your {{site.data.var.ee}} license key to install it.

![]({{site.baseurl}}/common/images/phpstorm/uct-run-configuration-1-min.gif)

When you create a new run configuration for a specific tool, create it from one of the dedicated configuration templates. Templates implement the startup logic and define the list of parameters and their default values.

The {{site.data.var.uct}} Run Configuration template is located in the PHPStorm plugin menu, under **Run/Debug configurations** > **Add New Configuration** > **Upgrade Compatibility Tool**.

![]({{site.baseurl}}/common/images/phpstorm/uct-run-configuration-template-position.png)

These are the main components of the {{site.data.var.uct}} Run Configuration template:

![]({{site.baseurl}}/common/images/phpstorm/uct-run-configuration-template-view.png)

*  *{{site.data.var.uct}} (UCT) executable*: Path where the {{site.data.var.uct}} executable script is located. Determined by the `bin/uct` path from the {{site.data.var.uct}} source root directory.
*  *Project root*: Current PHPStorm plugin root directory.
*  *Path*: Path to analize. Restricts the search to a specific folder. This is an optional field.
*  *Coming version*: The {{site.data.var.ee}} targeted version.
*  *Min issue level*: The minimum issue level to show in the report. Default is [WARNING]. This is an optional field.
*  *Ignore current version compatibility issues*: use this option when you do not want to include known critical issues, errors and warnings in your {{site.data.var.uct}} report. This is an optional field.
*  *Message*: Message that appears if the {{site.data.var.uct}} cannot be located for the current PHPStorm plugin project.
*  *Link*: Link to install the {{site.data.var.uct}} for the current PHPStorm plugin project.

See [Run](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/run.html) topic for more information on these specific options of the {{site.data.var.uct}}.

After you correctly configure the template, you can run the {{site.data.var.uct}} with a single click in your Run Configuration GUI.

## Run the tool

To run the {{site.data.var.uct}} click `UCT Run`.

![]({{site.baseurl}}/common/images/phpstorm/uct-run-configuration-3-min.gif)

The results are displayed in the console, including handy navigation to the compatibility issues in the code.

The output of the tool is displayed in the PHPStorm console with the ability to click and navigate to the references:

*  Code that has an issue.
*  Issue code description in the documentation.
*  Report file.
