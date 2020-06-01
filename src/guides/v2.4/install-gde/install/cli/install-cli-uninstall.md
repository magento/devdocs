---
group: installation-guide
title: Uninstall or reinstall Magento
functional_areas:
  - Install
  - System
  - Setup
---

## First steps {#instgde-cli-before}

{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments][].

## Prerequisites {#instgde-install-magento-prereq}

Before you use these commands, you must [install the Magento software][].

## Update the Magento software {#instgde-install-magento-update}

To update the Magento software:

*  If you installed the software from an archive or if you used 'composer-create-project', see the [Upgrade Guide]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).
*  If you are a contributing developer (that is, you used `git clone`), see [Contributing developers—update, reinstall Magento][].

## Reinstall the Magento software {#instgde-install-magento-reinstall}

The way you reinstall the Magento application from the command line depends on your role:

*  If you installed the software from an archive or if you used 'composer-create-project', see [Reinstall Magento Software][].
*  If you're a contributing developer (that is, you started using `git clone`), see [Contributing developers—update, reinstall Magento][].

## Uninstall the Magento software {#instgde-install-uninstall}

Uninstalling the Magento software drops and restores the database, removes the deployment configuration, and clears directories under `var`.

To uninstall the Magento software, enter the following command:

```bash
bin/magento setup:uninstall
```

The following message displays to confirm a successful uninstallation:

```terminal
[SUCCESS]: Magento uninstallation complete.
```

## Optionally keeping generated files {#instgde-install-keep}

By default, `bin/magento setup:upgrade` clears compiled code and the cache. Typically, you use `bin/magento setup:upgrade` to update components and each component can require different compiled classes.

However, in some situations (particularly, deploying Magento to production), you might wish to avoid clearing compiled code because it can take some time. (The [cache](https://glossary.magento.com/cache) is still cleared.) To update the Magento [database schema](https://glossary.magento.com/database-schema) and data *without* clearing compiled code, enter:

```bash
bin/magento setup:upgrade --keep-generated
```

{:.bs-callout-warning}
The optional `--keep-generated` option should be used _only_ in limited circumstances by experienced system integrators. This option should _never_ be used in a development environment. Improper use of this optional parameter can cause errors during code execution.

## Install the Magento software

*  [Install the Magento software using the command line][]

<!-- Link Definitions -->
[Contributing developers—update, reinstall Magento]: {{ page.baseurl }}/install-gde/install/cli/dev_options.html
[install the Magento software]: {{ page.baseurl }}/install-gde/install/cli/install-cli-install.html
[Common arguments]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common
[Reinstall Magento Software]: {{ page.baseurl }}/install-gde/install/cli/dev_reinstall.html
[Install the Magento software using the command line]: {{ page.baseurl }}/install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento