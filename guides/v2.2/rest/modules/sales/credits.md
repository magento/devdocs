---
group: rest-api
title: Credits
functional_areas:
  - Integration
  - Catalog
---

There are a couple of options to choose when issuing a credit using the Magento API.

## salesCreditmemoManagement service

The service also allows you to initiate and process a refund but requires more information in a request compared to the `salesRefundInvoiceV1` and `salesRefundOrderV1` services.

### Endpoints

* `Get V1/creditmemo/:id/comments`
* `PUT V1/creditmemo/:id`
* `POST V1/creditmemo/:id/emails`
* `POST V1/creditmemo/refund`

## salesCreditmemoRepository service

This service is only for persistence operations with refunds. This service can add or update a refund, but does not process that refund in the Magento system.

### Endpoints

* `GET V1/creditmemo/:id`
* `GET V1/creditmemos`
* `POST V1/creditmemo`

The `POST /V1/creditmemo` method of this service allows you to place a new credit memo or update an existing one, but will not process any refund operations with it. Sending a request with this method will not change the status of a credit memo and will not affect the refund amount; consequently, a new credit memo will not have any status and the refund will amount to zero.

For the correct refund shipment, these parameters are required:

* `shipping_amount`
* `base_shipping_amount`

## Related documentation

* [Magento REST API documentation (Swagger)](https://devdocs.magento.com/swagger/index.html)
