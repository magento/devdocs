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
* Server-side (default)
* Client-side
* Grunt (recommended)
* Own pre-processor
<div class="flow-arrow"></div>

<div class="flow-row">

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Grunt (recommended)
</div>
<div class="flow-arrow"></div>
<div class="flow-block" markdown="1">
#### Add theme files to grunt
</div>

</div>

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Client-side compilation
</div>
<div class="flow-nav top-bottom"></div>
</div>

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Server-side compilation
</div>
<div class="flow-nav top-bottom"></div>
</div>

<div class="flow-column">
<div class="flow-block" markdown="1">
#### Other methods
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
</div>
<div class="flow-arrow"></div>


<div class="flow-block" markdown="1">
### Debug
</div>
<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">
### Cache
</div>
<div class="flow-arrow"></div>

<div class="flow-block" markdown="1">
### Deploy static content
</div>
