---
group: configuration-guide
title: Generate data for performance testing
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of performance testing data {#config-cli-perf-overview}

To use the [Magento Performance Toolkit]({{ site.mage2bloburl }}/{{ page.guide_version }}/setup/performance-toolkit) or another tool for performance testing, you must generate a large amount of data (for example, stores, categories, products, and so on).

You can adjust the amount of data you create using *profiles* (small, medium, large, and extra large). The next section discusses profiles in more detail.

The following figure shows how a product is displayed on the [storefront](https://glossary.magento.com/storefront) using the small profile:

![Sample storefront with generated data]({{ site.baseurl }}/common/images/config_generate-data.png){:width="550px"}

## First steps {#config-cli-before}
{% include install/first-steps-cli.md %}
In addition to the command arguments discussed here, see [Common arguments]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common).

## About profiles {#config-cli-perf-prof}

The following table provides details about the data generator profiles (small, medium, large, and extra large).

Profiles are located in `<magento_root>/setup/performance-toolkit/profiles/<ce or ee>`

For example, `/var/www/html/magento2/setup/performance-toolkit/profiles/ce`

| Parameter | Small profile | Medium profile | Medium multi-site profile | Large profile | Extra large profile |
| --- | --- | --- | --- | --- | --- |
| `websites` | 1 | 3 | 25 | 5 | 5 |
| `store_groups` | 1 | 3 | 25 | 5 | 5 |
| `store_views` | 1 | 3 | 50 | 5 | 5 |
| `simple_products` | 800 | 24,000 | 4,000 | 300,000 | 600,000 |
| `configurable_products` | 16 with 24 options | 640 with 24 options | 800 with 24 options & 79 with 200 options | 8,000 with 24 options | 16,000 with 24 options |
| `product_images` | 100 images / 3 images per product | 1000 images / 3 images per product | 1000 images / 3 images per product | 2000 images / 3 images per product | 2000 images / 3 images per product |
| `categories` | 30 | 300 | 100 | 3,000 | 6,000 |
| `categories_nesting_level` | 3 | 3 | 3 | 5 | 5 |
| `catalog_price_rules` | 20 | 20 | 20 | 20 | 20 |
| `catalog_target_rules` | 5 | 5 | 5 | 5 | 5 |
| `cart_price_rules` | 20 | 20 | 20 | 20 | 20 |
| `cart_price_rules_floor` | 2 | 2 | 2 | 2 | 2 |
| `customers` | 200 | 2,000 | 2,000 | 5,000 | 10,000 |
| `tax rates` | 130 | 40,000 | 40,000 | 40,000 | 40,000 |
| `orders` | 80 | 50,000 | 50,000 | 100,000 | 150,000 |

### Run the data generator {#config-cli-perf-run}

{:.bs-callout-warning}
Before running the data generator, disable all cron jobs running on the server. Disabling cron jobs prevents the data generator from performing actions that conflict with active cron jobs and avoids unnecessary errors.

Run the command as discussed in this section. After the command runs, you must [reindex all indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex).

Command options:

```bash
bin/magento setup:perf:generate-fixtures {path to profile}
```

Where `<path to profile>` specifies the absolute file system path to, and name of, a profile.

For example,

```bash
bin/magento setup:perf:generate-fixtures /var/www/html/magento2/setup/performance-toolkit/profiles/ce/small.xml
```

Sample output for the small profile:

```terminal
Generating profile with following params:
    |- Websites: 1
    |- Store Groups Count: 1
    |- Store Views Count: 1
    |- Categories: 30
    |- Attribute Sets (Default): 3
    |- Attribute Sets (Extra): 10
    |- Simple products: 800
    |- Configurable products: 0
    |--- 5 products for attribute set "Attribute Set 1"
    |--- 5 products for attribute set "Attribute Set 2"
    |--- 5 products for attribute set "Attribute Set 3"
    |--- 40 products for attribute set "Dynamic Attribute Set 1-24"
    |- Product images: 100, 3 per product
    |- Customers: 200
    |- Cart Price Rules: 20
    |- Catalog Price Rules: 20
    |- Catalog Target Rules: 5
    |- Orders: 80
Generating websites, stores and store views...  done in <time>
Generating categories...  done in <time>
Generating attribute sets...  done in <time>
Generating simple products...  done in <time>
... more ...
```

Current supported fixtures:

*  [Admin users](#config-cli-gen-admin)
*  [Attribute sets](#config-cli-gen-attrib)
*  [Bundle products](#config-cli-gen-bundle)
*  [Cart price rules](#config-cli-gen-cartrules)
*  [Catalog price rules](#config-cli-gen-pricerules)
*  [Categories](#config-cli-gen-cat)
*  [Configurations](#config-cli-gen-config)
*  [Configurable products](#config-cli-gen-configprod)
*  [Customers](#config-cli-gen-cust)
*  [Product images](#config-cli-gen-prodimg)
*  [Indexers state](#config-cli-gen-index)
*  [Orders](#config-cli-gen-orders)
*  [Simple products](#config-cli-gen-simp)
*  [Websites](#config-cli-gen-websites)
*  [Store groups](#config-cli-gen-stores)
*  [Store views](#config-cli-gen-storeview)
*  [Tax rates](#config-cli-gen-taxrate)

## Detailed information about fixtures

The following sections discuss additional details about the performance fixtures.

### Admin users {#config-cli-gen-admin}

Generates [admin](https://glossary.magento.com/admin) users. [XML](https://glossary.magento.com/xml) profile node:

```xml
<!-- Number of admin users -->
<admin_users>{int}</admin_users>
```

### Attribute sets {#config-cli-gen-attrib}

Generates attribute sets with specified configuration. XML profile node:

```xml
<!-- Number of product attribute sets -->
<product_attribute_sets>{int}</product_attribute_sets>

<!-- Number of attributes per set -->
<product_attribute_sets_attributes>{int}</product_attribute_sets_attributes>

    <!-- Number of values per attribute -->
<product_attribute_sets_attributes_values>{int}</product_attribute_sets_attributes_values>
```

### Bundle products {#config-cli-gen-bundle}

Generates bundle products. Generated bundle selections are not displayed individually in [catalog](https://glossary.magento.com/catalog). Products will be uniformly distributed per categories and websites. If  `assign_entities_to_all_websites` from the profile is set to `1`. products will be assigned to all websites.

XML profile node:

```xml
<!-- Number of products -->
<bundle_products>{int}</bundle_products>

<!-- Number of options per each product -->
<bundle_products_options>{int}</bundle_products_options>

<!-- Number of simple products per each option -->
<bundle_products_variation>{int}</bundle_products_variation>
```

### Cart price rules {#config-cli-gen-cartrules}

Generates cart price rules. XML profile node:

```xml
<!-- Number of cart price rules -->
<cart_price_rules>{int}</cart_price_rules>

<!-- Number of conditions per rule -->
<cart_price_rules_floor>{int}</cart_price_rules_floor>
```

### Catalog price rules {#config-cli-gen-pricerules}

Generates catalog price rules. XML profile node:

```xml
<!-- Number of catalog price rules -->
<catalog_price_rules>{int}</catalog_price_rules>
```

### Categories {#config-cli-gen-cat}

Generates categories. If `assign_entities_to_all_websites` is set to `0`, all categories are uniformly distributed per root categories; otherwise, all categories are assigned to one root [category](https://glossary.magento.com/category).

XML profile node:

```xml
<!-- Number of categories to generate -->
<categories>{int}</categories>

<!-- Nesting level of categories -->
<categories_nesting_level>{int}</categories_nesting_level>
```

### Configs {#config-cli-gen-config}

Sets values for config fields. XML profile node:

```xml
<!-- Config variables and values for change -->
<configs>
    <config>
        <path>{string}</path> <!-- e.g. admin/security/use_form_key -->
        <scope>{string}</scope> <!-- e.g. default -->
        <scopeId>{int}</scopeId>
        <value>{int|string}</value>
    </config>

    <!-- ... more entries ... -->
</configs>
```

### Configurable products {#config-cli-gen-configprod}

Generates Configurable products. Generated configurable options are not displayed individually in the catalog. Products are uniformly distributed per categories and websites. If `assign_entities_to_all_websites` is set to `1`, products will be assigned to all websites.

We support the following XML node formats:

*  Distribution per Default and pre-defined attribute sets:

```xml
<!-- Number of configurable products -->
<configurable_products>{int}</configurable_products>
```

*  Generate products based on an existing attribute set:

```xml
<configurable_products>

    <config>
            <!-- Existing attribute set name -->
            <attributeSet>{string}</attributeSet>

            <!-- Configurable sku pattern with %s -->
            <sku>{string}</sku>

            <!-- Number of configurable products -->
            <products>{int}</products>

            <!-- Category Name. Optional. By default category name from Categories fixture will be used -->
            <category>[{string}]</category>

            <!-- Type of Swatch attribute e.g. color|image -->
            <swatches>{string}</swatches>
    </config>

<!-- ... more entries ... -->
</configurable_products>
```

*  Generate products based on a dynamically created [attribute set](https://glossary.magento.com/attribute-set) with a specified amount of attributes and options:

```xml
<configurable_products>

    <config>
        <!-- Number of attributes in configurable product -->
        <attributes>{int}</attributes>

        <!-- Number of options per attribute -->
        <options>{int}</options>

        <!-- Configurable sku pattern with %s -->
        <sku>{string}</sku>

        <!-- Number of configurable products -->
        <products>{int}</products>

        <!-- Category Name. Optional. By default category name from Categories fixture will be used -->
        <category>[{string}]</category>

        <!-- Type of Swatch attribute e.g. color|image -->
        <swatches>{string}</swatches>
    </config>

    <!-- ... more entries ... -->
</configurable_products>
```

*  Generate products based on a dynamically created attribute set with a specified configuration per each attribute:

```xml
<configurable_products>

    <config>
        <attributes>
            <!-- Configuration for a first attribute -->
            <attribute>
                <!-- Amount of options per attribute -->
                <options>{int}</options>

                <!-- Type of Swatch attribute -->
                <swatches>{string}</swatches>
            </attribute>

            <!-- Configuration for a second attribute -->
            <attribute>
                <!-- Amount of options per attribute -->
                <options>{int}</options>
            </attribute>
        </attributes>

        <!-- Configurable sku pattern with %s -->
        <sku>{string}</sku>

        <!-- Number of configurable products -->
        <products>{int}</products>

        <!-- Category Name. Optional. By default, the category name from Categories fixture will be used -->
        <category>[{string}]</category>
    </config>

    <!-- ... more entries ... -->
</configurable_products>
```

### Customers {#config-cli-gen-cust}

Generates customers. Customers have a normal distribution on all available websites. Each customer has the same data except customer email, customer group, and customer addresses.

XML profile node:

```xml
<!-- Number of customers to generate -->
<customers>{int}</customers>
```

You can also use the following XML to change the customer configuration:

```xml
<customer-config>
    <!-- Number of addresses per each customer -->
    <addresses-count>{int}</addresses-count>
</customer-config>
```

### Product images {#config-cli-gen-prodimg}

Generates product images. Generation does not include resizing.

XML profile node:

```xml
<product-images>
    <!-- Number of images to generate -->
    <images-count>{int}</images-count>

    <!-- Number of images to be assigned per each product -->
    <images-per-product>{int}</images-per-product>
</product-images>
```

### Indexers state {#config-cli-gen-index}

Updates indexers' state. XML profile node:

```xml
<indexer>
    <!-- Name of indexer (e.g. catalogrule_product) -->
    <id>{string}</id>
    <set_scheduled>{bool}</set_scheduled>
</indexer>
```

### Orders {#config-cli-gen-orders}

Generates orders with configurable number of different types of order items. Optionally generates inactive quotes for generated orders.

XML profile node:

```xml
<!-- It is necessary to enable quotes for orders -->
<order_quotes_enable>{bool}</order_quotes_enable>

<!-- Min number of simple products per each order -->
<order_simple_product_count_from>{int}</order_simple_product_count_from>

<!-- Max number of simple products per each order -->
<order_simple_product_count_to>{int}</order_simple_product_count_to>

<!-- Min number of configurable products per each order -->
<order_configurable_product_count_from>{int}</order_configurable_product_count_from>

<!-- Max number of configurable products per each order -->
<order_configurable_product_count_to>{int}</order_configurable_product_count_to>

<!-- Min number of big configurable products (with big amount of options) per each order -->
<order_big_configurable_product_count_from>{int}</order_big_configurable_product_count_from>

<!-- Max number of big configurable products (with big amount of options) per each order -->
<order_big_configurable_product_count_to>{int}</order_big_configurable_product_count_to>

<!-- Number of orders to generate -->
<orders>{int}</orders>
```

### Simple products {#config-cli-gen-simp}

Generates simple products. Products are distributed per default and pre-defined attribute sets. If extra attribute sets are specified in profile as: `<product_attribute_sets>{int}</product_attribute_sets>`, products are also distributed per additional attribute sets.

Products are uniformly distributed per categories and websites. If `assign_entities_to_all_websites` is set to `1`, products are assigned to all websites.

XML profile node:

```xml
<!-- Number of simple products to generate -->
<simple_products>{int}</simple_products>
```

### Websites {#config-cli-gen-websites}

Generates websites. XML profile node:

```xml
<!-- Number of websites to be generated -->
<websites>{int}</websites>
```

### Store groups {#config-cli-gen-stores}

Generates store groups (referred to in the [Magento Admin](https://glossary.magento.com/magento-admin) as _stores_). Store groups are distributed normally among websites.

XML profile node:

```xml
<!-- Number of store groups to be generated -->
<store_groups>{int}</store_groups>
```

### Store views {#config-cli-gen-storeview}

Generates store views. Store views are distributed normally among store groups. XML profile node:

```xml
<!-- Number of store views to be generated -->
<store_views>{int}</store_views>

<!-- 1 means that all stores will have the same root category, 0 means that all stores will have unique root category -->
<assign_entities_to_all_websites>{0|1}<assign_entities_to_all_websites/>
```

### Tax rates {#config-cli-gen-taxrate}

Generates tax rates. XML profile node:

```xml
<!-- Accepts name of [csv](https://glossary.magento.com/csv) file with tax rates (<path to magento folder>/setup/src/Magento/Setup/Fixtures/_files) -->
<tax_rates_file>{csv file name}</tax_rates_file>
```

## Additional information

Additional configuration information:

*  `<Magento root dir>/setup/performance-toolkit/config/attributeSets.xml`---Default attribute sets

*  `<Magento root dir>/setup/performance-toolkit/config/customerConfig.xml`---Customer configuration

*  `<Magento root dir>/setup/performance-toolkit/config/description.xml`---Product full description configuration

*  `<Magento root dir>/setup/performance-toolkit/config/shortDescription.xml`---Product short description configuration

*  `<Magento root dir>/setup/performance-toolkit/config/searchConfig.xml`---Configuration for product short and full description. This older implementation is provided for backward compatibility.

*  `<Magento root dir>/setup/performance-toolkit/config/searchTerms.xml`---Small number of search terms to in short and full descriptions

*  `<Magento root dir>/setup/performance-toolkit/config/searchTermsLarge.xml`---Larger number of search terms to use in short and full description.

{:.ref-header}
Related topics

*  [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
*  [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
*  [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
*  [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
*  [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
*  [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
*  [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
*  [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
*  [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
*  [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
*  [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
*  [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
