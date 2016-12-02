---
layout: default
group: coding-standards
subgroup: Coding standards
title: JavaScript coding standard
menu_title: JavaScript coding standard
menu_order: 5
version: 2.0
github_link: coding-standards/code-standard-javascript.md
redirect_from: /guides/v1.0/coding-standards/code-standard-javascript.html
---

The JavaScript coding standard, based on the <a href="https://google.github.io/styleguide/javascriptguide.xml" target="_blank">Google JavaScript Style Guide</a>, defines Magento requirements for code formatting and style for teams that develop Magento JavaScript and jQuery code.

Use <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a> to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.

The Magento system uses the jQuery library including the standard and custom <a href="http://api.jqueryui.com/category/widgets" target="_blank">jQuery widgets</a>. For the jQuery widget coding standard, see <a href="{{page.baseurl}}coding-standards/code-standard-jquery-widgets.html">jQuery widget coding standard</a>.

Some parts of Magento code might not comply with this coding standard.

This coding standard is recommended for third-party Magento developers.

## JSHint tool {#fedg_js-coding_JSHint}
Use <a href="http://www.JSHint.com" target="_blank">JSHint</a> to ensure the quality of your JavaScript code.

JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. Its flexibility enables you to customize it to your coding standard and expected code execution environment. jQuery core passes JSHint.

## Formatting {#fedg_js-coding-format}
See one of the following sections:

