---
group: configuration-guide
title: Configure image resizing for remote storage
functional_areas:
  - Configuration
  - System
---

Magento supports image resizing on the application side by default. With the Remote Storage module enabled, you can offload image resizing to the server side using Nginx, which is a simple and efficient way to save disk resources and optimize disk usage.

## Configure Magento

To perform an image resizing on the server side, you must configure Magento to provide the height and width arguments and a link to the image.

{:.procedure}
To configure Magento for server-side image resizing:

1. In the _Admin_ panel, click **Stores** > **Settings** > **Configuration** > **General** > **Web**.

1. In the right pane, expand **Url options**.

1. In the _Catalog media URL format_ section, clear **Use system value**.

1. Select the `Image optimization based on query parameters` URL in the **_Catalog media URL format_** field.

1. Click **Save Config**.

1. Continue to the [Nginx configuration](#nginx-configuration).

## Nginx configuration

To continue the configuration to perform server-side image resizing, you must prepare the `nginx.conf` file and provide a `proxy_pass` value for your chosen adapter.

{:.procedure}
To enable Nginx to resize images:

1. Install the [Nginx image filter module][nginx-module].

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
[nginx-module]: http://nginx.org/en/docs/http/ngx_http_image_filter_module.html
