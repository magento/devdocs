---
group: performance-best-practices
title: Performance pack
functional_areas:
  - Configuration
  - System
  - Setup
---

The Performance Pack contains modules for optimizing the Order Placement process and Checkout experience.

{: .bs-callout-info}
For {{site.data.var.ee}} 2.4.3, the features in the Performance pack were released as separate composer packages and patches.

You can use the command-line interface to enable these features, or you can edit the `app/etc/env.php` file according to the corresponding readme files in the [_Module Reference Guide_][mrg].

## Asynchronous order placement

The Async Order module enables asynchronous order placement, which marks the order as `received`, places the order in a queue, and processes orders from the queue on a first-in-first-out basis.

The Negotiable Quote Async Order module enables you to save order items asynchronously for the `NegotiableQuote` functionality.

## Sales rule optimization

The Deferred Total Calculating module optimizes the checkout process by deferring the total calculation until it is requested for the shopping cart or during the final checkout steps.

## Inventory check

<!-- link definitions -->

[mrg]: {{site.baseurl}}{{site.gdeurl}}/mrg/intro.html