---
layout: howtom2devgde_chapters_fedg
title: Magento JavaScript Coding Style Guidelines
---
 
<h1 id="fedg_using-ui-lib">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/m2fedg/javascript/js-coding-style.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_js-coding-style">About Magento JavaScript Coding Guidelines</h2>

These guidelines define Magento requirements for code formatting and styling to individuals. It is intended for teams that develop on JavaScript and jQuery for Magento.

To a great extent these requirements are based  on the <a href="http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml" target="_blank">Google JavaScript Style Guide</a>.

The key words "must", "must not", "required", "shall", "shall not", "should", "should not", "recommended", "may", and "optional" in this document are to be interpreted as described in <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a>. 

<h2 id="fedg_js-coding_jshint">jsHint JavaScript Code Quality Tool</h2>

We recommend you use <a href="http://www.jshint.com" target="_blank">jsHint</a> to assure your JavaScript code is of good quality.

jSHint is a community-driven tool to detect errors and potential problems in JavaScript code and to enforce your team's coding conventions.

It is very flexible so you can easily adjust it to your particular coding guidelines and your expected code execution environment.

jQuery core passes JSHint.

<h2 id="fedg_js-coding-format">Formatting Guidelines</h2>

Following are Magento's formatting guidelines.

<h3 id="fedg_js-coding-format_length">Line Length</h3>

Source code line length must not exceed 120 characters. Recommended line length is 80 characters.

**Note**: If a comment line contains an example command or a literal URL longer than 120 characters, that line may be longer than 120 characters for ease of cutting and pasting.

**Note**: You do not need to be concerned about header guards that exceed 120 characters.

<h3 id="fedg_js-coding-format_indent">Indentation</h3>

Indentation should consist of four spaces. Tabs are not allowed.

<h3 id="fedg_js-coding-format_terminate">Line Termination </h3>

Line termination follows the UNIX text file convention. Lines must end with a single linefeed (LF) character. Linefeed characters are represented as ordinal 10, or hexadecimal (0x0A)

**Note**: Do *not* use carriage returns (CR) as is the convention in Apple OS's (0x0D) or the carriage return&ndash;linefeed combination (CRLF) as is standard for the Windows OS (0x0D, 0x0A).

<h3 id="fedg_js-coding-format_eof">End Of File</h3>

The last line in a file also must end with a single linefeed (LF) character. In other words, a file always ends with an empty line. This reduces quantity of the changed lines in a diff and makes code safer in files concatenation process.

<h2 id="fedg_js-coding_naming">Naming Conventions</h2>

This section discusses Magento's naming conventions.

<h3 id="fedg_js-coding_naming_fns">Functions and Methods</h3>

Function names may contain only alphanumeric characters. Underscores are not permitted. Numbers are permitted in function names, but are discouraged in most cases.

Function names must always start with a lowercase letter. When a function name consists of more than one word, the first letter of each new word must be capitalized. This is commonly called "camelCase" formatting.

Class method names should start with an English verb in infinitive form that describes the method.

Verbosity is generally encouraged. Function names should be as verbose as is needed to fully describe their purpose and behavior.

Examples of acceptable function names:

*	`filterInput()`
*	`getElementById()`
*	`widgetFactory()`

For object-oriented programming, accessors for instances or static variables should always have the `get` or `set` prefix. In design patterns (such as the singleton or factory patterns) implementation method names should contain the pattern name where practical to provide the better behavior description.

Methods that return certain status flags or other boolean values should have the `has` or `is` prefix, instead of `get`.

For object methods that are declared with the "private" or "protected" modifier, the method name should start with underscore (`_`). This is the only acceptable use of an underscore in a method name. Public methods should never contain an underscore.

<h3 id="fedg_js-coding_naming_vars">Variables and Properties</h3>

Variable names may contain only alphanumeric characters. Underscores (`_`) are not permitted. 

Numbers are permitted in variable names, but are discouraged in most cases.

Instance variables that are declared with the "private" or "protected" modifier, should start with a single underscore. This is the only acceptable use of the underscore in a variable name. Member variables declared as "public" should never start with an underscore.

Function names and variable names must always start with a lowercase letter and follow the "camelCaps" capitalization convention.

Verbosity is generally encouraged. Variables names should always be as verbose as needed to describe the data that the developer intends to store in them. Terse variable names such as "i" or "n" are discouraged for all, but the smallest loop contexts. If a loop contains more than 20 lines of code, the index variables should have more descriptive names.

<h3 id="fedg_js-coding_naming_const">Constants</h3>

Constants may contain both alphanumeric characters and underscores (`_`).

All letters used in a constant name must be capitalized, while all words in a constant name must be separated by ah underscore.

For example, `EMBED_SUPPRESS_EMBED_EXCEPTION` is an acceptable name, but `EMBED_SUPPRESSEMBEDEXCEPTION` is not.

Constants must be defined as class members with the `const` modifier.

<h3 id="fedg_js-coding_naming_files">Filenames</h3>

