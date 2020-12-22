---
group: installation-guide
title: How to get the Magento software
landing-page: Installation Guide
functional_areas:
  - Install
  - System
  - Setup
redirect_from:
  - /guides/v2.4/install-gde/continue-to-install.html 
---

You are among the 240,000 merchants worldwide who put their trust in our eCommerce software. We've gathered some information to help you get started with Magento and with your Magento installation.

We have some resources here to help get you started using the eCommerce platform of the future---Magento 2.

It’s what we do.

## How to get the Magento software {#install-get-software}

Check the availability of exciting new features and releases, and learn how you can obtain them, on our [Magento product availability page](https://devdocs.magento.com/release/availability.html).

Consult the following table for getting started with installing {{site.data.var.ce}} or {{site.data.var.ee}}.

<table>
    <tbody>
        <tr>
            <th>User needs</th>
            <th>Description</th>
            <th>High-level installation and upgrade steps</th>
            <th>Get started link</th>
        </tr>
    <tr>
        <td><p>Easy installation, command line, have your own server</p></td>
        <td><p>Some technical expertise, command line access to the Magento server.</p>
        </td>
        <td><ol><li>Downloads a compressed file that contains the Magento software.</li>
            <li>Extracts it on the Magento server or asks a network administrator to do so.</li>
            <li>Installs the Magento software using the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">command line</a>.</li>
            <li>Upgrades the Magento application and extensions using Composer and the <a href="{{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html">command line</a>.</li></ol>
        </td>
        <td><p><a href="{{ page.baseurl }}/install-gde/prereq/zip_install.html">Easy installation (own server)</a></p></td>
    </tr>
    <tr>
        <td><p>Integrator, packager</p></td>
        <td><p>Wants full control over all components installed, has access to the Magento server, highly technical, might repackage {{site.data.var.ce}} with other components.</p>
        </td>
        <td><ol><li>Creates a Composer <em>project</em> that contains the list of components to use.</li>
            <li>Uses Composer to update package dependencies; uses <code>composer create-project</code> to get the Magento metapackage.</li>
            <li>Installs the Magento software using the <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">command line</a>.</li>
        <li>Upgrades the Magento application and extensions using the  <a href="{{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html">command line</a>.</li></ol></td>
        <td><p><a href="{{ page.baseurl }}/install-gde/composer.html">Get the metapackage</a></p></td>
    </tr>
    <tr>
        <td><p>Contributing developer</p></td>
        <td><p>Contributes to the Magento codebase, files bugs, and customizes the Magento software. Highly technical, has their own Magento development server, understands Composer and GitHub.</p>
            <p>You <em>cannot</em> use Magento in a production environment.</p>
      <p>You must upgrade using <a href="{{ page.baseurl }}/install-gde/install/cli/dev_options.html">Composer and Git commands</a>.</p></td>
        <td><ol><li>Clones the Magento 2 GitHub repository.</li>
            <li>Uses Composer to update package dependencies.</li>
            <li>Installs the Magento software using <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">command line</a>.</li>
            <li>Upgrades the Magento software using <a href="{{ page.baseurl }}/install-gde/install/cli/dev_options.html">Composer and Git commands</a>.</li>
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
