---
group: coding-standards
subgroup: 01_Coding standards
title: DocBlock standard
landing-page: Coding standards
menu_title: DocBlock standard
menu_order: 4
version: 2.1
redirect_from: /guides/v1.0/coding-standards/docblock-standard-general.html
functional_areas:
  - Standards
---


This standard defines Magento requirements and conventions for adding code inline documentation, known as *DocBlock*s.

Some parts of Magento code might not comply with this standard, but we are working to gradually improve this.

Following these standard is optional for third-party Magento developers, but doing so helps to create consistent, clean, and easy to read inline documentation.

Use [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt) to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL keywords."

## Scope of the standard
{:#scope}

The goal of this standard is to unify usage of code DocBlocks for all files, not specific to a particular language.

The following is assumed by default:

* Formatting according [phpDocumentor](https://www.phpdoc.org/docs/latest/guides/docblocks.html){:target="_blank"} standard
* Requirements apply for all files regardless of programming language, but a DocBlock standard for the particular language may override it.

## General principles

The documentation should follow two simple principles:

1. Be as short as possible.
2. Include all necessary information.

### Short documentation

The documentation should be as short as possible, but it should not skip necessary details.

Below are ways of improving code to help simplify documentation:

* Make code self-explanatory.
* Put all possible information in the names of classes, methods, and variables. (e.g. use `$timeInSec` instead of `$time`)
* Break down a method into smaller methods with descriptive names.
  See example below:

  {% highlight php startinline=true %}
  public function getPrice()
  {
      $price = 0;
      $price += $this->getBasePrice();
      $price -= $this->getDiscount();
      return $price;
  }

  private function getBasePrice()
  {
      // calculate base price
  }

  private function getDiscount()
  {
    if (it's discount time) {
      return 10;
    }
    return 0;
  }
  {% endhighlight %}

### Include all the necessary details

1. Identify the details a developer needs to work with your code.
2. Ignore the implementation details (i.e. private methods/properties and method bodies) and focus on what the public interface signature provides.

   If possible, improve the interface to provide more information.
3. Add any remaining information that a developer may need to the DocBlock.

## Files
{:#files}

Each Magento source code file must have a DocBlock header with short description of the file.
After the short description, there can be a long description.

Both short and long descriptions (for file headers and herein) must be separated from other elements using one empty line (implied empty line in terms of DocBlock syntax, where any line within DocBlock starts from `*`.

If description or short description happens to be the first one after DocBlock opening tag (`/**`) or last one before closing tag (`*/`), it should not be separated with an empty line.

**DocBlock Header in a PHP-file**

{% highlight php startinline=true %}
/**
 * Short description...
 *
 * Long description
 * Broken down into several lines
 *
 * License notice...
 */
{% endhighlight %}


**DocBlock Header in an XML-file**


{% highlight xml %}
<!--
/**
 * Short description...
 *
 * Long description
 * Broken down into several lines
 *
 * License notice...
 */
-->
{% endhighlight %}

### License Notice and Copyright

<div class="bs-callout bs-callout-info" id="info">
This section is applicable to Magento core files only. Please follow it if you are a contributing developer.
</div>

Any file in Magento source should have a header with license and copyright notice.
Exceptions are files with format that doesn't support comments, and so no meta information can be added.

License notice and copyright MUST be declared in the very beginning of the file.
If the file contains a structural element (for example, a class), description for the element should be declared as a separate DocBlock.

Use the following templates for the license notice and copyright blocks:

**Template for {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} Files**

{% highlight php %}
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Framework\Api;

/**
 * Provides metadata about an attribute.
 *
 * @api
 */
interface MetadataObjectInterface
{
   ...
}
{% endhighlight %}

**Template for {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} Files**

{% highlight xml %}

<?xml version="1.0"?>
<!--
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
{% endhighlight %}

**Template for JS Files**

{% highlight js %}

/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
{% endhighlight %}

## Code structural elements
{:#code-elements}

A structural element is defined in [phpDocumentor](http://phpdoc.org/) as part of imperative source code, such as PHP or JavaScript, or procedural SQL.
For example: namespace, class, interface, function, property, method, and so on.

If the source code file has one and only one standalone structural element (class, interface, function, and so on), as it may be required by language-specific coding standard, the file DocBlock is to be reused for this element.

So in general case, classes that are declared in dedicated files, must have one DocBlock, which refers to the class and file at the same time.

**DocBlock for a Class**

{% highlight php startinline=true %}

/**
 * Autoloader with class map capability
 *
 * ...
 */
class Autoload
{
{% endhighlight %}


But if along with declaring class or function there must be another file with source code included, the inclusion construct must not be before file header and it must not separate element DocBlock from the element.
So there are two solutions possible:

* Have file header DocBlock separately, then inclusion construct, then a DocBlock for the element with duplicated short description.
* Or include after declaring the element (it is possible in PHP and won't cause issues before execution).

**DocBlock with Included Script File**


{% highlight php startinline=true %}

/**
 * Magento integration Magento test framework (MTF) bootstrap
 *
 * ...
 */

require __DIR__ . '/../bootstrap.php';

namespace Magento\Test;

/**
 * Magento integration Magento test framework (MTF) bootstrap
 */
class Bootstrap
{
{% endhighlight %}


**DocBlock with Included Class File**


{% highlight php startinline=true %}
namespace Magento\Framework\Profiler\Adapter;

/**
 * Profiler CSV adapter
 *
 * ...
 */
class Csv extends \Magento\Framework\Profiler\AdapterAbstract
{
// ...
    public function setFile($file)
    {
        if (!isValidFile($file)) {
            throw new \ArgumentException('A valid file name is expected.');
        }
        // ...
    }
}

require_once __DIR__ . '/../../functions.php';
{% endhighlight %}

### Classes and interfaces
{:#classes-interfaces}

Classes and interfaces must have a short description that is a human-understandable intention of the class.

**Good:**

> Handler for PHP errors/warnings/notices that converts them to exceptions.
> class ErrorHandler { ... }

**Bad:**

> Error Handler
> class ErrorHandler { ... }

If possible, add use cases where developers can or cannot use the class.

### Short name form
{:#short-name-form}

It is encouraged to use the short form of the name to encourage readability and consistency with the type hint.
The only {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} is in the `Service/DTO` classes due to tooling requirements.

**Example of a Method DocBlock**


{% highlight php startinline=true %}
use Magento\Logger;
use Magento\Math\Random;
use Magento\Stdlib\DateTime as StdlibDateTime;

/**
 * @var Logger
 */
protected $_logger;

/**
 * Description of method here.
 *
 * @param Random         $mathRandom
 * @param StdlibDateTime $dateTime
 * @param int            $number
 */
protected function doSomething(Random $mathRandom, StdlibDateTime $dateTime, $number)
{

}
{% endhighlight %}

### Class attributes
{:#class-attributes}

Class attributes must have type declaration using `@var` tag.

**Example of Class Attribute**


{% highlight php startinline=true %}
// ...
namespace Magento;

class Profiler
{
    /**
     * @var Profiler
     */
    protected static $instance = null;
{% endhighlight %}

### Functions and methods
{:#functions-methods}

Functions and methods must have:

* Short description
* Long description that explains the motivation behind the implementation.
  For example:

   * If a workaround or hack is implemented, explain why it is necessary and include any other details necessary to understand the algorithm.
   * For non-obvious implementations where the implementation logic is complicated or does not correspond to the Technical Vision or other known best practices, include an explanation in the doc block's description.
     An implementation is non-obvious if another developer has questions about it.

* Declaration of all arguments (if any) using `@param` tag.
  Appropriate argument type must be specified.
* Declaration of return type using `@return` tag.
  If there is no such operator, the `@return` tag must have `void` as the return value.
* Declaration of possibly thrown exception using `@throws` tag, if the actual body of function triggers throwing an exception.
  All occurrences of `@throws` in a DocBlock must be after `@param` and `@return` (if any).

**Exceptions to these rules:**

* Constructors may not have short and/or long description

* Testing methods in Unit tests may not have doc blocks if the test's method name follows the convention (test<MethodName>)

   * If the test does not follow the convention, it should have a doc block describing the covered methods

   * Non-testing methods should have a doc block with description. It includes data providers and any helper methods

#### Things to include

* An explanation of input arguments and return values if it is not obvious from their name and type.

  This is applicable in the following cases:

  * There is more than one possible input/output type.

    For example: `@return Config|null`.
    The DockBlock needs to explain what situations return `null`.

    Another example: `@param FileInterface | null`.
    The DocBlock needs to explain what happens when the value of the parameter is `null`.

    Ideally, implementations such as these should be avoided.

  * The input/output type is a simple type and the format is not clear from the name.
  * The input/output is an array with a specific structure.
* The intent of the method along with when or where it can be used.
* If an exception is thrown by a method, explain the cause or situation.
* If the input is confusing or complicated, add examples of the method's usage in client code or examples of the argument.

#### Things to avoid

* Copying the algorithm.
  The algorithm must be self-explanatory and understood by reviewing the code and unit tests.
* Information that is out of date or has the potential to become out of date.

**Example of a Method DocBlock**

{% highlight php startinline=true %}

/**
 * Merge the config XML files
 *
 * @param  array $configFiles
 * @return void
 * @throws \Magento\Exception if a non-existing or invalid XML file passed
 */
protected function merge($configFiles)
{
    $domConfig = new \Magento\Config\Dom($this->_getInitialXml(), $this->_getIdAttributes());
    foreach ($configFiles as $file) {
        if (!file_exists($file)) {
            throw new \Magento\Exception("File does not exist: {$file}");
        }
        $domConfig->merge(file_get_contents($file));
        if (!$domConfig->validate($this->getSchemaFile(), $errors)) {
            $message = "Invalid XML file: {$file}\n";
            /** @var libXMLError $error */
            foreach ($errors as $error) {
                $message .= "{$error->message} Line: {$error->line}\n";
            }
            throw new \Magento\Exception($message);
        }
    }
    $this->_dom = $domConfig->getDom();
}
{% endhighlight %}

#### Divergence in @throws tag
{:#throws}

In general, use the `@throws` tag when the code uses *throw*:

**Example of Throwing Exception Explicitly**
{% highlight php startinline=true %}
/**
 * Set an arbitrary value to specified element
 *
 * @param  string $elementId
 * @param  string $attribute
 * @param  mixed  $value
 * @return self
 * @throws \InvalidArgumentException
 */
public function setAttribute($elementId, $attribute, $value)
{
    $this->_assertElementExists($elementId);
    switch ($attribute) {
        case self::PARENT: // break is intentionally omitted
        case self::CHILDREN:
        case self::GROUPS:
            throw new \InvalidArgumentException("Attribute '{$attribute}' is reserved and cannot be set.");
            break;
        default:
            $this->_elements[$elementId][$attribute] = $value;
            break;
    }
    return $this;
}
{% endhighlight %}


In this general case, if an exception is thrown in a sub-routine, then `@throws` must not be used in the parent method.

However, if the only purpose of the referred sub-routine is to throw a specific exception – then `@throws` must be used in the parent method.
For example:

**Throwing Exception Implicitly**


{% highlight php startinline=true %}
/**
 * Recursively delete directory from storage
 *
 * @param  string $path Target dir
 * @return void
 * @throws Mage_Core_Exception when directories cannot be deleted
 */
public function deleteDirectory($path)
{
    // prevent accidental root directory deleting
    $rootCmp = rtrim($this->getHelper()->getStorageRoot(), DS);
    $pathCmp = rtrim($path, DS);

    if ($rootCmp == $pathCmp) {
        Mage::throwException(Mage::helper('Mage_Cms_Helper_Data')->__('Cannot delete root directory %s.', $path));
    }

    $io = new Varien_Io_File();

    if (Mage::helper('Mage_Core_Helper_File_Storage_Database')->checkDbUsage()) {
        Mage::getModel('Mage_Core_Model_File_Storage_Directory_Database')->deleteDirectory($path);
    }
    if (!$io->rmdir($path, true)) {
        Mage::throwException(Mage::helper('Mage_Cms_Helper_Data')->__('Cannot delete directory %s.', $path));
    }

    if (strpos($pathCmp, $rootCmp) === 0) {
        $io->rmdir($this->getThumbnailRoot() . DS . ltrim(substr($pathCmp, strlen($rootCmp)), '\\/'), true);
    }
}
{% endhighlight %}


#### @return tag
{:#return}

If there is no explicit return statement in a method or function, a `@return void` should be used in the documentation.

If the method returns itself, `return $this` should be used.

### Constants
{:#constants}

Constants must have short description.

For example, a global constant:


{% highlight php startinline=true %}
/**
 * Directory separator shorthand
 */
define('DS', DIRECTORY_SEPARATOR);

Or constants in a class:
class Profiler
{
    /**
     * Separator literal to assemble timer identifier from timer names
     */
    const NESTING_SEPARATOR = '->';
{% endhighlight %}

### DocBlock templates
{:#DocBlock-templates}

DocBlock template is a DocBlock that starts from `/**#@+*/` and ends with `/**#@-*/`.
Templates are not supported by PHPDocumentor anymore. Therefore, they MUST NOT be used.

It's encouraged to replace existing DocBlock templates with regular DocBlock comments when the file is being modified.

## Structure of documentation space
{:#documentation-space}

`@category`, `@package`, and `@subpackage` MUST NOT be used.
Documentation is organized with the use of namespaces.

## Other DocBlock tags
{:#other-DocBlock-tags}

### @inheritdoc tag
{:#inheritdoc}

Whenever possible the `@inheritdoc` tag MUST be used for children to avoid duplication of doc blocks.

Even Though PHPDocumentor understands inheritance and uses the parent doc block by default (without `@inheritdoc` tag specified), including the tag helps ensure that the doc block is not missed at all.

Rules for usage of the tag:

* Use `@inheritdoc` (notice no braces around) to indicate that the entire doc block should be inherited from the parent method.
* Use the inline `{@inheritdoc}` tag (with braces around) in long descriptions to reuse the parent's long description. The tagged method MUST have its own short description.

**DocBlock for the Interface**
{% highlight php startinline=true %}
/**
 * Interface for mutable value object for integer values
 */
interface MutableInterface
{
    /**
     * Get value
     *
     * Returns 0, if no value is available
     *
     * @return int
     */
    public function getVal();

    /**
     * Set value
     *
     * Sets 0 in case a non-integer value is passed
     *
     * @param int $value
     */
    public function setVal($value);
}
{% endhighlight %}

**DocBlock for the implementation**
{% highlight php startinline=true %}
/**
 * Limited mutable value object for integer values
 */
class LimitedMutableClass implements MutableInterface
{
    /**
     * @inheritdoc
     */
    public function getVal()
    {
    }

    /**
     * Set value
     *
     * Sets 0 in case the value is bigger than max allowed value. {@inheritdoc}
     */
    public function setVal($value)
    {
    }
}
{% endhighlight %}

### @api tag
{:#api}

The `@api` tag indicates the code is part of the public API and is subject to the [Magento Backward Compatibility Policy]({{ page.baseurl }}/extension-dev-guide/backward-compatibility.html).

The `@api` tag can be applied to a constant, a method, or to the entire class/interface.
 If the `@api` tag is applied at the file level, then all methods within the file are part of the public {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}.
You do not need to annotate each method individually.

See [Semantic Versioning 2.0.0](http://semver.org/) for information about changing and updating code while maintaining backward compatibility.

### @deprecated tag
{:#deprecated}

A deprecated class or method is one that has been superseded and may cease to exist in the future.
 It will be retained to provide backward compatibility until next major component release.

Use the `@deprecated` tag to indicate an element is to be deprecated.

Motivation behind the added `@deprecated` tag MUST be explained.
`@see` tag MUST be used with reference to new implementation when code is deprecated and there is a new alternative.

For example:

{% highlight php startinline=true %}
/**
 * Get some object
 *
 * @deprecated Added to not break backward compatibility of the constructor signature
 *             by injecting the new dependency directly.
 *             The method can be removed in a future major release, when constructor signature can be changed
 * @return SomeObjectInterface
 */
protected function getSomeObject()
{
    ...
}

/**
 * Set price
 *
 * @deprecated Non-scoped price is not supported anymore
 * @see setScopedPrice()
 * @return void
 */
public function setPrice($price)
{
    ...
}

/**
 * Set price for specified scope
 *
 * @return void
 */
public function setScopedPrice($price, $scopeType, $scopeId)
{
    ...
}
{% endhighlight %}

### @var inline tag
{:#var}

For purpose of automatic type hinting in an IDE, an inline notation of `@var` tag can be used wherever the IDE is unable to resolve variable type.
This tag declares variables that will emerge in next lines of code as follows:

**Inline Type Hinting**


{% highlight php startinline=true %}
/** @var libXMLError $error */
foreach ($errors as $error) {
{% endhighlight %}


Some IDEs understand a different notation, where type is specified after variable name.
This notation is also valid:

**Inline Type Hinting Variation**


{% highlight php startinline=true %}
/** @var $error libXMLError */
foreach ($errors as $error) {
{% endhighlight %}

### @see tag
{:#see}

Besides the normal way of using `@see` tag as [recommended by phpDocumentor](http://www.phpdoc.org/docs/latest/references/phpdoc/tags/see.html), it may be used as an addition to `@var`, when the `@var` is already used in this comment.

Specifically, this is possible when a PHP-file composed from multiple file includes, as result variables may contain objects of different types depending on context:


{% highlight php startinline=true %}
/**
 * @var $this ClassOne
 * @see ClassTwo
 * @see FooInterface
 */
{% endhighlight %}

### Other tags
{:#other-tags}

Any other valid DocBlock tags may be specified, if author deems necessary, but only if they bring any valuable not obvious information.

## Formatting conventions
{:#format-conventions}

### Padding tags
{:#padding-tags}

If there are two or more tags together in one DocBlock, their values may be padded, so that they could be visually aligned.


{% highlight php startinline=true %}
/**
 * ...
 *
 * @param  string $argument
 * @return bool
 * @link   http://example.com
 */
{% endhighlight %}

### Formatting consistency
{:#format-consistency}

In a given DocBlock, style of formatting must be consistent.

For example, padding for visual alignment can be done in two ways consistently:

**Correct – align everything:**


{% highlight php startinline=true %}
/**
 * ...
 *
 * @param  string   $parentId
 * @param  string   $childId
 * @param  int|null $position
 * @return int
 * @see    _insertChild() for position explanation
 */
{% endhighlight %}


**Also correct – don't align anything:**


{% highlight php startinline=true %}
/**
 * ...
 *
 * @param string   $parentId
 * @param string   $childId
 * @param int|null $position
 * @return int
 * @see _insertChild() for position explanation
 */
public function reorderChild($parentId, $childId, $position)
{% endhighlight %}


**Incorrect – align only partially:**

{% highlight php startinline=true %}
/**
 * ...
 *
 * @param  string   $parentId
 * @param  string   $childId
 * @param  int|null $position
 * @return int
 * @see _insertChild() for position explanation
 */
{% endhighlight %}
