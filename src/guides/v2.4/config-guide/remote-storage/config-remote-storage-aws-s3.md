---
group: configuration-guide
title: Configure AWS S3 bucket for remote storage
functional_areas:
  - Configuration
  - System
  - Setup
---

The [AWS S3][] (Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. The AWS S3 service uses buckets, or containers, for data storage. You must create a private bucket to use for this configuration.

{:.bs-callout-warning}
Magento highly discourages the use of public buckets because it poses a serious security risk.

Prerequisites for using the AWS S3 adapter:

1. Create a private bucket for AWS S3.

1. (_Optionally_) Generate access keys and secret keys.

1. Configure Magento to use the private bucket.

## Nginx configuration

Nginx requires additional configuration to perform Authentication with the `proxy_pass` directive.

We recommend using the [`ngx_aws_auth`][ngx repo] module.

<!-- link definitions -->
[AWS S3]: https://aws.amazon.com/s3
[ngx repo]: https://github.com/anomalizer/ngx_aws_auth