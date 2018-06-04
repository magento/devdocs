---
group: arch-guide
subgroup: Logical View
title: Third-party libraries
menu_title: Third-party libraries
menu_order: 5
version: 2.0
github_link: architecture/archi_perspectives/third-party-libs.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/third-party-libs.html
---

Magento depends on a set of external libraries. You can use {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} to manage these dependencies. Composer downloads all of the external libraries that are included in its main configuration file and installs them under its default installation directory (`vendor/`). Third-party libraries include the Zend framework files and the Symfony libraries.

There are some required libraries that Composer does not load. These reside in `lib/` and include {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} libraries (none of which are loaded by Composer) and a few {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} libraries. (You can also use Composer to manage dependencies between various components within Magento.)

If you are extending your Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} to interact with third-party applications, you might need to include additional external libraries. These external libraries can be as simple as a wrapper for an {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} of a third-party product you are integrating with your Magento storefront, or an entire framework.
