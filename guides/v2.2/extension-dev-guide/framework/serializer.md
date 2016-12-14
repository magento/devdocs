---
layout: default
group: extension-dev-guide
title: Serialize Library
subgroup: Framework
menu_title: Serialize Library
menu_order: 1000
version: 2.2
github_link: extension-dev-guide/framework/serializer.md
---

## Overview

This library provides a secure way of serializing and unserializing strings, integers, floats, booleans, and arrays.

Magento's Serialize library provides the `Magento\Framework\Serialize\SerializerInterface` and the Json and Serialize implementations for serializing data.


## Serialization

The main purpose of data serialization is to convert data into a string using `serialize()` to store in a database, a cache, or pass onto another layer in the application.

The other half of this process uses the `unserialize()` function to reverse the process and convert a serialized string back into string, integer, float, boolean, or array data.

<div class class="bs-callout bs-callout-warning" markdown="1">

For security reasons, `SerializerInterface` implementations, such as the Json and Serialize classes, should not serialize and unserialize objects.

</div>

## Implementations

### Json (default)

The [`Magento\Framework\Serialize\Serializer\Json`](https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/Serialize/Serializer/Json.php){:target="_blank"} class serializes and unserializes data using the [JSON](http://www.json.org/){:target="_blank"} format.
This class does not unserialize objects.

### Serialize

The [`Magento\Framework\Serialize\Serializer\Serialize`](https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/Serialize/Serializer/Serialize.php){:target="_blank"} class is less secure than the Json implementation but provides better performance on large arrays.
This class does not unserialize objects in PHP 7.

<div class="bs-callout bs-callout-warning" markdown="1">

Magento discourages using the Serialize implementation directly because it can lead to security vulnerabilities.
Always use the `SerializerInterface` for serializing and unserializing.

</div>


## Usage

Declare `SerializerInterface` as a [constructor dependency]({{page.baseurl}}extension-dev-guide/depend-inj.html) to get an instance of a serializer class.

{% highlight php startinline %}
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

{% endhighlight %}

\\
The following example shows how to use a serializer's `serialize()` and `unserialize()` functions to store and retrieve array data from a cache:
{% highlight php startinline %}

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

{% endhighlight %}
