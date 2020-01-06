---
group: configuration-guide
title: Disable module output
functional_areas:
  - Configuration
  - System
  - Setup
---

By default, all modules are configured so that a module's output can be written to a view. Turning off output offers a way to essentially disable a module that can not be disabled due to hard dependencies.

For example, the `Customer` module depends on the `Review` module, so the `Review` module can not be disabled.
However, if you do not want customers to be able to provide reviews, you could turn off output from the `Review` module.

{:.bs-callout-info}
If a merchant used the Admin to disable a module's output in a previous release, you must manually configure the system to migrate these settings.

The Output disabling is performed in following classes:

-  [\Magento\Framework\View\Element\AbstractBlock::toHtml]({{ site.mage2bloburl }}/36097739bbb0b8939ad9a2a0dadee64318153dca/lib/internal/Magento/Framework/View/Element/AbstractBlock.php#L651){:target="_blank"}
-  [\Magento\Backend\Block\Template::isOutputEnabled]({{ site.mage2bloburl }}/0c786907ffe03d0e2990612eec16ee58b00379c5/app/code/Magento/Backend/Block/Template.php#L96){:target="_blank"}

{:.bs-callout-warning}
Please note that by disabling the module's output, the module is still enabled and keeps working, but no block, page or field is rendered on the frontend or backend.

## Disable module output in a pipeline deployment

To disable module output in the pipeline deployment or any other deployment, with multiple instances of Magento:

1. Edit the `Backend` module's `config.xml` file.
1. Export the configuration changes.

### Edit the `Backend` module's `config.xml` file

1. Archive the original `config.xml` file.
1. Add lines similar to the following to the `<Magento_install_dir>/vendor/magento/module-backend/etc/config.xml` file, directly under the `<default>` element:

```xml
<advanced>
    <modules_disable_output>
        <Magento_Newsletter>1</Magento_Newsletter>
    </modules_disable_output>
</advanced>
```

Here:

-  `<modules_disable_output>` contains a list of modules.
-  `<Magento_Newsletter></Magento_Newsletter>` specifies which module to disable output for.
-  `1` is the flag that disables output for the `Magento_Newsletter` module.

As a sample result of this configuration, customers can no longer sign up to receive newsletters.

### Export the configuration changes

Run the following command to export the configuration changes:

```bash
bin/magento app:config:dump
```

The results are written to the `<Magento_install_dir>/app/etc/config.php` file.

Next, clear the cache to enable the new setting:

```bash
bin/magento cache:clean config
```

For more information about this command, see [Export the configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html).

## Disable module output in a simple deployment

The procedure for disabling module output on a single instance of Magento is easier because the changes don't have to be distributed.

1. Archive the original `<Magento_install_dir>/app/etc/config.php` file.
1. Add the `advanced` and `modules_disable_output` sections to the `config.php` file (if they don't already exist):

```php
'system' =>
  array (
    'websites' =>
    array (
      'base' =>
      array (
        'advanced' =>
        array (
          'modules_disable_output' =>
          array (
            'Magento_Review' => '1',
          ),
        ),
      ),
    ),
  ),
```

In this example, output for the `Magento_Review` module has been disabled and customers can no longer review products.
To re-enable output, set the value to `0`.