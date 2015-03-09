---
layout: default
group: release-notes
subgroup: Release Notes
title: Changes
menu_title: Changes
menu_node: 
menu_order: 3
github_link: release-notes/changes.md
---

<h2 id="changes">Changes in this release</h2>

*   <a href="#change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>
*   <a href="#change-devbeta-sampledata">Magento sample data is available only if you update composer.json</a>

<h3 id="change-devbeta-uninstall">Updating to version 0.42.0-beta11 or later from beta10 or earlier</h3>
This change applies to the following situation only:

*   You currently have version 0.42.0-beta10 or earlier
*   You're updating to version 0.42.0-beta11 or later

<div class="bs-callout bs-callout-info" id="info">
    <p>As a result of this change, you must first <em>uninstall</em> the Magento software and then reinstall it.</p>
</div>
{% include install/versionbeta10upgr.html %}

For details, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-magento-updatebeta11">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>

<h3 id="change-devbeta-sampledata">Magento sample data is available only if you update composer.json</h3>

To install the optional Magento 2 sample data, you must update `composer.json`, run `composer update`, and run the Magento 2 installer to update the database.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento 2 versions 0.42.0-beta10 and later require you to install only one sample data package instead of two. This package is currently named <code>"magento/sample-data": "0.42.0-beta10"</code>. Be sure to confirm the current version at <a href="http://packages.magento.com/#magento/sample-data" target="_blank">packages.magento.com</a>.</p>
<p>If you're installing sample data for an earlier version, see <a href="#installgde-install-sample-old">Sample data for earlier Magento versions</a>.</p></span>
</div>

See <a href="{{ site.gdeurl }}/install-gde/install/sample-data.html">Enable optional Magento sample data</a>.



