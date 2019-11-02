---
group: extension-best-practices
subgroup: 02_Extension-Coding
title: Security, Performance, and Data Handling
menu_title: Security, performance, and data handling
menu_order: 3
functional_areas:
  - Standards
---

You should make sure that your [extension](https://glossary.magento.com/extension) handles data with care in order to prevent sensitive information from being exposed. Incorrect handling of data requests or class usage can negatively impact your extension and create security vulnerabilities. Consider applying the following best practices to your extension to improve performance and security.

## Avoid using low-level functionality

  The Magento application is made up of a variety of components that work together to perform different business functions. We discourage the use of low-level functionality such as the [PHP](https://glossary.magento.com/php) `curl_*` functions and encourage the use of high-level components such as [`\Magento\Framework\HTTP\Adapter\Curl`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/HTTP/Adapter/Curl.php). The use of low-level functionality can make Magento behave in unexpected ways that effectively disable built-in protection mechanisms, introduce exploitable inconsistencies, or otherwise expose the application to attack.

For a list of discouraged low-level functions, review the [`Magento2/Sniffs/Functions/DiscouragedFunctionSniff.php`](https://github.com/magento/magento-coding-standard/blob/develop/Magento2/Sniffs/Functions/DiscouragedFunctionSniff.php){:target="_blank"} file and the [Magento Coding Standard](https://github.com/magento/magento-coding-standard){:target="_blank"}.

## Use wrappers instead of superglobal variables

Make sure that your Magento application does not directly use any PHP superglobals such as:

  ```php
  $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST, $_ENV
  ```

Instead use the [`Magento\Framework\HTTP\PhpEnvironment\Request`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/HTTP/PhpEnvironment/Request.php){:target="_blank"} wrapper class to safely access these values.

## Use the correct MySQL data types

MySQL offers a range of numeric, string, and time data types. If you are storing a date, use a DATE or DATETIME field. Using an INTEGER or STRING can make SQL queries more complicated, if not impossible. It is often tempting to invent your own data formats; for example, storing serialized PHP objects in string. Database management may be easier, but MySQL will become a dumb data store and it may lead to problems later.

## Avoid raw SQL queries

Raw SQL queries can lead to potential security vulnerabilities and database portability issues. Use data adapter capabilities ([`Magento\Framework\DB\Adapter\Pdo\Mysql`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/Adapter/Pdo/Mysql.php){:target="_blank"} by default) to build and execute queries and move all data access code to a resource model. Use prepared statements to make sure that queries are safe to execute.

## Use well-defined indexes

Foreign keys should have indexes. If you are using a field in a WHERE clause of an SQL query you should have an index on it. Such indexes should cover multiple columns based on the queries needed. As a general rule of thumb, indexes should be applied to any column named in the WHERE clause of a SELECT query.

For example, assume we have a user table with a numeric ID (the primary key) and an email address. During log on, MySQL must locate the correct ID by searching for an email. With an index, MySQL can use a fast search algorithm to locate the email almost instantly. Without an index, MySQL must check every record in sequence until the address is found.

It is tempting to add indexes to every column, however, they are regenerated during every table INSERT or UPDATE. That can hit  performance; only add indexes when necessary.

## Avoid using global events

Only on rare occasions would it be necessary to use a global [event](https://glossary.magento.com/event). You should use [frontend](https://glossary.magento.com/frontend) or [adminhtml](https://glossary.magento.com/adminhtml) to narrow the scope instead.

## Use Magento data collections

Execution of a SQL query is one of the most resource-taxing operations. Running SQL queries in a loop often results in a performance bottleneck. To load the EAV model, several heavy queries are required to execute. As the number of executed queries is multiplied with the number of categories, the result is extremely inefficient and slow code. Instead of loading models in a loop, Magento data collections can help to load a set of models in a very efficient manner.

## Validate input and properly encode or escape output

Remember to always validate data from non-trusted data sources. Sanitizing data coming into your extension and produced by it will improve overall security.

For example, to prevent XSS vulnerability, avoid creating methods that output non-validated user-supplied data without proper [HTML](https://glossary.magento.com/html) encoding.

## Always encrypt sensitive data or configurations

Never store sensitive information in clear text within a resource that might be accessible to another control sphere. This type of information should be encrypted or otherwise protected.

## Avoid unnecessary logic execution

Make sure that you never run code that will not be used in the next step.

Check the below example where we always get the `customerId` and `storeId`, but we are not going to use them.

### Example

```php
public function getCustomerCart()
{
    $customerId = (int) $this->getSession()->getCustomerId();
    $storeId = (int) $this->getSession()->getStoreId();

    if ($this->_cart !== null) {
        return $this->_cart;
    }

    ...
    $this->_cart = $this->quoteRepository->getForCustomer($customerId, [$storeId]);
    ...

    return $this->_cart;
}
```

## Use the proper area

Make sure that your observer or plugin is declared in the proper area:

-  [`adminhtml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Backend/etc/di.xml){:target="_blank"}
-  [`crontab`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cron/etc/di.xml){:target="_blank"}
-  [`frontend`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Store/etc/di.xml){:target="_blank"}
-  [`graphql`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/GraphQl/etc/di.xml){:target="_blank"}
-  [`webapi_rest`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Webapi/etc/di.xml){:target="_blank"}
-  [`webapi_soap`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Webapi/etc/di.xml){:target="_blank"}

The plugins and observers should be declared in the `<module-dir>/etc/<area>/` directory.

{:.bs-callout-info}
Use the `global` area only if the plugin/observer should be executed in multiple areas.

It is `NOT RECOMMENDED` to register everything in `global` area, as the bootstrapping process will become much heavier. For example, the application must run and process additional checks for your plugin/observer.
