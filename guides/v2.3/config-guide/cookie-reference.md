---
group: configuration-guide
title: Cookie Reference
---

A list of Magento 2 default cookies and descriptions. 

## Cookie Reference

<table>
  <tr>
    <th>Cookie Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>PHPSESSID</code></td>
    <td>PHP's unique session identification string</td>
  </tr>
  <tr>
    <td><code>X-Magento-Vary</code></td>
    <td>X-Magento-Vary cookie is used to highlight that version of a page requested by a user has been changed. It allows having different versions of the same page stored in cache e.g. Varnish.</td>
  </tr>
  <tr>
    <td><code>guest-view</code></td>
    <td>Stores the Order ID that guest shoppers use to retrieve their order status.</td>
  </tr>
  <tr>
    <td><code>form_key</code></td>
    <td>A security measure that appends a random string to all form submissions to protect the data from Cross-Site Request Forgery (CSRF).</td>
  </tr>
  <tr>
    <td><code>mage-cache-sessid</code></td>
    <td>Facilitates caching of content on the browser to make pages load faster.</td>
  </tr>
  <tr>
    <td><code>mage-cache-storage</code></td>
    <td>The value of this cookie triggers the cleanup of local cache storage. When the cookie is removed by the backend application, the Admin cleans up local storage, and sets the cookie value to “true.”</td>
  </tr>
  <tr>
    <td><code>mage-cache-storage-section-invalidation</code></td>
    <td>Forces local storage of specific content sections that should be invalidated.</td>
  </tr>
  <tr>
    <td><code>mage-messages</code></td>
    <td>Tracks error messages and other notifications that are shown to the user, such as the cookie consent message, and various error messages, The message is deleted from the cookie after it is shown to the shopper.</td>
  </tr>
  <tr>
    <td><code>mage-translation-file-version</code></td>
    <td>Facilitates translation of content to other languages.</td>
  </tr>
  <tr>
    <td><code>mage-translation-storage</code></td>
    <td>Stores translated content when requested by the shopper.</td>
  </tr>
  <tr>
    <td><code>persistent_shopping_cart</code></td>
    <td>Stores the key (ID) of persistent cart to make it possible to restore the cart for an anonymous shopper.</td>
  </tr>
  <tr>
    <td><code>private_content_version</code></td>
    <td>Appends a random, unique number and time to pages with customer content to prevent them from being cached on the server.</td>
  </tr>
  <tr>
    <td><code>product_data_storage</code></td>
    <td>Stores configuration for product data related to Recently Viewed / Compared Products.</td>
  </tr>
  <tr>
    <td><code>recently_compared_product</code></td>
    <td>Stores product IDs of recently compared products.</td>
  </tr>
  <tr>
    <td><code>recently_compared_product_previous</code></td>
    <td>Stores product IDs of previously compared products for easy navigation.</td>
  </tr>
  <tr>
    <td><code>recently_viewed_product</code></td>
    <td>Stores product IDs of recently viewed products for easy navigation.</td>
  </tr>
  <tr>
    <td><code>recently_viewed_product_previous</code></td>
    <td>Stores product IDs of recently previously viewed products for easy navigation.</td>
  </tr>
  <tr>
    <td><code>section_data_ids</code></td>
    <td>Stores customer-specific information related to shopper-initiated actions such as display wish list, checkout information, etc.</td>
  </tr>
  <tr>
    <td><code>store</code></td>
    <td>Tracks the specific store view / locale selected by the shopper.</td>
  </tr>
  <tr>
    <td><code>stf</code></td>
    <td>Records the time messages are sent by the SendFriend (Email a Friend) module.</td>
  </tr>
  <tr>
    <td><code>amz_auth_err</code></td>
    <td>(Used by Amazon Pay) Value “1’ indicates an authorization error.</td>
  </tr>
  <tr>
    <td><code>amz_auth_logout</code></td>
    <td>(Used by Amazon Pay) Value “1” indicates that the user should be logged out.</td>
  </tr>
</table>