* [Anonymous functions](#fedg_js-coding_codestyle_anon)
* [End of file](#fedg_js-coding-format_eof)
* [Function arguments](#fedg_js-coding_codestyle_funcargs)
* [Indentation](#fedg_js-coding-format_indent)
* [Indent wrapped lines](#fedg_js-coding_codestyle_indent)
* [Line length](#fedg_js-coding-format_length)
* [Line termination](#fedg_js-coding-format_terminate)
* [Multiline string literals](#fedg_js-coding-format_multilit)
* [Parentheses](#fedg_js-coding-format_multilit)
* [Statements and conditions](#fedg_js-coding_codestyle_stmt)
* [Strings](#strings)

### Anonymous functions {#fedg_js-coding_codestyle_anon}
When you declare an anonymous function in the list of arguments for a function call, indent the body of the function four spaces from the left edge of the statement, or four spaces from the left edge of the function keyword.

This makes the body of the anonymous function easier to read.

<script src="https://gist.github.com/xcomSteveJohnson/c581af6207bdde9af98d.js"></script>

### End of file {#fedg_js-coding-format_eof}
The last line in a file also must end with a single linefeed (LF) character.

In other words, a file always ends with an empty line. This reduces quantity of the changed lines in a diff and makes code safer in files concatenation process.

### Function arguments {#fedg_js-coding_codestyle_funcargs}
When possible, list all function arguments on the same line.

If doing so exceeds the 120-column limit, you must line-wrap the arguments in a readable way.

To save space, try to wrap as close to 80 columns as possible (remember 120-column limit), or put each argument on its own line to enhance readability.

The indentation should be four spaces.

The following patterns are the most common patterns for argument wrapping:

<script src="https://gist.github.com/xcomSteveJohnson/24f35ae60144d5210737.js"></script>

### Indentation {#fedg_js-coding-format_indent}
Indentation should consist of four spaces.

Tabs are not allowed.

### Indent wrapped lines {#fedg_js-coding_codestyle_indent}
You should indent all wrapped lines to be left-aligned to the expression above, or indented four spaces.

<script src="https://gist.github.com/xcomSteveJohnson/19982fe652f3455394f6.js"></script>

### Line length {#fedg_js-coding-format_length}
Source code line length must not exceed 120 characters.

Recommended line length is 80 characters.

<div class="bs-callout bs-callout-info" id="info">
   <ul>
      <li>If a comment line contains an example command or a literal URL longer than 120 characters, that line can be longer than 120 characters for ease of cutting and pasting.</li>
      <li>Do not be concerned about header guards that exceed 120 characters.</li>
   </ul>
</div>

### Line termination {#fedg_js-coding-format_terminate}
Line termination follows the UNIX text file convention.

Lines must end with a single linefeed (LF) character.

Linefeed characters are represented as ordinal 10, or hexadecimal (0x0A).

<div class="bs-callout bs-callout-info" id="info">
   <p>Do <em>not</em> use carriage returns (CR) as is the convention in Mac OS (0x0D) or the carriage return&ndash;linefeed combination (CRLF) as is standard in Windows OS (0x0D, 0x0A).</p>

</div>

### Multiline string literals {#fedg_js-coding-format_multilit}
Use string concatenation:

    var myString = 'JavaScript was originally developed in Netscape, by Brendan Eich. ' +
      'Battling with Microsoft over the Internet, Netscape considered their client-server solution ' +
      'as a distributed OS, running a portable version of Sun Microsystem&#8217;s Java. ' +
      'Because Java was a competitor of C++ and aimed at professional programmers, ' +
      'Netscape also wanted a lightweight interpreted language that would complement Java ' +
      'by appealing to nonprofessional programmers, like Microsoft&#8217;s VB.[9] (see JavaScript and Java)';
    
### Parentheses {#fedg_js-coding_codestyle_parens}
Use sparingly and in general only where required by the syntax and semantics.

Never use parentheses for:

* Unary operators such as `delete`, `typeof`, and `void`
* After keywords such as `return`, `throw`
* For `case`, `in`, or `new`, and others like them

### Semicolons {#semicolons}
Always put semicolons as statement terminators.
The following example shows how missing semicolons can be particularly dangerous:

    // 1.
	  MyClass.prototype.myMethod = function() {
	       return 42;
	   }  // No semicolon here.

	  (function() {
	     // Some initialization code wrapped in a function to create a scope for locals.
	   })();

	   // 2.  Trying to do one thing on Internet Explorer and another on Firefox.
	     var x = {
	      'i': 1,
	       'j': 2
	   }  // No semicolon here.

	   // I know you'd never write code like this, but throw me a bone.
	  [normalVersion, ffVersion][isIE]();

	   // 3. conditional execution a la bash
	   var THINGS_TO_EAT = [apples, oysters, sprayOnCheese]  // No semicolon here.

	   -1 == resultOfOperation() || die();

**So what happens?**

1.  JavaScript error&mdash;first the function returning 42 is called with the second function as a parameter, then the number 42 is "called" resulting in an error.
2.  The 'no such property in undefined' error is likely to appear at runtime as it tries to call `x[ffVersion][isIE]()`.
3.  `die` is called unless `resultOfOperation()` is `NaN` and `THINGS_TO_EAT` gets assigned the result of `die()`.

**Why?**
JavaScript requires statements to end with a semicolon, except when it thinks it can safely infer their existence.

In each of the examples above, a function declaration, or an object, or an array literal is used inside a statement.

The closing brackets are not enough to indicate the end of the statement. JavaScript never ends a statement if the next token is an infix or bracket operator.

<h3 id="fedg_js-coding_codestyle_stmt">Statements and conditions</h3>
Do not put statements on the same line as conditions.

**Incorrect:**

    if (true) return;
    if (true) blah();</pre>

**Correct:**

    if (true) {
      return;
    }

    if (true) {
      blah();
    }

### Strings {#strings}
For consistency, single-quotes are preferred to double quotes. This is helpful when creating strings that include HTML:

    var msg = '&lt;span class="text">Hello World!&lt;/div>';

## Naming conventions {#fedg_js-coding_naming}
See one of the following sections:

* <a href="#fedg_js-coding_naming_const">Constants</a>
* <a href="#fedg_js-coding_naming_files">File names</a>


### Constants {#fedg_js-coding_naming_const}
Constants may contain both alphanumeric characters and underscores (`_`).

All letters used in a constant name must be capitalized, while all words in a constant name must be separated by an underscore.

For example, `EMBED_SUPPRESS_EMBED_EXCEPTION` is an acceptable name, but `EMBED_SUPPRESSEMBEDEXCEPTION` is not.

Constants must be defined as class members with the `const` modifier.

In JavaScript constants are declared using the `@const` annotation. But Internet Explorer does not parse the `@const` keyword, so omit it, if possible.

For example, variables can be used instead of constants for storing simple values. Applying the naming convention used for constants (ALL CAPS) in naming these variables would indicate that their value is not supposed to be changed.

Example:

    /**
      * The number of seconds in a minute.
      * @type {number}
    */
      obj.example.SECONDS_IN_A_MINUTE = 60;

For non-primitives, use the `@const` annotation.

    /**
      * The number of seconds in each of the given units.
      * @type {Object.&lt;number>}
      * @const
    */
    obj.example.SECONDS_TABLE = {
      minute: 60,
      hour: 60 * 60
      day: 60 * 60 * 24

### File names {#fedg_js-coding_naming_files}
File names should be all lowercase to avoid confusion on case-sensitive platforms.

File names should contain only alphanumeric characters, and dash character (`-`) as words separator, end with `.js`:

* **Correct**: `dialog-popup-base-features.js`
* **Incorrect**: `dialog_popup_base_features.js`

## Code style {#fedg_js-coding_codestyle}
See one of the following sections:

* [Curly braces](#fedg_js-coding_codestyle_curl)
* [Functions and methods](##fedg_js-coding_naming_fns)
* [Variables and properties](##fedg_js-coding_naming_vars)

### Curly braces {#fedg_js-coding_codestyle_curl}
Because of implicit semicolon insertion, always start your curly braces on the same line as whatever they are opening.

For example:

    if (something) {
      // ...
    } else {
      // ...
    }

### Functions and methods {#fedg_js-coding_naming_fns}
Function names may contain only alphanumeric characters.

Underscores are not permitted.

Numbers are permitted in function names, but are discouraged in most cases.

Function names must always start with a lowercase letter.

When a function name consists of more than one word, use *camelCase* formatting, which capitalizes the first letter of each word.

Class method names should start with an English verb in infinitive form that describes the method.

Verbosity is generally encouraged. Function names should be as verbose as is needed to fully describe their purpose and behavior.

Examples of acceptable function names include:

* `filterInput()`
* `getElementById()`
* `widgetFactory()`

For object-oriented programming, accessors for instances or static variables should always have the `get` or `set` prefix.

In design patterns, such as the singleton or factory patterns, implementation method names should contain the pattern name where practical to provide the better behavior description.

Methods that return certain status flags or other Boolean values should have the `has` or `is` prefix, instead of `get`.

For object methods that are declared with the `private` or `protected` modifier, the method name should start with underscore (`_`).

This is the only acceptable use of an underscore in a method name. Public methods should never contain an underscore.

### Variables and properties {#fedg_js-coding_naming_vars}
Variable names may contain only alphanumeric characters.

Underscores (`_`) are not permitted.

Numbers are permitted in variable names, but are discouraged in most cases.

Instance variables that are declared with the `private` or `protected` modifier, should start with a single underscore.

This is the only acceptable use of the underscore in a variable name. Member variables declared as `public` should never start with an underscore.

Function names and variable names must always start with a lowercase letter and follow the camelCase capitalization convention.

Verbosity is generally encouraged.

Variables names should always be as verbose as needed to describe the data that the developer intends to store in them.

Terse variable names such as `i` or `n` are discouraged for all, but the smallest loop contexts.

If a loop contains more than 20 lines of code, the index variables should have more descriptive names.

## Coding constructs {#coding-constructs}
See one of the following sections:

* [Array and object literals](#fedg_js-coding_codestyle_literals)
* [Binary and ternary operators](#fedg_js-coding_codestyle_binary-ternary)
* [Boolean expressions](#boolean)
* [Boolean operators](#operators)
* [Conditional (ternary) operators (? and :)](#conditional)
* [Exceptions and custom exceptions](#exceptions)
* [Function declarations within blocks](#functions-in-blocks)
* [Standard features](#standard-features)
* [Method definitions](#methods)
* [Closures](#closures)


### Array and object literals {#fedg_js-coding_codestyle_literals}
Use array and object literals instead of array and object constructors.

The following example is <b>correct</b>. Always use the more readable array literal:

    var a = [x1, x2, x3];
    var a2 = [x1, x2];
    var a3 = [x1];
    var a4 = [];

<div class="bs-callout bs-callout-info" id="info">
   <p>The following example is <b>incorrect</b> because array constructors are error-prone due to their arguments.
   Because of this, if someone changes the code to pass one argument instead of two arguments, the array might not have the expected length.</p>
   
   <script src="https://gist.github.com/xcomSteveJohnson/d7c6db5a7d0947e72b48.js"></script>
</div>
Object constructors don't have the same problems, but for readability and consistency object literals should be used.

    var o = {};
    var o2 = {
      a: 0,
      b: 1,
      c: 2,
      'strange key': 3
    };

### Binary and ternary operators {#fedg_js-coding_codestyle_binary-ternary}
Always put the operator on the preceding line, so that you don't have to think about implicit semi-colon insertion issues.

<script src="https://gist.github.com/xcomSteveJohnson/07c08ba56af1d9e150c4.js"></script>

<h3 id="boolean">Boolean expressions</h3>
Pay attention to the values of the following Boolean expressions:

<table>
   <thead style="background-color:lightgray">
      <tr>
         <th>False</th>
         <th>True</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>null</td>
         <td><code>0</code></td>
      </tr>
      <tr>
         <td>undefined</td>
         <td><code>[]</code> (empty array)</td>
      </tr>
      <tr>
         <td><code>''</code> (the empty string)</td>
         <td><code>{}</code> (empty object)</td>
      </tr>
      <tr>
         <td><code>0</code> (the number)</td>
         <td/>
      </tr>
   </tbody>
</table>

The following code samples are equivalent:

<table style="width:130%">
   <thead style="background-color:lightgray">
      <tr>
         <th>Correct - long form</th>
         <th>Correct - short form</th>
         <th>Note</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>while (x != null)</code></td>
         <td><code>while (x)</code></td>
         <td>Equal as long as x is not 0, empty string, or false</td>
      </tr>
      <tr>
         <td><code>if (y != null && y != '')</code></td>
         <td><code>if (y)</code></td>
         <td/>
      </tr>
   </tbody>
</table>
<div class="bs-callout bs-callout-info" id="info2">
   <p>Here are some examples of non-obvious Boolean expressions results:</p>
   
   <pre>Boolean('0') == true
'0' != true</pre>
   <pre>0 != null
0 == []
0 == false</pre>
   <pre>Boolean(null) == false
null != true
null != false</pre>
   <pre>Boolean(undefined) == false
undefined != true
undefined != false</pre>
   <pre>Boolean([]) == true
[] != true [] == false</pre>
   <pre>Boolean({}) == true
{} != true
{} != false</pre>
   

</div>

### Boolean operators (&#38;&#38; and ||) {#operators}
These binary Boolean operators are short-circuited, and evaluate to the last evaluated term.

The following code samples are equal:

<table style="width:130%">
   <thead style="background-color:lightgray">
      <tr>
         <th>Correct&mdash;long form</th>
         <th>Correct&mdash;short form</th>
         <th>Notes</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <pre>function foo(opt_win) {
    var win;
    if (opt_win) {
        win = opt_win;
    } else {
        win = window;
    }
    // ...
}</pre>
         </td>
         <td>
            <pre>function foo(opt_win) {
    var win = opt_win || window;
    // ...
}</pre>
         </td>
         <td>That is why the <code>||</code> operator is the default.</td>
      </tr>
      <tr>
         <td>
            <pre>if (node) {
    if (node.kids) {
        if (node.kids[index]) {
            foo(node.kids[index]);
        }
    }
}</pre>
         </td>
         <td>
            <pre>if (node && node.kids && node.kids[index]) {
    foo(node.kids[index]);
}</pre>
            <pre>var kid = node && node.kids && node.kids[index];
if (kid) {
    foo(kid);
}</pre>
         </td>
         <td><code>&&</code> is also useful for code shortening.</td>
      </tr>
   </tbody>
</table>

### Conditional (ternary) operators (? and :) {#conditional}
The following code samples are equal:

<table style="width:130%">
   <thead style="background-color:lightgray">
      <tr>
         <th>Correct - long form</th>
         <th>Correct - short form</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <pre>if (val != 0) {
    return foo();
} else {
    return bar();
}</pre>
         </td>
         <td>
            <pre>return val ? foo() : bar();</pre>
         </td>
      </tr>
   </tbody>
</table>

### Custom toString() method {#tostring-method}
**Must always succeed without side effects.**
You can control how your objects are converted to string by defining a custom `toString()` method.

The method should:

* Always succeed.
* Not have side-effects.

Otherwise you can run into serious problems. For example:

* `toString()` calls a method that does an assert.
* The assert tries to output the name of the object in which it failed.
* `toString()` is called.

### Function declarations within blocks {#functions-in-blocks}
ECMAScript allows function declarations only in the root statement list of a script or a function.

To define a function within a block, use a variable initialized with a function expression.

**Wrong:**

    if (x) {
      function foo() {}
    }

**Correct:**

    if (x) {
      var foo = function() {}
    }

<h3 id="exceptions">Exceptions and custom exceptions</h3>
You cannot avoid exceptions if you are doing something non-trivial (using an application development framework, and so on).

Without custom exceptions, returning error information from a function that also returns a value can be tricky, not to mention inelegant. Bad solutions include passing in a reference type to hold error information or always returning Objects with a potential error member.

These basically amount to a primitive exception handling hack. Feel free to use custom exceptions when appropriate.

### Standard features {#standard-features}
For maximum portability and compatibility, use standard features whenever possible.

For example, `string.charAt(3)` instead of `string[3]`, and element access with DOM functions instead of using an application-specific shorthand.

<h3 id="methods">Method definitions</h3>
There are several ways to attach methods and properties to a constructor, but the preferred style is:

    Foo.prototype.bar = function() {
      // ...
    };

Or you can also use this style:

    Foo.prototype = {
      bar: function() {
         // ...
    },
      circle: function() {
          // ...
      }
    };

### Closures {#closures}
Keep in mind that a closure keeps a pointer to its enclosing scope.

As a result, attaching a closure to a DOM element can create a circular reference and thus, a memory leak.

**Wrong:**

      function foo(element, a, b) {
        element.onclick = function() { /* uses a and b */ };
    }

The function closure keeps references to elements "a" and "b" even if it never uses them.

Because elements also keep references to the closure, it is a cycle that will not be cleaned up by garbage collection. In these situations, the code can be structured as follows:

**Correct:**

    function foo(element, a, b) {
        element.onclick = bar(a, b);
    }

    function bar(a, b) {
        return function() { /* uses a and b */ }
    }

## General recommendations {#general-recommendations}
See one of the following sections:

* [Do not use eval](#eval)
* [Do not use with()](#with)
* [Use this with caution](#this)
* [Array and object initializers](#fedg_js-coding_codestyle_arrayinit)
* [Do not use associative arrays](#fedg_js-coding_codestyle_arrayinit)
* [Use deferred initialization](#deferred-init)
* [Do not modify built-in objects](#prototypes)
* [Declare variables](#variables-scope)

### Do not use eval() {#eval}
Avoid using `eval()`.

The `eval()` function makes for confusing semantics and is dangerous to use if the string passed to `eval()` contains user input. Usually better options exist allowing to omit `eval()`, so its usage is generally not permitted. However, it is accepted for unserializing tasks (for example, to evaluate RPC responses), as it makes them much easier.

### Do not use with() {#with}
Do not use the `with()` statement.

Using `with()` clouds the semantics of your program, because its object can have properties that collide with local variables, which can drastically change the meaning of your program.

Example: what will be the result of the following code execution?

    with (foo) {  
      var x = 3;
      return x;
    }

Answer: anything.

The local variable x could be clobbered by a property of foo, and perhaps it even has a setter, in which case assigning 3 could cause lots of other code to execute.

### Use this with caution {#this}
Semantic of this can be tricky. It can refer to either:


* global object (in most cases)
* the scope of the caller (in eval)
* a node in the DOM tree (when attached using an event handler HTML attribute)
* a newly created object (in a constructor)
* other object - if a function was called by call() or apply().

To avoid confusion, use <code>this</code> only in object constructors, methods, and in closures setting up.

### Array and object initializers {#fedg_js-coding_codestyle_arrayinit}
Single-line array and object initializers are allowed when they fit on a line as follows:

    var arr = [1, 2, 3];  // No space after [ or before ].
    var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.

Multi-line array and object initializer must be indented four spaces.

<script src="https://gist.github.com/xcomSteveJohnson/0a09bd28d56b63787a73.js"></script>
Long identifiers or values present problems for aligned initialization lists, so always prefer non-aligned initialization.

For example:

    Object.prototype = {
        a: 0,
        b: 1,
        lengthyName: 2
    };

<div class="bs-callout bs-callout-info" id="info">
   <p>The following is <b>incorrect</b>:</p>

   <pre>WRONG_Object.prototype = {
    a          : 0,
    b          : 1,
    lengthyName: 2
};</pre>
</div>

### Do not use associative arrays {#associative-arrays}
Do not use associative arrays.

If you need a <code>map/hash</code>, use <code>Object</code> instead of <code>Array</code>, because the features you need are actually <code>Object</code> features.

`Array` just happens to extend `Object`.

### Use deferred initialization {#deferred-init}
It is sometimes impossible to initialize variables at the point of declaration, so deferred initialization is a good solution.

### Use explicit scope {#explicit-scope}
Always use explicit scope. This increases code portability and clarity.

For example, do not rely on window being in the scope chain. You might want to use your function in another application, for which this window is not the content window.

### Do not modify built-in objects {#prototypes}
<ul>
   <li>
      Modifying built-ins like <code>Object.prototype</code> and <code>Array.prototype</code> is strictly forbidden.

   </li>
   <li>
      Modifying other built-ins like <code>Function.prototype</code> is less dangerous, but still leads to debugging issues in production and should be avoided.

   </li>
</ul>

### Declare variables {#variables-scope}
If you do not declare a variable, it is placed in the global context, potentially clobbering existing values.

It also makes hard to define the variable scope. For example, it can be <code>Document</code>, <code>Window</code> or <code>local</code> scope.

So always declare variables with <code>var</code>.

Using only one var per scope (function) promotes readability.

    var foo = "bar,"
      num = 1,
      arr = [1, 2, 3];




