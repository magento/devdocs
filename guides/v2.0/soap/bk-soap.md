---
layout: default
group: soap
subgroup: A_soap
title: SOAP Reference
menu_title: Overview
menu_order: 1
menu_node: parent
version: 2.0
github_link: soap/bk-soap.md
redirect_from: /guides/v1.0/soap/bk-soap.html
---

### Contents

* TOC
{:toc}

## Soap WSDL Endpoint Format

`http://<magento_host>/soap/<store_code>?wsdl&services=<serviceName1,serviceName2,..>`


<div class="bs-callout bs-callout-info" id="info">
  <p>The value of <code>store_code</code> can be one of the following:</p>
  <ul>
  <li><code>default</code></li>
  <li>The assigned store code</li>
  <li><code>all</code>. This value only applies to the CMS and Product modules. If this value is specified, the API call affects all the merchant's stores. <code>get</code>operations cannot be performed when you specify <code>all</code>.</li>
</ul>
</div>

## List of Service Names per Module

The entire list can be retrieved here: `http://<magento_host>/soap/default?wsdl_list=1`


### Backend
backendModuleServiceV1: `http://<magento_host>/soap/default?wsdl&services=backendModuleServiceV1`

### Bundle
bundleProductLinkManagementV1: `http://<magento_host>/soap/default?wsdl&services=bundleProductLinkManagementV1`

bundleProductOptionRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=bundleProductOptionRepositoryV1`

bundleProductOptionTypeListV1: `http://<magento_host>/soap/default?wsdl&services=bundleProductOptionTypeListV1`

bundleProductOptionManagementV1: `http://<magento_host>/soap/default?wsdl&services=bundleProductOptionManagementV1`

### Catalog
catalogProductRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductRepositoryV1`

catalogProductAttributeTypesListV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeTypesListV1`

catalogProductAttributeRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeRepositoryV1`

catalogCategoryAttributeRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogCategoryAttributeRepositoryV1`

catalogCategoryAttributeOptionManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogCategoryAttributeOptionManagementV1`

catalogProductTypeListV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductTypeListV1`

catalogAttributeSetRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogAttributeSetRepositoryV1`

catalogAttributeSetManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogAttributeSetManagementV1`

catalogProductAttributeManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeManagementV1`

catalogProductAttributeGroupRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeGroupRepositoryV1`

catalogProductAttributeOptionManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeOptionManagementV1`

catalogProductMediaAttributeManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductMediaAttributeManagementV1`

catalogProductAttributeMediaGalleryManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductAttributeMediaGalleryManagementV1`

catalogProductGroupPriceManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductGroupPriceManagementV1`

catalogProductTierPriceManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductTierPriceManagementV1`

catalogCategoryRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogCategoryRepositoryV1`

catalogCategoryManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogCategoryManagementV1`

catalogProductCustomOptionTypeListV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductCustomOptionTypeListV1`

catalogProductCustomOptionRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductCustomOptionRepositoryV1`

catalogProductLinkTypeListV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductLinkTypeListV1`

catalogProductLinkManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductLinkManagementV1`

catalogProductLinkRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogProductLinkRepositoryV1`

catalogCategoryLinkManagementV1: `http://<magento_host>/soap/default?wsdl&services=catalogCategoryLinkManagementV1`

catalogCategoryLinkRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=catalogCategoryLinkRepositoryV1`

catalogInventoryStockRegistryV1: `http://<magento_host>/soap/default?wsdl&services=catalogInventoryStockRegistryV1`

### Checkout
checkoutAgreementsCheckoutAgreementsRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=checkoutAgreementsCheckoutAgreementsRepositoryV1`

### Configurable
configurableProductLinkManagementV1: `http://<magento_host>/soap/default?wsdl&services=configurableProductLinkManagementV1`

configurableProductConfigurableProductManagementV1: `http://<magento_host>/soap/default?wsdl&services=configurableProductConfigurableProductManagementV1`

configurableProductOptionRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=configurableProductOptionRepositoryV1`

### Customer
customerGroupRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=customerGroupRepositoryV1`

customerGroupManagementV1: `http://<magento_host>/soap/default?wsdl&services=customerGroupManagementV1`

