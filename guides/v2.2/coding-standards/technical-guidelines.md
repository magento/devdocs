---
group: coding-standards
title: Technical guidelines
redirect_from:
    - /guides/v2.2/coding-standards/technical-guidelines/technical-guidelines.html
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

1.2. Explicit return types MUST BE declared on functions.

1.3. Type hints for scalar arguments SHOULD be used.

1.3.1. All new PHP files MUST have strict type mode enabled by starting with `declare(strict_types=1);`. All updated PHP files SHOULD have strict type mode enabled. PHP interfaces SHOULD NOT have this declaration.

## 2. Class design

2.1. Object decomposition MUST follow the [SOLID principles].

2.2. Object MUST be ready for use after instantiation. No additional public initialization methods are allowed.

{% collapsible Examples: %}

### Not recommended

```php
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
```

### Recommended

```php
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
```

{% endcollapsible %}

---

{:start="2.3"}
2.3. Class constructor can have only dependency assignment operations and/or argument validation operations. No other operations are allowed.

2.3.1. Constructor SHOULD throw an exception when validation of an argument has failed.

{% collapsible Example: %}

``` php
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

### Not recommended

```php
class Config
{
    private $data;

    public function __construct($fileReader, $eventManager)
    {
        $this->data = $fileReader->read('cache.xml');
        $eventManager->dispatch('config_read_after');
    }
}
```

### Recommended

```php
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
```

{% endcollapsible %}

---

{:start="2.4"}
2.4. All dependencies MUST be requested by the most generic type that is required by the client object.

{% collapsible Examples: %}

### Not recommended

```php
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
```

### Recommended

```php
interface SessionAdapterInterface
{}

RedisSessionAdapter implements SessionAdapterInterface
{}

class SessionManager
{
    public function __construct(SessionAdapterInterface $sessionAdapter)
    {}
}
```

{% endcollapsible %}

---

2.5. Proxies and interceptors MUST NEVER be explicitly requested in constructors.

2.6. Inheritance SHOULD NOT be used. Composition SHOULD be used for code reuse.
{% collapsible Examples: %}

### Not Recommended

```php
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
```

### Recommended

```php
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
```

{% endcollapsible %}

---

2.7. All non-public properties and methods SHOULD be private.

2.8. Abstract classes MUST NOT be marked as public `@api`.

2.9. Service classes (ones that provide behavior but not data, like `EventManager`) SHOULD NOT have a mutable state.

2.10. Only data objects or entities (Product, Category, etc.) MAY have any observable state.

2.11. "Setters" SHOULD NOT be used. They are only allowed in Data Transfer Objects.

2.12. "Getters" SHOULD NOT change the state of an object.

2.13. Static methods SHOULD NOT be used.

2.14. [Temporal coupling] MUST be avoided
{% collapsible Example #1: %}

### Not recommended

```php
$url = new Url();
$url->setBaseUrl($baseUrl);
echo $url->get('custom/path'); // prints full URL

// Developer forgot or did not know that you need to call setBaseUrl
$url = new Url();
echo $url->get('custom/path'); // Throws exception, which makes issue smaller. If it does not throw an exception, it could lead to a hidden bug more likely.

// Method with out parameters that does not return anything could be sign of temporal coupling.
```

### Recommended

```php
$url = new Url($baseUrl);
echo $url->get('custom/path');

// Or
$url = new Url();
echo $url->get($baseUrl, 'custom/path');

