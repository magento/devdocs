---
group: configuration-guide
title: Configure Remote Storage
functional_areas:
  - Configuration
  - System
  - Setup
---

The Remote Storage module provides the option to store media files in a persistent remote storage container using a storage service such as AWS S3 or Azure Blob Storage. By default, Magento stores media files in the same filesystem that contains the application. This is not efficient for complex, multi-server configurations, which can result in degraded performance when sharing resources. With this module, you can store `pub/media` and `var` folder files on remote object storage and take advantage of server-side image resizing.

![schema image]

## Install remote storage

The following command installs the Remote Storage module during a new Magento installation using the `remote-storage-` parameter name and value pair:

```bash
bin/magento setup:install --remote-storage-<parameter-name>=<parameter-value>
```

The `parameter-name` refers to a storage adapter.

## Enable storage adapter

The default storage location is the local filesystem. A _storage adapter_ allows you to connect to a storage service and store your files anywhere. Magento supports configuring the following storage services:

-  [Amazon Simple Storage Service (Amazon S3)][AWS S3]

The `setup:config:set` command in the Magento CLI enables the remote storage module and allows you to set the storage service parameters. Minimally, you must supply the storage driver, the object storage name, and the storage location. For example, to enable AWS S3 remote storage:

```bash
bin/magento setup:config:set --remote-storage-driver="<driver-name>" --remote-storage-bucket="<bucket-name>" --remote-storage-region="<region-name>" --remote-storage-prefix="<optional-prefix>" --access-key=<optional-access-key> --secret-key=<optional-secret-key> -n
```

The following table lists the parameters available for configuring the storage adapter.

| Command line Parameter | Parameter name | Meaning | Default value |
|--- |--- |--- |--- |
| `remote-storage-driver` | driver | Name of adapter to use | none |
| `remote-storage-bucket` | bucket | Object storage or container name | none |
| `remote-storage-prefix` | prefix | Optional prefix (location inside of object storage) | empty |
| `remote-storage-region` | region | Region name | none |
| `remote-storage-key` | access key | Optional access key | empty |
| `remote-storage-secret` | secret key | Optional secret key | empty |

## Configure image resizing

Magento supports image resizing on the application side by default. With the Remote Storage module enabled, you can offload an image resizing to the server (Nginx) side, which is a simple and efficient way to save disk resources and optimize disk usage.

### Magento configuration

To perform an image resizing on the Nginx side, you must configure Magento to provide the height and width arguments and the link to the image.

{:.procedure}
To configure Magento for server-side image resizing:

1. In the _Admin_ panel, click **Stores** > **Settings** > **Configuration** > **General** > **Web**.

1. In the right pane, expand **Url options**.

1. In the _Catalog media URL format_ section, clear **Use system value**.

1. Select the `Image optimization based on query parameters` URL in the **_Catalog media URL format_** field.

1. Click **Save Config**.

### Nginx configuration

To continue the configuration to perform image resizing on the Nginx side, you must prepare the `nginx.conf` file and provide a `proxy_pass` value for your chosen adapter.

{:.procedure}
To enable Nginx to resize images:

1. Install the [Nginx image filter module].

   ```shell
   load_module /etc/nginx/modules/ngx_http_image_filter_module.so;
   ```

1. Create an `nginx.conf` file based on the included template `nginx.conf.sample` file. For example:

```conf
location ~* \.(ico|jpg|jpeg|png|gif|svg)$ {
    set $width "-";
    set $height "-";
    if ($arg_width != '') {
        set $width $arg_width;
    }
    if ($arg_height != '') {
        set $height $arg_height;
    }
    image_filter resize $width $height;
    image_filter_jpeg_quality 90;
}
```

1. [_Optional_] Configure a `proxy_pass` value for your specific adapter.

-  [Amazon Simple Storage Service (Amazon S3)][AWS S3]

<!-- link definitions -->
[AWS S3]: {{page.baseurl}}/config-guide/remote-storage/config-remote-storage-aws-s3.html
[nginx image filter module]: http://nginx.org/en/docs/http/ngx_http_image_filter_module.html
[schema image]: {{site.baseurl}}/common/images/config-remote-storage-schema.png
{:width="500px"}
