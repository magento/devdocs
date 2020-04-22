---
group: configuration-guide
title: Change the Elasticsearch Client
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

Magento 2.4 requires Elasticsearch 6.8.x or 7.x.x. Magento, but expects Elasticseach 7.x by default. If you have installed Elasticsearch 6.x, you might need to downgrade the PHP package to ensure compatibility.

{:.bs-callout-info}
Both Elasticsearch 2.x and 5.x are [End of Life][] and are no longer supported in Magento.

## Change the Elasticsearch Client version

1. To change the package to Elasticsearch 6.8.x, run the following command:

   ```bash
   composer require "elasticsearch/elasticsearch:~6.8"
   ```

   To change the package back to Elasticsearch 7.1.x, run the following command:

   ```bash
   composer require "elasticsearch/elasticsearch:~7.1"
   ```

1. Then configure Elasticsearch within [Magento Admin][].

<!-- Link Definitions -->

[End of Life]: https://www.elastic.co/support/eol
[PHP client]: https://github.com/elastic/elasticsearch-php
[Magento Admin]: https://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html
