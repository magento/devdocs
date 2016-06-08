---
layout: default
group: coding-standards
subgroup: Coding standards
title: JavaScript DocBlock standard
menu_title: JavaScript DocBlock standard
menu_order: 5
github_link21: coding-standards/docblock-standard-javascript.md
---

<h2 id="frontend-dev-guide-javascript-js-coding-docblock-overview">Introduction</h2>

To add JavaScript code inline documentation, follow these guidelines. Some parts of Magento code may not comply with this standard, but we are working to gradually improve this. Following these standard is optional for 3rd-party Magento developers, but will help to create consistent, clean, and easy to read inline documentation.
This standard are a subset of <a href="http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml" target="_blank">Google JavaScript Style Guide</a> regulations.

<p>Use <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a> to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.</p>

<h2 id="frontend-dev-guide-javascript-js-coding-docblock-use">Use JSDoc</h2>

Document all files, classes, methods, and properties with JSDoc comments.

Inline comments should be of the "//" type.

It is recommended to avoid sentence fragments in documentation blocks. Use sentence-style capitalization and put a period at the end. Sentence fragmentation is acceptable in inline commentaries to keep it short.

<h3 id="frontend-dev-guide-javascript-js-coding-docblock-syntax">Comment syntax</h3>

JSDoc comments requirements:

*	A JSDoc comment should begin with a slash (/) and two asterisks (*).
*	Inline tags should be enclosed in braces: `{ @code this }`.
*	`@desc` Block tags should always start on their own line.

Example:

<pre>/**
*&nbsp;A&nbsp;JSDoc&nbsp;comment&nbsp;should&nbsp;begin&nbsp;with&nbsp;a&nbsp;slash&nbsp;and&nbsp;2&nbsp;asterisks.
*&nbsp;Inline&nbsp;tags&nbsp;should&nbsp;be&nbsp;enclosed&nbsp;in&nbsp;braces&nbsp;like{@code&nbsp;this}.
*&nbsp;@desc&nbsp;Block&nbsp;tags&nbsp;should&nbsp;always&nbsp;start&nbsp;on&nbsp;their&nbsp;own&nbsp;line.
*/
</pre>

Many tools extract metadata from JSDoc comments to validate and optimize the code.

<h3 id="frontend-dev-guide-javascript-js-coding-docblock-indentation">JSDoc indentation</h3>

If you have to line break a block tag, you should treat this as breaking a code statement and indent it four spaces.

<pre>/**
&nbsp;*&nbsp;Illustrates&nbsp;line&nbsp;wrapping&nbsp;for&nbsp;long&nbsp;param/return&nbsp;descriptions.
&nbsp;*
&nbsp;*&nbsp;@param&nbsp;{string}&nbsp;foo&nbsp;This&nbsp;is&nbsp;a&nbsp;param&nbsp;with&nbsp;a&nbsp;description&nbsp;too&nbsp;long&nbsp;to&nbsp;fit&nbsp;in
&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one&nbsp;line.
&nbsp;*&nbsp;@return&nbsp;{number}&nbsp;This&nbsp;returns&nbsp;something&nbsp;that&nbsp;has&nbsp;a&nbsp;description&nbsp;too&nbsp;long&nbsp;to
&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fit&nbsp;in&nbsp;one&nbsp;line.
&nbsp;*/
project.MyClass.prototype.method&nbsp;=&nbsp;function(foo)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;5;
};
</pre>

<h3 id="frontend-dev-guide-javascript-js-coding-docblock-classcomments">Class comments</h3>

Classes must be documented with a description, and appropriate type tags.

<pre>/**
&nbsp;*&nbsp;Class&nbsp;making&nbsp;something&nbsp;fun&nbsp;and&nbsp;easy.
&nbsp;*&nbsp;@param&nbsp;{string}&nbsp;arg1&nbsp;An&nbsp;argument&nbsp;that&nbsp;makes&nbsp;this&nbsp;more&nbsp;interesting.
&nbsp;*&nbsp;@param&nbsp;{Array.&lt;number&gt;}&nbsp;arg2&nbsp;List&nbsp;of&nbsp;numbers&nbsp;to&nbsp;be&nbsp;processed.
&nbsp;*&nbsp;@constructor
&nbsp;*/
project.MyClass&nbsp;=&nbsp;function(arg1,&nbsp;arg2)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
};
</pre>

