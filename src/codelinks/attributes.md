---
layout: full-width
title: Retrieving detailed attributes
---

Swagger and other types of code-generated documentation erroneously indicate several APIs that
search across multiple objects return detailed information about individual objects. Detailed information, such as `extensionAttributes`,  `customAttributes`, and possibly other fields, are generally available only when requesting information on a single object.

This document lists the PHP, REST, and SOAP calls that indicate they return detailed information, but might not. It also provides the call that returns the detailed data.

## Customer module {#Customer}

### Magento\Customer\Api\CustomerRepositoryInterface {#CustomerRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `CustomerRepositoryInterface::getList($searchCriteria)` | `CustomerRepositoryInterface::getById($customerId)`
REST | `/V1/customers/search` | `/V1/customers/{id}`
SOAP | `customerCustomerRepositoryV1GetList` | `customerCustomerRepositoryV1GetById`

### Magento\Customer\Api\GroupRepositoryInterface {#GroupRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `GroupRepositoryInterface::getList($searchCriteria)` | `GroupRepositoryInterface::getById($id)`
REST | `/V1/customerGroups/search` | `/V1/customerGroups/{id}`
SOAP | `customerGroupRepositoryV1GetList` | `customerGroupRepositoryV1GetById`

## EAV module {#EAV}

### Magento\Eav\Api\AttributeSetRepositoryInterface {#AttributeSetRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP |  `AttributeSetRepositoryInterface::getList($entityTypeCode, $searchCriteria)` | `AttributeSetRepositoryInterface::get($attributeSetId)`
REST | `/V1/eav/attribute-sets/list` | `/V1/eav/attribute-sets/{attributeSetId}`
SOAP | `eavAttributeSetRepositoryV1GetList` | `eavAttributeSetRepositoryV1Get`

## GiftWrapping module (Enterprise Edition) {#GiftWrapping}

### Magento\GiftWrapping\Api\WrappingRepositoryInterface {#WrappingRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `WrappingRepositoryInterface::getList($searchCriteria)` | `WrappingRepositoryInterface::get($ruleId)`
REST | `/V1/gift-wrappings` | `/V1/gift-wrappings/:id`
SOAP | `giftWrappingWrappingRepositoryV1GetList` | `giftWrappingWrappingRepositoryV1Get`

## Quote module {#Quote}

### Magento\Quote\Api\CartRepositoryInterface {#CartRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `CartRepositoryInterface::getList($searchCriteria)` | `CartRepositoryInterface::get($cartId)`
REST | `/V1/carts/search` | `/V1/carts/{cartId}`
SOAP | `quoteCartRepositoryV1GetList` | `quoteCartRepositoryV1Get`

### Magento\Quote\Api\GuestPaymentMethodManagementInterface {#GuestPaymentMethodManagementInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `GuestPaymentMethodManagementInterface::getList($cartId)` | `GuestPaymentMethodManagementInterface::get($cartId)`
REST | `/V1/guest-carts/:cartId/payment-methods` | `/V1/guest-carts/:cartId/selected-payment-method`
SOAP | `quoteGuestPaymentMethodManagementV1GetList` | `quoteGuestPaymentMethodManagementV1Get`

### Magento\Quote\Api\PaymentMethodManagementInterface {#PaymentMethodManagementInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `PaymentMethodManagementInterface::getList($cartId)` | `PaymentMethodManagementInterface::get($cartId)`
REST |`/V1/carts/:cartId/payment-methods` | `/V1/carts/:cartId/selected-payment-method`
SOAP | `quotePaymentMethodManagementV1GetList` | `quotePaymentMethodManagementV1Get`

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `PaymentMethodManagementInterface::getList($cartId)` | `PaymentMethodManagementInterface::get($cartId)`
REST | `/V1/carts/mine/payment-methods` | `/V1/carts/mine/selected-payment-method`
SOAP | `quotePaymentMethodManagementV1GetList` | `quotePaymentMethodManagementV1Get`

## Sales module {#Sales}

### Magento\Sales\Api\CreditmemoRepositoryInterface {#CreditmemoRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `CreditmemoRepositoryInterface::getList($searchCriteria)` | `CreditmemoRepositoryInterface::get($id)`
REST | `/V1/creditmemos` | `/V1/creditmemo/{id}`
SOAP | `salesCreditmemoRepositoryV1GetList` | `salesCreditmemoRepositoryV1Get`

