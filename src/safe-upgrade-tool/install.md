---
group: software-update-guide
title: Install
functional_areas:
  - Upgrade
---

The Safe Upgrade Tool (SUT) is a command line (CLI) tool that checks a Magento instance against a specific version by analyzing all the non-Magento modules installed on it.

## Workflow

The following diagram shows the expected workflow when running the SUT:

![SUT Diagram](img/mvp-diagram.png)

### Who is the SUT for?

The following use case describes the typical process for a Magento partner to upgrade a client's Magento instance:

1. A partner's software Engineer downloads the SUT and executes it during the beta phase of the newest Magento release.
1. The Engineer sees that there are several customized areas broken in the inventory and catalog modules and they also get a complexity score of X. See the [Developer information guide]({{ site.baseurl }}/safe-upgrade-tool/developer.html) for more information on the complexity score.
1. With this information, the Engineer is able to understand the complexity of the upgrade and is able to relay this information back to the partner's Account Manager.
1. The Account Manager creates a timeline and cost for the Magento upgrade, which allows them to get their manager's approval.
1. With their manager's approval, the Engineer works on the required code modifications to fix the broken modules.
1. The Engineer runs the SUT tool one more time with a Magento pre-release to ensure there are no new issues and that their code changes fixed the problems found during the beta phase.
1. Everything check’s out and the Engineeer pushes the code to a staging environment where automated tests confirm all tests are green, which allows them to release the latest Magento version to production the same day that the Magento pre-release is released.

## Prerequisites

See [prerequisites]({{ site.baseurl }}/safe-upgrade-tool/prerequisites.html).

{:.bs-callout-info}
You can run the SUT in any operating system. There is no requirement to run the SUT where your Magento instance is located. For example, you can install the SUT on one server and point it at your Magento installation on another server.

## Install

To install the SUT, you must install the necessary prerequisites:

*  Magento access keys
*  Composer
*  Node.js

Refer to the [SUT installation]({{ site.baseurl }}/safe-upgrade-tool/install.html#install).

### Magento access keys

You must have [Magento access keys]({{ site.baseurl }}/marketplace/sellers/profile-information.html#access-keys) to use the SUT. Add your Magento access keys to your `auth.json` file, which is located at `~/.composer` by default.

{:.bs-callout-warning}
Check your **COMPOSER_HOME** environment variable to see where the `auth.json` file is located.

The **public key** corresponds to the _username_ whereas the **private key** is the _password_:

### Example of Magento access keys

```json
    "http-basic": {
        "repo.magento.com": {
            "username": "YOUR_MAGENTO_PUBLIC_KEY",
            "password": "YOUR_MAGENTO_PRIVATE_KEY"
        }
    },
```

### Composer

Clone the [safe-upgrade-tool](https://github.com/magento-commerce/safe-upgrade-tool) repository and run `composer install` in your terminal to install dependencies.

{:.bs-callout-warning}
If the **Magento access keys** are not correctly configured, the SUT will not install and you will get errors when running the `composer install` command.

### Node.js

To install Node.js, see the Node.js [documentation](https://nodejs.dev/learn/how-to-install-nodejs).

## Third-party extensions

Magento recommends that you contact your search engine vendor to determine whether your extension is fully compatible with Magento 2.4.

See [Run the tool]({{ site.baseurl }}/safe-upgrade-tool/run.html) for information about executing the SUT tool.