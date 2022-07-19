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

If you need to work with Elasticsearch 7.x, run the following command, specifying your desired version:

```bash
composer require "elasticsearch/elasticsearch:~7.1"
```

Then configure Elasticsearch within [Admin][].

<!-- Link Definitions -->

[Admin]: https://docs.magento.com/m2/ee/user_guide/catalog/search-elasticsearch.html
