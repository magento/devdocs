---
group: live-search
title: Synonyms
ee_only: True
migrated_to: https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/facets/synonyms.html
layout: migrated
---

Synonyms expand the reach of shopper queries to include words they might use that differ from those in the catalog. Some synonyms are interchangeable, while others represent a subset of a keyword.

## Types of synonyms

One- and two-way synonyms expand the definition of a keyword. Some words are interchangeable, while others represent a subset of a keyword.  There are two types of synonyms:

### Two-way

Two-way synonyms have the same meaning and return the same search results. You can can create a simple pair of two-way synonyms, or a chain of multiple two-way synonyms for the same keyword. For example: pants, slacks, and trousers.

### One-way

A one-way synonym is a subset of a keyword, but with a more granular meaning. For example, capris and shorts are pants, but not all pants are capris or shorts. A search for pants includes capris and shorts. However, a search for shorts does not include results for capris.

## Setup and configuration

Live Search synonyms are separate from native synonyms, and are created and maintained from the Live Search Synonyms tab in the {{site.data.var.ee}} Admin. The synonym setup has no impact on requests.

After a synonym is saved in the Admin, it can take up to two hours for the changes to index and re-cache, and for the storefront search results to reflect the change.

{:.bs-callout-info}
Go to [Synonyms]({{ site.user_guide_url }}/live-search/synonyms.html) in the _{{site.data.var.ee}} User Guide_ for more information about synonym setup and use from the Admin and storefront.
