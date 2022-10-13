---
group: php-developer-guide
subgroup: Security
title: Non-secure functions
menu_title: Non-secure functions
menu_order: 2100
migrated_to: https://developer.adobe.com/commerce/php/development/security/non-secure-functions/
layout: migrated
---

## Overview

Using functions that are known to be exploitable or non-secure can lead to remote code execution or weak cryptography.
As a developer, you should avoid using functions that introduce vulnerabilities in your code.

## PHP functions to avoid

The following is a list of [PHP](https://glossary.magento.com/php) functions that are known to be vulnerable and exploitable.
Avoid using these functions in your code.

*  [`eval`](https://php.net/manual/en/function.eval.php) - Using `eval` is considered bad practice because of its ability to [execute arbitrary PHP code](https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html).
*  [`serialize`](https://php.net/manual/en/function.serialize.php)/[`unserialize`](https://php.net/manual/en/function.unserialize.php) - Attackers can create an exploit for these functions by passing a string with a serialized arbitrary object to the `unserialize` function to [run arbitrary code](https://www.owasp.org/index.php/PHP_Object_Injection).
*  [`md5`](https://php.net/manual/en/function.md5.php) - The algorithm for this function is known to have [cryptographic weaknesses](https://www.owasp.org/index.php/Guide_to_Cryptography#Hashes).
   You should never use this function for hashing passwords or any other sensitive data.
*  [`sha1`](https://www.php.net/manual/en/function.sha1.php) - It is not recommended to use this function to secure passwords. This hashing algorithm has been compromised.
   See the [Password Hashing FAQ](https://www.php.net/manual/en/faq.passwords.php#faq.passwords.fasthash) for details and best practices.
*  [`srand`](https://php.net/manual/en/function.srand.php) - Using a predetermined number to seed the random number generator results in a [predictable sequence of numbers](https://softwareengineering.stackexchange.com/questions/76229/predicting-the-output-of-phps-rand).
*  [`mt_srand`](https://php.net/manual/en/function.mt-rand.php) - This function is a pseudo-random number generator (PRNG) and is [not cryptographically secure](https://phpsecurity.readthedocs.io/en/latest/Insufficient-Entropy-For-Random-Values.html).
*  [`include`](https://www.php.net/manual/en/function.include.php) - Depends on implementation. If you specifically set the path, then it is secure. An attack could happen if you allow user input to determine the file path without sanitization or checks. For example `include($_GET['file']);`. The remote file may be processed at the remote server, but also on the local server. If the file from the remote server is processed there and outputted only, [readfile()](https://www.php.net/manual/en/function.readfile.php) is much better function to use. Otherwise, special care should be taken to secure the remote script to produce a valid and desired code.
