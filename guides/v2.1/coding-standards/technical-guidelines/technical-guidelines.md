---
layout: default
group: coding-standards
subgroup: 02_Technical guidelines
title: Technical guidelines
menu_title: Technical guidelines
menu_node: parent
version: 2.1
github_link: coding-standards/technical-guidelines/tg-intro.md
---

## About this document

### Overview

This document lists the fundamental coding and application design principles that guide Magento 2 developer team members.

Magento core developers use this document as a reference during code reviews; some rules have corresponding code checks in the Magento static tests.

These guidelines came from many years of hard work, experience, and discussions. We strongly believe that the new technical initiatives should follow these recommendations, and the existing code should be improved to meet them.

### Text conventions

Use RFC2119 to interpret keywords like:

* MUST and MUST NOT

* REQUIRED

* SHALL and SHALL NOT

* SHOULD and SHOULD NOT

* RECOMMENDED

* MAY

* OPTIONAL

## 1. Basic programming principles

1.1. Function arguments SHOULD NOT be modified.

1.2. Explicit return types MUST BE used on functions.

1.3. Type hints for scalar arguments SHOULD be used.

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
{%highlight php startinline=1%}
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
{%endhighlight%}
        </td>
        <td>
{%highlight php startinline=1%}
class Config
{
    private $data;

    public function getValue($key)
    {
        if ($this->data === null) {
            $this->data = $this->fileReader->load('cache.xml');
        }
    }
}
{%endhighlight%}
        </td>
    </tr>
</table>
{% endcollapsible %}
---

{:start="2.3"}
2.3. Class constructor can have only dependency assignment operations and/or argument validation operations. No other operations are allowed.

2.3.1. Constructor MUST throw an exception when validation of an argument has failed.

{% collapsible Example: %}
{%highlight php startinline=1%}
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
{%endhighlight%}
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
{%highlight php startinline=1%}
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
{%endhighlight%}
        </td>
        <td>
{%highlight php startinline=1%}
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
{%endhighlight%}
        </td>
    </tr>
</table>
{% endcollapsible %}

---

{:start="2.4"}
2.4. All dependencies MUST be requested by the most generic type, required by the client object.

2.5. Proxies and interceptors MUST NEVER be explicitly requested in constructors.

2.6. Inheritance SHOULD NOT be used. Composition SHOULD be used for code reuse.

2.7. All non-public properties and methods SHOULD be private.

2.8. Abstract classes MUST NOT be marked as public `@api`.

2.9. Service classes (ones that provide behavior but not data, like `EventManager`) SHOULD be stateless (all object fields SHOULD be immutable).

2.10. Only data objects or entities (Product, Category, etc.) MAY have any observable state.

2.11. "Setters" SHOULD NOT be used. They are only allowed in Data Transfer Objects.

2.12. "Getters" SHOULD NOT change the state of an object.

2.13. Static methods SHOULD NOT be used.

2.14. [Temporal coupling] MUST be avoided.

2.15. Method chaining in class design MUST be avoided.

2.16. [Law of Demeter] SHOULD be obeyed.

**2.17. Patterns:**

2.17.1. Proxies SHOULD be used for lazy-loading optional dependencies.

2.17.2. Composites SHOULD be used when there is a need to work with a tree as a single object.

 {% collapsible For example: %}
 You need to read configuration from different sources (like database or filesystem) and want to make the reading process configurable: allow extensions to add more configuration sources. In this case, you can create a `ConfigReaderInterface` with a composite implementation - `ConfigReaderComposite`, and configure particular readers as children of a composite reader.
 {% endcollapsible %}
---
2.17.3. Strategy SHOULD be used when there are multiple algorithms for performing an operation.

## 3. Dependency injection

3.1. There SHOULD be no circular dependencies between objects.

3.2. The `app/etc/di.xml` file MUST contain only framework-level Depenedency Injection (DI) settings.

3.3. All modular DI settings (except for Presentation layer configuration) SHOULD be stored in `<module_dir>/etc/di.xml`.

3.4. All modular Presentation layer DI settings SHOULD be stored in `<module_dir>/etc/<area_code>/di.xml`.

## 4. Interception

4.1. Around-plugins SHOULD only be used when behavior of an original method is supposed to be substituted in certain scenarios.

4.2. Plugins SHOULD NOT be used within own module.

4.3. Plugins SHOULD NOT be added to data objects.

4.4. Plugins MUST be stateless.

## 5. Exceptions

5.1. All exceptions that are surfaced to end user MUST produce error messages in the following format:

    * Symptom

    * Details

    * Solution or work-around

    All error messages SHOULD be reviewed by a member of Documentation or UX Team.

{:start="5.2"}
5.2. Exceptions MUST NOT be handled in the same function where they are thrown.

5.3. If a function A calls function B, and function B might throw an exception, this exception MUST be either processed by function A or declared by the @throws annotation in the documentation block of function A.

5.4. Exceptions MUST NOT handle message output. It is the processing code that decides how to process an exception.

5.5. Business logic (both application and domain) MUST NOT be managed with exceptions. Conditional statements SHOULD be used instead.

5.6. The short name of an exception class MUST be clear, meaningful, and state the cause of exception.

5.7. Thrown exceptions SHOULD be as specific as possible. The top generic `\Exception` SHOULD NOT be thrown anywhere.

5.8. All direct communications with third-party libraries MUST be wrapped with a try/catch statement.

5.9. `\Exception` SHOULD only be caught in the code that calls third-party libraries, in addition to catching specific exceptions thrown by the library.

5.10. Exception SHOULD NOT be thrown in Front Controller, Web API Controllers, and Controller Actions.

5.11. A separate exceptions hierarchy SHOULD be defined on each application layer. It is allowed to throw exceptions which are only defined on the same layer.

5.12. If an exception is caught on the application layer which is different from the one where it has been thrown, and it SHOULD be re-thrown; then a new exception instance, appropriate for the current layer, SHOULD be created. In this case, the original exception must be passed to a new instance with the "previous" argument.

5.13. It is not allowed to absorb exceptions with no logging or/and any workaround operation executed.

5.14. Any exception SHOULD be logged only in the `catch` block where it is processed, and SHOULD NOT be re-thrown.

5.15. Exceptions SHOULD NOT be caught in a loop. The loop should be wrapped with a `try/catch` construct instead.

5.16. If a method uses system resources (such as files, sockets, streams, etc.), the code MUST be wrapped with a `try` block and the corresponding `finally` block. In the `finally` sections, all resources SHOULD be properly released.

5.17. `LocalizedException` SHOULD only be thrown in the Presentation layer (Controllers, Blocks).


<!-- LINKS: DEFINITIONS AND ADDRESSES -->

[SOLID principles]: https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
[Temporal coupling]: http://blog.ploeh.dk/2011/05/24/DesignSmellTemporalCoupling/
[Law of Demeter]: https://en.wikipedia.org/wiki/Law_of_Demeter
