---
layout: default
group: coding-standards
subgroup: Coding standards
title: JavaScript coding standard
menu_title: JavaScript coding standard
menu_order: 2
github_link: coding-standards/js-coding-standards.md
---

<h2 id="fedg_js-code-bestpr_overview">Overview</h2>
<p>These standard define Magento requirements for code formatting and style for teams that develop JavaScript and jQuery code for Magento.</p>
<p>These standard are based on the <a href="http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml" target="_blank">Google JavaScript Style Guide</a>.</p>
<p>Use the <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a> to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.</p>
<p>Magento 2 uses the jQuery library including the standard and custom <a href="http://api.jqueryui.com/category/widgets">jQuery widgets</a>.
   For jQuery widget coding standard, see <a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-standard.html">jQuery widget coding standard</a>.
</p>
<p>Some parts of Magento code might not comply with these standard.</p>
<p>These standard are optional for third-party Magento developers.</p>
<h2 id="fedg_js-coding_JSHint">JSHint tool</h2>
<p>Use <a href="http://www.JSHint.com" target="_blank">JSHint</a> to ensure the quality of your JavaScript code.</p>
<p>JSHint is a community-driven tool that detects errors and potential problems in JavaScript code.</p>
<p>Its flexibility enables you to customize it to your coding standard and expected code execution environment.</p>
<p>jQuery core passes JSHint.</p>
<h2 id="fedg_js-coding-format">Formatting</h2>
<h3 id="fedg_js-coding_codestyle_anon">Anonymous functions</h3>
<p>When you declare an anonymous function in the list of arguments for a function call, indent the body of the function four spaces from the left edge of the statement, or four spaces from the left edge of the function keyword.</p>
<p>This makes the body of the anonymous function easier to read.</p>
<script src="https://gist.github.com/xcomSteveJohnson/c581af6207bdde9af98d.js"></script>
<h3 id="fedg_js-coding-format_eof">End of file</h3>
<p>The last line in a file also must end with a single linefeed (LF) character.</p>
<p>In other words, a file always ends with an empty line. This reduces quantity of the changed lines in a diff and makes code safer in files concatenation process.</p>
<h3 id="fedg_js-coding_codestyle_funcargs">Function arguments</h3>
<p>When possible, list all function arguments on the same line.</p>
<p>If doing so exceeds the 120-column limit, you must line-wrap the arguments in a readable way.</p>
<p>To save space, try to wrap as close to 80 columns as possible (remember 120-column limit), or put each argument on its own line to enhance readability.</p>
<p>The indentation may be either four spaces.</p>
<p>The following patterns are the most common patterns for argument wrapping:</p>
<script src="https://gist.github.com/xcomSteveJohnson/24f35ae60144d5210737.js"></script>
<h3 id="fedg_js-coding-format_indent">Indentation</h3>
<p>Indentation should consist of four spaces.</p>
<p>Tabs are not allowed.</p>
<h3 id="fedg_js-coding_codestyle_indent">Indent wrapped lines</h3>
<p>You should indent all wrapped lines to be left-aligned to the expression above, or indented four spaces.</p>
<script src="https://gist.github.com/xcomSteveJohnson/19982fe652f3455394f6.js"></script>
<h3 id="fedg_js-coding-format_length">Line length</h3>
<p>Source code line length must not exceed 120 characters.</p>
<p>Recommended line length is 80 characters.</p>
<div class="bs-callout bs-callout-info" id="info">
      <ul>
         <li>If a comment line contains an example command or a literal URL longer than 120 characters, that line can be longer than 120 characters for ease of cutting and pasting.</li>
         <li>Do not be concerned about header guards that exceed 120 characters.</li>
      </ul>
</div>
<h3 id="fedg_js-coding-format_terminate">Line termination</h3>
<p>Line termination follows the UNIX text file convention.</p>
<p>Lines must end with a single linefeed (LF) character.</p>
<p>Linefeed characters are represented as ordinal 10, or hexadecimal (0x0A).</p>
<div class="bs-callout bs-callout-info" id="info">
      <p>Do <em>not</em> use carriage returns (CR) as is the convention in Apple OS's (0x0D) or the carriage return&ndash;linefeed combination (CRLF) as is standard for the Windows OS (0x0D, 0x0A).</p>
