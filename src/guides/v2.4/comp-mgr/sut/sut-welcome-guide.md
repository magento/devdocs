---
group: software-update-guide
title: Install the safe upgrade tool
functional_areas:
  - Upgrade
---

Welcome to the Magento Safe Upgrade Tool (SUT).

SUT is a CLI tool that checks a magento instance against a specific version by analysing all the non-magento modules installed in it.

## Who is SUT for?

One of the main use cases we are taking into account describes a regular process for a partner to upgrade one of their Magento stores. This is how the process will be:

1. A partner's engineer, Larissa, will download the Safe Upgrade Tool and execute it during the beta phase of the newest Magento release. 

- After she runs the tool she will see that there are several customized areas broken in the inventory and catalog modules and she will also get a complexity score of X. With this information, she will be able to understand the complexity of the upgrade and will be able to relay this information back to the account manager who will then create a timeline and cost for the Magento upgrade which will allow them to get the ecomm manager's approval. Merchants will love having this information 5 weeks before GA.

2. With the merchant's approval, Larissa will work on the required code modifications to fix the 2 modules that were broken.

3. With Magento pre-releases Larissa will run the Safe Upgrade tool one more time to ensure there were no new issues and her code changes fixed the problems found in Beta. Everything check’s out and she will push the code to Staging where the automated tests will confirm all tests are green which will allow them to release the latest Magento version to Production the same day as Magento pre-release is released.

We’ve seeing a trend with Magento partners around fixed annual pricing for upgrades. Examples are Kensium, Wagento, and BlueAcorn https://www.wagento.com/lp/no-hassle-updates-magento-2. We believe this complexity score will help with this trend and allow for easier planning and budgeting. We could easily see in the future that all complexity scores under a certain threshold are automatically approved with no merchant intervention for an easier upgrade for all parties involved.

## SUT Workflow

The following diagram shows the expected workflow when running SUT:

> Example of the SUT workflow

![SUT Diagram](img/mvp-diagram.png)

## Prerequisites

See the [prerequisites checklist for SUT]({{page.baseurl}}/guides/v2.4/comp-mgr/sut/prereq-sut-checklist.html) for the minimum requisites required to run SUT.

{:.bs-callout .bs-callout-info}
SUT should run in any operating system. It is not required to run the tool where your magento instance is located.

## SUT installation 

In order to install SUT, it is required that you check/install the necessary prerequisites mentioned earlier:

- Magento access keys
- Composer
- Node.js

### Magento access keys

Check that you have the **Magento access keys** in your system. If you do not have them, create an account at the [Magento marketplace](https://marketplace.magento.com/).

Then, you will be able to create the **Magento access keys**.

See the [Access keys guide]({{page.baseurl}}/marketplace/sellers/profile-information.html) topic for more information on creating access keys.

Once you create the access keys, add them to your `auth.json` file, which is located by default in your `~/.composer` folder.

{:.bs-callout .bs-callout-warning}
Check your **COMPOSER_HOME** environment variable to see where the `auth.json` file is located.

The **public key** corresponds to the _username_ whereas the **private key** is the _password_:

> Example of Magento access keys

```json
    "http-basic": {
        "repo.magento.com": {
            "username": "YOUR_MAGENTO_PUBLIC_KEY",
            "password": "YOUR_MAGENTO_PRIVATE_KEY"
        }
    },
```

### Composer

Clone this repository and, from the **safe-upgrade-tool** folder run `composer install` in your terminal to install its dependencies. 

{:.bs-callout .bs-callout-warning}
If the **Magento access keys** are not correctly configured, SUT will not be fully installed and you will get errors when running the `composer install` command in your terminal.

### Node.js

To install _Node.js_ in your system, check the [_Node.js_](https://nodejs.dev/learn/how-to-install-nodejs) page for more information.

## Third-party extensions

Magento recommends that you contact your search engine vendor to determine whether your extension is fully compatible with Magento 2.4.

See the [use SUT guide]({{page.baseurl}}/guides/v2.4/comp-mgr/sut/use-sut-guide.html) for information about running SUT.