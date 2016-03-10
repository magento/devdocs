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

This section discusses Best Practices about architectural structure of a new extension (module.xml), with info like required config files, optimizing a module for certain environments (small store, etc.).

Understanding fundamental programming designs/concepts, like how MVC architecture works in our code, or working with Magento's generated code and factories, and following the best practices around these concepts will produce a cleaner and more efficient module.

<h3 id="know_arch">Know your architecural structure and PHP coding</h3>
To create the optimum module, know your Magento architecture. Familiarize yourself with our commonly used design patterns, the core Magento components (modules, themes, and langage packages), and our service contracts and [APIs]({{ site.gdeurl }}get-started/bk-get-started-api.html).

<h3 id="bp_arch_framework">Know and leverage the Magento Framework</h3>

Be sure to study the capabilities and standards. Some examples are:

* instead of creating custom validators, use Zend_Validate
* avoid manual DB instantiations by sing ______ (OLD WAY: Mage::getSingleton(‘core/resource’)->getConnection()
* ___________
* ___________

<h3 id="bp_arch_1">Use the right code base</h3>

One of the most important best practices is to NOT edit the core code, but instead copy what you need from the core code and move it to your site-specific directories.

<h3 id="bp_arch_2">Model-View-Control (MVC) Pattern Violation</h3>

Some examples of violating the MVC pattern include the following:

* Business logic, configuration, or SQL implemented in incorrect place (Block or Helper)

* Configuration Access Code in the wrong place

* Inappropriate Logic in a Block, Helper, Template, Controller, or Model

* Putting data access code outside of the Resource Model

* Incorrect Module Design

<h3 id="bp_arch_3">Using plug-ins properly</h3>

Provide tips for using plug-ins...

<h3 id="bp_arch_4">Reuse code as much as possible</h3>

Avoid using redundant or duplicate code. Instead of copying and pasting the same code throughout application, create a single class or method and reference it when needed.

As a general rule of thumb, be sure to reuse code as much as possible.


<h3 id="bp_arch_4">Use Of Low-Level Functionality</h3>

Be sure not to use low-level functionality that is explicitly prohibited by the framework or specification under which the software is supposed to operate. The use of low-level functionality can violate the specification in unexpected ways that effectively disable built-in protection mechanisms, introduce exploitable inconsistencies, or otherwise expose the functionality to attack.

<h3 id="bp_arch_4">Avoid direct object instantiation</h3>
Direct class instantiation is not recommended because the class can be rewritten, and if it's created directly, any rewrites will not be applied.

Direct class instantiation is highly discouraged because it breaks Magento class rewrite capability. Use [dependency injection]({{ site.gdeurl }}get-started/bk-get-started-api.html) instead.

<h3 id="bp_arch_4">Incorrect Class Hierarchy</h3>
Avoid creating custom classes that don't inherit from the parent class or that don't follow general inheritance rules.

<h3>Inconsistant use of Case or Naming conventions</h3>

Be consistent in your naming conventions for file & folder names, as well as Class, Method and other naming. This is a code standards violation and impacts maintainability.


<h3>Node values in custom module config files</h3>
A class & node of event observer should contain model alias instead of direct class name.

<h3>Use Magento native Collection method</h3>
Use Magento native collection's method addFieldToFilter(field_name, field_value) instead of adding conditions directly to a collection's select object.

<h3 id="bp_arch_4">Use wrappers, not superglobal variables</h3>

Make sure that your Magento application uses Magento wrapper objects, and does not directly use PHP superglobals: $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST, $_ENV.

<h3 id="bp_arch_4">MySQL Data Types</h3>

MySQL offers a range of numeric, string, and time data types. If you're storing a date, use a DATE or DATETIME field. Using an INTEGER or STRING can make SQL queries more complicated, if not impossible. It's often tempting to invent your own data formats; for example, storing serialized PHP objects in string. Database management may be easier, but MySQL will become a dumb data store and it may lead to problems later

<h3 id="bp_arch_4">Getting Data From Wrong Object</h3>

Be sure to retrieve data from the correct object. For example, get SKU data from the Product instead of the Order object.

<h3>Avoid raw SQL queries</h3>

Raw SQL queries can lead to potential security vulnerabilities and database portability issues. Use data adapter capabilities (Varien_Db_Adapter_Pdo_Mysql by default) to build and execute queries and move all data access code to a resource model. Use prepared statements to make sure that queries are safe to execute.

<h3>Use well-defined indexes</h3>

Foreign keys should have indexes. If you're using a field in a WHERE clause of an SQL query you should have an index on it. Such indexes should cover multiple columns based on the queries needed. As a general rule of thumb, indexes should be applied to any column named in the WHERE clause of a SELECT query. For example, assume we have a usertable with a numeric ID (the primary key) and an email address. During log on, MySQL must locate the correct ID by searching for an email. With an index, MySQL can use a fast search algorithm to locate the email almost instantly. Without an index, MySQL must check every record in sequence until the address is found. It's tempting to add indexes to every column, however, they are regenerated during every table INSERT or UPDATE. That can hit performance; only add indexes when necessary.


<h3>Avoid using global events</h3>

It is rare that is necessary to use a global event; use frontend or adminhtml to narrow the scope instead.


<h3>Use Magento data collections</h3>

Execution of a SQL query is one of the most resource-taxing operations. Running SQL queries in a loop often results in a performance bottleneck. To load the EAV model, several heavy queries are required to execute. As the number of executed queries is multiplied with the number of categories, the result is extremely inefficient and slow code. Instead of loading models in a loop, Magento data collections can help to load a set of models in a very efficient manner.

<h3>Properly encode or escape output</h3>
To prevent XSS vulnerability, avoid creating methods that output non-validated user-supplied data without proper HTML encoding.

<h3>Don't store sensitive data or configurations in clear text</h3>
Never store sensitive information in clear text within a resource that might be accessible to another control sphere, when the information should be encrypted or otherwise protected.
