---
group: cloud-guide
title: Scenario based deployment
functional_areas:
  - Cloud
  - Deploy
---

Beginning with the `{{site.data.var.ct}}` package version 2002.1.0 scenario-based deployment was introduced to add the possibility to customize default scenarios.

Each deployment hook has become a **scenario** - an XML configuration file which describes sequence and configuration parameters to deploy Magento

Scenario is a sequence of **steps** - an XML structure that describes a programmatic step to be executed.


## New hooks format

```yaml
hooks:
    build: |
        set -e
        php ./vendor/bin/ece-tools run scenario/generate.xml
        php ./vendor/bin/ece-tools run scenario/transfer.xml
    deploy: |
        php ./vendor/bin/ece-tools run scenario/deploy.xml
    post_deploy: |
        php ./vendor/bin/ece-tools run scenario/post-deploy.xml
```

As you can see each hook described as xml file with defined steps in it. For example, scenario/transfer.xml

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

This approach provides a possibility to extend default scenarios with custom steps which your project may need as part of custom build, deploy or post-deploy processes.


## Extend default scenario

In this example, the custom scenario is merged on top of the default scenario.

```yaml
hooks:
  deploy: |
    php ./vendor/bin/ece-tools run scenario/deploy.xml vendor/vendor-name/module-name/deploy.xml vendor/vendor-name/module-name/deploy2.xml
```

Merging rules:
 - Scenarios are prioritized from their positions. Where right has higher priority than left. (C -> B → A)
 - If Scenario B has some step with the same name as step in Scenario A, step from Scenario B will be prioritized. By using the same step name you can override default step from the baseline scenario with your custom step.


#### Removing default steps

Custom scenario can remove steps from default scenarios, in the next example step "set-production-mode" will be skiped.
```xml
<scenario>
    <step name="enable-maintenance-mode" skip="true" />
    
    <step name="set-production-mode"  skip="true" />
</scenario>
```

#### Replacing steps
Custom scenarios can replace default steps and provide custom implementation. To do so, same as default step name should be used for the custom step.
```xml
<scenario>
    <step name="enable-maintenance-mode" type="VendorName\VendorModule\Step\CustomEnableMaintenanceMode" priority="300"/>
</scenario>
```

#### Changing steps priority
Custom scenarios can change priority of default steps. This mechanism works same way as a replace mechanism with only priority field being changed.
```xml
<scenario>
    <step name="enable-maintenance-mode" type="Magento\MagentoCloud\Step\EnableMaintenanceMode" priority="10"/>
</scenario>
```
In this example "enable-maintenance-mode" step will move to the beginning of the scenario.

#### Example of extending deploy scenario

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

## API introduction

`{{site.data.var.ct}}` provides an API interfaces which are following Semantic Version standards. All API interfaces are marked with **@api** annotation.

### Extension mechanism

Default implementations of API interfaces can be replaced with your own. For this you need to register your module in the extensions list of `{{site.data.var.ct}}`  similar to how modules are registering in Magento.

Create or extend `registration.php` file in the root of your module.
```php
\Magento\MagentoCloud\ExtensionRegistrar::register('module-name', __DIR__);
```
   
`registration.php` should be included to autoload files in `composer.json`

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

And finally add `config/services.xml` file into your module. This configuration will be merged over `config/services.xml` from `{{site.data.var.ct}}` package.

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
You can read more how dependency injection work here [Symfony Dependency Injection](https://symfony.com/doc/current/components/dependency_injection.html).
