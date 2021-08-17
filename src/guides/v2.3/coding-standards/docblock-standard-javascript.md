---
group: coding-standards
subgroup: 01_Coding standards
title: JavaScript DocBlock standard
landing-page: Coding standards
menu_title: JavaScript DocBlock standard
menu_order: 6
functional_areas:
  - Standards
---

## Introduction {#frontend-dev-guide-javascript-js-coding-docblock-overview}

To add [JavaScript](https://glossary.magento.com/javascript) code inline documentation, follow these guidelines. Some parts of Magento code may not comply with this standard, but we are working to gradually improve this. Following these standard is optional for 3rd-party Magento developers, but will help to create consistent, clean, and easy to read inline documentation.
This standard are a subset of [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml){:target="_blank"} regulations.

Use [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt) to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.

## Use JSDoc {#frontend-dev-guide-javascript-js-coding-docblock-use}

Document all files, classes, methods, and properties with JSDoc comments.

Inline comments should be of the "//" type.

It is recommended to avoid sentence fragments in documentation blocks. Use sentence-style capitalization and put a period at the end. Sentence fragmentation is acceptable in inline commentaries to keep it short.

### Comment syntax {#frontend-dev-guide-javascript-js-coding-docblock-syntax}

JSDoc comments requirements:

*  A JSDoc comment should begin with a slash (/) and two asterisks (*).
*  Inline tags should be enclosed in braces: `{ @code this }`.
*  `@desc` Block tags should always start on their own line.

Example:

```javascript
/**
* A testJSDoc comment should begin with a slash and 2 asterisks.
* Inline tags should be enclosed in braces like {@code this}.
* @desc Block tags should always start on their own line.
*/
```

Many tools extract [metadata](https://glossary.magento.com/metadata) from JSDoc comments to validate and optimize the code.

### JSDoc indentation {#frontend-dev-guide-javascript-js-coding-docblock-indentation}

If you have to line break a block tag, you should treat this as breaking a code statement and indent it four spaces.

```javascript
/**
 * Illustrates line wrapping for long param/return descriptions.
 *
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */
project.MyClass.prototype.method = function(foo) {
    return 5;
};
```

### Class comments {#frontend-dev-guide-javascript-js-coding-docblock-classcomments}

Classes must be documented with a description, and appropriate type tags.

```javascript
/**
 * Class making something fun and easy.
 * @param {string} arg1 An argument that makes this more interesting.
 * @param {Array.<number>} arg2 List of numbers to be processed.
 * @constructor
 */
project.MyClass = function(arg1, arg2) {
    // ...
};
```

### Method and function comments {#frontend-dev-guide-javascript-js-coding-docblock-methodcomments}

A description must be provided along with parameters. Method descriptions should start with a sentence written in the third person declarative voice.

```javascript
/**
 * Operates on an instance of MyClass and returns something.
 *
 * @param {project.MyClass} obj Instance of MyClass which leads to a long
 *     comment that needs to be wrapped to two lines.
 * @return {boolean} Whether something occurred.
 */
function someMethod(obj) {
    // ...
}
```

### Property comments {#frontend-dev-guide-javascript-js-coding-docblock-propertycomments}

```javascript
/**
 * Maximum number of things per pane.
 *
 * @type {number}
 */
project.MyClass.prototype.someProperty = 4;
```

### JSDoc tag reference {#frontend-dev-guide-javascript-js-coding-docblock-tagreference}

#### @const {#frontend-dev-guide-javascript-js-coding-docblock-const}

Marks a variable read-only and suitable for inlining. Generates warnings if it is rewritten. Constants should also be ALL_CAPS, but the annotation should help eliminate reliance on the naming convention.

```javascript
/** @const */ var DEFAULT_TIMEZONE = 'GMT';

/** @const */ MyClass.DEFAULT_TIMEZONE = 'GMT';

/**
 * My namespace's default timezone.
 *
 * @const
 * @type {string}
 */
mynamespace.DEFAULT_TIMEZONE = 'GMT';
```

#### @extends {#frontend-dev-guide-javascript-js-coding-docblock-extends}

Used with `@constructor` to indicate that a class inherits from another class.

```javascript
/**
 * Immutable empty node list.
 *
 * @constructor
 * @extends project.MyClass.BasicNodeList
 */
project.MyClass.EmptyNodeList = function() {
    // ...
};
```

#### @interface {#frontend-dev-guide-javascript-js-coding-docblock-interface}

Used to indicate that the function defines an interface.

```javascript
/**
 * A shape.
 *
 * @interface
 */
function Shape() {};
Shape.prototype.draw = function() {};

/**
 * A polygon.
 *
 * @interface
 * @extends {Shape}
 */
function Polygon() {};
Polygon.prototype.getSides = function() {};
```

#### @implements {#frontend-dev-guide-javascript-js-coding-docblock-implements}

Used with `@constructor` to indicate that a class implements an interface.

```javascript
/**
 * A shape.
 *
 * @interface
 */
function Shape() {};
Shape.prototype.draw = function() {};

/**
 * @constructor
 * @implements {Shape}
 */
function Square() {};
Square.prototype.draw = function() {
    // ...
};
```

#### @lends {#frontend-dev-guide-javascript-js-coding-docblock-lends}

Indicates that the keys of an object literal should be treated as properties of some other object. This annotation should only appear on object literals.

Please note that the name in braces is not a type name like in other annotations. It's an object name. It names the object on which the properties are "lent". For example, `@type {Foo}` means "an instance of Foo," but `@lends {Foo}` means "the constructor Foo".

Please refer to [JSDoc Toolkit](https://code.google.com/p/jsdoc-toolkit/wiki/TagLends) for more information about this annotation.

```javascript
project.MyClass.extend(
    Button.prototype,
    /** @lends {Button.prototype} */ {
        isButton: function() {return true;}
    }
);
```

#### @override {#frontend-dev-guide-javascript-js-coding-docblock-override}

Indicates that a method or property of a subclass intentionally hides a method or property of the superclass. If no other documentation is included, the method or property also inherits documentation from its superclass.

```javascript
/**
 * @return {string} Human-readable representation of project.SubClass.
 * @override
 */
project.SubClass.prototype.toString() {
    // ...
};
```

#### @param {#frontend-dev-guide-javascript-js-coding-docblock-param}

Used with method, function and constructor calls to document the arguments of a function.

Type names must be enclosed in curly braces. If the type is omitted, the compiler will not type-check the parameter.

```javascript
/**
 * Queries a Storage for items.
 *
 * @param {number} groupNum Subgroup id to query.
 * @param {string|number|null} term An itemName,
 *     or itemId, or null to search everything.
 */
[namespace](https://glossary.magento.com/namespace).Storage.prototype.query = function(groupNum, term) {
   // ...
};
```

#### @return {#frontend-dev-guide-javascript-js-coding-docblock-return}

Used with method and function calls to document the return type. When writing descriptions for boolean parameters, prefer "Whether the component is visible" to "True if the component is visible, false otherwise". If there is no return value, do not use an `@return` tag.

Type names must be enclosed in curly braces. If the type is omitted, the compiler will not type-check the return value.

```javascript
/**
 * @return {string} The hex ID of the last item.
 */
namespace.Storage.prototype.getLastId = function() {
    // ...
    return id;
};
```

#### @this {#frontend-dev-guide-javascript-js-coding-docblock-this}

The type of the object in whose context a particular method is called. Required when the this [keyword](https://glossary.magento.com/keyword) is referenced from a function that is not a prototype method.

```javascript
pinto.chat.RosterWidget.extern('getRosterElement',
    /**
     * Returns the roster widget element.
     *
     * @this pinto.chat.RosterWidget
     * @return {Element}
     */
    function() {
        return this._getWrappedComponent().getElement();
    }
);
```

#### @type {#frontend-dev-guide-javascript-js-coding-docblock-type}

Identifies the type of a variable, property, or expression.

```javascript
/**
 * The message hex ID.
 *
 * @type {string}
 */
var hexId = hexId;
```

#### @typedef {#frontend-dev-guide-javascript-js-coding-docblock-typedef}

This annotation can be used to declare an alias of a more complex type.

```javascript
/** @typedef {(string|number)} */
namespace.NumberLike;

/** @param {namespace.NumberLike} x A number or a string. */
namespace.readNumber = function(x) {
    // ...
}
```

### JavaScript types {#frontend-dev-guide-javascript-js-coding-docblock-jstypes}

<table>
   <tbody>
   <tr>
      <th>Type example</th>
      <th>Value example</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>number</td>
      <td><pre>1
1.0
-5
1e5
Math.PI</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>Number</td>
      <td><pre>new Number(true)</pre></td>
      <td>Number object</td>
   </tr>
   <tr>
      <td>string</td>
      <td><pre>'Hello'
"World"
String(42)</pre></td>
      <td>String value</td>
   </tr>
   <tr>
      <td>String</td>
      <td><pre>new String('Hello')
new String(42)</pre></td>
      <td>String object</td>
   </tr>
   <tr>
      <td>boolean</td>
      <td><pre>true
false
Boolean(0)</pre></td>
      <td>Boolean value</td>
   </tr>
   <tr>
      <td>Boolean</td>
      <td><pre>new Boolean(true)</pre></td>
      <td>Boolean object</td>
   </tr>
   <tr>
      <td>RegExp</td>
      <td><pre>new RegExp('hello')
/world/g</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>Date</td>
      <td><pre>new Date
new Date()</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>null</td>
      <td><pre>null</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>undefined</td>
      <td><pre>undefined</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>void</td>
      <td><pre>function f() {
   return;
}</pre></td>
      <td>No return value</td>
   </tr>
   <tr>
      <td>Array</td>
      <td><pre>['foo', 0.3, null]
[]</pre></td>
      <td>Untyped Array</td>
   </tr>
   <tr>
      <td>Array.&lt;number></td>
      <td><pre>[11, 22, 33]</pre></td>
      <td>An array of numbers</td>
   </tr>
   <tr>
      <td>Array.<Array.&lt;string>></td>
      <td><pre>[['one', 'two', 'three'], ['foo', 'bar']]</pre></td>
      <td>Array of arrays of strings</td>
   </tr>
   <tr>
      <td>Object</td>
      <td><pre>{}
{foo: 'abc', bar: 123, baz: null}</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>Object.&lt;string></td>
      <td><pre>{'foo': 'bar'}</pre></td>
      <td>An object. In the object, the values are strings.</td>
   </tr>
   <tr>
      <td>Object.<number, string></td>
      <td><pre>var obj = {};
obj[1] = 'bar';</pre></td>
      <td>An object. In the object, the keys are numbers and the values are strings.
Note that in JavaScript, the keys are always implicitly converted to strings, so obj['1'] == obj[1].
So the key will always be a string in for...in loops. But the compiler will verify the type if the key when indexing into the object.</td>
   </tr>
   <tr>
      <td>Function</td>
      <td><pre>function(x, y) {
   return x &#42; y;
}</pre></td>
      <td>Function object</td>
   </tr>
   <tr>
      <td>function(number, number): number</td>
      <td><pre>function(x, y) {
   return x &#42; y;
}</pre></td>
      <td>function value</td>
   </tr>
   <tr>
      <td>SomeClass</td>
      <td><pre>/** @constructor */
function SomeClass() {}

new SomeClass();</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>SomeInterface</td>
      <td><pre>/** @interface */
function SomeInterface() {}

SomeInterface.prototype.draw = function() {};</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>project.MyClass</td>
      <td><pre>/** @constructor */
project.MyClass = function () {}

new project.MyClass()</pre></td>
      <td></td>
   </tr>
   <tr>
      <td>Element</td>
      <td><pre>document.createElement('div')</pre></td>
      <td>Elements in the DOM.</td>
   </tr>
   <tr>
      <td>Node</td>
      <td><pre>document.body.firstChild</pre></td>
      <td>Nodes in the DOM.</td>
   </tr>
   <tr>
      <td>HTMLInputElement</td>
      <td><pre>htmlDocument.getElementsByTagName('input')[0]</pre></td>
      <td>A specific type of DOM element.</td>
   </tr>
  </tbody>
</table>

#### JavaScript type language {#frontend-dev-guide-javascript-js-coding-docblock-typelang}

<table>
   <tbody>
      <tr>
         <th>
            Operator name
         </th>
         <th>
            Syntax
         </th>
         <th>
            Description
         </th>
         <th>
            Deprecated syntaxes
         </th>
      </tr>
      <tr>
         <td>
            Type Name
         </td>
         <td>
            <code>{boolean}, {Window}, {namespace.ui.Menu}</code>
         </td>
         <td>
            Simply the name of a type.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Type Application
         </td>
         <td>
            <code>{Array. &lt;string&gt;}</code><br />
            An array of strings.<br />
            <code>{Object. }</code><br />
            An object. In the object, the keys are strings and the
            values are numbers.
         </td>
         <td>
            Parametrizes a type, by applying a set of type arguments to
            that type. The idea is analogous to generics in Java.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Type Union
         </td>
         <td>
            <code>{(number|boolean)}</code><br />
            A number or a boolean.
         </td>
         <td>
            Indicates that a value might have type A OR type B.
         </td>
         <td>
            <code>{(number,boolean)}, {number|boolean},
               {(number||boolean)}</code>
         </td>
      </tr>
      <tr>
         <td>
            Record Type
         </td>
         <td>
            <code>codemyNum: number, myObject}}</code><br />
            An anonymous type with the given type members.
         </td>
         <td>
            Indicates that the value has the specified members with the
            specified types. In this case, <code>myNum</code> with a
            type <code>number</code> and <code>myObject</code> with any
            type. Note that the braces are part of the type syntax. For
            example, to denote an <code>Array</code> of objects that
            have a <code>length</code> property, you might write
            <code>Array.&lt;{length}&gt;</code>.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Nullable type
         </td>
         <td>
            <code>{?number}</code><br />
            A number or NULL.
         </td>
         <td>
            Indicates that a value is type A or <code>null</code>. By
            default, all object types are nullable. NOTE: Function
            types are not nullable.
         </td>
         <td>
            <code>{number?}</code>
         </td>
      </tr>
      <tr>
         <td>
            Non-nullable type
         </td>
         <td>
            <code>{!Object}</code><br />
            An Object, but never the null value.
         </td>
         <td>
            Indicates that a value is type A and not null. By default,
            all value types (boolean, number, string, and undefined)
            are not nullable.
         </td>
         <td>
            <code>{Object!}</code>
         </td>
      </tr>
      <tr>
         <td>
            Function Type
         </td>
         <td>
            <code>{function(string, boolean)}</code><br />
            A function that takes two arguments (a string and a
            boolean), and has an unknown return value.
         </td>
         <td>
            Specifies a function.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Function Return Type
         </td>
         <td>
            <code>{function(): number}</code><br />
            A function that takes no arguments and returns a number.
         </td>
         <td>
            Specifies a function return type.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Function <code>this</code> Type
         </td>
         <td>
            <code>{function(this:namespace.ui.Menu,
               string)}</code><br />
            A function that takes one argument (a string), and executes
            in the context of a namespace.ui.Menu.
         </td>
         <td>
            Specifies the context type of a function type.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Function <code>new</code> Type
         </td>
         <td>
            <code>{function(new:namespace.ui.Menu,
               string)}</code><br />
            A constructor that takes one argument (a string), and
            creates a new instance of namespace.ui.Menu when called
            with the 'new' keyword.
         </td>
         <td>
            Specifies the constructed type of a constructor.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Variable arguments
         </td>
         <td>
            <code>{function(string, ...[number]): number}</code><br />
            A function that takes one argument (a string), and then a
            variable number of arguments that must be numbers.
         </td>
         <td>
            Specifies variable arguments to a function.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Variable arguments (in <code>@param/</code> annotations)
         </td>
         <td>
            <code>@param {...number} var_args</code><br />
            A variable number of arguments to an annotated function.
         </td>
         <td>
            Specifies that the annotated function accepts a variable
            number of arguments.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Function optional arguments
         </td>
         <td>
            <code>{function(?string=, number=)}</code><br />
            A function that takes one optional, nullable string and one
            optional number as arguments. The = syntax is only for
            <code>function</code> type declarations.
         </td>
         <td>
            Specifies optional arguments to a function.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            Function optional arguments (in <code>@param</code>
            annotations)
         </td>
         <td>
            <code>@param {number=} opt_argument</code><br />
            An optional parameter of type number.
         </td>
         <td>
            Specifies that the annotated function accepts an optional
            argument.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            The ALL type
         </td>
         <td>
            <code>{*}</code>
         </td>
         <td>
            Indicates that the variable can take on any type.
         </td>
         <td></td>
      </tr>
      <tr>
         <td>
            The UNKNOWN type
         </td>
         <td>
            <code>{?}</code>
         </td>
         <td>
            Indicates that the variable can take on any type, and the
            compiler should not type-check any uses of it.
         </td>
         <td></td>
      </tr>
   </tbody>
</table>