---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Working with the Architecture
menu_title: Working with the Architecture
menu_order: 2
github_link21: ext-best-practices/extension-coding/working-with-arch-bp.md

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

  If you feel that Magento can be improved with your core code changes, please consider [contributing via Git]({{site.gdeurl21}}contributor-guide/contributing.html).

### Learn the architecture
  To create the optimum module, you should get to know the Magento 2 architecture. Start off by familiarizing yourself with the [Admin Pattern Library]({{site.gdeurl21}}pattern-library/bk-pattern.html), the core [Magento Components]({{site.gdeurl21}}extension-dev-guide/bk-extension-dev-guide.html), and our [service contracts]({{site.gdeurl21}}extension-dev-guide/service-contracts/service-contracts.html) and [APIs]({{site.gdeurl21}}get-started/bk-get-started-api.html).

### Check your extension configurations
  Make sure your extension is configured correctly in each of your extension's configuration files. Invalid or unexpected values will cause your extension to behave incorrectly within Magento.

### Know and leverage the Magento 2 framework
  There have been some significant changes from Magento 1. Be sure to study the capabilities and standards of the Magento 2 Framework.

  For example:

  - Instead of creating custom validators from scratch, implement the [`\Magento\Framework\Validator\ValidatorInterface`]({{site.mage2100url}}lib/internal/Magento/Framework/Validator/ValidatorInterface.php){:target="_blank"}.
  - Instantiating a database connection can be expensive and unneccessary. Magento provides resource models for performing SQL commands. (See [Persistence Layer]({{site.gdeurl21}}architecture/archi_perspectives/persist_layer.html))
  - Consider using Magento framework conventions instead of low-level or PHP functionality.
  - Use the  [`Magento\Framework\Data\Collection`]({{site.mage2100url}}lib/internal/Magento/Framework/Data/Collection.php){:target="_blank"} class to retrieve a collection of filtered objects instead of directly querying the database.

### Use dependency injection
  Direct class instantiation is not recommended because the class can be rewritten. If the class is created directly, any rewrites will not be applied and it breaks Magento's class rewrite capability. We encourage you to become familiar with how we use [dependency injection]({{site.gdeurl21}}extension-dev-guide/depend-inj.html) to get an instance of a class.

### Follow Model-View-Control (MVC) pattern
  Make sure your extension adheres to the MVC Pattern, and that it does not violate any of its principles.

  Some important things to check in your extensions:

  - Make sure your Business Logic, Configuration, and SQL are implemented in the correct places.
  - Make sure that CSS, JavaScript, HTML, and XML code are all in the appropriate files (i.e. they should not be inline).
  - Use appropriate logic in a Block, Helper, Template, Controller, or Model.
  - Ensure correct module design.

### Use the PHP_CodeSniffer tool

[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank"} is a set of PHP scripts that checks your code for violations of a particular coding standard. It can be used in conjunction with the [ECG Magento Code Sniffer Coding Standard](https://github.com/magento-ecg/coding-standard){:target="_blank"} to check your code for some of the more common Magento and PHP problems. Using these two tools will ensure that your extension code meets many of [Magento's coding standards]({{site.gdeurl21}}coding-standards/bk-coding-standards.html). It also has the added benefits of keeping your code clean and maintainable.
