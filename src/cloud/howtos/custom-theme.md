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

1. Copy the theme's code under `<Magento root dir>/app/design/frontend` for a storefront theme or `<Magento root dir>/app/design/adminhtml` for an Admin theme. Verify that the top-level directory is `<VendorName>`; otherwise, the theme will not install properly.

   For example:

   ```bash
   cp -r ExampleTheme <Magento root dir>/app/design/frontend
   ```

1. Confirm the theme copied to the correct place.

   *  Storefront theme: `ls <Magento root dir>/app/design/frontend`
   *  Admin theme: `ls <Magento root dir>/app/design/adminhtml`

   A sample follows:

      ExampleTheme Magento

1. Add and commit files:

   ```bash
   git add -A && git commit -m "Add theme"
   ```

1. Push the files to your branch:

   ```bash
   git push origin <branch name>
   ```

1. Wait for deployment to complete.
1. Log in to the Magento Admin.
1. Click **Content** > Design > **Themes**.

   The theme displays in the right pane.

## Install a theme using Composer {#composer}

Installing a theme using Composer is the same as installing any other extension using Composer. See [Install, manage, and upgrade modules]({{ site.baseurl }}/cloud/howtos/install-components.html) for details.

To summarize the procedure:

1. Purchase the theme from Magento Marketplace.
1. Get the theme's Composer name.
1. Change to your Magento root directory and enter the command:

   ```bash
   composer require <vendor>/<name>:<version>
   ```

   For example,

   ```bash
   composer require zero1/theme-fashionista-theme:1.0.0
   ```

1. Wait for dependencies to update.
1. Enter the following commands:

   ```bash
   git add -A && git commit -m "Add theme"
   ```

   ```bash
   git push origin <branch name>
   ```

1. Log in to the Magento Admin.
1. Click **Content** > Design > **Themes**.

   The theme displays in the right pane.