// Only one way to use API, no temporal coupling.
```

{% endcollapsible %}

---

{% collapsible Example #2: %}

### Not recommended

```php
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
```

### Recommended

```php
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
```

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

3.2. The `app/etc/di.xml` file MUST contain only framework-level [Dependency Injection](https://glossary.magento.com/dependency-injection) (DI) settings.

3.3. All modular DI settings (except for Presentation layer configuration) SHOULD be stored in `<module_dir>/etc/di.xml`.

3.4. All modular Presentation layer DI settings SHOULD be stored in `<module_dir>/etc/<area_code>/di.xml`.

## 4. Interception

4.1. Around-plugins SHOULD only be used when behavior of an original method is supposed to be substituted in certain scenarios.

4.2. Plugins SHOULD NOT be used within own [module](https://glossary.magento.com/module).

4.3. Plugins SHOULD NOT be added to data objects.

4.4. Plugins MUST be stateless.

4.5. Plugins SHOULD NOT change the state of an intercepted object (Intercepted object is `$subject`).

## 5. Exceptions

5.1. All exceptions that are surfaced to the end user MUST produce error messages in the following format:

* Symptom

* Details

* Solution or workaround

{:start="5.2"}
5.2. Exceptions MUST NOT be handled in the same function where they are thrown.

5.3. If a function A calls function B, and function B might throw an exception, this [exception](https://glossary.magento.com/exception) MUST be either processed by function A or declared by the @throws annotation in the documentation block of function A.

5.4. Exceptions MUST NOT handle message output. It is the processing code that decides how to process an exception.

5.5. Business logic (both application and domain) MUST NOT be managed with exceptions. Conditional statements SHOULD be used instead.

5.6. The short name of an exception class MUST be clear, meaningful, and state the cause of exception.

5.7. Thrown exceptions SHOULD be as specific as possible. The top generic `\Exception` SHOULD NOT be thrown anywhere.

5.8. All direct communications with third-party libraries MUST be wrapped with a try/catch statement.

5.9. `\Exception` SHOULD be caught only in the code that calls third-party libraries, in addition to catching specific exceptions thrown by the [library](https://glossary.magento.com/library).

5.10. `\Exception` SHOULD NOT be thrown in Front Controller and Action Controllers.

5.11. A separate exceptions hierarchy SHOULD be defined on each application layer. It is allowed to throw exceptions that are only defined on the same layer.

5.12. If an exception is caught on the application layer that differs from the one where it has been thrown, and it SHOULD be re-thrown, you SHOULD create a new exception instance that is appropriate for the current layer. In this case, the original exception must be passed to a new instance with the "previous" argument.

5.13. It is not allowed to absorb exceptions with no logging or/and any workaround operation executed.

5.14. Any exception SHOULD be logged only in the `catch` block where it is processed, and SHOULD NOT be re-thrown.

5.15. Exceptions SHOULD NOT be caught in a loop. The loop SHOULD be wrapped with a `try/catch` construct instead.

5.16. If a method uses system resources (such as files, sockets, streams, etc.), the code MUST be wrapped with a `try` block and the corresponding `finally` block. In the `finally` sections, all resources SHOULD be properly released.

5.17. Exceptions which need to be displayed to the user MUST be sub-types of `LocalizedException`. Any other types of exceptions MUST be wrapped with `LocalizedException` before being displayed to the user.

5.18. `LocalizedException`s SHOULD be thrown in the presentation layer only.

## 6. Application layers

### 6.1. All layers

6.1.1. Application SHOULD be structured in compliance with the [CQRS principle].

6.1.2. Every application layer (Presentation, Service Contracts, Data Access)
    MUST process (handle or re-throw) exceptions of the underlying layer.

6.1.3. A layer MUST NOT depend on a layer that invokes (above) it. A layer MUST only depend on a layer directly below it.
![Magento architecture layers]({{site.baseurl}}/common/images/archi_diagrams_layers_alt4.jpg)

### 6.2. Presentation layer

6.2.1. According to CQRS, the Presentation layer hosts the Command and the Query Infrastructures:

* **Command** for Actions

* **Query** for [Layout](https://glossary.magento.com/layout) and its elements (Blocks and UI Components)

6.2.2. Request, Response, Session, Store Manager and Cookie objects MUST be used only in the Presentation layer.

6.2.3. All actions MUST return the `ResultInterface` implementation.

6.2.4. Actions MUST NOT reference blocks declared in layout.

6.2.5. Configuration for the presentation layer MUST be declared in the corresponding application area.
    This includes events and plugins that customize the presentation layer.

### 6.3. Data Access (Persistence) layer

6.3.1. Entities MAY have fields scoped differently (in product, EAV --- per store, options --- per website).

6.3.2. Every persistence operation MUST be performed with one scope set.

6.3.3. Entities MUST NOT contain persistence-related logic.

6.3.4. MySQL's `strict_mode` variable SHOULD be aligned with the default `strict_mode` of the latest MySQL release.

### 6.4. Service Contracts (Application) layer

6.4.1. Location of API interfaces

6.4.1.1. Service contract interfaces SHOULD be placed in separate API modules, except when an existing module already contains Service Contracts in the `Api` folder. Other modules will depend on the API module, and implementations could be easily swapped via `di.xml`. API module names must end with the `Api` suffix. For example, if a module is named `MyModule`, its APIs SHOULD be declared in a module named `MyModuleApi`.

6.4.1.2. Service interfaces that should be exposed as web APIs MUST be placed under the `MyModuleApi/Api` directory. Service data interfaces MUST be placed under `MyModuleApi/Api/Data`. Directories under `MyModuleApi/Api` SHOULD NOT be nested.

6.4.1.3. All other APIs, including explicit extension points such as Chain or Composite implementations, MUST be placed under `MyModuleApi/Model`.

6.4.2. Service Interface Structure

6.4.2.1. Methods that have similar names MUST serve similar purposes across different services, but they still MAY have different signatures.

6.4.2.2. Service contracts SHOULD NOT be used for read scenarios on the storefront. Instead, GraphQL SHOULD be used for storefront scenarios. Check out [web API technical vision]({{ page.baseurl }}/coding-standards/technical-vision/webapi.html) for more details.

6.4.2.3. Each service interface SHOULD declare a single public method. An interface name SHOULD reflect the task or action to be performed. For example, `Magento\InventoryApi\Api\StockSourceLinksDeleteInterface::execute(array $links)`. The only exception is a Repository API, which MAY be added for convenience and MUST be limited to singular CRUD operations and `getList($searchCriteria)`.

6.4.3. Service Method Signature

6.4.3.1. Strict typing is enforced for Service and Data interfaces located under `MyCompany/MyModuleApi/Api`. Only the following types are allowed:

* Scalar types: `string` (including Date and DateTime); `int`; `float`; `boolean`

* Data interfaces

* One-dimensional indexed arrays of scalars or data interfaces: for example `string[]`, `\MyCompany\MyModuleApi\Api\Data\SomeInterface[]`. Hash maps (associative arrays) are not supported.

* Nullable scalars or data interfaces: for example `string|null`. Using just `null` is prohibited.

* `void`

6.4.3.2. Service contracts SHOULD support batch data processing. For example, an entity persisting method SHOULD accept an array of entities to persist instead of a single entity. Customizations implemented through plugins SHOULD be adjusted respectively.

6.4.3.3. Batch retrieval operations MUST accept `SearchCriteriaInterface` and return `SearchResultInterface` to support pagination.

6.4.3.4. Batch operations that modify state MUST accept an array of entities and return a response object that contains:

* An array of successfully processed items

* An array of items with retriable errors

* An array of items with non-retriable errors

6.4.3.5. Batch operations that modify state SHOULD be implemented in the most performant manner and SHOULD NOT load modified entities to generate response.

6.4.3.6. Asynchronous invocation of the command services SHOULD be supported by the web API framework.

6.4.3.7. Operation UUID MAY be provided by the client during service invocation. UUID MUST allow the client to get the operation status information.

6.4.3.8. Data objects returned by service contracts SHOULD be fully loaded to ensure consistency.

6.4.4. Service Implementation

6.4.4.1. Service data interfaces SHOULD extend from `Magento\Framework\Api\ExtensibleDataInterface`. The only exception is when extensibility is not desired, such as in case of value-objects.

6.4.4.2. Extensible data interfaces MUST NOT form hierarchies. If interface `MyInterface` extends `ExtensibleDataInterface`, there must be no interfaces extending `MyInterface`. Otherwise, a list of extension attributes will be shared for all extensible interfaces in the hierarchy.

6.4.4.3. Service implementations and plugins MUST NOT rely on storage-specific integrity features, such as foreign key constraints.

6.4.4.4. Replacement strategy SHOULD be used to persist main entity fields/attributes, child entities, and relation links.

6.4.4.5. During update operations, web APIs using the`PATCH` HTTP method and all action controllers that accept entities SHOULD pre-load them first, then merge the request data, and provide the full data to the service.

6.4.4.6. If a service method needs to modify the argument, the original argument object MUST NOT be modified and its copy SHOULD be modified instead.

6.4.4.7. Services SHOULD NOT apply ACL rules to methods or returned data.

6.4.4.8. If a store has multiple scopes (websites, stores), then each call MUST persist an entity in a single scope only. If an entity needs to be saved in multiple scopes, then multiple calls SHOULD be made.

6.4.4.9. Service contracts SHOULD NOT apply presentation layer formatting to the returned data.

6.4.4.10. Service data interfaces MUST NOT contain any business logic. They SHOULD represent a container of data that is transferable over the wire. All the business logic SHOULD be moved to services.

6.4.4.11. Domain/business logic MUST be executed on the service contracts layer.

6.4.4.12. Any customizations to the domain/business logic MUST be executed on the Service Contracts layer, and so MUST be declared in the `global` area of configuration.

6.4.4.13. A service contract MUST NOT rely on the execution context (application area). The service implementation MUST NOT depend on the application state.

6.4.4.14. A service contract SHOULD be an [idempotent method](https://tools.ietf.org/html/rfc7231#section-4.2.2).

## 7. Configuration

7.1. An Application Instance consists of:

* Code

* Environment Configuration

* Data

7.2. Code includes:

* application codebase

* [XML](https://glossary.magento.com/xml) configuration

* generated code and [static files](https://glossary.magento.com/static-files)

* database structure

* system configuration values

* configuration scopes (stores/store groups/websites)

* [CMS](https://glossary.magento.com/cms) entities

7.3. Environment Configuration includes information about application services connection.

7.4. Data includes the business [entity](https://glossary.magento.com/entity) data.

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

8.6. A module MUST NOT contain references to [theme](https://glossary.magento.com/theme) resources.

8.7. A component MUST NOT rely either on dependencies of dependencies or on dependencies of the project it is included in (e.g., Magento application). All component dependencies MUST be stated explicitly.

## 9. Browser-Server interaction in web application

9.1. All Client-Server calls must follow the [HTTP Protocol].

9.2. All customer-agnostic data (Products, Categories, CMS Pages) MUST be rendered on a server and cached in a public [cache](https://glossary.magento.com/cache) server (Varnish).

9.3. All customer-specific data MUST be rendered on the browser side using a [JavaScript](https://glossary.magento.com/javascript) (JS) application.

9.4. [HTML](https://glossary.magento.com/html) [markup](https://glossary.magento.com/markup) generated on server MUST NOT contain user-specific data.

9.5. HTML markup generated on server MUST NOT contain session-specific data (e.g. a form element with a CSRF token).

9.6. A JS application MAY receive customer-specific data using the CustomerData JS [API](https://glossary.magento.com/api).

9.7. All state-modifying requests from a browser SHOULD be performed with AJAX requests.

9.8. If an error occurs during request handling, the server MUST return an appropriate [HTTP Status Code] and an explanation of an error in the response body.

9.9. All headers MUST be respected.

9.10. The Request, Session, and Cookie objects MUST NOT be injected in an object constructor. They MUST be passed only as method arguments.

9.11. Operation scopes MUST always be explicitly requested by operations (`StoreManager` SHOULD NOT be used to retrieve the store ID).

## 10. JavaScript (JS) application

10.1. The Magento 2 [UI Component](https://glossary.magento.com/ui-component) framework MUST be used to build frontend applications.

10.2. Only private content SHOULD be rendered in browser.

10.3. All module dependencies of a RequireJS module MUST be declared in the module's definition header.

10.3.1 No direct calls to `require` SHOULD be made unless the list of modules to be loaded is dynamic.

10.3.2 Code MUST NOT make use of the synchronous form of `require` (`require('moduleIdentifier')`).

10.4. The [W3C Content Security Policy] MUST be followed.

10.5. ESLint [rules][rules] SHOULD BE followed.

10.5.1. ECMAScript 5.1 SHOULD be used as a JS standard.

10.5.2. Language features (closures, WeakMaps, etc) MUST be used for private state. There SHOULD be no `_` (underscore) naming convention for private properties.

10.5.3. All uses of XMLHttpRequest (including jQuery's `$.ajax`) MUST be asynchronous.

10.5.4. New global properties MUST not be added (either through explicit `window` assignment or `var` in the top scope). The RequireJS module system SHOULD be used for shared objects.

10.5.5. Modules MUST NOT have external side effects.

10.5.6. Code MUST NOT re-declare any identifiers already declared in a reachable scope (re-assignment is acceptable).

## 11. Testing

### 11.1. White-box testing (unit, integration, functional)

11.1.1. Only public methods SHOULD be tested. Private and protected behavior SHOULD be tested through public methods.

### 11.2. Unit testing

11.2.1. All objects SHOULD be tested in isolation.

11.2.2. `ObjectManager` MUST NOT be used in unit tests.

11.2.3. `ObjectManagerHelper` MAY BE used to automatically mock all dependencies of the object under test.

### 11.3. Functional Testing

#### 11.3.1. Pages

11.3.1.1. Page file names MUST follow this pattern:

* {Admin or Storefront}{UI Description}Page.xml, where UI Description briefly describes the UI under tests.

* Example: AdminLoginPage.xml

#### 11.3.2. Sections

11.3.2.1. Section file names MUST follow this pattern:

* {Admin or Storefront}{UI Description}Section.xml, where UI Description briefly describes the UI under test.

* Example: AdminNavbarSection.xml

#### 11.3.3. Elements

11.3.3.1. Selectors SHOULD be written in CSS instead of Xpath when possible.

11.3.3.2. CSS and Xpath selectors MUST be implemented in their most simple form.

11.3.3.3. Xpath selectors MUST NOT use `@class="foo"`.

11.3.3.4. CSS and Xpath selectors MUST NOT reference `@data-bind`.

11.3.3.5. Parameterized selectors MUST use descriptive names for the parameters.

11.3.3.6. Elements SHOULD use `timeout="30"` to wait after interactions.

11.3.3.7. **Xpath selectors SHOULD wrap `text()` with `contains()`.** When possible, use `contains(text(), 'someTextHere')` rather than `text()='someTextHere'`. `contains()` ignores whitespace while `text()` accounts for it.

**Why?** If you are comparing text within a selector and have an unexpected space, or a blank line above or below the string, `text()` will fail while the `contains(text())` format will catch it. In this scenario `text()` is more exacting. Use it when you need to be very precise about what is getting compared.

{% collapsible Examples: %}

### Recommended

```xml
//span[contains(text(), 'SomeTextHere')]
```

### Not recommended

```xml
//span[text()='SomeTextHere']
```

{% endcollapsible %}

11.3.3.8. **Selectors SHOULD be built in the proper order.** When building selectors for form elements, start with the parent context of the form element. Then specify the element `name` attribute in your selector to ensure the correct element is targeted. To build a selector for an input, use the pattern: `{{section_selector}}` `{{input_selector}}` or for a button: `{{section_selector}}` `{{button_selector}}`

**Why?** Traversing the DOM takes a finite amount of time and reducing the scope of the selector makes the selector lookup as efficient as possible.

{% collapsible Examples: %}

### Recommended

```xml
<element name="productName" type="input" selector="*[data-index='product-details'] input[name='product[name]']"/>
```

### Not recommended

```xml
<element name="productName" type="input" selector=".admin__field[data-index=name] input"/>
```

{% endcollapsible %}

11.3.3.9. **Selectors SHOULD be built with appropriate specificity.** Selectors that are too general might sweep up unexpected elements. When possible, select the first parent tag and then specify the desired element within that selection.

**Why?** Elements that are overly specific are less flexible and may fail if unexpected DOM changes occur. It also reduces the amount of the DOM it needs to parse.

{% collapsible Examples: %}

### Recommended

```xml
form[name='myform'] > input[name='firstname']

