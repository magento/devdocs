---
group: rest
subgroup: A_rest
title: Restricting access to anonymous web APIs
menu_title: Restricting access to anonymous web APIs
menu_node:
menu_order: 6
version: 2.0
---

Magento 2 allows some web APIs to be accessed by unauthenticated (anonymous) users. Many of these APIs allow a customer to have a robust shopping experience on the {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} without having to log in.

A subset of these APIs can return information about products, promotions, and storefronts that a merchant might consider proprietary. For example, {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} APIs can provide information about an item’s pricing and quantity, as well as items that are currently not for sale. The {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} module could reveal information about upcoming promotional landing pages and coupons. The Store module can reveal too much information about individual websites.

For this reason, by default, Magento 2 now prevents anonymous users from accessing the APIs that could reveal sensitive information.  When the feature is enabled, the user must have administrator privileges to execute the affected APIs.

The following table lists the APIs that are no longer available to an anonymous user by default:

| Product | Module | API | Action |
| --- | --- | --- | --- |
| Open Source | Catalog | /V1/products | GET |
| Open Source | Catalog | /V1/products/:sku | GET |
| Open Source | Catalog | /V1/products/attributes/:attributeCode | GET |
| Open Source | Catalog | /V1/products/types | GET |
| Open Source | Catalog | /V1/products/attribute-sets/sets/list | GET |
| Open Source | Catalog | /V1/products/attribute-sets/:attributeSetId | GET |
| Open Source | Catalog | /V1/products/attribute-sets/:attributeSetId/attributes | GET |
| Open Source | Catalog | /V1/products/attribute-sets/groups/list | GET |
| Open Source | Catalog | /V1/products/attributes/:attributeCode/options | GET |
| Open Source | Catalog | /V1/products/media/types/:attributeSetName | GET |
| Open Source | Catalog | /V1/products/:sku/media/:entryId | GET |
| Open Source | Catalog | /V1/products/:sku/media | GET |
| Open Source | Catalog | /V1/products/:sku/group-prices/:customerGroupId/tiers | GET |
| Open Source | Catalog | /V1/categories/:categoryId | GET |
| Open Source | Catalog | /V1/categories | GET |
| Open Source | Catalog | /V1/products/:sku/options | GET |
| Open Source | Catalog | /V1/products/:sku/options/:optionId | GET |
| Open Source | Catalog | /V1/products/links/types | GET |
| Open Source | Catalog | /V1/products/links/:type/attributes | GET |
| Open Source | Catalog | /V1/products/:sku/links/:type | GET |
| Open Source | Catalog | /V1/categories/:categoryId/products | GET |
| Open Source | CatalogInventory | /V1/stockStatuses/:productSku | GET |
| Open Source | Cms | /V1/cmsPage/:pageId | GET |
| Open Source | Cms | /V1/cmsBlock/:blockId | GET |
| Open Source | ConfigurableProduct | /V1/configurable-products/:sku/children | GET |
| Open Source | ConfigurableProduct | /V1/configurable-products/:sku/options/:id | GET |
| Open Source | ConfigurableProduct | /V1/configurable-products/:sku/options/all | GET |
| Open Source | Store | /V1/store/storeViews | GET |
| Open Source | Store | /V1/store/storeGroups | GET |
| Open Source | Store | /V1/store/websites | GET |
| Open Source | Store | /V1/store/storeConfigs | GET |

<div class="bs-callout bs-callout-warning">
    <p>Preventing anonymous access to these APIs could cause third-party integrations to fail. If a third-party integration calls any of these web APIs, it will receive an authentication error instead of the expected response. In this case, you might need to disable this feature.</p>
    <p>To disable this feature, log in to the Admin panel and navigate to <b>Stores > Configuration > Services > Magento Web API > Web API Security</b>. Then select <b>Yes</b> from the <b>Allow Anonymous Guest Access</b> menu.</p>
</div>