<h3 id="frontend-dev-guide-javascript-js-coding-docblock-methodcomments">Method and function comments</h3>

A description must be provided along with parameters. Method descriptions should start with a sentence written in the third person declarative voice.

<pre>/**
&nbsp;*&nbsp;Operates&nbsp;on&nbsp;an&nbsp;instance&nbsp;of&nbsp;MyClass&nbsp;and&nbsp;returns&nbsp;something.
&nbsp;*
&nbsp;*&nbsp;@param&nbsp;{project.MyClass}&nbsp;obj&nbsp;Instance&nbsp;of&nbsp;MyClass&nbsp;which&nbsp;leads&nbsp;to&nbsp;a&nbsp;long
&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comment&nbsp;that&nbsp;needs&nbsp;to&nbsp;be&nbsp;wrapped&nbsp;to&nbsp;two&nbsp;lines.
&nbsp;*&nbsp;@return&nbsp;{boolean}&nbsp;Whether&nbsp;something&nbsp;occured.
&nbsp;*/
function&nbsp;someMethod(obj)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
}
</pre>

<h3 id="frontend-dev-guide-javascript-js-coding-docblock-propertycomments">Property comments</h3>

<pre>/**
&nbsp;*&nbsp;Maximum&nbsp;number&nbsp;of&nbsp;things&nbsp;per&nbsp;pane.
&nbsp;*
&nbsp;*&nbsp;@type&nbsp;{number}
&nbsp;*/
project.MyClass.prototype.someProperty&nbsp;=&nbsp;4;
</pre>

<h3 id="frontend-dev-guide-javascript-js-coding-docblock-tagreference">JSDoc tag reference</h3>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-const">@const</h4>

Marks a variable read-only and suitable for inlining. Generates warnings if it is rewritten. Constants should also be ALL_CAPS, but the annotation should help eliminate reliance on the naming convention.

<pre>/**&nbsp;@const&nbsp;*/&nbsp;var&nbsp;DEFAULT_TIMEZONE&nbsp;=&nbsp;'GMT';
&nbsp;
/**&nbsp;@const&nbsp;*/&nbsp;MyClass.DEFAULT_TIMEZONE&nbsp;=&nbsp;'GMT';
&nbsp;
/**
&nbsp;*&nbsp;My&nbsp;namespace's&nbsp;default&nbsp;timezone.
&nbsp;*
&nbsp;*&nbsp;@const
&nbsp;*&nbsp;@type&nbsp;{string}
&nbsp;*/
mynamespace.DEFAULT_TIMEZONE&nbsp;=&nbsp;'GMT';
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-extends">@extends</h4>

Used with `@constructor` to indicate that a class inherits from another class.

<pre>/**
&nbsp;*&nbsp;Immutable&nbsp;empty&nbsp;node&nbsp;list.
&nbsp;*
&nbsp;*&nbsp;@constructor
&nbsp;*&nbsp;@extends&nbsp;project.MyClass.BasicNodeList
&nbsp;*/
project.MyClass.EmptyNodeList&nbsp;=&nbsp;function()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
};
</pre>


<h4 id="frontend-dev-guide-javascript-js-coding-docblock-interface">@interface</h4>

Used to indicate that the function defines an interface.

<pre>/**
&nbsp;*&nbsp;A&nbsp;shape.
&nbsp;*
&nbsp;*&nbsp;@interface
&nbsp;*/
function&nbsp;Shape()&nbsp;{};
Shape.prototype.draw&nbsp;=&nbsp;function()&nbsp;{};
&nbsp;
/**
&nbsp;*&nbsp;A&nbsp;polygon.
&nbsp;*
&nbsp;*&nbsp;@interface
&nbsp;*&nbsp;@extends&nbsp;{Shape}
&nbsp;*/
function&nbsp;Polygon()&nbsp;{};
Polygon.prototype.getSides&nbsp;=&nbsp;function()&nbsp;{};
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-implements">@implements</h4>

