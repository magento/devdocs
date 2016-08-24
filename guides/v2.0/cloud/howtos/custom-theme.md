---
layout: default
group: cloud
subgroup: 10_howto
title: Install a custom theme
menu_title: Install a custom theme
menu_order: 19
menu_node: 
version: 2.0
github_link: cloud/howtos/custom-theme.md
---

## Install a custom theme {#cloud-howto-theme}
This section discusses how to install a custom theme, either by extracting code or using Composer. For example, you can install a theme you purchased from Magento Marketplace or another source.

### Get started
To get started:

{% include cloud/cli-get-started.md %}

### Install a theme manually {#cloud-howto-theme-man}
To install a theme manually, you must have the theme's code, either in a compressed archive or in a directory structure similar to the following:

{% highlight xml %}
<VendorName>
├── composer.json
    ├── etc
    │   └── view.xml
    ├── media
    │   └── <file list>
    ├── registration.php
    ├── theme.xml
    └── web
        ├── css
        │   └── source
        ├── fonts
        ├── images
        └── js
{% endhighlight %}

To install a theme manually:

1.	Copy the theme's code under `<Magento root dir>/app/design/frontend` for a storefront theme or `<Magento root dir>/app/design/adminhtml` for an Admin theme.
2.	Add and commit files:

		git add -A && git commit -m "Add theme"
3.	Push the files to your branch:

		git push origin <branch name>
4.	Wait for deployment to complete.
5.	Log in to the Magento Admin.
6.	Click **Content** > Design > **Themes**.

	The theme displays in the right pane.

### Install a theme using Composer {#cloud-howto-theme-compose}
TBD



#### Related topics
*	[Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*	[Update components]({{page.baseurl}}cloud/howtos/update-components.html)
*	[Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)
