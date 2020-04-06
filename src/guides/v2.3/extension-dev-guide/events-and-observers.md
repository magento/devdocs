---
group: php-developer-guide
subgroup: 99_Module Development
title: Events and observers
menu_title: Events and observers
menu_order: 6
---

## Overview

Working with events and observers is one of the main ways to extend Magento functionality. The events and observers implementation in Magento 2 is based on the [publish-subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern). Using events and observers, you can run your custom code in response to a specific Magento [event](https://glossary.magento.com/event) or even a custom event.

## Events

Events are dispatched by modules when certain actions are triggered. In addition to its own events, Magento allows you to create your own events that can be dispatched in your code. When an event is dispatched, it can pass data to any observers configured to watch that event.

### Dispatching events

Events can be dispatched using the [`Magento\Framework\Event\ManagerInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Event/ManagerInterface.php) class. This class can be obtained through [dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) by defining the dependency in your constructor.

To dispatch an event, call the `dispatch` function of the event manager class and provide it with the name of the event you want to dispatch along with an array of data you wish to provide to observers.

The following example shows you how to dispatch an event with and without an array of data.

```php

namespace MyCompany\MyModule;

use Magento\Framework\Event\ManagerInterface as EventManager;

class MyClass
{
  /**
   * @var EventManager
   */
  private $eventManager;

  /*
   * @param \Magento\Framework\Event\ManagerInterface as EventManager
   */
  public function __construct(EventManager $eventManager)
  {
    $this->eventManager = $eventManager;
  }

  public function something()
  {
    $eventData = null;
    // Code...
    $this->eventManager->dispatch('my_module_event_before');
    // More code that sets $eventData...
    $this->eventManager->dispatch('my_module_event_after', ['myEventData' => $eventData]);
  }
}

```

### Creating new events

Custom events can be dispatched by simply passing in a unique event name to the event manager when you call the `dispatch` function. Your unique event name is referenced in your module's `events.xml` file where you specify which observers will react to that event.

### Event areas

Generally, the location of the `events.xml` file will be under the `<module-root>/etc` directory. Observers that are associated with events here will watch for these events globally. The `events.xml` file can also be defined under the `<module-root>/etc/frontend` and `<module-root>/etc/adminhtml` directories to configure observers to only watch for events in those specific areas.

## Observers

Observers are a certain type of Magento class that can influence general behavior, performance, or change business logic. Observers are executed whenever the event they are configured to watch is dispatched by the event manager.

### Creating an observer

To create an observer, you must place your class file under your `<module-root>/Observer` directory. Your observer class should implement [`Magento\Framework\Event\ObserverInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Event/ObserverInterface.php) and define its `execute` function.

Below is an example of the basic observer class structure:

```php
namespace MyCompany\MyModule\Observer;

use Magento\Framework\Event\ObserverInterface;

class MyObserver implements ObserverInterface
{
  public function __construct()
  {
    // Observer initialization code...
    // You can use dependency injection to get any class this observer may need.
  }

  public function execute(\Magento\Framework\Event\Observer $observer)
  {
    // Observer execution code...
  }
}
```

One of the more powerful feature of observers is that they are able to use parameters passed into the event when it was dispatched. Below is an example of an observer obtaining data passed in when the event was dispatched.

```php
namespace MyCompany\MyModule\Observer;

use Magento\Framework\Event\ObserverInterface;

class AnotherObserver implements ObserverInterface
{
  public function __construct()
  {
    // Observer initialization code...
    // You can use dependency injection to get any class this observer may need.
  }

  public function execute(\Magento\Framework\Event\Observer $observer)
  {
    $myEventData = $observer->getData('myEventData');
    // Additional observer execution code...
  }
}
```

### Subscribing to events

Observers can be configured to watch certain events in the `events.xml` file.

The `observer` [xml](https://glossary.magento.com/xml) element has the following properties:

*  `name` (required) - The name of the observer for the event definition.
*  `instance` (required) - The fully qualified class name of the observer.
*  `disabled` - Determines whether this observer is active or not. Default value is false.
*  `shared` - Determines the [lifestyle]({{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html#object-lifestyle-configuration) of the class. Default is `true`.

{: .bs-callout .bs-callout-warning}
The observer name must be unique, or an override will occur.

Below is an example of how to assign observers to watch certain events:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="my_module_event_before">
        <observer name="myObserverName" instance="MyCompany\MyModule\Observer\MyObserver" />
    </event>
    <event name="my_module_event_after">
        <observer name="myObserverName" instance="MyCompany\MyModule\Observer\AnotherObserver" />
    </event>
</config>
```

In the preceding example, we assign the observer `MyObserver` to the custom event `my_module_event_before` and `AnotherObserver` to `my_module_event_after`.

Observer names must be unique per event definition. This means that you cannot have two observers with the same name in the same event definition. In the example, both observers have the name `myObserverName`. This is acceptable because each of those observers belong to different event definitions.

If you declare an observer with a name that is already in use within the same event, Magento merges these declaration nodes into a single observer declaration, respecting the module load order as defined in the `app/etc/config.php` file. This is useful when disabling an observer declared in another module.

### Disabling an observer

Existing observers can be disabled, if you do not want to have them running. It is a good practice to disable the obsever if you want to change its logic rather than override it.
Below is an example of how to disable the previously created observer.

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
    <event name="my_module_event_before">
        <observer name="myObserverName" disabled="true" />
    </event>
</config>
```

## Recommended Reading

*  [Observers best practices]({{ page.baseurl }}/ext-best-practices/extension-coding/observers-bp.html)
