---
group: coding-standards
subgroup: 01_Coding standards
title: DocBlock standard
functional_areas:
  - Standards
---

This standard defines Magento requirements and conventions for adding inline code documentation, known as *DocBlock*s.

Some parts of Magento code might not comply with this standard, but we are working to improve this.

Following these standards is optional for third-party Magento developers, but doing so helps to create consistent, clean, and easy to read inline documentation.

Use [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt) to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL keywords."

## Scope of the standard {#scope}

The goal of this standard is to unify usage of code DocBlocks for all files, not specific to a particular language.

The following is assumed by default:

*  Formatting according to the [phpDocumentor](https://docs.phpdoc.org/latest/references/phpdoc/basic-syntax.html#what-is-a-docblock){:target="_blank"} standard
*  Requirements apply for all files regardless of programming language, but a DocBlock standard for the particular language may override it.

## General principles

The documentation should follow two simple principles:

1. Be as short as possible.
1. Include all necessary information without duplication.

### Short documentation

The documentation should be as short as possible, while including all necessary details.

Below are ways of improving code to help simplify documentation:

*  Make code self-explanatory.
*  Put all possible information in the names of classes, methods, and variables. (e.g. use `$timeInSec` instead of `$time`)
*  Break down a method into smaller methods with descriptive names.
   For example:

   ```php
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
   ```

### Include all necessary details

1. Identify the details a developer needs to work with your code.
1. Ignore the implementation details (i.e. private methods/properties and method bodies) and focus on what the public interface signature provides.
   If possible, improve the interface to provide more information.

1. Add any remaining information that a developer may need to the DocBlock.

## Files

Each Magento source code file must have a DocBlock header with a short description of the file.
After the short description, there can be a long description.

Both short and long descriptions (for file headers and herein) must be separated from other elements using one empty line (implied empty line in terms of DocBlock syntax, where any line within DocBlock starts from `*`.

If the description or short description happens to be the first one after the DocBlock opening tag (`/**`) or last one before the closing tag (`*/`), it should not be separated with an empty line.

**DocBlock Header in a PHP-file:**

```php
/**
 * Short description...
 *
 * Long description
 * Broken down into several lines
 *
 * License notice...
 */
```

**DocBlock Header in an XML-file:**

```xml
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
```

### License Notice and Copyright

 {:.bs-callout-info}
This section is applicable to Magento core files only. Please follow it if you are a contributing developer.

Any file in the Magento source should have a header with license and copyright notice.
Exceptions are files with formats that do not support commenting.

License notice and copyright MUST be declared at the very beginning of the file.
If the file contains a structural element (for example, a class), the description for the element should be declared as a separate DocBlock.

Use the following templates for the license notice and copyright blocks:

**Template for PHP files:**

```php
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
```

**Template for [XML](https://glossary.magento.com/xml) Files:**

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
```

**Template for JS Files:**

```javascript
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
```

## Code structural elements {#code-elements}

A structural element is defined in [phpDocumentor](http://phpdoc.org/) as part of the imperative source code, such as PHP or JavaScript, or procedural SQL.
For example:

*  namespace
*  class
*  interface
*  function
*  property
*  method

If the source code file has one and only one standalone structural element, as may be required by language-specific coding standard, the file DocBlock is to be reused for this element.

Therefore, classes that are declared in dedicated files must have either no DocBlock or exactly one DocBlock, which refers to the class and file at the same time.

**DocBlock for a Class:**

```php
/**
 * Autoloader with class map capability
 *
 * ...
 */
class Autoload
{
```

While declaring classes or functions, if there must be another file with source code included, the inclusion construct must not be before file header and it must not separate the element DocBlock from the element.
There are two solutions possible:

*  Have the file header DocBlock separately, then inclusion construct, then a DocBlock for the element with duplicated short description.
*  Include it after declaring the element (it is possible in PHP and will not cause issues before execution).

**DocBlock with Included Script File:**

```php
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
```

**DocBlock with Included Class File:**

```php
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
```

### Classes and interfaces {#classes-interfaces}

Classes and interfaces should have a short description with a human-readable description of the class.
If the short description adds no additional information beyond what the type name already supplies, the
short description must be omitted.

**Good:**

> Handler for PHP errors/warnings/notices that converts them to exceptions.
> class ErrorHandler { ... }

**Bad:**

> Error Handler
> class ErrorHandler { ... }

If possible, add use cases which suggests where developers can or cannot use the class.

### Short name form

It is encouraged to use the short form of the name to encourage readability and consistency with the type hint.
The only [exception](https://glossary.magento.com/exception) is in the `Service/DTO` classes due to tooling requirements.

**Example of a Method DocBlock:**

```php
use Magento\Logger;
use Magento\Math\Random;
use Magento\Stdlib\DateTime as StdlibDateTime;

/**
 * @var Logger
 */
private $logger;

/**
 * Description of method here.
 *
 * @param Random         $mathRandom
 * @param StdlibDateTime $dateTime
 * @param int            $number
 */
private function doSomething(Random $mathRandom, StdlibDateTime $dateTime, $number)
{

}
```

### Class attributes

Class attributes must have a type declaration using `@var` tag.

**Example of Class Attribute:**

```php
// ...
namespace Magento;

class Profiler
{
    /**
     * @var Profiler
     */
    protected static $instance = null;
```

### Functions and methods {#functions-methods}

In general, a typed method signature must be preferred over PHPDoc annotations whenever possible.

Functions and methods should have:

*  A short description that adds meaningful information beyond the method name.
*  If the purpose of the method is not obvious, a long description that explains the motivation behind the implementation.
   The comment must describe why method is implemented and not how.
   For example:

   *  If a workaround or hack is implemented, explain why it is necessary and include any other details necessary to understand the algorithm.
   *  For non-obvious implementations where the implementation logic is complicated or does not correspond to the Technical Vision or other known best practices,     include an explanation in the doc block's description.
     An implementation is non-obvious if another developer has questions about it.

*  The declaration of all arguments (if any) using the `@param` tag, unless the argument type is indicated in the method signature.

   All `@param` annotations must include the appropriate argument type. If any argument requires a `@param` annotation, all arguments must be listed (all or none). `@param` annotations must be in the same order as the method arguments.

*  The declaration of the return type using the `@return` tag must only be added if the method return type signature does not supply all necessary information (see below for more information on return types).
*  A declaration of possible exceptions using the `@throws` tag, if the actual body of function triggers an exception.
   All occurrences of `@throws` in a DocBlock must be after `@param` and `@return` annotations.

**Exceptions to these rules:**

*  Testing methods in Unit tests may have doc blocks to describe the purpose of the test, such as referencing Github issues.
*  Test method annotations may include data providers and other testing annotations.

#### Things to include

*  An explanation of input arguments and return values if it is not obvious from their name and type.

   This is applicable in the following cases:

   *  There is more than one possible input/output type.

      For example: `@return Config|null`.
      The DocBlock should explain what situations will return `null`.

      Another example: `@param FileInterface|null`.
      The DocBlock should explain what happens when the value of the parameter is `null`.

      Ideally, implementations such as these should be avoided:

   *  The input/output type is a simple type and the format is not clear from the name.
   *  The input/output is an array with a specific structure.

*  The intent of the method along with when or where it can be used.
*  If an exception is thrown by a method, explain the cause or situation.
*  If the input is confusing or complicated, add examples of the method's usage in client code or examples of the argument.

#### Things to avoid

*  Copying the algorithm. The algorithm must be self-explanatory and understood by reviewing the code and unit tests.
*  Information that is out of date or has the potential to become out of date.

**Example of a Method DocBlock:**

```php
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
```

#### Divergence in @throws tag {#throws}

In general, use the `@throws` tag when the code uses *throw*:

**Example of Throwing Exception Explicitly:**

```php
/**
 * Set an arbitrary value to specified element
 *
 * @param  string $elementId
 * @param  string $attribute
 * @param  int|string|float|bool|object|null  $value
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
```

In this case, if an exception is thrown in a sub-routine, then `@throws` must not be used in the parent method.

However, if the only purpose of the referred sub-routine is to throw a specific exception – then `@throws` must be used in the parent method.
For example:

**Throwing Exception Implicitly:**

```php
    /**
     * Perform login process
     *
     * @param string $username
     * @param string $password
     * @return void
     * @throws \Magento\Framework\Exception\AuthenticationException
     */
    public function login($username, $password)
    {
        if (empty($username) || empty($password)) {
            self::throwException(
                __(
                    'The account sign-in was incorrect or your account is disabled temporarily. '
                    . 'Please wait and try again later.'
                )
            );
        }

        try {
            $this->_initCredentialStorage();
            $this->getCredentialStorage()->login($username, $password);
            if ($this->getCredentialStorage()->getId()) {
                $this->getAuthStorage()->setUser($this->getCredentialStorage());
                $this->getAuthStorage()->processLogin();

                $this->_eventManager->dispatch(
                    'backend_auth_user_login_success',
                    ['user' => $this->getCredentialStorage()]
                );
            }

            if (!$this->getAuthStorage()->getUser()) {
                self::throwException(
                    __(
                        'The account sign-in was incorrect or your account is disabled temporarily. '
                        . 'Please wait and try again later.'
                    )
                );
            }
        } catch (PluginAuthenticationException $e) {
            $this->_eventManager->dispatch(
                'backend_auth_user_login_failed',
                ['user_name' => $username, 'exception' => $e]
            );
            throw $e;
        } catch (\Magento\Framework\Exception\LocalizedException $e) {
            $this->_eventManager->dispatch(
                'backend_auth_user_login_failed',
                ['user_name' => $username, 'exception' => $e]
            );
            self::throwException(
                __(
                    $e->getMessage()? : 'The account sign-in was incorrect or your account is disabled temporarily. '
                        . 'Please wait and try again later.'
                )
            );
        }
    }
```

#### @return tag {#return}

In general, method return type signatures should be prefered over `@return` type annotations.
If that is not possible due to ambiguous return types or backward compatibility constraints, the `@return` type annotation must be used.
If there is no explicit return statement in a method or function or a return statement without a value, a `void` return type must be declared in the method signature. For example:

```php
function setName(string $name): void
{
   $this->name = $name;
}
```

If the method returns itself, the method signature return type must be `self`. Here is an example:

```php
function withField(string $fieldName): self
{
   $this->fields[] = $fieldName;
   return $this;
}
```

If for backward compatibility reasons, no return type can be added to the method signature, a `@return $this` annotation must be used.

### Constants

Constants may have a short description.
If the short description adds no additional information beyond what the constant name already supplies, the
short description must be omitted.

For example, a global constant:

```php
/**
 * Directory separator shorthand, intended to make code more readable.
 */
define('DS', DIRECTORY_SEPARATOR);
```

Or constants in a class:

```php
class Profiler
{
    /**
     * Separator literal to assemble timer identifier from timer names
     */
    const NESTING_SEPARATOR = '->';
```

### DocBlock templates

A DocBlock template is a DocBlock that starts from `/**#@+*/` and ends with `/**#@-*/`.
Templates are no longer supported by PHPDocumentor. Therefore, they MUST NOT be used.

It is encouraged to replace existing DocBlock templates with regular DocBlock comments when the file is being modified.

## Structure of documentation space {#documentation-space}

`@author` ,`@category`, `@package`, and `@subpackage` MUST NOT be used.
Documentation is organized with the use of namespaces.

## Other DocBlock tags

### @inheritdoc tag {#inheritdoc}

The `@inheritdoc` tag SHOULD NOT be used.
If a child class method requires a long description to explain its purpose, it may use `@inheritdoc` to indicate the new description is intended as an addition to the parent method description.
In general, such method overrides are a [code smell](https://en.wikipedia.org/wiki/Code_smell) and should be used as an incentive to make the code more self-documenting if possible.

**DocBlock for the Interface:**

```php
/**
 * Interface for mutable value object for integer values
 */
interface MutableInterface
{
    /**
     * Returns 0, if no value is available
     */
    public function getVal(): int;

    /**
     * Sets 0 in case a non-integer value is passed
     *
     * @param int|string|bool|float|null $value
     */
    public function setVal($value): void;
}
```

**DocBlock for the implementation:**

```php
/**
 * Limited mutable value object for integer values
 */
class LimitedMutableClass implements MutableInterface
{
    /**
     * Returns integer value
     */
    public function getVal(): int
    {
        ...
    }

    /**
     * Sets 0 in case a non-integer value is passed
     *
     * @param int|string|bool|float|null $value
     */
    public function setVal($value): void
    {
        ...
    }
}
```

### @api tag {#api}

The `@api` tag indicates the code is part of the public API and is subject to the [Magento Backward Compatibility Policy]({{ site.baseurl }}/contributor-guide/backward-compatible-development/).

The `@api` tag can be applied to a constant, a method, or to the entire class/interface.
If the `@api` tag is applied at the file level, then all methods within the file are part of the public [API](https://glossary.magento.com/api).
You do not need to annotate each method individually.

See [Semantic Versioning 2.0.0](http://semver.org/) for information about changing and updating code while maintaining backward compatibility.

### @deprecated tag {#deprecated}

A deprecated class or method is one that has been superseded and may cease to exist in the future.
It will be retained to provide backward compatibility until the next major component release.

Use the `@deprecated` tag to indicate that an element is to be deprecated.

You must explain why you added `@deprecated` tag.
You MUST use the `@see` tag with references to the new implementation when code is deprecated and there is a new alternative.

For example:

```php
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
```

### @var inline tag {#var}

For the purpose of automatic type hinting in an IDE, an inline notation of `@var` tag can be used wherever the IDE is unable to resolve variable type.
This tag declares variables that will emerge in following lines of code:

**Inline Type Hinting:**

```php
/** @var libXMLError $error */
foreach ($errors as $error) {
```

Some IDEs understand a different notation, where the type is specified after variable name.
This notation is also valid:

**Inline Type Hinting Variation:**

```php
/** @var $error libXMLError */
foreach ($errors as $error) {
```

### @see tag {#see}

Besides the normal way of using `@see` tags as [recommended by phpDocumentor](https://manual.phpdoc.org/HTMLSmartyConverter/HandS/phpDocumentor/tutorial_tags.see.pkg.html), it may be used as an addition to `@var`, when the `@var` is already used in this comment.

Specifically, this is possible when a PHP file is composed from multiple file includes. As a result, variables may contain objects of different types depending on context:

```php
/**
 * @var $this ClassOne
 * @see ClassTwo
 * @see FooInterface
 */
```

### @method tag {#method}

The `@method` allows a class to know which ‘magic’ methods are callable.

Syntax:

```bash
@method [[static] return type] [name]([[type] [parameter]<, ...>]) [<description>]
```

See [PHP documentation](https://manual.phpdoc.org/HTMLSmartyConverter/PHP/phpDocumentor/tutorial_tags.method.pkg.html) for more information about the `@method` tag.

```php
/**
 * Image operations
 *
 * @method string getFile()
 * @method string getLabel()
 * @method string getPosition()
 */
class Image extends \Magento\Framework\Model\AbstractModel
{
    //.....
}
```

### @link tag {#link}

The `@link` tag indicates a custom relation between the associated Structural Elements and a website, identified by an absolute URI.

Syntax:

```bash
@link [URI] [<description>]
```

### Other tags

Any other valid DocBlock tags may be specified, if the author deems it necessary, but only if they bring valuable non-obvious information.

## Formatting conventions {#format-conventions}

### Padding tags

If there are two or more tags together in one DocBlock, their values may be padded, so that they could be visually aligned.

```php
/**
 * ...
 *
 * @param  string $argument
 * @return bool
 * @link   http://example.com
 */
```

### Formatting consistency {#format-consistency}

In a given DocBlock, the formatting style must be consistent.

For example, padding for visual alignment can be done in two ways:

**Correct – align everything:**

```php
/**
 * ...
 *
 * @param  string   $parentId
 * @param  string   $childId
 * @param  int|null $position
 * @return int
 * @see    _insertChild() for position explanation
 */
```

**Also correct – do not align anything:**

```php
/**
 * ...
 *
 * @param string $parentId
 * @param string $childId
 * @param int|null $position
 * @return int
 * @see _insertChild() for position explanation
 */
public function reorderChild($parentId, $childId, $position)
```

**Incorrect – align only partially:**

```php
/**
 * ...
 *
 * @param  string   $parentId
 * @param  string   $childId
 * @param  int|null $position
 * @return int
 * @see _insertChild() for position explanation
 */
```
