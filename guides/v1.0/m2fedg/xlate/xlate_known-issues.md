---
layout: howtom2devgde_chapters_fedg
title: Known Translation Issues and Workarounds
---
 
<h1 id="fedg_xlate_known-issues">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/xlate/xlate_known-issues.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

Current known issues:

*	The `__toString()` method is not always invoked automatically because of specifics of client code. 

	For example, if a `Phrase` object leaks into a `json_encode()`, it is cast to an object in JSON instead of to a string. 
	
	As a workaround, the `__()` function forcefully casts the `Phrase` object to a string.
	
*	The `en_US` to `en_US` dictionaries are useless because using the dictionary tool would be more efficient and wouldn't require maintenance by the Magento Core team.

*	In some XML files, labels are defined as attributes. You cannot use `translate="true"` for them because it would be ambiguous:

	<script src="https://gist.github.com/xcomSteveJohnson/32e7e40d0cbdb768fd8b.js"></script>
	
	As a result, the dictionary tools do not detect some phrases in XML files.
	
*	The `translation` and `customization` operations are still not segregated. The notion of "translate" means to display a phrase to display on a web page.



