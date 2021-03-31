---
group: configuration-guide
title: Configure AWS S3 bucket for remote storage
functional_areas:
  - Configuration
  - System
  - Setup
---

The [Amazon Simple Storage Service (Amazon S3)][AWS S3] is an object storage service that offers industry-leading scalability, data availability, security, and performance. The AWS S3 service uses buckets, or containers, for data storage. This configuration requires you to create a _private_ bucket.

{:.bs-callout-warning}
Magento highly discourages the use of public buckets because it poses a serious security risk.

{:.procedure}
To enable remote storage with the AWS S3 adapter:

1. Log in to your Amazon S3 dashboard and create a _private_ bucket.

1. Set up [AWS IAM][] roles. Alternatively, generate access and secret keys.

1. Configure Magento to use the private bucket. See [Remote storage options][options] for a full list of parameters.

   ```bash
   bin/magento setup:config:set --remote-storage-driver="aws-s3" --remote-storage-bucket="<bucket-name>" --remote-storage-region="<region-name>" --remote-storage-prefix="<optional-prefix>" --remote-storage-key=<optional-access-key> --remote-storage-secret=<optional-secret-key> -n
   ```

## Configure Nginx

Nginx requires an additional configuration to perform Authentication with the `proxy_pass` directive. Add the following proxy information to the `nginx.conf` file:

>nginx.conf

```conf
location ~* \.(ico|jpg|jpeg|png|gif|svg|js|css|swf|eot|ttf|otf|woff|woff2)$ {
    # Proxying to AWS S3 storage.
    resolver 8.8.8.8;
    set $bucket "<s3-bucket-name>";
    proxy_pass https://s3.amazonaws.com/$bucket$uri;
    proxy_pass_request_body off;
    proxy_pass_request_headers off;
    proxy_intercept_errors on;
    proxy_hide_header "x-amz-id-2";
    proxy_hide_header "x-amz-request-id";
    proxy_hide_header "x-amz-storage-class";
    proxy_hide_header "Set-Cookie";
    proxy_ignore_headers "Set-Cookie";
}
```

### Authentication

If you use access and secret keys instead of [AWS IAM][] roles, you must include the [`ngx_aws_auth`][ngx repo] Nginx module.

<!-- link definitions -->
[AWS S3]: https://aws.amazon.com/s3
[AWS IAM]: https://aws.amazon.com/iam/
[options]: {{page.baseurl}}/config-guide/remote-storage/config-remote-storage.html#remote-storage-options
[ngx repo]: https://github.com/anomalizer/ngx_aws_auth
