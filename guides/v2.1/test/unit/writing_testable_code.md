---
group: unit-testing
title: Writing Testable Code
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.1
functional_areas:
  - Testing
  - test
---

This topic does not aim to be a replacement for existing documentation about testing, but rather tries to highlight some thoughts on the subject. Although the truth of anything depends somewhat on the context, this topic attempts to provide information that is applicable in *most* situations.

## Tests should be simple

Tests should be trivial to write. Simple, small classes with few collaborators are easy to test. If testing a class is difficult, the class probably has grown too large and does too much. Split the class into several classes, each of which does only one thing.

## Manage dependencies

A big part of making code testable is managing its dependencies. Dependencies can take many forms and they can be clearly stated or hidden.  

The fewer dependencies a class has and the more obvious they are, the easier it is to maintain and test the class. At the same time, the class is less likely to break because of future changes.

### Creating new instances

We strongly recommend you do *not*:

*   Use `new` to instantiate new objects, because that removes the flexibility the Magento dependency configuration offers.  
*   Use the `ObjectManager` directly in production code.  

There always is a better alternative, usually a [generated]({{ page.baseurl }}/extension-dev-guide/code-generation.html) `Factory` class, or a [`Locator`](https://thephp.cc/news/2015/09/dependencies-in-disguise){:target="_blank"} class of sorts.  

<div class="bs-callout bs-callout-info" id="info">
  <p>This rule applies only to production code. When writing <a href="{{ page.baseurl }}/test/integration/integration_test_execution.html">integration tests</a>, this is not true. In fact, the object manager is recommended for integration tests.</p>
</div>

### Collaborator classes

Whenever an external class property, class constant, or a class method is used in a file, this file depends on the class containing the method or constant. Even if the external class is not used as a instantiated object, the current class is still hard-wired to depend on it.  

{% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} cannot execute the code unless it can load the external class, too. That is why such external classes are referred to as *dependencies*. Try to keep the number dependencies of to a minimum.  

Collaborator instances should be passed into the class using [constructor injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#dep-inj-preview-cons).

### The environment (file system, time, global variables)

Whenever your code requires access to some part of the environment, try to use a collaborator class that can easily be replaced by a test double (also referred to as a *mock*) instead.

For example, if you...

* ...need file system access?  

  Use [`\Magento\Framework\Filesystem\Io\IoInterface`]({{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/Io/IoInterface.php){:target="_blank"} instead of `fopen()`, `dir()` or other native methods.
* ...need the current time?  

   Inject a [`\DateTimeInterface`](http://php.net/manual/en/refs.calendar.php){:target="_blank"} instance (for example `\DateTimeImmutable`) and use that.
* ...need the remote IP?  

  Use [`\Magento\Framework\HTTP\PhpEnvironment\RemoteAddress`]({{ site.mage2000url }}lib/internal/Magento/Framework/HTTP/PhpEnvironment/RemoteAddress.php){:target="_blank"}.
* ...need access to `$_SERVER`?  

  Consider using [`\Magento\Framework\HTTP\PhpEnvironment\Request::getServerValue()`]({{ site.mage2000url }}lib/internal/Magento/Framework/HTTP/PhpEnvironment/Request.php){:target="_blank"}.

Anything that can be easily replaced by a test double is preferable to using low level functions.

## Interfaces over classes

Dependencies on *interfaces* should be preferred over dependencies on *classes* because the former decouples your code from implementation details. This helps to isolate your code from future changes.  

This guideline is true only if you exclusively use the methods and constants defined in the interface. If your code also uses other public methods specific to the class implementing the interface, your code is no longer independent of the implementation details.  

You lose any benefits of having an interface if you use methods of a concrete class.  

Even worse, the code is lying, because apparently there is a dependency on the interface only; however, you could not use a different implementation of the same interface. This can lead to considerable maintenance costs down the road. In such cases, using the class name of the concrete implementation is preferable to using the interface name as a dependency.  

To illustrate, assume there is a theoretical `RequestInterface` with two methods, `getPathInfo()` and `getParam($name)`.

For example:

{%highlight php startinline=true %}
interface RequestInterface
{
    public function getPathInfo();
    public function getParam($name);
}
{%endhighlight%}

Let's also assume there is a concrete implementation `HttpRequest` that also has a public method `getParams()` in addition to the two interface methods.

{%highlight php startinline=true %}
class HttpRequest implements RequestInterface
{
    public function getPathInfo() {...}
    public function getParam($name) {...}
    public function getParams() {...}
}
{%endhighlight%}

Any code that depends on `RequestInterface` should avoid using the `getParams()` method, because it is not part of the interface.  

{%highlight php startinline=true %}
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

This completely defeats the purpose of the interface. A better solution might be the following:

{%highlight php startinline=true %}
public function doSomething()
{
    foreach (['foo', 'bar'] as $paramName) {
        $value = $this->request->getParam($paramName);
        // ... some more code
    }
}
{%endhighlight%}

The second example method `doSomething()` does not call the `getParams()` method. 

If `getParams()` had been called, the class `MyClass` would have instantly depended on the `HttpRequest` implementation and the benefit of having an interface would have been completely lost.  

If cannot avoid using `getParams()`, you can do any of the following:

*   Add the `getParams()` method to `RequestInterface` 
*   Make `MyClass` dependent on `HttpRequest` directly instead of using `RequestInterface` as a constructor argument

The benefit *interfaces* offer is that interfaces keep code decoupled from implementation details. This means that future changes won't cause your code to fail unless the interface is changed too.  

Also, interfaces can very easily be replaced by test doubles (also referred to as *mocks*). Mocking concrete classes can be much more complex.

## Class and method size

Try to keep the number of methods in a class and the number of lines of code per method as few as possible.  

Shorter methods do less, which in turn means they are easier to test. The same is true for small classes.

As a rule of thumb, try to keep methods to five or fewer lines of code.

### Testing private and protected methods

When you see the need to write tests for `private` scope methods, it usually is a sign that the class under test is doing too much.  

Consider extracting the private functionality into a separate class and using that class as a collaborator. The extracted class then provides the functionality using a public method and can easily be tested.

## Helpful principles

Many good practices for software development in general and object oriented programming in particular have been formulated as principles over the last decades. Applying these rules of thumb helps to keep code in good shape and also leads to more easily testable code.  

The following list principles are by no means complete, but they might serve as a starting point when you start to write testable code.

### Tell, don't ask

Try to use a few getters as possible. Instead, use methods that tell the objects directly what to do. Asking for object values is a sign of misplaced responsibilities. [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck){:target="_blank"} called that "feature envy".

Consider moving the code in that needs the value into a class that has the data available as the following example shows:

{%highlight php startinline=true %}
function extractMatchingDocuments(Document $searchDoc, array $documents)
{
    return array_filter($documents, function (Document $doc) use ($searchDoc){
        return $doc->getFieldValue() === $searchDoc->getFieldValue();
    });
}
{%endhighlight%}

The following example moves the comparison into a `matches()` method on the `Document` class instead.

{%highlight php startinline=true %}
function extractMatchingDocuments(Document $searchDoc, array $documents)
{
    return array_filter($documents, function (Document $doc) use ($searchDoc){
        return $searchDoc->matches($doc);
    });
}
{%endhighlight%}

### The Law of Demeter

The [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter){:target="_blank"} principle is sometimes stated as "Talk to friends only" or "Don't talk to strangers." It states that code can call methods only on objects that it received in one of the following ways:

* Objects received as constructor arguments
* Objects received as arguments to the current method
* Objects instantiated in the current method

The principle explicitly states that no method can be called on objects that are the return value of another method call. Calling method calls on returned objects introduces a hidden dependency on the returned object type.

The following example violates the Law of Demeter by calling the method `getByName()` on the return value of `getHeaders()`.

{%highlight php startinline=true %}
function isJsonResponse(Response $response)
{
    $headers = $response->getHeaders();
    return $headers->getByName('Content-Type') === 'application/json';
}
{%endhighlight%}

The solution is to add the method `isJsonResponse()` to the response object instead.

Method chaining (for example, `$foo->getSomething()->setThat($x)->doBar()`) is often a sign of this problem. When testing this type of code, you must often create test doubles that must be set up to return other test doubles and so on ("Mocks returning mocks...").

### "I don't care"

An interesting approach to writing more testable code is to try to delegate as much as possible to other classes. Every time any currently not available resource is needed, just think "I don't care where that comes from" and add a collaborator class that provides it.  

At first this might seem like it causes the number of classes to explode, but in fact each one of the classes is very short and simple and usually has very limited responsibilities.  

Almost as a side effect, those classes are very easy to test.

#### For more information

* [Rules of simple software design](http://martinfowler.com/bliki/BeckDesignRules.html){:target="_blank"} by Kent Beck
* [Clean Code](https://books.google.com/books/about/Clean_Code.html?id=dwSfGQAACAAJ){:target="_blank"} by Robert C. Martin
* [Refactoring](http://martinfowler.com/books/refactoring.html){:target="_blank"} by Martin Fowler
* [Growing Object Oriented Software Guided by Tests](http://www.growing-object-oriented-software.com){:target="_blank"} by Steve Freeman and Nat Pryce
