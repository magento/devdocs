---
group: configuration-guide
title: Change the Elasticsearch Client
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

{% include config/es-version-23.md %}

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

[Magento Admin]: https://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html
