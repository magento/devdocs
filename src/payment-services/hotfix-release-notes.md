---
group: release-notes
title: Commerce Payments Hotfix Release Notes
---

These release notes document hotfixes of Commerce Payments and are published on an as-needed basis.

Each section below represents a specific, versioned Commerce Payments hotfix release, and the noted date reflects when the release notes were published.

Release notes include:

*  {:.fix} Improvements
*  {:.bug} Known issues

## v2020.08.1

Release date---*June 29, 2020* (EU region) and *June 30 2020* (other regions)

*  {:.fix}<!--PD-18436-->**Customer Service actions now available**---We fixed the error, caused by JavaScript assets in the Customer Service view in the OMS Admin, that was preventing users from using actions (depending on their individual permissions). Now, [actions in the Customer Service view](https://omsdocs.magento.com/userguides/customer-service/#actions), such as Cancel Order, New Return, and New Exchange, are available.

## v2020.06.1

Release date---*May 19, 2020* (EU region) and *May 20, 2020* (other regions)

*  {:.fix}<!--PD-18028-->**Updated source stock queries**---Now we include the source safety stock in the results of the [source stock queries](https://omsdocs.magento.com/userguides/products/inventory/#source-stock).

*  {:.fix}<!--PD-17974-->**Reduce size of database table**---We instituted a performance improvement for the overall order flow. Now, inside the Sales detail view, the External tab will contain data with a 60-day retention policy.
