---
group: testing
title: Running Semantic Version Checker
functional_areas:
  - Testing
  - test
---

Executing the Magento 2 Semantic Version Checker is a simple process but, it requires an external tool to be done.

### Running Semantic Version Checker on local changes

To run the Semantic Version Checker on local changes, you need to:

**Step 1.** Clone the `magento-semver` tool to your local machine:

```bash
git clone git@github.com:magento/magento-semver.git
```

**Step 2.** Navigate to the cloned repository and run composer install to install the project dependencies:

```bash
cd magento-semver && composer install
```

**Step 3.** In order to run the Semantic Version Checker we need to have one folder with the feature changes and another folder with mainline code (without changes),
so you may need to clone the Magento repository to a separate folder to perform the comparison.

**Step 4.** Navigate the `magento-semver` folder and run the Semantic Version Checker compare command:

```bash
.bin/svc compare ../magento2-mainline ../magento2
```

The first parameter is the mainline code (2.3-develop branch) without any changes, and the second parameter is the path to the Magento with your feature changes.

As a result of this command you will get the results of the Semantic Version Checker tool.
