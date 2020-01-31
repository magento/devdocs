---
group: coding-standards
title: JavaScript coding standard
landing-page: Coding standards
functional_areas:
  - Standards
---

Use Magento's [ESLint Rules][eslint-rules] to make sure your code adheres to Magento's coding standards.
Developers writing [JavaScript](https://glossary.magento.com/javascript) and [jQuery](https://glossary.magento.com/jquery) code for Magento must adhere to these guidelines and follow the standards listed in this document.

Use [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt) to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.

Magento uses the [jQuery library][jquery] including standard and custom [jQuery widgets][jquery-widgets].
For the jQuery widget coding standard, see [jQuery widget coding standard][jquery-widget-coding-standard].

## Eslint and JSCS tools

Use [ESLint][eslint] and `JSCS` to ensure the quality of your JavaScript code.

ESLint is a community-driven tool that detects errors and potential problems in JavaScript code.
It can use custom rules to enforce specific coding standards.

*  [Magento ESLint Rules][eslint-rules]
*  [Magento JSCS Rules][jscs-rules]

## Additional formatting standards

### Anonymous function calls

When you declare an anonymous function as an argument in a function call, indent the body of the function by *four* spaces from the left edge of the statement or function [keyword](https://glossary.magento.com/keyword) to increase readability.

```javascript
myObject.myFunction(param1, function (a,b) {
    //Function logic
    return a > b;
});
```

### End of file

The last line in a file must end with a single linefeed(LF) character(i.e. an empty line).

This reduces the quantity of the changed lines in a diff and makes code safer in file concatenation processes.

### Indentation

Indentation in Magento code uses four spaces.

Tabs are not allowed as indentation.

#### Wrapped lines

Indent wrapped lines two spaces or left-aligned to the expression above.

### Max line length

The recommended max line length is 80 characters.

Source code lines must not exceed 120 characters.

Comment lines that contain an example command or a literal [URL](https://glossary.magento.com/url) longer than 120 characters may exceed the 120 character limit for ease of cutting and pasting.

Do not be concerned about header guards that exceed 120 characters.

### Line termination

Line termination follows the UNIX text file convention.

Lines must end with a single linefeed(LF) character represented as ordinal 10 or hexadecimal (`0x0A`).

*Do not* use carriage the Mac OS convention of carriage returns(CR or `0x0D`) or the carriage return-linefeed combination(CRLF or `0x0D` and `0x0A`) standard for Windows OS.

### Multi-line string literals

Use string concatenation for multi-line string literals:

```javascript
var myString = 'JavaScript was originally developed in Netscape, by Brendan Eich. ' +
    'Battling with Microsoft over the Internet, Netscape considered their client-server solution ' +
    'as a distributed OS, running a portable version of Sun Microsystem&#8217;s Java. ' +
    'Because Java was a competitor of C++ and aimed at professional programmers, ' +
    'Netscape also wanted a lightweight interpreted language that would complement Java ' +
    'by appealing to nonprofessional programmers, like Microsoft&#8217;s VB.[9] (see JavaScript and Java)';
```

### Parentheses

Use sparingly and in general where required by the syntax and semantics.

Never use parentheses for:

*  Unary operators (e.g. `delete`, `typeof`, and `void`)
*  After keywords such as `return`, `throw`
*  For `case`, `in`, or `new`, and others keywords like them

### Blocks

Use braces with all multiline blocks. May only omit braces if entire block can be written in one line and improves readability.

```javascript
// Wrong
if (true)
    blah();

function () { return false; }

// Correct
if (true) return;

if (true) {
    return;
}

if (true) {
    blah();
}

function () {
    return false;
}

```

### Semicolons

Always put semicolons as statement terminators.

The following code examples show the dangers of missing semicolons:

```javascript
// Example 1: JavaScript Error
MyClass.prototype.myMethod = function() {
    return 42;
}  // <-- Missing semicolon

(function() {
    // Some initialization code wrapped in a function to create a scope for locals.
})();
```

Since there is semicolon to end the first statement, the first function returns 42 and the script interprets 42 as a function.
When the script tries to call 42 as a function with the second function as a parameter, an error occurs.

```javascript
// Example 2: Trying to do one thing on Internet Explorer and another on Firefox.
var x = {
    'i': 1,
    'j': 2
 }  // <-- Missing semicolon

[normalVersion, ffVersion][isIE]();
```

A 'no such property in undefined' error appears during runtime when the script tries to call `x[ffVersion][isIE]()`.

```javascript

// Example 3: Conditional execution a la bash
var THINGS_TO_EAT = [apples, oysters, sprayOnCheese]  // <-- Missing semicolon

-1 == resultOfOperation() || die();

```

The script calls `die` unless `resultOfOperation)_` is `NaN` and assigns `THING_TO_EAT` the result of `die()`.

#### Explanation

JavaScript requires statements to end with a semicolon, except when it thinks it can safely infer their existence.

In each of the examples above, a function declaration, or an object, or an array literal is used inside a statement.

The closing brackets are not enough to indicate the end of the statement.
JavaScript never ends a statement if the next token is an infix or bracket operator.

### Strings

Use single quotes instead of double quotes for consistency.

This is helpful when creating strings that include HTML:
```javascript
var msg = '<span class="text">Hello World!</div>';
```

## Additional naming convention standards

### General naming conventions

*  Avoid underscores and numbers in names.
*  Variables or methods should have names that accurately describe their purpose or behavior.
*  Object methods or variables that are declared `private` or `protected` should start with an underscore(`_`).

### Functions and methods

*  Class method names should start with an English verb in its infinitive form that describes the method.
*  Names for accessors for instance or static variables should always have the `get` or `set` prefix.
*  In [design pattern](https://glossary.magento.com/design-pattern) classes, implementation method names should contain the pattern name where practical to provide better behavior description.
*  Methods that return status flags or Boolean values should have the `has` or `is` prefix.

### Variables and properties

*  Do not use short variable names such as `i` or `n` except in small loop contexts
*  If a loop contains more than 20 lines of code, the index variables should have more descriptive names.

## Additional coding construct standards

### Binary and ternary operators

Always put the operator on the preceding line to avoid implicit semi-colon insertion issues.

### Custom `toString()` method

This method must always succeed without side effects.

### Function declarations within blocks

Use a variable initialized with a function expression to define a function within a block.

```javascript
// Wrong
if (x) {
    function foo() {}
}

// Correct
if (x) {
    var foo = function() {}
}
```

### Exceptions and custom exceptions

You cannot avoid exceptions if you are doing something non-trivial (using an application development framework, and so on).

Without custom exceptions, returning error information from a function that also returns a value can be tricky, not to mention inelegant.
Bad solutions include passing in a reference type to hold error information or always returning Objects with a potential error member.

These basically amount to a primitive [exception](https://glossary.magento.com/exception) handling hack.
Feel free to use custom exceptions when appropriate.

### Standard features {#standard-features}

For maximum portability and compatibility, use standard features whenever possible.

For example, `string.charAt(3)` instead of `string[3]`, and element access with DOM functions instead of using an application-specific shorthand.

### Method definitions

There are several ways to attach methods and properties to a constructor, but the preferred style is:

```javascript
Foo.prototype.bar = function() {
    // ...
};
```

Do not use:

```javascript
Foo.prototype = {
    bar: function() {
        // ...
    },
    circle: function() {
        // ...
    }
};

```

Assignment operations to constructor prototypes creating temporal coupling and sometimes other unwanted side effects.

### Closures

A closure keeps a pointer to its enclosing scope, so attaching a closure to a DOM element can create a circular reference and thus, a memory leak.

```javascript
// Wrong
function foo(element, a, b) {
    element.onclick = function() {
      // uses a and b
    };
}
```

The function closure keeps references to elements "a" and "b" even if it never uses them.

Because elements also keep references to the closure, it is a cycle that will not be cleaned up by garbage collection.
In these situations, the code can be structured as follows:

```javascript
// Correct
function foo(element, a, b) {
    element.onclick = bar(a, b);
}

function bar(a, b) {
    return function() {
      // uses a and b
    }
}
```

## Additional general standards

### Array and object initializers

Single-line array and object initializers are allowed when they fit on a line as follows:

```javascript
    var arr = [1, 2, 3];  // No space after [ or before ].
    var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.
```

Long identifiers or values present problems for aligned initialization lists, so always prefer non-aligned initialization.

For example:

```javascript
Object.prototype = {
    a: 0,
    b: 1,
    lengthyName: 2
};
```

### Associative arrays

Use `Object` instead of `Array` for associative arrays.

### Deferred initialization

Use deferred initialization when it is not possible to initialize variables at the point of declaration.

### Explicit scope

Use explicit scope to increase code portability and clarity.

### Built-in objects

Modifying built-in like `Object.prototype` and `Array.prototype` is strictly forbidden.

Modifying other built-ins like `Function.prototype` is less dangerous but leads to debugging issue in production.

### Variable declarations

Declare a variable with `var` wherever possible to avoid overwriting existing global values.

Using only one var per scope promotes readability.

```javascript
var foo = 'bar',
    num = 1,
    arr = [1, 2, 3];
```

[jquery]: https://jquery.com/
[jquery-widgets]: http://api.jqueryui.com/category/widgets
[jquery-widget-coding-standard]: {{ page.baseurl }}/coding-standards/code-standard-jquery-widgets.html
[eslint]: http://eslint.org/
[eslint-rules]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc-magento
[jscs-rules]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/static/testsuite/Magento/Test/Js/_files/jscs/.jscsrc
