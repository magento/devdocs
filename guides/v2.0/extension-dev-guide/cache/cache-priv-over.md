---
layout: default
group: extension-dev-guide
subgroup: 08_Caching
title: Page caching overview
menu_title: Page caching overview
menu_order: 16
menu_node:
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: extension-dev-guide/cache/cache-priv-over.md
redirect_from:
  - /guides/v2.0/config-guide/cache/cache-priv-over.html
  - /guides/v2.1/config-guide/cache/cache-priv-over.html
  - /guides/v2.2/config-guide/cache/cache-priv-over.html
---

{% include cache/cache_overview.md%}

<div class="bs-callout bs-callout-info" id="info">
  <p>Only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="&#95;blank">GET</a> and <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4" target="&#95;blank">HEAD</a> requests are cacheable. For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="&#95;blank">RFC-2616 section 13</a>.</p>
</div>

### Public and private content {#config-cache-over-pubpriv}
*Private* content on a page is intended for one user only; for example, a customer name or personalized recommendations for a logged-in customer. Rendering private content in a cached page is sometimes referred to as *hole punching* and we'll discuss it in more detail in the next topic.

#### Next
[Public and private content]({{ page.baseurl }}config-guide/cache/cache-priv-priv.html)