Used with `@constructor` to indicate that a class implements an interface.

<pre>/**
&nbsp;*&nbsp;A&nbsp;shape.
&nbsp;*
&nbsp;*&nbsp;@interface
&nbsp;*/
function&nbsp;Shape()&nbsp;{};
Shape.prototype.draw&nbsp;=&nbsp;function()&nbsp;{};
&nbsp;
/**
&nbsp;*&nbsp;@constructor
&nbsp;*&nbsp;@implements&nbsp;{Shape}
&nbsp;*/
function&nbsp;Square()&nbsp;{};
Square.prototype.draw&nbsp;=&nbsp;function()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
};
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-lends">@lends</h4>

Indicates that the keys of an object literal should be treated as properties of some other object. This annotation should only appear on object literals.

Please note that the name in braces is not a type name like in other annotations. It's an object name. It names the object on which the properties are "lent". For example, `@type {Foo}` means "an instance of Foo," but `@lends {Foo}` means "the constructor Foo".

Please refer to <a href ="https://code.google.com/p/jsdoc-toolkit/wiki/TagLends" target="_blank">JSDoc Toolkit</a> for more information about this annotation.

<pre>project.MyClass.extend(
&nbsp;&nbsp;&nbsp;&nbsp;Button.prototype,
&nbsp;&nbsp;&nbsp;&nbsp;/**&nbsp;@lends&nbsp;{Button.prototype}&nbsp;*/&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isButton:&nbsp;function()&nbsp;{return&nbsp;true;}
&nbsp;&nbsp;&nbsp;&nbsp;}
);
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-override">@override</h4>

Indicates that a method or property of a subclass intentionally hides a method or property of the superclass. If no other documentation is included, the method or property also inherits documentation from its superclass.

<pre>/**
&nbsp;*&nbsp;@return&nbsp;{string}&nbsp;Human-readable&nbsp;representation&nbsp;of&nbsp;project.SubClass.
&nbsp;*&nbsp;@override
&nbsp;*/
project.SubClass.prototype.toString()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
};
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-param">@param</h4>

Used with method, function and constructor calls to document the arguments of a function.

Type names must be enclosed in curly braces. If the type is omitted, the compiler will not type-check the parameter.

<pre>/**
&nbsp;*&nbsp;Queries&nbsp;a&nbsp;Storage&nbsp;for&nbsp;items.
&nbsp;*
&nbsp;*&nbsp;@param&nbsp;{number}&nbsp;groupNum&nbsp;Subgroup&nbsp;id&nbsp;to&nbsp;query.
&nbsp;*&nbsp;@param&nbsp;{string|number|null}&nbsp;term&nbsp;An&nbsp;itemName,
&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or&nbsp;itemId,&nbsp;or&nbsp;null&nbsp;to&nbsp;search&nbsp;everything.
&nbsp;*/
namespace.Storage.prototype.query&nbsp;=&nbsp;function(groupNum,&nbsp;term)&nbsp;{
&nbsp;&nbsp;&nbsp;//&nbsp;...
};
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-return">@return</h4>

Used with method and function calls to document the return type. When writing descriptions for boolean parameters, prefer "Whether the component is visible" to "True if the component is visible, false otherwise". If there is no return value, do not use an `@return` tag.

Type names must be enclosed in curly braces. If the type is omitted, the compiler will not type-check the return value.

<pre>/**
&nbsp;*&nbsp;@return&nbsp;{string}&nbsp;The&nbsp;hex&nbsp;ID&nbsp;of&nbsp;the&nbsp;last&nbsp;item.
&nbsp;*/
namespace.Storage.prototype.getLastId&nbsp;=&nbsp;function()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;id;
};
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-this">@this</h4>

