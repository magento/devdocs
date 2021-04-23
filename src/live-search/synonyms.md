---
group: live-search
title: Synonyms
ee_only: True
---

Synonyms expand the reach of shopper queries to include words they might use that differ from those in the catalog. Some synonyms are interchangeable, while others represent a subset of a keyword.

## Types of synonyms

One- and two-way synonyms expand the definition of a keyword. Some words are interchangeable, while others represent a subset of a keyword.  There are two types of synonyms:

### Two-way

Two-way synonyms have the same meaning and return the same search results. You can can create a simple pair of two-way synonyms, or a chain of multiple two-way synonyms for the same keyword. For example: pants, slacks, and trousers.

### One-way

A one-way synonym is a subset of a keyword, but with a more granular meaning. For example, capris and shorts are pants, but not all pants are capris or shorts. A search for pants includes capris and shorts. However, a search for shorts does not include results for capris.

## Setup and configuration

Live Search synonyms are created and maintained from the Magento Admin and are separate from standard Magento synonyms. The synonym setup has no impact on requests.

After a synonym is saved in the Admin, it can take up to two hours for the changes to index and re-cache, and for the storefront search results to reflect the change.

{:.bs-callout-info}
See [Synonyms](https://docs.magento.com/user-guide/live-search/synonyms.html) in the _Magento Commerce User Guide_ for more information about synonym setup and use from the Admin and storefront.

## Known issues

-  Live Search synonyms are defined per store view, but are currently stored per website and identified with a combination of `environmentId` + `storeViewCode`. As a result, all websites and store views within the Adobe Commerce installation share the same set of synonyms. The most recently created set of synonyms for the store view takes precedence.

-  If a synonym contains multiple words, each word is treated as a separate synonym. For example, if you set up "time piece" as a synonym of "watch",  both "time" and "piece" are treated as synonyms of watch.