Filenames should be all lowercase to avoid confusion on case-sensitive platforms. Filenames should contain only alphanumeric characters, and dash character (`-`) as words separator, end with `.js`:

*Wrong*: `dialog_popup_base_features.js`

*Correct*: `dialog-popup-base-seatures.js`

<h2 id="fedg_js-coding_codestyle">Code Style</h2>

This section discusses Magento's code style recommendations.

<h3 id="fedg_js-coding_codestyle_curl">Curly Braces</h3>

Because of implicit semicolon insertion, always start your curly braces on the same line as whatever they are opening. For example:

<pre>if (something) {
    // ...
} else {
    // ...
}</pre>

<h3 id="fedg_js-coding_codestyle_arrayinit">Array and Object Initializers</h3>

Single-line array and object initializers are allowed when they fit on a line as follows:

<pre>var arr = [1, 2, 3];  // No space after [ or before ].
var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.</pre>

Multi-line array and object initializer must be indented four spaces.

<script src="https://gist.github.com/xcomSteveJohnson/0a09bd28d56b63787a73.js"></script>

Long identifiers or values present problems for aligned initialization lists, so always prefer non-aligned initialization. For example:

<pre>Object.prototype = {
    a: 0,
    b: 1,
    lengthyName: 2
};</pre>

**Note**: The following is *incorrect*:

<pre>WRONG_Object.prototype = {
    a          : 0,
    b          : 1,
    lengthyName: 2
};</pre>

<h3 id="fedg_js-coding_codestyle_funcargs">Function Arguments</h3>

When possible, all function arguments should be listed on the same line. 

If doing so would exceed the 120-column limit, the arguments must be line-wrapped in a readable way. To save space, try to wrap as close to 80 columns as possible (remember 120-column limit), or put each argument on its own line to enhance readability. 

The indentation may be either four spaces. Following are the most common patterns for argument wrapping:

<script src="https://gist.github.com/xcomSteveJohnson/24f35ae60144d5210737.js"></script>

<h3 id="fedg_js-coding_codestyle_anon">Passing Anonymous Functions</h3>

When declaring an anonymous function in the list of arguments for a function call, the body of the function is indented four spaces from the left edge of the statement, or four spaces from the left edge of the function keyword. This is to make the body of the anonymous function easier to read.

<script src="https://gist.github.com/xcomSteveJohnson/c581af6207bdde9af98d.js"></script>

<h3 id="fedg_js-coding_codestyle_literals">Array and Object Literals</h3>

Use Array and Object literals instead of Array and Object constructors.

**Note**: The following example is *incorrect* because array constructors are error-prone due to their arguments. Because of this, if someone changes the code to pass one argument instead of two arguments, the array might not have the expected length.

<script src="https://gist.github.com/xcomSteveJohnson/d7c6db5a7d0947e72b48.js"></script>

The following example is *correct*. Always use the more readable array literal:

<pre>var a = [x1, x2, x3];
var a2 = [x1, x2];
var a3 = [x1];
var a4 = [];</pre>

Object constructors don't have the same problems, but for readability and consistency object literals should be used.

<pre>var o = {};
 
var o2 = {
    a: 0,
    b: 1,
    c: 2,
    'strange key': 3
};</pre>

<h3 id="fedg_js-coding_codestyle_indent">Indenting Wrapped Lines</h3> 

All wrapped lines should be indented either left-aligned to the expression above, or indented four spaces.

<script src="https://gist.github.com/xcomSteveJohnson/19982fe652f3455394f6.js"></script>

<h3 id="fedg_js-coding_codestyle_blank">Blank Lines</h3>

Use newlines to group logically related pieces of code. For example:

<pre>doSomethingTo(x);
doSomethingElseTo(x);
andThen(x);
 
nowDoSomethingWith(y);
 
andNowWith(z);</pre>

<h3 id="fedg_js-coding_codestyle_binary-ternary">Binary and Ternary Operators</h3>

Always put the operator on the preceding line, so that you don't have to think about implicit semi-colon insertion issues.

<script src="https://gist.github.com/xcomSteveJohnson/07c08ba56af1d9e150c4.js"></script>

<h3 id="fedg_js-coding_codestyle_parens">Parentheses</h3>

Use sparingly and in general only where required by the syntax and semantics.

Never use parentheses for:

*	Unary operators such as `delete`, `typeof`, and `void`
*	After keywords such as `return`, `throw`
*	For `case`, `in`, or `new`, and others like them

<h3 id="fedg_js-coding_codestyle_string">Strings</h3>

For consistency, single-quotes are preferred to double quotes. This is helpful when creating strings that include HTML:

<pre>var msg = '&lt;span class="text">Hello World!&lt;/div>';</pre>

<h3 id="fedg_js-coding_codestyle_stmt">Statements and Conditions</h3>

Do not put statements on the same line as conditions.

*Incorrect*:

<pre>if (true) return;
if (true) blah();</pre>

*Correct*:

<pre>if (true) {
    return;
}
 
if (true) {
    blah();
}</pre>




#### Related Topics:

