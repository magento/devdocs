---
group: rest
subgroup: A_rest
title: List of service names per module
menu_title: List of service names per module
menu_order: 4
version: 2.0
functional_areas:
  - Integration
---

## REST Schema Endpoint Format

To specify one or more services:

`http://<magento_host>/rest/<store_code>/schema&services=<serviceName1,serviceName2,..>`

To specify all services:

`http://<magento_host>/rest/<store_code>/schema`

<div class="bs-callout bs-callout-info" id="info">
  <p>The value of `store_code` can be one of the following:</p>
  <ul>
  <li><code>default</code></li>
  <li>The assigned store code</li>
  <li><code>all</code>. This value only applies to the {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} and Product modules. If this value is specified, the {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} call affects all the merchant's stores. <code>GET</code>operations cannot be performed when you specify <code>all</code>.</li>
  </ul>
</div>

## {{site.data.var.ee}} REST API Services per module {#eelist}

The REST APIs for {{site.data.var.ee}} are available on Commerce installations only. Commerce installations automatically have access to all {{site.data.var.ce}} REST APIs.

### Customer balance
    customerBalanceBalanceManagementV1

### Gift cards
    giftCardAccountGiftCardAccountManagementV1
    giftCardAccountGuestGiftCardAccountManagementV1
    giftRegistryGuestCartShippingMethodManagementV1
    giftRegistryShippingMethodManagementV1

### Gift wrapping
    giftWrappingWrappingRepositoryV1

### Reward
    rewardRewardManagementV1

### RMA
    rmaCommentManagementV1
    rmaRmaAttributesManagementV1
    rmaRmaManagementV1
    rmaRmaRepositoryV1
    rmaTrackManagementV1

### Worldpay
    worldpayGuestPaymentInformationManagementProxyV1


## {{site.data.var.ce}} REST APIs Services per Module {#celist}

  The {{site.data.var.ce}} REST APIs are available on all installations.

### Backend
    backendModuleServiceV1

### Bundle product
    bundleProductLinkManagementV1
    bundleProductOptionManagementV1
    bundleProductOptionRepositoryV1
    bundleProductOptionTypeListV1

### Catalog
    catalogAttributeSetManagementV1
    catalogAttributeSetRepositoryV1
    catalogCategoryAttributeOptionManagementV1
    catalogCategoryAttributeRepositoryV1
    catalogCategoryLinkManagementV1
    catalogCategoryLinkRepositoryV1
    catalogCategoryManagementV1
    catalogCategoryRepositoryV1
    catalogProductAttributeGroupRepositoryV1
    catalogProductAttributeManagementV1
    catalogProductAttributeMediaGalleryManagementV1
    catalogProductAttributeOptionManagementV1
    catalogProductAttributeRepositoryV1
    catalogProductAttributeTypesListV1
    catalogProductCustomOptionRepositoryV1
    catalogProductCustomOptionTypeListV1
    catalogProductLinkManagementV1
    catalogProductLinkRepositoryV1
    catalogProductLinkTypeListV1
    catalogProductMediaAttributeManagementV1
    catalogProductRepositoryV1
    catalogProductTierPriceManagementV1
    catalogProductTypeListV1
    catalogProductWebsiteLinkRepositoryV1

### Catalog inventory
    catalogInventoryStockRegistryV1

### Checkout
    checkoutGuestPaymentInformationManagementV1
    checkoutGuestShippingInformationManagementV1
    checkoutGuestTotalsInformationManagementV1
    checkoutPaymentInformationManagementV1
    checkoutShippingInformationManagementV1
    checkoutTotalsInformationManagementV1

### Checkout agreements
    checkoutAgreementsCheckoutAgreementsRepositoryV1

### CMS
    cmsBlockRepositoryV1
    cmsPageRepositoryV1

### Configurable product
    configurableProductConfigurableProductManagementV1
    configurableProductLinkManagementV1
    configurableProductOptionRepositoryV1

### Customer
    customerAccountManagementV1
    customerAddressMetadataV1
    customerAddressRepositoryV1
    customerCustomerMetadataV1
    customerCustomerRepositoryV1
    customerGroupManagementV1
    customerGroupRepositoryV1

### Directory
    directoryCountryInformationAcquirerV1
    directoryCurrencyInformationAcquirerV1

### Downloadable
    downloadableLinkRepositoryV1
    downloadableSampleRepositoryV1

### EAV
    eavAttributeSetManagementV1
    eavAttributeSetRepositoryV1

### Gift message
    giftMessageCartRepositoryV1
    giftMessageGuestCartRepositoryV1
    giftMessageGuestItemRepositoryV1
    giftMessageItemRepositoryV1

### Integration
    integrationAdminTokenServiceV1
    integrationCustomerTokenServiceV1

### Quote
    quoteBillingAddressManagementV1
    quoteCartItemRepositoryV1
    quoteCartManagementV1
    quoteCartRepositoryV1
    quoteCartTotalManagementV1
    quoteCartTotalRepositoryV1
    quoteCouponManagementV1
    quoteGuestBillingAddressManagementV1
    quoteGuestCartItemRepositoryV1
    quoteGuestCartManagementV1
    quoteGuestCartRepositoryV1
    quoteGuestCartTotalManagementV1
    quoteGuestCartTotalRepositoryV1
    quoteGuestCouponManagementV1
    quoteGuestPaymentMethodManagementV1
    quoteGuestShipmentEstimationV1
    quoteGuestShippingMethodManagementV1
    quotePaymentMethodManagementV1
    quoteShipmentEstimationV1
    quoteShippingMethodManagementV1

### Sales
    salesCreditmemoCommentRepositoryV1
    salesCreditmemoManagementV1
    salesCreditmemoRepositoryV1
    salesInvoiceCommentRepositoryV1
    salesInvoiceManagementV1
    salesInvoiceOrderV1
    salesInvoiceRepositoryV1
    salesOrderAddressRepositoryV1
    salesOrderItemRepositoryV1
    salesOrderManagementV1
    salesOrderRepositoryV1
    salesShipmentCommentRepositoryV1
    salesShipmentManagementV1
    salesShipmentRepositoryV1
    salesShipmentTrackRepositoryV1
    salesShipOrderV1
    salesTransactionRepositoryV1

### Sales rule
    salesRuleCouponManagementV1
    salesRuleCouponRepositoryV1
    salesRuleRuleRepositoryV1

### Search
    searchV1

### Store
    storeGroupRepositoryV1
    storeStoreConfigManagerV1
    storeStoreRepositoryV1
    storeWebsiteRepositoryV1

### Tax
    taxTaxClassRepositoryV1
    taxTaxRateRepositoryV1
    taxTaxRuleRepositoryV1
