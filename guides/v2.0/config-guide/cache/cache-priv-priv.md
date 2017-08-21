---
layout: default
group: config-guide
subgroup: 08_Caching
title: Public and private content
menu_title: Public and private content
menu_order: 19
menu_node:
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-priv.md
---

{::options syntax_highlighter="rouge" /}

Caching is one of the most effective ways to improve website performance. Retrieving stored ({% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cached{% endglossarytooltip %}) content from a previous request for the same client instead of requesting files from your server every time someone visits your site is a more efficient use of network bandwidth.

The Magento page cache library contains a simple PHP reverse proxy that enables full page caching out of the box. A reverse proxy acts as an intermediary between visitors and your application and can reduce the load on your server.

## Content types
Reverse proxies serve "public" or shared content to more than one user. However, most Magento websites generate dynamic and personalized "private" content that should only be served to one user, which presents unique caching challenges. To adress these challenges, Magento can distinguish between two types of content:

-   **Public** - Public content is stored server side in your reverse proxy cache storage (e.g., file system, database, Redis, or Varnish). Examples of public content include header, footer, and category listing.

-   **Private** - Private content is stored client side (e.g., browser). Examples of private content include wishlist, shopping cart, customer name, and address.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You should limit stored private content to a small portion of the page's total content.
</div>

## Public content
By default, all pages in Magento are cacheable, but you can disable caching if necessary (e.g., payment method return page, debug page, or AJAX data source).

### Disable caching
To disable caching, add a `cacheable="false"` attribute to any block in your layout.

``` xml
<block class="Magento\Paypal\Block\Payflow\Link\Iframe" template="payflowlink/redirect.phtml" cacheable="false"/>
```

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento disables page caching if at least one non-cacheable block is present in the layout.
</div>

You can also disable caching with HTTP headers. Use the controller to return an object that contains methods for manipulating the cache:

``` php?start_inline=1
class DynamicController extends \Magento\Framework\App\Action\Action
{
    protected $pageFactory;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory
    ) {
        parent::__construct($context);
        $this->pageFactory = $resultPageFactory;
    }

    /**
     * This action render random number for each request
     */
    public function execute()
    {
        $page = $this->pageFactory->create();
        //We are using HTTP headers to control various page caches (varnish, fastly, built-in php cache)
        $page->setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0', true);

        return $page;
    }
}
```

### Define caching policy
You can use the Admin to define caching policies or you can define them programmatically in a controller:

``` php?start_inline=1
class DynamicController extends \Magento\Framework\App\Action\Action
{
    protected $pageFactory;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory
    ) {
        parent::__construct($context);
        $this->pageFactory = $resultPageFactory;
    }

    /**
     * This action render random number for each request
     */
    public function execute()
    {
        $page = $this->pageFactory->create();
        //We are using HTTP headers to control various page caches (varnish, fastly, built-in php cache)
        $page->setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0', true);

        return $page;
    }
}
```

<div class="bs-callout bs-callout-info" id="info" markdown="1">
-   You should take caching into account even if you need to refresh data every second. Lots of visitors can get content from the cache within a one-second time period.

-   Only GET and HEAD methods are cacheable.
</div>

### Invalidate public content
In addition to the standard expiration model, Magento can invalidate the cache after backend changes. To do this, Magento creates a link between system entities and cache content using identity interfaces for blocks and models.

To create a link between a product page and a product model:

1. Identify the product in the model layer:

   ``` php?start_inline=1
use Magento\Framework\Object\IdentityInterface;
class Product implements IdentityInterface
{
        /**
          * Product cache tag
          */
        const CACHE_TAG = 'catalog_product';
        /**
         * Get identities
         *
         * @return array
         */
        public function getIdentities()
        {
             return array(self::CACHE_TAG . '_' . $this->getId());
        }
}
   ```

2. Identify the product in the view layer:

   ``` php?start_inline=1
class View extends AbstractProduct implements \Magento\Framework\Object\IdentityInterface
{
        /**
         * Return identifiers for produced content
         *
         * @return array
         */
        public function getIdentities()
        {
            return $this->getProduct()->getIndetities();
        }
}
   ```

Now that there's a link between the model and view, Magento will remove product page content from the cache whenever there's a product change in the backend.

<div class="bs-callout bs-callout-warning" markdown="1">
Magento uses cache tags for link creation. The performance of cache storage has a direct dependency on the number of tags per cache record, so try to minimize the number of tags and use them only for entities that are used in production mode. In other words, don't use invalidation for actions related to store setup.
</div>

## Private content
Since private content is specific to individual users, it's reasonable to handle it on the client (i.e., web browser).

Use our [customer-data](https://github.com/magento/magento2/blob/develop/app/code/Magento/Customer/view/frontend/web/js/customer-data.js){:target="&#95;blank"} JS library to store private data in local storage, invalidate private data using customizable rules, and synchronize data with the backend.

This example shows a customer's name on a cacheable page.

### Create a section source {#config-cache-priv-how-source}
The section source class is responsible for retrieving data for the section. As a best practice, we recommend you put your code under the `Vendor/ModuleName/CustomerData` namespace. Your classes must implement the [`Magento\Customer\CustomerData\SectionSourceInterface`]({{ site.mage2000url }}app/code/Magento/Customer/CustomerData/SectionSourceInterface.php){:target=" &#95;blank"} interface.

The public method `getSectionData` must return an array with data for private block.

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/CustomerData/CompareProducts.php#L36-L45){:target=" &#95;blank"}

Add the following to your component's {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration (`di.xml`):

``` xml
<type name="Magento\Customer\CustomerData\SectionPoolInterface">
    <arguments>
        <argument name="sectionSourceMap" xsi:type="array">
            <item name="compare-products" xsi:type="string">Magento\Catalog\CustomerData\CompareProducts</item>
        </argument>
    </arguments>
</type>
```

### Create a block and template {#config-cache-priv-how-block}
To render private content, create a block and a template to display user-agnostic data; this data is replaced with user-specific data by the {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Do _not_ use the `$_isScopePrivate` property in your blocks. This property is obsolete and won't work properly.
</div>

Replace private data in blocks with placeholders (using [Knockout](http://knockoutjs.com/documentation/introduction.html){:target="&#95;blank"} syntax). The init scope on the root element is `data-bind="scope: 'compareProducts'"`, where you define the scope name (`compareProducts` in this example) in your {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}.

Initialize the component as follows:

``` html
<script type="text/x-magento-init">
    {"<css-selector>": {"Magento_Ui/js/core/app": <?php echo $block->getJsLayout();?>}}
</script>
```

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/templates/product/compare/sidebar.phtml#L46-L48){:target="&#95;blank"}

### Configure a UI component {#config-cache-priv-how-ui}
The UI component renders block data on the Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. To initialize the UI component, you must call the initialization method `_super()`.

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/web/js/view/compare-products.js){:target="&#95;blank"}

All properties are available in the template.

[Example of defining a UI component in a layout]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/layout/default.xml#L11-L22){:target="&#95;blank"}

### Invalidate private content
Specify actions that trigger cache invalidation for private content blocks in a `sections.xml` configuration file in the `Vendor/ModuleName/etc/frontend` directory. Magento invalidates the cache on a POST or PUT request.

The following example adds comments to [app/code/Magento/Catalog/etc/frontend/sections.xml]({{ site.mage2000url }}app/code/Magento/Catalog/etc/frontend/sections.xml){:target="&#95;blank"} to show you what the code is doing.

``` xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Customer:etc/sections.xsd">
    <!-- invalidates the "compare-products" section when a user
    adds a product to the comparison, resulting in a "catalog/product_compare/add" POST request -->
    <action name="catalog/product_compare/add">
        <section name="compare-products"/>
    </action>
    <!-- invalidates the section when a customer removes a product from the comparison -->
    <action name="catalog/product_compare/remove">
        <section name="compare-products"/>
    </action>
    <!-- invalidates the section when a customer clears all products from the comparison -->
    <action name="catalog/product_compare/clear">
        <section name="compare-products"/>
    </action>
</config>
```

<div class="bs-callout bs-callout-warning" markdown="1">
Use only HTTP POST or PUT methods to change state (e.g., adding to a shopping cart, adding to a wishlist, etc.) and don't expect to see caching on these methods. Using GET or HEAD methods might trigger caching and prevent updates to private content. For more information about caching, see [RFC-2616 section 13](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html) {:target="&#95;blank"}
</div>

Other examples:

-   [Checkout]({{ site.mage2000url }}app/code/Magento/Checkout/etc/frontend/sections.xml){:target="&#95;blank"}

-   [Customer]({{ site.mage2000url }}app/code/Magento/Customer/etc/frontend/sections.xml){:target="&#95;blank"}

## Cacheable page checklist
-   Pages use GET requests

-   Pages render only cacheable blocks

-   Pages render without sensitive private data; session and customer DTO objects are be empty.

-   Functionality specific to both current session (customer) and page should be written using JavaScript (e.g., related product listing should exclude items that are already in the shopping cart)

-   Model and block level should identify themselves for invalidation support

-   Declare a custom HTTP context variable if you plan to show different public content with the same URL

## Non-cacheable page checklist
-   Use POST requests to modify Magento state (e.g., adding to shopping cart, wishlist, etc.)

-   Blocks that can't be cached should be marked as non-cacheable in the layout

-   Controllers that don't use layouts should set `no-cache` HTTP headers

#### Next
[HTTP context]({{ page.baseurl }}config-guide/cache/cache-priv-context.html)
