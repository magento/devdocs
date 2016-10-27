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

A common approach in creating an adapter is to create an interface named `AdapterInterface` in an 'Adapter' directory to describe the functionality the third-party class provides.
Classes implementing this adapter interface uses the third-party class directly to provide indirect functionality.

This allows you to update or substitute different implementations provided by different third-party classes without the need to update code that uses your adapter.

## Examples of adapters in Magento

### `Magento/Framework/Code/Minifier`

The [minifier](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Code/Minifier){:target="_blank"} functionality provided by the `Magento/Framework/Code` library involves the use of third-party libraries for code compression.

The [`AdapterInterface`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Code/Minifier/AdapterInterface.php){:target="_blank"} for this class contains a `minify($content)` function that the [`CSSmin`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Code/Minifier/Adapter/Css/CSSmin.php){:target="_blank"} and [`JShrink`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Code/Minifier/Adapter/Js/JShrink.php){:target="_blank"} implementation class define.

The [jshrink](https://github.com/tedious/JShrink){:target="_blank"}(tedivm/jshrink) and [cssmin](https://github.com/tubalmartin/YUI-CSS-compressor-PHP-port){:target="_blank"}(tubalmartin/cssmin) libraries registered in the [`composer.json`](https://github.com/magento/magento2/blob/develop/composer.json){:target="_blank"} file provide the functionalities for the implementation classes.

### `Magento/Framework/Image`

The [`Magento/Framework/Image`](https://github.com/magento/magento2/tree/2.0/lib/internal/Magento/Framework/Image){:target="_blank"} library uses adapters to access functionality provided by GD(php-gd2) and ImageMagick(php-imagick) third-party libraries.

The [`AdapterInterface`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/AdapterInterface.php){:target="_blank"} class defines the available functionality, and the [`Gd2`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/Gd2.php){:target="_blank"} and [`ImageMagick`](https://github.com/magento/magento2/blob/2.0/lib/internal/Magento/Framework/Image/Adapter/ImageMagick.php){:target="_blank"} adapter classes provides the concrete implementation using the third-party libraries.

## Example Code

The code below describes an interface for an adapter that parses markdown.

{% highlight php startinline %}
/**
 * Interface for markdown library adapters
 */
namespace MyCompany\MyModule\Markdown\Parser\Adapter;

interface AdapterInterface
{
    /**
     * Converts markdown text into another format
     * 
     * @param string $text
     * @return string
     */
    public function parse($text);
}
{% endhighlight %}

\\
The code below is an implementation class of the `AdapterInterface` that uses the [php-markdown](https://github.com/michelf/php-markdown){:target="_blank"} library to convert markdown into HTML.

{% highlight php startinline %}
namespace MyCompany\MyModule\Markdown\Parser\Adapter\PhpMarkdown;

use \Michelf\Markdown;
use MyCompany\MyModule\Markdown\Parser\Adapter\AdapterInterface

/**
 * Adapter for php-markdown library
 */
class PhpMarkdown implements AdapterInterface
{
    /**
     * Convert markdown into HTML
     *
     * @param string $text
     * @return string
     */
    public function parse($text)
    {
        return Markdown::default_transform($text);
    }
}
{% endhighlight %}

\\
The code below is an alternate implementation class of the `AdapterInterface` that uses the [Ciconia](https://github.com/kzykhys/Ciconia){:target="_blank"} library to parse markdown into HTML.

The difference between this and the previous implementations is the constructor dependency that provides an instance of the `Ciconia` class.

{% highlight php startinline %}
namespace MyCompany\MyModule\Markdown\Parser\Adapter\Ciconia;

use Ciconia\Ciconia;
use MyCompany\MyModule\Markdown\Parser\Adapter\AdapterInterface

/**
 * Adapter for the Ciconia library
 */
class CiconiaParser implements AdapterInterface
{
    /**
     * @var Ciconia
     */
     protected $parser;

    /**
     * @param Ciconia
     */
    public function __construct(Ciconia $parser)
    {
        $this->parser = $parser;
    }

    /**
     * Convert markdown into HTML
     *
     * @param string $text
     * @return string
     */
    public function parse($text)
    {
        return $parser->render($text);
    }
}
{% endhighlight %}

\\
To inject the `Ciconia` dependency in the adapter class, you need to add the following entry in the module's `di.xml` file.

{% highlight xml %}
<type name="Ciconia\Ciconia" shared="false" />
{% endhighlight %}
