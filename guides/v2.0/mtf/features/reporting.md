---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Reporting with the Functional Testing Framework
menu_title: Reporting
version: 2.0
github_link: mtf/features/reporting.md
---

<h3>Contents</h3>

* TOC
{:toc}

## About reporting  {#about}

The Functional Testing Framework (FTF) provides a reporting tool, which logs failures for you during test run.

### Reporting mechanism {#mechanism}

The reporting tool uses the following mechanism:

* [Event manager][event manager] dispatches your events.

* [Logger][logger] sets directory to store logs.

* [Listener][listener] listens for [events][event] (dispatched by [event manager]).

* [Event preset][event preset] defines relation between [tag] and [observer].

* [Tag][tag] triggers an observer.

* [Observer][observer] generates reports.

### Set an event preset {#set-events}

You can set a list of [events][event] (a [preset][event preset]) to be logged and an [observer] to handle them in `<magento2>/dev/tests/functional/phpunit.xml`:

        {% highlight xml %}
        <php>
            <env name="events_preset" value="<PRESET_NAME>" />
        </php>
        {% endhighlight xml %}

### Artifacts {#artifacts}

Artifacts are stored in the `<magento2>/dev/tests/functional/var/log` directory. You can set another path in `<magento2>/dev/tests/functional/phpunit.xml`:

        {% highlight xml %}
        <php>
            <env name="log_directory" value="<YOUR_DIRECTORY_PATH>" />
        </php>
        {% endhighlight xml %}

[Event presets][event preset] are set in `<magento2>/dev/tests/functional/etc/events.xml` and can be customized.

## Event presets  {#event-presets}

The FTF uses event preset, which name is set as `value` in `<magento2>/dev/tests/functional/phpunit.xml`:

        {% highlight xml %}
        <php>
            <env name="events_preset" value="YOUR_PRESET_NAME" />
        </php>
        {% endhighlight xml %}

Event presets are defined in Magento functional tests in `<magento2>/dev/tests/functional/etc/events.xml`, and in the FTF in `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`. Presets from both these locations are automatically merged.

If you want to extend the default presets or add a custom preset, edit the `<magento2>/dev/tests/functional/etc/events.xml` file.

### Edit a preset

The following example shows how to edit the `detailed` preset.

The preset is stored in the FTF `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`. To add or change any setting, you should edit `<magento2>/dev/tests/functional/etc/events.xml`, which is merged with the one in the FTF.

Assume, that we want to process 'webapi_failed' events by the `WebapiResponse` observer in `detailed` preset. The following code must be added:

    {% highlight xml %}
    <preset name="detailed">
        <observer class="Magento\Mtf\System\Observer\WebapiResponse">
            <tag name="webapi_failed" />
        </observer>
    </preset>
    {% endhighlight xml %}

Now, if you [set] the `detailed` preset, the added event will be processed additionally to events defined in `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`.

### Create a preset

The following example shows how to add the `custom` preset.

**Task**: Create a preset that logs a web page in which test run was failed

**Reports**

- log the HTTP code of the web page
-	capture the web page

**What is needed**:

- observers:
	- Magento\Mtf\System\Observer\SourceCode
	- Magento\Mtf\System\Observer\Screenshot
- events:
	- 'failure'

**Solution**:

- Dispatch the 'failure' event in the test case



- Add a preset to `<magento2>/dev/tests/functional/etc/events.xml` with observers and tag that we need.

    {% highlight xml %}
    <preset name="custom">
        <observer class="Magento\Mtf\System\Observer\SourceCode">
            <tag name="failure" />
        </observer>
        <observer class="Magento\Mtf\System\Observer\Screenshot">
            <tag name="failure" />
        </observer>
    </preset>
    {% endhighlight xml %}

## Tags {#tags}

### What is a tag

Tag contains a name of event that triggers an observer.
In `events.xml`, an `<observer>` element is a parent element for `<tag>`.

### What a tag can be

It contains one required attribute `name`, where a name of event must be assigned.

### How to use tags

Add a new tag, when an observer is already defined in preset.

#### In FTF preset

**Task**: Add the `terrible_bug` tag to the `SourceCode` observer of the `base` preset.

Add to the `<preset name="base">` element in the `<magento2>/dev/tests/functional/etc/events.xml` the following XML code.

    {% highlight xml %}
    <observer class="Magento\Mtf\System\Observer\SourceCode">
        <tag name="terrible_bug" />
    </observer>
    {% endhighlight xml %}

#### In Magento preset

**Task**: Add the `simple_bug` tag to the `SourceCode` observer of the `base` preset.

Add the `<tag name="terrible_bug" />` to the previous code

    {% highlight xml %}
    <preset name="base">
        <observer class="Magento\Mtf\System\Observer\SourceCode">
            <tag name="terrible_bug" />
            <tag name="simple_bug" />
        </observer>
    </preset>
    {% endhighlight xml %}

