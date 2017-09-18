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
A dependency for the framework is located in the [magento2ee] repository. This solution is temporary, until we are ready to push the framework in a public repository.
</div>

## Step 1. Clone the magento2 source code repositories into one directory

```bash
$ mkdir mftf
$ cd mftf
$ git clone https://github.com/magento/magento2ce.git
$ git clone https://github.com/magento/magento2ee.git
$ git clone https://github.com/magento/magento2b2b.git
```

## Step 2. Link the repositories to make `magento2ee` work properly

```bash
$ cd magento2ee
$ php -f dev/tools/build-ee.php -- --command=link --exclude=true
$ cd ..
```

## Step 3. Setup your authorization file in the `magento2ce` repository

This step enables you to configure your credentials to run Composer commands under the `dev/tests/acceptance` directory.

Create the `auth.json` file from the `auth.json.sample`:

```bash
$ cd magento2ce
$ cp auth.json.sample auth.json
$ cd ..
```

Add the `github-oauth` entry as the following:

```json
{  "github-oauth": {
      "github.com": "<your personal access token>"
   }
   ,"http-basic": {
      "repo.magento.com": {
         "username": "<public-key>",
         "password": "<private-key>"
      }
   }
}
```

And paste your [personal access token].

## Step 4. Install dependencies from `composer.json`

```bash
$ cd magento2ce/dev/tests/acceptance
$ composer install
```


<!-- LINKS -->

[magento2ee]: https://github.com/magento/magento2ee
[personal access token]: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token

