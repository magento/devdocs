---
group: config-guide
subgroup: 07_conf
title: Disable module output
menu_title: Disable module output
menu_order: 15
version: 2.2
github_link: config-guide/config/disable-module-output.md
functional_areas:
  - Configuration
  - System
  - Setup
---

By default, all modules are configured so that a module's output can be written to a view. Turning off output offers a way to essentially disable a module that can't be disabled due to hard dependencies.

For example, the `Customer` module depends on the `Review` module, so the `Review` module can't be disabled. However, if you don't want customers to be able to provide reviews, you could turn off output from the `Review` module.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If a merchant used the Admin to disable a module's output in a previous release, you must manually configure the system to migrate these settings.
</div>

## Disable module output in a pipeline deployment

To disable module output in pipeline or any other deployment with multiple instances of Magento:.

1. Edit the `Backend` module's `config.xml` file.
2. Export the configuration changes.

### Edit the `Backend` module's `config.xml` file

Archive the original `config.xml` file. Then add lines similar to the following to the `<Magento_install_dir>/vendor/magento/module-backend/etc/config.xml` file, directly under the `<default>` element:

{% highlight xml %}
<advanced>
    <modules_disable_output>
        <Magento_Newsletter>1</Magento_Newsletter>
    </modules_disable_output>
</advanced>
{% endhighlight %}

Here:

- `<modules_disable_output>` contains a list of modules.
- `<Magento_Newsletter></Magento_Newsletter>` specifies which module to disable output for.
- `1` is the flag that disables output for the `Magento_Newsletter` module.

As a sample result of this configuration, customers can no longer sign up to receive newsletters.

### Export the configuration changes

Run the following command to export the configuration changes:

`magento app:config:dump`

The results are written to the `<Magento_install_dir>/app/etc/config.php` file.

For more information about this command, see [Export the configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html).

## Disable module output in a simple deployment

The procedure for disabling module output on a single instance of Magento is easier because the changes don't have to be distributed.

Archive the original `<Magento_install_dir>/app/etc/config.php` file. Then add the `advanced` and `modules_disable_output` sections to the `config.php` file (if they don't already exist):

```
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

Here, the `array` beneath `modules_disable_output` contains a list of modules. A value of `1` disables output for that module.

As a sample result of this configuration, customers can no longer sign up to receive newsletters.
