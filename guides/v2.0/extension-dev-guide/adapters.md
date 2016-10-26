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
This allows you to use functionality from third-party libraries in your code using the adapter classes.

## When to use

You should always use adapter classes instead of directly using classes from third-party libraries.
This reduces the change impact on your code when the API changes in a third-party library.

We recommend using adapter classes for [dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.html) to get access to the functionality provided by third-party classes.

## How to write

A common approach to creating an adapter is to create an `AdapterInterface` class to establish a [service contract]({{page.baseurl}}extension-dev-guide/service-contracts/service-contracts.html) for the functionality provided by the third-party class.
This allows you to substitute different implementations provided by different third-party classes without the need to update code using your adapter.

The Magento compiler only reads constructor signatures of classes that are part of Magento code, modules, and libraries that are [registered]({{page.baseurl}}extension-dev-guide/build/component-registration.html) as a *magento module* or *magento library*, so make sure you register the third-party libraries you are using in your concrete implementations.


## Examples

### `Magento/Framework/Code/Minifier`

The [minifier](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Code/Minifier){:target="_blank"} functionality provided by the `Magento/Framework/Code` library involves the use of third-party libraries for code compression.

The [`AdapterInterface`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Code/Minifier/AdapterInterface.php){:target="_blank"} for this class contains a `minify($content)` function that the [`CSSmin`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Code/Minifier/Adapter/Css/CSSmin.php){:target="_blank"} and [`JShrink`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Code/Minifier/Adapter/Js/JShrink.php){:target="_blank"} implementation class define.

The [jshrink](https://github.com/tedious/JShrink){:target="_blank"}(tedivm/jshrink) and [cssmin](https://github.com/tubalmartin/YUI-CSS-compressor-PHP-port){:target="_blank"}(tubalmartin/cssmin) libraries registered in the [`composer.json`](https://github.com/magento/magento2/blob/develop/composer.json){:target="_blank"} file provide the functionalities for the implementation classes.

### `Magento/Framework/Image`

The [`Magento/Framework/Image`](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Image){:target="_blank"} library uses adapters to access functionality provided by GD(php-gd2) and ImageMagick(php-imagick) third-party libraries.

The [`AdapterInterface`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/AdapterInterface.php){:target="_blank"} class defines the functionality available from GD and ImageMagick.
These third-party libraries are represented by the [`Gd2`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/Gd2.php){:target="_blank"} and [`ImageMagick`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/ImageMagick.php){:target="_blank"} adapter classes.
