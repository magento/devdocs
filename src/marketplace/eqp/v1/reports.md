---
group: marketplace-api
title: Reports
migrated_to: https://developer.adobe.com/commerce/marketplace/guides/eqp/v1/reports/
layout: migrated
---

## User Reports

See the related section under [users](users.html#user-reports) for more information.

## Product Submission Reports

Products go through several reviews before being released on the Commerce Marketplace.  The results of these reviews typically contain detailed reports.  See the section on [test results](test-results.html).

## Marketplace Reports

This resource provides information on aggregated reports across the Marketplace sites. It may include aggregated metrics on overall page views, category-specific page views, EQP process-related metrics and more.

```http
GET /rest/v1/reports/metrics
GET /rest/v1/reports/metrics/:metric_name
```

 {:.bs-callout-info}
The Marketplace reports API specification is under refinement. More details will be announced in the future.
