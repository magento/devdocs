---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Programming Best Practices
menu_title: Programming best practices
menu_order: 1
version: 2.0
github_link: ext-best-practices/extension-coding/common-programming-bp.md

---

You should do your best to adhere to common programming best practices to reduce the amount of bugs and improve the quality and maintainability of your extensions. The following list of best practices addresses commonly reported issues found in third party extensions.

### Follow a set of coding standards
Coding standards are a set of guidelines that describe how code should be written. These standards define coding practices that determine the style of the code. Whether you are a solo developer or part of a team, following a set of coding standards will help make your code consistent and maintainable.

[Magento's Coding Standards]({{page.baseurl}}coding-standards/bk-coding-standards.html) are based on the following:

* [Zend Coding standards](http://framework.zend.com/manual/1.12/en/coding-standard.html){:target="_blank"}
* [PSR2](http://www.php-fig.org/psr/psr-2/){:target="_blank"}
* [PSR4](http://www.php-fig.org/psr/psr-4/){:target="_blank"}

To help you stick to coding standards, we recommend using the [PHP_CodeSniffer tool](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank"}.

### Write and utilize re-usable code
Avoid using redundant or duplicate code, which can be hard to maintain. Instead of copying and pasting the same code throughout application, create a single class or method and reference it when needed. As a general rule of thumb, be sure to reuse code as much as possible to save yourself the from the costs of duplication.

The code you write should be small, focused, and provides a generic solution. This will let you re-use these pieces again in future development.

### Design your code to be replaceable
Designing and writing your code to be replaceable is just as important as making it re-usable. Having a replaceable design means your code is modular and loosely coupled, therefore allowing easy updates and improvements in the future.

It is common practice to replace parts of your codebase with newer and better pieces as bugs are found or newer strategies become available. Writing replaceable code in your codebase makes this practice easier and more efficient.

### Avoid creating helper classes
Helper or utility classes are classes filled with static methods that do not quite fit anywhere else. These classes are considered an antipattern and go against the principles of object oriented programming. If you have `ClassA` and a `ClassAHelper` with static functions that work on `ClassA`, you should consider refactoring those functions into `ClassA`.

A helper class that functions as a catch-all for random methods breaks the single responsibility principle because it is an attempt to solve multiple problems in a single class. You should refactor your code and move those functions into the appropriate classes they work on.

### Be consistent with case and naming conventions
You should be consistent in your naming conventions for files, folder names, Classes, and Methods. Following standard conventions will make your code look professional and easy to read.

Not following this practice is a code standards violation and impacts your extension's readability and  maintainability.

### Composition over inheritance
[Class inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)){:target="_blank"} is the object-oriented programming concept that allows code reuse and extending of the behavior of a base class. This was favored for Magento 1 development.

[Object composition](https://en.wikipedia.org/wiki/Object_composition){:target="_blank"} is the programming concept of combining class objects and data types to create a more complex class. The classes and data types are used together to produce a desired functionality.

For Magento 2 extension development, we encourage the use of object composition over class inheritance. Using composition over inheritance makes your extension easier to maintain when class changes occur and update when new features need to be implemented.
