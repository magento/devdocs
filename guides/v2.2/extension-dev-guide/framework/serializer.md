---
layout: default
group: extension-dev-guide
title: Serializer
subgroup: Framework
menu_title: Serializer
menu_order: 1000
version: 2.2
github_link: extension-dev-guide/framework/serializer.md
---

## {{page.title}}
{:.no_toc}

* TOC
{:toc}

## Overview

Magento's Serialize library class provides the `Magento\Framework\Serialize\SerializerInterface` interface class and implementations to support different kinds of data.

This library provides secure alternatives to PHP's native [`serialize()`](http://php.net/manual/en/function.serialize.php){:target="_blank"} and [`unserialize()`](http://php.net/manual/en/function.unserialize.php){:target="_blank"} functions.

## Serialization

The main purpose of data serialization is to convert an array or object into a string using `serialize()` to store in a database, a cache, or pass onto another architectural layer.

The other half of this process uses the `unserialize()` function to reverse the process and convert a string back into an array or object.

## Implementations

### Json

The `Magento\Framework\Serialize\Serializer\Json` class uses the [JSON](http://www.json.org/){:target="_blank"} format to serialize/unserialize string, integer, float, boolean, or array data.
This is the default implementation of `SerializerInterface`.

### Serialize

The `Magento\Framework\Serialize\Serializer\Serialize` class uses PHP's native `serialize()` and `unserialize()` methods to provide better performance on big arrays at the expense of security.

For security reasons, the implementation of this class does not unserialize objects in PHP 7.

<div class="bs-callout bs-callout-warning" markdown="1">

Magento discourages using the Serialize implementation because it can lead to security vulnerabilities.

</div>


## Usage

Use [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html) to inject a concrete implementation of the `SerializerInterface` by declaring it as a constructor dependency.

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

The example below shows how to use a serializer's `serialize()` and `unserialize()` functions to store and retrieve array data from a cache:
{% highlight php startinline %}

...

/**
 * @var string
 */ 
protected $pathToCacheFile = 'mySerializedData';

...

/**
 * Save data to cache
 * @param array $data  
 * @return bool
 */
public function saveDataToCache($data)
{
  return $this->getCache()->save($this->serializer->serialize($data), $this->pathToCacheFile);
}

...

/**
 * Load data from cache
 * @return array
 */
public function loadDataFromCache()
{
  $data = $this->getCache()->load($this->pathToCacheFile);
  if (false !== $data) {
    $data = $this->serializer->unserialize($data);
  }
  return $data;
}

...

{% endhighlight %}
