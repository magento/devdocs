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

The Functional Testing Framework (FTF) provides a reporting tool, which logs failures or any other information for you during test run.

### Reporting mechanism {#mechanism}

The reporting tool uses the following mechanism:

- [Event manager][event manager] dispatches your events.
- [Logger][logger] stores information for logging (log messages, HTML source etc.).
- [Listener][listener] listens for [events][event] (dispatched by [event manager]).
- [Event preset][event preset] defines relation between [tag] and [observer], describes what should be logged and how.
- [Tag][tag] is an event used by [event manager] to apply a corresponding observer defined in the [event preset].
- [Observer][observer] generates reports and also can perform other actions.

### Artifacts {#artifacts}

By default artifacts are stored in the `<magento2>/dev/tests/functional/var/log` directory. You can set another path in `<magento2>/dev/tests/functional/phpunit.xml`:

{% highlight xml %}
<php>
    <env name="log_directory" value="<YOUR_DIRECTORY_PATH>" />
</php>
{% endhighlight xml %}

## Event presets  {#event-presets}

Event preset is a list of reporting settings, which specify events to be handled, along with observers to handle them. The list of event presets is stored in XML file in `<magento2>/dev/tests/functional/etc/events.xml` and can be customized.

Format of a preset:

{% highlight xml %}
<preset name="...">
    <observer class="Magento\Mtf\System\Observer\...">
        <tag name="..." />
        <tag name="..." />
    </observer>
    <observer class="other\observer\class\path\...">
        <tag name="..." />
    </observer>
</preset>
{% endhighlight xml %}

Example of a preset (`base` preset from `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`):

{% highlight xml %}
<preset name="base">
    <observer class="Magento\Mtf\System\Observer\AppState">
        <tag name="app_state_applied" />
    </observer>
    <observer class="Magento\Mtf\System\Observer\Fixture">
        <tag name="persist_before" />
        <tag name="persist_after" />
    </observer>
    <observer class="Magento\Mtf\System\Observer\ClientError">
        <tag name="page_changed" />
        <tag name="exception" />
    </observer>
    <observer class="Magento\Mtf\System\Observer\Log">
        <tag name="exception" />
        <tag name="failure" />
    </observer>
    <observer class="Magento\Mtf\System\Observer\SourceCode">
        <tag name="exception" />
        <tag name="failure" />
    </observer>
    <observer class="Magento\Mtf\System\Observer\Screenshot">
        <tag name="exception" />
        <tag name="failure" />
    </observer>
    <observer class="Magento\Mtf\System\Observer\CurlResponse">
        <tag name="curl_failed" />
    </observer>
</preset>
{% endhighlight xml %}

Explanation of the preset from example:

???????/

Initially event presets are defined in the FTF in `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`. You can extend the initial list or add new presets in Magento functional tests in `<magento2>/dev/tests/functional/etc/events.xml`.

Presets from both these locations are automatically merged.

If you want to extend the default presets or add a custom preset, edit the `<magento2>/dev/tests/functional/etc/events.xml` file.

## Tags {#tags}

A tag contains a name of event that triggers an observer.

In terms of XML, it is represented as an element `<tag />` in `events.xml`. `<tag />` is a child element of an `<observer>` element.

{% highlight xml %}
<observer ... >
    <tag ... />
    <tag ... />
    ...
<observer />
{% endhighlight %}

It contains one required attribute `name`, where a name of event must be assigned.

{% highlight xml %}
<tag name="failure" />
{% endhighlight %}

### Add a tag

You can add a tag with a name of existing event to any observer. If you want to add a tag to an existing preset in the FTF, you should add it to Magento indicating a preset, and observer. The following example shows how to extend the FTF preset with a tag.

**Task**: Add the `bug` tag to the `SourceCode` observer of the `base` preset.

**Preconditions** The `base` preset is defined in the FTF (`<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`) and already contains the `SourceCode` observer. The `bug` event is [dispatched][dispatch].

**Solution** Add the `<tag name="bug" />` tag to the `<preset name="base">` element in the `<magento2>/dev/tests/functional/etc/events.xml`:

{% highlight xml %}
<preset name="base">

<observer class="Magento\Mtf\System\Observer\SourceCode">
    <tag name="bug" />
</observer>

<preset />
{% endhighlight xml %}

