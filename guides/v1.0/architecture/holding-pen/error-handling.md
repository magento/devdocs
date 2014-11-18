---
layout: howtom2devgde_chapters
title: Module error handling 
---
 
<h1 id="m2devgde-err">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}architecture/holding-pen/error-handling.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-err-errors">Error Handling</h2>

<p class="q">Reviewer: The public wiki referenced a non-existent class. Is the one I cite correct? Also, this class implements no interface. Please clarify.</p>

When a module initializes, the custom error handler is set and all errors are handled by the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/ErrorHandler.php" target="_blank">Magento\Framework\App\ErrorHandler</a>. 

<p class="q">This class implements the TBD interface.</p>

Depending on the mode of the application, the following workflow applies:

*	If developer mode is enabled, an exception contains an original error message and is handled as general exception.
*	If developer mode is disabled and logging is enabled, an error message is logged to the system log.
*	If developer mode is disabled and logging is disabled, no errors are reported.

There are several types of exceptions:

*	Generic exceptions that do not belong to any of the other types. 

	A generic exception in developer mode displays a exception message and a stack trace in standard output as HTML markup. 
	
	If there is a generic exception in live mode, a unique report identifier is generated. An exception message and a stack trace are written as plain text to a file named by the report ID, which usually could be found in the `var/report` directory. 
	
	Your specified error report page contains a reference to the report displayed to the user.

<p class="q">Reviewer: I do not know what class handles bootstrap exceptions. Please clarify.</p>
	
*	Bootstrap exceptions that occur when a module bootstraps; they are handled by TBD. 

	A bootstrap exception consists of an HTTP 503 (Service Unavailable) status code and the exception in plain text. 

<p class="q">Reviewer: I do not know what class handles core exceptions. Please clarify.</p>

*	Core exceptions that occur when business logic fails. 

	<p class="q">The TBD class handles these errors and presents them to the user. </p>

	The error messages themselves are handled by the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Message/AbstractMessage.php" target="_blank">Magento\Framework\Message\AbstractMessage</a>. A controller adds an exception message to the current session and sets an HTTP redirect to appropriate URL:
	
	<p class="q">Reviewer: Please fix the following code example.</p>

	<script src="https://gist.github.com/xcomSteveJohnson/54f492187aaa811c99f9.js"></script>

*	Session exceptions occur when session handling logic is violated. <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Session/Exception.php" target="_blank">Magento\Framework\Session\Exception</a> handles these errors. 

	By default, session exceptions result in redirecting the user to a module's base URL.
	
<p class="q">Reviewer: I do not know what class handles store exceptions. Please clarify.</p>
	
*	Store exceptions occur when a store cannot be initialized. 

	<p class="q">TBD handles these errors. </p>

	By default, a store exception results in displaying a 404 (Not Found) page to the user.
