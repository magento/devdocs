---
layout: default
group: rest
subgroup: A_rest
title: List of service names per module
menu_title: List of service names per module
menu_order: 4
version: 2.0
github_link: rest/rest_endpoints.md

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
  <li><code>all</code>. This value only applies to the CMS and Product modules. If this value is specified, the API call affects all the merchant's stores. <code>GET</code>operations cannot be performed when you specify <code>all</code>.</li>
  </ul>
</div>

## List of Service Names per Module

* TOC
{:toc}

### Backend
backendModuleServiceV1: `http://<magento_host>/rest/default/schema&services=backendModuleServiceV1`

### Bundle
bundleProductLinkManagementV1: `http://<magento_host>/rest/default/schema&services=bundleProductLinkManagementV1`

bundleProductOptionRepositoryV1: `http://<magento_host>/rest/default/schema&services=bundleProductOptionRepositoryV1`

bundleProductOptionTypeListV1: `http://<magento_host>/rest/default/schema&services=bundleProductOptionTypeListV1`

bundleProductOptionManagementV1: `http://<magento_host>/rest/default/schema&services=bundleProductOptionManagementV1`

### Catalog
catalogProductRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogProductRepositoryV1`

catalogProductAttributeTypesListV1: `http://<magento_host>/rest/default/schema&services=catalogProductAttributeTypesListV1`

catalogProductAttributeRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogProductAttributeRepositoryV1`

catalogCategoryAttributeRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogCategoryAttributeRepositoryV1`

catalogCategoryAttributeOptionManagementV1: `http://<magento_host>/rest/default/schema&services=catalogCategoryAttributeOptionManagementV1`

catalogProductTypeListV1: `http://<magento_host>/rest/default/schema&services=catalogProductTypeListV1`

catalogAttributeSetRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogAttributeSetRepositoryV1`

catalogAttributeSetManagementV1: `http://<magento_host>/rest/default/schema&services=catalogAttributeSetManagementV1`

catalogProductAttributeManagementV1: `http://<magento_host>/rest/default/schema&services=catalogProductAttributeManagementV1`

catalogProductAttributeGroupRepositoryV1: `http://mahgento.rest/soap/default/schema&services=catalogProductAttributeGroupRepositoryV1`

catalogProductAttributeOptionManagementV1: `http://<magento_host>/rest/default/schema&services=catalogProductAttributeOptionManagementV1`

catalogProductMediaAttributeManagementV1: `http://<magento_host>/rest/default/schema&services=catalogProductMediaAttributeManagementV1`

catalogProductAttributeMediaGalleryManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeMediaGalleryManagementV1`

catalogProductGroupPriceManagementV1: `http://<magento_host>/rest/default/schema&services=catalogProductGroupPriceManagementV1`

catalogProductTierPriceManagementV1: `http://<magento_host>/rest/default/schema&services=catalogProductTierPriceManagementV1`

catalogCategoryRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogCategoryRepositoryV1`

catalogCategoryManagementV1: `http://<magento_host>/rest/default/schema&services=catalogCategoryManagementV1`

catalogProductCustomOptionTypeListV1: `http://<magento_host>/rest/default/schema&services=catalogProductCustomOptionTypeListV1`

catalogProductCustomOptionRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogProductCustomOptionRepositoryV1`

catalogProductLinkTypeListV1: `http://<magento_host>/rest/default/schema&services=catalogProductLinkTypeListV1`

catalogProductLinkManagementV1: `http://<magento_host>/rest/default/schema&services=catalogProductLinkManagementV1`

catalogProductLinkRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogProductLinkRepositoryV1`

catalogCategoryLinkManagementV1: `http://<magento_host>/rest/default/schema&services=catalogCategoryLinkManagementV1`

catalogCategoryLinkRepositoryV1: `http://<magento_host>/rest/default/schema&services=catalogCategoryLinkRepositoryV1`

catalogInventoryStockRegistryV1: `http://<magento_host>/rest/default/schema&services=catalogInventoryStockRegistryV1`

### Checkout
checkoutAgreementsCheckoutAgreementsRepositoryV1: `http://<magento_host>/rest/default/schema&services=checkoutAgreementsCheckoutAgreementsRepositoryV1`

### Configurable
configurableProductLinkManagementV1: `http://<magento_host>/rest/default/schema&services=configurableProductLinkManagementV1`

configurableProductConfigurableProductManagementV1: `http://<magento_host>/rest/default/schema&services=configurableProductConfigurableProductManagementV1`

configurableProductOptionRepositoryV1: `http://<magento_host>/rest/default/schema&services=configurableProductOptionRepositoryV1`

### Customer
customerGroupRepositoryV1: `http://<magento_host>/rest/default/schema&services=customerGroupRepositoryV1`

customerGroupManagementV1: `http://<magento_host>/rest/default/schema&services=customerGroupManagementV1`

customerCustomerMetadataV1: `http://<magento_host>/rest/default/schema&services=customerCustomerMetadataV1`

customerAddressMetadataV1: `http://<magento_host>/rest/default/schema&services=customerAddressMetadataV1`

customerCustomerRepositoryV1: `http://<magento_host>/rest/default/schema&services=customerCustomerRepositoryV1`

customerAccountManagementV1: `http://<magento_host>/rest/default/schema&services=customerAccountManagementV1`

