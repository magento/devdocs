---
group: extension-best-practices
subgroup: Security
title: Writing secure code
menu_title: Writing secure code
menu_order: 2100
---

## Overview

Using [PHP](https://glossary.magento.com/php) features that are known to be exploitable or non-secure can lead to remote code execution or weak cryptography.
As a developer, you should avoid using features that introduce vulnerabilities in your code.

## PHP functions to avoid

The following is a list of PHP functions that are known to be vulnerable and exploitable.
Avoid using these functions in your code.

*  [`eval`][0] - Using `eval` is considered bad practice because of its ability to [execute arbitrary PHP code][1].
*  [`serialize`][2]/[`unserialize`][3] - Attackers can create an exploit for these functions by passing a string with a serialized arbitrary object to the `unserialize` function to [run arbitrary code][4].
*  [`md5`][5] - The algorithm for this function is known to have [cryptographic weaknesses][6].
   You should never use this function for hashing passwords or any other sensitive data.
*  [`srand`][7] - Using a predetermined number to seed the random number generator results in a [predictable sequence of numbers][8].
*  [`mt_srand`][9] - This function is a pseudo-random number generator (PRNG) and is [not cryptographically secure][10].

## Standard PHP library classes to avoid

*  [`ArrayObject`](https://php.net/manual/en/class.arrayobject.php) - Using `ArrayObject` class is not recommended because it contains `unserialize` method, which attackers can use to create an exploit.

   If you need to use the `ArrayObject` class, override the `serialize`/`unserialize` methods so that they use secure logic.
   Convert objects into arrays to serialize them, and reconstruct the objects using arrays during unserialization.

   You can use [Serialize Library][12] in framework for a secure way of serializing/unserializing data.

## Related Topics

*  [Serialize Library][12]

[0]:https://php.net/manual/en/function.eval.php
[1]:https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet#Code_Injection
[2]:https://php.net/manual/en/function.serialize.php
[3]:https://php.net/manual/en/function.unserialize.php
[4]:https://www.owasp.org/index.php/PHP_Object_Injection
[5]:https://php.net/manual/en/function.md5.php
[6]:https://www.owasp.org/index.php/Guide_to_Cryptography#Hashes
[7]:https://php.net/manual/en/function.srand.php
[8]:https://softwareengineering.stackexchange.com/questions/76229/predicting-the-output-of-phps-rand
[9]:https://php.net/manual/en/function.mt-rand.php
[10]:https://phpsecurity.readthedocs.io/en/latest/Insufficient-Entropy-For-Random-Values.html
[11]:https://php.net/manual/en/class.arrayobject.php
[12]: {{ page.baseurl }}/extension-dev-guide/framework/serializer.html "Serialize Library"
