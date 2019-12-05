---
group: php-developer-guide
title: Serialize Library
subgroup: Framework
menu_title: Serialize Library
menu_order: 1000
---

## Overview

This [library](https://glossary.magento.com/library) provides a secure way of serializing and unserializing strings, integers, floats, booleans, and arrays.

Magento's Serialize library provides the `Magento\Framework\Serialize\SerializerInterface` and the Json and Serialize implementations for serializing data.

## Serialization

The main purpose of data serialization is to convert data into a string using `serialize()` to store in a database, a cache, or pass onto another layer in the application.

The other half of this process uses the `unserialize()` function to reverse the process and convert a serialized string back into string, integer, float, boolean, or array data.

{:.bs-callout-warning}
For security reasons, `SerializerInterface` implementations, such as the Json and Serialize classes, should not serialize and unserialize objects.

## Implementations

### Json (default)

The [`Magento\Framework\Serialize\Serializer\Json`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Serialize/Serializer/Json.php){:target="_blank"} class serializes and unserializes data using the [JSON](http://www.json.org/){:target="_blank"} format.
This class does not unserialize objects.

### Serialize

The [`Magento\Framework\Serialize\Serializer\Serialize`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Serialize/Serializer/Serialize.php){:target="_blank"} class is less secure than the Json implementation but provides better performance on large arrays.
This class does not unserialize objects in [PHP](https://glossary.magento.com/php) 7.

{:.bs-callout-warning}
Magento discourages using the Serialize implementation directly because it can lead to security vulnerabilities. Always use the `SerializerInterface` for serializing and unserializing.

## Usage

Declare `SerializerInterface` as a [constructor dependency]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) to get an instance of a serializer class.

```php
use Magento\Framework\Serialize\SerializerInterface;

...

/**
 * @var SerializerInterface
 */
private $serializer;

...

public function __construct(SerializerInterface $serializer) {
  $this->serializer = $serializer;
}
```

\\
The following example shows how to use a serializer's `serialize()` and `unserialize()` functions to store and retrieve array data from a cache:

```php

...

/**
 * @var string
 */
private $cacheId = 'mySerializedData';

...

/**
 * Save data to cache
 * @param array $data
 *
 * @return bool
 */
public function saveDataToCache($data)
{
  return $this->getCache()->save($this->serializer->serialize($data), $this->cacheId);
}

...

/**
 * Load data from cache
 *
 * @return array
 */
public function loadDataFromCache()
{
  $data = $this->getCache()->load($this->cacheId);
  if (false !== $data) {
    $data = $this->serializer->unserialize($data);
  }
  return $data;
}
...
```

## Backward Compatibility Note

The `SerializerInterface` interface and its implementations only exist since Magento version 2.2.
Because of this, it is not possible to use these classes in code that has to be compatible with Magento 2.1 or 2.0.

In code that is compatible with earlier versions of Magento 2, constructor dependency injection can not be used to get an instance of `SerializerInterface`.
Instead, a runtime check if the `SerializerInterface` definition exists can made, and if it does, it can be instantiated by directly accessing the object manager using a static method. Alternatively a check against the Magento 2 version or the `magento/framework` composer package version would work, too.
If the interface does not exist or an earlier version of Magento 2 is being executed, the appropriate native PHP serialization function has to be called, e.g. `\serialize()` or `\json_encode()`, depending on the usercase.

Here is an example:

```php

...
/**
 * @param mixed $data
 * @return string
 */
 private function serialize($data)
 {
    if (class_exists(\Magento\Framework\Serialize\SerializerInterface::class)) {
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $serializer = $objectManager->create(\Magento\Framework\Serialize\SerializerInterface::class);
        return $serializer->serialize($data);
    }
    return \serialize($data);
}
...

```