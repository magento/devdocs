---
layout: default
group: config-guide
subgroup: B_Security
title: X-Frame-Options header
menu_title: X-Frame-Options header
menu_order: 2
menu_node: 
github_link: config-guide/secy/secy-xframe.md
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

## Implementing `X-Frame-Options`
TBD

## Verifying your setting for `X-Frame-Options`
TBD

## For more information
*	<a href="https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options" target="_blank">mozilla.org</a>
*	TBD

