---
layout: default
group: rest
subgroup: A_rest
title: REST Schema Endpoints
menu_title: Endpoints
menu_order: 3
github_link: rest/schema-endpoints.md

---

## REST Schema Endpoint Format
To specify one or more services:

`http://<magento_host>/rest/<store_code>?schema=1&services=<serviceName1,serviceName2,..>`

To specify all services:

`http://<magento_host>/rest/<store_code>?schema=1&services=all`

## List of Service Names per Module

### Backend
backendModuleServiceV1: `http://<magento_host>/rest/default?schema=1&services=backendModuleServiceV1`

### Bundle
bundleProductLinkManagementV1: `http://<magento_host>/rest/default?schema=1&services=bundleProductLinkManagementV1`

bundleProductOptionRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=bundleProductOptionRepositoryV1`

bundleProductOptionTypeListV1: `http://<magento_host>/rest/default?schema=1&services=bundleProductOptionTypeListV1`

bundleProductOptionManagementV1: `http://<magento_host>/rest/default?schema=1&services=bundleProductOptionManagementV1`

### Catalog
catalogProductRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductRepositoryV1`

catalogProductAttributeTypesListV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductAttributeTypesListV1`

catalogProductAttributeRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductAttributeRepositoryV1`

catalogCategoryAttributeRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogCategoryAttributeRepositoryV1`

catalogCategoryAttributeOptionManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogCategoryAttributeOptionManagementV1`

catalogProductTypeListV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductTypeListV1`

catalogAttributeSetRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogAttributeSetRepositoryV1`

catalogAttributeSetManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogAttributeSetManagementV1`

catalogProductAttributeManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductAttributeManagementV1`

catalogProductAttributeGroupRepositoryV1: `http://mahgento.rest/soap/default?schema=1&services=catalogProductAttributeGroupRepositoryV1`

catalogProductAttributeOptionManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductAttributeOptionManagementV1`

catalogProductMediaAttributeManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductMediaAttributeManagementV1`

catalogProductAttributeMediaGalleryManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeMediaGalleryManagementV1`

catalogProductGroupPriceManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductGroupPriceManagementV1`

catalogProductTierPriceManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductTierPriceManagementV1`

catalogCategoryRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogCategoryRepositoryV1`

catalogCategoryManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogCategoryManagementV1`

catalogProductCustomOptionTypeListV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductCustomOptionTypeListV1`

catalogProductCustomOptionRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductCustomOptionRepositoryV1`

catalogProductLinkTypeListV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductLinkTypeListV1`

catalogProductLinkManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductLinkManagementV1`

catalogProductLinkRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogProductLinkRepositoryV1`

catalogCategoryLinkManagementV1: `http://<magento_host>/rest/default?schema=1&services=catalogCategoryLinkManagementV1`

catalogCategoryLinkRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=catalogCategoryLinkRepositoryV1`

catalogInventoryStockRegistryV1: `http://<magento_host>/rest/default?schema=1&services=catalogInventoryStockRegistryV1`

### Checkout
checkoutAgreementsCheckoutAgreementsRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=checkoutAgreementsCheckoutAgreementsRepositoryV1`

### Configurable
configurableProductLinkManagementV1: `http://<magento_host>/rest/default?schema=1&services=configurableProductLinkManagementV1`

configurableProductConfigurableProductManagementV1: `http://<magento_host>/rest/default?schema=1&services=configurableProductConfigurableProductManagementV1`

configurableProductOptionRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=configurableProductOptionRepositoryV1`

### Customer
customerGroupRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=customerGroupRepositoryV1`

customerGroupManagementV1: `http://<magento_host>/rest/default?schema=1&services=customerGroupManagementV1`

customerCustomerMetadataV1: `http://<magento_host>/rest/default?schema=1&services=customerCustomerMetadataV1`

customerAddressMetadataV1: `http://<magento_host>/rest/default?schema=1&services=customerAddressMetadataV1`

customerCustomerRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=customerCustomerRepositoryV1`

customerAccountManagementV1: `http://<magento_host>/rest/default?schema=1&services=customerAccountManagementV1`

customerAddressRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=customerAddressRepositoryV1`

### Downloadable
downloadableLinkRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=downloadableLinkRepositoryV1`

downloadableSampleRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=downloadableSampleRepositoryV1`

### Eav
eavAttributeSetRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=eavAttributeSetRepositoryV1`

eavAttributeSetManagementV1: `http://<magento_host>/rest/default?schema=1&services=eavAttributeSetManagementV1`

### Gift Message
giftMessageCartRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=giftMessageCartRepositoryV1`

giftMessageItemRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=giftMessageItemRepositoryV1`

### Integration
integrationAdminTokenServiceV1: `http://<magento_host>/rest/default?schema=1&services=integrationAdminTokenServiceV1`

integrationCustomerTokenServiceV1: `http://<magento_host>/rest/default?schema=1&services=integrationCustomerTokenServiceV1`

### Quote
quoteCartRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=quoteCartRepositoryV1`

quoteCartManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteCartManagementV1`

quoteGuestCartRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestCartRepositoryV1`

quoteGuestCartManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestCartManagementV1`

quoteShippingMethodManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteShippingMethodManagementV1`

quoteGuestShippingMethodManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestShippingMethodManagementV1`

quoteCartItemRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=quoteCartItemRepositoryV1`

quoteGuestCartItemRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestCartItemRepositoryV1`

quotePaymentMethodManagementV1: `http://<magento_host>/rest/default?schema=1&services=quotePaymentMethodManagementV1`

quoteGuestPaymentMethodManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestPaymentMethodManagementV1`

quoteBillingAddressManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteBillingAddressManagementV1`

quoteGuestBillingAddressManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestBillingAddressManagementV1`

quoteGuestAddressDetailsManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestAddressDetailsManagementV1`

quoteCouponManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteCouponManagementV1`

quoteGuestCouponManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestCouponManagementV1`

quoteShippingAddressManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteShippingAddressManagementV1`

quoteGuestShippingAddressManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestShippingAddressManagementV1`

quoteAddressDetailsManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteAddressDetailsManagementV1`

quoteCartTotalRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=quoteCartTotalRepositoryV1`

quoteGuestCartTotalManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestCartTotalManagementV1`

quoteGuestCartTotalRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=quoteGuestCartTotalRepositoryV1`

quoteCartTotalManagementV1: `http://<magento_host>/rest/default?schema=1&services=quoteCartTotalManagementV1`

### Sales
salesOrderRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesOrderRepositoryV1`

salesOrderManagementV1: `http://<magento_host>/rest/default?schema=1&services=salesOrderManagementV1`

salesOrderAddressRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesOrderAddressRepositoryV1`

salesInvoiceRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesInvoiceRepositoryV1`

salesInvoiceManagementV1: `http://<magento_host>/rest/default?schema=1&services=salesInvoiceManagementV1`

salesInvoiceCommentRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesInvoiceCommentRepositoryV1`

salesCreditmemoManagementV1: `http://<magento_host>/rest/default?schema=1&services=salesCreditmemoManagementV1`

salesCreditmemoRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesCreditmemoRepositoryV1`

salesCreditmemoCommentRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesCreditmemoCommentRepositoryV1`

salesShipmentRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesShipmentRepositoryV1`

salesShipmentManagementV1: `http://<magento_host>/rest/default?schema=1&services=salesShipmentManagementV1`

salesShipmentCommentRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesShipmentCommentRepositoryV1`

salesShipmentTrackRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesShipmentTrackRepositoryV1`

salesTransactionRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=salesTransactionRepositoryV1`

### Tax
taxTaxRateRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=taxTaxRateRepositoryV1`

taxTaxRuleRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=taxTaxRuleRepositoryV1`

taxTaxClassRepositoryV1: `http://<magento_host>/rest/default?schema=1&services=taxTaxClassRepositoryV1`