The type of the object in whose context a particular method is called. Required when the this keyword is referenced from a function that is not a prototype method.

<pre>pinto.chat.RosterWidget.extern('getRosterElement',
&nbsp;&nbsp;&nbsp;&nbsp;/**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Returns&nbsp;the&nbsp;roster&nbsp;widget&nbsp;element.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@this&nbsp;pinto.chat.RosterWidget
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@return&nbsp;{Element}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/
&nbsp;&nbsp;&nbsp;&nbsp;function()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;this._getWrappedComponent().getElement();
&nbsp;&nbsp;&nbsp;&nbsp;}
);
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-type">@type</h4>

Identifies the type of a variable, property, or expression.

<pre>/**
&nbsp;*&nbsp;The&nbsp;message&nbsp;hex&nbsp;ID.
&nbsp;*
&nbsp;*&nbsp;@type&nbsp;{string}
&nbsp;*/
var&nbsp;hexId&nbsp;=&nbsp;hexId;
</pre>

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-typedef">@typedef</h4>

This annotation can be used to declare an alias of a more complex type.

<pre>/**&nbsp;@typedef&nbsp;{(string|number)}&nbsp;*/
namespace.NumberLike;
&nbsp;
/**&nbsp;@param&nbsp;{namespace.NumberLike}&nbsp;x&nbsp;A&nbsp;number&nbsp;or&nbsp;a&nbsp;string.&nbsp;*/
namespace.readNumber&nbsp;=&nbsp;function(x)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;...
}
</pre>


<h3 id="frontend-dev-guide-javascript-js-coding-docblock-jstypes">JavaScript types</h3>


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
	return x * y;
}</pre></td>
		<td>Function object</td>
	</tr>
	<tr>
		<td>function(number, number): number</td>
		<td><pre>function(x, y) {
	return x * y;
}</pre></td>
		<td>function value</td>
	</tr>
	<tr>
		<td>SomeClass</td>
		<td><pre>/**&nbsp;@constructor&nbsp;*/
function&nbsp;SomeClass()&nbsp;{}
&nbsp;
new&nbsp;SomeClass();</pre></td>
		<td></td>
	</tr>
	<tr>
		<td>SomeInterface</td>
		<td><pre>/**&nbsp;@interface&nbsp;*/
function&nbsp;SomeInterface()&nbsp;{}
&nbsp;
SomeInterface.prototype.draw&nbsp;=&nbsp;function()&nbsp;{};</pre></td>
		<td></td>
	</tr>
	<tr>
		<td>project.MyClass</td>
		<td><pre>/**&nbsp;@constructor&nbsp;*/
project.MyClass&nbsp;=&nbsp;function&nbsp;()&nbsp;{}
&nbsp;
new&nbsp;project.MyClass()</pre></td>
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

<h4 id="frontend-dev-guide-javascript-js-coding-docblock-typelang">JavaScript type language</h4>

