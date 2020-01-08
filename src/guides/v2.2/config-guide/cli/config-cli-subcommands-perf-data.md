---
group: configuration-guide
title: Generate data for performance testing
functional_areas:
  - Configuration
  - System
  - Setup
---

Using the [Magento Performance Toolkit]({{ site.mage2bloburl }}/{{ page.guide_version }}/setup/performance-toolkit) for performance testing requires you to generate a large amount of data, including stores, categories, products, and more. You can adjust the amount of data you create using _profiles_, such as small, medium, large, and extra large.

The following figure shows a product display on the storefront using the `small` profile:

![Sample storefront with generated data]({{ site.baseurl }}/common/images/config_generate-data.png){:width="550px"}

## Prerequisites

{% include install/first-steps-cli.md %}

In addition to the command arguments discussed here, see a list of [Common arguments]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common) for the command-line configuration.

## Profiles

Profiles are stored in the `<magento_root>/setup/performance-toolkit/profiles/<ce or ee>` directory. The following table provides details about each profile:

Parameter      | Small  | Medium | Medium multi-site  | Large        | Extra large
-------------- | ------ | ------ | ------------------ | ------------ | -------------------
websites       | 1      | 3      | 25                 | 5            | 5
store_groups   | 1      | 3      | 25                 | 5            | 5
store_views    | 1      | 3      | 50                 | 5            | 5
simple_products| 800    | 24,000 | 4,000              | 300,000      | 600,000
configurable_products   | 16 with 24 options | 640 with 24 options | 800 with 24 options & 79 with 200 options | 8,000 with 24 options | 16,000 with 24 options
product_images | 100 images / 3 images per product | 1000 images / 3 images per product | 1000 images / 3 images per product | 2000 images / 3 images per product | 2000 images / 3 images per product
categories     | 30     | 300    | 100                | 3,000        | 6,000
categories_nesting_level | 3 | 3 | 3                  | 5            | 5
catalog_price_rules | 20 | 20    | 20                 | 20           | 20
catalog_target_rules | 5 | 5     | 5                  | 5            | 5
cart_price_rules  | 20  | 20     | 20                 | 20           | 20
cart_price_rules_floor  | 2 | 2  | 2                  | 2            | 2
customers      | 200    | 2,000  | 2,000              | 5,000        | 10,000
tax_rates      | 130    | 40,000 | 40,000             | 40,000       | 40,000
orders         | 80     | 50,000 | 50,000             | 100,000      | 150,000

{:.procedure}
To run the data generator:

1. Disable all cron jobs before running the data generator. Disabling cron jobs prevents the data generator from performing actions that conflict with active cron jobs and avoids unnecessary errors.

1. Run the data generator using the absolute file system path and name of a profile.

   ```bash
   bin/magento setup:perf:generate-fixtures <path-to-profile>
   ```

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

1. After running the data generator, you must [reindex all indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex).

## Fixtures

The following lists the supported fixtures and the XML profile node format:

### Admin users

Generates admin users.

```xml
<!-- Number of admin users -->
<admin_users>{int}</admin_users>
```

### Attribute sets

Generates attribute sets with specified configuration.

```xml
<!-- Number of product attribute sets -->
<product_attribute_sets>{int}</product_attribute_sets>

<!-- Number of attributes per set -->
<product_attribute_sets_attributes>{int}</product_attribute_sets_attributes>

<!-- Number of values per attribute -->
<product_attribute_sets_attributes_values>{int}</product_attribute_sets_attributes_values>
```

### Bundle products

Generates bundle products. Generated bundle selections are not displayed individually in catalog. Products distribute uniformly per categories and websites. If `assign_entities_to_all_websites` from the profile is set to `1`, products are assigned to all websites.

```xml
<!-- Number of products -->
<bundle_products>{int}</bundle_products>

<!-- Number of options per each product -->
<bundle_products_options>{int}</bundle_products_options>

<!-- Number of simple products per each option -->
<bundle_products_variation>{int}</bundle_products_variation>
```

### Cart price rules

Generates cart price rules.