## Observers  {#observers}

| Observer class | Full class name | Description |
|---|---|---|
|[`AbstractObserver.php`]|`Magento\Mtf\System\Observer\AbstractObserver` |Abstract class, which is usually parent for other observers. Creates destination directory and standard prefix for a message to be written to the log. |
|[`AppState.php`]|`Magento\Mtf\System\Observer\AppState` |Sets application state name to an instance of the [`EventState`] class. |
|[`ClientError.php`]| `Magento\Mtf\System\Observer\ClientError` | Collects information about JavaScript errors on a web page under test. Uses an instance of the [`BrowserInterface.php`] to collect exceptions from a web page. Saves errors to the log. |
|[`CurlResponse.php`]|`Magento\Mtf\System\Observer\CurlResponse` | Saves response into HTML file in `curl-response` directory in corresponding hierarchy. |
|[`Fixture.php`]| `Magento\Mtf\System\Observer\Fixture` | Sets a stage name of a fixture state to an instance of the [`EventState`] class. |
|[`Log.php`]| `Magento\Mtf\System\Observer\Log` | Saves event message to the log. |
|[`PageUrl.php`]| `Magento\Mtf\System\Observer\PageUrl` |Sets a page URL parameter (`pageUrl`) to the instance of the [`EventState`] class. |
|[`Screenshot.php`]| `Magento\Mtf\System\Observer\Screenshot` | Captures screenshot of a web page. Saves them in the `screenshots` directory by the corresponding destination. |
|[`SourceCode.php`]| `Magento\Mtf\System\Observer\SourceCode` | Collects HTML code of a web page. Saves the code in the `page-source` directory by the corresponding destination. |

### Add a custom observer

You can create your own observer using existing examples.

General implementation rules:

- An observer must implement [`ObserverInterface`].
- Save the class in `<magento2>/dev/tests/functional/lib/Magento/Mtf/System/Observer`.

## Create a preset

The following example shows how to add the `custom` preset.

**Task**: Create a preset that logs only a web page HTML code and its screenshot when test run is failed

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

- [Dispatch][dispatch] the 'failure' event in the test case. This event is already existed and added to the code where the FTF processes the test failure.
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

## Edit a preset

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

## Set a preset {#set-preset}

You can set a list of [events][event] (a [preset][event preset]) to be logged and an [observer] to handle them in `<magento2>/dev/tests/functional/phpunit.xml`:

{% highlight xml %}
<php>
    <env name="events_preset" value="<PRESET_NAME>" />
</php>
{% endhighlight xml %}

Replace `<PRESET_NAME>` with the name of preset you want to use. You can determine it in `events.xml` as a value of corresponding attribute `<preset name="<PRESET_NAME>"`. The default value is `base`.

## Event manager  {#event-manger}

The FTF event management system dispatches, collects data and processes events during test run.

An event manager is defined in [`\Magento\Mtf\System\Event\EventManager`][EventManager.php] class.

An event manager:

- is an entry point to the event management system
- fetches configuration and observers
- creates events and passes them to observers
- notifies only selected observers according to an event tags array and configuration.

An event manager uses the following classes:

- Configuration `Mtf\System\Event\Config`
- Event Factory `Mtf\System\Event\EventFactory`
- Observer Pool `Mtf\System\Event\ObserverPool`

### `dispatchEvent(eventTags, inputParameters)` {#dispatch-event}

`dispatchEvent()` is a method that dispatches an event.

{% highlight php startinline=1 %}
$this->eventManager->dispatchEvent(['your_event_tag'], [$your_input_parameters]);
{% endhighlight %}

 It has two arguments:

- Event tags. Event tag is a string that is dispatched. It is used as a [tag] in [event preset].
- Input parameters. The parameters used by observers as input parameters. For example, REST response.

[`Magento/Mtf/System/Event/EventManagerInterface`] must be used in your class.

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
[`EventManager.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManager.php
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
[dispatch]: #dispatch-event
[event]: {{page.baseurl}}extension-dev-guide/events-and-observers.html#events
[event manager]: #event-manger
[event preset]: #event-presets
[listener]: #listener
[observer]: #observers
[set]: #set-preset
[tag]: #tags


<!-- ABBREVIOTIONS -->
*[FTF]: Functional Testing Framework
