## Remove sample data modules or update sample data {#instgde-prereq-sample-intro}

This topic discusses how to:

*  [Remove sample data modules](#inst-sample-remove) from the Magento installation `composer.json`. This option does *not* remove sample data from the database.

*  [Prepare to update sample data](#inst-sample-reset) (for example, before updating the Magento application).

## First steps {#sample-first}

{% include install/first-steps-cli.md %}

## Remove sample data modules {#inst-sample-remove}

Enter the following command:

```bash
bin/magento sampledata:remove
```

The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %}

## Prepare to update sample data   {#inst-sample-reset}

This command enables you to update sample data before you update the Magento application.

To prepare sample data for updating, enter the following command:

```bash
bin/magento sampledata:reset
```

After that, [update the Magento application]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update).
