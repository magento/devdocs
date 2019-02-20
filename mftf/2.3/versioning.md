---
title: Versioning Policy for MFTF
---

This documemt describes the versioning policy for the Magento Functional Testing Framework (MFTF), including the version numbering schema.

## Backward Compatibility

In this context, backward compatibility means that when changes are made to the MFTF, all existing tests still run normally.
If a modification to MFTF forces tests to be changed, this is a backward incompatible change.

## Find your MFTF version number

To find the version of MFTF that you are using, run the Magento CLI command:

```bash
cd <magento_root>/
vendor/bin/mftf --version
```

## Versioning Policy

MFTF versioning policy follows [Semantic Versioning](https://semver.org/) guidelines.

### 3-component version numbers

X.Y.Z
| | |
| | +-- Backward Compatible changes (Patch release - bug fixes)
| +---- Backward Compatible changes (Minor release - new command)
+------ Backward Incompatible changes (Major release - new features)

For example:

- Magento 2 shipped with MFTF 2.3.9
- A patch is added to fix a bug: 2.3.10 (Increment Z = backward compatible change)
- New action command was added: 2.4.0 (Increment Y, set Z to 0 = backward compatible change)
- Another bug fix: 2.4.1 (Increment Z = backward compatible change)
- Major new features added to MFTF to support changes in Magento codebase: 3.0.0. (Increment X, reset Y and Z to 0 = backward incompatible change)

### Z release - patch

Patch version **Z** MUST be incremented if only backward compatible changes to tests are introduced.
For example, a fix which aims to resolve test flakiness might:

- Update an unreliable selector.
- Add a wait for an element.
- Update a data entity value.
  
### Y release - minor

Minor version **Y** MUST be incremented if a new, backward compatible test or test entity is introduced.
It MUST be incremented if any test or test entity is marked as deprecated.
It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.

### X release - major

A major release introduces backward incompatible changes to a test or test entity. This MUST increment the major version number.
It can include minor and patch level changes. You must reset the patch and minor version to 0 when you change the major version.