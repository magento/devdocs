---
group: configuration-guide
title: Configure Remote Storage
functional_areas:
  - Configuration
  - System
  - Setup
---

Remote Storage allows storing media files on remote storage like AWS S3 and Azure Blob Storage. It provides next possibilities:

- Storing `pub/media` and `var` folder files on remote object storage
- Provides possibility to use server-side image resizing instead of application-side

## Overview

By default, Magento stores media files on the same local filesystem where it is located. This may not be efficient on complicated multi-server setups.

> Schema with multi-node Magento setup

```
[Magento on node 1] [Magento on node 2] [Magento on node 3]
      |                    |                    |
         |                 |            |
         [Remote storage with media files]
```

## Adapters

Magento provides support of different storage adapters.

Navigate to specific adapter to learn more about specific configuration:

- [AWS S3]

### During installation

You can install remote storage by default for new installation using specific options:

```bash
bin/magento setup:install --remote-storage-<parameter_name>=<parameter_value>
```

The list of options:

|Command line Parameter|Parameter name|Meaning|Default value|
|--- |--- |--- |--- |
|remote-storage-adapter|adapter|Name of adapter to use|none|
|remote-storage-bucket|bucket|Bucket name|none|
|remote-storage-region|region|Region name|none|
|remote-storage-prefix|prefix|Optional prefix (location inside of bucket)|empty|
|remote-storage-key|access key|Optional access key|empty|
|remote-storage-secret|secret key|Optional secret key|empty|

### After installation

Use next command to enable remote storage adapter:

```bash
bin/magento remote-storge:enable aws-s3 [region] [bucket] [optional prefix] --access-key=[optional-access-key] --secret-key=[optional-secret-key]
```

### Server-side configuration and image resizing

Magento support image resizng by default on the application side. With remote storage you can offload image resizing to the Nginx side.
Offloading image resizing to server-side is simple and efficinet way to save disk resources and optimize disk usage.

#### Magento configuration

To perform image resizing on Nginx side, Magento must provide the height and width arguments with the link to image.
To enable this functionality:

1. In the _Admin_ panel, click **Stores** > **Settings** > **Configuration** > **General** > **Web**.
1. In the right pane, expand **Url options**.
1. In the _Catalog media URL format_ section, clear **Use system value**.
1. Select `Image optimization based on query parameters` URL in the **_Catalog media URL format_** field.

#### Nginx configuration

To allow Nginx to resize images, follow next steps:

1. Install [nginx image filter module]
```
load_module /etc/nginx/modules/ngx_http_image_filter_module.so;
```

1. Configure your `nginx.conf` file from the included template `nginx.conf.sample`:

```
## The following section allows to offload image resizing from Magento instance to the Nginx.
## Catalog image URL format should be set accordingly.
## See https://docs.magento.com/m2/ee/user_guide/configuration/general/web.html#url-options
#   location ~* ^/media/catalog/.* {
#
#       # Replace placeholders and uncomment the line below to serve product images from public S3
#       # See examples of S3 authentication at https://github.com/anomalizer/ngx_aws_auth
#       # proxy_pass https://<bucket-name>.<region-name>.amazonaws.com;
#
#       set $width "-";
#       set $height "-";
#       if ($arg_width != '') {
#           set $width $arg_width;
#       }
#       if ($arg_height != '') {
#           set $height $arg_height;
#       }
#       image_filter resize $width $height;
#       image_filter_jpeg_quality 90;
#   }
```

1. Configure `proxy_pass` value for your specific adapter.

[AWS S3]: {{site.baseurl}}/config-guide/remote-storage/config-remote-storage-aws-s3.html
[nginx image filter module]: http://nginx.org/en/docs/http/ngx_http_image_filter_module.html
