#Directories Nesting Level Changes for Error Reporting

Sometimes some clients have problems with this error reporting mechanism.

For example:

In the case when there are many requests to the Http application where there is a critical error, a huge number of reports about this error will accumulate in the directory `<magento_root>/var/report`. As a result, report files are accumulated. The number of report files grows to hundreds of thousands, and sometimes it happens that the number of report files reaches a million or more. With such a number of files in the folder, it becomes more difficult to work with error reports. It is not possible to look at the contents of the directory, and it is even difficult to remove the reports. There are cases that report files to occupy all the free space in the storage, which leads to the crash of the application.

To solve this problem, the error reporting mechanism has been changed since Magento `2.3.4`. For Magento Cloud, patches are provided that will make these changes for earlier versions, starting from `2.1.4`

After these changes only unique error reports will be saved. The name and contents of the report files contain hashes that are used in exception log messages to associate log messages with error reports.

In order to avoid a situation where the report directory contains tens of thousands of files, it is possible to set the level of directory nesting for saving error report files.

To do this, create a file `<magento_root>/pub/errors/local.xml`. With the following contents, where number `5` indicates the level of nesting.

```xml
<?xml version="1.0"?>
<config>
    <report>
        <dir_nesting_level>5</dir_nesting_level>
    </report>
</config>
```

For reference, you can use the example file `<magento_root>/pub/errors/local.xml.sample`.

Setting a value through an environment variable is also available. The value of the environment variable `MAGE_ERROR_REPORT_DIR_NESTING_LEVEL` takes precedence over a value in the file `<magento_root>/pub/errors/local.xml`.

When you deploy the project to Magento Cloud, by default `ece-tools` will create the file `<magento_root>/pub/errors/local.xml` at the build phase. The file will contain only the setting for the nesting level of error reporting directories with a value of one. This means that error reports will be distributed in subdirectories.If the nesting level setting has value more than zero, then subdirectories will be created. Each subdirectory will have a name like the first two symbols of hash with offset on two symbols for the next sub-level.

For Example:If we have hash `sha256('')= 44ffb1087a44e61b018b3cdee72284d017f22e52755c24e5c85cbac1647ae7a7`

```
Error report dir nesting level = 0 -> <magento_root>/var/report/44ffb1087a44e61b018b3cdee72284d017f22e52755c24e5c85cbac1647ae7a7
Error report dir nesting level = 1 -> <magento_root>/var/report/44/44ffb1087a44e61b018b3cdee72284d017f22e52755c24e5c85cbac1647ae7a7
Error report dir nesting level = 2 -> <magento_root>/var/report/44/ff/44ffb1087a44e61b018b3cdee72284d017f22e52755c24e5c85cbac1647ae7a7
....
Error report dir nesting level = 32-> <magento_root>/var/report/44/ff/b1/08/7a/44/e6/1b/01/8b/3c/de/e7/22/84/d0/17/f2/2e/52/75/5c/24/e5/c8/5c/ba/c1/64/7a/e7/a7/44ffb1087a44e61b018b3cdee72284d017f22e52755c24e5c85cbac1647ae7a7

```

If an error report dir nesting level has value more then zero then max numbers of the subdirectories in subdirectories will be 256.

**There are several ways in Magento Cloud to change the value of directory nesting for error reports:**

1. Use the setting 'ERROR_REPORT_DIR_NESTING_LEVEL' in the file `.magento.env.yaml`. By default `ERROR_REPORT_DIR_NESTING_LEVEL` = 1
   ```yaml
   stage:                                                                                                     #
    build:                                                                                                   #
       ERROR_REPORT_DIR_NESTING_LEVEL: 2
   ```
    The `ece-tools` will create the file `<magento_root>/pub/errors/local.xml` at the `build` phase. The file will contain only the setting for the nesting level of error reporting directories.
   ```xml
   <?xml version="1.0"?>
   <config>
       <report>
           <dir_nesting_level>2</dir_nesting_level>
       </report>
   </config>
   ```
   This way has the lowest priority.
1. Create a settings file `<magento_root>/pub/errors/local.xml` yourself. In this case, the `ece-tool` will not create a file `<magento_root>/pub/errors/local.xml` and the value `ERROR_REPORT_DIR_NESTING_LEVEL` specified in the file `.magento.env.yaml` will be ignored

1. Specify a value in an environment variable `MAGE_ERROR_REPORT_DIR_NESTING_LEVEL`.This way has the highest priority.