</div>
<h3>Multiline string literals</h3>
<p>Use string concatenation:</p>

   <pre>var myString = 'JavaScript was originally developed in Netscape, by Brendan Eich. ' +
    'Battling with Microsoft over the Internet, Netscape considered their client-server solution ' +
    'as a distributed OS, running a portable version of Sun Microsystem&#8217;s Java. ' +
    'Because Java was a competitor of C++ and aimed at professional programmers, ' +
    'Netscape also wanted a lightweight interpreted language that would complement Java ' +
    'by appealing to nonprofessional programmers, like Microsoft&#8217;s VB.[9] (see JavaScript and Java)';
    </pre>

<h3 id="fedg_js-coding_codestyle_parens">Parentheses</h3>
<p>Use sparingly and in general only where required by the syntax and semantics.</p>
<p>Never use parentheses for:</p>
* Unary operators such as `delete`, `typeof`, and `void`
* After keywords such as `return`, `throw`
* For `case`, `in`, or `new`, and others like them
<h3 id="semicolons">Semicolons</h3>
Always put semicolons as statement terminators.
The following example shows how missing semicolons can be particularly dangerous:

   <pre>
// 1.
MyClass.prototype.myMethod = function() {
    return 42;
}  // No semicolon here.

(function() {
    // Some initialization code wrapped in a function to create a scope for locals.
})();
</pre>


   <pre>
// 2.  Trying to do one thing on Internet Explorer and another on Firefox.
var x = {
    'i': 1,
    'j': 2
}  // No semicolon here.

// I know you'd never write code like this, but throw me a bone.
[normalVersion, ffVersion][isIE]();
</pre>


   <pre>
// 3. conditional execution a la bash
var THINGS_TO_EAT = [apples, oysters, sprayOnCheese]  // No semicolon here.

-1 == resultOfOperation() || die();
</pre>

<p><b>So what happens?</b></p>
<ol>
   <li>JavaScript error - first the function returning 42 is called with the second function as a parameter, then the number 42 is "called" resulting in an error.</li>
   <li>The 'no such property in undefined' error is likely to appear at runtime as it tries to call x[ffVersion][isIE]().</li>
   <li>die is called unless resultOfOperation() is NaN and THINGS_TO_EAT gets assigned the result of die().</li>
</ol>
<p><b>Why?</b></p>
<p>JavaScript requires statements to end with a semicolon, except when it thinks it can safely infer their existence.</p>
<p>In each of the examples above, a function declaration, or an object, or an array literal is used inside a statement.</p>
<p>The closing brackets are not enough to indicate the end of the statement. JavaScript never ends a statement if the next token is an infix or bracket operator.</p>
<h3 id="fedg_js-coding_codestyle_stmt">Statements and conditions</h3>
<p>Do not put statements on the same line as conditions.</p>
<p><b>Incorrect:</b></p>

   <pre>if (true) return;
if (true) blah();</pre>
   <p><b>Correct:</b></p>
   <pre>if (true) {
    return;
}

if (true) {
    blah();
}</pre>

<h3 id="strings">Strings</h3>
<p>For consistency, single-quotes are preferred to double quotes. This is helpful when creating strings that include HTML:</p>

   <pre>
var msg = '&lt;span class="text">Hello World!&lt;/div>';
</pre>

<h2 id="fedg_js-coding_naming">Naming conventions</h2>
<h3 id="fedg_js-coding_naming_const">Constants</h3>
<p>Constants may contain both alphanumeric characters and underscores (<code>_</code>).</p>
<p>All letters used in a constant name must be capitalized, while all words in a constant name must be separated by ah underscore.</p>
<p>For example, <code>EMBED_SUPPRESS_EMBED_EXCEPTION</code> is an acceptable name, but <code>EMBED_SUPPRESSEMBEDEXCEPTION</code> is not.</p>
<p>Constants must be defined as class members with the <code>const</code> modifier.</p>
<p>In JavaScript constants are declared using the <code>@const</code> annotation. But Internet Explorer does not parse the <code>@const</code> keyword, so omit it, if possible.</p>
<p>For example, variables can be used instead of constants for storing simple values. Applying the naming convention used for constants (all CAPS) in naming these variables would indicate that their value is not supposed to be changed.</p>
<p>Example:</p>

   <pre>
