---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Working with the Architecture
menu_title: Working with the Architecture
menu_order: 2
github_link: ext-best-practices/extension-coding/working-with-arch-bp.md

---

##{{page.menu_title}}
{:.no_toc}

In addition to understanding fundamental programming designs/concepts, you are encouraged to learn how the MVC architecture works in our code and how to work with Magento's generated code and factories.


### Content
{:.no_toc}

* Table of Content
{:toc}

---

### Avoid Modification of the Magento Core
  One of the most important best practices is to **NOT edit the core code**. Instead, copy what you need from the core code and move it to your site-specific directories.

### Learn the Architecture
  To create the optimum module, know our Magento architecture. You should familiarize yourself with our commonly used [Design Patterns]({{site.gdeurl}}pattern-library/bk-pattern.html), the core [Magento Components]({{site.gdeurl}}extension-dev-guide/bk-extension-dev-guide.html), and our service contracts and [APIs]({{ site.gdeurl }}get-started/bk-get-started-api.html).

### Check the Extension Configuration
  Make sure your extension is configured correctly. Invalid or unexpected values will cause your extension to behave incorrectly within Magento.

  For example, in a custom module's configuration file, a class and node of the event observer should contain the model alias instead of the direct class name.

### Know and Leverage the Magento Framework
  Be sure to study the capabilities and standards of the Magento Framework.

  For example:

  - Instead of creating custom validators, use Zend_Validate.
  - Instantiating a database connection can be expensive, you should use the following:
    ```
    Mage::getSingleton(‘core/resource’)->getConnection();
    ```
  - Consider using Magento framework conventions instead of low-level or PHP functionality.
  - Instead of adding conditions directly to a collection's select object, use Magento native collection's method addFieldToFilter(field_name, field_value).

### Use Dependency Injection
  Direct class instantiation is not recommended because the class can be rewritten. If the class is created directly, any rewrites will not be applied and it breaks Magento's class rewrite capability. We encourage you to use the `Mage::getModel` method or [dependency injection]({{ site.gdeurl }}get-started/bk-get-started-api.html) to get an instance of a class.

### Follow Model-View-Control (MVC) Pattern
  Make sure your extension adheres to the MVC Pattern, and that it does not violate any of its principles.

  Some important things to check in your extensions:

  - Make sure your Business Logic, Configuration, and SQL are implemented in the correct places.
  - Make sure that CSS, JavaScript, HTML, and XML code are all in the appropriate files (i.e. they should not be inline).
  - Use appropriate logic in a Block, Helper, Template, Controller, or Model.
  - Ensure correct module design.
