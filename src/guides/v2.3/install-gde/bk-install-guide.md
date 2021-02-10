---
title: How to get the Magento software
landing-page: Installation Guide
functional_areas:
  - Install
  - System
  - Setup
---

You are among the 240,000 merchants worldwide who put their trust in our eCommerce software. We have gathered some information to help you get started with Magento and with your Magento installation.

We have some resources here to help get you started using the eCommerce platform of the future---Magento 2.

## How to get the Magento software {#install-get-software}

Check the availability of exciting new features and releases, and learn how you can obtain them, on our [Magento 2.3 product availability page](https://devdocs.magento.com/release/availability.html).

Consult the following table for getting started with installing {{site.data.var.ce}} or {{site.data.var.ee}}.

{% include install/web/deprecated.md %}

<table>
    <tbody>
        <tr>
            <th>User needs</th>
            <th>Description</th>
            <th>High-level installation and upgrade steps</th>
            <th>Get started link</th>
        </tr>
    <tr>
        <td><p>Integrator, packager</p></td>
        <td><p>Wants full control over all components installed, has access to the Magento server, highly technical, might repackage {{site.data.var.ce}} with other components.</p>
        <p>Enables you to install the Magento software and extensions using either the <a href="{{ page.baseurl }}/install-gde/install/web/install-web.html">Web Setup Wizard</a> or the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">command line</a>.</p>
        <p>You can also upgrade the Magento application and extensions using the <a href="{{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html">Web Setup Wizard</a> or <a href="{{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html">command line</a>.</p></td>
        <td><ol><li>Creates a Composer <em>project</em> that contains the list of components to use.</li>
            <li>Uses Composer to update package dependencies; uses <code>composer create-project</code> to get the Magento metapackage.</li>
            <li>Installs the Magento software using either a command line or the Setup Wizard.</li>
        <li>Upgrades the Magento application and extensions using the Web Setup Wizard or command line.</li></ol></td>
        <td><p><a href="{{ page.baseurl }}/install-gde/composer.html">Get the metapackage</a></p></td>
    </tr>
    <tr>
        <td><p>Contributing developer</p></td>
        <td><p>Contributes to the Magento codebase, files bugs, and customizes the Magento software. Highly technical, has their own Magento development server, understands Composer and GitHub.</p>
            <p>Enables you to install the Magento software and extensions using either the <a href="{{ page.baseurl }}/install-gde/install/web/install-web.html">Web Setup Wizard</a> or the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">command line</a>.</p>
            <p>You <em>cannot</em> use Magento in a production environment.</p>
      <p>You <em>cannot</em> use the Web Setup Wizard to upgrade the Magento software and extensions. You must upgrade using <a href="{{ page.baseurl }}/install-gde/install/cli/dev_options.html">Composer and Git commands</a>.</p></td>
        <td><ol><li>Clones the Magento 2 GitHub repository.</li>
            <li>Uses Composer to update package dependencies.</li>
            <li>Installs the Magento software using either a command line or the Setup Wizard.</li>
            <li>Upgrades the Magento software using Composer and GitHub commands.</li>
            <li>Customizes code under the <code>app/code</code> directory.</li></ol></td>
        <td><p><a href="{{ page.baseurl }}/install-gde/prereq/dev_install.html">Clone the Magento repository</a></p></td>
    </tr>
    </tbody>
</table>

## Useful information

At any time during your installation, take advantage of our [installation quick reference (tutorial)] or [installation roadmap (reference)]. They're really easy to use; the tutorial walks you through a sample installation. The roadmap provides links to common tasks throughout the guide.

Use the links on the left side of the page to navigate topics in each part of the installation.

## Required server permissions

UNIX systems require `root` privileges to install and configure software like a web server, PHP, and so on. If you need to install this software, make sure you have `root` access.

You should *not* install the Magento software in the web server docroot as the `root` user because the web server might not be able to interact with those files.

You'll also need `root` privileges to create the [Magento file system owner] and add that owner to the web server's group. You'll use the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner) to run any commands from the command line and to set up the Magento cron job, which schedules tasks for you.

<!-- LINK DEFINITIONS -->

[installation quick reference (tutorial)]: {{ page.baseurl }}/install-gde/install-quick-ref.html
[installation roadmap (reference)]: {{ page.baseurl }}/install-gde/install-roadmap_part1.html
[Magento file system owner]: {{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html
