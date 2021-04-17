---
group: php-developer-guide
title: Float Comparator
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

## Overview

The [`Magento\Framework\Math\FloatComparator`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Math/FloatComparator.php){:target="\_blank"} library provides methods to compare float values with a proper epsilon value (`0.00001`).

## Usage

| Method               | Description                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `equal`              | Compares two given floats and returns a boolean value describing if they're equal.                                                |
| `greaterThan`        | Compares two given floats and returns a boolean value describing if the first float is greater than the second float.             |
| `greaterThanOrEqual` | Compares two given floats and returns a boolean value describing if the first float is greater than or equal to the second float. |

## Examples

### Check if two floats are equal

```php
    ...

    $isEqual = $this->floatComparator->equal(1.002, 1.002);

    ...
```

### Checks if the first float is greater than the second float

```php
    ...

    $isGreater = $this->floatComparator->greaterThan(1.0004, 1.002);

    ...
```

### Checks if the first float is greater than or equal to the second float

```php
    ...

    $isGreaterOrEqual = $this->floatComparator->greaterThanOrEqual(1.0004, 1.0004);

    ...
```
