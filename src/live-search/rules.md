---
group: live-search
title: Rules
ee_only: True
---

Live Search rules trigger actions based on a variety of query conditions and give merchants the ability to shape the search experience for various scenarios.

This initial release of Live Search rules is based on the query string that is entered by the shopper, rather than on the set of returned results. A query string can include alphanumeric characters and capitalization is ignored. As with facets and synonyms, rules are stored in `protobuf dynamo`. At query time, the search service retrieves rules through `grpc` calls to `search-admin-service`.

{:.bs-callout-info}
Refer to [Rules]({{ site.user_guide_url }}/live-search/rules.html) in the _{{site.data.var.ee}} User Guide_ for information about rule setup and use.
