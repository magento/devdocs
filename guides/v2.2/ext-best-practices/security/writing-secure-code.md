---
layout: default
group: ext-best-practices
subgroup: Security
title: Writing secure code
menu_title: Writing secure code
menu_order: 2100
version: 2.2
github_link: ext-best-practices/security/writing-secure-code.md
---

## Overview

Using PHP features that are known to be exploitable or non-secure can lead to remote code execution or weak cryptography.
As a developer, you should avoid using features that introduce vulnerabilities in your code.

## PHP functions to avoid

The following is a list of PHP functions that are known to be vulnerable and exploitable.
Avoid using these functions in your code.

* [`eval`](http://php.net/manual/en/function.eval.php){:target="_blank"} - Using `eval` is considered bad practice because of its ability to [execute arbitrary PHP code](https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet#Code_Injection){:target="_blank"}.
* [`serialize`](http://php.net/manual/en/function.serialize.php){:target="_blank"}/[`unserialize`](http://php.net/manual/en/function.unserialize.php){:target="_blank"} - Attackers can create an exploit for these functions by passing a string with a serialized arbitrary object to the `unserialize` function to [run arbitrary code](https://www.owasp.org/index.php/PHP_Object_Injection){:target="_blank"}.
* [`md5`](http://php.net/manual/en/function.md5.php){:target="_blank"} - The algorithm for this function is known to have [cryptographic weaknesses](https://www.owasp.org/index.php/Guide_to_Cryptography#Hashes){:target="_blank"}.
  You should never use this function for hashing passwords or any other sensitive data.
* [`srand`](http://php.net/manual/en/function.srand.php){:target="_blank"} - Using a predetermined number to seed the random number generator results in a [predictable sequence of numbers](http://programmers.stackexchange.com/questions/76229/predicting-the-output-of-phps-rand){:target="_blank"}.
* [`mt_srand`](http://php.net/manual/en/function.mt-rand.php){:target="_blank"} - This function is a pseudo-random number generator (PRNG) and is [not cryptographically secure](http://phpsecurity.readthedocs.io/en/latest/Insufficient-Entropy-For-Random-Values.html){:target="_blank"}.

## Standard PHP library classes to avoid

* [`ArrayObject`](http://php.net/manual/en/class.arrayobject.php){:target="_blank"} - Using `ArrayObject` class is not recommended because it contains `unserialize` method, which attackers can use to create an exploit. 
  If you need to use the `ArrayObject` class, override the `serialize`/`unserialize` methods so that they use secure logic. 
  If need to serialize objects, they can be converted to arrays, when unserializing you can reconstruct objects from arrays. 
  You can use [Serialize Library][0] in framework for secure way of serializing/unserializing data.

## Related Topics

* [Serialize Library][0]

[0]: {{page.baseurl}}extension-dev-guide/framework/serializer.html "Serialize Library"
