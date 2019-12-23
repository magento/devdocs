---
group: configuration-guide
title: Change the Elasticsearch Client
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

Magento 2.2.8 adds support for Elasticsearch (ES) 6.x.
Magento still provides connectivity for ES 2.x and 5.x, but you must manually enable this support.

If you need to run Magento 2.2.8 with Elasticsearch 2.x or 5.x, you must change the Elasticsearch [PHP client][] version.

{:.bs-callout-tip}
**End of Life notice:**
ES 2.x and 5.x versions are [End of Life][]. We do not recommend using ES 2.x. To configure and use the latest version, see (name of the section in this doc)[].
Running ES 2.x is strongly discouraged.

## Change the Elasticsearch Client version

If you need to work with Elasticsearch 5.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~5.2"
```

If you need to work with Elasticsearch 2.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~2.0"
```

{:.bs-callout-info}
Version 6.x is the latest suported version.

To re-enable Elasticsearch 6.x, run the following command:

```bash
composer require "elasticsearch/elasticsearch:~6.1"
```

Then configure Elasticsearch within [Magento Admin][].
<!-- Link Definitions -->

[End of Life]: https://www.elastic.co/support/eol
[PHP client]: https://github.com/elastic/elasticsearch-php
[Magento Admin]: https://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html
