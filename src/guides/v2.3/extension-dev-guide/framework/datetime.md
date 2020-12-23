---
group: php-developer-guide
title: DateTime Library
contributor_name: Rakesh Jesadiya
contributor_link: https://github.com/RakeshJesadiya
---

## Overview

This DateTime library provides utilities to work with formatting of date time. Provided methods in this library are described below.

## Usage

|Method|Description|
|--- |--- |
| `formatDate` | Format date to internal format |
| `isEmptyDate` | Check whether sql date is empty |

### Example

The following example shows how to Format current date and time to internal format.

```php
<?php

use Magento\Framework\Stdlib\DateTime;

...
    /**
     * @var DateTime
     */
    private $dateTime;

    /**
     * SomeClass constructor.
     *
     * @param DateTime $dateTime
     */
    public function __construct(DateTime $dateTime)
    {
        $this->dateTime = $dateTime;
    }

    /**
     * display current date to internal format time zone
     *
     * @return string
     */
    public function getFormatDate(): string
    {        
	return $this->dataTime->formatDate(time());
    }

...
