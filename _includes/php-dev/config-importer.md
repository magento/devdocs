<div markdown="1">

{::options syntax_highlighter="rouge" /}

This topic discusses configuration importers, which you can use with the Magento 2.2 [split deployment model]({{ page.baseurl }}config-guide/prod/prod_deploy-over.html). The purpose of an importer is to enable you to provide consistent configuration across multiple systems (such as development, staging, and production).

Configuration importers are used for importing configuration data from the shared configuration file `config.php` to the appropriate storage, for example, into the database.

To import the configuration, use the [`magento app:config:import` command]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-import.html)

Currently Magento has the following importers:

* `Magento\Config\Model\Config\Importer`
* `Magento\Store\Model\Config\Importer`
* `Magento\Theme\Model\Config\Importer`

### ImporterInterface
All Magento importers implement implement the interface [`Magento\Framework\App\DeploymentConfig\ImporterInterface`]({{ site.mage2200url }}lib/internal/Magento/Framework/App/DeploymentConfig/ImporterInterface.php){:target="_blank"}.

This interface has the following methods:

*   `ImporterInterface::import(array $data):array`&emdash;Contains the implementation to import data from `config.php`.

    Its argument `$data` is the array of configurations from `config.php`. This method should return the array of messages that are generated during the import process.

*   `ImporterInterface::getWarningMessages(array $data):array`&mdash;Generates and returns the array of warning messages that contain information about what will be changed in the system.
    
    Its argument `$data` is the same as for the method `import`.
    
    If this method returns an empty array, the import proceeds without interaction.

    You can also provide a message such as `Do you want to continue [yes/no]?`

    If the user enters `no`, import is canceled; otherwise, if the user enters `yes`, the import is processed.
   
### Implement your own importer
To implement a custom importer:

1.  Create an `Importer` class that implements [`Magento\Framework\App\DeploymentConfig\ImporterInterface`]({{ site.mage2200url }}lib/internal/Magento/Framework/App/DeploymentConfig/ImporterInterface.php){:target="_blank"}.
2.  Register your importer in your module's [`di.xml`]({{ page.baseurl }}extension-dev-guide/depend-inj.html):
    
    ```xml
    <type name="Magento\Deploy\Model\DeploymentConfig\ImporterPool">
        <arguments>
            <argument name="importers" xsi:type="array">
                <item name="i18n" xsi:type="array">
                    <item name="class" xsi:type="string">Vendor\Module\Model\Config\Importer</item>
                    <item name="sortOrder" xsi:type="number">110</item>
                </item>
            </argument>
        </arguments>
    </type>
    ```
    
The preceding example registers the importer `Vendor\Module\Model\Config\Importer` for the `i18n` array in `config.php`.

The `i18n` array has a queue order of 110, which means this importer runs after importers that have value of sort order less than 110 has and if values in the section `i18n` were changed.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
An array cannot be imported by more than one importer.
</div>