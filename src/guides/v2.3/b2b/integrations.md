---
group: b2b-developer-guide
subgroup: 10_REST
title: Integrate with B2B using REST
menu_title: Integrate with B2B using REST
menu_order: 1
menu_node: parent
ee_only: True
functional_areas:
  - B2B
  - Integration
---

This topic lists the REST endpoints and services that are provided with {{site.data.var.b2b}}.

## List of REST endpoints by module

### Company

```terminal
GET    /V1/company/
GET    /V1/company/:companyId
DELETE /V1/company/:companyId
PUT    /V1/company/:companyId
POST   /V1/company/
GET    /V1/team/
GET    /V1/team/:teamId
DELETE /V1/team/:teamId
PUT    /V1/team/:teamId
POST   /V1/team/:companyId
GET    /V1/hierarchy/:id
PUT    /V1/hierarchy/move/:id
GET    /V1/company/role/
GET    /V1/company/role/:roleId
POST   /V1/company/role/
DELETE /V1/company/role/:roleId
PUT    /V1/company/role/:id
PUT    /V1/company/assignRoles
GET    /V1/company/role/:roleId/users
```

### CompanyCredit

```terminal
GET    /V1/companyCredits/
GET    /V1/companyCredits/:creditId
PUT    /V1/companyCredits/:id
GET    /V1/companyCredits/company/:companyId
POST   /V1/companyCredits/:creditId/increaseBalance
POST   /V1/companyCredits/:creditId/decreaseBalance
GET    /V1/companyCredits/history
PUT    /V1/companyCredits/history/:historyId
```

### NegotiableQuote

```terminal
POST   /V1/negotiableQuote/request
POST   /V1/negotiableQuote/submitToCustomer
POST   /V1/negotiableQuote/decline
POST   /V1/negotiableQuote/pricesUpdated
GET    /V1/negotiableQuote/attachmentContent
GET    /V1/negotiableQuote/:quoteId/comments
PUT    /V1/negotiableQuote/:quoteId/shippingMethod
POST   /V1/negotiable-carts/:cartId/payment-information
GET    /V1/negotiable-carts/:cartId/payment-information
POST   /V1/negotiable-carts/:cartId/set-payment-information
POST   /V1/negotiable-carts/:cartId/shipping-information
POST   /V1/negotiable-carts/:cartId/estimate-shipping-methods
POST   /V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id
PUT    /V1/negotiableQuote/:quoteId
GET    /V1/negotiable-carts/:cartId/billing-address
POST   /V1/negotiable-carts/:cartId/billing-address
GET    /V1/negotiable-carts/:cartId/totals
PUT    /V1/negotiable-carts/:cartId/coupons/:couponCode
DELETE /V1/negotiable-carts/:cartId/coupons
POST   /V1/negotiable-carts/:cartId/giftCards
DELETE /V1/negotiable-carts/:cartId/giftCards/:giftCardCode
```

### SharedCatalog

```terminal
GET    /V1/sharedCatalog/:sharedCatalogId
POST   /V1/sharedCatalog
PUT    /V1/sharedCatalog/:id
DELETE /V1/sharedCatalog/:sharedCatalogId
GET    /V1/sharedCatalog/
GET    /V1/sharedCatalog/:sharedCatalogId/companies
POST   /V1/sharedCatalog/:sharedCatalogId/assignCompanies
POST   /V1/sharedCatalog/:sharedCatalogId/unassignCompanies
GET    /V1/sharedCatalog/:id/products
POST   /V1/sharedCatalog/:id/assignProducts
POST   /V1/sharedCatalog/:id/unassignProducts
GET    /V1/sharedCatalog/:id/categories
POST   /V1/sharedCatalog/:id/assignCategories
POST   /V1/sharedCatalog/:id/unassignCategories
```

## List of service names per Module

### Company

```terminal
companyAclV1
companyCompanyHierarchyV1
companyCompanyRepositoryV1
companyRoleRepositoryV1
companyTeamRepositoryV1
configurableProductConfigurableProductManagementV1
```

### CompanyCredit

```terminal
companyCreditCreditBalanceManagementV1
companyCreditCreditHistoryManagementV1
companyCreditCreditLimitManagementV1
companyCreditCreditLimitRepositoryV1
```

### NegotiableQuote

```terminal
negotiableQuoteAttachmentContentManagementV1
negotiableQuoteBillingAddressManagementV1
negotiableQuoteCartTotalRepositoryV1
negotiableQuoteCommentLocatorV1
negotiableQuoteCouponManagementV1
negotiableQuoteGiftCardAccountManagementV1
negotiableQuoteNegotiableQuoteManagementV1
negotiableQuoteNegotiableQuotePriceManagementV1
negotiableQuoteNegotiableQuoteShippingManagementV1
negotiableQuotePaymentInformationManagementV1
negotiableQuoteShipmentEstimationV1
negotiableQuoteShippingInformationManagementV1
negotiableQuoteShippingMethodManagementV1
```

### SharedCatalog

```terminal
sharedCatalogCategoryManagementV1
sharedCatalogCompanyManagementV1
sharedCatalogProductManagementV1
sharedCatalogSharedCatalogRepositoryV1
```
