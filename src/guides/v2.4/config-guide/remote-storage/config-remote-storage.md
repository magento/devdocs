---
group: configuration-guide
title: Configure remote storage
functional_areas:
  - Configuration
  - System
  - Setup
---

The Remote Storage module provides the option to store media files in a persistent, remote storage container using a storage service, such as AWS S3 or Azure Blob Storage. By default, Magento stores media files in the same filesystem that contains the application. This is not efficient for complex, multi-server configurations, which can result in degraded performance when sharing resources. With this module, you can store `pub/media` and `var` folder files on remote object storage and take advantage of server-side image resizing.

![schema image]

## Remote storage options

You can configure remote storage using the `remote-storage` option with the `setup` CLI command. The `remote-storage` option uses the following syntax:

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

The default storage location is the local filesystem. A _storage adapter_ allows you to connect to a storage service and store your files anywhere. Magento supports configuring the following storage services:

-  [Amazon Simple Storage Service (Amazon S3)][AWS S3]

## Enable remote storage

You can install remote storage during a new Magento installation or add it to an existing Magento instance using `remote-storage` parameter name-and-value pairs with `setup` CLI commands. Minimally, you must supply the storage driver, bucket, and region.

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

After you enable remote storage for a specific adapter, you can use the CLI to migrate existing media files to the remote storage.

```bash
./magento2ce/bin/magento remote-storage:sync
```

<!-- link definitions -->
[AWS S3]: {{page.baseurl}}/config-guide/remote-storage/config-remote-storage-aws-s3.html
[nginx-module]: http://nginx.org/en/docs/http/ngx_http_image_filter_module.html
[schema image]: {{site.baseurl}}/common/images/config-remote-storage-schema.png
{:width="500px"}
