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

### Avoid modification of the Magento Core
  The core code is the default Magento code that comes with the application. You should never edit the core code because code changes occur between version upgrades and any changes you make will get overwritten. Try achieving your desired behavior with plugins, overriding interface preferences, and event observers.

  If you feel that Magento can be improved with your core code changes, please consider [contributing via Git]({{site.gdeurl}}contributor-guide/contributing.html).

### Learn the architecture
  To create the optimum module, you should get to know the Magento 2 architecture. Start off by familiarizing yourself with the [Admin Pattern Library]({{site.gdeurl}}pattern-library/bk-pattern.html), the core [Magento Components]({{site.gdeurl}}extension-dev-guide/bk-extension-dev-guide.html), and our [service contracts]({{site.gdeurl}}extension-dev-guide/service-contracts/service-contracts.html) and [APIs]({{ site.gdeurl }}get-started/bk-get-started-api.html).

### Check your extension configurations
  Make sure your extension is configured correctly in each of your extension's configuration files. Invalid or unexpected values will cause your extension to behave incorrectly within Magento.

### Know and Leverage the Magento 2 Framework
  There have been some significant changes from Magento 1. Be sure to study the capabilities and standards of the Magento 2 Framework.

  For example:

  - Instead of creating custom validators from scratch, implement the `\Magento\Framework\Validator\ValidatorInterface`.
  - Instantiating a database connection can be expensive and unneccessary. Magento provides resource models for performing SQL commands. (See [Persistence Layer]({{site.gdeurl}}architecture/archi_perspectives/persist_layer.html))
  - Consider using Magento framework conventions instead of low-level or PHP functionality.
  - Instead of adding conditions directly to a collection's select object, use Magento native collection's method addFieldToFilter(field_name, field_value).

### Use Dependency Injection
  Direct class instantiation is not recommended because the class can be rewritten. If the class is created directly, any rewrites will not be applied and it breaks Magento's class rewrite capability. We encourage you to use the `Mage::getModel` method or [dependency injection]({{ site.gdeurl }}extension-dev-guide/depend-inj.html) to get an instance of a class.

### Follow Model-View-Control (MVC) Pattern
  Make sure your extension adheres to the MVC Pattern, and that it does not violate any of its principles.

  Some important things to check in your extensions:

  - Make sure your Business Logic, Configuration, and SQL are implemented in the correct places.
  - Make sure that CSS, JavaScript, HTML, and XML code are all in the appropriate files (i.e. they should not be inline).
  - Use appropriate logic in a Block, Helper, Template, Controller, or Model.
  - Ensure correct module design.
