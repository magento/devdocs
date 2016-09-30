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

Using functions that are known to be exploitable or non-secure can lead to code execution or weak cryptography.
As a Magento developer, you should avoid using functions that introduce vulnerabilities in the application.

## PHP functions to avoid

The following is a list of PHP functions that are known to be vulnerable and exploitable.
Avoid using these functions in your `php`,`phtml`, and `js` files.

* [`eval`](http://php.net/manual/en/function.eval.php){:target="_blank"} - This function is considered dangerous because it allows execution of arbitrary PHP code.
* [`seralize`](http://php.net/manual/en/function.serialize.php){:target="_blank"}/[`unserialize`](http://php.net/manual/en/function.unserialize.php){:target="_blank"} - Like `eval`, attackers can exploit the vulnerability of the `unserialize` function to inject PHP code that has been stored using `serialized`.
* [`md5`](http://php.net/manual/en/function.md5.php){:target="_blank"} - The algorithm for this function is known to have cryptographic weaknesses.
  You should never use function for hashing, or securing, passwords or any other sensitive data.
* [`srand`](http://php.net/manual/en/function.srand.php){:target="_blank"} - Using a predetermined number to seed the random number generator results in a predictable sequence of numbers.
* [`mt_srand`](http://php.net/manual/en/function.mt-rand.php){:target="_blank"} - This function is not a secure pseudo-random number generator(PRNG).

If you are adding code to the [Magento code base](https://github.com/magento/magento2){:target="_blank"}, the static test `UnsecureFunctionsUsageTest.php` will prevent you from committing code that contain these vulnerable functions.
