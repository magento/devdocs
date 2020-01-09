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

<table>
   <tbody>
      <tr>
         <th>Parameter</th>
         <th>Small profile</th>
         <th>Medium profile</th>
         <th>Medium multi-site profile</th>
         <th>Large profile</th>
         <th>Extra large profile</th>
      </tr>

        <tr>
            <td><p>websites</p></td>
            <td><p>1</p></td>
            <td><p>3</p></td>
            <td><p>25</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
        </tr>
        <tr>
            <td><p>store_groups</p></td>
            <td><p>1</p></td>
            <td><p>3</p></td>
            <td><p>25</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
        </tr>
        <tr>
            <td><p>store_views</p></td>
            <td><p>1</p></td>
            <td><p>3</p></td>
            <td><p>50</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
        </tr>
        <tr>
            <td><p>simple_products</p></td>
            <td><p>800</p></td>
            <td><p>24,000</p></td>
            <td><p>4,000</p></td>
            <td><p>300,000</p></td>
            <td><p>600,000</p></td>
        </tr>
        <tr>
            <td><p>configurable_products</p></td>
            <td><p>16 with 24 options</p></td>
            <td><p>640 with 24 options</p></td>
            <td><p>800 with 24 options & 79 with 200 options</p></td>
            <td><p>8,000 with 24 options</p></td>
            <td><p>16,000 with 24 options</p></td>
        </tr>
        <tr>
            <td><p>product_images</p></td>
            <td><p>100 images / 3 images per product</p></td>
            <td><p>1000 images / 3 images per product</p></td>
            <td><p>1000 images / 3 images per product</p></td>
            <td><p>2000 images / 3 images per product</p></td>
            <td><p>2000 images / 3 images per product</p></td>
        </tr>
        <tr>
            <td><p>categories</p></td>
            <td><p>30</p></td>
            <td><p>300</p></td>
            <td><p>100</p></td>
            <td><p>3,000</p></td>
            <td><p>6,000</p></td>
        </tr>
        <tr>
            <td><p>categories_nesting_level</p></td>
            <td><p>3</p></td>
            <td><p>3</p></td>
            <td><p>3</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
        </tr>
        <tr>
            <td><p>catalog_price_rules</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
        </tr>
        <tr>
            <td><p>catalog_target_rules</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
            <td><p>5</p></td>
        </tr>
        <tr>
            <td><p>cart_price_rules</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
            <td><p>20</p></td>
        </tr>
        <tr>
            <td><p>cart_price_rules_floor</p></td>
            <td><p>2</p></td>
            <td><p>2</p></td>
            <td><p>2</p></td>
            <td><p>2</p></td>
            <td><p>2</p></td>
        </tr>
        <tr>
            <td><p>customers</p></td>
            <td><p>200</p></td>
            <td><p>2,000</p></td>
            <td><p>2,000</p></td>
            <td><p>5,000</p></td>
            <td><p>10,000</p></td>
        </tr>
        <tr>
            <td><p>tax rates</p></td>
            <td><p>130</p></td>
            <td><p>40,000</p></td>
            <td><p>40,000</p></td>
            <td><p>40,000</p></td>
            <td><p>40,000</p></td>
        </tr>
        <tr>
            <td><p>orders</p></td>
            <td><p>80</p></td>
            <td><p>50,000</p></td>
            <td><p>50,000</p></td>
            <td><p>100,000</p></td>
            <td><p>150,000</p></td>
        </tr>
   </tbody>
</table>

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

<pre class="no-copy">&lt;!-- Number of admin users -->
&lt;admin_users>{int}</admin_users></pre>

### Attribute sets {#config-cli-gen-attrib}

Generates attribute sets with specified configuration. XML profile node:

<pre class="no-copy">&lt;!-- Number of product attribute sets -->
&lt;product_attribute_sets>{int}&lt;/product_attribute_sets>

&lt;!-- Number of attributes per set -->
&lt;product_attribute_sets_attributes>{int}&lt;/product_attribute_sets_attributes>

 &lt;!-- Number of values per attribute -->
&lt;product_attribute_sets_attributes_values>{int}&lt;/product_attribute_sets_attributes_values></pre>

### Bundle products {#config-cli-gen-bundle}

