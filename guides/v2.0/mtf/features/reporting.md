---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Reporting with the Functional Testing Framework
menu_title: Reporting
version: 2.0
github_link: mtf/features/reporting.md
---

The Functional Testing Framework (FTF) provides a reporting tool, which logs failures or any other information for you during test run.

The following image demonstrates example of a general flow.  

<a href="{{site.baseurl}}common/images/ftf/ftf-reporting-diagram.png" alt="Reporting mechanism diagram" target="_blank"><img src="{{site.baseurl}}common/images/ftf/ftf-reporting-diagram.png" /></a>

The event manager is a core component which:

- dispatches events
- gets a list of observers
- notifies observers depending on read [configuration] and [preset]

### Event manager {#event-manger}

The event manager is defined in the [`\Magento\Mtf\System\Event\EventManager`][EventManager] class that:

- is an entry point to the event management system
- fetches configuration and observers
- handles events and passes them to observers
- notifies selected observers according to an event tags array and configuration

## `phpunit.xml` configuration {#configuration}

In `<magento_2_root_dir>/dev/tests/functional/phpunit.xml`, you can set a preset to use and a directory to store reports.

### Set a preset {#set-preset}

Set a preset, which is a list of dispatched [events][event] and an [observers][observer] to handle them:

{% highlight xml %}
<php>
    <env name="events_preset" value="<preset_name>" />
</php>
{% endhighlight xml %}

Replace `<preset_name>` with a name of preset that you want to use.

### Set a reporting directory {#report-directory}

Set the value of `<env name="log_directory">` to the directory in which to store your reports.

{% highlight xml %}
<php>
    <env name="log_directory" value="<your_directory_path>" />
</php>
{% endhighlight %}

The default path is `<magento_2_root_dir>/dev/tests/functional/var/log`.

## `events.xml` configuration  {#event-presets}

An event preset specifies observers and dispatched events handled by them. `<magento_2_root_dir>/dev/tests/functional/etc/events.xml` contains a list of event presets.

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

Each time the `"exception"` and `"failure"` events are [dispatched][dispatch], HTML code and screen capture of the current web page are logged (see [Observers][observer] section for details). If the `"curl_failed"` event is dispatched, a corresponding cURL response is saved in an HTML file in the `magento/<module>/<test_case>/<variation>/curl-response` directory inside the [report directory].

Initially, event presets are defined in the FTF in `<magento_2_root_dir>/dev/tests/functional/vendor/magento/mtf/etc/events.xml` ([open the `events.xml` on GitHub repository][`events.xml` on GitHub]). It is not recommended to edit this file. You can extend the initial list or add new presets in `<magento_2_root_dir>/dev/tests/functional/etc/events.xml`. All changes are merged automatically.

### Observers  {#observers}

An observer is a PHP class which defines actions under Magento instance, browser, test run, and so on.

The list of ready-to-use observers is the following:

|Observer full class name | Description |
|---|---|
|[`\Magento\Mtf\System\Observer\ClientError`][ClientError] | Collects information about JavaScript errors on a web page under test. Uses an instance of the [`BrowserInterface`] to collect exceptions from a web page. Saves collected errors to `<reporting_directory>/magento/client-error.log`. |
|[`\Magento\Mtf\System\Observer\CurlResponse`][CurlResponse] | Saves response into HTML file in `<reporting_directory>/magento/<module>/<test_case>/<variation>/curl-response` directory. |
|[`\Magento\Mtf\System\Observer\Log`][Log] | Saves event message to the `<reporting_directory>/magento/logger.log`. |
|[`\Magento\Mtf\System\Observer\PageUrl`][PageUrl] |Sets a page URL parameter to the instance of the [`EventState`] class. |
|[`\Magento\Mtf\System\Observer\Screenshot`][Screenshot] | Captures a screenshot of a web page. Saves a PNG image to the `<reporting_directory>/magento/<module>/<test_case>/<variation>/screenshots` directory. |
|[`\Magento\Mtf\System\Observer\SourceCode`][SourceCode] | Collects HTML code of a web page. Saves HTML code to the `<reporting_directory>/magento/<module>/<test_case>/<variation>/page-source`.|

