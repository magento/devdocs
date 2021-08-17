---
group: cloud-guide
title: Scenario-based deployment
functional_areas:
  - Cloud
  - Deploy
---

With `{{site.data.var.ct}}` 2002.1.0 and later, you can use the scenario-based deployment feature to customize the default deployment behavior.
This feature uses **scenarios** and **steps** in the configuration:

-  **Scenario configuration**–Each deployment hook is a *scenario*, which is an XML configuration file that describes the sequence and configuration parameters to complete Magento deployment tasks. You configure the scenarios in the `hooks` section of the `.magento.app.yaml` file.

-  **Step configuration**–Each scenario uses a sequence of *steps* that programmatically describe the operations required to complete deployment tasks. You configure the steps in an XML-based scenario configuration file.

{{site.data.var.ece}} provides a set of [default scenarios] and [default steps] in the {{site.data.var.ct}} package. You can customize deployment behavior by creating custom XML configuration files to override or customize the default configuration. You can also use scenarios and steps to run code from custom modules.

## Add scenarios using build and deploy hooks

You add the scenarios for building and deploying Magento to the `hooks` section of the `.magento.app.yaml` file. Each hook specifies the scenarios to run during each phase. The following example shows the default scenario configuration.

> `magento.app.yaml` hooks

```yaml
hooks:
    build: |
        set -e
        php ./vendor/bin/ece-tools run scenario/build/generate.xml
        php ./vendor/bin/ece-tools run scenario/build/transfer.xml
    deploy: |
        php ./vendor/bin/ece-tools run scenario/deploy.xml
    post_deploy: |
        php ./vendor/bin/ece-tools run scenario/post-deploy.xml
```

{:.bs-callout-info}
With the release of {{site.data.var.ct}} 2002.1.x, we updated the [hooks configuration] format. The legacy format from {{site.data.var.ct}} 2002.0.x releases is still supported. However, you must update to the new format to use the scenario-based deployment feature.

## Review scenario steps

In the hook configuration, each scenario is an XML file that contains steps to run build, deploy, or post-deploy tasks. For example, the `scenario/transfer` file includes three steps: `compress-static-content`, `clear-init-directory`, and `backup-data`

> `scenario/transfer.xml`

```xml
<?xml version="1.0"?>
<scenario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:ece-tools:config/scenario.xsd">
    <step name="compress-static-content" type="Magento\MagentoCloud\Step\Build\CompressStaticContent" priority="100"/>
    <step name="clear-init-directory" type="Magento\MagentoCloud\Step\Build\ClearInitDirectory" priority="200"/>
    <step name="backup-data" type="Magento\MagentoCloud\Step\Build\BackupData" priority="300">
        <arguments>
            <argument name="logger" xsi:type="object">Psr\Log\LoggerInterface</argument>
            <argument name="steps" xsi:type="array">
                <item name="static-content" xsi:type="object" priority="100">Magento\MagentoCloud\Step\Build\BackupData\StaticContent</item>
                <item name="writable-dirs" xsi:type="object"  priority="200">Magento\MagentoCloud\Step\Build\BackupData\WritableDirectories</item>
            </argument>
        </arguments>
    </step>
</scenario>
```

## Extend a default scenario

The following example extends the default deploy scenario by appending additional deploy configuration files to the hook configuration.

```yaml
hooks:
  deploy: |
    php ./vendor/bin/ece-tools run scenario/deploy.xml vendor/<vendor-name>/<module-name>/deploy.xml vendor/<vendor-name>/<module-name>/deploy2.xml
```

During deployment, the custom scenarios merge with the default scenario-based on the following rules:

-  Scenarios are prioritized based on their sequence in the hook definition with the last scenario listed having the highest priority.

   In the example, the scenarios have the following priority:

   1. `vendor/vendor-name/module-name/deploy2.xml`
   1. `vendor/vendor-name/module-name/deploy.xml`
   1. `scenario/deploy.xml` (default or baseline scenario)

-  The steps in the highest priority scenario override steps with the same name in the other scenarios. New steps are added to the configuration. The same rules apply for more than 2 scenarios with each scenario being prioritized from right to left, for example (C → B → A).

