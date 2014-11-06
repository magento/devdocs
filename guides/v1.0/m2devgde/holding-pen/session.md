---
layout: howtom2devgde_chapters
title: Session 
---
 
<h1 id="m2devgde-session">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/holding-pen/session.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-session-intro">Introduction to Magento sessions</h2> 

Magento sessions store data between user requests. The Save handler is used for saving and retrieving this data.

Magento supports the following Save handlers:

<p class="q">Reviewer: What is the difference between memcache and memcached? Aren't they the same? And what handler does Redis use?</p>

*	`file`
*	`db`
*	`memcache`
*	`memcached`
*	`eaccelerator`

The `Save` handler is defined in an application's `local.xml` as follows in `<session_save><![CDATA[files]]></session_save>`

You can use the following nodes:

*	`session_save` declares the handler to use for session storage (`[files]` by default).
*	`session_save_path` retrieves the handler-specific save path (that is, a directory for a file or connection string for `memcache`).
*	`session_cache_limiter` the <a href="http://php.net/manual/en/function.session-cache-limiter.php#82174" target="_blank">cache control HTTP headers</a> to use. 

To access data in the session storage, use the `_call()` method of the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Session/SessionManager.php" target="_blank">SessionManager</a> class. Session data is stored in the session's storage object. 

However, the SessionManager class should not extend <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Object.php" target="_blank">Magento\Framework\Object</a>. A session's configuration object implements <a href="http://framework.zend.com/apidoc/2.2/classes/Zend.Session.Config.ConfigInterface.html" target="_blank">Zend\Session\Config\ConfigInterface</a> but does not affect existing Zend session objects.
