---
group: php-developer-guide
subgroup: 99_Module Development
title: Adapters
menu_title: Adapters
menu_order: 1000
---

## Overview

Adapter classes follow the [adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern){:target="_blank"} and wrap around classes from third-party libraries.
These classes allow you to use functionality from third-party libraries in your code by converting the third-party class interfaces into an interface that is expected by your native code.

## When to use

You should always use [adapter](https://glossary.magento.com/adapter) classes instead of directly using classes from third-party libraries.
This reduces the change impact on your code when the [API](https://glossary.magento.com/api) changes in a third-party [library](https://glossary.magento.com/library).

We recommend using adapter classes for [dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) to get access to the functionality provided by third-party classes.

## How to write

A common approach in developing an adapter is to create an interface named `AdapterInterface` to describe the functionality the third-party class provides.
This class is typically found in a directory labeled `Adapter`.
Classes implementing this adapter interface use the third-party class directly to provide indirect functionality.

This approach allows you to update or substitute different implementations provided by other third-party classes without the need to update code that uses your adapter.

## Examples of adapters in Magento

### `Magento/Framework/Code/Minifier`

The [minifier]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Code/Minifier){:target="_blank"} functionality provided by the `Magento/Framework/Code` library involves the use of third-party libraries for code compression.

The [`AdapterInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Code/Minifier/AdapterInterface.php){:target="_blank"} for this class contains a `minify($content)` function that the [`CSSmin`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Code/Minifier/Adapter/Css/CSSmin.php){:target="_blank"} and [`JShrink`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Code/Minifier/Adapter/Js/JShrink.php){:target="_blank"} implementation class define.

The [jshrink](https://github.com/tedious/JShrink){:target="_blank"}(tedivm/jshrink) and [cssmin](https://github.com/tubalmartin/YUI-CSS-compressor-PHP-port){:target="_blank"}(tubalmartin/cssmin) libraries registered in the [`composer.json`]({{ site.mage2bloburl }}/{{ page.guide_version }}/composer.json){:target="_blank"} file provide the functionalities for the implementation classes.

### `Magento/Framework/Image`

The [`Magento/Framework/Image`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Image){:target="_blank"} library uses adapters to access functionality provided by GD(php-gd2) and ImageMagick(php-imagick) third-party libraries.

The [`AdapterInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Image/Adapter/AdapterInterface.php){:target="_blank"} class defines the available functionality, and the [`Gd2`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Image/Adapter/Gd2.php){:target="_blank"} and [`ImageMagick`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Image/Adapter/ImageMagick.php){:target="_blank"} adapter classes provides the concrete implementation using the third-party libraries.

## Example Code

The code below describes an interface for an adapter that parses [markdown](https://glossary.magento.com/markdown).

```php
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
```

<br/>

The code below is an implementation class of the `AdapterInterface` that uses the [php-markdown](https://github.com/michelf/php-markdown){:target="_blank"} library to convert markdown into [HTML](https://glossary.magento.com/html).

```php
namespace MyCompany\MyModule\Markdown\Parser\Adapter\PhpMarkdown;

use \Michelf\Markdown;
use MyCompany\MyModule\Markdown\Parser\Adapter\AdapterInterface;

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
        return Markdown::defaultTransform($text);
    }
}
```

<br/>

To configure the ObjectManager to use the PhpMarkdown implementation when the AdapterInterface class is requested as a dependency, add the following code in your di.xml file.

```php
<preference for="MyCompany\MyModule\Markdown\Parser\Adapter\AdapterInterface" type="MyCompany\MyModule\Markdown\Parser\Adapter\PhpMarkdown\PhpMarkdown" />
```

<br/>

The code below is an alternate implementation class of the `AdapterInterface` that uses the [Ciconia](https://github.com/kzykhys/Ciconia){:target="_blank"} library to parse markdown into HTML.
This code differs from the previous implementations in that an instance of the `Ciconia` class is a constructor dependency.

```php
namespace MyCompany\MyModule\Markdown\Parser\Adapter\Ciconia;
use Ciconia\Ciconia;
use MyCompany\MyModule\Markdown\Parser\Adapter\AdapterInterface;

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
        return $this->parser->render($text);
    }
}
```

<br/>

The following [dependency injection](https://glossary.magento.com/dependency-injection) entries belong in the `di.xml` file.
They describe to the ObjectManager how to create the third-party and adapter classes.

```xml
<virtualType name="defaultCiconia" type="Ciconia\Ciconia" shared="false">
   <arguments>
       <argument name="renderer" xsi:type="null"/>
   </arguments>
</virtualType>
<type name="MyCompany\MyModule\Markdown\Parser\Adapter\Ciconia\CiconiaParser">
   <arguments>
       <argument name="parser" xsi:type="object">defaultCiconia</argument>
   </arguments>
</type>
```
