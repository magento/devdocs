---
layout: default
group: ext-best-practices
subgroup: 01_Extension-Coding
title: Extension Coding
menu_title: Extension Coding
menu_order: 1
menu_node: parent
github_link: ext-best-practices/extension-coding/coding-best-practices.md
---
##{{page.menu_title}}

The coding best practices presented on this page should be known and understood by you the developer when creating or maintaining your extensions. This ensures that the extension you develop behaves and functions correctly within the Magento application architecture. This guide is not only meant to educate you about coding best practices but to also highlight some pitfalls we have seen other extension developers fall into so that you may avoid them.

____

### Common Programming Best Practices
You should do your best to adhere to common programming best practices to reduce the amount of bugs and improve the quality and maintainability of your extensions. The following list of best practices addresses commonly reported issues found in third party extensions.

* #### Write and Utilize Re-usable Code
  Avoid using redundant or duplicate code. Instead of copying and pasting the same code throughout application, create a single class or method and reference it when needed. As a general rule of thumb, be sure to reuse code as much as possible.

* #### Be Consistent with Case and Naming Conventions
  You should be consistent in your naming conventions for files, folder names, Classes, and Methods. Not following this practice is a code standards violation and impacts your extension's maintainability.

* #### Use Correct Class Hierarchy
  When creating a custom class, consider how it fits in the context of your project and the Magento application. Avoid creating custom classes that do not inherit from the parent class nor follow general inheritance rules.

____

### Working With Magento's Architecture
In addition to understanding fundamental programming designs/concepts, you are encouraged to learn how the MVC architecture works in our code and how to work with Magento's generated code and factories.

* #### Avoid Modification of the Magento Core
  One of the most important best practices is to **NOT edit the core code**. Instead, copy what you need from the core code and move it to your site-specific directories.

* #### Learn the Architecture
  To create the optimum module, know our Magento architecture. You should familiarize yourself with our commonly used [Design Patterns]({{site.gdeurl}}pattern-library/bk-pattern.html), the core [Magento Components]({{site.gdeurl}}extension-dev-guide/bk-extension-dev-guide.html), and our service contracts and [APIs]({{ site.gdeurl }}get-started/bk-get-started-api.html).

* #### Know and Leverage the Magento Framework
  Be sure to study the capabilities and standards of the Magento Framework.

  For example:

  - Instead of creating custom validators, use Zend_Validate.
  - Instantiating a database connection can be expensive, you should use the following:
    ```
    Mage::getSingleton(‘core/resource’)->getConnection();
    ```
  - Consider using Magento framework conventions instead of low-level or PHP functionality.
  - Instead of adding conditions directly to a collection's select object, use Magento native collection's method addFieldToFilter(field_name, field_value).

* #### Use Dependency Injection
  Direct class instantiation is not recommended because the class can be rewritten. If the class is created directly, any rewrites will not be applied and it breaks Magento's class rewrite capability. We encourage you to use the `Mage::getModel` method or [dependency injection]({{ site.gdeurl }}get-started/bk-get-started-api.html) to get an instance of a class.

* #### Follow Model-View-Control (MVC) Pattern
  Make sure your extension adheres to the MVC Pattern, and that it does not violate any of its principles.

  Some important things to check in your extensions:

  - Make sure your Business Logic, Configuration, and SQL are implemented in the correct places.
  - Make sure that CSS, JavaScript, HTML, and XML code are all in the appropriate files (i.e. they should not be inline).
  - Use appropriate logic in a Block, Helper, Template, Controller, or Model.
  - Ensure correct module design.

____

### Security, Performance, and Data Handling Best Practices
You should make sure that your extension handles data with care in order to prevent sensitive information from being exposed. Incorrect handling of data requests or class usage can negatively impact your extension and create security vulnerabilities. Consider applying the following best practices to your extension to improve performance and security.

* #### Avoid Using Low-Level Functionality
  Be sure not to use low-level functionality that is explicitly prohibited by the framework or specification under which the software is supposed to operate. The use of low-level functionality can violate the specification in unexpected ways that effectively disable built-in protection mechanisms, introduce exploitable inconsistencies, or otherwise expose the functionality to attack.

* #### Use Wrappers Instead of Superglobal Variables
  Make sure that your Magento application uses Magento wrapper objects, and does not directly use PHP superglobals:
  ```
  $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST, $_ENV
  ```
  .

* #### Use the Correct MySQL Data Types
  MySQL offers a range of numeric, string, and time data types. If you are storing a date, use a DATE or DATETIME field. Using an INTEGER or STRING can make SQL queries more complicated, if not impossible. It is often tempting to invent your own data formats; for example, storing serialized PHP objects in string. Database management may be easier, but MySQL will become a dumb data store and it may lead to problems later.

* #### Get the Correct Data from the Correct Object
  Be sure to retrieve data from the correct object. For example, get SKU data from the Product instead of the Order object.

* #### Avoid Raw SQL Queries
  Raw SQL queries can lead to potential security vulnerabilities and database portability issues. Use data adapter capabilities (Varien_Db_Adapter_Pdo_Mysql by default) to build and execute queries and move all data access code to a resource model. Use prepared statements to make sure that queries are safe to execute.

* #### Use Well-Defined Indexes
  Foreign keys should have indexes. If you're using a field in a WHERE clause of an SQL query you should have an index on it. Such indexes should cover multiple columns based on the queries needed. As a general rule of thumb, indexes should be applied to any column named in the WHERE clause of a SELECT query.

  For example, assume we have a user table with a numeric ID (the primary key) and an email address. During log on, MySQL must locate the correct ID by searching for an email. With an index, MySQL can use a fast search algorithm to locate the email almost instantly. Without an index, MySQL must check every record in sequence until the address is found.

  It's tempting to add indexes to every column, however, they are regenerated during every table INSERT or UPDATE. That can hit  performance; only add indexes when necessary.

* #### Avoid Using Global Events
  Only on rare occasions would it be necessary to use a global event. You should use frontend or adminhtml to narrow the scope instead.

* #### Use Magento Data Collections
  Execution of a SQL query is one of the most resource-taxing operations. Running SQL queries in a loop often results in a performance bottleneck. To load the EAV model, several heavy queries are required to execute. As the number of executed queries is multiplied with the number of categories, the result is extremely inefficient and slow code. Instead of loading models in a loop, Magento data collections can help to load a set of models in a very efficient manner.

* #### Validate Input and Properly Encode or Escape Output
  Remember to always validate data from non-trusted data sources. Sanitizing data coming into your extension and produced by it will improve overall security.

  For example, to prevent XSS vulnerability, avoid creating methods that output non-validated user-supplied data without proper HTML encoding.

* #### Always Encrypt Sensitive Data or Configurations
  Never store sensitive information in clear text within a resource that might be accessible to another control sphere. This type of information should be encrypted or otherwise protected.

____

<h3 id="bp_arch_3">Using plug-ins properly</h3>

Provide tips for using plug-ins...

<h3>Node values in custom module config files</h3>
A class & node of event observer should contain model alias instead of direct class name.