customerCustomerMetadataV1: `http://<magento_host>/soap/default?wsdl&services=customerCustomerMetadataV1`

customerAddressMetadataV1: `http://<magento_host>/soap/default?wsdl&services=customerAddressMetadataV1`

customerCustomerRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=customerCustomerRepositoryV1`

customerAccountManagementV1: `http://<magento_host>/soap/default?wsdl&services=customerAccountManagementV1`

customerAddressRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=customerAddressRepositoryV1`

### Downloadable
downloadableLinkRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=downloadableLinkRepositoryV1`

downloadableSampleRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=downloadableSampleRepositoryV1`

### Eav
eavAttributeSetRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=eavAttributeSetRepositoryV1`

eavAttributeSetManagementV1: `http://<magento_host>/soap/default?wsdl&services=eavAttributeSetManagementV1`

### Gift Message
giftMessageCartRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=giftMessageCartRepositoryV1`

giftMessageItemRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=giftMessageItemRepositoryV1`

### Integration
integrationAdminTokenServiceV1: `http://<magento_host>/soap/default?wsdl&services=integrationAdminTokenServiceV1`

integrationCustomerTokenServiceV1: `http://<magento_host>/soap/default?wsdl&services=integrationCustomerTokenServiceV1`

### Quote
quoteCartRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=quoteCartRepositoryV1`

quoteCartManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteCartManagementV1`

quoteGuestCartRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestCartRepositoryV1`

quoteGuestCartManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestCartManagementV1`

quoteShippingMethodManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteShippingMethodManagementV1`

quoteGuestShippingMethodManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestShippingMethodManagementV1`

quoteCartItemRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=quoteCartItemRepositoryV1`

quoteGuestCartItemRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestCartItemRepositoryV1`

quotePaymentMethodManagementV1: `http://<magento_host>/soap/default?wsdl&services=quotePaymentMethodManagementV1`

quoteGuestPaymentMethodManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestPaymentMethodManagementV1`

quoteBillingAddressManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteBillingAddressManagementV1`

quoteGuestBillingAddressManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestBillingAddressManagementV1`

quoteGuestAddressDetailsManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestAddressDetailsManagementV1`

quoteCouponManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteCouponManagementV1`

quoteGuestCouponManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestCouponManagementV1`

quoteShippingAddressManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteShippingAddressManagementV1`

quoteGuestShippingAddressManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestShippingAddressManagementV1`

quoteAddressDetailsManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteAddressDetailsManagementV1`

quoteCartTotalRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=quoteCartTotalRepositoryV1`

quoteGuestCartTotalManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestCartTotalManagementV1`

quoteGuestCartTotalRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=quoteGuestCartTotalRepositoryV1`

quoteCartTotalManagementV1: `http://<magento_host>/soap/default?wsdl&services=quoteCartTotalManagementV1`

### Sales
salesOrderRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesOrderRepositoryV1`

salesOrderManagementV1: `http://<magento_host>/soap/default?wsdl&services=salesOrderManagementV1`

salesOrderAddressRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesOrderAddressRepositoryV1`

salesInvoiceRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesInvoiceRepositoryV1`

salesInvoiceManagementV1: `http://<magento_host>/soap/default?wsdl&services=salesInvoiceManagementV1`

salesInvoiceCommentRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesInvoiceCommentRepositoryV1`

salesCreditmemoManagementV1: `http://<magento_host>/soap/default?wsdl&services=salesCreditmemoManagementV1`

salesCreditmemoRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesCreditmemoRepositoryV1`

salesCreditmemoCommentRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesCreditmemoCommentRepositoryV1`

salesShipmentRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesShipmentRepositoryV1`

salesShipmentManagementV1: `http://<magento_host>/soap/default?wsdl&services=salesShipmentManagementV1`

salesShipmentCommentRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesShipmentCommentRepositoryV1`

salesShipmentTrackRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesShipmentTrackRepositoryV1`

salesTransactionRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=salesTransactionRepositoryV1`

### Tax
taxTaxRateRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=taxTaxRateRepositoryV1`

taxTaxRuleRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=taxTaxRuleRepositoryV1`

taxTaxClassRepositoryV1: `http://<magento_host>/soap/default?wsdl&services=taxTaxClassRepositoryV1`
