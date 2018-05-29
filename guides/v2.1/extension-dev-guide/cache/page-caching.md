---
group: extension-dev-guide
subgroup: 09_Full page caching
title: Page caching
menu_title: Full page caching
menu_order: 16
menu_node: parent
version: 2.1
github_link: extension-dev-guide/cache/page-caching.md
redirect_from:
  - /guides/v2.0/config-guide/cache/cache-priv-over.html
  - /guides/v2.1/config-guide/cache/cache-priv-over.html
  - /guides/v2.2/config-guide/cache/cache-priv-over.html
---

{% include cache/page-cache-overview.md%}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Only HTTP [GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3){:target="&#95;blank} and [HEAD](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4){:target="&#95;blank"} requests are cacheable. For more information about caching, see [RFC-2616 section 13](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html){:target="&#95;blank}.
</div>
