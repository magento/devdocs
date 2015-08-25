---
layout: default
group: install_trouble
subgroup: PHP issues
title: PHP settings errors
menu_title: PHP settings errors
menu_node:
menu_order: 1
github_link: install-gde/trouble/php/tshoot_php-set.md
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: TBD owned by Ogres -->

<h2 id="trouble-php-set">PHP settings errors</h2>
See <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_xdebug.html">During installation, xdebug maximum function nesting level error</a>.

<h3>asp-tags should be disabled (Parse error: syntax error, unexpected 'data' (T_STRING))</h3>

<a href="http://php.net/manual/en/ini.core.php#ini.asp-tags" rel="nofollow" target="_blank">asp-tags</a> on php.ini should be always disabled for correct work of Magento 2 software. Multiple templates have syntaxis for support abstract level on templates (use different templates engines like Twig etc.) wraped in <% %> tags, like this <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Catalog/view/frontend/templates/product/view/base-image.phtml">template</a> for display product image:

{% highlight PHP %} 
<a class="product photo<% if (typeof data.hasImg !== 'undefined') { %> placeholder<% } %>" href="<%- data.large %>">
            <span class="img photo container">
                <img
                    data-role="zoom-image"
                    class="photo image"
                    itemprop="image"
                    <% if (!data.fullSizeMode) { %>
                    data-large="<%- data.large %>" src="<%- data.medium %>"
                    <% } else { %>
                    src="<%- data.large %>"
                    <% } %>
                    alt="<%- data.title %>"/>
            </span>
        </a>
{% endhighlight %}

If asp-tags is enabled you will get error like "Parse error: syntax error, unexpected 'data' (T_STRING)..." because php trying to proccess this code as native php code which not can works for sure and should be processed by Magento template engine core instead.

So always turn off asp-tags in php.ini :

{% highlight PHP %} 
asp_tags = Off
{% endhighlight %}
