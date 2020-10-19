# Installation & Varnish Test

## Overview

Installation & Varnish Test is automated EQP check that ensures compatibility of submitted extension with claimed Magento versions and editions.

## Why we test?

Magento is a complex and highly extensible software. To ensure that 3rd party extension is production-ready we check that it is possible to install extension in [production mode](https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html) and it does not affect caching mechanism for most critical scenarios so customers will enjoy performant storefront.

## When we test?

Installation and Varnish Test is mandatory for all submission regardless of extension type and scope of changes. Only extensions that passed Installation and Varnish Test may be listed at [Magento Marketplace](https://marketplace.magento.com/).

## What we are looking for?

As reflected in a test name we check 2 main areas:

1. Magento with submitted extension may be installed and switched to production mode. This check consists of following steps:

    - Extension may be added into [Magento project](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html#get-the-magento-software) with [Composer](https://getcomposer.org/)

    - Magento may be installed with enabled extension
    - It is possible to [compile Magento code](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.htm)
    - It is possible to [deploy static content](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-static-view.html)
    - Production mode [may be enabled](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html)
    - It is possible to [reindex all data](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-index.html) with installed extension

2. Most critical pages are available for a user and cache works as expected:

    - Acceptance test validate that product and category pages properly cached
    - Acceptance test validate that product and category pages cache is reset when product is edited
    - Different product types are validated

## What tools and environment we are using?

Our test infrastructure follow [recommended setup](https://devdocs.magento.com/guides/v2.4/install-gde/install-quick-ref.html) for Magento environment. You may use [Magento Cloud Docker](https://devdocs.magento.com/cloud/docker/docker-development.html) to create similar.

Installation & Varnish Test always use latest patch version of Magento for release line claimed as supported. For each supported release line we perform entire test suite on all compatible PHP versions.

Versions of all other software required by Magento are most up-to-date compatible version on the day of Magento release.

## How read an error report?

For the installation part of this test we returns logs of Magento CLI commands. The easiest way to reproduce an error is run failed command on local environment.

For Varnish tests we specify:
1. Brief description of the failed scenario
2. Expected and actual cache behavior (HIT or MISS for cached page)
To debug such kind of error it is recommended to have locally installed Magento with configured Varnish cache and checking corresponding HHTP headers.

## Troubleshooting

If your submission failed on the Installation and Varnish Test and after attempt to reproduce it locally please [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so we will be able to assist you or fix a bug on our end. Please specify your Submission ID in a ticket.

We also always glad for feedback and communication at [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
