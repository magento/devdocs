---
group: extension-best-practices
title: Programming Best Practices
functional_areas:
  - Standards
---

You should follow common programming best practices to reduce bugs and improve the quality and maintainability of your extensions.

The following list of best practices addresses commonly reported issues in third-party extensions.

### Follow a set of coding standards

Coding standards are a set of guidelines that describe how code should be written. These standards define coding practices that determine the style of the code. Whether you are a solo developer or part of a team, following a set of coding standards will help make your code consistent and maintainable.

[Magento's Coding Standards]({{ page.baseurl }}/coding-standards/bk-coding-standards.html) are based on the following:

*  [Zend Coding standards](http://framework.zend.com/manual/1.12/en/coding-standard.html){:target="_blank"}
*  [PSR2](http://www.php-fig.org/psr/psr-2/){:target="_blank"}
*  [PSR4](http://www.php-fig.org/psr/psr-4/){:target="_blank"}

To help you stick to coding standards, we recommend using the [PHP_CodeSniffer tool](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank"}.

### Write and utilize reusable code

Avoid using redundant or duplicate code, which can be hard to maintain. Instead of copying and pasting the same code throughout your extension, create a single class or method and reference it when needed.

As a general rule, reuse code as much as possible to prevent code duplication.

The code you write should be small, focused, and provide a generic solution. This will help you reuse code in future development.

### Design your code to be replaceable

Designing and writing your code to be replaceable is just as important as making it reusable. Having a replaceable design means your code is modular and loosely coupled, which makes updates and improvements easier.

It is common practice to replace parts of your codebase with newer and better pieces as bugs are found or newer strategies become available. Writing replaceable code in your codebase makes this practice easier and more efficient.

### Avoid creating helper classes

Helper or utility classes are classes filled with static methods that do not quite fit anywhere else. These classes are considered an anti-pattern and violate the principles of object-oriented programming.

If you have `ClassA` and a `ClassAHelper` with static functions that work on `ClassA`, you should consider refactoring those functions into `ClassA`.

A helper class that functions as a catch-all for random methods violates the single responsibility principle because it is an attempt to solve multiple problems in a single class. You should refactor your code and move those functions into the appropriate classes.

### Be consistent with case and naming conventions

You should be consistent in your naming conventions for files, folder names, classes, and methods. Following standard conventions makes your code easier to read and look professional.

Not following this practice is a code standards violation and impacts your extension's readability and  maintainability.

### Composition over inheritance
[Class inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)){:target="_blank"} is the object-oriented programming concept that deals with code reuse and extending the behavior of a base class, which was preferred for Magento 1 development.

[Object composition](https://en.wikipedia.org/wiki/Object_composition){:target="_blank"} is the programming concept of combining class objects and data types to create a more complex class. The classes and data types are used together to produce a desired functionality.

For Magento 2 [extension](https://glossary.magento.com/extension) development, we encourage the use of object composition over class inheritance. Using composition over inheritance makes your extension easier to maintain when class changes occur and update when new features need to be implemented.

### Using around plugins

Avoid using [around method plugins]({{ page.baseurl }}/extension-dev-guide/plugins.html) when they are not required because they increase stack traces and affect performance. The only use case for around method plugins is when you need to terminate the execution of all further plugins and original methods.

{:.bs-callout-info}
Access to method parameters was the primary justification for using **around** method plugins instead of **after** method plugins.
<br/><br/>
Since 2.2, [after method plugins]({{ page.baseurl }}/extension-dev-guide/plugins.html#after-methods) give you access to method parameters. Use **after** method plugins if you need to replace or modify function results using arguments.

### Test your code

Write testable code and follow the [Magento Testing Guide]({{ page.baseurl }}/test/testing.html) to create tests for your code.

Tests help describe what your code does under different conditions and define its functionality. Make sure your tests cover a variety of conditions to prevent the introduction of bugs when you add new code.
