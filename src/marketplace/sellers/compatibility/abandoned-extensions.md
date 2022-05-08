---
group: marketplace-sellers
title: Abandoned Extensions
migrated_to: https://developer.adobe.com/commerce/marketplace/guides/sellers/compatibility/abandoned-extensions/
layout: migrated
---

Outside of regular extension compatibility checks with the latest patch version, we require the extension to be updated at least once every year.

There are two reasons for this. First, it's a reasonable assumption that extensions that represent an actively supported and developed product need at least one release every year, even if these extensions are in fact simplistic connectors. Second, EQP grows, develops, and evolves constantly. We want to regularly re-run some of our tests that we don't run for compatibility checks.

Every month we run an automated checker that collects all extensions that have not been updated for 11 months or more and have not been notified yet to submit a new version.

If an extension has not been updated for 12 months and automated notification has been sent, it will be removed from Marketplace.

## Example notifications

See the following example notification for cancelling an abandoned extension:

![Example delisting notification from the marketplace]({{ site.baseurl }}/marketplace/sellers/images/abandoned-cancelled.png)

See the following example notification for delisting an abandoned extension:

![Example delisting notification from the marketplace]({{ site.baseurl }}/marketplace/sellers/images/abandoned-delisted.png)
