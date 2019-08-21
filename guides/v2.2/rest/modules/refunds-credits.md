---
group: rest-api
title: Refunds and credits
functional_areas:
  - Integration
  - Catalog
---

There are several options to choose when issuing a refund or credit using the Magento Refund API.

## salesRefundInvoiceV1 service

With this service, you can initiate and process a refund based on an Invoice ID, created using an online payment method.

### Endpoint

`POST V1/invoice/{invoiceId}/refund`

{:.bs-callout-warning}
If you try to apply the service to an invoice created using an offline payment method, the system will display a validation error.

The `salesRefundInvoice` service allows you to:

* create a credit memo (complete or partial) for an invoice
* add details about the refunded items to the order
* change status and state of an order according to performed actions
* notify a customer about the performed refund operation
* designate whether the returned items are returned to stock

See [RefundInvoice service]({{page.baseurl}}/mrg/ce/Sales.html#refundinvoice) for more information.

## salesRefundOrderV1 service

This service performs the same operations as the `RefundInvoice` service, but based on an Order ID. Use this service if the invoice was created using an offline payment method.

### Endpoint

`POST V1/order/{orderId}/refund`

See [RefundOrder service]({{page.baseurl}}mrg/ce/Sales.html#refundOrder) for more information.

## salesCreditmemoManagement service

The service also allows you to initiate and process a refund but requires more information in a request compared to the `RefundInvoice` and `RefundOrder` services.

### Endpoints

* `Get V1/creditmemo/{id}/comments`
* `PUT V1/creditmemo/{id}`
* `POST V1/creditmemo/{id}/emails`
* `POST V1/creditmemo/refund`

## salesCreditmemoRepository service

This service is only for persistence operations with refunds. This service can add or update a refund, but does not process that refund in the Magento system.

### Endpoints

* `GET V1/creditmemo/{id}`
* `GET V1/creditmemos`
* `POST V1/creditmemo`

The `POST /V1/creditmemo` method of this service allows you to place a new credit memo or update an existing one, but will not process any refund operations with it. Sending a request with this method will not change the status of a credit memo and will not affect the refund amount; consequently, a new credit memo will not have any status and the refund will amount to zero.

{:.bs-callout-tip}
For the correct refund shipment, these parameters are required:

* `shipping_amount`
* `base_shipping_amount`

## Related documentation

* [Magento REST API documentation (Swagger)]({{page.baseurl}}/http://devdocs.magento.com/swagger/index.html#/)
