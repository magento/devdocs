---
title: Using AWS Elasticsearch
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

As of version 2.4.3, Magento supports using Elasticsearch (ES) provided by Amazon Web Services (AWS). This topic describes how to configure Magento to use AWS Elasticsearch and how to migrate data from a local Elasticsearch instance to an AWS Elasticsearch cluster

## Creating an AWS Elasticsearch service domain

An Elasticsearch instance must first be established in AWS.
Read [Creating and managing Amazon Elasticsearch Service domains][] for detailed instructions.

## Getting data to AWS ES

Once everything is prepared on AWS, it is time to populate it with data.

For smaller installations, we recommended that new indices be created directly on the AWS instance.
First, it is a rather quick operation to recreate the indices.
Second, there may be version incompatibilities between the old instance and the AWS instance and these can be avoided by building directly on the AWS instance.

### Migrating data to AWS ES

Larger installations may want to consider migrating their data indices from the existing instance to AWS.
While this may reduce downtime, there is still a small risk of incompatibility issues due to differing ES versions between the old ES server and AWS.
Note that there is no need to migrate indexes, as these can be easily recreated on the AWS instance.
When migrating data indices, ensure that the ES versions are compatible.

See Amazon's [Migrating to Amazon Elasticsearch Service][] instructions for more information.

### Configuring Magento for Elasticsearch

Steps for configuring Elasticsearch for a Magento instance  to use Elasticsearch is covered in the [Advanced Install][] topic.

To test that the new configuration is working, test the Elasticsearch endpoint directly:

1. Create a product in Magento (ex: sku="testproduct1").
1. Reindex through the Magento admin.
1. Query the Elasticsearch endpoint (found in AWS UI):
   To get indices, append: `/_cat/indices/*?v=true` to the URL:
  `<AWS ES endpoint>/_cat/indices/*?v=true`
  To get products from index, append: `/magento2docker_product_1/_search?q=*` to the URL.
  `<AWS ES endpoint>/magento2docker_product_1/_search?q=testproduct1`

## Additional resources {#es-resources}

For additional information, see [Elasticsearch documentation][]

<!-- Link Definitions -->

[Creating and managing Amazon Elasticsearch Service domains]: https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html
[Elasticdump]: https://www.npmjs.com/package/elasticdump
[Elasticsearch documentation]: https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
[Migrating to Amazon Elasticsearch Service]: https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/migration.html
[Advanced Install]: {{ page.baseurl }}/install-gde/install/cli/install-cli.html