<table>
	<tbody>
	<tr>
		<th>Operator name</th>
		<th>Syntax</th>
		<th>Description</th>
		<th>Deprecated syntaxes</th>
	</tr>
	<tr>
		<td>Type Name</td>
		<td><code>{boolean}, {Window}, {namespace.ui.Menu}</code></td>
		<td>Simply the name of a type.</td>
		<td></td>
	</tr>
	<tr>
		<td>Type Application</td>
		<td><code>{Array.&nbsp;&lt;string&gt;}</code><br>
		An array of strings.<br>
		<code>{Object. <string, number>}</code><br>
		An object. In the object, the keys are strings and the values are numbers.</td>
		<td>Parametrizes a type, by applying a set of type arguments to that type. The idea is analogous to generics in Java.</td>
		<td></td>
	</tr>
	<tr>
		<td>Type Union</td>
		<td><code>{(number|boolean)}</code><br>
		A number or a boolean.</td>
		<td>Indicates that a value might have type A OR type B.</td>
		<td><code>{(number,boolean)}, {number|boolean}, {(number||boolean)}</code></td>
	</tr>
	<tr>
		<td>Record Type</td>
		<td><code>codemyNum: number, myObject}}</code><br>
		An anonymous type with the given type members.</td>
		<td>Indicates that the value has the specified members with the specified types. In this case, <code>myNum</code> with a type <code>number</code> and <code>myObject</code> with any type.
		Note that the braces are part of the type syntax. For example, to denote an <code>Array</code> of objects that have a <code>length</code> property, you might write <code>Array.<{length}></code>.</td>
		<td></td>
	</tr>
	<tr>
		<td>Nullable type</td>
		<td><code>{?number}</code><br>
		A number or NULL.</td>
		<td>Indicates that a value is type A or <code>null</code>. By default, all object types are nullable. NOTE: Function types are not nullable.</td>
		<td><code>{number?}</code></td>
	</tr>
	<tr>
		<td>Non-nullable type</td>
		<td><code>{!Object}</code><br>
		An Object, but never the null value.</td>
		<td>Indicates that a value is type A and not null. By default, all value types (boolean, number, string, and undefined) are not nullable.</td>
		<td><code>{Object!}</code></td>
	</tr>
	<tr>
		<td>Function Type</td>
		<td><code>{function(string, boolean)}</code><br>
		A function that takes two arguments (a string and a boolean), and has an unknown return value.</td>
		<td>Specifies a function.</td>
		<td></td>
	</tr>
	<tr>
		<td>Function Return Type</td>
		<td><code>{function(): number}</code><br>
		A function that takes no arguments and returns a number.</td>
		<td>Specifies a function return type.</td>
		<td></td>
	</tr>
	<tr>
		<td>Function <code>this</code> Type</td>
		<td><code>{function(this:namespace.ui.Menu, string)}</code><br>
		A function that takes one argument (a string), and executes in the context of a namespace.ui.Menu.</td>
		<td>Specifies the context type of a function type.</td>
		<td></td>
	</tr>
	<tr>
		<td>Function <code>new</code> Type</td>
		<td><code>{function(new:namespace.ui.Menu, string)}</code><br>
		A constructor that takes one argument (a string), and creates a new instance of namespace.ui.Menu when called with the 'new' keyword.</td>
		<td>Specifies the constructed type of a constructor.</td>
		<td></td>
	</tr>
	<tr>
		<td>Variable arguments</td>
		<td><code>{function(string, ...[number]): number}</code><br>
		A function that takes one argument (a string), and then a variable number of arguments that must be numbers.</td>
		<td>Specifies variable arguments to a function.</td>
		<td></td>
	</tr>
	<tr>
		<td>Variable arguments (in <code>@param/<code> annotations)</td>
		<td><code>@param {...number} var_args</code><br>
		A variable number of arguments to an annotated function.</td>
		<td>Specifies that the annotated function accepts a variable number of arguments.</td>
		<td></td>
	</tr>
	<tr>
		<td>Function optional arguments</td>
		<td><code>{function(?string=, number=)}</code><br>
		A function that takes one optional, nullable string and one optional number as arguments. The = syntax is only for <code>function</code> type declarations.</td>
		<td>Specifies optional arguments to a function.</td>
		<td></td>
	</tr>
	<tr>
		<td>Function optional arguments (in <code>@param</code> annotations)</td>
		<td><code>@param {number=} opt_argument</code><br>
		An optional parameter of type number.</td>
		<td>Specifies that the annotated function accepts an optional argument.</td>
		<td></td>
	</tr>
	<tr>
		<td>The ALL type</td>
		<td><code>{*}</code></td>
		<td>Indicates that the variable can take on any type.</td>
		<td></td>
	</tr>
	<tr>
		<td>The UNKNOWN type</td>
		<td><code>{?}</code></td>
		<td>Indicates that the variable can take on any type, and the compiler should not type-check any uses of it.</td>
		<td></td>
	</tr>
  </tbody>
</table>
