---
group: marketplace-sellers
title: Release Compatibility
---

A key factor for merchants' Total Cost of Ownership (TCO) is having their extension suite up-to-date and available for seamless upgrades to the latest version of {{ site.data.var.ce }} or {{ site.data.var.ee }}. To best serve this need, our goal is to proactively monitor and eliminate extensions that are out-of-date, out of compatibility with supported release lines, or have been otherwise abandoned. Therefore, we are updating our policies to clearly state certain requirements for version compatibility and frequency of updates:

1. Every extension must be compatible with a supported release line in order for the SKU to remain searchable and available for purchase.
1. After every minor (2.x.0) release, extensions have 60 days to submit a compatible version, otherwise they will be delisted.
1. After every patch (2.x.y) release, extension developers have 30 days to submit a compatible version. Extensions that do not pass EQP tests on a new patch release after 30 days will be delisted.
1. Delisted extensions' product pages will remain accessible by direct link and extensions will remain downloadable from `repo.magento.com`, but won't be found in search results or Catalog pages.

To minimize the amount of manual maintenance associated with this new rule, existing EQP tests are automatically executed when the new patch release is available. Extensions that pass these tests are marked as compatible with the new patch release and no action is required.

If an extension fails the tests, the developer receives an email notification instructing them to supply a new version within 30 days. If you receive such a notification, just re-submit a new version to Marketplace, ensuring it was tested against the latest patch version using the Cloud Docker environment.

An exception to this rule is the initial compatibility check in October 2021 when extensions will be verified against {{ site.data.var.ee }} 2.4.3. Extensions that failed the tests this first time were given 60 days.

## Example notification

See the following example notification:

![Example delisting notification from the marketplace]({{ site.baseurl }}/marketplace/sellers/images/release-delisted.png)
