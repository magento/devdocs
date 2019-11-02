## Cacheable page checklist

-  Pages use GET requests

-  Pages render only cacheable blocks

-  Pages render without sensitive private data; session and customer DTO objects are empty

-  Functionality specific to both current session (customer) and page should be written using JavaScript (e.g., related product listing should exclude items that are already in the shopping cart)

-  Model and block level should identify themselves for invalidation support

-  Declare a custom [context variable]({{ page.baseurl }}/extension-dev-guide/cache/page-caching/public-content.html#configure-page-variations) if you plan to show different public content with the same URL

## Non-cacheable page checklist

-  Use POST requests to modify Magento state (e.g., adding to shopping cart, wishlist, etc.)

-  Blocks that can't be cached should be marked as non-cacheable in the layout. However, be aware that adding a non-cacheable block to a page prevents the full page cache from caching that page.

-  Controllers that don't use layouts should set `no-cache` HTTP headers
