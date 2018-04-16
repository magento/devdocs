---
layout: default
group:
subgroup:
title: Technology stack
menu_title: Technology stack
menu_order:
version: 2.1
github_link: architecture/arch-basics.md
---

## Architectural basics

### Magento technology stack

Magento's highly modular structure includes the following open-source technologies:

Stack components include:

* {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} (5.5 and 5.6)

* Coding standards PSR-0 (autoloading standard), PSR-1 (basic coding standards), and PSR-2 (coding style guide), PSR-3, PSR-4

* HTML5

* CSS3 (LESS {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} pre-processor)

* {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}JQuery{% endglossarytooltip %} (primary {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} library)

* RequireJS (library that helps load JavaScript resources on demand)

* Third-party libraries (Zend Framework 1, Zend Framework 2, Symfony)

* Apache 2.2, 2.4

* {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}Nginx{% endglossarytooltip %} 1.7

* MySQL 5.6

* {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} (dependency management package for PHP)

Optional stack components include:

* Varnish (caching)

* Redis (used for session or page caching)

* Solr (search engine)

Magento also provides an automated testing suite that includes - amongst others - unit, integration, functional and performance test scripts. Components include PHPUnit for the unit test framework and Selenium for the functional test framework.

This framework is included in `dev/tests`. The functional testing framework `mtaf` can be found in the separate repository https://github.com/magento/mtf. For more information, see the [Functional Testing Framework]({{page.baseurl}}/mtf/mtf_introduction.html) guide.

### Stack basics

Information about routing, caching, and indexing will be provided in a future sprint.

### Backward compatibility

Merchants and developers want the process of upgrading between revisions of Magento 2 to be as easy as possible. For merchants, the process must be cost-effective, while developers want their extensions to be forward-compatible for as long as possible.

To help mitigate these concerns, this release introduces a backward compatibility (BC) policy for PHP code. Magento 2.0 uses Semantic Versioning 2.0.0 to indicate whether a change breaks backward compatibility. Version numbers are in the format MAJOR.MINOR.PATCH, where:

* MAJOR indicates incompatible {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} changes

* MINOR indicates backward-compatible functionality has been added

* PATCH indicates backward-compatible bug fixes

The backward compatibility policy applies to PHP code annotated with @api.

We promise to be backward compatible for classes and methods annotated with @api within MINOR and PATCH updates to our components. As changes are introduced, we will annotate methods with @deprecated. The methods will be removed only with the next MAJOR component version. MAJOR changes will be scheduled no more than once per year; likely during the holiday season when site changes are unlikely.
