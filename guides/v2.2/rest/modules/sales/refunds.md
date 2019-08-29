---
group: rest-api
title: Refunds
functional_areas:
  - Integration
  - Catalog
---

There are a couple of options to choose when issuing a refund using the Magento API.

## salesRefundInvoiceV1 service

With this service, you can initiate and process a refund based on an Invoice ID, created using an online payment method.

### Endpoint

`POST V1/invoice/:invoiceId/refund`

{:.bs-callout-warning}
If you try to apply the service to an invoice created using an offline payment method, the system will display a validation error.

The `salesRefundInvoice` service allows you to:

* Create a credit memo (complete or partial) for an invoice
* Add details about the refunded items to the order
* Change status and state of an order according to performed actions
* Notify a customer about the performed refund operation
* Designate whether the returned items are returned to stock

## salesRefundOrderV1 service

This service performs the same operations as the `salesRefundInvoiceV1` service, but based on an Order ID. Use this service if the invoice was created using an offline payment method.

### Endpoint

`POST V1/order/:orderId/refund`

## Related documentation

* [Magento REST API documentation (Swagger)](https://devdocs.magento.com/swagger/index.html)

While Magento recommends you use the `Refund` services to issue refunds, the Magento API also provides the following `CreditmemoManagement` services you can use to issue a credit:  

* `salesCreditmemoManagement`
* `salesCreditmemoRepository`
