---
group: frontend-developer-guide
title: Install a third-party storefront theme
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic

This topic describes how to install a third-party [theme](https://glossary.magento.com/theme) for a Magento 2 store.

To install a theme, you need to add its code to your Magento 2 instance code base, and then register it in the database. The way a theme is distributed determines how to do this:

-  If a theme is just a set of files, for example an archive, add the theme manually.
-  If a theme is a [Composer](https://glossary.magento.com/composer) package, install it using Composer.

The following sections contain more information about each installation flow.

## Prerequisites

[Set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html).

## Install a theme manually

To install a theme manually:

1. Make sure that the directory structure you are copying is `<VendorName>/<theme>`. And all the [theme files]({{ page.baseurl }}/frontend-dev-guide/themes/theme-structure.html) are in the `<theme>` directory.

1. Copy this directory to the `<Magento root dir>/app/design/frontend` directory.

## Install a theme as composer package

To install the theme as composer package, follow the instructions in the [Install, manage, and upgrade modules]({{ site.baseurl }}/cloud/howtos/install-components.html) topic.

-  Manually installed themes are stored in the `app/design/` directory. Themes loaded through Composer are located in the `vendor/` directory and can be stored anywhere in root.

-  When the application starts up, Composer executes each file included in the `autoload.files` section. `registration.php` then registers itself as a theme.

{:.bs-callout-info}
Composer-based themes are loaded from external sources and cannot be modified directly, whereas local themes are part of the project source code and therefore can be edited directly.

## Install a theme as an extension

If a theme is distributed on [Magento Marketplace](https://marketplace.magento.com/), see [Install the Extension]({{ site.baseurl }}/extensions/install/).

## Register a theme

After you create or install a theme, open the Magento [Admin](https://glossary.magento.com/admin) or reload any Magento Admin page. This way the theme gets registered and added to the database.

To make sure the theme is registered, in the Magento Admin navigate to **Content** > **Design** > **Themes**. If a theme is registered, it is displayed in the list of available themes.
