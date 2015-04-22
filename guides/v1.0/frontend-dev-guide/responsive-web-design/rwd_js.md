---
layout: default
group: fedg
subgroup: E_rwd
title: JavaScript in Magento responsive design
menu_title: JavaScript in Magento responsive design
menu_order: 4
github_link: frontend-dev-guide/responsive-web-design/rwd_js.md
---

<h2>Overview</h2>

In the Magento application, to optimize page loading, the <a href="http://requirejs.org/" target="_blank">RequireJS</a> module loader is integrated, and JavaScript is excluded from the page head block. RequireJS uses asynchronous loading to decrease page load time and enables you to specify dependencies between JavaScript resources in your responsive theme.

<p class="q">Where do we specify dependencies? should we add this info? is it only for responsive theme, or we can just say "theme"?...</p>

<p class="q">We say here that JS is excluded from the page header, and then later suggest to include in default.head.block....</p>

<h2>JavaScript for responsiveness in the Blank theme</h2>

The Blank theme uses the following scripts to responsively relocate page elements by <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">viewport</a>:
<ul>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/js/responsive.js" target="_blank"><code>responsive.js</code></a></li>
<li><a href="https://github.com/paulirish/matchMedia.js/" target="_blank"><code>matchMedia.js</code></a>, used by <code>responsive.js</code></li>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/js/navigation-menu.js" target="_blank"><code>navigation-menu.js</code></a></li>
</ul>

The script files are located in the file system as follows:
<pre>
├── app/design/frontend/Magento/blank/web/js/
    ├── responsive.js
    ├── navigation-menu.js
├── lib/web/
    ├── matchMedia.js
</pre>

If your theme inherits from Blank, you do not need to additionally include these files. In other case to be able to use the scripts, you need to include them in the <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_Theme/layout/default_head_blocks.xml</code> file as described in <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-manage.html#layout_markup_css">Add Javascript and CSS</a>. The script files should be copied to <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/js/</code>, except <code>matchMedia.js</code>, which is located in the library, and can be included from its original location.



See one of the following sections for more information:

*	<a href="#fedg_rwd_js_resp">responsive.js</a>
*	<a href="#fedg_rwd_js_nav">navigation-menu.js</a>


<h2 id="fedg_rwd_js_resp">responsive.js</h2>

The <code>responsive.js</code> script implements specific responsive functions for the Blank theme. To manipulate JavaScript for the desktop or mobile viewports, <code>responsive.js</code> calls the <code>mediaCheck()</code> anonymous function from <code>matchMedia.js</code>.

<p class="q">Or "which is responsible for reaching breakpoints"</p>

The <code>mediaCheck</code> call follows:

<script src="https://gist.github.com/xcomSteveJohnson/16b30d482f0512f88d89.js"></script>
<pre>
// mediaCheck call that handles adjusting the position of page elements at a breakpoint
 
 /*...*/
    mediaCheck({
          media: '(min-width: 768px)',
          entry: $.proxy(function() {
            /* Here the function which toggles page elements from desktop to mobile mode is called */
          },this),
          exit: $.proxy(function() {
            /* Here the function which toggles page elements from mobile to desktop mode is called */
          },this)
    });
/*...*/
</pre>
<p class="q">It looks different now (see below)</p>

<pre>
mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
            (function () {

                var productInfoMain = $('.product-info-main'),
                    productInfoAdditional = $('#product-info-additional');

                if (productInfoAdditional.length) {
                    productInfoAdditional.addClass('hidden');
                    productInfoMain.removeClass('responsive');
                }

            })();

            var galleryElement = $('[data-role=media-gallery]');

            if (galleryElement.length &amp;&amp; galleryElement.data('mageZoom')) {
                galleryElement.zoom('enable');
            }

            if (galleryElement.length &amp;&amp; galleryElement.data('mageGallery')) {
                galleryElement.gallery('option', 'disableLinks', true);
                galleryElement.gallery('option', 'showNav', false);
                galleryElement.gallery('option', 'showThumbs', true);
            }

            setTimeout(function () {
                $('.product.data.items').tabs('option', 'openOnFocus', true);
            }, 500);
        },
        // Switch to Mobile Version
        exit: function () {
            $('.action.toggle.checkout.progress')
                .on('click.gotoCheckoutProgress', function () {
                    var myWrapper = '#checkout-progress-wrapper';
                    scrollTo(myWrapper + ' .title');
                    $(myWrapper + ' .title').addClass('active');
                    $(myWrapper + ' .content').show();
                });

            $('body')
                .on('click.checkoutProgress', '#checkout-progress-wrapper .title', function () {
                    $(this).toggleClass('active');
                    $('#checkout-progress-wrapper .content').toggle();
                });

            var galleryElement = $('[data-role=media-gallery]');

            setTimeout(function () {
                if (galleryElement.length &amp;&amp; galleryElement.data('mageZoom')) {
                    galleryElement.zoom('disable');
                }

                if (galleryElement.length &amp;&amp; galleryElement.data('mageGallery')) {
                    galleryElement.gallery('option', 'disableLinks', false);
                    galleryElement.gallery('option', 'showNav', true);
                    galleryElement.gallery('option', 'showThumbs', false);
                }
            }, 2000);

            setTimeout(function () {
                $('.product.data.items').tabs('option', 'openOnFocus', false);
            }, 500);
        }
    });
</pre>

In <code>responsive.js</code>, you can see how the following elements are toggled from the mobile to the desktop version:

<ul>
<li>Checkout progress. <br>
For the mobile viewport, the checkout progress block on the checkout page is moved by CSS to be displayed under the checkout steps (for the desktop, it is displayed on the left-hand side), and it becomes a toggled block by means of JavaScript. By default, the checkout progress information is hidden in the “Your Checkout Progress” section and it becomes visible after you click it.</li>



<li>Product image zoom on product page.<br> This element is switched off for the mobile viewport and is switched on for the desktop viewport.</li>
<p class="q">Is it correct to call it "element"?</p>
</ul>

<h2 id="fedg_rwd_js_nav">navigation-menu.js</h2>

Responsible for rearranging navigation and header links for the desktop and mobile viewports. See one of the following sections for more information:

*	<a href="#fedg_rwd_js_nav_mobile">Mobile navigation</a>
*	<a href="#fedg_rwd_js_nav_desktop">Desktop navigation</a>

<h3 id="fedg_rwd_js_nav_mobile">Mobile navigation</h3>

In a mobile viewport, <code>navigation-menu.js</code> copies the existing navigation menu `<nav class="navigation">`, moves it from the desktop position in the page source code, and inserts it before the global wrapping tag `<div class="page wrapper">`.

`navigation-menu.js` also adds the links (**Sign in**, **Register**, and so on) and the Settings block (language switcher, currency switcher) to the Mobile navigation.

The Mobile navigation moves left and it slides from the left side when the navigation menu button is clicked.

Sample HTML:

<script src="https://gist.github.com/xcomSteveJohnson/6e00b3139e039bf8c966.js"></script>

Sample of how it might look:

![In a mobile viewport, navigation displays on the left.]({{ site.baseurl }}common/images/rwd_js_nav_mobile.png)

<h3 id="fedg_rwd_js_nav_desktop">Desktop navigation</h3>

In a desktop viewport, the script returns the default elements sequence in the source code:

<script src="https://gist.github.com/xcomSteveJohnson/eadce4824923cf19f412.js"></script>

Sample of how it might look:

![In a desktop viewport, navigation displays at the top.]({{ site.baseurl }}common/images/rwd_js_nav_desktop.png)





