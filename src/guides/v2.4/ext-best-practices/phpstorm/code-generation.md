---
group: extension-best-practices
title: Code generation
functional_areas:
  - Standards
---

The PHPStorm plugin enables features and functionality to help you create custom extensions.

### XML file header

The **XML file header** template is located in the PHPStorm plugin menu, under **Preferences** > **Editor** > **File and Code Templates**.

You can configure the **XML file header** that appears in all generated XML files in the PHPStorm plugin GUI:

![]({{site.baseurl}}/common/images/phpstorm/xml-file-header.png)

#### Usage

All generated XML files will include the **XML file header**:

![]({{site.baseurl}}/common/images/phpstorm/xml-file-header-in-file.png)

### Web API declaration generation

![]({{site.baseurl}}/common/images/phpstorm/web-api-declaration-2-min.gif)

### Web API interface for service (PHP class) generation

![]({{site.baseurl}}/common/images/phpstorm/declare-web-api-interface-min.gif)

### Web API generation for the Magento Entity Creator

From now on, the Entity Creator feature also includes the Web API generation.

![]({{site.baseurl}}/common/images/phpstorm/entity-creator-web-api-generation-min.gif)

There is an example of the output for generated entity when accessing get list REST API endpoint from the Postman application and from the admin panel in browser:

![]({{site.baseurl}}/common/images/phpstorm/get-list-rest-api-call.png)

![]({{site.baseurl}}/common/images/phpstorm/get-list-in-browser.png)
