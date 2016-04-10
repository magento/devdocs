---
layout: default
group: test-guide
subgroup: A5_Running_Unit_Tests
title: Writing Testable Code
menu_title: Writing Testable Code
menu_node: parent
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
github_link: test/unit/writing_testable_code.md
---

## Writing testable code

* TOC
{:toc}

Much has been written on the subject of writing simple code that is simple to test.  
This article does not aim to be a replacement for the existing literature, but rather tries to highlight some thoughts on the subject.  
Some points might be written as if they are absolute truths, even though we are aware that everything depends on context.  
We feel it the statements are true in the *most* situations.

### TL;DR

Tests should be trivial to write. Simple, small classes with few collaborators are easy to test.  
If a class is hard to test, it probably has grown too large and should be split into several classes, each of which does only one thing.

### Managing dependencies

A big part of making code testable is managing the dependencies.  
Dependencies can take many forms. They can be clearly stated or hidden.  
The fewer dependencies a class has and the more obvious they are, the easier it is to maintain and test the class. At the same time the class will be less likely to break because of future changes.

#### Creating new instances

Do not use `new` to instantiate new objects, because that removes the flexibility the Magento dependency configuration offers.  
Also, do not use the `ObjectManager` directly in production code.  
There always is a better alternative, usually a [generated](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/code-generation.html) `Factory` class, or a [`Locator`](https://thephp.cc/news/2015/09/dependencies-in-disguise) class of sorts.  

<div class="bs-callout bs-callout-info" id="info">
  <p>This rule only applies to production code. When writing integration tests this is not true. In fact, in order to wire up an integration test case, using the object manager is recommended.</p>
</div>

#### Collaborator classes

Whenever an external class property, class constant or a class method is used in a file, this file depends on the class containing the method or constant.  
Even if the external class is not used as a instantiated object, the current class is still hard-wired to it.  
PHP will not be able to execute the code unless it can load the external class, too. That is why such external classes are referred to as **dependencies**.  
Try to keep the number dependencies of to a minimum.  

Collaborator instances should be passed into the class through constructor injection.

#### The environment (filesystem, time, global variables)

Whenever some part of the environment is required by your code, try to use a collaborator class that can easily be replaced by a test double instead.
For example, if you...

* ...need file system access?  
  Use `\Magento\Framework\Filesystem\Io\IoInterface` instead of `fopen()`, `dir()` or other native methods.
* ...need the current time?  
   Inject a `\DateTimeInterface` instance (for example `\DateTimeImmutable`) and use that.
* ...need the remote IP?  
  Use `\Magento\Framework\HTTP\PhpEnvironment\RemoteAddress`.
* ...need access to `$_SERVER`?
  Consider using `\Magento\Framework\HTTP\PhpEnvironment\Request::getServerValue()`.

Anything that can be easily replaced by a test double is preferable to using low level functions.

### Interfaces &gt; Classes

Dependencies on **interfaces** are much to be preferred over dependencies on **classes**, because the former decouples your code from implementation details.  
That is one way to isolate your code from future changes.  

This is true only if you exclusively uses the methods and constants defined in the interface, and not also uses other public methods of the class implementing the interface.  

If methods of a concrete class are used, the benefits of having an interface are completely lost.  
Even worse, the code is lying, because at first glance it looks like it is a dependency on the interface only when in fact a different implementation of the same interface could not be used.  
This can lead to considerable maintenance costs down the road. In such cases using the class name of the concrete implementation is preferable to using the interface name as a dependency.  

To illustrate, lets assume there is a theoretical `RequestInterface` with two methods `getPathInfo()` and `getParam($name)`.

{%highlight php%}
interface RequestInterface
{
    public function getPathInfo();
    public function getParam($name);
}
{%endhighlight%}

Lets also assume there is a concrete implementation `HttpRequest` that that also has a public method `getParams()` in addition to the two interface methods.

{%highlight php%}
class HttpRequest implements RequestInterface
{
    public function getPathInfo() {...}
    public function getParam($name) {...}
    public function getParams() {...}
}
{%endhighlight%}

Any code that depends on `RequestInterface` should avoid using the `getParams()` method, because it it not part of the interface.  

{%highlight php%}
class MyClass
{
    /**
     * @var RequestInterface
     */
    private $request;

    public function __construct(RequestInterface $request)
    {
        $this->request = $request;
    }

    public function doSomething()
    {
        foreach ($this->request->getParams() as $paramName => $value) {
            // ... some more code
        }
    }
}
{%endhighlight%}

This completely defeats the purpose of the interface.  
A better solution might be the following:

{%highlight php%}
public function doSomething()
{
    foreach (['foo', 'bar'] as $paramName) {
        $value = $this->request->getParam($paramName);
        // ... some more code
    }
}
{%endhighlight%}

The above method `doSomething()` does not call the `getParams()` method.
If `getParams()` would have been called, the class `MyClass` would have instantly depended on the `HttpRequest` implementation and the benefit of having an interface would have been completely lost.  

Should it be unavoidable to use `getParams()`, the `getParams()` method should either be added to the interface, or the class `MyClass` should depend on `HttpRequest` instead of `RequestInterface` as a constructor argument.  

The **benefit interfaces offer** is that it keeps code decoupled from implementation details.  
This means, future changes will not cause your code to fail unless the interface is changed, too.  
Also, interfaces can very easily be replaced by test doubles (also called "mocks"). Mocking concrete classes can be much more complex.

### Class and method size

Try to keep the number of methods in a class and the number of lines of code per method as little as possible.  
Shorter methods do less, which in turn means they are easier to test.
The same is true for small classes.

### Testing private and protected methods

When you feel the need to write tests for private scope methods, that usually is a sign that the class is doing too much.  
Consider extracting that functionality in a separate class and using that as a collaborator. The extracted class then provides the functionality via a public method and can easily be tested.

### Helpful principles

Many good practices for development in general and object oriented programming in particular have been formulated as principles over the last decades.  
Applying these rules of thumb helps to keep code in good shape and also leads to more easily testable code.  
The following list principles are by no means complete, but they might serve as a starting point when trying to write testable code.

#### Tell, don't ask

Try to use a few getters as possible. Instead use methods that tell the objects directly what to do.  
Asking for object values is a sign of misplaced responsibilities. Kent Beck called that "feature envy".
Consider moving the code in that needs the value into the other class that has the data available.

The following example code exhibits feature envy:

{%highlight php%}
function extractMatchingDocuments(Document $searchDoc, array $documents)
{
    return array_filter($documents, function (Document $doc) use ($searchDoc){
        return $doc->getFieldValue() === $searchDoc->getFieldValue();
    });
}
{%endhighlight%}

The following example moves the comparison into a `matches()` method on the `Document` class instead.

{%highlight php%}
function extractMatchingDocuments(Document $searchDoc, array $documents)
{
    return array_filter($documents, function (Document $doc) use ($searchDoc){
        return $searchDoc->matches($doc);
    });
}
{%endhighlight%}

#### The law of demeter

The "Law of demeter" principle is sometimes also called "Only talk to friends" or "Don't talk to strangers".  
It states that code may not call methods on any object, but only on objects that it received in one of the following ways:

* Objects received as constructor arguments
* Objects received as arguments to the current method
* Objects instantiated in the current method.

The principle explicitly states that no method may be called on objects that are the return value of another method call.  
Calling method calls on returned objects introduces a hidden dependency on the returned object type.

The following example violates the law of demeter by calling the method `getByName()` on the return value of `getHeaders()`.

{%highlight php%}
function isJsonResponse(Response $response)
{
    $headers = $response->getHeaders();
    return $headers->getByName('Content-Type') === 'application/json';
}
{%endhighlight%}

The solution would be to add a the method `isJsonResponse()` to the response object instead.

Method chaining (e.g. `$foo->getSomething()->setThat($x)->doBar()`) is often a sign of this problem.  
When testing this type of code it often requires the creation of test doubles which must be set up to return other test doubles and so on ("Mocks returning mocks...").

#### "I don't care"

An interesting approach to writing more testable code is to try to delegate as much as possible to other classes.  
Every time any currently not available resource is needed, just think "I don't care where that comes from" and add a collaborator class that provides it.  

At first this may seem like it causes the number of classes to explode, but in fact each one of the classes will be very short and simple and usually only have a very limited responsibilities.  
Almost as a side effect those classes will be very easy to test.
