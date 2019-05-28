---
group: extension-best-practices
subgroup: 02_Extension-Coding
title: Working with the Architecture
menu_title: Working with the Architecture
menu_order: 2
functional_areas:
  - Standards
---

In addition to understanding fundamental programming designs/concepts, you are encouraged to learn how the MVC architecture works in our code and how to work with Magento's generated code and factories.

### Avoid modification of the Magento Core
  The core code is the default Magento code that comes with the application. You should never edit the core code because code changes occur between version upgrades and any changes you make will get overwritten. Try achieving your desired behavior with plugins, overriding interface preferences, and {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} observers.

  If you feel that Magento can be improved with your core code changes, please consider [contributing via Git]({{ page.baseurl }}/contributor-guide/contributing.html).

### Learn the architecture
  To create the optimum module, you should get to know the Magento 2 architecture. Start off by familiarizing yourself with the [Admin Pattern Library]({{ page.baseurl }}/pattern-library/bk-pattern.html), the core [Magento Components]({{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html), and our [service contracts]({{ page.baseurl }}/extension-dev-guide/service-contracts/service-contracts.html) and [APIs]({{ page.baseurl }}/get-started/bk-get-started-api.html).

### Check your extension configurations
  Make sure your {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} is configured correctly in each of your extension's configuration files. Invalid or unexpected values will cause your extension to behave incorrectly within Magento.

### Know and leverage the Magento 2 framework
  There have been some significant changes from Magento 1. Be sure to study the capabilities and standards of the Magento 2 Framework.

  For example:

  - Instead of creating custom validators from scratch, implement the [`\Magento\Framework\Validator\ValidatorInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Validator/ValidatorInterface.php){:target="_blank"}.
  - Instantiating a database connection can be expensive and unnecessary. Magento provides resource models for performing SQL commands. (See [Persistence Layer]({{ page.baseurl }}/architecture/archi_perspectives/persist_layer.html))
  - Consider using Magento framework conventions instead of low-level or {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} functionality.
  - Use the  [`Magento\Framework\Data\Collection`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Data/Collection.php){:target="_blank"} class to retrieve a collection of filtered objects instead of directly querying the database.

### Use dependency injection
  Direct class instantiation is not recommended because the class can be rewritten. If the class is created directly, any rewrites will not be applied and it breaks Magento's class rewrite capability. We encourage you to become familiar with how we use [dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) to get an instance of a class.

### Follow Model-View-Control (MVC) pattern
  Make sure your extension adheres to the MVC Pattern, and that it does not violate any of its principles.

  Some important things to check in your extensions:

  - Make sure your Business Logic, Configuration, and SQL are implemented in the correct places.
  - Make sure that CSS, JavaScript, HTML, and {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} code are all in the appropriate files (i.e. they should not be inline).
  - Use appropriate logic in a Block, Helper, Template, Controller, or Model.
  - Ensure correct {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} design.

### Use the PHP_CodeSniffer tool

[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank"} is a set of PHP scripts that checks your code for violations of a particular coding standard. It can be used in conjunction with the [Magento Extension Quality Program Coding Standard](https://github.com/magento/marketplace-eqp){:target="_blank"} to check your code for some of the more common Magento and PHP problems. Using these two tools will ensure that your extension code meets many of [Magento's coding standards]({{ page.baseurl }}/coding-standards/bk-coding-standards.html). It also has the added benefits of keeping your code clean and maintainable.
