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
Avoid using these in your code.

* `eval`
* `seralize`/`unserialize`
* `md5`
* `srand`
* `mt_srand`

If you are adding code to the [Magento code base](https://github.com/magento/magento2), the static test `UnsecureFunctionsUsageTest.php` will prevent you from committing code that contain these vulnerable functions.