### Remove default steps

You remove steps from default scenarios using the `skip` parameter.

For example, to skip the `enable-maintenance-mode` and `set-production-mode` steps in the default deploy scenario, create a configuration file that includes the following configuration.

> `vendor/vendor-name/module-name/deploy-custom-mode-config.xml`

```xml
<?xml version="1.0"?>
<scenario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:ece-tools:config/scenario.xsd">
    <step name="enable-maintenance-mode" skip="true" />
    <step name="set-production-mode"  skip="true" />
</scenario>
```

To use the custom configuration file, update the default `.magento.app.yaml` file.

> `.magento.app.yaml` with custom deploy scenario

```yaml
hooks:
    build: |
        set -e
        php ./vendor/bin/ece-tools run scenario/build/generate.xml
        php ./vendor/bin/ece-tools run scenario/build/transfer.xml
    deploy: |
        php ./vendor/bin/ece-tools run scenario/deploy.xml  vendor/vendor-name/module-name/deploy-custom-mode-config.xml
    post_deploy: |
        php ./vendor/bin/ece-tools run scenario/post-deploy.xml
```

### Replace default steps

Custom scenarios can replace default steps to provide custom implementation. To do so, use the default step name as the name for the custom step.

For example, in the [default deploy scenario] the `enable-maintenance-mode` step runs the default [EnableMaintenanceMode PHP script] provided by Magento.

```xml
<step name="enable-maintenance-mode" type="Magento\MagentoCloud\Step\EnableMaintenanceMode" priority="300"/>
```

To override this step, create a custom scenario configuration file to run a different script when the `enable-maintenance-mode` step runs.

```xml
<?xml version="1.0"?>
<scenario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:ece-tools:config/scenario.xsd">
<scenario>
    <step name="enable-maintenance-mode" type="VendorName\VendorModule\Step\CustomEnableMaintenanceMode" priority="300"/>
</scenario>
```

### Change the step priority

Custom scenarios can change the priority of default steps. The following step changes the priority of the `enable-maintenance-mode` step from `300` to `10` so that the step runs earlier in the deploy scenario.

```xml
<?xml version="1.0"?>
<scenario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:ece-tools:config/scenario.xsd">
<scenario>
    <step name="enable-maintenance-mode" type="Magento\MagentoCloud\Step\EnableMaintenanceMode" priority="10"/>
</scenario>
```

In this example, the `enable-maintenance-mode` step moves to the beginning of the scenario because it has a lower priority than all other steps in the default deploy scenario.

### Example: Extend the deploy scenario

The following example customizes the [default deploy scenario] with the following changes:

-  Replaces the `remove-deploy-failed-flag` step with a custom step
-  Skips the `clean-redis-cache` sub-step in the pre-deploy step
-  Skips the `unlock-cron-jobs` step
-  Skips the `validate-config` step to disable critical validators
-  Adds a new pre-deploy step

> `vendor/vendor-name/module-name/deploy-extended.xml`

```xml
<?xml version="1.0"?>
<scenario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:ece-tools:config/scenario.xsd">
    <!-- Replace "remove-deploy-failed-flag" step with custom step -->
    <step name="remove-deploy-failed-flag" type="Vendor\ModuleName\Step\Deploy\RemoveDeployFailedFlag" priority="100"/>

    <!-- Skip "clean-redis-cache" sub-step in pre-deploy step -->
    <step name="pre-deploy" type="Magento\MagentoCloud\Step\Deploy\PreDeploy" priority="200">
        <arguments>
            <argument name="logger" xsi:type="object">Psr\Log\LoggerInterface</argument>
            <argument name="steps" xsi:type="array">
                <item name="clean-redis-cache" xsi:type="object" skip="true"/>
            </argument>
        </arguments>
    </step>

    <!-- Skip step "unlock-cron-jobs" -->
    <step name="unlock-cron-jobs" skip="true"/>

    <!-- Skip critical validators -->
    <step name="validate-config" type="Magento\MagentoCloud\Step\ValidateConfiguration" priority="300">
        <arguments>
            <argument name="logger" xsi:type="object">Psr\Log\LoggerInterface</argument>
            <argument name="validators" xsi:type="array">
                <item name="critical" xsi:type="array">
                    <item name="database-configuration" xsi:type="object" skip="true"/>
                    <item name="search-configuration" xsi:type="object" skip="true"/>
                </item>
            </argument>
        </arguments>
    </step>

    <!-- Add new step into the beginning of the deploy scenario -->
    <step name="new-pre-deploy-step" type="Vendor\ModuleName\Step\Deploy\PreDeploy" priority="10"/>
</scenario>
```

