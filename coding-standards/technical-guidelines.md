---
group: coding-standards
title: Technical guidelines
redirect_from:
functional_areas:
    - Standards
---

## About this document

### Overview

This document lists the fundamental coding and application design principles that guide Magento 2 developer team members.

Magento core developers use this document as a reference during code reviews; some rules have corresponding code checks in the Magento static tests.

These guidelines came from many years of hard work, experience, and discussions. We strongly believe that new technical initiatives should follow these recommendations, and the existing code should be improved to meet them.

### Text conventions

Use [RFC2119] to interpret keywords like:

* MUST and MUST NOT

* REQUIRED

* SHALL and SHALL NOT

* SHOULD and SHOULD NOT

* RECOMMENDED

* MAY

* OPTIONAL

## 1. Basic programming principles

1.1. Function arguments SHOULD NOT be modified.

## 2. Class design

2.1. Object decomposition MUST follow the [SOLID principles].

2.2. Object MUST be ready for use after instantiation. No additional public initialization methods are allowed.

{% collapsible Examples: %}
<table>
    <tr>
        <th><span style="color: red">Not recommended</span></th>
        <th><span style="color: green">Recommended</span></th>
    </tr>
    <tr>
        <td>
{% highlight php %}
class Config
{
    private $data;

    public function init() // or load()
    {
        $this->data = $this->fileReader->load('cache.xml');
    }

    public function getValue($key)
    {
        return $this->data[$key];
    }
}
{% endhighlight %}
        </td>
        <td>
{% highlight php %}
class Config
{
    private $data;

    public function getValue($key)
    {
        if ($this->data === null) {
            $this->data = $this->fileReader->load('cache.xml');
        }

        return $this->data[$key];
    }
}
{% endhighlight %}
        </td>
    </tr>
</table>
{% endcollapsible %}
---

{:start="2.3"}
2.3. Class constructor can have only dependency assignment operations and/or argument validation operations. No other operations are allowed.

2.3.1. Constructor SHOULD throw an exception when validation of an argument has failed.

{% collapsible Example: %}
``` php?start_inline=1
class Composite
{
    /**
     * @var RendererInterface[]
     */
    private $renderers;

    /**
     * @param RendererInterface[] $renderers
     * @throws InvalidArgumentException
     */
    public function __construct(array $renderers)
    {
        foreach ($renderers as $renderer) {
            if (!$renderer instanceof RendererInterface) {
                throw new InvalidArgumentException(
                    sprintf('Instance of the phrase renderer is expected, got %s instead.', get_class($renderer))
                );
            }
        }
        $this->renderers = $renderers;
    }
}
```
{% endcollapsible %}
---

{:start="3.2"}
2.3.2. Events MUST NOT be triggered in constructors.

{% collapsible Examples: %}
<table>
    <tr>
        <th><span style="color: red">Not recommended</span></th>
        <th><span style="color: green">Recommended</span></th>
    </tr>
    <tr>
        <td>
{% highlight php %}

class Config
{
    private $data;

    public function __construct($fileReader, $eventManager)
    {
        $this->data = $fileReader->read('cache.xml');
        $eventManager->dispatch('config_read_after');
    }
}
{% endhighlight %}
        </td>
        <td>
{% highlight php %}
class Config
{
    private $fileReader;

    private $eventManager;

    public function __construct($fileReader, $eventManager)
    {
        $this->eventManager = $eventManager;
        $this->fileReader = $fileReader;
    }

    public function getData($key)
    {
        if ($this->data === null) {
            $this->data = $this->fileReader->read('cache.xml');
            $this->eventManager->dispatch('config_read_after');
        }
        return $this->data[$key];
    }
}
{% endhighlight %}
        </td>
    </tr>
</table>
{% endcollapsible %}

---

{:start="2.4"}
2.4. All dependencies MUST be requested by the most generic type that is required by the client object.

{% collapsible Examples: %}
<table>
    <tr>
        <th><span style="color: red">Not recommended</span></th>
        <th><span style="color: green">Recommended</span></th>
    </tr>
    <tr>
        <td>
{% highlight php %}
interface SessionAdapterInterface
{}

