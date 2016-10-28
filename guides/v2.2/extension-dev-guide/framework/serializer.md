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

This library provides a secure way of serializing and unserializing strings, integers, floats, boolean, and array data.

## Serialization

The main purpose of data serialization is to convert an array or object into a string using `serialize()` to store in a database, a cache, or pass onto another architectural layer.

The other half of this process uses the `unserialize()` function to reverse the process and convert a string back into an array or object.

<div class class="bs-callout bs-callout-warning" markdown="1">

For security reasons, `SerializerInterface` implementations, such as the Json and Serialize classes, should not serialize and unserialize objects.

</div>

## Implementations

### Json

The `Magento\Framework\Serialize\Serializer\Json` class uses the [JSON](http://www.json.org/){:target="_blank"} format to serialize/unserialize string, integer, float, boolean, or array data.
This is the default implementation of `SerializerInterface`.

### Serialize

The `Magento\Framework\Serialize\Serializer\Serialize` class uses PHP's native `serialize()` and `unserialize()` methods to provide better performance on big arrays at the expense of security.

<div class="bs-callout bs-callout-warning" markdown="1">

Magento discourages using the Serialize implementation in PHP 5.x environments because it can lead to security vulnerabilities.

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
The example below shows how to use a serializer's `serialize()` and `unserialize()` functions to store and retrieve array data from a cache:
{% highlight php startinline %}

...

/**
 * @var string
 */ 
protected $cacheId = 'mySerializedData';

...

/**
 * Save data to cache
 * @param array $data  
 * @return bool
 */
public function saveDataToCache($data)
{
  return $this->getCache()->save($this->serializer->serialize($data), $this->cacheId);
}

...

/**
 * Load data from cache
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
