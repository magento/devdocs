---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Backward compatibility
menu_title: Backward compatibility
menu_order: 3
version: 2.0
github_link: architecture/back-compatibility.md
redirect_from: /guides/v2.0/architecture/backward-compatibility.html
---

## Overview

Merchants and developers want the process of upgrading between revisions of Magento 2 to be as easy as possible. For merchants, the process must be cost-effective, while developers want their extensions to be forward-compatible for as long as possible.

To help mitigate these concerns, this release introduces a backward compatibility (BC) policy for {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} code. Magento 2.0 uses Semantic Versioning 2.0.0 to indicate whether a change breaks backward compatibility. Version numbers are in the format MAJOR.MINOR.PATCH, where:

* *MAJOR* indicates incompatible {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} changes

* *MINOR* indicates backward-compatible functionality has been added

* *PATCH* indicates backward-compatible bug fixes

The backward compatibility policy applies to PHP code annotated with `@api`.

We promise to be backward compatible for classes and methods annotated with `@api` within MINOR and PATCH updates to our components. As changes are introduced, we annotate methods with `@deprecated`. The methods are removed only with the next MAJOR component version. We will strive to make MAJOR changes for a component no more than once per year.

For more information, see [Backward compatibility]({{page.baseurl}}/extension-dev-guide/backward-compatibility.html) in the PHP Developer Guide.

## Related topics

<a href="{{page.baseurl}}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>
