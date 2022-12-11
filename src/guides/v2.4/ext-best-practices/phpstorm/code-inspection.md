---
group: extension-best-practices
title: Code inspection
functional_areas:
  - Standards
redirect_to: https://developer.adobe.com/commerce/php/best-practices/phpstorm/code-inspection/
layout: migrated
---

### Web API XML service tag attributes inspections

![]({{site.baseurl}}/common/images/phpstorm/service-tag-inspections-min.gif)

### DI XML preference tag attributes inspections

![]({{site.baseurl}}/common/images/phpstorm/preference-tag-inspections-min.gif)

### DI XML type tag attributes inspections that related to the PHP/Magento types

The `Type` tag inspections (in the di.xml files) detect empty values or invalid values where a Type values (class, interface, virtual type) are expected.

![]({{site.baseurl}}/common/images/phpstorm/type-tag-inspections-1-min.gif)

It also supports recursive inspection for `xsi:type="array"` arguments.

![]({{site.baseurl}}/common/images/phpstorm/type-tag-inspections-2-min.gif)

### DI XML plugin type attribute inspections

![]({{site.baseurl}}/common/images/phpstorm/plugin-tag-inspections-min.gif)
