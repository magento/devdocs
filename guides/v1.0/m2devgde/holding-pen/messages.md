---
layout: howtom2devgde_chapters
title: Messages model 
---
 
<h1 id="m2devgde-session">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/holding-pen/messages.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-session-intro">Introduction to the Magento Messages model</h2> 

The messages model is now implemented in a separate library named Magento_Message. Previously, each session stored the messages. In Magento 2, the messages are stored in <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Message/ManagerInterface.php" target="_blank">Magento\Framework\Message\ManagerInterface</a>.

The messages in the message manager are grouped and by default belong to the `DEFAULT_GROUP`. You can specify a custom group for messages as follows:

<p class="q">Reviewer: Please verify the following. The information in this page is outdated.</p>

<pre>$messageManager->addMessage($message, "&lt;custom_group_name>");
 
...
 
$messageManager->addError($message, "&lt;custom_group_name>");</pre>

Alternatively, you can use dependency injection to specify the default group:

<pre>&lt;type name="Magento\Message\Manager">
    &lt;arguments>
        &lt;argument name="defaultGroup" xsi:type="string">backend&lt;/argument>
    &lt;/arguments>
&lt;/type></pre>