---
group: extension-best-practices
title: Code generation
functional_areas:
  - Standards
redirect_from:
- guides/v2.3/ext-best-practices/phpstorm/code-generation.html
---

The PHPStorm plugin enables features and functionality to assist developers in creating custom extensions.

### XML file header

The new include code template was added to the generated with the plugin XML files.
To configure it go to the `Preferences -> Editor -> File and Code Templates -> Includes -> XML File Header`:

![]({{site.baseurl}}/common/images/phpstorm/xml-file-header.png)

#### Usage

Any generated XML file will have this header, as for example:

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
