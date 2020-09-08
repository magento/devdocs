---
group: installation-guide
title: Installation quick reference (tutorial)
functional_areas:
  - Install
  - System
  - Setup
---

We know it is challenging to install the Magento software. We would like to help you by simplifying the process as much as possible.

This topic assumes:

*  You have your own Magento server (you are not using a shared hosting provider).
*  You are starting the installation using `composer create-project`, which enables you to get the most recent Magento software and to add your own customizations to it, if desired.
*  Everything is installed on one host (database, web server, and so on).
*  The host you are installing on is either Ubuntu or CentOS.

   (You can use the same instructions to install on other UNIX distributions like RedHat Enterprise Linux or Debian, but Magento is not supported on Mac or Windows.)

*  Your host's IP address is `192.0.2.5`.

  This is just an example IP address that you will see in detailed examples throughout this topic. You can substitute it with whatever internal/external IP address matches your server.

*  You are installing to the `magento2` subdirectory under your web server's docroot (full path is `/var/www/html/magento2`)

   You can optionally set up static routing or a virtual host to install to a hostname instead of an IP but that is beyond the scope of this topic.

We have broken the installation process into three main parts: getting started, installing, and post-installation. We hope that what follows helps you; if you would like to suggest improvements, click **Edit this page on GitHub** at the top of this page and let us know.

## Precondition: How advanced are you?

Do you know what a "terminal" application is? Do you know what operating system your server runs? Do you know what Apache is?

If not, see the [Installation overview][].

## Installation part 1: Getting started

1. See the [system requirements][].
1. If your system lacks any requirements, see the prerequisites documentation:

   *  [Apache][]
   *  [PHP][]
   *  [MySQL][]
   *  [Elasticsearch][]

1. Just as importantly, set up the [Magento file system owner][] on the server.
1. Switch to the [Magento file system owner][].

### Get the Magento software

When all prerequisites have been met, get the Magento software using [Composer][] as follows:

```bash
cd <web server docroot directory>
```

```bash
composer create-project --repository=https://repo.magento.com/ magento/project-community-edition magento2
```

You are required to authenticate; see [Get your authentication keys][] for details. This downloads Magento code only; it does not install the software for you.

{:.bs-callout-tip}
Alternatively, you can also download a [Magento software archive][].

{% include install/file-system-perms-before_24.md %}

## Installation part 2: Installing the Magento software

You must install the Magento software using the [command line][].

{% collapsible Click to view the command-line installation %}

The following example shows how to install using the command line with the following options:

*  The Magento software is installed in the `/var/www/html/magento2` directory, which means your storefront URL is `http://192.0.2.5/magento2/`
*  The database server is on the same host as the web server.

   The database name is `magento`, and the username and password are both `magento`

*  Uses server rewrites
*  The Magento administrator has the following properties:

   *  First and last name are `Magento User`
   *  Username is `admin` and the password is `admin123`
   *  E-mail address is `user@example.com`

*  Default language is `en_US` (U.S. English)
*  Default currency is U.S. dollars
*  Default time zone is U.S. Central (America/Chicago)
*  Elasticsearch 7 is installed on `es-host.example.com` and connects on port 9200

```bash
bin/magento setup:install --base-url=http://192.0.2.5/magento2/ \
--db-host=localhost --db-name=magento --db-user=magento --db-password=magento \
--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
--admin-user=admin --admin-password=admin123 --language=en_US \
--currency=USD --timezone=America/Chicago --use-rewrites=1 \
--search-engine=elasticsearch7 --elasticsearch-host=es-host.example.com \
--elasticsearch-port=9200
```

Optionally switch to [developer mode]({{page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html).

```bash
cd <magento_root>/bin
```

```bash
php magento deploy:mode:set developer
```

{% endcollapsible %}

## Installation part 3: Post-installation

*  [Verify the installation][] was successful.
*  Learn about the [component management and system upgrade][] for future updates.

<!-- Link Definitions -->
[Installation overview]: {{page.baseurl }}/install-gde/bk-install-guide.html
[system requirements]: {{ page.baseurl }}/install-gde/system-requirements.html
[Apache]: {{page.baseurl }}/install-gde/prereq/apache.html
[PHP]: {{page.baseurl }}/install-gde/prereq/php-settings.html
[MySQL]: {{page.baseurl }}/install-gde/prereq/mysql.html
[Elasticsearch]: {{page.baseurl}}/install-gde/prereq/elasticsearch.html
[Magento file system owner]: {{page.baseurl }}/install-gde/prereq/file-sys-perms-over.html
[Composer]: https://glossary.magento.com/composer
[command line]: {{page.baseurl }}/install-gde/install/cli/install-cli.html
[Get your authentication keys]: {{page.baseurl }}/install-gde/prereq/connect-auth.html
[Magento software archive]: {{page.baseurl }}/install-gde/install/get-software.html
[Readiness check issues]:{{ page.baseurl }}/install-gde/trouble/readiness/tshoot_rc_main.html
[Verify the installation]: {{page.baseurl }}/install-gde/install/verify.html
[component management and system upgrade]: {{page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html