## Observers  {#observers}

| Observer class | Full class name | Description |
|---|---|---|
|[`AbstractObserver.php`]|`Magento\Mtf\System\Observer\AbstractObserver` |Abstract class that is parent for other observers. Creates destination directory and standard prefix for a message to be written to the log. |
|[`AppState.php`]|`Magento\Mtf\System\Observer\AppState` |Sets application state name to the object of EventState class. |
|[`ClientError.php`]| `Magento\Mtf\System\Observer\ClientError` | Collects information about JavaScript errors on a web page under test. Uses an instance of the [`BrowserInterface.php`] to collect exceptions from a web page. Saves errors to the log. |
|[`CurlResponse.php`]|`Magento\Mtf\System\Observer\CurlResponse` | Saves response into HTML file in `curl-response` directory in corresponding hierarchy. |
|[`Fixture.php`]| `Magento\Mtf\System\Observer\Fixture` | Sets a stage name of a fixture state to [`EventState`] object. |
|[`Log.php`]| `Magento\Mtf\System\Observer\Log` | Saves event message to the log. |
|[`PageUrl.php`]| `Magento\Mtf\System\Observer\PageUrl` |Sets a page URL parameter (`pageUrl`) in [`EventState`] object |
|[`Screenshot.php`]| `Magento\Mtf\System\Observer\Screenshot` | Captures screenshot of a web page. Saves them in the `screenshots` directory by the corresponding destination. |
|[`SourceCode.php`]| `Magento\Mtf\System\Observer\SourceCode` | Collects HTML code of a web page. Saves the code in the `page-source` directory by the corresponding destination. |

### Add a custom observer

You can create your own observer using existing examples.

General implementation rules:

- Implement [`ObserverInterface`].
- By default you should store it in `<magento2>/dev/tests/functional/lib/Magento/Mtf/System/Observer`.

## Event manager  {#event-manger}

The FTF event management system dispatches, collects data and processes events during test run.

You can find the event manager class in `<magento2>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/System/Event/EventManager.php`. ([`EventManager.php` on GitHub]).

Event manager:

  - is an entry point to event management system
  - fetches configuration and observers
  - creates events and passes them to observers
  - notifies only selected observers according to event tags array and configuration.

Event manager is dependent on:

  - Configuration `Mtf\System\Event\Config`
  - Event Factory `Mtf\System\Event\EventFactory`
  - Observer Pool `Mtf\System\Event\ObserverPool`

### `dispatchEvent(eventTags, inputParameters)` {#dispatchEvent}

`dispatchEvent()` is a method that dispatches an event.

{% highlight php startinline=1 %}
$this->_eventManager->dispatchEvent(['your_event_tag'], [$your_input_parameters]);
{% endhighlight %}

 It has two arguments:

- Event tags. Event tag is a string that is dispatched. It is used as a [tag] in [event preset].
- Input parameters. The parameters used by observers as input parameters. For example, REST response.

[`Magento/Mtf/System/Event/EventManagerInterface`] must be added to your class.

Example in code:

    {% highlight php startinline=1 %}
    if (!strpos($response, 'data-ui-id="messages-message-success"')) {
    $this->_eventManager->dispatchEvent(['curl_failed'], [$response]);
    throw new \Exception('Product creation by curl handler was not successful!');
    }
    {% endhighlight %}

## Listener {#listener}

The listener is set in `<magento2>/dev/tests/functional/phpunit.xml`.

    {% highlight xml %}
    <listeners>
        <listener class="Magento\Mtf\System\Event\StateListener" />
    </listeners>
    {% endhighlight xml %}

[`StateListener.php` on GitHub]


<!-- LINK DEFINITIONS -->

<!-- Github links -->
[`AbstractObserver.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/AbstractObserver.php
[`AppState.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/AppState.php
[`BrowserInterface.php`]: (https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/BrowserInterface.php)
[`ClientError.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/ClientError.php
[`CurlResponse.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/CurlResponse.php
[`EventManager.php` on GitHub]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManager.php
[`EventState`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/State.php
[`Fixture.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Fixture.php
[`Log.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Log.php
[logger]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Logger.php
[`Magento/Mtf/System/Event/EventManagerInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManagerInterface.php
[`ObserverInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/ObserverInterface.php
[`PageUrl.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/PageUrl.php
[`Screenshot.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Screenshot.php
[`SourceCode.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/SourceCode.php
[`StateListener.php` on GitHub]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/StateListener.php

<!-- Devdocs links -->
[event]: {{page.baseurl}}extension-dev-guide/events-and-observers.html#events
[event manager]: #event-manger
[listener]: #listener
[observer]: #observers
[set]: #set-preset
[tag]: #tags
[event preset]: #event-presets

<!-- ABBREVIOTIONS -->
*[FTF]: Functional Testing Framework
