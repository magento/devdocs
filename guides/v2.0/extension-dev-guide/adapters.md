---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Adapters
menu_title: Adapters
menu_order: 1000
version: 2.0
github_link: extension-dev-guide/adapters.md
---

## {{page.title}}
{:.no_toc}

* TOC
{:toc}

## Overview

Adapter classes follow the [adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern){:target="_blank"} and wrap around classes from third-party libraries.
This allows you to use functionality from third-party libraries in your code through the adapter classes.

## When to use

You should always use adapter classes instead of directly using classes from third-party libraries.
This reduces the change impact on your code when the API changes in a third-party library.

Because the Magento compiler only reads constructor signatures of Magento extensions and the framework, you must use adapter classes during [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html) to get access to the functionality provided by third-party classes.
Attempts to use dependency injection to get instances of third-party objects will result in unexpected behavior in production environments.

## Example

The [`Magento/Framework/Image`](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Image){:target="_blank"} library uses adapters to access functionality provided by GD(php-gd2) and ImageMagick(php-imagick).

A common design pattern is to create an `AdapterInterface` class to establish a [service contract]({{page.baseurl}}extension-dev-guide/service-contracts/service-contracts.html) for the desired functionality.

In the `Magento/Framework/Image` library, the [`AdapterInterface`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/AdapterInterface.php){:target="_blank"} class defines the functionality available from GD and ImageMagick.
These third-party libraries are represented by the [`Gd2`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/Gd2.php){:target="_blank"} and [`ImageMagick`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/ImageMagick.php){:target="_blank"} adapter classes.
