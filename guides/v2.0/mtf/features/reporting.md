---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Reporting with the Functional Testing Framework
menu_title: Reporting
version: 2.0
github_link: mtf/features/reporting.md
---

### Contents
{:.no_toc}

* TOC
{:toc}

## About reporting  {#about}

The Functional Testing Framework (FTF) provides a reporting tool, which logs failures or any other information for you during test run.

The following image demonstrates example of general flow.  

<a href="{{site.baseurl}}common/images/ftf-reporting-diagram.png" alt="Reporting mechanism diagram" target="_blank"><img src="{{site.baseurl}}common/images/ftf-reporting-diagram.png" /></a>

Event manager is a core component, which:

- dispatches events
- gets a list of observers
- notifies observers depending on read [configuration] and [preset]

### Event manager {#event-manger}

Event manager is defined in the [`\Magento\Mtf\System\Event\EventManager`] class that:

- is an entry point to the event management system
- fetches configuration and observers
- creates events and passes them to observers
- notifies selected observers according to an event tags array and configuration

## Configuration {#configuration}

In `<magento2>/dev/tests/functional/phpunit.xml`, you can set a preset to use and a directory to store reports.

### Set a preset {#set-preset}

Set a [preset] (a list of dispatched [events][event]) and an [observer] to handle them:

{% highlight xml %}
<php>
    <env name="events_preset" value="<PRESET_NAME>" />
</php>
{% endhighlight xml %}

Replace `<PRESET_NAME>` with a name of preset that you want to use. The default preset is `base`.

### Set a reporting directory {#report-directory}

A directory to store your reports is set as `<env name="log_directory">` value.

{% highlight xml %}
<php>
    <env name="log_directory" value="<YOUR_DIRECTORY_PATH>" />
</php>
{% endhighlight %}

The default path is `<magento2>/dev/tests/functional/var/log`.

## Event presets  {#event-presets}

Event preset specifies observers and dispatched events handled by them. `<magento2>/dev/tests/functional/etc/events.xml` contains a list of event presets.

**Format of a preset**:

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
{% endhighlight %}

**Example**:

{% highlight xml %}
<preset name="custom">
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
{% endhighlight %}

**Explanation of the example**:

Each time when the `"exception"` and `"failure"` events are [dispatched][dispatch], HTML code and screenshot of a current web page are captured (see [Observers][observer] section for details). If the `"curl_failed"` event is dispatched, a corresponding curl response will be saved into HTML file in the `magento/curl-response` directory inside the [report directory].

Initially event presets are defined in the FTF in `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/events.xml`. It is not recommended to edit this file. You can extend the initial list or add new presets in `<magento2>/dev/tests/functional/etc/events.xml`. All changes are merged automatically.

### Observers  {#observers}

Observer is a PHP class which defines actions under Magento instance, browser, test run etc. Observers store and log information into [report directory](#set-a-report-directory).

The list of ready-to-use observers is the following:

| Observer class | Full class name | Description |
|---|---|---|
|[`AbstractObserver.php`]|`Magento\Mtf\System\Observer\AbstractObserver` |Abstract class, which is parent for most observers. Creates destination directory and standard prefix for a message to be written in the log. |
|[`AppState.php`]|`Magento\Mtf\System\Observer\AppState` |Sets application state name to an instance of the [`EventState`] class. |
|[`ClientError.php`]| `Magento\Mtf\System\Observer\ClientError` | Collects information about JavaScript errors on a web page under test. Uses an instance of the [`BrowserInterface.php`] to collect exceptions from a web page. Saves collected errors to `<reporting directory>/magento/client-error.log`. |
|[`CurlResponse.php`]|`Magento\Mtf\System\Observer\CurlResponse` | Saves response into HTML file in `<reporting directory>/magento/curl-response` directory by the corresponding destination. |
|[`Fixture.php`]| `Magento\Mtf\System\Observer\Fixture` | Sets a stage name of a fixture state to an instance of the [`EventState`] class. |
|[`Log.php`]| `Magento\Mtf\System\Observer\Log` | Saves event message to the `<reporting directory>/magento/logger.log`. |
|[`PageUrl.php`]| `Magento\Mtf\System\Observer\PageUrl` |Sets a page URL parameter (`pageUrl`) to the instance of the [`EventState`] class. |
|[`Screenshot.php`]| `Magento\Mtf\System\Observer\Screenshot` | Captures screenshot of a web page. Saves PNG image to the `<reporting directory>/magento/<module>/<test case>/<variation>/screenshots` directory by the corresponding destination. |
|[`SourceCode.php`]| `Magento\Mtf\System\Observer\SourceCode` | Collects HTML code of a web page. Saves HTML code to the `<reporting directory>/magento/<module>/<test case>/<variation>/page-source`.|

### Tags {#tags}

A tag contains name of event. When you want to process any event by a particular [observer], you need to:

1. [Dispatch][dispatch] the event.
2. Add a tag with name of the event to required observer in corresponding [event preset].

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

### Event dispatching {#dispatch-event}

`\Magento\Mtf\System\Event\EventManager::dispatchEvent()` is a method that dispatches an event.

{% highlight php %}
<?php
$this->eventManager->dispatchEvent(['your_event_tag'], [$your_input_parameters]);
{% endhighlight %}

 It has two arguments:

- Event tags. Event tag is a string that is dispatched. It is used as a [tag] in [event preset].
- Input parameters. The parameters used by observers as input parameters. For example, REST response.

Use [`Magento/Mtf/System/Event/EventManagerInterface`] in your class.

Example in code:

{% highlight php %}
if (!strpos($response, 'data-ui-id="messages-message-success"')) {
    $this->_eventManager->dispatchEvent(['curl_failed'], [$response]);
    throw new \Exception('Product creation by curl handler was not successful!');
}
{% endhighlight %}

## Practice

### Create a preset

The following example shows how to add the `custom` preset.

**Task**: Create a preset that logs only a web page HTML code and its screenshot when test run is failed

**Reports**

- log the HTTP code of the web page
-  capture the web page

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

### Add a custom observer

You can create your own observer using existing examples.

General implementation rules:

- An observer must implement [`ObserverInterface`].
- Save the class in `<magento2>/dev/tests/functional/lib/Magento/Mtf/System/Observer`.

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

<!-- LINK DEFINITIONS -->

<!-- Github links -->
[`AbstractObserver.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/AbstractObserver.php
[`AppState.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/AppState.php
[`BrowserInterface.php`]: (https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/BrowserInterface.php)
[`ClientError.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/ClientError.php
[`CurlResponse.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/CurlResponse.php
[EventManager.php]:
[`EventState`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/State.php
[`Fixture.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Fixture.php
[listener]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/StateListener.php
[`Log.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Log.php
[logger]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Logger.php
[`\Magento\Mtf\System\Event\EventManager`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManager.php
[`\Magento\Mtf\System\Event\EventManagerInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManagerInterface.php
[`ObserverInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/ObserverInterface.php
[`PageUrl.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/PageUrl.php
[`Screenshot.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Screenshot.php
[`SourceCode.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/SourceCode.php
[`StateListener.php` on GitHub]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/StateListener.php

<!-- Devdocs links -->
[configuration]: #configuration
[dispatch]: #dispatch-event
[event]: {{page.baseurl}}extension-dev-guide/events-and-observers.html#events
[event manager]: #event-manger
[event preset]: #event-presets
[observer]: #observers
[preset]: #event-presets
[report directory]: #report-directory
[set]: #set-preset
[tag]: #tags


<!-- ABBREVIOTIONS -->
*[FTF]: Functional Testing Framework
