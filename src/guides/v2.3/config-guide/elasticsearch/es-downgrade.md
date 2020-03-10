---
group: configuration-guide
title: Change the Elasticsearch Client
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

The Magento 2.3.4 update adds support for Elasticsearch (ES) 6.8.x and 7.x.x.

Both ES 2.x and 5.x are [End of Life][] and are no longer supported in Magento.

## Change the Elasticsearch Client version

If you need to work with Elasticsearch 7.1.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~7.1"
```

To work with Elasticsearch 6.8.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~6.8"
```

Then configure Elasticsearch within [Magento Admin][].

<!-- Link Definitions -->

[End of Life]: https://www.elastic.co/support/eol
[PHP client]: https://github.com/elastic/elasticsearch-php
[Magento Admin]: https://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html