//*[@id='container'][@class='dashboard-title']
```

### Not recommended

```xml
input[name='firstname']

//*[@id='container']/*[@class='dashboard-advanced-reports']/*[@class='dashboard-advanced- reports-description']/*[@class='dashboard-title']
```

{% endcollapsible %}

11.3.3.10. Parameterized selectors MUST use descriptive variable names.

{% collapsible Examples: %}

### Recommended

```xml
<element name="storeName" type="checkbox" selector="//label[contains(text(),'{{storeName}}')]" parameterized="true"/>
```

### Not recommended

```xml
<element name="storeName" type="checkbox" selector="//label[contains(text(),'{{var1}}')]" parameterized="true"/>
```

{% endcollapsible %}

#### 11.3.4. Data Entities

11.3.4.1. Data entity file names MUST follow this pattern:

* {Type}Data.xml, where Type represents the entity type.

* Example: ProductData.xml

11.3.4.2. Data entities SHOULD make use of `unique="suffix"` or `unique="prefix"` to ensure that tests using the entity can be repeatedely ran against the same environment.

11.3.4.3. Data entities MUST NOT be modified and MUST NOT merge additional fields without complete understanding and verifying the usage of existing data in tests. New data entities SHOULD be created if you are not sure.

11.3.4.4. **Data references SHOULD be used instead of hardcoded values.** If you need to run a command such as `<magentoCLI command="config:set" />`, do not hardcode paths and values to the command. Rather, create an appropriate `ConfigData.xml` file, which contains the required parameters for running the command. It will simplify the future maintanence of tests.

{% collapsible Examples: %}

### Recommended

```xml
<magentoCLI command="config:set {{StorefrontCustomerCaptchaLength3ConfigData.path}} {{StorefrontCustomerCaptchaLength3ConfigData.value}}" stepKey="setCaptchaLength" />
```

### Not recommended

```xml
<magentoCLI command="config:set customer/captcha/length 3" stepKey="setCaptchaLength" />
```

{% endcollapsible %}

#### 11.3.5. Action Groups

11.3.5.1. Action group file names MUST follow this pattern:

* {Assert}{Admin or Storefront}{Functionality}ActionGroup.xml

* Example: AssertStorefrontMinicartContainsProductActionGroup.xml

11.3.5.2. Action group names MUST be brief but comprehensive.

11.3.5.3. Action group arguments MUST specify their type.

11.3.5.4. Action groups MUST NOT have unused arguments.

11.3.5.5. Action groups MUST NOT reference `$$createdData.property$$` or `$createdData.property$`.

11.3.5.6. Action groups SHOULD be in their own file.

11.3.5.7. Action groups SHOULD use the `string` type instead of `entity` unless many properties from the `entity` would be referenced.

11.3.5.8. Action group arguments SHOULD specify default values.

11.3.5.9. Action group names SHOULD match the file name that they are in.

11.3.5.10. **You SHOULD use parameterized selectors in action groups with argument references.** Clarity and readability are important factors in good test writing. Having to parse through unreadable code can be time consuming. Save time by writing clearly. The good example clearly shows what the selector arguments refer to. In the bad example we see two parameters being passed into the selector with little clue as to their purpose.

**Why?** The next person maintaining the test or extending it may not be able to understand what the parameters are referencing.

{% collapsible Examples: %}

### Recommended

```xml
<test>
    <actionGroup ref="VerifyOptionInProductStorefront" stepKey="verifyConfigurableOption" after="AssertProductInStorefrontProductPage">
        <argument name="attributeCode" value="$createConfigProductAttribute.default_frontend_label$"/>
        <argument name="optionName" value="$createConfigProductAttributeOption1.option[store_labels][1][label]$"/>
    </actionGroup>
