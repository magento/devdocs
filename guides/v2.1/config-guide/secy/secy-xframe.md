---
layout: default
group: config-guide
subgroup: 02_Security
title: X-Frame-Options header
menu_title: X-Frame-Options header
menu_order: 5
menu_node: 
version: 2.1
github_link21: config-guide/secy/secy-xframe.md
---

## Overview
To help prevent <a href="https://www.owasp.org/index.php/Clickjacking" target="_blank">clickjacking</a> exploits, we added an option to use the <a href="https://tools.ietf.org/html/rfc7034" target="_blank">X-Frame-Options</a> HTTP request header in requests to your storefront.

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

We require you to edit `env.php` because it's more secure than setting a value in the Magento Admin.

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