RedisSessionAdapter implements SessionAdapterInterface
{}

class SessionManager
{
    public function __construct(RedisSessionAdapter $sessionAdapter)
    {}
}

// Breaks polymorphism principle, restricts what types can be passed at the runtime.
{% endhighlight %}
        </td>
        <td>
{% highlight php %}
interface SessionAdapterInterface
{}

RedisSessionAdapter implements SessionAdapterInterface
{}

class SessionManager
{
    public function __construct(SessionAdapterInterface $sessionAdapter)
    {}
}
{% endhighlight %}
        </td>
    </tr>
</table>
{% endcollapsible %}

---

2.5. Proxies and interceptors MUST NEVER be explicitly requested in constructors.

2.6. Inheritance SHOULD NOT be used. Composition SHOULD be used for code reuse.
{% collapsible Examples: %}
<table>
    <tr>
        <th><span style="color: red">Not recommended</span></th>
        <th><span style="color: green">Recommended</span></th>
    </tr>
    <tr>
        <td>
{% highlight php %}
class AbstractController extends Action
{
    // ...
    protected function validate(
        $request
    ) {}

    protected function generateHash(
        $request
    ) {}
}

class Edit extends AbstractController
{
    public function execute()
    {
        $errors = $this->validate(
            $request
        );

        // ...

        $hash = $this->generateHash(
            $request
        );
        // ...
    }
}

// Smaller classes, one responsibility, more flexible, easy to understand, more testable.

{% endhighlight %}
        </td>
        <td>
{% highlight php %}
class Edit extends Action
{
    public function __constructor(
        ValidatorInterface $validator,
        HashGeneratorInterface $hashGenerator
    ) {}

    public function execute()
    {
        $errors = $this->validator->validate($request);
        // ...
        $hash = $this->hashGenerator->generateHash($request);
    }
}

{% endhighlight %}
        </td>
    </tr>
</table>
{% endcollapsible %}

---

2.7. All non-public properties and methods SHOULD be private.

2.8. Abstract classes MUST NOT be marked as public `@api`.

2.9. Service classes (ones that provide behavior but not data, like `EventManager`) SHOULD NOT have a mutable state.

2.10. Only data objects or entities (Product, Category, etc.) MAY have any observable state.

2.11. "Setters" SHOULD NOT be used. They are only allowed in Data Transfer Objects.

2.12. "Getters" SHOULD NOT change the state of an object.

2.13. Static methods SHOULD NOT be used.

