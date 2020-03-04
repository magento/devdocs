---
group: php-developer-guide
title: Content Security Policy (CSP)
---

Content Security Policies are a powerful tool to mitigate against Cross Site Scripting (XSS) and related attacks, such 
as card skimmers, session highjacking, clickjacking, and others. Web servers send CSPs in response HTTP headers (namely
`Content-Security-Policy` and `Content-Security-Policy-Report-Only`) to browsers that whitelist the origins of
scripts, styles, and other resources. The CSPs and built-in browser features help prevent:

*  Loading a malicious script from an attacker's website
*  A malicious inline script from sending credit card info to an attacker's website
*  Loading a malicious style that will make users click on an element that wasn't supposed to be on a page etc

See [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
and [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) to learn more about CSP and each individual policy.

## Magento and CSP

As of version 2.3.5, Magento supports CSP headers (Magento_Csp module) and provides ways to configure them. Magento also
provides default configurations at the application level and for individual core modules that require
extra configuration. Policies can be configured for `adminhtml` and `storefront` areas separately to
accommodate different use cases. Magento also permits configuring unique CSPs for specific pages. 

CSP can work in 2 modes: 

*  `report-only` - In this mode, Magento reports policy violations but does not interfere. This mode is useful for debugging.
By default, CSP violations are written to the browser console, but they can be configured to be reported to an
endpoint as an HTTP request to collect logs. There are a number of services that will collect, store, and
sort your store's CSP violations reports for you.

*  `restrict mode` - In this mode, Magento acts on any policy violations.

## Default configuration

By default, CSP is configured in `report-only` mode, which allows merchants and developers to
configure policies to work according to their custom code. After the policies have been configured, switch the
mode to `restrict`.

Once configured, the following policies can be enforced:

*  Any resource, such as `.js`, `.css`, `.jpg`, or `.ttf` files, can only be loaded from the store's domain
*  Iframes can only include pages from the store itself
*  AJAX requests can only be sent to the store
*  Forms can only be sent to the store

For more details check the `Magento/Csp/etc/config.xml` file. Some domains
have already been whitelisted for modules that require it. For instance if the `Magento_Paypal` module is
installed, 'www.paypal.com' is already whitelisted for the `script-src` policy.

The followng features are allowed:

*  Inline JavaScript (JavaScript inside `<script>` tags and `on<event>` HTML tags)
*  JavaScript `eval()` usage
*  Inline styles (CSS inside `<style>` tags and `style` HTML attributes)

{:.bs-callout-info}
Some of these features will be disabled by default for Magento 2.4.

## Configure a module's CSP mode

You can set the CSP mode in a custom module by editing the module's `etc/config.xml` file. To set the mode to `restrict`,
change the value of the `default/csp/mode/admin/report_only` and/or the `default/csp/mode/storefront/report_only` element 
to 0. To enable `report-only` mode, set the values to 1.

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

You can use the`etc/config.xml` file in the `Magento_Csp` module as a reference. 
[Create your component file structure]({{page.baseurl}}/extension-dev-guide/build/module-file-structure.html) describes how to create a module.

## Configure CSPs for your custom code/extension/theme

Magento provides multiple ways to add whitelisted resources to your custom code, extension, or theme.
Be sure to only add resources you need in modules that require it.
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