### Tags {#tags}

A tag contains name of an event. When you want to process any event by a particular [observer], you need to:

1. [Dispatch][dispatch] the event.
2. Add a tag with name of the event to required observer in corresponding [event preset].

In terms of XML, it is represented as an element `<tag />` in `events.xml`. `<tag />` is a child element of an `<observer>` element. See the following example:

{% highlight xml %}
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
{% endhighlight %}

As you can see, a tag contains one required attribute `name`, where a name of event must be assigned.

## Event dispatching {#dispatch-event}

A method that is used to dispatch events is defined in [`\Magento\Mtf\System\Event\EventManagerInterface`][EventManagerInterface]. The FTF uses its default implementation `\Magento\Mtf\System\Event\EventManager::dispatchEvent()`.

{% highlight php startinline=1%}
$this->eventManager->dispatchEvent(['your_event_tag'], [$your_input_parameters]);
{% endhighlight %}

It has two arguments:

- Array of event tags. Event tags specify the name of event that is dispatched. It is used as a [tag] in [event preset].
- Input parameters. The parameters used by observers as input parameters. For example, a cURL response.

Example of use:

{% highlight php %}
<?php

if (!strpos($response, 'data-ui-id="messages-message-success"')) {
    $this->_eventManager->dispatchEvent(['curl_failed'], [$response]);
    throw new \Exception('Product creation by curl handler was not successful!');
}
{% endhighlight %}

## Examples {#examples}

The following examples explain how to use the reporting tool on practice.

* [Create a preset][create preset]
* [Edit a preset][edit preset]
* [Create and apply a custom observer][add custom observer]

### Create a preset {#create-preset}

The following example shows how to add a `custom` preset.

**Task**: Create a preset that logs only a web page HTML code and its screenshot when a test run is failed.

**Reports**:

- HTML code
- screenshots

**What is needed**:

- [observers][observer]:
  - `\Magento\Mtf\System\Observer\SourceCode`
  - `\Magento\Mtf\System\Observer\Screenshot`
- [events][event]:
  - `failure`

**Solution**:

Step 1. [Dispatch][dispatch] the `failure` event in the test case. This event already exists and is added to the code where the FTF processes the test failure.

Step 2. Open `<magento_2_root_dir>/dev/tests/functional/etc/events.xml`.

Step 3. Add a preset with required observers and tags.

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

### Edit a preset {#edit-preset}

The following example shows how to edit the `base` preset.

**Task**: Take a screenshot before click, after click, and when a value is set.

**Reports**:

- screenshots

**What is needed**:

- [preset]:
  - `base`
- [observers][observer]:
  - [`\Magento\Mtf\System\Observer\Screenshot`][Screenshot]
- [events][event]:
  - `click_before`
  - `click_after`
  - `set_value`

<div class="bs-callout bs-callout-warning">
    <p>The <code>base</code> preset is stored in the FTF <code>&lt;magento2&gt;/dev/tests/functional/vendor/magento/mtf/etc/events.xml</code>. To add or change any setting, edit <code>&lt;magento2&gt;/dev/tests/functional/etc/events.xml</code>, which is merged with the one in the FTF.
</p>
</div>

**Solution**:

Step 1. [Dispatch][dispatch] the events `click_before`, `click_after` and `set_value` in your code where applicable.

Step 2. In the `base` preset, add required observer and event tags.

{% highlight xml %}
<preset name="base">
    ...
    <observer class="Magento\Mtf\System\Observer\Screenshot">
        <tag name="click_before" />
        <tag name="click_after" />
        <tag name="set_value" />
    </observer>
    ...
</preset>
{% endhighlight %}

### Create and apply a custom observer {#add-custom-observer}

You can create your own observer using existing examples.

