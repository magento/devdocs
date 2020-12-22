---
group: configuration-guide
title: Dependency reports
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of dependency reports

You can run the following types of reports:

-  [**Module**](https://glossary.magento.com/module) dependencies: Shows the total number of dependencies between modules and whether the dependencies are hard or soft.
-  **Circular dependencies:** Shows the total number of dependency chains and the number and list of circular dependencies for each module.
-  **Framework dependencies:** Shows the total number of dependencies on the Magento framework by module (including the total number of framework entries for each library).

A dependency in a comment is also a dependency.

## Run dependency reports

Command options:

```bash
bin/magento info:dependencies:{show-modules|show-modules-circular|show-framework} [-d|--directory="<path>"] [-o|--output="<path and filename"]
```

The following table explains this command's options, parameters, and values.

| Parameter               | Value                                                                                                                | Required? |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | --------- |
| `show-modules`          | Module dependencies report.                                                                                          | Yes       |
| `show-modules-circular` | Circular dependencies report.                                                                                        | Yes       |
| `show-framework`        | Framework dependencies report.                                                                                       | Yes       |
| `-d --directory`        | Path to the base directory to start searching for report data.                                                       | No        |
| `-o --output`           | Specifies the absolute file system path and file name of the comma-separated value (csv) output file for the report. | No        |

If no directory or filename is passed as an argument, the following application root is used as the default directory, and the following default filenames are used:

| Command                                           | Filename                            |
| ------------------------------------------------- | ----------------------------------- |
| `magento info:dependencies:show-modules`          | `modules-dependencies.csv`          |
| `magento info:dependencies:show-modules-circular` | `modules-circular-dependencies.csv` |
| `magento info:dependencies:show-framework`        | `framework-dependencies.csv`        |

### Sample module dependencies report

The following is a portion of the output for a sample module dependencies report:

```terminal
"","All","Hard","Soft"
"Total number of dependencies","602","587","15"

"Dependencies for each module:","All","Hard","Soft"
"magento/module-cron","2","2","0"
" -- magento/module-config","","1","0"
" -- magento/module-store","","1","0"

"magento/module-catalog-rule","8","8","0"
" -- magento/module-store","","1","0"
" -- magento/module-rule","","1","0"
" -- magento/module-catalog","","1","0"
" -- magento/module-customer","","1","0"
" -- magento/module-backend","","1","0"
" -- magento/module-eav","","1","0"
" -- magento/module-indexer","","1","0"
" -- magento/module-import-export","","1","0"
```

### Sample circular dependencies report

The following is a portion of the output for a sample circular dependencies report:

```terminal
"Circular dependencies:","Total number of chains"
"","848"

"Circular dependencies for each module:",""
"magento/module-config","70"
"magento/module-config->magento/module-store->magento/module-directory->magento/module-config"
"magento/module-config->magento/module-store->magento/module-config"
"magento/module-config->magento/module-cron->magento/module-config"
"magento/module-config->magento/module-email->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-theme->magento/module-customer->magento/module-eav->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-reports->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-catalog->magento/module-theme->magento/module-eav->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-catalog->magento/module-log->magento/module-eav->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-customer->magento/module-checkout->magento/module-catalog-inventory->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-customer->magento/module-checkout->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-customer->magento/module-theme->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-payment->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-checkout->magento/module-customer->magento/module-review->magento/module-catalog->magento/module-themeax->magento/module-config"
"magento/module-config->magento/module-backend->magento/module-sales->magento/module-checkout->magento/module-customer->magento/module-review->magento/module-catalog->magento/module-catalog-rule->magento/module-rule->magento/module-eav->magento/module-config"
```

### Sample framework dependencies report

The following is a portion of the output for a sample framework dependencies report:

```terminal
"Dependencies of framework:","Total number"
"","111"

"Dependencies for each module:",""
"Magento\Cron","1"
" -- Magento\Framework","143"

"Magento\CatalogRule","1"
" -- Magento\Framework","234"

"Magento\Webapi","2"
" -- Magento\Framework","347"
" -- Magento\Server","1"

"Magento\Checkout","1"
" -- Magento\Framework","759"

"Magento\Reports","1"
" -- Magento\Framework","553"
```
