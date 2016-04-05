---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Programming Best Practices
menu_title: Programming best practices
menu_order: 1
github_link: ext-best-practices/extension-coding/common-programming-bp.md

---

##{{page.menu_title}}
{:.no_toc}

You should do your best to adhere to common programming best practices to reduce the amount of bugs and improve the quality and maintainability of your extensions. The following list of best practices addresses commonly reported issues found in third party extensions.


### Content
{:.no_toc}

* Table of Content
{:toc}

---

### Write and Utilize Re-usable Code
  Avoid using redundant or duplicate code. Instead of copying and pasting the same code throughout application, create a single class or method and reference it when needed. As a general rule of thumb, be sure to reuse code as much as possible.

### Be Consistent with Case and Naming Conventions
  You should be consistent in your naming conventions for files, folder names, Classes, and Methods. Not following this practice is a code standards violation and impacts your extension's maintainability.

### Use Correct Class Hierarchy
  When creating a custom class, consider how it fits in the context of your project and the Magento application. Avoid creating custom classes that do not inherit from the parent class nor follow general inheritance rules.