</test>

<actionGroup name="VerifyOptionInProductStorefront">
    <arguments>
        <argument name="attributeCode" type="string"/>
        <argument name="optionName" type="string"/>
    </arguments>
    <seeElement selector="{{StorefrontProductInfoMainSection.attributeOptionByAttributeID(attributeCode, optionName)}}" stepKey="verifyOptionExists"/>
</actionGroup>
```

### Not recommended

```xml
<test>
    <seeElement selector="{{StorefrontProductInfoMainSection.attributeOptionByAttributeID($createConfigProductAttribute.default_frontend_label$, $createConfigProductAttributeOption1.option[store_labels][1][label]$)}}" stepKey="verifyOptionExists"/>
</test>
```

{% endcollapsible %}

11.3.5.11. Action groups SHOULD have `<annotations>`.

#### 11.3.6. Annotations

11.3.6.1. You SHOULD use `<annotations>` to describe tests and action groups.

11.3.6.2. You SHOULD update your annotations when updating tests.

#### 11.3.7. Test Before Block

11.3.7.1. Configuration changes via `magentoCLI` SHOULD occur last in the `before` block.

11.3.7.2. The `before` block SHOULD mostly be `createData` calls with minimal UI interaction.

#### 11.3.8. Test After Block

11.3.8.1. Configuration changes via `magentoCLI` SHOULD occur first in the `after` block.

11.3.8.2. The `after` block SHOULD mostly be `deleteData` calls with minimal UI interaction.

11.3.8.3. **You SHOULD perform the most critical actions first in the `<after>` block.** Perform non-browser driving actions first. These are more likely to succeed as no UI is involved. In the good example, `magentoCLI` and `deleteData` are run first to ensure a proper state. In the bad example, we perform some heavy UI steps first.

**Why?** If something goes wrong there, then the critical `magentoCLI` commands may not get a chance to run, leaving Magento configured incorrectly for any upcoming tests.

{% collapsible Examples: %}

### Recommended

```xml
<after>
    <magentoCLI command="indexer:set-mode" arguments="schedule" stepKey="setIndexerMode"/>
    <magentoCLI command="config:set catalog/frontend/flat_catalog_category 0" stepKey="setFlatCatalogCategory"/>
    <deleteData createDataKey="category" stepKey="deleteCategory"/>
    <deleteData createDataKey="createSimpleProduct" stepKey="deleteSimpleProduct"/>
    <actionGroup ref="AdminDeleteStoreViewActionGroup" stepKey="deleteStoreViewEn">
        <argument name="customStore" value="customStoreEN"/>
    </actionGroup>
    <actionGroup ref="AdminDeleteStoreViewActionGroup" stepKey="deleteStoreViewFr">
        <argument name="customStore" value="customStoreFR"/>
    </actionGroup>
    <actionGroup ref="logout" stepKey="logout"/>
</after>
```

### Not recommended

```xml
<after>
    <actionGroup ref="AdminDeleteStoreViewActionGroup" stepKey="deleteStoreViewEn">
        <argument name="customStore" value="customStoreEN"/>
    </actionGroup>
    <actionGroup ref="AdminDeleteStoreViewActionGroup" stepKey="deleteStoreViewFr">
        <argument name="customStore" value="customStoreFR"/>
    </actionGroup>
    <deleteData createDataKey="category" stepKey="deleteCategory"/>
    <deleteData createDataKey="createSimpleProduct" stepKey="deleteSimpleProduct"/>
    <magentoCLI command="config:set catalog/frontend/flat_catalog_category 0" stepKey="setFlatCatalogCategory"/>
    <magentoCLI command="indexer:set-mode" arguments="schedule" stepKey="setIndexerMode"/>
    <actionGroup ref="logout" stepKey="logout"/>
</after>
```

{% endcollapsible %}

#### 11.3.9. Test Body

11.3.9.1. Test file names MUST follow this pattern:

* {Admin or Storefront}{Functionality}Test.xml

* Example: StorefrontCreateCustomerTest.xml

11.3.9.2. The test SHOULD re-use action groups, pages, sections, and elements.

11.3.9.3. Any data created MUST be deleted in the `after` block of the test.

11.3.9.4. `amOnPage` SHOULD be followed by `waitForPageLoad`.

11.3.9.5. `amOnPage` SHOULD use `Page.url` instead of a hardcoded URL.

11.3.9.6. `waitForPageLoad` SHOULD be used instead of `waitForLoadingMaskToDisappear` or `waitForAjaxLoad`.

11.3.9.7. `wait` SHOULD NOT be used unless for very specific circumstances.

11.3.9.8. Tests SHOULD be short and granular.

11.3.9.9. Comments SHOULD be used to ensure tests are readable and maintainable.

11.3.9.10. **`see` and `seeElement` SHOULD be used wisely.** If you need to see some element and verify that the text inside is shown correctly, use the `see` action. If you need to verify that element present on page, use `seeElement`. But never use `seeElement` and build a Xpath which contains the expected text.

**Why?** For `see` it will output something similar to this: `Failed asserting that any element by #some_selector contains text "some_text"` And for `seeElement` it will output something like this: `Element by #some_selector is not visible.` There is a subtle distinction: The first is a failure but it is the desired result: a ‘positive failure’. The second is a proper result of the action.

