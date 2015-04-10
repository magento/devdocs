---
layout: default
group: coding-standards
subgroup: Coding standards
title: DocBlock standard
menu_title: DocBlock standard
menu_order: 5
github_link: coding-standards/docblock-standard-general.md
---

<h2 id="m2devgde-code-DocBlock-intro">Overview</h2>

<p>This standard defines Magento requirements and conventions for adding code inline documentation, known as <i>DocBlock</i>s.</p>
<p>Some parts of Magento code might not comply with this standard, but we are working to gradually improve this.</p>
<p>Following these standard is optional for third-party Magento developers, but doing so helps to create consistent, clean, and easy to read inline documentation.</p>
<p>Use <a href="http://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a> to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL keywords."</p>

<h2 id="scope">Scope of the standard</h2>

The goal of this standard is to unify usage of code DocBlocks for all files, not specific to a particular language. The following is assumed by default:

* Formatting according phpDocumentor standard
* Requirements apply for all files regardless of programming language, but a DocBlock standard for the particular language may override it.

<h2 id="files">Files</h2>

Each Magento source code file must have a DocBlock header with short description of the file. After the short description, there can be a long description.

Both short and long descriptions (for file headers and herein) must be separated from other elements using one empty line (implied empty line in terms of DocBlock syntax, where any line within DocBlock starts from `*`.

If description or short description happens to be the first one after DocBlock opening tag (`/**`) or last one before closing tag (`*/`), it should not be separated with an empty line.

**DocBlock Header in a PHP-file**

<pre>
&lt;?php
/**
 * Short description...
 *
 * Long description
 * Broken down into several lines
 *
 * License notice...
 */
 </pre>


**DocBlock Header in an XML-file**


<pre>
&lt;!--
/**
 * Short description...
 *
 * Long description
 * Broken down into several lines
 *
 * License notice...
 */
-->
</pre>


<h2 id="code-elements">Code structural elements</h2>

A structural element is defined in [phpDocumentor](http://phpdoc.org/) as part of imperative source code, such as PHP or JavaScript, or procedural SQL. For example: namespace, class, interface, function, property, method, and so on.

If the source code file has one and only one standalone structural element (class, interface, function, and so on), as it may be required by language-specific coding standard, the file DocBlock is to be reused for this element.

So in general case, classes that are declared in dedicated files, must have one DocBlock, which refers to the class and file at the same time.

**DocBlock for a Class**

<pre>
&lt;?php
/**
 * Autoloader with class map capability
 *
 * ...
 */
class Autoload
{
</pre>


But if along with declaring class or function there must be another file with source code included, the inclusion construct must not be before file header and it must not separate element DocBlock from the element. So there are two solutions possible:

* Have file header DocBlock separately, then inclusion construct, then a DocBlock for the element with duplicated short description.
* Or include after declaring the element (it is possible in PHP and won't cause issues before execution).

**DocBlock with Included Script File**


<pre>
&lt;?php
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
</pre>


**DocBlock with Included Class File**


<pre>
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
</pre>


<h3 id="classes-interfaces">Classes and interfaces</h3>

Classes and interfaces must have short description.

<h3 id="short-name-form">Short name form</h3>

It is encouraged to use the short form of the name to encourage readability and consistency with the type hint. The only exception is in the `Service/DTO` classes due to tooling requirements.

**Example of a Method DocBlock**


<pre>
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
 * @param Random $mathRandom
 * @param StdlibDateTime $dateTime
 * @param int $number
 */
protected function doSomething(Random $mathRandom, StdlibDateTime $dateTime, $number)
{

}
</pre>


<h3 id="class-attributes">Class attributes</h3>

Class attributes must have type declaration using `@var` tag.

**Example of Class Attribute**


<pre>
// ...
namespace Magento;

class Profiler
{
    /**
     * @var Profiler
     */
    protected static $_instance = null;
</pre>


<h3 id="functions-methods">Functions and methods</h3>

Functions and methods must have:

* Short description
* Declaration of all arguments (if any) using `@param` tag. Appropriate argument type must be specified.
* Declaration of return type using `@return` tag. If there is no such operator, the `@return` tag must have `void` as the return value.
* Declaration of possibly thrown exception using `@throws` tag, if the actual body of function triggers throwing an exception. All occurrences of `@throws` in a DocBlock must be after `@param` and `@return` (if any).

It is encouraged to supply `@para`m and `@throws` tags with additional description, which comes after the formal declaration of the tag.

**Example of a Method DocBlock**

<pre>
/**
 * Merge the config XML-files
 *
 * @param array $configFiles
 * @return void
 * @throws \Magento\Exception if a non-existing or invalid XML-file passed
 */
protected function _merge($configFiles)
{
    $domConfig = new \Magento\Config\Dom($this->_getInitialXml(), $this->_getIdAttributes());
    foreach ($configFiles as $file) {
        if (!file_exists($file)) {
            throw new \Magento\Exception("File does not exist: {$file}");
        }
        $domConfig->merge(file_get_contents($file));
        if (!$domConfig->validate($this->getSchemaFile(), $errors)) {
            $message = "Invalid XML-file: {$file}\n";
            /** @var libXMLError $error */
            foreach ($errors as $error) {
                $message .= "{$error->message} Line: {$error->line}\n";
            }
            throw new \Magento\Exception($message);
        }
    }
    $this->_dom = $domConfig->getDom();
}
</pre>


<h4 id="throws">Divergence in @throws tag</h4>

A general case when `@throws` tag must be used is if *throw* language construct is used – for example:

**Example of Throwing Exception Explicitly**


<pre>
/**
 * Set an arbitrary value to specified element
 *
 * @param string $elementId
 * @param string $attribute
 * @param mixed $value
 * @return Magento_Data_Structure
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
        default:
            $this->_elements[$elementId][$attribute] = $value;
    }
    return $this;
}
</pre>


In this general case, if an exception is thrown in a sub-routine, then `@throws` must not be used in the parent method.

However, if the only purpose of the referred sub-routine is to throw a specific exception – then `@throws` must be used in the parent method. For example:

**Throwing Exception Implicitly**


<pre>
/**
 * Recursively delete directory from storage
 *
 * @param string $path Target dir
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
</pre>


<h4 id="return">@return tag</h4>

If there is no explicit return statement in a method or function, a `@return void` should be used in the documentation.

If the method returns itself, `return $this` should be used.

<h3 id="constants">Constants</h3>

Constants must have short description.

For example, a global constant:


<pre>
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
</pre>


<h3 id="DocBlock-templates">DocBlock templates</h3>

If there is declaration of multiple consecutive elements of same type, the same contents of DocBlock may be relevant to all of them. In this case individual DocBlocks for those elements they may be replaced by a DocBlock template.

DocBlock template consists of two DocBlock comments:

* Starting comment is before first element of the group, distinguished using `#@+` and formatted as follows:

<pre>
/**#@+
 *
 */
</pre>

* Ending comment is after the last element of the group, distinguished using `#@-` and formatted as follows:`/**#@-*/`

For example, declaration of multiple class constants or attributes:


<pre>
class Mage_Core_Model_Layout extends Varien_Simplexml_Config
{
    /**#@+
     * Supported layout directives
     */
    const TYPE_BLOCK = 'block';
    const TYPE_CONTAINER = 'container';
    /**#@-*/

    /**#@+
     * Scheduled structure elements operations
     *
     * @var array
     */
    protected $_scheduledMoves = array();
    protected $_scheduledRemoves = array();
    /**#@-*/
    </pre>


<h2 id="documentation-space">Structure of documentation space</h2>

`@category`, `@package`, and `@subpackage` MUST NOT be used. Documentation is organized with the use of namespaces.

<h2 id="other-DocBlock-tags">Other DocBlock tags</h2>
<h3 id="api">@api tag</h3>
The `@api` tag indicates the code is part of the public API and is subject to the [Magento Backward Compatibility Policy](http://devdocs.magento.com/guides/v1.0/extension-dev-guide/bk-extension-dev-guide/backward-compatibility.html.html).

The `@api` tag can be applied to a constant, a method, or to the entire class/interface.  If the `@api` tag is applied at the file level, then all methods within the file are part of the public API. You do not need to annotate each method individually.

See [Semantic Versioning 2.0.0](http://semver.org/) for information about changing and updating code while maintaining backward compatibility.

<h3 id="deprecated">@deprecated tag</h3>

The `@deprecated` tag must be used for a structural element or file, if it is not used anymore and not supposed to be used anymore, but retained because of backwards compatibility requirements.

The value for tag must contain fully qualified version of product or component it belongs to, since which the element is deprecated:

`@deprecated since 1.2.0.0`

The `since` implies any version above the specified, not including it. Thus, in the example above the element is not deprecated in version 1.2.0.0, but in general case is deprecated in 1.2.0.1 or 1.3, and so on.

<h3 id="var">@var inline tag</h3>

For purpose of automatic type hinting in an IDE, an inline notation of `@var` tag can be used wherever the IDE is unable to resolve variable type. This tag declares variables that will emerge in next lines of code as follows:

**Inline Type Hinting**


<pre>
/** @var libXMLError $error */
foreach ($errors as $error) {
</pre>


Some IDEs understand a different notation, where type is specified after variable name. This notation is also valid:

**Inline Type Hinting Variation**


<pre>
/** @var $error libXMLError */
foreach ($errors as $error) {
</pre>


<h3 id="see">@see tag</h3>

Besides the normal way of using `@see` tag as [recommended by phpDocumentor](http://www.phpdoc.org/docs/latest/references/phpdoc/tags/see.html), it may be used as an addition to `@var`, when the `@var` is already used in this comment.

Specifically, this is possible when a PHP-file composed from multiple file includes, as result variables may contain objects of different types depending on context:


<pre>
/**
 * @var $this ClassOne
 * @see ClassTwo
 * @see FooInterface
 */
</pre>


<h3 id="other-tags">Other tags</h3>

Any other valid DocBlock tags may be specified, if author deems necessary, but only if they bring any valuable not obvious information.

<h2 id="format-conventions">Formatting conventions</h2>

<h3 id="padding-tags">Padding tags</h3>

If there are two or more tags together in one DocBlock, their values may be padded, so that they could be visually aligned.


<pre>
/**
 * ...
 *
 * @param  string $argument
 * @return bool
 * @link   http://example.com
 */
</pre>


<h3 id="format-consistency">Formatting consistency</h3>

In a given DocBlock, style of formatting must be consistent.

For example, padding for visual alignment can be done in two ways consistently:

**Correct – align everything:**


<pre>
/**
 * ...
 *
 * @param  string $parentId
 * @param  string $childId
 * @param  int|null $position
 * @return int
 * @see    _insertChild() for position explanation
 */
 </pre>


**Also correct – don't align anything:**


<pre>
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
</pre>


**Incorrect – align only partially:**

<pre>
/**
 * ...
 *
 * @param  string $parentId
 * @param  string $childId
 * @param  int|null $position
 * @return int
 * @see _insertChild() for position explanation
 */
</pre>


