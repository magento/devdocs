---
group: configuration-guide
title: X-Frame-Options header
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview

To help prevent [clickjacking](https://www.owasp.org/index.php/Clickjacking) exploits, we added an option to use the [X-Frame-Options](https://tools.ietf.org/html/rfc7034) HTTP request header in requests to your [storefront](https://glossary.magento.com/storefront).

The `X-Frame-Options` header enables you to specify whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, or `<object>` as follows:

*  `DENY`: Page cannot be displayed in a frame.
*  `SAMEORIGIN`: (The default Magento setting.) Page can be displayed only in a frame on the same origin as the page itself.
*  `ALLOW-FROM <uri>`: Page can be displayed only in a frame on the specified origin.

{:.bs-callout-warning}
The Chrome and Safari browsers do not support the `ALLOW-FROM` option. [Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options#Browser_compatibility) provides details about this feature.

{:.bs-callout-warning}
  For security reasons, Magento strongly recommends against running the Magento storefront in a frame.

## Implement `X-Frame-Options`

Set a value for `X-Frame-Options` in `<magento_root>/app/etc/env.php`. Following is the default value:

```php
'x-frame-options' => 'SAMEORIGIN',
```

If you want to allow any website to load page, you can use `*`:

```php
'x-frame-options' => '*',
```

We require you to edit `env.php` because it's more secure than setting a value in the [Magento Admin](https://glossary.magento.com/magento-admin).

## Verify your setting for `X-Frame-Options`

To verify your setting, view HTTP headers on any storefront page. There are several ways to do this, including using a web browser inspector.

The following example uses curl, which you can run from any machine that can connect to your Magento server over the HTTP protocol.

Use the following command:

```bash
curl -I -v --location-trusted '<your Magento storefront URL>'
```

Look for the `X-Frame-Options` value in the headers.

## For more information

*  [mozilla.org](https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options)
*  [security.stackexchange.com](http://security.stackexchange.com/questions/67889/why-do-browsers-enforce-the-same-origin-security-policy-on-iframes)
*  [MSDN blog](http://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx)
