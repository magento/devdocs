---
group: configuration-guide
title: Configure AWS S3 bucket for remote Storage
functional_areas:
  - Configuration
  - System
  - Setup
---

The [AWS S3] (Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

**Important:** Magento highly discourages using public buckets as it may have serious security risks.

To be able to use it you need perfrom next steps:

1. Create a private bucket
2. (Optionally) Generate a pair of access and secret keys
3. Configure Magento to use the created bucket

## Nginx configuration

Nginx requires additional configuration to perform Authentication with `proxy_pass` directive.

We recommend using [ngx_aws_auth] module.

[AWS S3]: https://aws.amazon.com/s3
[ngx_aws_auth]: https://github.com/anomalizer/ngx_aws_auth
