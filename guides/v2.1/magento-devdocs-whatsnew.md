---
layout: full-width
group: whatsnew
title: What's new on DevDocs
github_link: magento-devdocs-whatsnew.md
---

This page contains recent changes that we think you'd like to know about.
We exclude from this list proofreading, spelling checks, and all minor updates.

## June 2018

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
[These changes](https://devdocs.magento.com/guides/v2.1/config-guide/multi-site/ms_nginx.html) show users how to simplify Nginx configs to host multiple Magento websites and store views with one virtual host file. It allows to that Nginx configuration to stay much cleaner, and more maintainable.|2.1.x, 2.2.x, 2.3.x|Technical changes|Jun 1

{% collapsibleh2 May 2018 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
Contribution with fix to the custom entry point script in [MAGE_DIRS](https://devdocs.magento.com/guides/v2.1/config-guide/bootstrap/mage-dirs.html).|2.1.x, 2.2.x, 2.3.x|Technical changes|May 29
Updated the GraphQL [Products endpoint](https://devdocs.magento.com/guides/v2.3/graphql/reference/products.html) to include functionality contributed by community members.|2.3.x|Technical changes|May 23
Added [Handling a REST API response](https://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/metadata.html#rest-response) to the MFTF Metadata.|2.2.x, 2.3.x|Technical changes|May 22
Added descriptions for the [new `magento config:set lock-env` and `lock-config` options](https://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-config-mgmt-set.html).|2.2.x|Technical changes|May 22
Removed `setup:cache:{command}` and `setup:indexer:{command}`from [config-cli-subcommands.md](https://devdocs.magento.com/guides/v2.1/config-guide/cli/config-cli-subcommands.html),  as they do not exist. Replaced with `cache:{command}` and `indexer:{command}` commands.|2.1.x, 2.2.x, 2.3.x|Technical changes|May 21
[Updated](https://devdocs.magento.com/guides/v2.2/config-guide/multi-site/ms_nginx.html) to show a way to pass the MAGE_RUN_TYPE and MAGE_RUN_CODE Nginx variables into PHP, and include the $MAGE_RUN_TYPE in the Nginx vhost files to show how one could specify website vs store.|2.1.x, 2.2.x, 2.3.x|Technical changes|May 15
Added filter attribute information in [GraphQL Product](https://devdocs.magento.com/guides/v2.3/graphql/reference/products.html)|2.3.x|Technical changes|May 10
Added configuration info for [creating nginx virtual hosts](https://devdocs.magento.com/guides/v2.0/config-guide/multi-site/ms_nginx.html#ms-nginx-vhosts) on Tutorial—Set up multiple websites or stores with nginx page.|2.x|Technical changes|May 10
Updated the Cloud build and deploy [environment variable](https://devdocs.magento.com/guides/v2.1/cloud/env/variables-intro.html) descriptions and samples.|2.1.x, 2.2.x, 2.3.x|Technical changes|May 08
You must bypass Fastly when profiling with [Blackfire](https://devdocs.magento.com/guides/v2.2/cloud/project/project-integrate-blackfire.html) in your Cloud Production environment.|2.1.x, 2.2.x|Technical changes|May 07
Added the [Reference architecture](https://devdocs.magento.com/guides/v2.2/performance-best-practices/reference-architecture.html) topic|2.2.x, 2.3.x|New topic|May 07
Contributed to [Linking properties of UI components]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html).|2.x|Technical changes|May 07
You must bypass Fastly when profiling with [Blackfire](https://devdocs.magento.com/guides/v2.2/cloud/project/project-integrate-blackfire.html) in your Cloud Production environment.|2.1.x, 2.2.x|Technical changes|May 07
You can trigger a [redeploy]({{ page.baseurl }}/cloud/reference/cli-ref-topic.html) of your Cloud environment.|2.1.x, 2.2.x, 2.3.x|Technical changes|May 05
Updated the example in [Example_logging database activity](https://devdocs.magento.com/guides/v2.2/config-guide/log/log-db.html)|2.2.x|Technical changes|May 04
Updated the backward incompatible changes between _2.2.0_ and _2.3-develop_ for [OpenSource](http://devdocs.magento.com/guides/v2.3/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.3/release-notes/backward-incompatible-changes/commerce.html).|2.3.x|Technical changes|May 02
Fixed the severity values in [MFTF annotations]({{ page.baseurl }}/magento-functional-testing-framework/release-2/test/annotations.html).|2.2.x, 2.3.x|Technical changes|May 02
Describes the highlights, fixed issues, and community contributions for Magento Open Source and Commerce 2.2.4. See [Magento Open Source 2.2.4 Release Notes](https://devdocs.magento.com/guides/v2.2/release-notes/ReleaseNotes2.2.4CE.html) and [Magento Commerce 2.2.4 Release Notes](https://devdocs.magento.com/guides/v2.2/release-notes/ReleaseNotes2.2.4EE.html) for more information.|2.2.x|New topic|May 02
Contributed a section about [Using PHP short tags in template PHTML files](https://devdocs.magento.com/guides/v2.2/frontend-dev-guide/templates/template-override.html#short-tags).|2.2.x|Technical changes|May 02
Added "custom database port" to the optional parameters section in the [Migration Guide](http://devdocs.magento.com/guides/v2.2/migration/migration-tool-configure.html#migration-configure).|2.x|Technical changes|May 02
Describes the highlights, fixed issues, and community contributions for Magento Open Source and Commerce 2.1.13. See [Magento Open Source 2.1.13 Release Notes](https://devdocs.magento.com/guides/v2.1/release-notes/ReleaseNotes2.1.13CE.html) and [Magento Commerce 2.1.13 Release Notes](https://devdocs.magento.com/guides/v2.1/release-notes/ReleaseNotes2.1.13EE.html) for more information.|2.1.x|New topic|May 02
[Magento 2.x GDPR compliance](http://devdocs.magento.com/guides/v2.2/architecture/gdpr/magento-2x.html)<br/>[Magento 1.x GDPR compliance](http://devdocs.magento.com/guides/v2.2/architecture/gdpr/magento-1x.html)|2.x|New topic|May 01
Added the [development environment recommendations]({{ page.baseurl }}/performance-best-practices/development-environment.html).|2.1.x, 2.2.x, 2.3.x|New topic|May 01
Documented the [Redis Sentinel settings](http://devdocs.magento.com/guides/v2.2/config-guide/redis/redis-session.html).|2.3.x|Technical changes|May 01
{% endcollapsibleh2 %}

{% collapsibleh2 April 2018 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
Added a new topic [Suite](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/suite.html) to the MFTF Guide along with documentation updates related to the 2.2.0 release of the framework.|2.2.x, 2.3.x|New topic|Apr 28
Updates from the 2018 Imagine Docathon.|2.x|Technical changes|Apr 27
Added [Error code mapping](http://devdocs.magento.com/guides/v2.3/payments-integrations/payment-gateway/error-code-mapper.html)|2.3.x|New topic|Apr 25
Added the ability to configure a read-only connection to a non-master node to receive read-only traffic for [Redis](http://devdocs.magento.com/guides/v2.2/cloud/env/variables-deploy.html#redisuseslaveconnection) and for [MariaDB](http://devdocs.magento.com/guides/v2.2/cloud/env/variables-deploy.html#mysqluseslaveconnection).|2.1.x, 2.2.x, 2.3.x|New|Apr 24
New [Smart wizards](http://devdocs.magento.com/guides/v2.2/cloud/env/smart-wizards.html) help you to verify your Cloud configuration follows best practices.|2.1.x, 2.2.x, 2.3.x|New|Apr 24
Added [Marketplace EQP API](http://devdocs.magento.com/guides/v2.2/marketplace/eqp/api.html) reference documentation.|2.x|New topic|Apr 21
We added a new topic about [Community Maintainers](http://devdocs.magento.com/guides/v2.2/contributor-guide/devdocs-maintainers.html) for the devdocs repository.|2.x|New topic|Apr 20
Added documentation for the [schema.graphqls](http://devdocs.magento.com/guides/v2.3/graphql/develop/create-graphqls-file.html) and completely revised the [resolvers](http://devdocs.magento.com/guides/v2.3/graphql/develop/resolvers.html) documentation. Also added new reference articles.|2.3.x|Major updates|Apr 13
Clarified the [New Relic APM]({{ page.baseurl }}/cloud/project/new-relic.html) procedures.|2.1.x, 2.2.x, 2.3.x|Technical changes|Apr 10
Updated information about how long we store [snapshots](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html).|2.1.x, 2.2.x, 2.3.x|Technical changes|Apr 10
Added the [Performance Best Practices](http://devdocs.magento.com/guides/v2.2/performance-best-practices/index.html) guide. It replaces the information formerly in the topic Magento Optimization Guide.|2.2.x, 2.3.x|New topic|Apr 10
Changed [CLI examples](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-mode.html) to include the `bin/magento` syntax and added guidance on adding `bin` to your system `PATH` to run commands from anywhere.|2.x|Updated|Apr 09
Removed the deprecated `--dry-run` CLI option from the [Deploy static view files topic](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-static-view.html).|2.2.x|Updated|Apr 09
Added a topic about [Metadata](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/metadata.html) to the MFTF Guide.|2.2.x, 2.3.x|New|Apr 05
Removed a confusing and obsolete topic from the [Onboarding tasks](http://devdocs.magento.com/guides/v2.2/cloud/onboarding/onboarding-tasks.html) section of the Magento Commerce (Cloud) guide.|2.x|Updated|Apr 04
Updated the [2.2 Programming Best Practices](http://devdocs.magento.com/guides/v2.2/ext-best-practices/extension-coding/common-programming-bp.html) topic with information about using the `after` plugin.|2.2.x|Updated|Apr 03
Added the `WARM_UP_PAGES` variable for customizing the list of pages to use to pre-load the cache. Available in the new [Post-deploy variables](http://devdocs.magento.com/guides/v2.1/cloud/env/variables-post-deploy.html) topic.|2.1.x, 2.2.x|New|Apr 02
Added an example of pushing logs with syslog using the .magento.env.yaml file. See the new [Logging handlers]({{ page.baseurl }}/cloud/env/log-handlers.html) topic.|2.1.x, 2.2.x|New|Apr 02
Added Elasticsearch 5.2 to the list of supported version in the [Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-elastic.html) guide.|2.2.x, 2.3.x|Updated|Apr 02
You can pre-load the cache using the new [`post_deploy` hook](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_magento-app.html#hooks).|2.1.x, 2.2.x|Updated|Apr 02
Added the `SKIP_HTML_MINIFICATION` environment variable to the Cloud [Environment variables reference](http://devdocs.magento.com/guides/v2.2/cloud/env/variables-intro.html) that skips copying the static view files in the `var/view_preprocessed` directory.|2.1.x, 2.2.x|Updated|Apr 02
Added the new CRYPT_KEY environment variable to the [Deploy variables reference](http://devdocs.magento.com/guides/v2.2/cloud/env/variables-deploy.html) as a way to supply cryptographic key to another environment when moving a database.|2.1.x, 2.2.x|Updated|Apr 02
Reorganized the Cloud [Configure environments](http://devdocs.magento.com/guides/v2.2/cloud/env/environments.html) section of the Cloud documentation. It is easier to distinguish the Application, Cloud, Build, and Deploy variables. The variable names also appear in each right-side page navigation for easier selection.<br/>Added the `SCD_ON_DEMAND` environment variable to generate static content when requested.|2.1.x, 2.2.x|Updated|Apr 02
Added a new topic for [extending the Data Migration Tool](http://devdocs.magento.com/guides/v2.2/migration/extend-the-tool.html).|2.x|New|Apr 02
{% endcollapsibleh2 %}

{% collapsibleh2 March 2018 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
Removed references to VPN connections from the [Magento Commerce (Cloud) guide](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-plans.html#vpn) because they are not currently supported.|2.x|Updated|Mar 30
Updated references to Fastly IP addresses in the [Magento Commerce (Cloud) guide](http://devdocs.magento.com/guides/v2.2/cloud/bk-cloud.html) with the list of preferred IP addresses provided by Fastly.|2.x|Updated|Mar 30
Added a link to the Private Packagist documentation in the [Package a component](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/package/package_module.html) topic.|2.x|Updated|Mar 26
Added new options to `generate:tests` in [Robo commands](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/commands/robo.html#generate).|2.2.x, 2.3.x|Updated|Mar 21
Added a cross reference about Redis to the [memcache](http://devdocs.magento.com/guides/v2.2/config-guide/memcache/memcache.html) topic.|2.x|Updated|Mar 21
Added a [descriptive video](http://devdocs.magento.com/guides/v2.0/contributor-guide/contributing.html) showing how to keep your fork updated with the latest changes.|2.x|Updated|Mar 20
Removed unnecessary guidance to run `npm update` after `npm install` when [Installing and Configuring Grunt](http://devdocs.magento.com/guides/v2.0/frontend-dev-guide/css-topics/css_debug.html#grunt_prereq).|2.x|Updated|Mar 20
Replaced the list of minor releases in the [Technology Stack](http://devdocs.magento.com/guides/v2.0/architecture/tech-stack.html) topic with a generic reference to system requirements|2.x|Updated|Mar 20
Added a section for backward incompatible changes between 2.0.17-2.0.18 in [OpenSource](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/open-source.html#releases-2_0_17-2_0_18) and [Commerce](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html#releases-2_0_17-2_0_18).|2.0.x|Updated|Mar 16
Added a section for backward incompatible changes between 2.1.11-2.1.12 in [OpenSource](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/open-source.html#releases-2_1_11-2_1_12) and [Commerce](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/commerce.html#releases-2_1_11-2_1_12).|2.1.x|Updated|Mar 16
Added a section for backward incompatible changes between 2.2.2-2.2.3 in [OpenSource](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html#releases-2_2_2-2_2_3) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html#releases-2_2_2-2_2_3).|2.2.x|Updated|Mar 16
Removed reference to minor versions of Magento in the [Extension Developer Guide](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/build/build.html).|2.x|Updated|Mar 15
The MFTF 2.1.0 has been released where we: <br/>[updated a CLI command `generate`](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/commands/robo.html#generate), <br/>[added a data type support for an argument of action group](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/test/action-groups.html#data-type-usage), <br/>[added a new action `selectMultipleOptions`](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/test/actions.html#selectmultipleoptions), <br>[updated principles in Assertions](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/test/assertions.html#principles)<br/> [added a new assertions `assertArrayIsSorted`](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/test/assertions.html#assertarrayIssorted)|2.2.x, 2.3 pre-release|Updated|Mar 13
Added support for PHP 7.1 in the [Magento Commerce (Cloud) Guide](http://devdocs.magento.com/guides/v2.2/cloud/requirements/cloud-requirements.html).|2.2.x|Updated|Mar 12
Added the force (`-f`) option to the static content deployment command in the [B2B installation](http://devdocs.magento.com/guides/v2.2/comp-mgr/install-extensions/b2b-installation.html) topic.||Updated|Mar 09
Updated the [Magento Commerce (Cloud) Guide Configure routes](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_routes.html) topic to deprecate the `:php` endpoint and to note that now you can use the dot (\.) symbol to separate the subdomain instead of using the triple dash (\-\-\-).|2.2.x|Updated|Mar 09
Removed old content related to the [multi-tenant code compiler](http://devdocs.magento.com/guides/v2.1/config-guide/cli/config-cli-subcommands-compiler.html).|2.1.x, 2.2.x|Updated|Mar 07
Added a CodeTriage badge to the [Contributor Guide](http://devdocs.magento.com/guides/v2.0/contributor-guide/contributing.html).|2.x|Updated|Mar 01

{% endcollapsibleh2 %}

{% collapsibleh2 February 2018 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
Release Notes for Magento 2.0.18 [Open Source](http://devdocs.magento.com/guides/v2.0/release-notes/ReleaseNotes2.0.18CE.html) and [Commerce](http://devdocs.magento.com/guides/v2.0/release-notes/ReleaseNotes2.0.18EE.html).|2.0.x|New|Feb 27
Release Notes for Magento 2.1.12 [Open Source](http://devdocs.magento.com/guides/v2.1/release-notes/ReleaseNotes2.1.12CE.html) and [Commerce](http://devdocs.magento.com/guides/v2.1/release-notes/ReleaseNotes2.1.12EE.html).|2.1.x|New|Feb 27
Release Notes 2.2.3 [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/ReleaseNotes2.2.3CE.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/ReleaseNotes2.2.3EE.html)|2.2.x|New|Feb 27
Added supported MySQL technologies to the [MySQL](http://devdocs.magento.com/guides/v2.2/install-gde/prereq/mysql.html) topic.|2.2.x|Updated|Feb 27
Updated the [DevDocs contributions](http://devdocs.magento.com/guides/v2.2/contributor-guide/contributing_docs.html) topic and published a new list of suggested topics for community contributions.|2.x|Updated|Feb 27
Formatting to improve consistency in the [Configuration Guide](http://devdocs.magento.com/guides/v2.0/config-guide/bootstrap/magento-modes.html).||Updated|Feb 26
Added upgrade path for Magento Cloud metapackage. | 2.1.x, 2.2.x | Updated | Feb 23
Added reference and [examples](http://devdocs.magento.com/guides/v2.2/cloud/env/working-with-variables.html#redis) for two, new [environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html#deploy)—`CACHE_CONFIGURATION` and `SESSION_CONFIGURATION`—that help with customizing Redis storage and default caching configuration. | 2.1.x, 2.2.x | Updated | Feb 20
Listed the `adminhtml` option in the [Observers best practices](http://devdocs.magento.com/guides/v2.0/ext-best-practices/extension-coding/observers-bp.html) topic.|2.x|Updated|Feb 09
The [MFTF-2 Guide](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-2/introduction.html) has been added to Magento 2.2 documentation|2.2.x|Updated|Feb 09
Learn how to customize and extend the acceptance functional tests using [Merging](http://devdocs.magento.com/guides/v2.3/magento-functional-testing-framework/release-2/merging.html) in the MFTF 2.|2.3 pre-release|New|Feb 07
We added a [new troubleshooting topic](http://devdocs.magento.com/guides/v2.2/cloud/trouble/message-queues.html) to help customers resolve an issue with message queues.|2.2.x|New|Feb 07
We added a [new troubleshooting topic](http://devdocs.magento.com/guides/v2.2/cloud/trouble/site-availability.html) to help customers identify and resolve site availability issue related to Redis.|2.x|New|Feb 01

{% endcollapsibleh2 %}

{% collapsibleh2 January 2018 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
Updated documentation about [how to create a payment token](http://devdocs.magento.com/guides/v2.2/payments-integrations/vault/payment-token.html).|2.2.x|Updated|Jan 31
Release notes for Magento Commerce (Cloud) [`ece-tools v2002.0.8`](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-tools.html#v200208).|2.2.x|Updated|Jan 31
We added instructions for [managing message queues](http://devdocs.magento.com/guides/v2.2/cloud/env/working-with-variables.html#manage-message-queues) on Magento Commerce (Cloud) using the `CRON_CONSUMERS_RUNNER` environment variable.|2.2.x|Updated|Jan 31
We merged `vendor/magento/ece-patches` with [`vendor/magento/ece-tools v2002.0.8`](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-tools.html#v200208). You no longer need to update the `vendor/magento/ece-patches` package separately.|2.2.x|Updated|Jan 31
You can now [manage build and deploy actions](http://devdocs.magento.com/guides/v2.2/cloud/project/magento-env-yaml.html) across all your environments—including Pro Staging and Production—using a `.magento.env.yaml` file.|2.2.x|New|Jan 31
You can now unlock specific stuck cron jobs in Magento Commerce (Cloud) with the [cron:unlock](http://devdocs.magento.com/guides/v2.2/cloud/trouble/reset-cron-jobs.html) command instead of stopping and re-launching all of them.|2.2.x|Updated|Jan 31
The deployment process creates backup files for the configuration files. You can restore the configuration files using the [restore](http://devdocs.magento.com/guides/v2.2/cloud/trouble/restore-configuration-files.html) command.|2.2.x|Updated|Jan 31
MFTF 1.0: Updated descriptions for the `before` and `after` attributes in [Actions](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/release-1/cest/actions.html)|2.2.x|Updated|Jan 23
Advanced Reporting: added more details to [Prerequisites](http://devdocs.magento.com/guides/v2.2/advanced-reporting/overview.html)|2.2.x|Updated|Jan 22
We updated the [quarterly contributors](http://devdocs.magento.com/guides/v2.2/contributor-guide/quarterly-contributors.html) page for Q4 2017.|2.x|Updated|Jan 18
MFTF: Updated [actions](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/cest/actions.html) and added [Changelog](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/changelog.html)|2.2.x|Updated|Jan 12
Added information about the index prefix when [configuring Elasticsearch](http://devdocs.magento.com/guides/v2.2/config-guide/elasticsearch/configure-magento.html), which is necessary when using a single Elasticsearch instance with multiple Magento installations, like Staging and Production environments.|2.1.x, 2.2.x|Updated|Jan 10
Created a [new topic](http://devdocs.magento.com/guides/v2.1/cloud/env/working-with-variables.html) describing different scenarios for working with environment variables to the Magento Commerce (Cloud) guide. For example, connecting an existing search or AMQP-based service to your Magento site.<br/>Added guidance for using these variables in the [Set up RabbitMQ](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-rabbit.html) and [Set up Elasticsearch](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-elastic.html) topics.|2.1.x, 2.2.x|New and Updated|Jan 10
[Added Magento Shipping release notes](http://devdocs.magento.com/guides/v2.2/release-notes/ReleaseNotesMagentoShipping2.2.x.html)|2.2.x|New|Jan 05
We added code examples to help explain the following [Technical Guidelines](http://devdocs.magento.com/guides/v2.2/coding-standards/technical-guidelines.html) related to class design:<br/>- 2.4. All dependencies MUST be requested by the most generic type that is required by the client object.<br/>- 2.6. Inheritance SHOULD NOT be used. Composition SHOULD be used for code reuse.<br/>- 2.1.4 Temporal coupling MUST be avoided.|2.x|Updated|Jan 03

{% endcollapsibleh2 %}

{% collapsibleh2 December 2017 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
Added details about backward incompatible changes between 2.0.0 and 2.2.0 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html#200---220-) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html#200---220-)|2.2.x|Updated|Dec 24
[Action Groups in the MFTF](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/cest/action-groups.html)|2.2.x|New|Dec 22
Added a new section in the Magento Commerce (Cloud) guide for release notes related to the [`ece-patches`](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-patches.html) Composer package.|2.2.x|New, Updated|Dec 20
Published release notes for the Magento Commerce (Cloud) [`ece-tools 2002.0.7`](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-tools.html#v200207) Composer package.|2.2.x|Updated|Dec 20
Added a new topic about setting up the [Bitbucket integration](http://devdocs.magento.com/guides/v2.2/cloud/project/bitbucket-integration.html) for Magento Commerce (Cloud).|2.x|New|Dec 18
You must prepend [environment variables](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_magento-app.html#variables) with `env:` when using the Magento Commerce (Cloud) Project Web Interface to override configuration settings.|2.x|Updated|Dec 14
Advanced reporting: [Overview](http://devdocs.magento.com/guides/v2.2/advanced-reporting/overview.html), [Modules](http://devdocs.magento.com/guides/v2.2/advanced-reporting/modules.html), [Data collection](http://devdocs.magento.com/guides/v2.2/advanced-reporting/data-collection.html), [Report XML](http://devdocs.magento.com/guides/v2.2/advanced-reporting/report-xml.html)|2.2.x|New|Dec 13
Added info about backward incompatible changes ([Open Source 2.1.10 - 2.1.11](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/open-source.html) and [Commerce 2.1.10-2.1.11](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/commerce.html); [Open Source 2.2.1 - 2.2.2](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce 2.2.1-2.2.2](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html); [B2B](http://devdocs.magento.com/guides/v2.2/release-notes/changes/b2b_changes.html))|2.1.x, 2.2.x|Updated|Dec 13
[Magento Functional Testing Framework Guide](http://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/introduction.html)|2.2.x|New|Dec 08
[Instant Purchase module](http://devdocs.magento.com/guides/v2.2/mrg/ce/instant-purchase/)|2.2.x|New|Dec 07
Revised guidance on which environments are limited to 5-minute cron intervals in the Magento Commerce (Cloud) guide. See [Configure cron settings in the Magento Admin](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html#add-cron) for more information.|2.2.x|Updated|Dec 06
Added a new topic to the Magento Commerce (Cloud) guide about [configuring email and Slack notifications](http://devdocs.magento.com/guides/v2.2/cloud/env/setup-notifications.html) for build/deploy actions in an environment.|2.2.x|New|Dec 06
Updated the following Magento Commerce (Cloud) topics to include details about static content compression during build/deploy phases:<br/>- [Configuration Management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html#cloud-confman-scd-over)<br/>- [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html)|2.2.x|Updated|Dec 06
Magento Commerce (Cloud) will now auto-generate an `app/etc/config.php` file if it doesn't detect one in your project directory during the build phase. Updated references to configuration management in the [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html) topic.|2.2.x|Updated|Dec 06
Replaced references to the `mysqldump` command with the new [`vendor/bin/ece-tools db-dump`](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-snap.html#db-dump) CLI command for Staging and Production environments in the Magento Commerce (Cloud) guide|2.2.x|Updated|Dec 06
[Tech guidelines: Added strict mode requirement 1.3.1](http://devdocs.magento.com/guides/v2.2/coding-standards/technical-guidelines.html#1-basic-programming-principles)|2.2.x|Updated|Dec 05

{% endcollapsibleh2 %}

{% collapsibleh2 November 2017 %}

Added a [new troubleshooting section](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html#reset-cron-jobs) to the Magento Commerce (Cloud) cron topic describing how to reset Magento cron jobs|2.2.x|Updated|Nov 30
Revised and added new content for Magento Commerce (Cloud) for custom Fastly VCLs including [Custom Fastly VCL snippets](http://devdocs.magento.com/guides/v2.2/cloud/configure/cloud-vcl-custom-snippets.html), [Custom whitelist VCL](http://devdocs.magento.com/guides/v2.2/cloud/configure/fastly-vcl-whitelist.html), [Custom blacklist VCL](http://devdocs.magento.com/guides/v2.2/cloud/configure/fastly-vcl-blacklist.html), [Custom extend Admin timeout VCL](http://devdocs.magento.com/guides/v2.2/cloud/configure/fastly-vcl-extend-timeout.html), [Custom redirect to Wordpress VCL](http://devdocs.magento.com/guides/v2.2/cloud/configure/fastly-vcl-wordpress.html), and [Custom block bad referer VCL](http://devdocs.magento.com/guides/v2.2/loud/configure/fastly-vcl-badreferer.html).|2.0.x, 2.1.x, 2.2.x, 2.x|New|Nov 29
Update content for Magento Commerce (Cloud) for [Composer](http://devdocs.magento.com/guides/v2.2/cloud/reference/cloud-composer.html) commands and files, add new content for [Git](http://devdocs.magento.com/guides/v2.2/cloud/reference/git-integration.html), added Security Scan Tool info to [Go live and launch](http://devdocs.magento.com/guides/v2.2/cloud/live/live.html), add .gitignore info to [Project structure](http://devdocs.magento.com/guides/v2.2/cloud/project/project-start.html), add notes to [Patch Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/project/project-patch.html), update information for upgrading Fastly in [Upgrade Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/project/project-upgrade.html), and updated redirects|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 29
Updated the [Devdocs Quarterly Contributors](http://devdocs.magento.com/guides/v2.2/contributor-guide/quarterly-contributors.html) page for Q3 2017||Updated|Nov 29
Updated Magento Commerce (Cloud) content for MS SQL Server drivers in [Configure your environments](http://devdocs.magento.com/guides/v2.2/cloud/env/environments.html#sqldriver)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 27
Updated and added content for Magento Commerce (Cloud) including [Theme troubleshooting](http://devdocs.magento.com/guides/v2.2/cloud/trouble/theme-troubleshooting.html), POP locations for [Set up Fastly](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/fastly.html), notes to [Set up cron jobs](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html), security for [Manage branches with the Project Web Interface](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-branch.html), worker information for [.magento.app.yaml](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_magento-app.html), and branch information in [Pro architecture](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-arch.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 27
Update troubleshooting content for [EAV and extension attributes](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/attributes.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 27
Updated Magento Commerce (Cloud) for [Import existing code into a project](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/first-time-setup_import-first-steps.html), [Prepare your existing Magento Commerce code](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/first-time-setup_import-prepare.html), [Import code and data to Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/first-time-setup_import-import.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 22
Added detailed backward incompatible changes descriptions for deltas of minor releases (Open Source [2.0.0 - 2.1.0](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/open-source.html) and [2.1.0-2.2.0](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html); Commerce  [2.0.0 - 2.1.0](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/commerce.html) and [2.1.0-2.2.0](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html))|2.1.x, 2.2.x|Updated|Nov 21
Removed detailed backward incompatible changes for deltas 2.0.7-2.1.0 and 2.1.9-2.2.0|2.1.x, 2.2.x|Updated|Nov 17
Updated the recommended Fastly module version 1.2.33 for Magento Commerce (Cloud): [Fastly](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-fastly.html), [Technologies and requirements](http://devdocs.magento.com/guides/v2.2/cloud/requirements/cloud-requirements.html), and [Magento Commerce (Cloud) third party licenses](http://devdocs.magento.com/guides/v2.2/release-notes/thirdparty-mccloud.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 15
Updated content for Magento Commerce (Cloud) including Configuration Management for [2.1.X](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html) and [2.2.X](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html), Deployment Process [2.0.X](http://devdocs.magento.com/guides/v2.0/cloud/reference/discover-deploy.html), [2.1.X](http://devdocs.magento.com/guides/v2.1/cloud/reference/discover-deploy.html), and [2.2.X](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 14
Updated [Set up Fastly](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/fastly.html) and [Fastly troubleshooting](http://devdocs.magento.com/guides/v2.2/cloud/trouble/trouble_fastly.html) for Magento Commerce (Cloud) for handling existing Fastly accounts|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 14
Updated how to [Configure Xdebug](http://devdocs.magento.com/guides/v2.2/cloud/howtos/debug.html) for Magento Commerce (Cloud).|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 13
Updated [Subscriptions and plans](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-plans.html) with information on options you can purchase including AWS Managed VPN Connection Service access|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 13
Published backward incompatible changes: [Open Source 2.0.16-2.0.17](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/open-source.html), [Open Source 2.1.9-2.1.10](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/open-source.html), [Open Source 2.2.0-2.2.1](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce 2.0.16-2.0.17](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html), [Commerce 2.1.9-2.1.10](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/commerce.html), [Commerce 2.2.0-2.2.1](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.0.x, 2.1.x, 2.2.x|Updated|Nov 09
Updated [Set up Magento B2B](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-b2b.html) with additional documentation links and error message updates for Magento Commerce (Cloud)|2.2.x|Updated|Nov 09
Updated Magento Commerce (Cloud) information for [Blackfire.io](http://devdocs.magento.com/guides/v2.2/cloud/project/project-integrate-blackfire.html) module enablement and environment naming and [New Relic APM](http://devdocs.magento.com/guides/v2.2/cloud/project/new-relic.html) for their university information|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 09
Added the ability to open a search results page when searching with the top bar. When entering a search term or phrase on any page, hit enter to open a full results page with faceted search options.|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 07
Updated [Magento application environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html) and [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html) with scopes and SCD_STRATEGY variable for Magento Commerce (Cloud) 2.2.1|2.2.x|Updated|Nov 07
Updated [New Relic APM](http://devdocs.magento.com/guides/v2.2/cloud/project/new-relic.html) license and environment information for Magento Commerce (Cloud)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 06
Update relationship name for [RabbitMQ](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-rabbit.html) service for Magento Commerce (Cloud)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 06
Update Magento Commerce (Cloud) content for deploy commands in [Deploy code and migrate static files and data](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-migrate.html)for new and existing Pro plans and [Magento application environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 06
Updated Fastly troubleshooting and supported features for Magento Commerce (Cloud) in [Fastly](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-fastly.html) and [Fastly troubleshooting](http://devdocs.magento.com/guides/v2.2/cloud/trouble/trouble_fastly.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Nov 03
{% endcollapsibleh2 %}

{% collapsibleh2 October 2017 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
[Added guideline on mocking auto-generated factories in Unit tests](http://devdocs.magento.com/guides/v2.1/test/testing.html#unit)|2.0.x, 2.1.x|Updated|Oct 31
Updated Magento Commerce (Cloud) content for Fastly including [Fastly](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-fastly.html), [Set up Fastly](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/fastly.html), [Custom Fastly VCL snippets](http://devdocs.magento.com/guides/v2.2/cloud/configure/cloud-vcl-custom-snippets.html), and [Troubleshoot Fastly](http://devdocs.magento.com/guides/v2.2/cloud/trouble/trouble_fastly.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 30
Add [B2B module set up](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-b2b.html) information for Magento Commerce (Cloud)|2.2.x|New|Oct 27
Update SSH tunneling info to Magento Commerce (Cloud) in [SSH and sFTP](http://devdocs.magento.com/guides/v2.2/cloud/env/environments-ssh.html) and [Manage branches with the CLI](http://devdocs.magento.com/guides/v2.2/cloud/env/environments-start.html).|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 25
Update database troubleshooting for Magento Commerce (Cloud) in Migrate and deploy static files and data for [2.1](http://devdocs.magento.com/guides/v2.1/cloud/live/stage-prod-migrate.html) and [2.2](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-migrate.html)|2.1.x, 2.2.x|Updated|Oct 24
Add new content for trial Onboarding Portal for Magento Commerce (Cloud) including [Subscription and plans](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-plans.html), [Onboarding tasks](http://devdocs.magento.com/guides/v2.2/cloud/onboarding/onboarding-tasks.html), [Onboarding Portal management](http://devdocs.magento.com/guides/v2.2/cloud/onboarding/onboarding-portal.html), [Prepare project environments](http://devdocs.magento.com/guides/v2.2/cloud/before/before-project-owner.html), and [Welcome to Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/bk-cloud.html)|2.0.x, 2.1.x, 2.2.x, 2.x|New|Oct 23
Updated content for Magento Commerce (Cloud) for the updated Pro projects in [Manage your project](http://devdocs.magento.com/guides/v2.2/cloud/project/projects.html), [Add Staging and Production to Pro projects](http://devdocs.magento.com/guides/v2.2/cloud/trouble/pro-env-management.html), [Deploy your store](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-live.html), [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html), [Prepare to deploy to Staging and Production](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-migrate-prereq.html), and [Test deployment](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-test.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 20
Added [more information about docroot](http://devdocs.magento.com/guides/v2.2/install-gde/basics/basics_docroot.html) and created a [new tutorial](http://devdocs.magento.com/guides/v2.2/install-gde/tutorials/change-docroot-to-pub.html) for modifying your web server's docroot to enhance the security of your Magento installation|2.x|Updated, New|Oct 18
Update Magento Commerce (Cloud) content for new features for Pro plan: [Manage your project](http://devdocs.magento.com/guides/v2.2/cloud/project/projects.html), [Add Staging and Production to Pro projects](http://devdocs.magento.com/guides/v2.2/cloud/trouble/pro-env-management.html), [Configure your project](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-basic.html), [Create and manage users](http://devdocs.magento.com/guides/v2.2/cloud/project/user-admin.html), [Manage branches with the Interface](http://devdocs.magento.com/guides/v2.2/cloud/project/project-webint-branch.html), [Magento Cloud CLI reference](http://devdocs.magento.com/guides/v2.2/cloud/reference/cli-ref-topic.html), [Welcome to Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/bk-cloud.html), [Starter architecture](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/starter-architecture.html), and [Pro architecture](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-arch.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 18
Update Magento Commerce (Cloud) content for [Starter develop and deploy workflow](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/starter-develop-deploy-workflow.html), [Pro develop and deploy workflow](http://devdocs.magento.com/guides/v2.2/cloud/welcome/discover-workflow.html), [Install Magento](http://devdocs.magento.com/guides/v2.2/cloud/before/before-setup-env-install.html), [Configuration management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html) and [Example of managing system-specific settings](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-initial.html), [Upgrade Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/project/project-upgrade.html), and [Welcome to Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.2/cloud/bk-cloud.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 17
Add [cron](http://devdocs.magento.com/guides/v2.2/cloud/configure/setup-cron-jobs.html) and [sFTP](http://devdocs.magento.com/guides/v2.2/cloud/env/environments-ssh.html#sftp) content for Magento Commerce (Cloud)|2.0.x, 2.1.x, 2.2.x, 2.x|New|Oct 12
[Added overview of DocBlock annotations usage in integration tests](http://devdocs.magento.com/guides/v2.2/test/integration/annotations.html)|2.0.x, 2.1.x, 2.2.x|New|Oct 11
Update Magento Commerce (Cloud) content for [Prepare project environments](http://devdocs.magento.com/guides/v2.2/cloud/before/before-project-owner.html), [First-time local development setup](http://devdocs.magento.com/guides/v2.2/cloud/access-acct/first-time-setup.html), [Clone and branch the project](http://devdocs.magento.com/guides/v2.2/cloud/before/before-setup-env-2_clone.html), [Deployment process](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-deploy.html), and [Magento application environment variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 11
Published backward incompatible changes between 2.0.15 and 2.0.16 versions in [Open Source](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.0/release-notes/backward-incompatible-changes/commerce.html)|2.0.x|Updated|Oct 10
[Update Magento Commerce (Cloud) 2.2 Release Notes with changes in deployment](http://devdocs.magento.com/guides/v2.2/cloud/release-notes/CloudReleaseNotes2.2.html#deploy)|2.2.x|Updated|Oct 06
Updated Magento Commerce (Cloud) content for [services.yaml](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services.html), [Elasticsearch](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-elastic.html), [Solr](http://devdocs.magento.com/guides/v2.0/cloud/project/project-conf-files_services-solr.html), [Redis](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-redis.html), [MySQL](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-mysql.html), and [RabbitMQ](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_services-rabbit.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Oct 06
Added a new option to the [`bin/magento migrate:data`](http://devdocs.magento.com/guides/v2.2/migration/migration-migrate-data.html) command in the _Migration Guide_.<br/>Added an example of [configuring the Data Migration Tool to use TLS](http://devdocs.magento.com/guides/v2.2/migration/migration-tool-configure.html) (e.g., private/public keys) to connect to MySQL in the _Migration Guide_.|2.2.x|Updated|Oct 03

{% endcollapsibleh2 %}

{% collapsibleh2 September 2017 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
[Update Admin account password change on project provision and creation for Magento Commerce (Cloud)](http://devdocs.magento.com/guides/v2.0/cloud/onboarding/onboarding-tasks.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Sep 27
Published backward incompatible changes between 2.2.0 and 2.1.9 versions in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Sep 27
Add third party license information for Magento Commerce (Cloud) [2.0.X](http://devdocs.magento.com/guides/v2.0/release-notes/thirdparty-mccloud.html), [2.1.X](http://devdocs.magento.com/guides/v2.1/release-notes/thirdparty-mccloud.html), and [2.2](http://devdocs.magento.com/guides/v2.2/release-notes/thirdparty-mccloud.html)|2.0.x, 2.1.x, 2.2.x, 2.x|New|Sep 27
Added new topics for [installing any extension from the command line](http://devdocs.magento.com/guides/v2.2/comp-mgr/install-extensions.html) and [installing the B2B extension specifically](http://devdocs.magento.com/guides/v2.2/comp-mgr/install-extensions/b2b-installation.html)|2.2.x|New|Sep 26
Updated Magento Commerce (Cloud) 2.2 content for [upgrade instructions](http://devdocs.magento.com/guides/v2.2/cloud/project/project-upgrade.html), [Configuration Management and Pipeline Deployment](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html), [Magento application variables](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html), [.magento.app.yaml](http://devdocs.magento.com/guides/v2.2/cloud/project/project-conf-files_magento-app.html), and [requirements](http://devdocs.magento.com/guides/v2.2/cloud/requirements/cloud-requirements.html)|2.2.x|Updated|Sep 26
[Updated Fastly snippet examples and process for adding new VCL snippets](http://devdocs.magento.com/guides/v2.2/cloud/configure/cloud-vcl-custom-snippets.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Sep 20
HHVM compatibility removed in [tech-stack](http://devdocs.magento.com/guides/v2.2/architecture/tech-stack.html).|2.2.x|Updated|Sep 14
Updated backward incompatible changes after 2.2.0 RC3.0 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Sep 14
[Added a rule set for the PHP_CodeSniffer](http://devdocs.magento.com/guides/v2.2/coding-standards/code-standard-sniffers.html)|2.2.x|Updated|Sep 13
[Added troubleshooting information for Redis.](http://devdocs.magento.com/guides/v2.1/cloud/trouble/redis-troubleshooting.html)|2.0.x, 2.1.x, 2.2.x, 2.x|New|Sep 11
Updated database dump commands for [patching](http://devdocs.magento.com/guides/v2.2/cloud/project/project-patch.html) and [upgrading](http://devdocs.magento.com/guides/v2.2/cloud/project/project-upgrade.html) Magento Commerce Cloud, and for [Migrate and deploy](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-migrate.html) content.|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Sep 08
[Updated custom Fastly VCL snippet information](http://devdocs.magento.com/guides/v2.2/cloud/configure/cloud-vcl-custom-snippets.html)|2.0.x, 2.1.x, 2.2.x, 2.x|Updated|Sep 08
[Added troubleshooting information for generating and adding sitemap.xml and robots.txt.](http://devdocs.magento.com/guides/v2.2/cloud/trouble/robots-sitemap.html)|2.0.x, 2.1.x, 2.2.x, 2.x|New|Sep 08
Updated content for [Configuration Management](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-over.html) and [corresponding examples](http://devdocs.magento.com/guides/v2.2/cloud/live/sens-data-initial.html) for in Magento Commerce (Cloud).|2.2.x|Updated|Sep 08
[Versioning](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/versioning/)<br/>[Codebase Changes](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/versioning/codebase-changes.html)<br/>[Module version dependency](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/versioning/dependencies.html)|2.x|New and Updated|Sep 05
Updated backward incompatible changes after 2.2.0 RC2.3 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Sep 04
Added information for Magento Commerce (Cloud) Starter [architecture](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/starter-architecture.html) and [development and deploy workflow](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/starter-develop-deploy-workflow.html), and Pro [architecture](http://devdocs.magento.com/guides/v2.2/cloud/reference/discover-arch.html) and [development and deploy workflow](http://devdocs.magento.com/guides/v2.2/cloud/welcome/discover-workflow.html)|2.0.x, 2.1.x, 2.2.x|Updated|Sep 01
[Updated information on Magento encryption keys](http://devdocs.magento.com/guides/v2.2/cloud/trouble/trouble-crypt-key-variable.html)|2.0.x, 2.1.x, 2.2.x|Updated|Sep 01

{% endcollapsibleh2 %}

{% collapsibleh2 August 2017 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
[Added explanation of AggregatedFieldDataConverter](http://devdocs.magento.com/guides/v2.2/ext-best-practices/tutorials/serialized-to-json-data-upgrade.html)|2.2.x|Updated|Aug 30
Added information for Fastly [set up](http://devdocs.magento.com/guides/v2.2/cloud/basic-information/cloud-fastly.html), [custom VCL snippets](http://devdocs.magento.com/guides/v2.2/cloud/configure/cloud-vcl-custom-snippets.html), and [troubleshooting](http://devdocs.magento.com/guides/v2.2/cloud/trouble/trouble_fastly.html)|2.0.x, 2.1.x, 2.2.x, 2.x|New|Aug 28
Added backward incompatible changes for 2.2.0 RC2.2 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Aug 28
Added backward incompatible changes for 2.2.0 RC2.1 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Aug 22
[Frontend Product Repository](http://devdocs.magento.com/guides/v2.2/javascript-dev-guide/javascript/product-frontend-storage.html)<br/>[Render prices on frontend with Ui component](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/howto/price_rendering.html)<br/>[Added backward incompatible changes](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/index.html#recently-viewed-and-recently-compared-widgets)<br/>[Updated the list of REST endpoints](http://devdocs.magento.com/guides/v2.2/rest/list.html#catalog)|2.2.x|New and Updated|Aug 21
[Rendering prices with UI Components](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/howto/price_rendering.html)<br/>[Frontend Product Repository](http://devdocs.magento.com/guides/v2.2/javascript-dev-guide/javascript/product-frontend-storage.html)|2.2.x|New|Aug 21
[Elasticsearch update](http://devdocs.magento.com/guides/v2.2/config-guide/elasticsearch/es-overview.html)|2.2.x|Updated|Aug 21
Added backward incompatible changes for 2.2.0 RC2.0 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Aug 18
Added [Composer-based installation instructions](http://devdocs.magento.com/guides/v2.2/release-notes/release-candidate/install.html) for 2.2.0 RC 2.0.|2.2.x|Updated|Aug 16
[Updated backward incompatible changes](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/index.html#advanced-section-in-system-configurations)|2.2.x|Updated|Aug 14
[Updated docs about config.php being in .gitignore](http://devdocs.magento.com/guides/v2.2/config-guide/config/config-php.html)|2.2.x|Updated|Aug 11
Major revisions for deployment content|2.0.x, 2.1.x, 2.2.x|Updated|Aug 11
Added backward incompatible changes for delta of 2.1.8 and 2.1.7 versions in [Open Source](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.1/release-notes/backward-incompatible-changes/commerce.html)|2.1.x|Updated|Aug 10
Added a [new topic](http://devdocs.magento.com/guides/v2.1/install-gde/prereq/nginx.html) describing how to install Magento 2 on an nginx web server (Ubuntu 16 and CentOS 7).|2.x|New|Aug 08
Added backward incompatible changes for 2.2.0 RC1.8 in [Open Source](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html) and [Commerce](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Aug 07
[Migrating data to Cloud: add triggers to DB dump command](http://devdocs.magento.com/guides/v2.2/cloud/live/stage-prod-migrate.html#cloud-live-migrate-db)|2.x|Updated|Aug 03
{% endcollapsibleh2 %}

{% collapsibleh2 July 2017 %}

Description  | Versions applied to  | New or Updated | Date
-------------|--------------|----------------------|--------
[Added generated BICs for delta RC1.6-RC1.5](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html)|2.2.x|Updated|Jul 31
[Migration Best Practices: use a copy of your DB when testing migration](http://devdocs.magento.com/guides/v2.1/migration/migration-overview-practices.html)<br/>[Migration Plan: recommendations on system upgrade, dry run, cron jobs, changes in migrated data](http://devdocs.magento.com/guides/v2.1/migration/migration-plan.html)<br/>[Data Migration Tool Preconditions: avoid creating new entities in Magento 2 before migration](http://devdocs.magento.com/guides/v2.1/migration/migration-tool-preconditions.html)|2.x|Updated|Jul 28
[Added generated BICs for delta RC1.5-RC1.4](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html)|2.2.x|Updated|Jul 24
[Technical Guidelines 2.2](http://devdocs.magento.com/guides/v2.1/coding-standards/technical-guidelines.html)|2.2.x|New|Jul 21
[Added BICs for delta Magento CE 2.2.0 RC1.4-RC1.3](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html)<br/>[Added BICs for delta Magento EE 2.2.0 RC1.4-RC1.3](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/commerce.html)|2.2.x|Updated|Jul 17
[Backward compatible changes for delta Magento 2.2.0 RC1.3 and RC1.2](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html#changes-220rc13)|2.2.x|Updated|Jul 12
[Fix code example on the video tutorial page]()|2.x|Updated|Jul 10
[Cron groups: run twice when using the command line]()|2.x|Updated|Jul 07
[Added tables with BICs for delta 2.2.0-RC1.2 and 2.2.0-RC1.1](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/open-source.html)|2.2.x|Updated|Jul 07
[Added known issues to Jasmine tests](http://devdocs.magento.com/guides/v2.1/test/js/jasmine.html#known-issues-and-solutions)|2.x|Updated|Jul 05
[Added BIC about moved directories]()|2.2.x|Updated|Jul 03
{% endcollapsibleh2 %}

{% collapsibleh2 June 2017 %}

### Release Notes

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [2.2.x Release Information](http://devdocs.magento.com/guides/v2.2/release-notes/bk-release-notes.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Magento CE 2.2 Release Candidate Release Notes](http://devdocs.magento.com/guides/v2.2/release-notes/release-notes-2-2-prerelease1-CE.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Magento EE 2.2 Release Candidate Release Notes](http://devdocs.magento.com/guides/v2.2/release-notes/release-notes-2-2-prerelease1-EE.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Magento 2.2 backward incompatible changes](http://devdocs.magento.com/guides/v2.2/release-notes/backward-incompatible-changes/index.html){:target="_blank"} | 2.2 |  New | June 23  |

### Installation Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Change to a released version](http://devdocs.magento.com/guides/v2.2/install-gde/install/cli/dev_downgrade.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Check the Magento database status](http://devdocs.magento.com/guides/v2.2/install-gde/install/cli/install-cli-subcommands-db-status.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Enable or disable maintenance mode](http://devdocs.magento.com/guides/v2.2/install-gde/install/cli/install-cli-subcommands-maint.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Overview of ownership and permissions](http://devdocs.magento.com/guides/v2.2/install-gde/install/file-sys-perms-over.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Configure the Magento application](http://devdocs.magento.com/guides/v2.2/install-gde/install/post-install-config.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Update installation dependencies](http://devdocs.magento.com/guides/v2.2/install-gde/install/prepare-install.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Installation quick reference (tutorial)](http://devdocs.magento.com/guides/v2.2/install-gde/install-quick-ref.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Overview of ownership and permissions](http://devdocs.magento.com/guides/v2.2/install-gde/prereq/file-sys-perms-over.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Set pre-installation ownership and permissions](http://devdocs.magento.com/guides/v2.2/install-gde/prereq/file-system-perms.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Get the Magento CE metapackage](http://devdocs.magento.com/guides/v2.2/install-gde/prereq/integrator_install_ce.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Get the Magento EE metapackage](http://devdocs.magento.com/guides/v2.2/install-gde/prereq/integrator_install_ee.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [(Easy) Install the Magento archive on your server](http://devdocs.magento.com/guides/v2.2/install-gde/prereq/zip_install.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Magento 2.2.x technology stack requirements](http://devdocs.magento.com/guides/v2.2/install-gde/system-requirements-tech.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Access issues](http://devdocs.magento.com/guides/v2.2/install-gde/trouble/php/tshoot_access-main.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Exceptions during installation](http://devdocs.magento.com/guides/v2.2/install-gde/trouble/tshoot_exceptions.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Errors installing optional sample data](http://devdocs.magento.com/guides/v2.2/install-gde/trouble/tshoot_sample-data.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Cannot write to the generated/code directory](http://devdocs.magento.com/guides/v2.2/install-gde/trouble/tshoot_var-gen-perms.html){:target="_blank"} | 2.2 |  Updated | June 23  |

### Configuration Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Configuration Guide](http://devdocs.magento.com/guides/v2.2/config-guide/bk-config-guide.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Database caching](http://devdocs.magento.com/guides/v2.2/config-guide/cache/caching-database.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Static Content Signing](http://devdocs.magento.com/guides/v2.2/config-guide/cache/static-content-signing.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Magento's deployment configuration](http://devdocs.magento.com/guides/v2.2/config-guide/config/config-php.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Pipeline Deployment](http://devdocs.magento.com/guides/v2.2/config-guide/deployment/index.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Single machine deployment](http://devdocs.magento.com/guides/v2.2/config-guide/deployment/single-machine.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Configure 2.2 message queues](http://devdocs.magento.com/guides/v2.2/config-guide/mq/config-mq.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Migrate message queue configuration](http://devdocs.magento.com/guides/v2.2/config-guide/mq/queue-migration.html) | 2.2 | Updated | June 23 |
| [Magento Optimization Guide](http://devdocs.magento.com/guides/v2.2/config-guide/prod/prod_perf-optimize.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [Configure Magento to use Varnish](http://devdocs.magento.com/guides/v2.2/config-guide/varnish/config-varnish-magento.html) | 2.2 | Updated | June 23 |
| [Advanced Varnish configuration](http://devdocs.magento.com/guides/v2.2/config-guide/varnish/config-varnish-advanced.html){:target="_blank"} | 2.2 |  New | June 23  |

### Magento Cloud updates

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Import Magento EE into {{site.data.var.ece}}]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-import.html){:target="_blank"} | 2.0, 2.1, 2.2 |  Updated | June 29  |
| [Prepare your existing Magento EE system]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-prepare.html){:target="_blank"} | 2.0, 2.1, 2.2 |  Updated | June 29  |
| [Resolve issues with encryption key]({{ page.baseurl }}/cloud/trouble/trouble-crypt-key-variable.html){:target="_blank"} | 2.0, 2.1, 2.2 |  New | June 29  |
| [Go live]({{ page.baseurl }}/cloud/live/live.html){:target="_blank"} | 2.0, 2.1, 2.2 |  Updated | June 29  |
| [Magento application environment variables]({{ page.baseurl }}/cloud/env/environment-vars_magento.html){:target="_blank"} | 2.0, 2.1, 2.2 |  Updated | June 27  |

### B2B Developer Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [B2B Developer Guide](http://devdocs.magento.com/guides/v2.2/b2b/bk-b2b.html){:target="_blank"} | 2.2  |  New | June 23  |

### Frontend Developer Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [How CSS and LESS files are preprocessed and how to debug them](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/css-topics/css-preprocess.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Compile LESS using Grunt](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/css-topics/css_debug.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Layout overview](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/layout-overview.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Common layout customization tasks](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/layouts/xml-manage.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Templates XSS security](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/templates/template-security.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Uninstall a storefront theme](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/themes/theme-uninstall.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Additional tools for frontend developers](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/tools/tools_overview.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Using Grunt for Magento tasks](http://devdocs.magento.com/guides/v2.2/frontend-dev-guide/tools/using_grunt.html){:target="_blank"} | 2.2 |  New | June 23  |

### UI Components Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Using the new structure in UI components XML configuration](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/best-practices/semantic_config.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Magento custom Knockout.js bindings](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/concepts/knockout-bindings.html){:target="_blank"} | 2.2 |  New | June 23  |
| [UI components XML configuration structure](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/concepts/ui_comp_xmlconfig_structure.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Declare a custom UI component](http://devdocs.magento.com/guides/v2.2/ui_comp_guide/howto/new_component_declaration.html){:target="_blank"} | 2.2 |  New | June 23  |

### Module Reference Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Advanced Reporting modules](http://devdocs.magento.com/guides/v2.2/mrg/ce/Analytics/description.html){:target="_blank"} | 2.2 |  New | June 23  |
| [B2B modules](http://devdocs.magento.com/guides/v2.2/mrg/b2b/b2b-intro.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Magento_Signifyd module](http://devdocs.magento.com/guides/v2.2/mrg/ee/Signifyd.html){:target="_blank"} | 2.2 |  New | June 23  |

### Component Manager and System Upgrade Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Upgrade the Magento application and modules](http://devdocs.magento.com/guides/v2.2/comp-mgr/bk-compman-upgrade-guide.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Command-line upgrade](http://devdocs.magento.com/guides/v2.2/comp-mgr/cli/cli-upgrade.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Run the Extension Manager](http://devdocs.magento.com/guides/v2.2/comp-mgr/extens-man/extensman-checklist.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Run the Module Manager](http://devdocs.magento.com/guides/v2.2/comp-mgr/module-man/compman-checklist.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Prerequisites](http://devdocs.magento.com/guides/v2.2/comp-mgr/prereq/prereq_compman.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Run System Upgrade](http://devdocs.magento.com/guides/v2.2/comp-mgr/upgrader/upgrade-checklist.html){:target="_blank"} | 2.2 |  New | June 23  |

### Magento payment provider gateway

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Signifyd fraud protection](http://devdocs.magento.com/guides/v2.2/payments-integrations/signifyd/signifyd.html){:target="_blank"} | 2.2 |  New | June 23  |

### REST and SOAP References

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Swagger documentation](http://devdocs.magento.com/swagger/index_22.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [List of REST endpoints by module](http://devdocs.magento.com/guides/v2.2/rest/list.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [List of service names per module](http://devdocs.magento.com/guides/v2.2/rest/rest_endpoints.html){:target="_blank"} | 2.2 |  Updated | June 23  |
| [SOAP Reference](http://devdocs.magento.com/guides/v2.2/soap/bk-soap.html){:target="_blank"} | 2.2 |  Updated | June 23  |

### PHP Developer Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [The di.xml file](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/build/di-xml-file.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Bulk Operations](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/bulk-operations.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Example bulk operations implementation](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/implement-bulk.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Code generation](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/code-generation.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Configuration importers](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/configuration/importers.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Sensitive and environment settings](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/configuration/sensitive-and-environment-settings.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Serialize Library](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/framework/serializer.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Indexer optimization](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/indexer-batch.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Plugins (Interceptors)](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/plugins.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Searching with Repositories](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/searching-with-repositories.html){:target="_blank"} | 2.2 |  New | June 23  |
| [XSS prevention strategies](http://devdocs.magento.com/guides/v2.2/extension-dev-guide/xss-protection.html){:target="_blank"} | 2.2 |  New | June 23  |

### Magento Testing Framework Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Functional Testing Framework Configuration](http://devdocs.magento.com/guides/v2.2/mtf/configuration.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Test suite in the Functional Testing Framework](http://devdocs.magento.com/guides/v2.2/mtf/features/test_suite.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Typified element](http://devdocs.magento.com/guides/v2.2/mtf/mtf_entities/mtf_typified-element.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Quick start. Prepare Magento application](http://devdocs.magento.com/guides/v2.2/mtf/mtf_quickstart/mtf_quickstart_magento.html){:target="_blank"} | 2.2 |  New | June 23  |

### Extension Developer Best Practices

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Writing secure code](http://devdocs.magento.com/guides/v2.2/ext-best-practices/security/writing-secure-code.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Serialized to JSON data upgrade](http://devdocs.magento.com/guides/v2.2/ext-best-practices/tutorials/serialized-to-json-data-upgrade.html){:target="_blank"} | 2.2 |  New | June 23  |

### JavaScript Developer Guide

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [JavaScript Logger](http://devdocs.magento.com/guides/v2.2/javascript-dev-guide/javascript/js_logger.html){:target="_blank"} | 2.2 |  New | June 23  |

### Additional updates

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Customize the list of shipping methods](http://devdocs.magento.com/guides/v2.2/howdoi/checkout/checkout_shipping_methods.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Clear directories during development](http://devdocs.magento.com/guides/v2.2/howdoi/php/php_clear-dirs.html){:target="_blank"} | 2.2 |  New | June 23  |
| [Add custom fields that influence other Checkout fields](http://devdocs.magento.com/guides/v2.1/howdoi/checkout/checkout_custom_checkbox.html){:target="_blank"} | 2.0, 2.1  |  New | June 8  |
| [JavaScript unit testing with Jasmine](http://devdocs.magento.com/guides/v2.2/test/js/jasmine.html){:target="_blank"} | 2.2 |  New | June 23  |
{% endcollapsibleh2 %}

{% collapsibleh2 May 2017 %}
| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Magento custom Knockout.js bindings](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/concepts/knockout-bindings.html){:target="_blank"} | 2.1  |  New | May 25  |

{% endcollapsibleh2 %}

{% collapsibleh2 April 2017 %}

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Description and configuration options of the mostly used Magento UI components](http://devdocs.magento.com/guides/v2.1/ui_comp_guide/components/components-intro.html){:target="_blank"} | 2.1  |  New | Apr 28  |
| [Install a third-party storefront theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-install.html){:target="_blank"} | 2.x  |  New | Apr 27  |
| [Uninstall a storefront theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-uninstall.html){:target="_blank"} | 2.x  |  New | Apr 27  |
| Payments integrations: [response validators]({{ page.gdeurl }}payments-integrations/payment-gateway/response-validator.html){:target="_blank"} and [payment method facade]({{ page.baseurl }}/payments-integrations/base-integration/facade-configuration.html){:target="_blank"}| 2.0, 2.1.x | Updated | Apr 27  |
| [Technical guidelines for working with Events]({{ page.baseurl }}/coding-standards/technical-guidelines/technical-guidelines.html#events){:target="_blank"} | 2.1.x |  New | Apr 19  |
| [Migration: Follow-up after running the Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate-follow-up.html){:target="_blank"} | 2.x  |  Updated | Apr 14  |

{% endcollapsibleh2 %}

{% collapsibleh2 March 2017 %}

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Coding standards technical guidelines]({{ site.gdeurl21 }}coding-standards/technical-guidelines.html){:target="_blank"} | 2.1.x  |  New | Apr 1  |
| [Update sample contribution template]({{ page.baseurl }}/contributor-guide/templates/basic_template.html){:target="_blank"} | 2.x  |  Updated |  Apr 1 |
| [Update performance test data]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html){:target="_blank"} | 2.x  | Updated  | Mar 21  |
| [Versioning and compatibility]({{ page.baseurl }}/extension-dev-guide/versioning/index.html){:target="_blank"} | 2.x  |  New |  Mar 31 |
| [How to test a block]({{ page.baseurl }}/mtf/mtf_entities/mtf_block.html){:target="_blank"}  | 2.x  |  Updated | Mar 24  |
| [Tutorial: Order processing with REST APIs]({{ site.gdeurl21 }}get-started/order-tutorial/order-intro.html){:target="_blank"}  |  2.1.x | New  | Mar 23  |
| [Magento U video tutorials](http://devdocs.magento.com/videos){:target="_blank"}  | 2.x  | New  |  Mar 15 |
| [Top quarterly devdocs contributors]({{ page.baseurl }}/contributor-guide/quarterly-contributors.html){:target="_blank"}  |  2.x | Updated  | Mar 15  |
|  [Community contribution to adding attributes to an entity]({{ page.baseurl }}/extension-dev-guide/extension_attributes/adding-attributes.html){:target="_blank"} | 2.x  |  Updated | March 15  |
| [Tutorial on copying fieldsets](ext-best-practices/tutorials/copy-fieldsets.html){:target="_blank"} | 2.x | New | Mar 9 |
|  [Backward incompatible changes now includes Magento 2.0.x, added tables]({{ page.baseurl }}/release-notes/backward-incompatible-changes/index.html){:target="_blank"} |  2.x |  Updated |  Mar 9 |
| [Import a Magento EE project into {{site.data.var.ece}} (MECE)]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-first-steps.html){:target="_blank"}  | 2.x  |  New | Mar 1  |
| [MECE configuration management]({{ site.gdeurl21 }}cloud/live/sens-data-over.html){:target="_blank"}  | 2.1.x  |  New |  Mar 3 |
| [Reorganize and update how to get started with an MECE environment]({{ page.baseurl }}/cloud/before/before-setup-env-1_get-start.html){:target="_blank"}  | 2.x  |  Updated |  Mar 3 |
| [Reorganize and correct issues with MECE workspace]({{ page.baseurl }}/cloud/before/before-workspace.html){:target="_blank"} | 2.x  | Updated  |  Mar 2 |
|  [Magento Functional Test Framework scenario test]({{ page.baseurl }}/mtf/mtf_entities/mtf_scenariotest.html) | 2.x  | New  |  Mar 3 |

{% endcollapsibleh2 %}


{% collapsibleh2 Feb 2017 %}

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [{{site.data.var.ece}} (MECE) deployment]({{ page.baseurl }}/cloud/reference/discover-deploy.html){:target="_blank"} | 2.x | Updated | Feb 23 |
| [How to use logs to troubleshoot MECE]({{ page.baseurl }}/cloud/trouble/environments-logs.html){:target="_blank"} | 2.x | New | Feb 23 |
| [How to SSH in to an MECE integration, staging, or production system]({{ page.baseurl }}/cloud/env/environments-ssh.html){:target="_blank"} | 2.x | Updated | Feb 23 |
| [Set up multiple MECE database users]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html#cloud-appyaml-mysqlusers){:target="_blank"} | 2.x | New | Feb 21 |
| [MECE 2.1.5 and 2.0.13 Release Notes]({{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes2.1.5.html){:target="_blank"} | 2.1.5 | New | Feb 21 |
| [Magento Community Edition (CE) 2.1.5 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.5CE.html){:target="_blank"} | 2.1.5 | New | Feb 21 |
| [Magento Enterprise Edition (EE) 2.1.5 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.5EE.html){:target="_blank"} | 2.1.5 | New | Feb 21 |
| [Magento CE 2.0.13 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.13CE.html){:target="_blank"} | 2.0.13 | New | Feb 21 |
| [Magento EE 2.0.13 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.13EE.html){:target="_blank"} | 2.0.13 | New | Feb 21 |
| [How {{site.data.var.ece}} uses Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html){:target="_blank"}  | 2.x  |  New | Feb 17  |
|  [Prohibit usage of DocBlock templates, add License Notice and Copyright]({{ page.baseurl }}/coding-standards/docblock-standard-general.html){:target="_blank"}  | 2.x  |  Updated | Feb 11  |
| [How to create a Fastly error or maintenance page]({{ page.baseurl }}/cloud/access-acct/fastly.html#fastly-errpg){:target="_blank"}  | 2.x  |  Updated |  Feb 10 |
| [{{site.data.var.ece}} 2.1.4 and 2.0.12 Release Notes]({{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes2.1.4.html){:target="_blank"}  |  2.x | New  | Feb 7  |
| [Magento Community Edition (CE) 2.0.12 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.12CE.html){:target="_blank"}  | 2.0.x  | New  | Feb 7  |
| [Magento Enterprise Edition (EE) 2.0.12 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.12EE.html){:target="_blank"}  |  2.0.x | New  |  Feb 7 |
| [Magento CE 2.1.4 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.4CE.html){:target="_blank"}  | 2.1.x  | New  |  Feb 7 |
| [Magento EE 2.1.4 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.4EE.html){:target="_blank"}  |  2.1.x |  New | Feb 7  |
|  [Use PhpStorm, PHPUnit, and Xdebug with DevBox]({{ page.baseurl }}/install-gde/docker/docker-phpstorm-parent.html){:target="_blank"} | 2.x  | New  | Feb 8  |
| [Clarify file system permissions for production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html){:target="_blank"}  | 2.x  | Updated  | Jan 27  |
| [Corrected instructions to set up multiple websites or stores on {{site.data.var.ece}}]({{ page.baseurl }}/cloud/project/project-multi-sites.html){:target="_blank"} | 2.x  | Updated  | Jan 31  |

{% endcollapsibleh2 %}


{% collapsibleh2 January 2017 %}

| Description  | Versions applied to  | New or Updated | Date |
|--------------|--------------|----------------------|--------|
| [Asynchronous module definition and RequireJS concepts]({{ page.baseurl }}/javascript-dev-guide/javascript/requirejs_concept.html){:target="_blank"} | 2.1.x | New | Jan 25 |
| [Added information about the RequireJS library]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html){:target="_blank"} | 2.x | Updated | Jan 26 |
| [Data Migration Guide troubleshooting]({{ page.baseurl }}/migration/migration-troubleshooting.html){:target="_blank"}  | 2.x  | New  |  Jan 20 |
| [Updated `@deprecated` tag and added requirements for `@inheritdoc`]({{ page.baseurl }}/coding-standards/docblock-standard-general.html){:target="_blank"}  |  2.x | Updated  |  Jan 20 |
| [How to install and use Magento DevBox (easy developer installation)]({{ page.baseurl }}/install-gde/docker/docker-over.html){:target="_blank"}  | 2.x  | New  | Jan 19  |
|  [Functional Testing Framework isolation management tutorial]({{ page.baseurl }}/mtf/features/isolation.html){:target="_blank"} | 2.x  | New  | Jan 18  |
| [How to test a patch on {{site.data.var.ece}}]({{ page.baseurl }}/cloud/howtos/patch-magento.html)  | 2.x  |  Updated  |  Jan 10 |
|  [Add `type` prefixes and product, project in description of `composer.json`]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html){:target="_blank"} |  2.x |  Updated  | Jan 9  |
| [Docblock coding standard]({{ page.baseurl }}/coding-standards/docblock-standard-general.html){:target="_blank"} | 2.x | Updated | Jan 6 |
| [Use payment vault in the Admin]({{ site.gdeurl21 }}payments-integrations/vault/admin-integration.html){:target="_blank"} | 2.1.x | Updated | Jan 6 |

{% endcollapsibleh2 %}

{% collapsibleh2 December 2016 %}

| Description  | Versions applied to  | New or Updated | Week ending |
|--------------|--------------|----------------------|--------|
| [Magento UI components explained]({{ site.gdeurl21 }}ui_comp_guide/ui_component_explained.html){:target="_blank"} | 2.1.x | New | Dec 30 (includes week ending Dec 23) |
| [Magento Community Edition (CE) 2.1.3 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.3CE.html){:target="_blank"}   | 2.1.3  |  New | Dec 16  |
| [Magento CE 2.0.11 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.11CE.html){:target="_blank"}   | 2.0.11  |  New | Dec 16  |
| [Magento Enterprise Edition (EE) 2.1.3 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.3EE.html){:target="_blank"}   | 2.1.3  | New  | Dec 16  |
| [Magento EE 2.0.11 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.11EE.html){:target="_blank"}   |  2.0.11  |  New | Dec 16  |
| [Configure the Magento functional testing framework]({{ page.baseurl }}/mtf/configuration.html){:target="_blank"}   | 2.x | New  | Dec 16  |
| [Add custom integrations and vault payments to the Magento payment provider gateway]({{ page.baseurl }}/payments-integrations/bk-payments-integrations.html){:target="_blank"}  |  2.x |  New | Dec 9 |

{% endcollapsibleh2 %}

{% collapsibleh2 November 2016 %}

| Description  | Versions applied to  | New or Updated | Week ending |
|--------------|--------------|----------------------|--------|
| [Set up the Magento application to use multiple stores]({{ page.baseurl }}/config-guide/multi-site/ms_over.html){:target="_blank"}  | 2.x  |  Updated | Dec 2  |
| [Set up multiple Magento stores on {{site.data.var.ece}}]({{ page.baseurl }}/cloud/project/project-multi-sites.html){:target="_blank"} | 2.x  |  New | Dec 2  |
| [Install the Magento data migration tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"} | 2.x  | Updated  |  Dec 2 |
| [Upgrade the Magento data migration tool]({{ page.baseurl }}/migration/migration-tool-upgrade.html){:target="_blank"} |  2.x | Updated  | Dec 2  |
| [Add REST APIs for Magento Enterprise Edition]({{ page.baseurl }}/rest/list.html){:target="_blank"} | 2.x  | Updated  |  Dec 2 |
| [Add REST API endpoints for Magento EE]({{ page.baseurl }}/rest/rest_endpoints.html){:target="_blank"} | 2.x  |  Updated |  Dec 2 |
| [Use Jasmine for JavaScript unit testing]({{ page.baseurl }}/test/js/jasmine.html){:target="_blank"} | 2.x | New | Nov 25 |
| [Use adapters with third-party libraries]({{ page.baseurl }}/extension-dev-guide/adapters.html){:target="_blank"} | 2.x | New | Nov 25 |
| [Debug the Fastly extension with {{site.data.var.ece}}]({{ page.baseurl }}/cloud/trouble/trouble_fastly.html){:target="_blank"} | 2.x | New | Nov 25 |
| [{{site.data.var.ece}} requirements]({{ page.baseurl }}/cloud/requirements/cloud-requirements.html){:target="_blank"} |  2.x  |   Updated | Nov 18 |
| [Data migration toolkit directory structure]({{ page.baseurl }}/migration/migration-tool-internal-spec.html){:target="_blank"}  |  2.x | Updated  | Nov 18 |
| [Added information about the `@import` directive and usage]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html){:target="_blank"}  |  2.x | Updated  |  Nov 18 |
| [How to use adapters with third-party libraries]({{ page.baseurl }}/extension-dev-guide/adapters.html){:target="_blank"}   |  2.x  |   New |Nov 11 |
| [Added detail about {{site.data.var.ece}} (MECE) deployment]({{ page.baseurl }}/cloud/reference/discover-deploy.html){:target="_blank"}   |  2.x  |   Updated |Nov 4 |
| [Where MECE logs are located]({{ page.baseurl }}/cloud/env/environments-logs.html)  |  2.x  |  New  |Nov 4 |
| [Tutorial on setting up a custom cron job and cron group]({{ page.baseurl }}/config-guide/cron/custom-cron-tut.html){:target="_blank"}  |  2.x  |  New  |Nov 4 |
| [Troubleshoot OPcache-related error]({{ page.baseurl }}/install-gde/trouble/php/tshoot_opcache.html)  |  2.x  |  New  |Nov 4 |
| [UI components linking properties]({{ site.gdeurl21 }}ui_comp_guide/concepts/ui_comp_linking_concept.html){:target="_blank"}  |  2.1.x  |  New  | Nov 4 |

{% endcollapsibleh2 %}

{% collapsibleh2 October 2016 %}

| Description  | Versions applied to  | New or Updated | Week ending |
|--------------|--------------|----------------------|--------|
| {{site.data.var.ece}} (MECE) [added descriptions of build and deployment scripts and other improvements to deployment]({{ page.baseurl }}/cloud/reference/discover-deploy.html){:target="_blank"} | 2.x | Updated |Oct 28 |
| [MECE added description of build and deployment logs in staging and production]({{ page.baseurl }}/cloud/env/environments-logs.html){:target="_blank"} | 2.x | Updated | Oct 28 |
| [MECE how to patch the Magento software]({{ page.baseurl }}/cloud/howtos/patch-magento.html){:target="_blank"} | 2.x | New | Oct 28 |
| [MECE how to upgrade the Magento software]({{ page.baseurl }}/cloud/howtos/upgrade-magento.html){:target="_blank"} | 2.x | New | Oct 28 |
| [Magento Functional Test Framework (FTF) create a report]({{ page.baseurl }}/mtf/features/reporting.html){:target="_blank"} | 2.x | New | Oct 28 |
| [DataSource UI component]({{ site.gdeurl21 }}ui_comp_guide/concepts/ui_comp_data_source.html){:target="_blank"} | 2.1.x | New | Oct 28 |
| [Home page for Magento 2.x system requirements]({{ site.baseurl }}/magento-system-requirements.html){:target="_blank"} | 2.x | New | Oct 28 |
| [Home page for Magento 2.x technical bulletins]({{ site.baseurl }}/magento-techbull.html){:target="_blank"} | 2.x | New | Oct 28 |
| [Home page for Magento 2.x third-party license agreements]({{ site.baseurl }}/magento-third-party.html){:target="_blank"} | 2.x | New | Oct 28 |
| [Using code sniffers]({{ page.baseurl }}/coding-standards/code-standard-sniffers.html){:target="_blank"} | 2.x | New | Oct 28 |
| [Updated cron group options]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html){:target="_blank"} (`use_separate_process` applies to 2.1.x only)  | 2.x  |  Updated | Oct 21 |
| [{{site.data.var.ece}} (MECE) Release Notes home page]({{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes.html){:target="_blank"} | 2.x  | New  | Oct 21 |
| [MECE 2.1.2 and 2.0.10 Release Notes]({{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes2.1.2.html){:target="_blank"}  | 2.0.10, 2.1.2  |  New | Oct 21 |
| [Added HTTP response codes to Web API topic]({{ page.baseurl }}/get-started/gs-web-api-response.html){:target="_blank"}  | 2.x |  Updated | Oct 21 |
| [System requirements home page]({{ site.baseurl }}/magento-system-requirements.html){:target="_blank"} | 2.x  | New  | Oct 21 |
| [How to apply the SUPEE-8788 security patch]({{ site.m1xgdeurl }}other/ht_install-patches.html#apply-8788) | 1.x  | Updated  |Oct 21 |
| [Magento CE 2.0.10 release notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.10CE.html){:target="_blank"}  | 2.0.x  | New| Oct 14 |
| [Magento EE 2.0.10 release notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.10EE.html){:target="_blank"} | 2.0.x  | New| Oct 14 |
| [Magento CE 2.1.2 release notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.2CE.html){:target="_blank"} | 2.1.x  | New| Oct 14 |
| [Magento EE 2.1.2 release notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.2EE.html){:target="_blank"}  | 2.1.x  | New| Oct 14 |
| [Proposed outline for evolving UI Components guide]({{ site.gdeurl21 }}ui_comp_guide/ui_comp_outline_proposed.html){:target="_blank"} |2.1.x| New  |  Oct 14 |
| [Preventing cache poisoning]({{ page.baseurl }}/config-guide/secy/secy-headers.html){:target="_blank"}  | See topic  |New|  Oct 14 |
| [Updated system requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html){:target="_blank"} | 2.x  |Updated| Oct 14 |
| [JSON responses added by Tim Reynolds]({{ site.m1xgdeurl }}api/rest/Resources/resource_customer_addresses.html){:target="_blank"}  |  1.x |Updated| Oct 14 |
| [JSON responses added by Tim Reynolds]({{ site.m1xgdeurl }}api/rest/Resources/resource_customers.html){:target="_blank"}  |  1.x |Updated| Oct 14 |
| [Magento CE 1.9.3 release notes]({{ site.m1xgdeurl }}ce19-ee114/ce1.9_release-notes.html){:target="_blank"} | 1.x  |New| Oct 14 |
| [Magento EE 1.14.3 release notes]({{ site.m1xgdeurl }}ce19-ee114/ee1.14_release-notes.html){:target="_blank"}  | 1.x  |New|  Oct 14 |
| [Updated system requirements]({{ site.m1xgdeurl }}system-requirements.html){:target="_blank"}  | 1.x |Updated| Oct 14 |
| [Indexing]({{ page.baseurl }}/extension-dev-guide/indexing-custom.html){:target="_blank"} (add information about improving indexing performance)  | 2.x  | Updated| Oct 7 |
| [Magento 2 documentation resources for {{site.data.var.ece}} (MECE)]({{ page.baseurl }}/cloud/access-acct/resources.html){:target="_blank"} |  2.x |New| Oct 7 |
| [MECE environment variables]({{ page.baseurl }}/cloud/env/environment-vars_magento.html){:target="_blank"}  | 2.x  |  Updated | Oct 7 |
| [MECE add more information about project directory structure]({{ page.baseurl }}/cloud/access-acct/first-time-setup_dir-structure.html){:target="_blank"}  | 2.x  | Updated  |  Oct 7 |
| [MECE completely revise new environment setup]({{ page.baseurl }}/cloud/before/before-setup-env-1_get-start.html){:target="_blank"} | 2.x  |  Updated | Oct 7 |
| [MECE responsibilities of the account owner]({{ page.baseurl }}/cloud/before/before-project-owner.html){:target="_blank"}  | 2.x  |  New |  Oct 7 |
| [MECE Magento file system owner for local development]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html){:target="_blank"}| 2.x  | New  | Oct 7 |
| [MECE setting MySQL `auto_increment_increment=3`]({{ page.baseurl }}/cloud/before/before-workspace-php.html){:target="_blank"}  |  2.x | New  | Oct 7 |
| [MECE moving from integration to staging and production]({{ page.baseurl }}/cloud/live/stage-prod-over.html){:target="_blank"} (see also associated topics)  | 2.x  |  New | Oct 7 |
| [Added info about using tokens in authentication requests]({{ page.baseurl }}/get-started/authentication/gs-authentication-token.html){:target="_blank"}| 2.x | Updated | Oct 7 |
| [How to programmatically create a category with custom attributes]({{ page.baseurl }}/rest/catalog-notes.html){:target="_blank"} | 2.x | New | Oct 7 |


{% endcollapsibleh2 %}
