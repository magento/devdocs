---
group: config-guide
subgroup: 02_Security
title: X-Frame-Options header
menu_title: X-Frame-Options header
menu_order: 5
menu_node:
version: 2.0
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview

To help prevent <a href="https://www.owasp.org/index.php/Clickjacking" target="_blank">clickjacking</a> exploits, we added an option to use the <a href="https://tools.ietf.org/html/rfc7034" target="_blank">X-Frame-Options</a> HTTP request header in requests to your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

The `X-Frame-Options` header enables you to specify whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, or `<object>` as follows:

*	`DENY`: Page cannot be displayed in a frame.
*	`SAMEORIGIN`: (The default Magento setting.) Page can be displayed only in a frame on the same origin as the page itself.
*	`ALLOW-FROM <uri>`: Page can be displayed only in a frame on the specified origin.

<div class="bs-callout bs-callout-warning">
    <p>For security reasons, Magento strongly recommends against running the Magento storefront in a frame.</p>
</div>

## Implement `X-Frame-Options`

Set a value for `X-Frame-Options` in `<your Magento install dir>/app/etc/env.php`. Following is the default value:

	  'x-frame-options' => 'SAMEORIGIN',

We require you to edit `env.php` because it's more secure than setting a value in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.

## Verify your setting for `X-Frame-Options`

To verify your setting, view HTTP headers on any storefront page. There are several ways to do this, including using a web browser inspector.

The following example uses curl, which you can run from any machine that can connect to your Magento server over the HTTP protocol.

Use the following command:

	curl -I -v --location-trusted '<your Magento storefront URL>'

Look for the `X-Frame-Options` value in the headers.

## For more information

*	<a href="https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options" target="_blank">mozilla.org</a>
*	<a href="http://security.stackexchange.com/questions/67889/why-do-browsers-enforce-the-same-origin-security-policy-on-iframes" target="_blank">security.stackexchange.com</a>
*	<a href="http://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx" target="_blank">MSDN blog</a>