{% collapsible Examples: %}

### Recommended

```xml
<see selector="//div[@data-element='content']//p" userInput="SOME EXPECTED TEXT" stepKey="seeSlide1ContentStorefront"/>
```

### Not recommended

```xml
<seeElement selector="//div[@data-element='content']//p[.='SOME EXPECTED TEXT']" stepKey="seeSlide1ContentStorefront"/>
```

{% endcollapsible %}

11.3.9.11. **Tests SHOULD be built from action groups.**

**Why?** For extension developers, this will make it easier to extend or customize tests. Extending a single action group will update all tests that use this group. This improves maintainability as multiple instances of a failure can be fixed with a single action group update.

{% collapsible Examples: %}

### Recommended

```xml
<test name="NavigateClamberWatchEntityTest">
    <annotations>
        <!--some annotations-->
    </annotations>

    <actionGroup ref="StorefrontOpenProductPageActionGroup" stepKey="openProductPage">
        <argument name="productUrl" value="{{ClamberWatch.url_key}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductNameOnProductPageActionGroup" stepKey="assertProductName">
        <argument name="productName" value="{{ClamberWatch.name}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductSkuOnProductPageActionGroup" stepKey="assertProductSku">
        <argument name="productSku" value="{{ClamberWatch.sku}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductPriceOnProductPageActionGroup" stepKey="assertProductPrice">
        <argument name="productPrice" value="{{ClamberWatch.price}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductImagesOnProductPageActionGroup" stepKey="assertProductImage">
        <argument name="productImage" value="{{ClamberWatch.image}}" />
    </actionGroup>
</test>
```

### Not recommended

```xml
<test name="NavigateClamberWatchEntityTest">
    <annotations>
                <!--some annotations-->
    </annotations>

    <amOnPage url="{{StorefrontProductPage.url(ClamberWatch.url_key)}}" stepKey="openProductPage"/>
    <see selector="{{StorefrontProductInfoMainSection.productName}}" userInput="{{ClamberWatch.name}}" stepKey="seeProductName" />
    <see selector="{{StorefrontProductInfoMainSection.productSku}}" userInput="{{ClamberWatch.sku}}" stepKey="seeProductSku" />
    <see selector="{{StorefrontProductInfoMainSection.price}}" userInput="{{ClamberWatch.price}}" stepKey="seeProductPrice" />
    <waitForElementNotVisible selector="{{StorefrontProductMediaSection.gallerySpinner}}" stepKey="waitGallerySpinnerDisappear" />
    <seeElement selector="{{StorefrontProductMediaSection.gallery}}" stepKey="seeProductGallery" />
    <seeElement selector="{{StorefrontProductMediaSection.productImage(ClamberWatch.productImage)}}" stepKey="seeProductImage" />
    <click selector="{{StorefrontProductMediaSection.productImage(ClamberWatch.productImage)}}" stepKey="openFullscreenImage" />
    <waitForPageLoad stepKey="waitForGalleryLoaded" />
    <seeElement selector="{{StorefrontProductMediaSection.productImageFullscreen(ClamberWatch.productImage)}}" stepKey="seeFullscreenProductImage" />
</test>
```

{% endcollapsible %}

11.3.9.12. `stepKey` names MUST be descriptive. This helps with readability and clarity.