General implementation rules:

- An observer must implement [`ObserverInterface`].
- Put the class in `<magento_2_root_dir>/dev/tests/functional/lib/Magento/Mtf/System/Observer`.

The following example shows how to use a custom observer in the example with the `\Magento\Mtf\System\Observer\WebapiResponse` observer.

**Task**: Create observer that logs WebAPI responses containing exceptions. Use the observer when a fixture is saved.

**Reports**:

- Log in JSON

**What is needed**:

- [preset]:
  - `base`
- [observer]:
  - `\Magento\Mtf\System\Observer\WebapiResponse`
- [event]:
  - `webapi_failed`

**Solution**:

Step 1. Create an observer class `\Magento\Mtf\System\Observer\WebapiResponse` that stores incoming events in JSON files.

{% highlight php %}
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Mtf\System\Observer;

use Magento\Mtf\System\Event\Event;

/**
 * Observer for obtaining response of web api handler.
 */
class WebapiResponse extends AbstractObserver
{
    /**
     * File name of response source.
     */
    const FILE_NAME = 'webapi_response.log';

    /**
     * Collect response source artifact to storage.
     *
     * @param Event $event
     * @return void
     */
    public function process(Event $event)
    {
        $directory = $this->createDestinationDirectory('webapi-response');
        $this->logger->log(
            json_encode($event->getSubjects()[0]),
            $directory . '/' . $event->getFileIdentifier() . '.json'
        );
    }
}
{% endhighlight %}

Step 2. [Dispatch][dispatch] an event `webapi_failed` in the `\Magento\Tax\Test\Handler\TaxRule\WebApi::persist()` [handler] for failed responses.

{% highlight php startinline=1 %}

public function persist(FixtureInterface $fixture = null)
{
    // Implementation of the method
    // ...    
    if (empty($response['id'])) {
        $this->eventManager->dispatchEvent(['webapi_failed'], [$response]);
        throw new \Exception('Tax rule creation by Web API handler was not successful!');     
     }
     
    return ['id' => $response['id']];
}
{% endhighlight %}

Step 3. Add the observer and the tag to the `base` preset in `events.xml`.

In `<magento_2_root_dir>/dev/tests/functional/etc/events.xml`, add to a preset `<preset name="base">` an observer `<observer class="Magento\Mtf\System\Observer\WebapiResponse">` with a tag `<tag name="webapi_failed" />`:

{% highlight xml %}
<preset name="base">
...
    <observer class="Magento\Mtf\System\Observer\WebapiResponse">
        <tag name="webapi_failed" />
    </observer>
...
<preset />
{% endhighlight xml %}

<!-- LINK DEFINITIONS -->

<!-- Github links -->
[`BrowserInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/BrowserInterface.php
[ClientError]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/ClientError.php
[CurlResponse]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/CurlResponse.php
[`events.xml` on GitHub]: https://github.com/magento/mtf/blob/develop/etc/events.xml
[`EventState`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/State.php
[Log]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Log.php
[EventManager]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManager.php
[EventManagerInterface]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/EventManagerInterface.php
[`ObserverInterface`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Event/ObserverInterface.php
[PageUrl]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/PageUrl.php
[Screenshot]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/Screenshot.php
[SourceCode]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/System/Observer/SourceCode.php

<!-- Devdocs links -->
[add custom observer]: #add-custom-observer
[edit preset]: #edit-preset
[create preset]: #create-preset
[configuration]: #configuration
[dispatch]: #dispatch-event
[event]: {{page.baseurl}}extension-dev-guide/events-and-observers.html#events
[event manager]: #event-manger
[event preset]: #event-presets
[handler]: {{page.baseurl}}mtf/mtf_entities/mtf_handler.html
[observer]: #observers
[preset]: #event-presets
[report directory]: #report-directory
[set]: #set-preset
[tag]: #tags


<!-- ABBREVIOTIONS -->
*[FTF]: Functional Testing Framework