If the list of APIs that are inaccessible to anonymous users must be updated for a third-party extension, an integrator can add to their extension's `di.xml` file to update or replace the functionality defined in the WebapiSecurity module.

The following APIs remain accessible to anonymous users. Most of these must remain accessible to support the {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %} and add-to-cart Ajax functionalities.

| Product | Module | API | Action |
| --- | --- | --- | --- |
| Open Source | Catalog | /V1/products-render-info | GET |
| Open Source | Checkout | /V1/guest-carts/:cartId/payment-information | POST |
| Open Source | Checkout | /V1/guest-carts/:cartId/payment-information | GET |
| Open Source | Checkout | /V1/guest-carts/:cartId/set-payment-information | POST |
| Open Source | Checkout | /V1/guest-carts/:cartId/shipping-information | POST |
| Open Source | Checkout | /V1/guest-carts/:cartId/totals-information | POST |
| Open Source | Customer | /V1/customers | POST |
| Open Source | Customer | /V1/customers/:customerId/password/resetLinkToken/:resetPasswordLinkToken | GET |
| Open Source | Customer | /V1/customers/password | PUT |
| Open Source | Customer | /V1/customers/isEmailAvailable | POST |
| Open Source | Directory | /V1/directory/countries | GET |
| Open Source | Directory | /V1/directory/countries/:countryId | GET |
| Open Source | Directory | /V1/directory/currency | GET |
| Open Source | GiftMessage | /V1/guest-carts/:cartId/gift-message | GET |
| Open Source | GiftMessage | /V1/guest-carts/:cartId/gift-message | POST |
| Open Source | GiftMessage | /V1/guest-carts/:cartId/gift-message/:itemId | GET |
| Open Source | GiftMessage | /V1/guest-carts/:cartId/gift-message/:itemId | POST |
| Open Source | Integration | /V1/integration/admin/token | POST |
| Open Source | Integration | /V1/integration/customer/token | POST |
| Open Source | Quote | /V1/guest-carts/:cartId/billing-address | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/billing-address | POST |
| Open Source | Quote | /V1/guest-carts/:cartId/items | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/items | POST |
| Open Source | Quote | /V1/guest-carts/:cartId/items/:itemId | PUT |
| Open Source | Quote | /V1/guest-carts/:cartId/items/:itemId | DELETE |
| Open Source | Quote | /V1/guest-carts | POST |
| Open Source | Quote | /V1/guest-carts/:cartId/order | PUT |
| Open Source | Quote | /V1/guest-carts/:cartId | PUT |
| Open Source | Quote | /V1/guest-carts/:cartId | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/collect-totals | PUT |
| Open Source | Quote | /V1/guest-carts/:cartId/totals | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/coupons | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/coupons/:couponCode | PUT |
| Open Source | Quote | /V1/guest-carts/:cartId/coupons | DELETE |
| Open Source | Quote | /V1/guest-carts/:cartId/selected-payment-method | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/selected-payment-method | PUT |
| Open Source | Quote | /V1/guest-carts/:cartId/payment-methods | GET |
| Open Source | Quote | /V1/guest-carts/:cartId/estimate-shipping-methods | POST |
| Open Source | Quote | /V1/guest-carts/:cartId/shipping-methods | GET |
| Open Source | Search | /V1/search | GET |
| Commerce | GiftCardAccount | /V1/carts/guest-carts/:cartId/giftCards/:giftCardCode | DELETE |
| Commerce | GiftCardAccount | /V1/carts/guest-carts/:cartId/giftCards | POST |
| Commerce | GiftCardAccount | /V1/carts/guest-carts/:cartId/checkGiftCard/:giftCardCode | GET |
| Commerce | GiftRegistry | /V1/guest-giftregistry/:cartId/estimate-shipping-methods | POST |
| Commerce | WorldPay | /V1/worldpay-guest-carts/{cartId}/payment-information | POST
