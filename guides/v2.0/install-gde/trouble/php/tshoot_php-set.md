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
See one of the following sections:

*   <a href="#trouble-php-xdebug">xdebug maximum function nesting level error</a>
*   <a href="#trouble-php-asptags">Errors display when you access a PHTML template</a>

<h3 id="trouble-php-xdebug">xdebug maximum function nesting level error</h3>

See <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_xdebug.html">During installation, xdebug maximum function nesting level error</a>.

<h3 id="trouble-php-asptags">Errors display when you access a PHTML template</h3>
Error text is typically:

    Parse error: syntax error, unexpected 'data' (T_STRING)

#### Solution: Set <code>asp_tags = off</code> in <code>php.ini</code>
Multiple templates have syntax for support abstract level on templates (use different templates engines like Twig) wraped in `<% %>` tags, like this <a href="{{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/templates/product/view/base-image.phtml" target="_blank">template</a> for displaying a product image:

{% highlight PHP %} 
<?php
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
?>
{% endhighlight %}

More information about <a href="http://php.net/manual/en/ini.core.php#ini.asp-tags" target="_blank">asp_tags</a>. 

Edit `php.ini` and set `asp_tags = off`. For more information, see <a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html#instgde-prereq-timezone">Set PHP configuration options</a>.