{% collapsible Examples: %}

### Recommended

```xml
<click selector="{{StorefrontNavigationSection.topCategory(SimpleSubCategory.name)}}" stepKey="clickSimpleSubCategoryLink" />
<waitForPageLoad stepKey="waitForSimpleSubCategoryPageLoad" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(SimpleProduct.urlKey)}}" stepKey="clickSimpleProductLink" />
<waitForPageLoad stepKey="waitForSimpleProductPageLoad" />

<!-- Perform some actions / Assert product page -->

<click selector="{{StorefrontNavigationSection.topCategory(CustomCategory.name)}}" stepKey="clickCustomCategoryLink" />
<waitForPageLoad stepKey="waitForCustomCategoryPageLoad" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(CustomSimpleProduct.urlKey)}}" stepKey="clickCustomSimpleProductLink" />
<waitForPageLoad stepKey="waitForCustomSimpleProductPageLoad" />
```

### Not recommended

```xml
<click selector="{{StorefrontNavigationSection.topCategory(SimpleSubCategory.name)}}" stepKey="clickCategoryLink1" />
<waitForPageLoad stepKey="waitForPageLoad1" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(SimpleProduct.urlKey)}}" stepKey="clickProductLink1" />
<waitForPageLoad stepKey="waitForPageLoad2" />

<!-- Perform some actions / Assert product page -->

<click selector="{{StorefrontNavigationSection.topCategory(CustomCategory.name)}}" stepKey="clickCategoryLink2" />
<waitForPageLoad stepKey="waitForPageLoad3" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(CustomSimpleProduct.urlKey)}}" stepKey="clickProductLink2" />
<waitForPageLoad stepKey="waitForPageLoad4" />
```

{% endcollapsible %}

#### 11.3.10. Extending

11.3.10.1. You SHOULD use extends in your new test or action group when at least one of the following conditions is applicable to your case:

* You want to keep the original test without any modifications.

* You want to create a new test that follows the same path as the original test.

* You want a new action group that behaves similarly to the existing action group, but you do not want to change the functionality of the original action group.

11.3.10.2. You SHOULD NOT use extends in the following conditions:

* You want to change the functionality of the test or action group and do not need to run the original version.

* You plan to merge the base test or action group.

## 12. Web API

12.1. Both REST and SOAP API's MUST be exposed.

12.2. All [Web API](https://glossary.magento.com/web-api) GET endpoints MUST return lists of entities.

## 13. Command line interface (CLI)

13.1. Magento 2 [CLI Command Naming Guidelines] MUST be followed.

13.2. A CLI command MUST be created for any functionality intended to be used by a system integrator/system administrator/developer (for example: change indexer mode, generate a configuration file, etc.).

13.3. A CLI command MUST always run in a global area. If a command needs a specific area to perform its functions, such area SHOULD be set up before execution.

13.4. Exception in a single CLI command SHOULD NOT break the CLI framework; running other commands SHOULD still be possible.

## 14. Events

14.1. All values (including objects) passed to an [event](https://glossary.magento.com/event) MUST NOT be modified in the event observer. Instead, plugins SHOULD BE used for modifying the input or output of a function.

{% collapsible Example: %}

``` php
use Magento\Framework\Event\ObserverInterface;
use Magento\Framework\Event\Observer;

class SampleEventObserverThatModifiesInputs implements ObserverInterface
{
    /**
     * @param Observer $observer
     */
    public function execute(Observer $observer)
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

14.3. Events SHOULD NOT change a state of observable objects.

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

15.9. Local File Inclusion (LFI) protection.

15.9.1. User-submitted requests containing path and file name SHOULD NOT be trusted.

15.9.2. User-submitted path and file values SHOULD be sanitized to remove dot-dot-slash from the request.

15.10. Remote Code Execution (RCE) protection.

15.10.1. `eval()`, `passthru()`, `system()`, `shell_exec()`, `serialize()`, `unserialize()`, `md5()`, `srand()`, `mt_srand()` SHOULD NOT be used.

15.10.2. User-submitted values SHOULD NOT be passed directly to `include*()`, `require*()`, `create_function()`, `fopen()`, `preg_replace()`.

15.10.3. Variable functions SHOULD NOT be used if the variable values are submitted by the user.

15.11. Security capabilities SHOULD be implemented either on the Magento Framework level or in a dedicated module(s) and utilized by the entire application in a centralize manner.

15.12. Files MUST be secured by a web server configuration (e.g., `.htaccess` or `nginx.conf`), except files that are intended to be publicly accessible.

## 16. Cron

16.1. Cron job SHOULD be an [idempotent method](https://tools.ietf.org/html/rfc7231#section-4.2.2).

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
