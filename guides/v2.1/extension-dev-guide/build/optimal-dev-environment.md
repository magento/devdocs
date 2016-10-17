---
layout: default
group: extension-dev-guide
title: Optimal Development Environment
subgroup: 03_Build
menu_title: Optimal development environment
menu_order: 1
version: 2.1
github_link: extension-dev-guide/build/optimal-dev-environment.md
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Overview

A development environment consists of the tools and processes involved in software development.
Whether you are writing a new Magento 2 extension or contributing to the [code base](https://github.com/magento/magento2){:target="_blank"}, the first step for any developer is setting up a development environment.
This article will guide you in optimizing or setting up your Magento 2 development environment.

## Development server

Your development server is where you deploy your code and test it against a running Magento application.
Its configuration should be as close to a production server as possible.

In your development server, make sure you are running the Magento application in [developer mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). 
You can enable this mode with the command `bin/magento deploy:mode:set developer`.

### Installation

The following is a list of the different ways you can install a development server:

* **External server installation**\\
  If you have a spare computer or server laying around, you can [install Magento 2]({{page.baseurl}}install-gde/bk-install-guide.html) for development.
* **Local installation**\\
  If you are developing on a machine that meets the system requirements, you can install and run Magento 2 locally.
* **Virtual Machine (VM) installation**\\
  Installing Magento 2 in a virtual environment allows you to run Magento 2 without the need to install a local [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)){:target="_blank"} stack.

  You can use a VM tool, such as [VirtualBox](https://www.virtualbox.org/wiki/VirtualBox){:target="_blank"}, together with a virtual environment tool, such as [Vagrant](https://www.vagrantup.com/){:target="_blank"} or [Docker](https://www.docker.com/){:target="_blank"}, to create reusable and shareable instances of Magento for development.

  A search for ["magento developer box"](https://github.com/search?utf8=%E2%9C%93&q=magento+developer+box){:target="_blank"} in GitHub provides a list of unofficial virtual machines configured for Magento development.

### Optimal Configuration

The following is a list of optimizations you can make on your development server:

* Install and use the latest supported version of PHP 7.
* Replace your MySQL database with [Percona](https://www.percona.com/software/mysql-database/percona-server){:target="_blank"}.
* Make sure you install and enable [PHP OPcache](http://php.net/manual/en/intro.opcache.php){:target="_blank"}.
* Xdebug is off by default. Enable this feature only when you need it because it requires a lot of memory and slows everything down.
  The `xdebug.max_nesting_level` configuration needs to be set to 200 or greater for Magento.
  You can increase the memory available to PHP to get an increase in performance with Xdebug on.
* If you need sample data, you can install it using [composer]({{page.baseurl}}install-gde/install/web/install-web-sample-data-composer.html) or by [cloning repositories]({{page.baseurl}}install-gde/install/web/install-web-sample-data-clone.html).
* To speed up front end development, [turn off merging of CSS and JavaScript](http://docs.magento.com/m2/ee/user_guide/system/file-optimization.html){:target="_blank"}.
* Make sure caching is turned on (this is the default behavior).
  Generally, only page cache and block cache should be turned off for development and turned back on when testing.
* [Opcache timestamp validation](http://php.net/manual/en/opcache.configuration.php#ini.opcache.validate-timestamps){:target="_blank"} should always be on for development.
  Development is impossible with opcache on and revalidation off because any PHP modification would require a cache reset.