2.14. [Temporal coupling] MUST be avoided.
{% collapsible Example #1: %}
<table>
    <tr>
        <th><span style="color: red">Not recommended</span></th>
        <th><span style="color: green">Recommended</span></th>
    </tr>
    <tr>
        <td>
{% highlight php %}
$url = new Url();
$url->setBaseUrl($baseUrl);
echo $url->get('custom/path'); // prints full URL

// Developer forgot or didn’t know that you need to call setBaseUrl
$url = new Url();
echo $url->get('custom/path'); // Throws exception, which makes issue smaller. If it doesn't throw and exception, it could lead to a hidden bug more likely.

// Method with out parameters that doesn’t return anything could be sign of temporal coupling.

{% endhighlight %}
        </td>
        <td>
{% highlight php %}
$url = new Url($baseUrl);
echo $url->get('custom/path');

// Or
$url = new Url();
echo $url->get($baseUrl, 'custom/path');

// Only one way to use API, no temporal coupling.

{% endhighlight %}
        </td>
    </tr>
</table>
{% endcollapsible %}

---

{% collapsible Example #2: %}
<table>
    <tr>
        <th><span style="color: red">Not recommended</span></th>
        <th><span style="color: green">Recommended</span></th>
    </tr>
    <tr>
        <td>
{% highlight php %}
class Edit extends Action
{
    public function execute()
    {
        // ...
        $product = $productResource->load($product, $productSku, 'sku');
        $this->registry->register('product', $product);
    }
}

class View extends Template
{
    public function getProductName()
    {
        $product = $this->registry->get('product');
        return $product->getName();
    }
}

{% endhighlight %}
        </td>
        <td>
{% highlight php %}
class Edit extends Action
{
    public function execute()
    {
        // ...
        $product = $productRepository->get($productSku);
    }
}

class View extends Template
{
    public function getProductName()
    {
        // ...
        $product = $productRepository->get($productSku);
        return $product->getName();
    }
}
// More flexible, no dependencies between classes, no temporal coupling.

{% endhighlight %}

{% endcollapsible %}

---

2.15. Method chaining in class design MUST be avoided.

2.16. [Law of Demeter] SHOULD be obeyed.

2.17. Patterns

2.17.1. Proxies SHOULD be used for lazy-loading optional dependencies.

2.17.2. Composites SHOULD be used when there is a need to work with a tree as a single object.

 {% collapsible Example: %}
 You need to read configuration from different sources (like database or filesystem) and want to make the reading process configurable: allow extensions to add more configuration sources. In this case, you can create a `ConfigReaderInterface` with a composite implementation - `ConfigReaderComposite`, and configure particular readers as children of a composite reader.
 {% endcollapsible %}
---
2.17.3. Strategy SHOULD be used when there are multiple algorithms for performing an operation.

## 3. Dependency injection

3.1. There SHOULD be no circular dependencies between objects.

3.2. The `app/etc/di.xml` file MUST contain only framework-level {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}Dependency Injection{% endglossarytooltip %} (DI) settings.

3.3. All modular DI settings (except for Presentation layer configuration) SHOULD be stored in `<module_dir>/etc/di.xml`.

3.4. All modular Presentation layer DI settings SHOULD be stored in `<module_dir>/etc/<area_code>/di.xml`.

## 4. Interception

4.1. Around-plugins SHOULD only be used when behavior of an original method is supposed to be substituted in certain scenarios.

4.2. Plugins SHOULD NOT be used within own {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

4.3. Plugins SHOULD NOT be added to data objects.

4.4. Plugins MUST be stateless.

## 5. Exceptions

5.1. All exceptions that are surfaced to the end user MUST produce error messages in the following format:

- Symptom

- Details

- Solution or workaround

{:start="5.2"}
5.2. Exceptions MUST NOT be handled in the same function where they are thrown.

5.3. If a function A calls function B, and function B might throw an exception, this {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} MUST be either processed by function A or declared by the @throws annotation in the documentation block of function A.

5.4. Exceptions MUST NOT handle message output. It is the processing code that decides how to process an exception.

5.5. Business logic (both application and domain) MUST NOT be managed with exceptions. Conditional statements SHOULD be used instead.

5.6. The short name of an exception class MUST be clear, meaningful, and state the cause of exception.

5.7. Thrown exceptions SHOULD be as specific as possible. The top generic `\Exception` SHOULD NOT be thrown anywhere.

5.8. All direct communications with third-party libraries MUST be wrapped with a try/catch statement.

5.9. `\Exception` SHOULD be caught only in the code that calls third-party libraries, in addition to catching specific exceptions thrown by the {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %}.

5.10. `\Exception` SHOULD NOT be thrown in Front Controller and Action Controllers.

5.11. A separate exceptions hierarchy SHOULD be defined on each application layer. It is allowed to throw exceptions that are only defined on the same layer.

5.12. If an exception is caught on the application layer that differs from the one where it has been thrown, and it SHOULD be re-thrown, you SHOULD create a new exception instance that is appropriate for the current layer. In this case, the original exception must be passed to a new instance with the "previous" argument.

5.13. It is not allowed to absorb exceptions with no logging or/and any workaround operation executed.

5.14. Any exception SHOULD be logged only in the `catch` block where it is processed, and SHOULD NOT be re-thrown.

5.15. Exceptions SHOULD NOT be caught in a loop. The loop SHOULD be wrapped with a `try/catch` construct instead.

5.16. If a method uses system resources (such as files, sockets, streams, etc.), the code MUST be wrapped with a `try` block and the corresponding `finally` block. In the `finally` sections, all resources SHOULD be properly released.

5.17. `LocalizedException` SHOULD only be thrown in the Presentation layer (Controllers, Blocks).

## 6. Application layers

### 6.1. All layers

6.1.1. Application SHOULD be structured in compliance with the [CQRS principle].

6.1.2. Every application layer (Presentation, Service Contracts, Data Access) MUST process (handle or re-throw) exceptions of the underlying layer.

### 6.2. Presentation layer

6.2.1. According to CQRS, the Presentation layer hosts the Command and the Query Infrastructures:

* **Command** for Actions

* **Query** for {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}Layout{% endglossarytooltip %} and its elements (Blocks and UI Components)

6.2.2. Request, Response, Session, Store Manager and Cookie objects MUST be used only in the Presentation layer.

6.2.3. All actions MUST return the `ResultInterface` implementation.

6.2.4. Actions MUST NOT reference blocks declared in layout.

6.2.5. Configuration for the presentation layer MUST be declared in the corresponding application area. This includes events and plugins that customize the presentation layer.

###  6.3. Data Access (Persistence) layer

6.3.1. Entities MAY have fields scoped differently (in product, EAV --- per store, options --- per website).

6.3.2. Every persistence operation MUST be performed with one scope set.

6.3.3. Entities MUST NOT contain persistence-related logic.

6.3.4. MySQL's `strict_mode` variable SHOULD be aligned with the default `strict_mode` of the latest MySQL release.

### 6.4. Service Contracts (Application) layer

We are reviewing this section and will publish it soon.

## 7. Configuration

7.1. An Application Instance consists of:

* Code

* Environment Configuration

* Data

7.2. Code includes:

* application codebase

* {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} configuration

* generated code and {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %}

* database structure

* system configuration values

* configuration scopes (stores/store groups/websites)

* {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} entities

7.3. Environment Configuration includes information about application services connection.

7.4. Data includes the business {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} data.

7.5. Code and Environment Configuration MUST not be stored in Data Storage.

7.6. Installation process MUST NOT modify Code.

7.7. All XML configuration formats MUST be declarative. Imperative nodes are not allowed.

7.8. All Configuration objects MUST use `Magento\Framework\Config`.

## 8. Modularity

8.1. The Application Framework (`Magento\Framework\*`) MUST NOT depend on application modules.

8.2. All dependencies MUST be declared in the component's `composer.json` file.

8.3. If component A uses behavior of Component B, such Component B MUST be declared in the `require` section of Component A's `composer.json` file, except for cases where Component B is used in the code that customizes the behavior of Component B.

8.4. If component A extends/customizes the behavior of component B through its customization points (layout handles, plugins, events, etc.), such Component B MUST be declared in the `suggest` section of Component A.

8.5. Only the `@api` code of any module can be referenced by other modules.

8.6. A module MUST NOT contain references to {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} resources.

8.7. A component MUST NOT rely neither on dependencies of dependencies nor on dependencies of the project it is included in (e.g., Magento application). All component dependencies MUST be stated explicitly.

## 9. Browser-Server interaction in web application

9.1. All Client-Server calls must follow the [HTTP Protocol].

9.2. All customer-agnostic data (Products, Categories, CMS Pages) MUST be rendered on a server and cached in a public {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} server (Varnish).

9.3. All customer-specific data MUST be rendered on the browser side using a {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} (JS) application.

9.4. {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}markup{% endglossarytooltip %} generated on server MUST NOT contain user-specific data.

9.5. HTML markup generated on server MUST NOT contain session-specific data (e.g. a form element with a CSRF token).

9.6. A JS application MAY receive customer-specific data using the CustomerData JS {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}.

9.7. All state-modifying requests from a browser SHOULD be performed with AJAX requests.

9.8. If an error occurs during request handling, the server MUST return an appropriate [HTTP Status Code] and an explanation of an error in the response body.

9.9. All headers MUST be respected.

9.10. The Request, Session, and Cookie objects MUST NOT be injected in an object constructor. They MUST be passed only as method arguments.

9.11. Operation scopes MUST always be explicitly requested by operations (`StoreManager` SHOULD NOT be used to retrieve the store ID).

## 10. JavaScript (JS) application

10.1. The Magento 2 {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI Component{% endglossarytooltip %} framework MUST be used to build frontend applications.

10.2. Only private content SHOULD be rendered in browser.

10.3. All module dependencies of a RequireJS module MUST be declared in the module's definition header. No direct calls to `require` SHOULD be made unless the list of modules to be loaded is dynamic.

10.4. The [W3C Content Security Policy] MUST be followed.

10.5. ESLint [rules][rules] SHOULD BE followed.

10.5.1. ES5 SHOULD be used as a JS standard.

10.5.2. Language features (closures) MUST be used for scope management. There SHOULD be no `_` (underscore) naming convention for private properties.

10.5.3. All asynchronous operations MUST be represented with JQuery AJAX calls.

10.5.4. Global properties (window.*) MUST NOT be used. A module system SHOULD be used for shared objects.

10.5.5. Modules MUST NOT have external side effects.

10.5.6. Function declarations MUST be used for private functions instead of function expressions.

10.5.7. Re-declaration of function names MUST NOT be used.

## 11. Testing

### 11.1. White-box testing (unit, integration, functional)

11.1.1. Only public methods SHOULD be tested. Private and protected behavior SHOULD be tested through public methods.

### 11.2. Unit testing

11.2.1. All objects SHOULD be tested in isolation.

11.2.2. `ObjectManager` MUST NOT be used in unit tests.

11.2.3. `ObjectManagerHelper` MAY BE used to automatically mock all dependencies of the object under test.

## 12. Web API

12.1. Both REST and SOAP API's MUST be exposed.

12.2. All {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}Web API{% endglossarytooltip %} GET endpoints MUST return lists of entities.

## 13. Command line interface (CLI)

13.1. Magento 2 [CLI Command Naming Guidelines] MUST be followed.

13.2. A CLI command MUST be created for any functionality intended to be used by a system integrator/system administrator/developer (for example: change indexer mode, generate a configuration file, etc.).

13.3. A CLI command MUST always run in a global area. If a command needs a specific area to perform its functions, such area SHOULD be set up before execution.

13.4. Exception in a single CLI command SHOULD NOT break the CLI framework; running other commands SHOULD still be possible.

## 14. Events

14.1. All values (including objects) passed to an {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} MUST NOT be modified in the event observer. Instead, plugins SHOULD BE used for modifying the input or output of a function.

{% collapsible Example: %}
``` php?start_inline=1
class SampleEventObserverThatModifiesInputs
{
    /**
     * @param \Magento\Framework\Event\Observer $observer
     */
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        /** @var \Magento\Framework\App\DataObject $transport */
        $transport = $observer->getData('transport');

        if ($transport->getData('some_value') === true) {
            /**
             * Expecting this value to go back to the original event dispatcher violates
             * this rule. Other observers could change the data, or Magento could make
             * architectural changes always sending immutable objects.
             */
            $transport->setData('output_return_value', true);
        }
    }
}
```
{% endcollapsible %}
---

{:start="14.2"}
14.2. Events used SHOULD be observed as specifically as possible. A `global` subscription to an event SHOULD NOT be used when the area impacted is just `frontend`.

## 15. Security

15.1. Use prepared statements for SQL queries.

15.2. Broken Authentication protection.

15.2.1. Where possible, implement multi-factor authentication to prevent automated, credential stuffing, brute force, and stolen credential re-use attacks.

15.2.2. Do not ship or deploy with any default credentials, particularly for admin users.

15.2.3. Implement weak-password checks, such as testing new or changed passwords against a list of the [top 10000 worst passwords](https://github.com/danielmiessler/SecLists/tree/master/Passwords).

15.2.4. Align password length, complexity, and rotation policies with [NIST 800-63 B's guidelines in section 5.1.1 for Memorized Secrets](https://pages.nist.gov/800-63-3/sp800-63b.html#memsecret) or other modern, evidence-based password policies.

15.2.5. Ensure registration, credential recovery, and API pathways are hardened against account enumeration attacks by using the same messages for all outcomes.

15.2.6. Limit or increasingly delay failed login attempts. Log all failures and alert administrators when credential stuffing, brute force, or other attacks are detected.

15.2.7. Use a server-side, secure, built-in session manager that generates a new random session ID with high entropy after login. Session IDs should not be in the URL, be securely stored and invalidated after logout, idle, and absolute timeouts.

15.3. Cross-Site Scripting (XSS) protection.

15.3.1. Sanitize input; escape output.

15.3.2. Follow [templates XSS security guidelines]({{ page.baseurl }}/frontend-dev-guide/templates/template-security.html) for escaping output.

15.3.3. Incoming data should be casted to the expected type. String data should be validated/sanitized.

15.3.4. Incoming string data length should be checked.

15.3.5. Special characters, like null byte characters, should be dropped from Incoming string data.

15.4. A module that introduces Admin Panel functionality should have ACL.

15.5. Misconfiguration protection.

15.5.1. Do not include/require unused libraries/frameworks.

15.5.2. A segmented application architecture that provides effective, secure separation between components or tenants, with segmentation, containerization, or cloud security groups (ACLs).

15.5.3. Sending security directives to clients, e.g. [Security Headers](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project).

15.6. Sensitive Data Exposure protection.

15.6.1. Exceptions/Notices/Warnings should be caught and logged.

15.6.2. Error output should not be displayed to the user. Display standard messages to inform the user.

15.6.3. Logs should not be excessive, e.g. PDO exception contains MySQL credentials that should not be logged.

15.7. Cross-Site Request Forgery (CSRF) protection.

15.7.1. CSRF tokens mechanism should be utilized.

15.7.2. All data manipulation requests should be made with POST requests.

15.8. Frequently update third-party libraries used in the project/component to eliminate known vulnerabilities.

15.9.1. User-submitted requests containing path and file name SHOULD NOT be trusted.

15.9.2. User-submitted path and file values SHOULD be sanitized to remove dot-dot-slash from the request.

15.10. Remote Code Execution (RCE) protection.

15.10.1. `eval()`, `passthru()`, `system()`, `shell_exec()`, `serialize()`, `unserialize()`, `md5()`, `srand()`, `mt_srand()` SHOULD NOT be used.

15.10.2. User-submitted values SHOULD NOT be passed directly to `include*()`, `require*()`, `create_function()`, `fopen()`, `preg_replace()`.

15.10.3. The pattern parameter (first argument) of `preg_replace()` MUST BE escaped with `preg_quote()` if it has a user-submitted value. A user-submitted value can be passed directly as a second parameter, but MUST BE escaped before it is used later in the application.

15.10.4. Variable functions SHOULD NOT be used if the variable values are submitted by the user.

15.11. Security capabilities SHOULD be implemented either on the Magento Framework level or in a dedicated module(s) and utilized by the entire application in a centralize manner.

15.12. Files MUST be secured by a web server configuration (e.g., `.htaccess` or `nginx.conf`), except files that are intended to be publicly accessible.

<!-- LINKS: DEFINITIONS AND ADDRESSES -->

[RFC2119]: https://tools.ietf.org/html/rfc2119
[SOLID principles]: https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
[Temporal coupling]: http://blog.ploeh.dk/2011/05/24/DesignSmellTemporalCoupling/
[Law of Demeter]: https://en.wikipedia.org/wiki/Law_of_Demeter
[CQRS principle]: https://martinfowler.com/bliki/CQRS.html
[HTTP Protocol]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
[HTTP Status Code]: https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
[W3C Content Security Policy]: https://w3c.github.io/webappsec-csp/
[rules]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc-magento
[CLI Command Naming Guidelines]: {{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-naming-guidelines.html