To use this script in your project, add the following configuration to the `.magento.app.yaml` file for your {{site.data.var.ece}} project:

```yaml
hooks:
    build: |
        set -e
        php ./vendor/bin/ece-tools run scenario/build/generate.xml
        php ./vendor/bin/ece-tools run scenario/build/transfer.xml
    deploy: |
        php ./vendor/bin/ece-tools run scenario/deploy.xml  vendor/vendor-name/module-name/deploy-extended.xml
    post_deploy: |
        php ./vendor/bin/ece-tools run scenario/post-deploy.xml
```

{:.bs-callout-tip}
You can review the [default scenarios] and [default step configuration] in the `ece-tools` GitHub repository to determine which scenarios and steps to customize for your project build, deploy, and post-deploy tasks.

## Add a custom module to extend `{{site.data.var.ct}}`

The `{{site.data.var.ct}}` package provides default API interfaces that follow Semantic Version standards. All API interfaces are marked with **@api** annotation. You can replace the default API interface implementation with your own by creating a custom module and modifying the default code as needed.

To use the custom module with {{site.data.var.ece}}, you must register your module in the extensions list for the `{{site.data.var.ct}}` package. The registration process is similar to the process you use to register modules in {{site.data.var.ee}}.

{:.procedure}
To register a module with the {{site.data.var.ct}} package:

1. Create or extend the `registration.php` file in the root of your module.

   ```php
   \Magento\MagentoCloud\ExtensionRegistrar::register('module-name', __DIR__);
   ```

1. Update the `autoload` section for your module configuration file to include the `registration.php` file to autoload module files in `composer.json`.

   ```json
   {
     "name": "vendor/ece-tools-extend",
     "description": "Extension for ece-tools",
     "type": "magento2-component",
     "version": "1.0.0",
     "license": "OSL-3.0",
     "autoload": {
       "files": [ "registration.php" ],
       "psr-4": {
         "Vendor\\EceToolExtend\\": "src/"
       }
     }
   }
   ```

1. Add the `config/services.xml` file into your module. This configuration be merged over `config/services.xml` from `{{site.data.var.ct}}` package.

   ```xml
   <?xml version="1.0" encoding="UTF-8" ?>
   <container xmlns="http://symfony.com/schema/dic/services"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://symfony.com/schema/dic/services https://symfony.com/schema/dic/services/services-1.0.xsd">
       <services>
           <defaults autowire="true" autoconfigure="true" public="true"/>

           <prototype namespace="Vendor\EceToolExtend\" resource="../src/*" exclude="../src/{Test}"/>

           <!-- Use your own implementation of EnvironmentDataInterface -->
           <service id="Magento\MagentoCloud\Config\EnvironmentDataInterface" alias="Vendor\EceToolExtend\Config\CustomEnvironmentData" />
       </services>
   </container>
   ```

To learn more about dependency injection, see [Symfony Dependency Injection](https://symfony.com/doc/current/components/dependency_injection.html).

[default scenarios]: https://github.com/magento/ece-tools/tree/2002.1/scenario
[default steps]: https://github.com/magento/ece-tools/tree/2002.1/src/Step
[default deploy scenario]: https://github.com/magento/ece-tools/blob/develop/scenario/deploy.xml
[EnableMaintenanceMode PHP script]: https://github.com/magento/ece-tools/blob/develop/src/Step/EnableMaintenanceMode.php
[hooks configuration]: {{site.baseurl}}/cloud/project/magento-app-properties.html#hooks
