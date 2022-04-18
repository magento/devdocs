---
group: dod
title: DoD - Backward Compatibility
---

## Overview

All backward incompatible changes should be approved and covered by static tests to meet the "Definition of Done" (DoD).

## Backward Compatibility

### Functional Backward Compatibility

**Functional backward compatibility** means the behaviour of the application is preserved.

-  Existing product features and functionality must be retained during any changes to the code.
-  Any backward-incompatible functional changes must be approved by a product owner.
-  The documentation should explain the justification and provide a business value.

### Technical Backward Compatibility

**Technical backward compatibility** means the technical interfaces are preserved.

Technical interfaces include PHP interfaces or classes, CLI commands, URLs, or any other interfaces that can be used by 3rd-party developer, system integrator, or user of Magento.
Any change to an interface that can lead to a broken integration is a breaking technical change.
Technical interfaces and the corresponding level of change are described in [Code Changes][0] and [Module Version Dependencies][1].

Technical backward compatibility must be retained between PATCH (marketing) versions of Magento products. It should also be retained between MINOR (marketing) releases if possible.
Any breaking changes must be approved by an architect, product owner and release manager.

For more information, see [Magento's backward compatibility policy][2] and [Versioning][3] documents.

[0]:{{ site.gdeurl }}/extension-dev-guide/versioning/codebase-changes.html
[1]:{{ site.gdeurl }}/extension-dev-guide/versioning/dependencies.html
[2]:{{ site.baseurl }}/contributor-guide/backward-compatible-development/
[3]:{{ site.gdeurl }}/extension-dev-guide/versioning/index.html
