---
group: b2b-developer-guide
subgroup: 10_REST
title: Integrate with the NegotiableQuote module
menu_title: Integrate with the NegotiableQuote module
menu_order: 31
ee_only: True
level3_menu_node: level3child
level3_subgroup: nq
functional_areas:
  - B2B
  - Integration
---

Negotiable quotes are a mechanism that allows a company user (buyer) and a seller (admin user) to negotiate product and/or shipping prices before the company user places an order. Its functionality is available for companies only.

The negotiable quote lifecycle includes a number of stages, as shown on the diagram below.

![Negotiable quote workflow]({{ site.baseurl }}/common/images/b2b/quote-workflow.jpg)

The quoting process itself can be a continuous process, with a number of repeating cycles until the agreement is reached.

*  The buyer creates and submits a negotiable quote
*  The seller reviews and modifies or declines the quote
*  The buyer reviews the seller's counteroffer
*  Upon agreement, the buyer begins the checkout process and the system converts the negotiable quote into an order

{:.bs-callout-info}
You cannot negotiate prices on individual items.

## Quote statuses

The quote life cycle is managed via quote statuses. The quoting interface allows both a seller and a buyer to manage items in the quote (add, delete, change quantity) as well as make an offer (or request a quote) for items and/or for shipping.

The negotiated price set in the negotiable quote is exactly the price that will be applied on a quote during checkout, order generation, and invoice generation.

Status | Description | Available actions to seller
--- | --- | ---
New | The buyer submitted the quote, but the seller has not opened it yet. The buyer can edit the quote. <br/><br/>The system creates a new quote record with its own ID. | View
Open | The seller has opened the submitted quote and is reviewing/modifying it. The seller can edit the quote, but the buyer cannot. | View, submit, decline, save as draft. <br/><br/>Edit the expiration date, item quantity, add/remove product items, enter a proposed price, add shipping method and shipping price, add comments.
Submitted | The seller has reviewed the quote and has sent it back to buyer. The seller cannot edit the quote. | View
Client reviewed | The buyer has opened the quote submitted by seller and is modifying it, by changing items or adding a shipping address. The seller cannot edit the quote. | View
Updated | The buyer has re-submitted the quote to seller. The seller can edit the quote, but the buyer cannot. | View, submit, decline, save as draft.<br/><br/>Edit the expiration date, item quantity, add/remove product items, enter a proposed price, add shipping method and shipping price, add comments.
Ordered | The buyer has purchased the quote, and Magento converts the quote to an order. Neither the seller nor the buyer can edit the quote. | View
Closed | The buyer has cancelled the quote and thus stopped the negotiation process. Neither the seller nor the buyer can edit the quote. <br/><br/>The buyer clicks the **Close** button from the Quote details page. (Not available using Web API) | View
Declined | The seller has declined the quote. All custom pricing (if any) is removed from the quote. In admin panel, the quote is locked for editing. | View
Expired | The quote is on the buyer's side, and the quote's expiration date has passed. | View

The following table maps the internal Magento system state to the statuses displayed on the Storefront and Admin.

System state | Buyer status | Seller status
--- | --- | ---
Created | Submitted | New
Processing by customer | Open | Client Reviewed
Processing by admin | Pending | Open
Submitted by customer | Submitted | Updated
Submitted by admin | Updated | Submitted
Ordered | Ordered | Ordered
Expired | Expired | Expired
Declined | Declined | Declined
Closed | Closed | Closed

The following diagram shows the negotiable quote lifecycle from the perspective of statuses.

![Negotiable quote status]({{ site.baseurl }}/common/images/b2b/quote-statuses.png)

## Related information

*  [Manage negotiable quotes]({{ page.baseurl }}/b2b/negotiable-manage.html)
*  [Update a negotiable quote]({{ page.baseurl }}/b2b/negotiable-update.html)
*  [Negotiable quote checkout]({{ page.baseurl }}/b2b/negotiable-checkout.html)
*  [Place a negotiable quote order]({{ page.baseurl }}/b2b/negotiable-order-workflow.html)
