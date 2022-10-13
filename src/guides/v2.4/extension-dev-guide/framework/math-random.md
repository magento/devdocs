---
group: php-developer-guide
title: Math Random
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
migrated_to: https://developer.adobe.com/commerce/php/development/framework/math-random/
layout: migrated
---

## Overview

The [`Magento\Framework\Math\Random`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Math/Random.php){:target="\_blank"} library provides the ability to generate random values and hashes.

## Usage

| Method            | Description                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `getRandomString` | Generates a random string with a given string length and an optional character pool. Without the optional character pool, it uses both cases of the English alphabet and all digits. |
| `getRandomNumber` | Generates a random number with an optional range. The range defaults to 0 as minimum and the result of the PHP function `mt_getrandmax` as the maximum.                              |
| `getUniqueHash`   | Generates a unique hash string with an optional prefix.                                                                                                                              |

## Examples

In the examples below, the `$this->mathRandom` property is an instantiated object of the `Magento\Framework\Math\Random` class.

### Generate a random string

This example shows how to generate a random string of length 99, with the default character pool.

```php
$this->mathRandom->getRandomString(99);
```

### Generate a random number

This example shows how to generate a random number between 0 and 9999.

```php
$this->mathRandom->getRandomNumber(0, 9999);
```

### Generate a random number

This example shows how to generate a unique hash string with a prefix.

```php
$this->mathRandom->getUniqueHash("my_hash_prefix");
```
