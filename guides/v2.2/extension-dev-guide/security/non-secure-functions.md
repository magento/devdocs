---
layout: default
group: extension-dev-guide
subgroup: Security
title: Functions to avoid
menu_title: Functions to avoid
menu_order: 2100
version: 2.2
github_link: extension-dev-guide/security/non-secure-functions.md
---

## Overview

Using functions that are known to be exploitable or non-secure can lead to remote code execution or weak cryptography.
As a developer, you should avoid using functions that introduce vulnerabilities in your code.

## PHP functions to avoid

The following is a list of PHP functions that are known to be vulnerable and exploitable.
Avoid using these functions in your `php`, `phtml`, and `js` files.

* [`eval`](http://php.net/manual/en/function.eval.php){:target="_blank"} - This function is considered dangerous because it allows execution of arbitrary PHP code.
  Using `eval` is considered bad practice because of its [code injection](https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet#Code_Injection){:target="_blank"} ability.
* [`seralize`](http://php.net/manual/en/function.serialize.php){:target="_blank"}/[`unserialize`](http://php.net/manual/en/function.unserialize.php){:target="_blank"} - Attackers can exploit these functions by passing a string with a serialized arbitrary object to the `unserialize` function to [run arbitrary code](https://www.owasp.org/index.php/PHP_Object_Injection){:target="_blank"}.
* [`md5`](http://php.net/manual/en/function.md5.php){:target="_blank"} - The algorithm for this function is known to have [cryptographic weaknesses](https://www.owasp.org/index.php/Guide_to_Cryptography#Hashes){:target="_blank"}.
  You should never use function for hashing, or securing, passwords or any other sensitive data.
* [`srand`](http://php.net/manual/en/function.srand.php){:target="_blank"} - Using a predetermined number to seed the random number generator results in a [predictable sequence of numbers](http://programmers.stackexchange.com/questions/76229/predicting-the-output-of-phps-rand){:target="_blank"}.
* [`mt_srand`](http://php.net/manual/en/function.mt-rand.php){:target="_blank"} - This function is a pseudo-random number generator (PRNG) and is [not cryptographically secure](http://phpsecurity.readthedocs.io/en/latest/Insufficient-Entropy-For-Random-Values.html){:target="_blank"}.
