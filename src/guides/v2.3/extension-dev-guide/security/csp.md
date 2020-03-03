---
group: php-developer-guide
title: Content Security Policy (CSP)
---

Content Security Policies is a powerful tool for XSS attacks mitigation like card skimmers,
session highjacking, clickjacking and others. CSPs are being sent as response HTTP headers, namely
`Content-Security-Policy` or `Content-Security-Policy-Report-Only` to browsers to whitelist
scripts, styles and other resources' origins along with some browser features to prevent
loading of a malicious script from an attacker's website, prevent a malicious inline script from sending
credit card info to an attacker's website, prevent loading of a malicious style that will make users click on element
that wasn't supposed to be on a page etc. To read more on CSP and about each individual policy you can
click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
and [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).
 
## Magento and CSP

As of version 2.3.5 Magento supports CSP headers (Magento_Csp module) and ways to configure them along
with default configurations provided on application level and for individual core modules that require
extra configuration. Policies can be configured for `adminhtml` and `storefront` areas separately to
accommodate different use cases. Magento also allows configuring unique CSPs for specific pages
- more on that later. CSP can work in 2 modes: `restrict mode` and `report-only mode` in which it will only report
policy violations but will not interfere - this mode is useful for debugging.
CSP violations will be only seen in browser console by default but can be configured to be reported to an
endpoint as an HTTP request to collect logs. There are a number of service that will collect, store and
sort your store's CSP violations reports for you.
 
## Default configuration

By default CSP is configured in `report-only` mode which will allow merchants and developers to first
configure policies to work according to their custom code and then switch mode to `restrict`.
Any resource (like a _.js, .css, .jpg, .ttf_) can only be loaded from store's domain, iframes can only
include pages from the store itself, AJAX requests can only be sent to the store, forms can only
be sent to the store. For more details check `Magento/Csp/etc/config.xml` file. Some domains
have already been whitelisted for modules that require it, for instance if you have `Magento_Paypal` module
installed _'www.paypal.com'_ will be whitelisted for _script-src_ policy.
 
Additionally the next features are allowed:

*  **Inline JavaScript** - meaning JS inside _\<script\>_ tags and _on\<event\>_ HTML tags
*  JavaScript _eval()_ usage
*  **Inline styles** - meaning CSS inside _\<style\>_ tags and _style_ HTML attributes
 
Please note that some of these features will be disabled by default for Magento 2.4.
 
## Changing CSP mode for Magento

You can change CSP mode to `restrict` by setting `default/csp/mode/report_only` setting to `0` by creating
a `config.xml` in one of your custom modules. For reference please see our default `config.xml` in `Magento_Csp`
module and read on how to create a module
[here](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/build/module-file-structure.html).
 
Example `config.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <csp>
            <mode>
                <storefront>
                    <report_only>0</report_only>
                </storefront>
                <admin>
                    <report_only>0</report_only>
                </admin>
            </mode>
        </csp>
    </default>
</config>
```
 
## Configuring CSPs for your custom code/extension/theme

When preparing your store/extension/theme to be CSP compatible there are multiple ways you can add whitelisted
resources to Magento CSP configuration. Be sure to only add resources you need in modules that require it.
Remember that adding a domain to _default-src_ when you only need to load a _.js_ file from it will not work -
you need to add the domain to _script-src_ for that.
 
### Adding a domain to the whitelist

You can add a domain to the whitelist for a policy (like _script-src, style-src, font-src_ and others) by
adding a `csp_whitelist.xml` to your custom module's `etc` folder. Please see the example below:

```xml
<?xml version="1.0"?>
<csp_whitelist xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Csp/etc/csp_whitelist.xsd">
    <policies>
        <policy id="script-src">
            <values>
                <value id="devdocs-base" type="host">https://devdocs.magento.com</value>
                <value id="magento" type="host">https://magento.com</value>
            </values>
        </policy>
        <policy id="connect-src">
            <values>
                <value id="devdocs" type="host">https://devdocs.magento.com</value>
            </values>
        </policy>
    </policies>
</csp_whitelist>
```
 
In case you include a script/css file from a _.phtml_ template you can also use dynamic whitelisting utility available
as `$csp` which is an instance of `Magento\Csp\Api\InlineUtilInterface`:

```html
<div>This is my page!!!</div>
<?= /* @noEscape */ $csp->renderTag('script', ['src' => 'http://my.magento.com/static/script.js']); ?>
```
 
### Whitelisting an inline script/style

