---
layout: default
group: config-guide
subgroup: 04_CLI
title: Configure and run cron
menu_title: Configure and run cron
menu_node:
menu_order: 100
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-cron.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-cron.html
---

#### Contents
{: .no_toc}

* TOC
{:toc}

To run cron in a web browser, see <a href="{{page.baseurl}}config-guide/secy/secy-cron.html">Secure cron.php to run in a browser</a>

## Overview of cron {#config-cli-cron-overview}

Several Magento features require at least one cron job, which schedules activities to occur in the future. A partial list of these activities follows:

*	Catalog price rules
*	Newsletters
*	Generating Google sitemaps
*	Customer Alerts/Notifications (product price change, product back in stock)
*	Reindexing
*	Private sales (Magento EE only)
*	Automatic updating of currency rates
*	All Magento e-mails (including order confirmation and transactional)

We recommend you run cron as the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>. Do *not* run cron as `root`; we recommend against running cron as the web server user.

<div class="bs-callout bs-callout-warning">
    <p>You can no longer run <code>dev/tools/cron.sh</code> because the script has been removed.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento depends on proper cron job configuration for many important system functions, including indexing. Failure to set it up properly means Magento won't function as expected.</p></span>
</div>

UNIX systems schedule tasks to be performed by particular users using a *crontab*, which is a file that contains instructions to the cron daemon that tell the daemon in effect to "run this command at this time on this date". Each user has its own crontab, and commands in any given crontab are executed as the user who owns it.

See one of the following sections:

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-cron-bkg">Run cron in the background</a>
*	<a href="#config-cli-cron-group">Configure and run cron using the command line</a>

## First steps {#config-cli-before}

{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

## Run cron in the background {#config-cli-cron-bkg}

This section discusses how to run all Magento cron jobs every minute, which is the recommended interval for both Magento Community Edition (CE) and Enterprise Edition (EE).

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Cron is critical for Magento operation; among other things, it's the only way to reindex on an ongoing basis, it generates automated e-mails, newsletters, the sitemap, and so on.</p></span>
</div>

Run Magento cron jobs as the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.

{% include config/setup-cron.md %}

## Configure and run cron using the command line {#config-cli-cron-group}

This section discusses how to run cron at any time using the command line. You can optionally configure a cron group for a custom module as discussed in the next section.

See one of the following sections:

*	<a href="#config-cli-cron-group-conf">Configure cron groups for custom modules</a>
*	<a href="#config-cli-cron-group-run">Run cron from the command line</a>

### Configure cron groups for custom modules {#config-cli-cron-group-conf}

This section discusses how to optionally create a cron group for a custom module. If you don't need to do this, continue with the next section.

A *cron group* is a logical group that enables you to easily run cron for more than one process at a time. Most Magento modules use the `default` cron group; some modules use the `index` group.

If you're implementing cron for a custom module, it's your choice of whether or not to use the `default` group or a different group.

To configure a cron group for your module, create a `crontab.xml` file in your module directory:
`<your component base dir>/<vendorname>/module-<name>/etc/crontab.xml`

For one group, the file should have the following contents:

{%highlight xml%}
<config>
    <group id="<group_name>">
        <job name="<job_name>" instance="<classpath>" method="<method>">
            <schedule><time></schedule>
        </job>
    </group>
</config>
{%endhighlight%}

where:

|Value|Description|
|---|---|
|`group_name`|Name of the cron group. The group name doesn't have to be unique. You can run cron for one group at a time.|
|`job_name`|Unique ID for this cron job.|
|`classpath`|Class to be instantiated (classpath).|
|`method`|Method in `classpath` to call.|
|`time`|Schedule in [cron format](http://www.nncron.ru/help/EN/working/cron-format.htm){:target="_blank"}. Omit this parameter if the schedule is defined in the Magento database or other storage.|

The resulting `crontab.xml` with two groups may look like this:

{%highlight xml%}
<config>
    <group id="default">
        <job name="<job_1_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
        <job name="<job_2_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
    </group>
    <group id="index">
        <job name="<job_3_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
        <job name="<job_4_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
    </group>
</config>
{%endhighlight%}

As an example, see <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/crontab.xml" target="_blank">Magento_Customer crontab.xml</a>.

#### Specifying Cron group options {#specify-cron-group-options}

You may declare a new group and specify its configuration options (all of which run in store view scope) via the `cron_groups.xml` file, located in:

`<your component base dir>/<vendorname>/module-<name>/etc/cron_groups.xml`

Below is an example of the `cron_groups.xml` file:

{%highlight xml%}
<config>
    <group id="<group_name>">
        <schedule_generate_every>1</schedule_generate_every>
        <schedule_ahead_for>4</schedule_ahead_for>
        <schedule_lifetime>2</schedule_lifetime>
        <history_cleanup_every>10</history_cleanup_every>
        <history_success_lifetime>60</history_success_lifetime>
        <history_failure_lifetime>600</history_failure_lifetime>
        <use_separate_process>1</use_separate_process>
    </group>
</config>
{%endhighlight%}

where:

|Option|Description|
|---|---|
|`schedule_generate_every`|Frequency (in minutes) that schedules are written to the `cron_schedule` table.|
|`schedule_ahead_for`|Time (in minutes) in advance that schedules are written to the `cron_schedule` table.|
|`schedule_lifetime`|Schedule lifetime in minutes.|
|`history_cleanup_every`|Time (in minutes) that cron history is kept in the database.|
|`history_success_lifetime`|Time (in minutes) that the record of successfully completed cron jobs are kept in the database.|
|`history_failure_lifetime`|Time (in minutes) that the record of failed cron jobs are kept in the database.|
|`use_separate_process`|This feature is only available for Magento v2.1 and later.|

### Run cron from the command line {#config-cli-cron-group-run}

Command options:

	magento cron:run [--group="<cron group name>"]

where `--group` specifies the cron group to run (omit this option to run cron for all groups)

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must run cron twice: the first time to discover tasks to run and the second time to run the tasks themselves.</p></span>
</div>

#### Related topics

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