/**
 * The number of seconds in a minute.
 * @type {number}
 */
obj.example.SECONDS_IN_A_MINUTE = 60;
</pre>

<p>For non-primitives, use the <code>@const</code> annotation.</p>

   <pre>
/**
 * The number of seconds in each of the given units.
 * @type {Object.&lt;number>}
 * @const
 */
obj.example.SECONDS_TABLE = {
    minute: 60,
    hour: 60 * 60
    day: 60 * 60 * 24
</pre>

<h3 id="fedg_js-coding_naming_files">File names</h3>
<p>File names should be all lowercase to avoid confusion on case-sensitive platforms.</p>
<p>File names should contain only alphanumeric characters, and dash character (<code>-</code>) as words separator, end with <code>.js</code>:</p>
* **Correct**: `dialog-popup-base-features.js`
* **Incorrect**: `dialog_popup_base_features.js`
<h2 id="fedg_js-coding_codestyle">Code style</h2>
<h3 id="fedg_js-coding_codestyle_curl">Curly braces</h3>
<p>Because of implicit semicolon insertion, always start your curly braces on the same line as whatever they are opening.</p>
<p>For example:</p>

   <pre>if (something) {
    // ...
} else {
    // ...
}</pre>

<h3 id="fedg_js-coding_naming_fns">Functions and methods</h3>
<p>Function names may contain only alphanumeric characters.</p>
<p>Underscores are not permitted.</p>
<p>Numbers are permitted in function names, but are discouraged in most cases.</p>
<p>Function names must always start with a lowercase letter.</p>
<p>When a function name consists of more than one word, use <i>camelCase</i> formatting, which capitalizes the first letter of each word.</p>
<p>Class method names should start with an English verb in infinitive form that describes the method.</p>
<p>Verbosity is generally encouraged. Function names should be as verbose as is needed to fully describe their purpose and behavior.</p>
<p>Examples of acceptable function names include:</p>
* `filterInput()`
* `getElementById()`
* `widgetFactory()`
<p>For object-oriented programming, accessors for instances or static variables should always have the <code>get</code> or <code>set</code> prefix.</p>
<p>In design patterns, such as the singleton or factory patterns, implementation method names should contain the pattern name where practical to provide the better behavior description.</p>
<p>Methods that return certain status flags or other Boolean values should have the <code>has</code> or <code>is</code> prefix, instead of <code>get</code>.</p>
<p>For object methods that are declared with the <code>private</code> or <code>protected</code> modifier, the method name should start with underscore (<code>_</code>).</p>
<p>This is the only acceptable use of an underscore in a method name. Public methods should never contain an underscore.</p>
<h3 id="fedg_js-coding_naming_vars">Variables and properties</h3>
<p>Variable names may contain only alphanumeric characters.</p>
<p>Underscores (<code>_</code>) are not permitted.</p>
<p>Numbers are permitted in variable names, but are discouraged in most cases.</p>
<p>Instance variables that are declared with the <code>private</code> or <code>protected</code> modifier, should start with a single underscore.</p>
<p>This is the only acceptable use of the underscore in a variable name. Member variables declared as <code>public</code> should never start with an underscore.</p>
<p>Function names and variable names must always start with a lowercase letter and follow the camelCase capitalization convention.</p>
<p>Verbosity is generally encouraged.</p>
<p>Variables names should always be as verbose as needed to describe the data that the developer intends to store in them.</p>
<p>Terse variable names such as <code>i</code> or <code>n</code> are discouraged for all, but the smallest loop contexts.</p>
<p>If a loop contains more than 20 lines of code, the index variables should have more descriptive names.</p>
<h2 id="coding-constructs">Coding constructs</h2>
<h3 id="fedg_js-coding_codestyle_literals">Array and object literals</h3>
<p>Use array and object literals instead of array and object constructors.</p>
<p>The following example is <b>correct</b>. Always use the more readable array literal:</p>

   <pre>var a = [x1, x2, x3];
var a2 = [x1, x2];
var a3 = [x1];
var a4 = [];</pre>

<div class="bs-callout bs-callout-info" id="info">
      <p>The following example is <b>incorrect</b> because array constructors are error-prone due to their arguments.</p>
      <p>Because of this, if someone changes the code to pass one argument instead of two arguments, the array might not have the expected length.</p>
      <script src="https://gist.github.com/xcomSteveJohnson/d7c6db5a7d0947e72b48.js"></script>
</div>
<p>Object constructors don't have the same problems, but for readability and consistency object literals should be used.</p>

   <pre>var o = {};

var o2 = {
    a: 0,
    b: 1,
    c: 2,
    'strange key': 3
};</pre>

<h3 id="fedg_js-coding_codestyle_binary-ternary">Binary and ternary operators</h3>
<p>Always put the operator on the preceding line, so that you don't have to think about implicit semi-colon insertion issues.</p>
<script src="https://gist.github.com/xcomSteveJohnson/07c08ba56af1d9e150c4.js"></script>
<h3 id="boolean">Boolean expressions</h3>
<p>Pay attention to the values of the following Boolean expressions:</p>
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
<p>So the following code samples are equal:</p>
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
      <p>
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
      </p>
</div>
<h3 id="operators">Boolean operators (&& and ||)</h3>
<p>These binary Boolean operators are short-circuited, and evaluate to the last evaluated term.</p>
<p>The following code samples are equal:</p>
<table style="width:130%">
   <thead style="background-color:lightgray">
      <tr>
         <th>Correct - long form</th>
         <th>Correct - short form</th>
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
<h3 id="conditional">Conditional (ternary) operators (? and :)</h3>
<p>The following code samples are equal:</p>
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
<h3 id="tostring-method">Custom toString() method</h3>
**Must always succeed without side effects.**
<p>You can control how your objects are converted to string by defining a custom `toString()` method.</p>
<p>The method should:</p>
* Always succeed.
* Not have side-effects.
<p>Otherwise you can run into serious problems. For example:</p>
* `toString()` calls a method that does an assert.
* The assert tries to output the name of the object in which it failed.
* `toString()` is called.
<h3 id="functions-in-blocks">Function declarations within blocks</h3>
<p>ECMAScript only allows function declarations in the root statement list of a script or a function.</p>
<p>To define a function within a block, use a variable initialized with a function expression.</p>
<p><b>Wrong:</b></p>

   <pre>
if (x) {
    function foo() {}
}
</pre>

<p><b>Correct:</b></p>

   <pre>
if (x) {
    var foo = function() {}
}
</pre>

<h3 id="exceptions">Exceptions and custom exceptions</h3>
<p>You cannot avoid exceptions if you are doing something non-trivial (using an application development framework, and so on).</p>
<p>Without custom exceptions, returning error information from a function that also returns a value can be tricky, not to mention inelegant. Bad solutions include passing in a reference type to hold error information or always returning Objects with a potential error member.</p>
<p>These basically amount to a primitive exception handling hack. Feel free to use custom exceptions when appropriate.</p>
<h3 id="standard-features">Standard features</h3>
<p>For maximum portability and compatibility, use standard features whenever possible.</p>
<p>For example, string.charAt(3) instead of string[3], and element access with DOM functions instead of using an application-specific shorthand.</p>
<h3 id="methods">Method definitions</h3>
<p>There are several ways to attach methods and properties to a constructor, but the preferred style is:</p>

   <pre>
Foo.prototype.bar = function() {
    // ...
};
</pre>

<p>Or you can also use this style:</p>

   <pre>
Foo.prototype = {
    bar: function() {
        // ...
    },
    circle: function() {
        // ...
    }
};
</pre>

<h3 id="closures">Closures</h3>
<p>Keep in mind is that a closure keeps a pointer to its enclosing scope.</p>
<p>As a result, attaching a closure to a DOM element can create a circular reference and thus, a memory leak.</p>
<p><b>Wrong:</b></p>

   <pre>
function foo(element, a, b) {
    element.onclick = function() { /* uses a and b */ };
}
</pre>

<p>The function closure keeps references to elements "a" and "b" even if it never uses them.</p>
<p>Since elements also keep references to the closure, it is a cycle that will not be cleaned up by garbage collection. In these situations, the code can be structured as follows:</p>
<p><b>Correct:</b></p>

   <pre>
function foo(element, a, b) {
    element.onclick = bar(a, b);
}

function bar(a, b) {
    return function() { /* uses a and b */ }
}
</pre>

<h2 id="general-recommendations">General recommendations</h2>
<h3 id="eval">Do not use eval()</h3>
<p>Avoid using eval().</p>
<p>The eval() function makes for confusing semantics and is dangerous to use if the string passed to eval() contains user input. Usually better options exist allowing to omit eval(), so its usage is generally not permitted. However, it is accepted for unserializing tasks (for example, to evaluate RPC responses), as it makes them much easier.</p>
<h3 id="with">Do not use with()</h3>
<p>Do not use the with() statement.</p>
<p>Using with() clouds the semantics of your program, because its object can have properties that collide with local variables, which can drastically change the meaning of your program.</p>
<p>Example: what will be the result of the following code execution?</p>

   <pre>
with (foo) {
    var x = 3;
    return x;
}
</pre>

<p>Answer: anything.</p>
<p>The local variable x could be clobbered by a property of foo, and perhaps it even has a setter, in which case assigning 3 could cause lots of other code to execute.</p>
<h3 id="this">Use this with caution</h3>
<p>Semantic of this can be tricky. It can refer to either:</p>
* global object (in most cases)
* the scope of the caller (in eval)
* a node in the DOM tree (when attached using an event handler HTML attribute)
* a newly created object (in a constructor)
* other object - if a function was called by call() or apply().

<p>To avoid confusion, use <code>this</code> only in object constructors, methods, and in closures setting up.</p>

<h3 id="fedg_js-coding_codestyle_arrayinit">Array and object initializers</h3>
<p>Single-line array and object initializers are allowed when they fit on a line as follows:</p>
<pre>var arr = [1, 2, 3];  // No space after [ or before ].
var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.</pre>
<p>Multi-line array and object initializer must be indented four spaces.</p>
<script src="https://gist.github.com/xcomSteveJohnson/0a09bd28d56b63787a73.js"></script>
<p>Long identifiers or values present problems for aligned initialization lists, so always prefer non-aligned initialization.</p>
<p>For example:</p>

   <pre>Object.prototype = {
    a: 0,
    b: 1,
    lengthyName: 2
};</pre>

<div class="bs-callout bs-callout-info" id="info">
      <p>The following is <b>incorrect</b>:</p>
      <pre>WRONG_Object.prototype = {
    a          : 0,
    b          : 1,
    lengthyName: 2
};</pre>
</div>
<h3 id="associative-arrays">Do not use associative arrays</h3>
<p>Do not use associative arrays.</p>
<p>If you need a <code>map/hash</code>, use <code>Object</code> instead of <code>Array</code>, because the features you need are actually <code>Object</code> features.</p>
<p><code>Array</code> just happens to extend <code>Object</code>.</p>
<h3 id="deferred-init">Use deferred initialization</h3>
<p>It is sometimes impossible to initialize variables at the point of declaration, so deferred initialization is a good solution.</p>
<h3 id="explicit-scope">Use explicit scope</h3>
<p>Always use explicit scope. This increases code portability and clarity.</p>
<p>For example, do not rely on window being in the scope chain. You might want to use your function in another application, for which this window is not the content window.</p>
<h3 id="prototypes">Do not modify built-in objects</h3>
<ul>
   <li>
      <p>Modifying built-ins like <code>Object.prototype</code> and <code>Array.prototype</code> is strictly forbidden.</p>
   </li>
   <li>
      <p>Modifying other built-ins like <code>Function.prototype</code> is less dangerous, but still leads to debugging issues in production and should be avoided.</p>
   </li>
</ul>
<h3 id="variables-scope">Declare variables</h3>
<p>If you do not declare a variable, it is placed in the global context, potentially clobbering existing values.</p>
<p>It also makes hard to define the variable scope. For example, it can be <code>Document</code>, <code>Window</code> or <code>local</code> scope.</p>
<p>So always declare variables with <code>var</code>.</p>
<p>Using only one var per scope (function) promotes readability.</p>

   <pre>
var foo = "bar,"
    num = 1,
    arr = [1, 2, 3];
</pre>


<h3 id="related-topics">Related topics</h3>


