---
group: configuration-guide
title: Downgrade Elasticsearch Module
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

The Magento 2.3.1 update only supports Elasticsearch 5.x and 6.6.x.
If you need to run Magento 2.3.1 with Elasticsearch 2.x, you must downgrade the Elasticsearch module to the older version.

## Downgrade the Elasticsearch Module

1. With a text editor, open the composer.json file located in the `<Magento root>` .

```bash
cd <Magento root>
vim ./composer.json
```

1. Find the following line:

```json
"elasticsearch/elasticsearch": "~2.0|~5.1|~6.1"
```

1. Edit the line, removing the reference to 6.1 and save the file.

```json
"elasticsearch/elasticsearch": "~2.0|~5.1"
```

1. Run the Composer update command to pull in the correct module version.

```bash
composer update
```
