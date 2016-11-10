---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate data
menu_title: Migrate data
menu_node:
menu_order: 2
version: 2.0
github_link: migration/migration-migrate-data.md
redirect_from: /guides/v1.0/migration/migration-migrate-data.html
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Before you start

### Possible consistency errors {#migrate-command-data}

When you start migrating data, the Data Migration Tool runs the data consistency tests, and may display error messages. For more information on such errors and ways to fix them, read [Handle data consistency errors]({{page.baseurl}}migration/migration-tool-internal-spec.html#consistency-errors-migrate-data). 

### Routine preparations

1. Log in to Magento server as [the file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html).

2. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

See the [First steps]({{page.baseurl}}migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the data migration command {#migrate-data-cmd}
To start migrating data, run:

    bin/magento migrate:data [-r|--reset] {<path to config.xml>}

where:

* `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration

* `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The Data Migration Tool saves its current progress as it runs. If errors or user intervention stop it from running, the Tool resumes progress at the last known good state.</p>
  <p>To force the Data Migration Tool to run from the beginning, use the <code>--reset</code> argument. In that case, we recommend you restore your Magento 2 database dump to prevent duplicating previously migrated data.</p></span>
</div>

## What's next

<a href="{{page.baseurl}}migration/migration-migrate-delta.html">Migrate changes</a>