### Magento\Sales\Api\InvoiceRepositoryInterface {#InvoiceRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `InvoiceRepositoryInterface::getList($searchCriteria)` | `InvoiceRepositoryInterface::get($id)`
REST | `/V1/invoices` | `/V1/invoices/{id}`
SOAP | `salesInvoiceRepositoryV1GetList` | `salesInvoiceRepositoryV1Get`

### Magento\Sales\Api\OrderItemRepositoryInterface {#OrderItemRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `OrderItemRepositoryInterface::getList($searchCriteria)` | `OrderItemRepositoryInterface::get($id)`
REST | `/V1/orders/items` | `/V1/orders/items/{id}`
SOAP | `salesOrderItemRepositoryV1GetList` | `salesOrderItemRepositoryV1Get`

### Magento\Sales\Api\OrderRepositoryInterface {#OrderRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `OrderRepositoryInterface::getList($searchCriteria)` | `OrderRepositoryInterface::get($id)`
REST | `/V1/orders` | `/V1/orders/{id}`
SOAP | `salesOrderRepositoryV1GetList` | `salesOrderRepositoryV1GetList`

### Magento\Sales\Api\ShipmentRepositoryInterface {#ShipmentRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `ShipmentRepositoryInterface::getList($searchCriteria)` | `ShipmentRepositoryInterface::get($id)`
REST | `/V1/shipments` | `/V1/shipment/{id}`
SOAP | `salesShipmentRepositoryV1GetList` | `salesShipmentRepositoryV1Get`

### Magento\SalesRule\Api\TransactionRepositoryInterface {#TransactionRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `TransactionRepositoryInterface::getList($searchCriteria)` | `TransactionRepositoryInterface:get($id)`
REST | `/V1/transactions` | `/V1/transactions/{id}`
SOAP | `salesTransactionRepositoryV1GetList` | `salesTransactionRepositoryV1Get`

## SalesRule module {#SalesRule}

### Magento\SalesRule\Api\CouponRepositoryInterface {#CouponRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `CouponRepositoryInterface::getList($searchCriteria)` | `CouponRepositoryInterface::getById($couponId)`
REST |  `/V1/coupons/search` | `/V1/coupons/{couponId}`
SOAP | `salesRuleCouponRepositoryV1GetList` | `salesRuleCouponRepositoryV1GetById`

### Magento\SalesRule\Api\RuleRepositoryInterface {#RuleRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `RuleRepositoryInterface::getList($searchCriteria)` | `RuleRepositoryInterface::getById($ruleId)`
REST |  `/V1/salesRules/search` | `/V1/salesRules/{ruleId}`
SOAP | `salesRuleRuleRepositoryV1GetListRequest` | `salesRuleRuleRepositoryV1GetById`

## Tax module {#Tax}

### Magento\Tax\Api\TaxClassRepositoryInterface {#TaxClassRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `TaxClassRepositoryInterface::getList($searchCriteria)` | `TaxClassRepositoryInterface::get($taxClassId)`
REST | `/V1/taxClasses/search` | `/V1/taxClass/{rateId}`
SOAP | `taxTaxClassRepositoryV1GetList` | `taxTaxClassRepositoryV1Get`

### Magento\Tax\Api\TaxRateRepositoryInterface {#TaxRateRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `TaxRateRepositoryInterface::getList($searchCriteria)` | `TaxRateRepositoryInterface::get($rateId)`
REST | `/V1/taxRates/search` | `/V1/taxRates/{rateId}`
SOAP | `taxTaxRateRepositoryV1GetList` | `taxTaxRateRepositoryV1Get`

### Magento\Tax\Api\TaxRuleRepositoryInterface {#TaxRuleRepositoryInterface}

Language | Does not return detailed attributes | Returns detailed attributes
--- | --- | ---
PHP | `TaxRuleRepositoryInterface::getList($searchCriteria)` | `TaxRuleRepositoryInterface::get($ruleId)`
REST | `/V1/taxRules/search` | `/V1/taxRules/{ruleId}`
SOAP | `taxTaxRuleRepositoryV1GetList` | `taxTaxRuleRepositoryV1Get`
