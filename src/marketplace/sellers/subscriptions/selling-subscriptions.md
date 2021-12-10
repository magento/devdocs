---
group: marketplace-sellers
title: Selling Subscription-based Extensions
---

Starting December 2021, Adobe Commerce Marketplace provides extension vendors an opportunity to sell their extensions under an auto-renewing subscription model.

## Setting up subscription-based billing

When submitting a new extension to the marketplace, you must select the pricing model for the extension. The pricing model can only be selected when the initial version is being set up. After the initial version is created on the Developer Portal, the pricing model cannot be changed for this SKU. Choose Subscription to set the SKU under subscription license, and set the subscription price.

![]({{ site.baseurl }}/marketplace/sellers/images/subscriptions-pricing-model.png){: .zoom}

{:.bs-callout-info}
At this moment, Adobe Commerce Marketplace supports annual extension subscriptions only.

There are no subscription-specific settings other than Pricing Model.

## Changing existing extension from flat fee to subscription

You may elect to change licensing for an existing extension from Flat Fee to Subscription. In order to do so, you must remove the original extension from the Marketplace and replace it with a new SKU sold under a subscription license.
We recommend starting by submitting a new SKU. This allows new sales operations and marketing activities to start generating revenue right away. Follow the section above to set up a new SKU under a subscription license.
You can then either remove the original extension unconditionally, or mark the new extension as a replacement. This triggers a 180-day grace period for merchants who have purchased the original extension.
To remove an extension from the Marketplace, use the **Remove from Store** button on your original extension.

![]({{ site.baseurl }}/marketplace/sellers/images/subscriptions-remove-from-store.png){: .zoom}

If you decide to use the first option (unconditional removal), your original extension will disappear from the Marketplace and no other action will be taken.
If you select the second option (replace), you will be able to select a replacement extension from the list of your active SKUs. The 180-day grace period will be applied to the replacement extension for customers who have purchased the original extension.

![]({{ site.baseurl }}/marketplace/sellers/images/subscriptions-confirm-remove.png){: .zoom}
![]({{ site.baseurl }}/marketplace/sellers/images/subscriptions-remove-replace.png){: .zoom}

{:.bs-callout-warning}
After the extension is removed from the Marketplace, customers will still be able to download the latest version of the module, but you will no longer be able to submit new versions. Plan your rollout accordingly.

{:.bs-callout-info}
The grace period only applies if the replacement extension is a subscription extension.

## Pricing management

You can change your extension price every time you submit a new version of your extension.
Pricing model cannot be changed after at least one version of the extension is initially created on the Developer Portal.
Existing customers will be notified that the price of the extension has changed.

## Tracking sales

You can see subscription sales as regular transactions in the Developer Portal. We are working on improving developer sales tracking functionality and will update documentation when it's ready.

## Cancellations and refunds

A customer who purchased an extension under a subscription license can request a refund within 25 days. The customer must open a Marketplace Support ticket for this request.
Customers can cancel their extension subscription at any time.

{:.bs-callout-info}
Customers can only re-subscribe to a cancelled extension subscription once. Repeated cancellations and re-subscriptions to an extension are not supported.

Thank you for using the Adobe Commerce Marketplace. For all questions and suggestions regarding extension subscriptions, please contact [Marketplace Support](https://marketplacesupport.magento.com) or find us in the [Community Slack workspace](https://opensource.magento.com/slack).
