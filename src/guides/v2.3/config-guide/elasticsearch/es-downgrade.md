---
group: configuration-guide
title: Change the Elasticsearch Client
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

The Magento 2.3.1 update adds support for Elasticsearch (ES) 6.x.
Magento still provides connectivity for ES 2.x and 5.x but this will need to be specifically enabled.

If you need to run Magento 2.3.1 with Elasticsearch 2.x or 5.x, you must change the Elasticsearch [PHP client][] version.

Both ES 2.x and 5.x are [End of Life][].
Running ES 2.x is strongly discouraged.

## Change the Elasticsearch Client version

If you need to work with Elasticsearch 5.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~5.1"
```

If you need to work with Elasticsearch 2.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~2.0"
```

To re-enable Elasticsearch 6.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~6.1"
```

Then configure Elasticsearch within [Magento Admin][].

<!-- Link Definitions -->

[End of Life]: https://www.elastic.co/support/eol
[PHP client]: https://github.com/elastic/elasticsearch-php
[Magento Admin]: https://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html
