---
mftf-release: 2.3.6
---

# Setting up MFTF Standalone

MFTF is a root level Magento dependency, but it can also be downloaded and used as its own standalone application to generate and run MFTF test materials.

This is especially useful for development and contribution of MFTF, as it allows easy debugging and simpler git tracking of changes.

## Standalone Setup

Clone the MFTF repo:

```bash
$ git clone https://github.com/magento/magento2-functional-testing-framework.git
```

Run `composer install` at the MFTF root  and complete all normal setup steps using `bin/mftf` commands.

File structure for standalone MFTF test files differs slightly from the Magento-embedded structure:

* `.env` is located under `dev/.env`
* Test Modules are located under `dev/tests/functional/tests/MFTF/`


## Using Standalone with a Magento Repository

Standalone MFTF can also be used to generate and run tests from a Magento Directory outside of its own test directories.

### Remove MFTF root dependency in Magento

Locate the `composer.json` file in the Magento Repository and remove the line containing the MFTF dependency:

```
"magento/magento2-functional-testing-framework": "x.x.x",
```

{:.bs-callout .bs-callout-info}
MFTF uses the Magento's `app/autoload` to read Magento Modules, so the Magento MFTF dependency will supersede the standalone registered namespaces unless it is removed at the composer level.

### Define Magento path in .env

Locate the Magento directory and add a line to the standalone `.env` file containing the path:
```
MAGENTO_BP=<path_to_magento>
```

The `bin/mftf generate:` commands will now parse all `app/code` and `vendor` modules located inside the `MAGENTO_BP` provided.
