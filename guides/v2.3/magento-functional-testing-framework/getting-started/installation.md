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

<!-- LINKS -->

[HTTP basic authentication]: https://getcomposer.org/doc/articles/http-basic-authentication.md#http-basic-authentication
[magento-pangolin]: https://github.com/magento-pangolin/
[personal access token]: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token

