---
group: cloud-guide
subgroup: How To
title: Install a theme
menu_title: Install a theme
menu_order: 60
menu_node:
functional_areas:
  - Cloud
  - Setup
  - Theme
---

You can install one or multiple themes to use for one or all of your stores and sites in your project. Themes include multiple static files including images, fonts, CSS, JavaScript, PHP, and more to fully design your stores. You can add the theme by either by extracting its code to the Magento file system or using Composer.

## Get started with a branch {#branch}

We recommend using a branch for adding, configuring, and testing your theme.

{% include cloud/cli-get-started.md %}

## Install a theme manually {#manual}

To install a theme manually, you must have the theme's code, either in a compressed archive or in a directory structure similar to the following:

```xml
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
```

To install a theme manually:

1.	Copy the theme's code under `<Magento root dir>/app/design/frontend` for a storefront theme or `<Magento root dir>/app/design/adminhtml` for an Admin theme. Verify that the top-level directory is `<VendorName>`; otherwise, the theme will not install properly.

    For example:

        cp -r ExampleTheme <Magento root dir>/app/design/frontend
2.  Confirm the theme copied to the correct place.

    *   Storefront theme: `ls <Magento root dir>/app/design/frontend`
    *   Admin theme: `ls <Magento root dir>/app/design/adminhtml`

    A sample follows:

        ExampleTheme Magento
3.	Add and commit files:

		git add -A && git commit -m "Add theme"
4.	Push the files to your branch:

		git push origin <branch name>
5.	Wait for deployment to complete.
6.	Log in to the Magento Admin.
7.	Click **Content** > Design > **Themes**.

	The theme displays in the right pane.

## Install a theme using Composer {#composer}

Installing a theme using Composer is the same as installing any other extension using Composer. See [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html) for details.

To summarize the procedure:

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