customerAddressRepositoryV1: `http://<magento_host>/rest/default/schema&services=customerAddressRepositoryV1`

### Downloadable
downloadableLinkRepositoryV1: `http://<magento_host>/rest/default/schema&services=downloadableLinkRepositoryV1`

downloadableSampleRepositoryV1: `http://<magento_host>/rest/default/schema&services=downloadableSampleRepositoryV1`

### Eav
eavAttributeSetRepositoryV1: `http://<magento_host>/rest/default/schema&services=eavAttributeSetRepositoryV1`

eavAttributeSetManagementV1: `http://<magento_host>/rest/default/schema&services=eavAttributeSetManagementV1`

### Gift Message
giftMessageCartRepositoryV1: `http://<magento_host>/rest/default/schema&services=giftMessageCartRepositoryV1`

giftMessageItemRepositoryV1: `http://<magento_host>/rest/default/schema&services=giftMessageItemRepositoryV1`

### Integration
integrationAdminTokenServiceV1: `http://<magento_host>/rest/default/schema&services=integrationAdminTokenServiceV1`

integrationCustomerTokenServiceV1: `http://<magento_host>/rest/default/schema&services=integrationCustomerTokenServiceV1`

### Quote
quoteCartRepositoryV1: `http://<magento_host>/rest/default/schema&services=quoteCartRepositoryV1`

quoteCartManagementV1: `http://<magento_host>/rest/default/schema&services=quoteCartManagementV1`

quoteGuestCartRepositoryV1: `http://<magento_host>/rest/default/schema&services=quoteGuestCartRepositoryV1`

quoteGuestCartManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestCartManagementV1`

quoteShippingMethodManagementV1: `http://<magento_host>/rest/default/schema&services=quoteShippingMethodManagementV1`

quoteGuestShippingMethodManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestShippingMethodManagementV1`

quoteCartItemRepositoryV1: `http://<magento_host>/rest/default/schema&services=quoteCartItemRepositoryV1`

quoteGuestCartItemRepositoryV1: `http://<magento_host>/rest/default/schema&services=quoteGuestCartItemRepositoryV1`

quotePaymentMethodManagementV1: `http://<magento_host>/rest/default/schema&services=quotePaymentMethodManagementV1`

quoteGuestPaymentMethodManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestPaymentMethodManagementV1`

quoteBillingAddressManagementV1: `http://<magento_host>/rest/default/schema&services=quoteBillingAddressManagementV1`

quoteGuestBillingAddressManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestBillingAddressManagementV1`

quoteGuestAddressDetailsManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestAddressDetailsManagementV1`

quoteCouponManagementV1: `http://<magento_host>/rest/default/schema&services=quoteCouponManagementV1`

quoteGuestCouponManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestCouponManagementV1`

quoteShippingAddressManagementV1: `http://<magento_host>/rest/default/schema&services=quoteShippingAddressManagementV1`

quoteGuestShippingAddressManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestShippingAddressManagementV1`

quoteAddressDetailsManagementV1: `http://<magento_host>/rest/default/schema&services=quoteAddressDetailsManagementV1`

quoteCartTotalRepositoryV1: `http://<magento_host>/rest/default/schema&services=quoteCartTotalRepositoryV1`

quoteGuestCartTotalManagementV1: `http://<magento_host>/rest/default/schema&services=quoteGuestCartTotalManagementV1`

quoteGuestCartTotalRepositoryV1: `http://<magento_host>/rest/default/schema&services=quoteGuestCartTotalRepositoryV1`

quoteCartTotalManagementV1: `http://<magento_host>/rest/default/schema&services=quoteCartTotalManagementV1`

### Sales
salesOrderRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesOrderRepositoryV1`

salesOrderManagementV1: `http://<magento_host>/rest/default/schema&services=salesOrderManagementV1`

salesOrderAddressRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesOrderAddressRepositoryV1`

salesInvoiceRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesInvoiceRepositoryV1`

salesInvoiceManagementV1: `http://<magento_host>/rest/default/schema&services=salesInvoiceManagementV1`

salesInvoiceOrderV1: `http://<magento_host>/rest/default/schema&services=salesInvoiceOrderV1`

salesInvoiceCommentRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesInvoiceCommentRepositoryV1`

salesCreditmemoManagementV1: `http://<magento_host>/rest/default/schema&services=salesCreditmemoManagementV1`

salesCreditmemoRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesCreditmemoRepositoryV1`

salesCreditmemoCommentRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesCreditmemoCommentRepositoryV1`

salesShipmentRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesShipmentRepositoryV1`

salesShipmentManagementV1: `http://<magento_host>/rest/default/schema&services=salesShipmentManagementV1`

salesShipmentCommentRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesShipmentCommentRepositoryV1`

salesShipmentTrackRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesShipmentTrackRepositoryV1`

salesShipOrderV1: `http://<magento_host>/rest/default/schema&services=salesShipOrderV1`

salesTransactionRepositoryV1: `http://<magento_host>/rest/default/schema&services=salesTransactionRepositoryV1`

### Tax
taxTaxRateRepositoryV1: `http://<magento_host>/rest/default/schema&services=taxTaxRateRepositoryV1`

taxTaxRuleRepositoryV1: `http://<magento_host>/rest/default/schema&services=taxTaxRuleRepositoryV1`

taxTaxClassRepositoryV1: `http://<magento_host>/rest/default/schema&services=taxTaxClassRepositoryV1`
