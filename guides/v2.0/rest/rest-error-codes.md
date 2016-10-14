---
layout: default
group: rest
subgroup: A_rest
title: REST error codes
menu_title: REST error codes
menu_order: 7
version: 2.0
github_link: rest/rest-error-codes.md

---

This is the full list of REST error codes:
Code | Short description | Detailed description
--- | --- | ---
200 | OK | The request executed successfully.
400 | Bad request | The request contained an error related to the content of the request. This error code could indicate a a problem such as a missing required parameter or the supplied data didn't pass validation.
401 | Unauthorized | The caller was not authorized to perform the request. For example, the request included an invalid token or a user with customer permissions attempted to acess an object that requires administrator permissions.
403 | Forbidden | Access is not allowed for reasons that are not covered by error code 401.
404 | Not found | The specified REST endpoint does not exist.
405 | Not allowed |
406 | Not acceptable |
500 | Internal server error |



## Related topics


[Search using REST APIs]({{page.baseurl}}howdoi/webapi/search-criteria.html)
