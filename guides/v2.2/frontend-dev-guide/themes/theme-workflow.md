---
layout: default
group: fedg
subgroup: A_Themes
title: Theme development workflow
menu_title: Theme workflow
menu_order: 3
version: 2.2
github_link: frontend-dev-guide/themes/theme-workflow.md
---


<div class="flow-intro" markdown="1">
Continue From:<br />
**Install Magento**
</div>

<div class="flow-arrow"> </div>

<div class="flow-block" markdown="1">

### Enable development mode

In the Magento root directory, run:

`php bin/magento deploy:mode:set developer`

{%collapsible Links to details%} 
* [About Magento modes]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html)
* [Get started with command-line configuration]({{page.baseurl}}config-guide/cli/config-cli-subcommands.html)
{%endcollapsible%}

<div class="bs-callout bs-callout-tip" markdown="1">
To check the current mode of your Magento instance, in the root directory, run:

`php bin/magento deploy:mode:show`
</div>
</div>

<div class="flow-arrow"> </div>

<div class="flow-block" markdown="1">
### Create basic theme files
In the `<magento_root>/app/design/frontend/<Your_Vendor>/<your_theme>` directory, create the following files:

- `theme.xml`
- `registration.php`
- (optionally) `composer.json`

For details, see [Create a new storefront theme]({{page.baseurl}}/frontend-dev-guide/themes/theme-create.html)
</div>

<div class="flow-arrow"> </div>

<div class="flow-block" markdown="1">
### Apply the theme

1. In the Admin Panel, go to **CONTENT** > **Design** > **Configuration**
2. Find the record corresponding to your store view and click **Edit**.
3. In the **Applied Theme** drop-down, select your newly created theme.
4. Click **Save Configuration**.

For details, see [Apply and configure a storefront theme]({{page.baseurl}}frontend-dev-guide/themes/theme-apply.html)
</div>

<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">

### Choose .less compilation mode
</div>
<div class="flow-arrow"></div>

<div class="flow-row">

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Grunt (recommended)
[Read more about how to install and use Grunt for styles compilation and debugging]({{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html)
<p class="q">do we need to add steps for Grunt as separate block? (like Add theme files to grunt)</p>
</div>
<div class="flow-arrow"></div>
<div class="flow-block" markdown="1">
#### Add theme files to grunt
</div>

</div>

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Client-side compilation
See [CSS preprocessing#client-side compilation mode]({{page.baseurl}}http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/css-topics/css-preprocess.html#client-side)
</div>

<div class="flow-nav top-bottom"></div>
</div>
<div class="flow-column">
<div class="flow-block" markdown="1">
#### Server-side compilation (default)
See [CSS preprocessing#server-side compilation mode]({{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html#server-side) 
</div>
<div class="flow-nav top-bottom"></div>
</div>

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Custom preprocessor
See [Using custom CSS preprocessor]({{page.baseurl}}frontend-dev-guide/css-topics/custom-preprocess-parent.html)
</div>
<div class="flow-nav top-bottom"></div>
</div>


</div>

<div class="flow-row">

<div class="flow-column">
<div class="flow-nav turn-right"></div>
</div>
<div class="flow-column">
<div class="flow-nav turn-left-right"></div>
</div>
<div class="flow-column">
<div class="flow-nav turn-left-right"></div>
</div>
<div class="flow-column">
<div class="flow-nav turn-left"></div>
</div>

</div>

<div class="flow-arrow"></div>



<div class="flow-block" markdown="1">
### Create your styles
See 
* [Quick start guide to working with styles]({{page.baseurl}}frontend-dev-guide/css-guide/css_quick_guide_overview.html)
* [Stylesheets in Magento themes]({{page.baseurl}}frontend-dev-guide/css-topics/css-overview.html)
* symlinks

<p class="q">do we need to make two options "create styles" and "override parent styles"?</p>
</div>
<div class="flow-arrow"></div>


<div class="flow-block" markdown="1">
### Debug
See:

* [Locate the CSS/Less file you need to change]({{page.baseurl}}frontend-dev-guide/themes/debug-theme.html) 
* [CSS source maps]({{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html#source_maps)
* [Track changes using Grunt]({{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html#use_cases)
</div>
<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">
### Cache
Clean cache files

See [Cache overview for frontend developers]({{page.baseurl}}frontend-dev-guide/cache_for_frontdevs.html) for details.
</div>
<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">
### Make sure that the same styles are delivered to production

When you finish developing and your styles are ready to go to production, you can configure your grunt/gulp less compiler to minify compiled code, disable source maps generation and then copy the compiled files to `/app/design/frontend/Vendor/dark/web/css` folder next to “root” source files. So, they will be used in static content deploy instead of running backend compilation (and static content deployment process will run faster).
</div>
<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">
### Switch to production mode

In the Magento root directory, run:

`php bin/magento deploy:mode:set production`

See [Magento modes]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html#mode-production) for details.
</dir>
<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">
### Deploy static content
The static view files deployment command enables you to write static files to the Magento file system when the Magento software is set for production mode.
<p class="q">Does it mean ready for production mode or set to production mode?</p>
</div>




