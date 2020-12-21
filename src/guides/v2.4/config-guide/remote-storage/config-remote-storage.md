---
group: configuration-guide
title: Configure remote storage
functional_areas:
  - Configuration
  - System
  - Setup
---

The Remote Storage module provides the option to store media files and schedule imports/exports in a persistent, remote storage container using a storage service, such as AWS S3 or Azure Blob Storage. By default, Magento stores media files in the same filesystem that contains the application. This is inefficient for complex, multi-server configurations, and can result in degraded performance when sharing resources. With the Remote Storage module, you can store media files in the `pub/media` directory and import/export files in the `var` directory of the remote object storage to take advantage of server-side image resizing.

![schema image]

## Remote storage options

You can configure remote storage using the `remote-storage` option with the [`setup` CLI command][setup]. The `remote-storage` option uses the following syntax:

```text
--remote-storage-<parameter-name>="<parameter-value>"
```

The `parameter-name` refers to the specific remote storage parameter name. The following table lists the parameters available for configuring remote storage:

| Command line Parameter | Parameter name | Description | Default value |
|--- |--- |--- |--- |
| `remote-storage-driver` | driver | Adapter name<br>Possible values:<br>**file**: Disables remote storage and uses the local filesystem<br>**aws-s3**: Use the [Amazon Simple Storage Service (Amazon S3)][AWS S3] | none |
| `remote-storage-bucket` | bucket | Object storage or container name | none |
| `remote-storage-prefix` | prefix | Optional prefix (location inside of object storage) | empty |
| `remote-storage-region` | region | Region name | none |
| `remote-storage-key` | access key | Optional access key | empty |
| `remote-storage-secret` | secret key | Optional secret key | empty |

### Storage adapters

The default storage location is in the local filesystem. A _storage adapter_ enables you to connect to a storage service and store your files anywhere. Magento supports configuring the following storage services:

-  [Amazon Simple Storage Service (Amazon S3)][AWS S3]

## Enable remote storage

You can install remote storage during a new Magento installation or add it to an existing Magento instance using `remote-storage` parameter name-and-value pairs with `setup` CLI commands. Minimally, you must supply the storage `driver`, `bucket`, and `region`.

The following examples enable the remote storage with an AWS S3 storage adapter in the US:

-  Install new Magento with remote storage

   ```bash
   bin/magento setup:install --remote-storage-driver="aws-s3" --remote-storage-bucket="myBucket" --remote-storage-region="us-east-1"
   ```

-  Enable remote storage on existing Magento

   ```bash
   bin/magento setup:config:set --remote-storage-driver="aws-s3" --remote-storage-bucket="myBucket" --remote-storage-region="us-east-1"
   ```

## Migrate content

After you enable remote storage for a specific adapter, you can use the CLI to migrate existing _media_ files to the remote storage.

```bash
./magento2ce/bin/magento remote-storage:sync
```

{:.bs-callout-info}
The sync command only migrates files in the `pub/media` directory, _not_ the import/export files in the `var` directory. See [Scheduled Import/Export][import-export] in the _Magento 2.4 User Guide_.

<!-- link definitions -->
[AWS S3]: {{site.baseurl}}/guides/v2.4/config-guide/remote-storage/config-remote-storage-aws-s3.html
[import-export]: https://docs.magento.com/user-guide/system/data-scheduled-import-export.html
[nginx-module]: http://nginx.org/en/docs/http/ngx_http_image_filter_module.html
[schema image]: {{site.baseurl}}/common/images/config-remote-storage-schema.png
{:width="500px"}
[setup]: {{site.baseurl}}/guides/v2.4/install-gde/install/cli/install-cli-subcommands-deployment.html#instgde-cli-subcommands-configphp
