---
layout: default
group: mftf
subgroup: 20 Getting started
title: Installation of the the Magento Functional Testing Framework
menu_title: Installation
menu_order: 1
version: 2.3
github_link: magento-functional-testing-framework/getting-started/installation.md
---

<div class="bs-callout bs-callout-info" markdown="1">
The framework and tests are still in development and located in the [magento-pangolin] organization.
A dependency for the framework is located in the `magento2ee` repository.<br/>
This solution is temporary.
</div>

If you visit the [magento-pangolin] organization the first time, you may see the `View invitation` button on top of the page. Just press the button to be able to open the repositories of the organisation.

## Step 1. Clone the magento2 source code repositories into one directory

```bash
$ mkdir mftf
$ cd mftf
$ git clone -b sprint-develop https://github.com/magento-pangolin/magento2ce.git
$ git clone -b sprint-develop https://github.com/magento-pangolin/magento2ee.git
```

## Step 2. Link the repositories to make `magento2ee` work properly

```bash
$ cd magento2ee
$ php -f dev/tools/build-ee.php -- --command=link --exclude=true
$ cd ..
```

## Step 3. Setup your authorization file in the `magento2ce` repository

This step enables you to configure [HTTP basic authentication] for Composer.

Create the `auth.json` file:

```bash
$ touch magento2ce/dev/tests/acceptance/auth.json
```

In the `auth.json`, add the `github-oauth` entry:

```json
{  "github-oauth": {
      "github.com": "<personal access token>"
   }
}
```

Replace `<personal access token>` with your [personal access token]. The token must have a scope `repo`.

## Step 4. Install dependencies

```bash
$ cd magento2ce/dev/tests/acceptance
$ composer install
```

<div class="bs-callout bs-callout-tip" markdown="1">
If you see an error like `404 Not Found`, update of your Composer can help.<br/>
`$ composer selfupdate`
</div>

## Step 5. Install Robo

In `magento2ce/dev/tests/acceptance`, run the following command:

```bash
vendor/bin/robo setup
```

[Learn more about Robo][robo]

## Step 6. Edit environment settings

In the `magento2ce/dev/tests/acceptance`, create a configuration file `.env` from `.env.example`:

```bash
$ cp .env.example .env
```

Open `.env` and add values that correspond to your system. The following list describes parameters, required to launch tests.

* `MAGENTO_BASE_URL` must contain a domain name of the Magento instance that will be tested. Example: `MAGENTO_BASE_URL=http`

* `MAGENTO_BACKEND_NAME` must contain a relative pass of the Admin area. Example: `MAGENTO_BACKEND_NAME=admin`

* `MAGENTO_ADMIN_USERNAME` must contain a user name required for authorization in the Admin area. Example: `MAGENTO_ADMIN_USERNAME=admin`

* `MAGENTO_ADMIN_PASSWORD` must contain a user password required for authorization in the Admin area. Example: `MAGENTO_ADMIN_PASSWORD=123123q`

* `DB_USERNAME` must contain a user name required for authorization in the Magento database. Example: `DB_USERNAME=root`

* `TESTS_BP` must contain a base path to a directory that contains this configuration file. Example: `TESTS_BP=/Users/dshevtsov/mftf/magento2ce/dev/tests/acceptance`

* `FW_BP` must contain a base path to a directory with the MFTF framework. Example: `FW_BP=/Users/dshevtsov/mftf/magento2ce/dev/tests/acceptance/vendor/magento/magento2-functional-testing-framework`

* `TESTS_MODULE_PATH` must contain a base path to functional tests. Example: `TESTS_MODULE_PATH=/Users/dshevtsov/mftf/magento2ce/dev/tests/acceptance/tests/functional/Magento/FunctionalTest`

## Step 7. Generate existing tests

In the `magento2ce/dev/tests/acceptance`, run the following command to generate tests as PHP classes from XML files:

```bash
$ vendor/bin/robo generate:tests
```



<!-- LINKS -->

[HTTP basic authentication]: https://getcomposer.org/doc/articles/http-basic-authentication.md#http-basic-authentication
[magento-pangolin]: https://github.com/magento-pangolin/
[personal access token]: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token
[robo]: http://robo.li/

