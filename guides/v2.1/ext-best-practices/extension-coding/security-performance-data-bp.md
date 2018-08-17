---
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Security, Performance, and Data Handling
menu_title: Security, performance, and data handling
menu_order: 3
version: 2.1
functional_areas:
  - Standards
---

You should make sure that your {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} handles data with care in order to prevent sensitive information from being exposed. Incorrect handling of data requests or class usage can negatively impact your extension and create security vulnerabilities. Consider applying the following best practices to your extension to improve performance and security.

### Avoid using low-level functionality
  The Magento application is made up of a variety of components that work together to perform different business functions. We discourage the use of low-level functionality such as the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} `curl_*` functions and encourage the use of high-level components such as [`\Magento\Framework\HTTP\Adapter\Curl`]({{ site.mage2000url }}lib/internal/Magento/Framework/HTTP/Adapter/Curl.php). The use of low-level functionality can make Magento behave in unexpected ways that effectively disable built-in protection mechanisms, introduce exploitable inconsistencies, or otherwise expose the application to attack.

  For a list of discouraged low-level functions, we suggest you look at the [list of discouraged functions](https://github.com/magento/marketplace-eqp/blob/master/MEQP1/Sniffs/Security/DiscouragedFunctionSniff.php){:target="_blank"} for [Magento Extension Quality Program Coding Standard](https://github.com/magento/marketplace-eqp){:target="_blank"}.

### Use wrappers instead of superglobal variables
  Make sure that your Magento application does not directly use any PHP superglobals such as:
  ```
  $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST, $_ENV
  ```
  . Instead use the [`Magento\Framework\HTTP\PhpEnvironment\Request`]({{ site.mage2000url }}lib/internal/Magento/Framework/HTTP/PhpEnvironment/Request.php){:target="_blank"} wrapper class to safely access these values.

### Use the correct MySQL data types
  MySQL offers a range of numeric, string, and time data types. If you are storing a date, use a DATE or DATETIME field. Using an INTEGER or STRING can make SQL queries more complicated, if not impossible. It is often tempting to invent your own data formats; for example, storing serialized PHP objects in string. Database management may be easier, but MySQL will become a dumb data store and it may lead to problems later.

### Get the correct data from the correct object
  Be sure to retrieve data from the correct object. For example, get {% glossarytooltip fd4bed67-7130-4415-8a6f-ad8d8ef8f25e %}SKU{% endglossarytooltip %} data from the Product instead of the Order object.

### Avoid raw SQL queries
  Raw SQL queries can lead to potential security vulnerabilities and database portability issues. Use data adapter capabilities ([`Magento\Framework\DB\Adapter\Pdo\Mysql`]({{ site.mage2000url }}lib/internal/Magento/Framework/DB/Adapter/Pdo/Mysql.php){:target="_blank"} by default) to build and execute queries and move all data access code to a resource model. Use prepared statements to make sure that queries are safe to execute.

### Use well-defined indexes
  Foreign keys should have indexes. If you're using a field in a WHERE clause of an SQL query you should have an index on it. Such indexes should cover multiple columns based on the queries needed. As a general rule of thumb, indexes should be applied to any column named in the WHERE clause of a SELECT query.

  For example, assume we have a user table with a numeric ID (the primary key) and an email address. During log on, MySQL must locate the correct ID by searching for an email. With an index, MySQL can use a fast search algorithm to locate the email almost instantly. Without an index, MySQL must check every record in sequence until the address is found.

  It's tempting to add indexes to every column, however, they are regenerated during every table INSERT or UPDATE. That can hit  performance; only add indexes when necessary.

### Avoid using global events
  Only on rare occasions would it be necessary to use a global {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %}. You should use {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} or {% glossarytooltip 749044c4-a002-4006-a3b8-eace2df90303 %}adminhtml{% endglossarytooltip %} to narrow the scope instead.

### Use Magento data collections
  Execution of a SQL query is one of the most resource-taxing operations. Running SQL queries in a loop often results in a performance bottleneck. To load the EAV model, several heavy queries are required to execute. As the number of executed queries is multiplied with the number of categories, the result is extremely inefficient and slow code. Instead of loading models in a loop, Magento data collections can help to load a set of models in a very efficient manner.

### Validate input and properly encode or escape output
  Remember to always validate data from non-trusted data sources. Sanitizing data coming into your extension and produced by it will improve overall security.

  For example, to prevent XSS vulnerability, avoid creating methods that output non-validated user-supplied data without proper {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} encoding.

### Always encrypt sensitive data or configurations
  Never store sensitive information in clear text within a resource that might be accessible to another control sphere. This type of information should be encrypted or otherwise protected.
