---
layout: howtom2devgde_chapters_fedg
title: Using JavaScript in Your Responsive Design
---
 
<h1 id="fedg_rwd_js">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/rwd/rwd_overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_rwd_js_overview">Overview of Blank Theme Javascript</h2>

The Blank theme responsive design relocates certain elements on the page. To implement this relocation, the Blank theme includes the following JavaScript files:

<pre>
├── app/design/frontend/Magento/blank/js/
    ├── responsive.js
    ├── navigation-menu.js
├── pub/lib/
    ├── matchMedia.js</pre>
	
<h2 id="fedg_rwd_js_matchmedia">Using matchMedia.js</h2>

`matchMedia.js` enables you to manipulate JavaScript for the desktop or mobile viewports. In the Blank theme, `responsive.js` toggles the behavior when the screen size reaches the breakpoint of 768px.

`/pub/lib/matchMedia.js` can be used in any theme.

<h2 id="fedg_rwd_js_resp">Using responsive.js</h2>

`responsive.js` implements specific responsive functions for the Blank theme. This file also contains a call of the `mediaCheck` anonymous function from `matchMedia.js`, which is responsible for reaching breakpoints.

The `mediaCheck` call follows:

<script src="https://gist.github.com/xcomSteveJohnson/16b30d482f0512f88d89.js"></script>






#### Related Topics:


