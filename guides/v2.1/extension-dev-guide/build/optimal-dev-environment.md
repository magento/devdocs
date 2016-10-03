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

## Prerequisite skills and knowledge

As a developer, the most important tool for development is your personal knowledge.
Development using the Magento 2 framework requires knowledge in the following topics:

* [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)){:target="_blank"} - The essential principles needed to create maintainable and extendible code.
* [PHP](http://php.net/){:target="_blank"} - This is the programming language used for developing Magento 2 code.
* [HTML](https://en.wikipedia.org/wiki/HTML){:target="_blank"}, [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets){:target="_blank"}, and [JavaScript](https://www.javascript.com/){:target="_blank"} - Languages used for [frontend development]({{page.baseurl}}frontend-dev-guide/bk-frontend-dev-guide.html).
* [Magento architecture]({{page.baseurl}}architecture/arch_whatis.html) - Developers should be familiar with the architectural concepts used in Magento such as the [Model-View-Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller){:target="_blank"} pattern and the [Command Query Responsibility Segregation](http://martinfowler.com/bliki/CQRS.html){:target="_blank"} principle.
* [Dependency Injection]({{page.baseurl}}extension-dev-guide/depend-inj.html) - An important design pattern used in Magento to handle dependencies across classes and modules.

## Tools for development

A developer cannot create code without a proper set of tools.
The following is a list tools and applications needed for Magento 2 development. 

### Integrated Development Environment (IDE)

You can write source code using the most basic text editor, but you will miss out on useful features such as syntax highlighting, code completion, and integrations for testing and debugging that IDEs provide.
Using an IDE can boost your productivity by providing support during code development, testing, and debugging.

[PhpStorm](https://www.jetbrains.com/phpstorm/){:target="_blank"} is an example of an IDE that contains useful features for Magento 2 development.

Here is a [list of other IDEs](https://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments#PHP){:target="_blank"} that support PHP.

### Version control system

[Git](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller){:target="_blank"} is the preferred version control system for Magento 2 development because of its distributed nature and advanced merging process.
Git is one of the tools you can use to get a copy of the Magento source code and keep it updated.

### Testing framework

A testing framework provides test automation and prevents you from wasting your time on manually performing unit and regression tests.

The [PHPUnit](https://phpunit.de/) framework is the basis for Magento's [Functional Testing Framework]({{page.baseurl}}mtf/mtf_introduction.html).
Developers should learn how to use these frameworks to create automated tests in their projects.

### JavaScript task runner

If you are doing any front end development that involve CSS, you will need to download and use [Grunt](http://gruntjs.com/){:target="_blank"} to compile your `.less` files for deployment.
Use the command [`grunt watch`]({{page.baseurl}}frontend-dev-guide/css-topics/css_debug.html) to reload your changes automatically in the browser.

[Gulp](http://gulpjs.com/){:target="_blank"} is another JavaScript build system you can use as an alternative to Grunt for front end development.
For example, the [`magento2-frontools`](https://github.com/SnowdogApps/magento2-frontools){:target="_blank"} project is a set of front end tools based on Gulp.

## Sandbox server

Your sandbox server is the development server where you deploy your code and test it against a running Magento application.
It's configuration should be as close to a production server as possible.

### Installation

The following is a list of the different ways you can install a sandbox server:

* **External server installation**\\
  If you have a spare computer or server laying around, you can [install Magento 2]({{page.baseurl}}install-gde/bk-install-guide.html) for testing as long as it meets the [system requirements]({{page.baseurl}}install-gde/system-requirements-tech.html).
* **Local installation**\\
  If you are developing on a Linux-based environment with Apache, MySQL, and PHP installed, you can run Magento 2 locally.
* **Virtual Machine (VM) installation**\\
  Installing Magento 2 in a virtual environment allows you to run Magento 2 without the need to install a [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)){:target="_blank"} stack.

  You can use a VM tool, such as [VirtualBox](https://www.virtualbox.org/wiki/VirtualBox){:target="_blank"}, together with a virtual environment tool, such as [Vagrant](https://www.vagrantup.com/){:target="_blank"} or [Docker](https://www.docker.com/){:target="_blank"}, to create reusable and shareable instances of Magento for development.

### Optimal Configuration

The following is a list of optimizations you can make on your sandbox server:

* Make sure you are running the Magento application in [developer mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). 
  You can enable this mode with the command `bin/magento deploy:mode:set developer`.

  Unless the constructor has changed, this mode lets you skip the [code compile]({{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html) process.
* Install and use the latest supported version of PHP 7.
* Replace your MySQL database with [Percona](https://www.percona.com/software/mysql-database/percona-server){:target="_blank"}.
* Make sure you install and enable [PHP OPcache](http://php.net/manual/en/intro.opcache.php){:target="_blank"}.
* Xdebug is off by default. Enable this feature when you need it because it requires a lot of memory.
  As an alternative, you can increase the memory available to PHP.
* [Turn on caching]({{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html) for the parts you do not need to test or validate and disable the parts your code affects. 
  Flush the cache when there is a valid need to refresh the cached files.
* If you need sample data, you can install it using [composer]({{page.baseurl}}install-gde/install/web/install-web-sample-data-composer.html) or by [cloning repositories]({{page.baseurl}}install-gde/install/web/install-web-sample-data-clone.html).
* To speed up front end development, [turn off merging of CSS and JavaScript](http://docs.magento.com/m2/ee/user_guide/system/file-optimization.html){:target="_blank"}.
* [Opcache timestamp validation](http://php.net/manual/en/opcache.configuration.php#ini.opcache.validate-timestamps){:target="_blank"} should always be on for development.
  Development is impossible with opcache off because any PHP modification would require a cache reset.
