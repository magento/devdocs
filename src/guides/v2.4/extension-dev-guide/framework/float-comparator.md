---
group: php-developer-guide
title: Float Comparator
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
migrated_to: https://developer.adobe.com/commerce/php/development/framework/float-comparator/
layout: migrated
---

## Overview

The [`Magento\Framework\Math\FloatComparator`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Math/FloatComparator.php){:target="\_blank"} library provides methods to compare float values with an approriate epsilon value (`0.00001`). Floats usually have rounding errors while doing mathematical operations, so the conventional way of comparing two floats using the equality operator (`==`), may not always lead to expected results. For more information, please refer to this [article](https://floating-point-gui.de/errors/comparison/).

## Usage

| Method               | Description                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `equal`              | Compares two given floats and returns a boolean value describing if they're equal.                                                |
| `greaterThan`        | Compares two given floats and returns a boolean value describing if the first float is greater than the second float.             |
| `greaterThanOrEqual` | Compares two given floats and returns a boolean value describing if the first float is greater than or equal to the second float. |

## Examples

In the examples below, the `$this->floatComparator` property is an instantiated object of the `Magento\Framework\Math\FloatComparator` class.

### Check if two floats are equal

```php
$isEqual = $this->floatComparator->equal(1.002, 1.002);
```

### Checks if the first float is greater than the second float

```php
$isGreater = $this->floatComparator->greaterThan(1.0004, 1.002);
```

### Checks if the first float is greater than or equal to the second float

```php
$isGreaterOrEqual = $this->floatComparator->greaterThanOrEqual(1.0004, 1.0004);
```
