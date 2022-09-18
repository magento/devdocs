---
title: Using AWS OpenSearch
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
migrated_to: https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/search-engine/aws-opensearch.html
layout: migrated
---

{{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.3 supports using Amazon OpenSearch Service clusters. This service is the successor to Amazon Elasticsearch Service. This topic describes how to configure Commerce to use AWS OpenSearch, and how to migrate data from a local Elasticsearch or OpenSearch instance to an AWS OpenSearch cluster.

## Create an AWS OpenSearch service domain

You must first establish an OpenSearch instance in AWS.
Read [Creating and managing Amazon OpenSearch Service domains][] for detailed instructions.

## Get data to AWS OpenSearch

Once everything is prepared on AWS, it is time to populate it with data.

For smaller installations, we recommended that you create new indices directly on the AWS instance for the following reasons:

*  Recreating the indices is a quick operation.
*  There may be version incompatibilities between the old instance and the AWS instance, and these can be avoided by building directly on the AWS instance.

Larger installations may want to consider migrating their data indices from the existing instance to AWS. While this may reduce downtime, there is still a small risk of incompatibility issues due to differing versions between the old ElasticSearch server and AWS.

There is no need to migrate indexes, as these can be easily recreated on the AWS instance.
However, when migrating data indices, ensure that the versions of ElasticSearch/OpenSearch are compatible.

See Amazon's [Migrating to Amazon OpenSearch Service][] instructions for more information.

### Configure Commerce for OpenSearch

Steps for configuring OpenSearch for a Magento instance  to use OpenSearch is covered in the [Advanced Install][] topic.

To test that the new configuration is working, test the OpenSearch endpoint directly:

1. Create a product in the Admin (For example: sku="testproduct1").
1. Reindex through the Admin.
1. Query the OpenSearch endpoint (found in AWS UI):

   To get indices, append: `/_cat/indices/*?v=true` to the URL:
  `<AWS OS endpoint>/_cat/indices/*?v=true`

  To get products from index, append: `/magento2docker_product_1/_search?q=*` to the URL:
  `<AWS OS endpoint>/magento2docker_product_1/_search?q=testproduct1`

## Additional resources {#es-resources}

For additional information, see the [OpenSearch AWS documentation][].

<!-- Link Definitions -->

[Creating and managing Amazon OpenSearch Service domains]: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html
[Elasticdump]: https://www.npmjs.com/package/elasticdump
[OpenSearch AWS documentation]: https://docs.aws.amazon.com/opensearch-service/
[Migrating to Amazon OpenSearch Service]: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/migration.html
[OpenSearch AWS documentation]: https://docs.aws.amazon.com/opensearch-service/index.html
[Advanced Install]: {{ page.baseurl }}/install-gde/install/cli/install-cli.html
