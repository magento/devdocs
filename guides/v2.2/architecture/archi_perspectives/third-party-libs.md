---
group: architecture-guide
title: Third-party libraries
menu_title: Third-party libraries
---

Magento depends on a set of external libraries. You can use [Composer](https://glossary.magento.com/composer) to manage these dependencies. Composer downloads all of the external libraries that are included in its main configuration file and installs them under its default installation directory (`vendor/`). Third-party libraries include the Zend framework files and the Symfony libraries.

There are some required libraries that Composer does not load. These reside in `lib/` and include [JavaScript](https://glossary.magento.com/javascript) libraries (none of which are loaded by Composer) and a few [PHP](https://glossary.magento.com/php) libraries. (You can also use Composer to manage dependencies between various components within Magento.)

If you are extending your Magento [storefront](https://glossary.magento.com/storefront) to interact with third-party applications, you might need to include additional external libraries. These external libraries can be as simple as a wrapper for an [API](https://glossary.magento.com/api) of a third-party product you are integrating with your Magento storefront, or an entire framework.
