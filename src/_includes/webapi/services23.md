## {{site.data.var.ee}} Web APIs Services per Module {#eelist}

The Web APIs for {{site.data.var.ee}} (formerly Magento Enterprise Edition) are available on {{site.data.var.ee}} installations only. {{site.data.var.ee}} installations automatically have access to all {{site.data.var.ce}} (formerly Magento Community Edition) web APIs.

### CustomerBalance
    customerBalanceBalanceManagementV1

### GiftCardAccount
    giftCardAccountGiftCardAccountManagementV1
    giftCardAccountGuestGiftCardAccountManagementV1
    giftRegistryGuestCartShippingMethodManagementV1
    giftRegistryShippingMethodManagementV1

### GiftWrapping
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

## {{site.data.var.ce}} Web APIs Services per Module {#celist}

  The {{site.data.var.ce}} Web APIs are available on all installations.

### Analytics
    analyticsLinkProviderV1

### AsynchronousOperations
    asynchronousOperationsOperationRepositoryV1

### Backend
    backendModuleServiceV1

### Bundle
    bundleProductLinkManagementV1
    bundleProductOptionManagementV1
    bundleProductOptionRepositoryV1
    bundleProductOptionTypeListV1

### Catalog
    catalogAttributeSetManagementV1
    catalogAttributeSetRepositoryV1
    catalogBasePriceStorageV1 *
    catalogCategoryAttributeOptionManagementV1
    catalogCategoryAttributeRepositoryV1
    catalogCategoryLinkManagementV1
    catalogCategoryLinkRepositoryV1
    catalogCategoryListV1 *
    catalogCategoryManagementV1
    catalogCategoryRepositoryV1
    catalogCostStorageV1 *
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
    catalogProductRenderListV1 *
    catalogProductRepositoryV1
    catalogProductTierPriceManagementV1
    catalogProductTypeListV1
    catalogProductWebsiteLinkRepositoryV1
    catalogSpecialPriceStorageV1 *
    catalogTierPriceStorageV1 *

### CatalogInventory
    catalogInventoryStockRegistryV1

### Checkout
    checkoutGuestPaymentInformationManagementV1
    checkoutGuestShippingInformationManagementV1
    checkoutGuestTotalsInformationManagementV1
    checkoutPaymentInformationManagementV1
    checkoutShippingInformationManagementV1
    checkoutTotalsInformationManagementV1

### CheckoutAgreements
    checkoutAgreementsCheckoutAgreementsRepositoryV1

### Cms
    cmsBlockRepositoryV1
    cmsPageRepositoryV1

### ConfigurableProduct
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
    customerCustomerGroupConfigV1

### Directory
    directoryCountryInformationAcquirerV1
    directoryCurrencyInformationAcquirerV1

### Downloadable
    downloadableLinkRepositoryV1
    downloadableSampleRepositoryV1

### Eav
    eavAttributeSetManagementV1
    eavAttributeSetRepositoryV1

### GiftMessage
    giftMessageCartRepositoryV1
    giftMessageGuestCartRepositoryV1
    giftMessageGuestItemRepositoryV1
    giftMessageItemRepositoryV1

### Integration
    integrationAdminTokenServiceV1
    integrationCustomerTokenServiceV1

### InventoryApi
    inventoryApiSourceRepositoryV1
    inventoryApiGetSourcesAssignedToStockOrderedByPriorityV1
    inventoryApiStockRepositoryV1
    inventoryApiGetStockSourceLinksV1
    inventoryApiStockSourceLinksSaveV1
    inventoryApiStockSourceLinksDeleteV1
    inventoryApiSourceItemRepositoryV1
    inventoryApiSourceItemsSaveV1
    inventoryApiSourceItemsDeleteV1

### InventoryCatalogApi
    inventoryCatalogApiBulkSourceAssignV1
    inventoryCatalogApiBulkSourceUnassignV1
    inventoryCatalogApiBulkInventoryTransferV1

### InventoryDistanceBasedSourceSelectionApi
    inventoryDistanceBasedSourceSelectionApiGetDistanceProviderCodeV1
    inventoryDistanceBasedSourceSelectionApiGetDistanceV1
    inventoryDistanceBasedSourceSelectionApiGetLatLngFromAddressV1

### InventoryLowQuantityNotificationApi
    inventoryLowQuantityNotificationApiGetSourceItemConfigurationV1
    inventoryLowQuantityNotificationApiSourceItemConfigurationsSaveV1
    inventoryLowQuantityNotificationApiDeleteSourceItemsConfigurationV1

### InventorySalesApi
    inventorySalesApiGetProductSalabilityV1
    inventorySalesApiIsProductSalableV1
    inventorySalesApiIsProductSalableForRequestedQtyV1
    inventorySalesApiStockResolverV1

### InventorySourceSelectionApi
    inventorySourceSelectionApiGetSourceSelectionAlgorithmListV1
    inventorySourceSelectionApiSourceSelectionServiceV1

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
    salesRefundInvoiceV1
    salesRefundOrderV1
    salesShipmentCommentRepositoryV1
    salesShipmentManagementV1
    salesShipmentRepositoryV1
    salesShipmentTrackRepositoryV1
    salesShipOrderV1
    salesTransactionRepositoryV1

### SalesRule
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

## Magento B2B

See [Integrate with B2B using REST]({{page.baseurl}}/b2b/integrations.html) for a list of services provided with B2B.