```xml
<!-- Number of cart price rules -->
<cart_price_rules>{int}</cart_price_rules>

<!-- Number of conditions per rule -->
<cart_price_rules_floor>{int}</cart_price_rules_floor>
```

### Catalog price rules

Generates catalog price rules.

```xml
<!-- Number of catalog price rules -->
<catalog_price_rules>{int}</catalog_price_rules>
```

### Categories

Generates categories. If `assign_entities_to_all_websites` is set to `0`, all categories are uniformly distributed per root categories; otherwise, all categories are assigned to one root category.

```xml
<!-- Number of categories to generate -->
<categories>{int}</categories>

<!-- Nesting level of categories -->
<categories_nesting_level>{int}</categories_nesting_level>
```

### Configs

Sets values for config fields.

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

### Configurable products

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
       <!-- Configurable product configuration -->
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

*  Generate products based on a dynamically created attribute set with a specified amount of attributes and options:

   ```xml
   <configurable_products>
       <!-- Configurable product configuration -->
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
       <!-- Configurable product configuration -->
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

### Customers

Generates customers. Customers have a normal distribution on all available websites. Each customer has the same data except customer email, customer group, and customer addresses.

```xml
<!-- Number of customers to generate -->
<customers>{int}</customers>
```

You can use the following XML to change the customer configuration:

```xml
<customer-config>
    <!-- Number of addresses per each customer -->
    <addresses-count>{int}</addresses-count>
</customer-config>
```

### Indexers state

Updates the indexer state.

```xml
<indexer>
    <!-- Name of indexer (e.g. catalogrule_product) -->
    <id>{string}</id>
    <set_scheduled>{bool}</set_scheduled>
</indexer>
```

### Product images

Generates product images. Generation does not include resizing.

```xml
<product-images>
    <!-- Number of images to generate -->
    <images-count>{int}</images-count>
    <!-- Number of images to be assigned per each product -->
    <images-per-product>{int}</images-per-product>
</product-images>
```

### Orders

Generates orders with configurable number of different types of order items. Optionally generates inactive quotes for generated orders.

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

### Simple products

Generates simple products. Products are distributed per default and pre-defined attribute sets. If extra attribute sets are specified in profile as: `<product_attribute_sets>{int}</product_attribute_sets>`, products are also distributed per additional attribute sets.

Products are uniformly distributed per categories and websites. If `assign_entities_to_all_websites` is set to `1`, products are assigned to all websites.

```xml
<!-- Number of simple products to generate -->
<simple_products>{int}</simple_products>
```

### Store groups

Generates store groups (referred to in the Magento Admin as _stores_). Store groups are distributed normally among websites.

```xml
<!-- Number of store groups to be generated -->
<store_groups>{int}</store_groups>
```

### Store views

Generates store views. Store views are distributed normally among store groups.

```xml
<!-- Number of store views to be generated -->
<store_views>{int}</store_views>

<!-- 1 means that all stores will have the same root category, 0 means that all stores will have unique root category -->
<assign_entities_to_all_websites>{0|1}<assign_entities_to_all_websites/>
```

### Tax rates

Generates tax rates.

```xml
<!-- Accepts name of csv file with tax rates (<path to magento folder>/setup/src/Magento/Setup/Fixtures/_files) -->
<tax_rates_file>{csv file name}</tax_rates_file>
```

### Websites

Generates websites.

```xml
<!-- Number of websites to be generated -->
<websites>{int}</websites>
```

## Additional configuration information

You can find the following XML files in the `<Magento root dir>/setup/performance-toolkit/config/` directory.

Configuration | XML file
------------- | -----------------
Default attribute sets | `attributeSets.xml`
Customer configuration | `customerConfig.xml`
Product full description configuration | `description.xml`
Product short description configuration | `shortDescription.xml`
Configuration for product short and full description<br>_This older implementation is provided for backward compatibility._ | `searchConfig.xml`
Small number of search terms to in short and full descriptions | `searchTerms.xml`
Larger number of search terms to use in short and full descriptions | `searchTermsLarge.xml`