Generates bundle products. Generated bundle selections are not displayed individually in [catalog](https://glossary.magento.com/catalog). Products will be uniformly distributed per categories and websites. If  `assign_entities_to_all_websites` from the profile is set to `1`. products will be assigned to all websites.

XML profile node:

<pre class="no-copy">&lt;!-- Number of products -->
&lt;bundle_products>{int}&lt;/bundle_products>

&lt;!-- Number of options per each product -->
&lt;bundle_products_options>{int}&lt;/bundle_products_options>

&lt;!-- Number of simple products per each option -->
&lt;bundle_products_variation>{int}&lt;/bundle_products_variation></pre>

### Cart price rules {#config-cli-gen-cartrules}

Generates cart price rules. XML profile node:

<pre class="no-copy">&lt;!-- Number of cart price rules -->
&lt;cart_price_rules>{int}&lt;/cart_price_rules>

&lt;!-- Number of conditions per rule -->
&lt;cart_price_rules_floor>{int}&lt;/cart_price_rules_floor></pre>

### Catalog price rules {#config-cli-gen-pricerules}

Generates catalog price rules. XML profile node:

<pre class="no-copy">&lt;!-- Number of catalog price rules -->
&lt;catalog_price_rules>{int}&lt;/catalog_price_rules></pre>

### Categories {#config-cli-gen-cat}

Generates categories. If `assign_entities_to_all_websites` is set to `0`, all categories are uniformly distributed per root categories; otherwise, all categories are assigned to one root [category](https://glossary.magento.com/category).

XML profile node:

<pre class="no-copy">&lt;!-- Number of categories to generate -->
&lt;categories>{int}&lt;/categories>

&lt;!-- Nesting level of categories -->
&lt;categories_nesting_level>{int}&lt;/categories_nesting_level></pre>

### Configs {#config-cli-gen-config}

Sets values for config fields. XML profile node:

<pre class="no-copy">&lt;!-- Config variables and values for change -->
    &lt;configs>
        &lt;config>
            &lt;path>{string}&lt;/path> &lt;!-- e.g. admin/security/use_form_key -->
            &lt;scope>{string}&lt;/scope> &lt;!-- e.g. default -->
            &lt;scopeId>{int}&lt;/scopeId>
            &lt;value>{int|string}&lt;/value>
        &lt;/config>

        &lt;!-- ... more entries ... -->
    &lt;/configs></pre>

### Configurable products {#config-cli-gen-configprod}

Generates Configurable products. Generated configurable options are not displayed individually in the catalog. Products are uniformly distributed per categories and websites. If `assign_entities_to_all_websites` is set to `1`, products will be assigned to all websites.

We support the following XML node formats:

*  Distribution per Default and pre-defined attribute sets:

    <pre class="no-copy">&lt;!-- Number of configurable products -->
    &lt;configurable_products>{int}&lt;/configurable_products></pre>

*  Generate products based on an existing attribute set:

    <pre class="no-copy">&lt;configurable_products>
        <!-- Configurable product configuration -->
        &lt;config>
             &lt;!-- Existing attribute set name -->
             &lt;attributeSet>{string}&lt;/attributeSet>

             &lt;!-- Configurable sku pattern with %s -->
             &lt;sku>{string}&lt;/sku>

             &lt;!-- Number of configurable products -->
             &lt;products>{int}&lt;/products>

             &lt;!-- Category Name. Optional. By default category name from Categories fixture will be used -->
             &lt;category>[{string}]&lt;/category>

             &lt;!-- Type of Swatch attribute e.g. color|image -->
             &lt;swatches>{string}&lt;/swatches>
        &lt;/config>

        &lt;!-- ... more entries ... -->
    &lt;/configurable_products></pre>

*  Generate products based on a dynamically created [attribute set](https://glossary.magento.com/attribute-set) with a specified amount of attributes and options:

    <pre class="no-copy">&lt;configurable_products>
        <!-- Configurable product configuration -->
        &lt;config>
            &lt;!-- Number of attributes in configurable product -->
            &lt;attributes>{int}&lt;/attributes>

            &lt;!-- Number of options per attribute -->
            &lt;options>{int}&lt;/options>

            &lt;!-- Configurable sku pattern with %s -->
            &lt;sku>{string}&lt;/sku>

            &lt;!-- Number of configurable products -->
            &lt;products>{int}&lt;/products>

            &lt;!-- Category Name. Optional. By default category name from Categories fixture will be used -->
            &lt;category>[{string}]&lt;/category>

            &lt;!-- Type of Swatch attribute e.g. color|image -->
            &lt;swatches>{string}&lt;/swatches>
        &lt;/config>

        &lt;!-- ... more entries ... -->
    &lt;/configurable_products></pre>

*  Generate products based on a dynamically created attribute set with a specified configuration per each attribute:

    <pre class="no-copy">&lt;configurable_products>
        <!-- Configurable product configuration -->
        &lt;config>
            &lt;attributes>
                &lt;!-- Configuration for a first attribute -->
                &lt;attribute>
                    &lt;!-- Amount of options per attribute -->
                    &lt;options>{int}&lt;/options>

                    &lt;!-- Type of Swatch attribute -->
                    &lt;swatches>{string}&lt;/swatches>
                &lt;/attribute>

                &lt;!-- Configuration for a second attribute -->
                &lt;attribute>
                    &lt;!-- Amount of options per attribute -->
                    &lt;options>{int}&lt;/options>
                &lt;/attribute>
            &lt;/attributes>

            &lt;!-- Configurable sku pattern with %s -->
            &lt;sku>{string}&lt;/sku>

            &lt;!-- Number of configurable products -->
            &lt;products>{int}&lt;/products>

            &lt;!-- Category Name. Optional. By default, the category name from Categories fixture will be used -->
            &lt;category>[{string}]&lt;/category>
        &lt;/config>

        &lt;!-- ... more entries ... -->
    &lt;/configurable_products></pre>

### Customers {#config-cli-gen-cust}

Generates customers. Customers have a normal distribution on all available websites. Each customer has the same data except customer email, customer group, and customer addresses.

XML profile node:

<pre class="no-copy">&lt;!-- Number of customers to generate -->
&lt;customers>{int}&lt;/customers></pre>

You can also use the following XML to change the customer configuration:

<pre class="no-copy">&lt;customer-config>
    &lt;!-- Number of addresses per each customer -->
    &lt;addresses-count>{int}&lt;/addresses-count>
&lt;/customer-config></pre>

### Product images {#config-cli-gen-prodimg}

Generates product images. Generation does not include resizing.

XML profile node:

<pre class="no-copy">&lt;product-images>
    &lt;!-- Number of images to generate -->
    &lt;images-count>{int}&lt;/images-count>

    &lt;!-- Number of images to be assigned per each product -->
    &lt;images-per-product>{int}&lt;/images-per-product>
&lt;/product-images></pre>

### Indexers state {#config-cli-gen-index}

Updates indexers' state. XML profile node:

<pre class="no-copy">&lt;indexer>
    &lt;!-- Name of indexer (e.g. catalogrule_product) -->
    &lt;id>{string}&lt;/id>
    &lt;set_scheduled>{bool}&lt;/set_scheduled>
&lt;/indexer></pre>

### Orders {#config-cli-gen-orders}

Generates orders with configurable number of different types of order items. Optionally generates inactive quotes for generated orders.

XML profile node:

<pre class="no-copy">&lt;!-- It is necessary to enable quotes for orders -->
&lt;order_quotes_enable>{bool}&lt;/order_quotes_enable>

&lt;!-- Min number of simple products per each order -->
&lt;order_simple_product_count_from>{int}&lt;/order_simple_product_count_from>

&lt;!-- Max number of simple products per each order -->
&lt;order_simple_product_count_to>{int}&lt;/order_simple_product_count_to>

&lt;!-- Min number of configurable products per each order -->
&lt;order_configurable_product_count_from>{int}&lt;/order_configurable_product_count_from>

&lt;!-- Max number of configurable products per each order -->
&lt;order_configurable_product_count_to>{int}&lt;/order_configurable_product_count_to>

&lt;!-- Min number of big configurable products (with big amount of options) per each order -->
&lt;order_big_configurable_product_count_from>{int}&lt;/order_big_configurable_product_count_from>

&lt;!-- Max number of big configurable products (with big amount of options) per each order -->
&lt;order_big_configurable_product_count_to>{int}&lt;/order_big_configurable_product_count_to>

&lt;!-- Number of orders to generate -->
&lt;orders>{int}&lt;/orders></pre>

### Simple products {#config-cli-gen-simp}

Generates simple products. Products are distributed per default and pre-defined attribute sets. If extra attribute sets are specified in profile as: `<product_attribute_sets>{int}</product_attribute_sets>`, products are also distributed per additional attribute sets.

Products are uniformly distributed per categories and websites. If `assign_entities_to_all_websites` is set to `1`, products are assigned to all websites.

XML profile node:

<pre class="no-copy">&lt;!-- Number of simple products to generate -->
&lt;simple_products>{int}&lt;/simple_products></pre>

### Websites {#config-cli-gen-websites}

Generates websites. XML profile node:

<pre class="no-copy">&lt;!-- Number of websites to be generated -->
&lt;websites>{int}&lt;/websites></pre>

### Store groups {#config-cli-gen-stores}

Generates store groups (referred to in the [Magento Admin](https://glossary.magento.com/magento-admin) as _stores_). Store groups are distributed normally among websites.

XML profile node:

<pre class="no-copy">&lt;!-- Number of store groups to be generated -->
&lt;store_groups>{int}&lt;/store_groups></pre>

### Store views {#config-cli-gen-storeview}

Generates store views. Store views are distributed normally among store groups. XML profile node:

<pre class="no-copy">&lt;!-- Number of store views to be generated -->
&lt;store_views>{int}&lt;/store_views>

&lt;!-- 1 means that all stores will have the same root category, 0 means that all stores will have unique root category -->
&lt;assign_entities_to_all_websites>{0|1}&lt;assign_entities_to_all_websites/></pre>

### Tax rates {#config-cli-gen-taxrate}

Generates tax rates. XML profile node:

<pre class="no-copy">&lt;!-- Accepts name of [csv](https://glossary.magento.com/csv) file with tax rates (&lt;path to magento folder>/setup/src/Magento/Setup/Fixtures/_files) -->
&lt;tax_rates_file>{csv file name}&lt;/tax_rates_file></pre>

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
