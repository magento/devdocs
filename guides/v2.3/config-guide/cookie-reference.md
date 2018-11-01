---
group: configuration-guide
title: Cookie Reference
---

A list of Magento 2 default cookies and descriptions. 

## Cookie Reference

|Cookie Name|Description|
|--- |--- |
|PHPSESSID|PHP's unique session identification string|
|X-Magento-Vary|X-Magento-Vary cookie is used to highlight that version of a page requested by a user has been changed. It allows having different versions of the same page stored in cache e.g. Varnish.|
|guest-view|Stores the Order ID that guest shoppers use to retrieve their order status.|
|form_key|A security measure that appends a random string to all form submissions to protect the data from Cross-Site Request Forgery (CSRF).|
|mage-cache-sessid|Facilitates caching of content on the browser to make pages load faster.|
|mage-cache-storage|The value of this cookie triggers the cleanup of local cache storage. When the cookie is removed by the backend application, the Admin cleans up local storage, and sets the cookie value to “true.”|
|mage-cache-storage-section-invalidation|Forces local storage of specific content sections that should be invalidated.|
|mage-messages|Tracks error messages and other notifications that are shown to the user, such as the cookie consent message, and various error messages, The message is deleted from the cookie after it is shown to the shopper.|
|mage-translation-file-version|Facilitates translation of content to other languages.|
|mage-translation-storage|Stores translated content when requested by the shopper.|
|persistent_shopping_cart|Stores the key (ID) of persistent cart to make it possible to restore the cart for an anonymous shopper.|
|private_content_version|Appends a random, unique number and time to pages with customer content to prevent them from being cached on the server.|
|product_data_storage|Stores configuration for product data related to Recently Viewed / Compared Products.|
|recently_compared_product|Stores product IDs of recently compared products.|
|recently_compared_product_previous|Stores product IDs of previously compared products for easy navigation.|
|recently_viewed_product|Stores product IDs of recently viewed products for easy navigation.|
|recently_viewed_product_previous|Stores product IDs of recently previously viewed products for easy navigation.|
|section_data_ids|Stores customer-specific information related to shopper-initiated actions such as display wish list, checkout information, etc.|
|store|Tracks the specific store view / locale selected by the shopper.|
|stf|Records the time messages are sent by the SendFriend (Email a Friend) module.|
|amz_auth_err|(Used by Amazon Pay) Value “1’ indicates an authorization error.|
|amz_auth_logout|(Used by Amazon Pay) Value “1” indicates that the user should be logged out.|
