---
layout: default
group: cloud
subgroup: 15_howto
title: Install a theme
menu_title: Install a theme
menu_order: 60
menu_node: 
version: 2.0
github_link: cloud/howtos/custom-theme.md
---

## How to install a theme {#cloud-howto-theme}
This topic discusses how to install a theme either by extracting its code to the Magento file system or using Composer. 

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Install a theme manually {#cloud-howto-theme-man}
To install a theme manually, you must have the theme's code, either in a compressed archive or in a directory structure similar to the following:

{% highlight xml %}
<VendorName>
  ├── composer.json
      ├── etc
      │   └── view.xml
      ├── media
      ├── registration.php
      ├── theme.xml
      └── web
          ├── css
          │   └── source
          ├── fonts
          ├── images
          └── js
{% endhighlight %}

{% collapsible To install a theme manually: %}

1.	Copy the theme's code under `<Magento root dir>/app/design/frontend` for a storefront theme or `<Magento root dir>/app/design/adminhtml` for an Admin theme.

    Make sure the top-level directory is `<VendorName>`; otherwise, the theme won't install properly.

    For example

        cp -r ExampleTheme <Magento root dir>/app/design/frontend
3.  Confirm the theme copied to the correct place.

    *   Storefront theme: `ls <Magento root dir>/app/design/frontend`
    *   Admin theme: `ls <Magento root dir>/app/design/adminhtml`

    A sample follows:

        ExampleTheme Magento
2.	Add and commit files:

		git add -A && git commit -m "Add theme"
3.	Push the files to your branch:

		git push origin <branch name>
4.	Wait for deployment to complete.
5.	Log in to the Magento Admin.
6.	Click **Content** > Design > **Themes**.

	The theme displays in the right pane.

{% endcollapsible %}

### Install a theme using Composer {#cloud-howto-theme-compose}
Installing a theme using Composer is the same as installing any other extension using Composer. See [Install extensions]({{ page.baseurl }}cloud/howtos/install-components.html) for details.

{% collapsible To summarize the procedure: %}

1.  Purchase the theme from Magento Marketplace.
2.  Get the theme's Composer name.
3.  Change to your Magento root directory and enter the command:

        composer require <vendor>/<name>:<version>

    For example,

        composer require zero1/theme-fashionista-theme:1.0.0
4.  Wait for dependencies to update.
5.  Enter the following commands:

        git add -A && git commit -m "Add theme"
        git push origin <branch name>
5.  Log in to the Magento Admin.
6.  Click **Content** > Design > **Themes**.

    The theme displays in the right pane.

#### Related topics
*	[Install extensionss]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

{% endcollapsible %}
