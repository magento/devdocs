---
layout: default
title: Retrieving extensionAttributes
menu_title: Retrieving extensionAttributes
---

* [PHP](#php)
* [REST](#rest)
* [SOAP](#soap)

## PHP {#php}

* [Bundle](#php-bundle)
* [Catalog](#php-catalog)
* [CMSPage](#php-cmspage)
* [ConfigurableProduct](#php-configurable)
* [Customer](#php-customer)
* [EAV](#php-eav)
* [Quote](#php-quote)
* [Sales](#php-sales)
* [SalesRule](#php-salesrule)
* [Tax](#php-tax)


### Bundle {#php-bundle}


### Catalog {#php-catalog}


### CheckoutAgreements {#php-checkout}


### CMSPage {#php-cmspage}


### Customer {#php-customer}


### EAV {#php-eav}


### Quote {#php-quote}


### Sales {#php-sales}


### SalesRule {#php-salesrule}


### Tax {#php-tax}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
TaxClassRepositoryInterface	| `getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)`	| `get($taxClassId)`
TaxRateRepositoryInterface	| `getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)`	| `get($rateId)`
TaxRuleRepositoryInterface	| `getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)`	| `get($ruleId)`


##REST  {#rest}

* [Bundle](#rest-bundle)
* [Catalog](#rest-catalog)
* [CMSPage](#rest-cmspage)
* [ConfigurableProduct](#rest-configurable)
* [Customer](#rest-customer)
* [EAV](#rest-eav)
* [Quote](#rest-quote)
* [Sales](#rest-sales)
* [SalesRule](#rest-salesrule)
* [Store](#rest-store)
* [Tax](#rest-tax)


### Bundle {#rest-bundle}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
ProductOptionRepositoryInterface | /V1/bundle-products/:sku/options/all |	/V1/bundle-products/:sku/options/{optionId}

### Catalog {#rest-catalog}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
AttributeSetRepositoryInterface	| /V1/products/attribute-sets/sets/list  |	/V1/products/attribute-sets/sets/{attributeSetId}
CategoryAttributeRepositoryInterface	| /V1/categories/attributes |	/V1/categories/attributes/{attributeCode}
ProductAttributeMediaGalleryManagementInterface	| /V1/products/:sku/media |	/V1/products/:sku/media/{entryId}
ProductAttributeRepositoryInterface	| /V1/products/attributes |	/V1/products/attributes/{attributeCode}
ProductCustomOptionRepositoryInterface	| /V1/products/:sku/options |	/V1/products/:sku/options/{optionId}
ProductRepositoryInterface	| /V1/products	| /V1/products/{sku}


### CMSPage {#rest-cmspage}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
BlockRepositoryInterface	| /V1/cmsBlock/search	| /V1/cmsBlock/{blockId}
PageRepositoryInterface	| /V1/cmsPage/search	| /V1/cmsPage/{pageID}

### ConfigurableProduct {#rest-configurable}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
OptionRepositoryInterface	| /V1/configurable-products/:sku/options/all |	/V1/configurable-products/:sku/options/{id}

### Customer {#rest-customer}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
CustomerRepositoryInterface	| /V1/customers/search |	/V1/customers/{id}
GroupRepositoryInterface	| /V1/customerGroups/search |	/V1/customerGroups/{id}

### EAV {#rest-eav}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
AttributeSetRepositoryInterface	| /V1/eav/attribute-sets/list |	/V1/eav/attribute-sets/{attributeSetId}

### Quote {#rest-quote}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
CartItemRepositoryInterface	| /V1/carts/:cartId/items	|
CartItemRepositoryInterface	| /V1/carts/mine/items	|
CartRepositoryInterface	| /V1/carts/search	| /V1/carts/{cartId}
GuestPaymentMethodManagementInterface	| /V1/guest-carts/:cartId/payment-methods	| /V1/guest-carts/:cartId/selected-payment-method
PaymentMethodManagementInterface	| /V1/carts/:cartId/payment-methods |	/V1/carts/:cartId/selected-payment-method
PaymentMethodManagementInterface	| /V1/carts/mine/payment-methods |	/V1/carts/mine/selected-payment-method

### Sales {#rest-sales}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
CreditmemoRepositoryInterface	| /V1/creditmemos	| /V1/creditmemo/{id}
InvoiceRepositoryInterface	| /V1/invoices	| /V1/invoices/{id}
OrderItemRepositoryInterface	| /V1/orders/items	| /V1/orders/items/{id}
OrderRepositoryInterface	| /V1/orders	| /V1/orders/{id}
ShipmentRepositoryInterface	| /V1/shipments	| /V1/shipment/{id}
TransactionRepositoryInterface	| /V1/transactions	| /V1/transactions/{id}

### SalesRule {#rest-salesrule}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
CouponRepositoryInterface	| /V1/coupons/search	| /V1/coupons/{couponId}
RuleRepositoryInterface	| /V1/salesRules/search	| /V1/salesRules/{ruleId}

### Tax {#rest-tax}

Interface | Invalid extensionAttributes | Use instead
--- | --- | ---
TaxClassRepositoryInterface	| /V1/taxClasses/search	| /V1/taxClasses/{taxClassId}
TaxRateRepositoryInterface	| /V1/taxRates/search	| /V1/taxRates/{rateId}
TaxRuleRepositoryInterface	| /V1/taxRules/search	| /V1/taxRules/{ruleId}

## SOAP  {#soap}

* [Bundle](#soap-bundle)
* [Catalog](#soap-catalog)
* [CMSPage](#soap-cmspage)
* [ConfigurableProduct](#soap-configurable)
* [Customer](#soap-customer)
* [Downloadable](#soap-downloadable)
* [EAV](#soap-eav)
* [Quote](#soap-quote)
* [Sales](#soap-sales)
* [SalesRule](#soap-salesrule)
* [Tax](#soap-tax)


### Bundle {#soap-bundle}


### Catalog {#soap-catalog}


### CMSPage {#soap-cmspage}


### Customer {#soap-customer}


### EAV {#soap-eav}


### Quote {#soap-quote}


### Sales {#soap-sales}


### SalesRule {#soap-salesrule}


### Tax {#soap-tax}

TaxClassRepositoryInterface	| `getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)`	| `get($taxClassId)`
TaxRateRepositoryInterface	| `getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)`	| `get($rateId)`
TaxRuleRepositoryInterface	| `getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria)`	| `get($ruleId)`


## Tax Module

### Magento\Tax\Api\TaxClassRepositoryInterface

Language | Empty extensionAttributes | Valid extensionAttributes
--- | --- | ---
PHP | `TaxClassRepositoryInterface::getList()`	| `get($taxClassId)`
REST | /V1/taxClasses/search	| /V1/taxClass/{rateId}
SOAP |

### Magento\Tax\Api\TaxRateRepositoryInterface

Language | Empty extensionAttributes | Valid extensionAttributes
--- | --- | ---
PHP | `TaxRateRepositoryInterface::getList()`	| `get($rateId)`
REST | /V1/taxRates/search	| /V1/taxRates/{rateId}
SOAP |

### Magento\Tax\Api\TaxRuleRepositoryInterface

Language | Empty extensionAttributes | Valid extensionAttributes
--- | --- | ---
PHP | `TaxRuleRepositoryInterface::getList()`	| `get($ruleId)`
REST | /V1/taxRules/search	| /V1/taxRules/{ruleId}
SOAP |