While Magento 2.3 allows inline scripts/styles by default starting from 2.4 that will change so it makes sense
to prepare your custom code/extension for the future by whitelisting/avoiding usage of inline styles and scripts.
In order to whitelist a _script_ or _style_ HTML tag you need to use `Magento\Csp\Api\InlineUtilInterface`
by adding it as a dependency to your class that renders HTML or using `$csp` variable inside a _.phtml_
template.
 
Please see the following examples:

**Inside a _.phtml_ template:**

```html
<div>This is an HTML page</div>
<?= /* @noEscape */ $csp->renderTag('script', ['type' => 'text/javascript'], "\n    let myVar = 1;\n    console.log('myVar = ' + myVar);\n") ?>
<?= /* @noEscape */ $csp->renderTag('style', [], "\n    .#my-element {\n        width: 100%;\n    }\n") ?>
```

**Inside a class that renders HTML:**

```php
class HtmlRenderer
{
    /**
     * @var \Magento\Csp\Api\InlineUtilInterface
     */
    private $cspUtil;
    
    //...

    public function renderSomeHtml(): string
    {
        $html = '<div>This is an HTML page</div>';
        $html .= $this->cspUtil->renderTag(
            'script',
            ['type' => 'text/javascript'],
            "\n    let myVar = 1;\n    console.log('myVar = ' + myVar);\n"
        );

        return $html;
    }
}
```
 
In it's current state CSP does not allow whitelisting of JavaScript inside _on\<event\>_ HTML attributes as well
as styles inside _style_ attribute - avoid them inside your HTML by replacing them with separate _style_ and _script_
HTML tags whitelisted via `Magento\Csp\Api\InlineUtilInterface`.
 
Alternatively inline CSS and JS inside _style_ and _script_ tags can also be whitelisted with `csp_whitelist.xml` files.
You would need to get `sha256` hash of a tag's content and encode it as BASE64, then
add it to your module's `csp_whitelist.xml`.
Programmatically it could look like this:

```php
$whitelistHash = base64_encode(hash('sha256', $content, true));
```

And this is how you would add it to a `csp_whitelist.xml` file:

```xml
<?xml version="1.0"?>
<csp_whitelist xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Csp/etc/csp_whitelist.xsd">
    <policies>
        <policy id="script-src">
            <values>
                <value id="my-scripts-hash" type="hash" algorithm="sha256">B4yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8=</value>
            </values>
        </policy>
    </policies>
</csp_whitelist>
```
 
__NOTE:__ When _unsafe-inline_ is allowed for _script-src/style-src_ policy whitelisted inline scripts/styles hashes
won't appear in `Content-Security-Policy` header. 
 
### Advanced CSP configuration

In order to configure other CSPs like, for instance, `sandbox` policy that does not consist of whitelisted hosts
and hashes or for more advanced _fetch_ policies configurations, like removing inline support from _script-src_
you would have to create a `config.xml` file inside your custom module and rewrite default values. For reference please
see `Magento\Csp\etc\config.xml`
 
### Report-Uri configuration

Regardless of `restrict` or `report-only` mode CSP violations may be reported to an endpoint for collection.
URL to use for reporting by browsers can be configured in your custom module's `config.xml` file:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <csp>
            <mode>
                <storefront>
                    <report_uri>http://csp-reporting-service.com/my-project/endpoint</report_uri>
                </storefront>
                <admin>
                    <report_uri>http://csp-reporting-service.com/my-project/endpoint</report_uri>
                </admin>
            </mode>
        </csp>
    </default>
</config>
```
 
### Page specific Content-Security-Policies

Magento can send unique policies for a specific page. To do so implement `Magento\Csp\Api\CspAwareActionInterface`
in a controller responsible for the page and define `modifyCsp` method. It will receive existing CSPs
read from configs and allow you redefine them by returning a new list. See the example below:

```php
class Mypage extends \Magento\Framework\App\Action\Action implements \Magento\Csp\Api\CspAwareActionInterface
{
    /**
     * My custom page.
     *
     * @inheritDoc
     */
    public function execute()
    {
        return $this->resultPageFactory->create();
    }

    public function modifyCsp(array $appliedPolicies): array
    {
        $appliedPolicies[] = new \Magento\Csp\Model\Policy\FetchPolicy(
            'form-action',
            false,
            ['https://my-site.com'],
            ['https']
        );

        return $appliedPolicies;
    }
}
```
 
Don't worry about defining other policy options that you don't care about in the context like _unsafe-inline_ - same
policy options read from config will be merged later.
 
## Conclusion

Content Security Policy is a powerful tool for XSS prevention and it is recommended to merchants, extension and theme
developers to use Magento-provided tools to configure policies for their needs.
