---
group: release-notes
title: Magento 2.2 backward incompatible changes
---

Magento 2.2 introduces changes that may affect the correct functionality of already released external modules. The purpose of this document is to highlight changes between Magento 2.1 and 2.2.

## API changes

Magento 2.2 introduces changes in several [API](https://glossary.magento.com/api) classes. These changes are designed to extend overall API coverage and improve developer experience with new features.

### Framework

Magento no longer supports custom config file pools

**Class:** [`Magento\Framework\App\DeploymentConfig\Reader`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/DeploymentConfig/Reader.php){:target="_blank"}<br/>
**Action:** Deprecated the method `loadConfigFile`<br/>

### Store module

The Store [module](https://glossary.magento.com/module) management has been updated to allow the retrieval of a store by its [website](https://glossary.magento.com/website) id.

**Class:** [`Magento\Store\Api\StoreWebsiteRelationInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Store/Api/StoreWebsiteRelationInterface.php){:target="_blank"}<br/>
**Action:** New interface added with method `getStoreByWebsiteId($websiteId)`

**Class:** [`Magento\Store\Model\StoreManager`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Store/Model/StoreManager.php){:target="_blank"}<br/>
**Action:** Implemented `StoreWebsiteRelationInterface` and added the inherited method `getStoreByWebsiteId($websiteId)`<br/>

**Description:** Retrieves a store by website id<br/>

New unique and required field `code` was added to the Store Group.

**Class:** [`Magento\Store\Api\Data\GroupInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Store/Api/Data/GroupInterface.php)<br/>
**Action:** Added two methods `getCode()` and `setCode($code)`<br/>

### Customer module

Change was done in order to add default values to customer attributes.

**Class:** [`Magento\Eav\Api\Data\AttributeDefaultValueInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Eav/Api/Data/AttributeDefaultValueInterface.php){:target="_blank"}<br/>
**Action:** New interface added with methods `getDefaultValue()` and `setDefaultValue($defaultValue)`<br/>

**Class:** [`Magento\Customer\Model\Data\AttributeMetadata`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/Data/AttributeMetadata.php){:target="_blank"}<br/>
**Action:** Implemented `AttributeDefaultValueInterface` and added the getter `getDefaultValue()` and setter `setDefaultValue($defaultValue)` methods<br/>

**Description:** Retrieve and set default values to customer attributes<br/>

### Wishlist module

**Class:** [`Magento\Wishlist\Model\Wishlist`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Wishlist/Model/Wishlist.php){:target="_blank"}<br/>
**Action:** The format of the string for the `buyRequest` parameter in the `addNewItem` method changed from serialized to JSON.<br/>

### Recently Viewed and Recently Compared Widgets

**Class:** [`Magento\Reports\Block\Product\Viewed`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Reports/Block/Product/Viewed.php){:target="_blank"}<br/>
**Action:** Deprecated <br/>

**Class:** [`Magento\Reports\Block\Product\Compared`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Reports/Block/Product/Compared.php){:target="_blank"}<br/>
**Action:** Deprecated <br/>

**Configuration** [`Magento\Reports\etc\widget.xml`]({{ site.mage2bloburl }}/2.1/app/code/Magento/Reports/etc/widget.xml){:target="_blank"}<br/>
**Action:** Removed <br/>

Please note, that all inheritance of old widget.xml file will break Magento. Use `Magento/Catalog/etc/widget.xml` instead of `Magento/Reports/etc/widget.xml`.

### Eav Module Changes

The class `\Magento\Eav\Model\Entity\Attribute\Backend\Serialized` has been marked as deprecated, `Magento\Eav\Model\Entity\Attribute\Backend\JsonEncoded` can be used instead.

### MessageQueue Module API

The `Magento\Framework\MessageQueue\ConfigInterface` has been deprecated.
The following table lists the deprecated methods and their replacements.

Deprecated method | Use instead | Subsequent calls
--- | ---
`getExchangeByTopic($topicName);` | `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($topic)` | Call `getConnection()`  then `getExchange()`
`getQueuesByTopic($topic);` | `\Magento\Framework\MessageQueue\Topology\ConfigInterface::getQueues()`  | Iterate and call `getName()`
`getConnectionByTopic($topic);` |  `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($topic)`| `getConnection()` `getName()`
`getConnectionByConsumer($consumer);` |  `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumer($name)` | `getConnection()`
`getMessageSchemaType($topic);` | `\Magento\Framework\Communication\ConfigInterface::getTopic($name)` |  Use getter methods to return information from topic data.
`getConsumer($name);` | `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumer($name)` |  Extract necessary information using accessor methods.
`getConsumerNames();` | `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumers()` | Iterate and use `getName()` on every item.
`getBinds();` | `\Magento\Framework\MessageQueue\Topology\ConfigInterface::getExchanges()` | Extract necessary information using accessor methods.
`getPublishers();` | `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublishers()` | Iterate and use getter methods.
`getConsumers();` | `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumers()` | Iterate and use getter methods.
`getTopic($name);` | `\Magento\Framework\Communication\ConfigInterface::getTopic($name)` `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($topic)`| Use `getTopic($name)` for topic information. Use `getPublisher($name)` for publisher-related clients.
`getPublisher($name);` | `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($name)` | Use getter methods to return requested information.
`getResponseQueueName($topicName);` | Magento\Framework\MessageQueue\Rpc\ResponseQueueNameBuilder::getQueueName($topicName) | -

### Error processor module

[Exception](https://glossary.magento.com/exception) report files in `var/report` are now JSON encoded, and existing serialized files will not be readable by the upgraded Magento 2.2 instance.

### Braintree module

**Class:** [`Magento\Braintree\Model\Ui\ConfigProvider`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Braintree/Model/Ui/ConfigProvider.php){:target="_blank"}<br/>
**Action:** The deprecated constant `PAYPAL_CODE` has been removed<br/>
**Description** Use `\Magento\Braintree\Model\Ui\PayPal\ConfigProvider::PAYPAL_CODE` instead.<br/>

### PayPal module

**Class:** [`Magento\Paypal\Cron\FetchReports`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Paypal/Cron/FetchReports.php){:target="_blank"}<br/>
**Action:**

- Method `execute` has been reworked and now throws an `\Exception` instead of logging it
- Method `__construction` no longer has the `\Psr\Log\LoggerInterface` dependency
- The `report_date` column from the `paypal_settlement_report` table has been changed from `timestamp` format to `date`.

## Changes in repositories

In Magento 2.2 the behavior of repositories regarding the Filters added to Search Criteria  was unified:

- The boolean OR statement joins Filters inside a single Filter Group.
- The boolean AND statement joins Filter Groups inside a Search Criteria.

 In the scope of this work, the following repositories were affected.

### Affected {{site.data.var.ce}} repositories

- `\Magento\Catalog\Api\AttributeSetRepositoryInterface`
- `\Magento\Catalog\Api\CategoryAttributeRepositoryInterface`
- `\Magento\Catalog\Api\ProductAttributeGroupRepositoryInterface`
- `\Magento\Catalog\Api\ProductAttributeRepositoryInterface`
- `\Magento\Cms\Api\BlockRepositoryInterface`
- `\Magento\Cms\Api\PageRepositoryInterface`
- `\Magento\Eav\Api\AttributeGroupRepositoryInterface`
- `\Magento\Eav\Api\AttributeRepositoryInterface`
- `\Magento\Eav\Api\AttributeSetRepositoryInterface`
- `\Magento\Sales\Api\CreditmemoCommentRepositoryInterface`
- `\Magento\Sales\Api\CreditmemoItemRepositoryInterface`
- `\Magento\Sales\Api\CreditmemoRepositoryInterface`
- `\Magento\Sales\Api\InvoiceCommentRepositoryInterface`
- `\Magento\Sales\Api\InvoiceItemRepositoryInterface`
- `\Magento\Sales\Api\InvoiceRepositoryInterface`
- `\Magento\Sales\Api\OrderAddressRepositoryInterface`
- `\Magento\Sales\Api\OrderItemRepositoryInterface`
- `\Magento\Sales\Api\OrderPaymentRepositoryInterface`
- `\Magento\Sales\Api\OrderStatusHistoryRepositoryInterface`
- `\Magento\Sales\Api\ShipmentCommentRepositoryInterface`
- `\Magento\Sales\Api\ShipmentItemRepositoryInterface`
- `\Magento\Sales\Api\ShipmentRepositoryInterface`
- `\Magento\Sales\Api\ShipmentTrackRepositoryInterface`
- `\Magento\Sales\Api\TransactionRepositoryInterface`
- `\Magento\Ui\Api\BookmarkRepositoryInterface`
- `\Magento\Vault\Api\PaymentTokenRepositoryInterface`

### Affected {{site.data.var.ee}} repositories

- `\Magento\GiftCardAccount\Api\GiftCardAccountRepositoryInterface`
- `\Magento\GiftWrapping\Api\WrappingRepositoryInterface`
- `\Magento\Rma\Api\CommentRepositoryInterface`
- `\Magento\Rma\Model\RmaRepository`
- `\Magento\Rma\Model\Service\RmaManagement`
- `\Magento\Rma\Model\Rma\Status\HistoryRepository`
- `\Magento\Rma\Api\RmaRepositoryInterface`
- `\Magento\Staging\Api\UpdateRepositoryInterface`
- `\Magento\VersionsCms\Api\HierarchyNodeRepositoryInterface`

For details about repositories see the [Searching with repositories]({{ page.baseurl }}/extension-dev-guide/searching-with-repositories.html) topic.

## Changes in repositories in method getList

In Magento 2.2 the signature of the method getList was unified across the code base.

`public function getList(\Magento\Framework\Api\SearchCriteria $searchCriteria);`
was changed to
`public function getList(\Magento\Framework\Api\SearchCriteriaInterface $searchCriteria);`

These changes won't affect the clients that use these interfaces, but this will affect the extensions that implemented these interfaces.
In order to adopt custom implementations of these interfaces, please, change method signature from `\Magento\Framework\Api\SearchCriteria` to `\Magento\Framework\Api\SearchCriteriaInterface` in your implementations.

### Affected {{site.data.var.ce}} repositories

- `\Magento\Vault\Api\PaymentTokenRepositoryInterface::getList`
- `\Magento\Tax\Api\TaxRuleRepositoryInterface::getList`
- `\Magento\Sales\Api\CreditmemoCommentRepositoryInterface::getList`
- `\Magento\Sales\Api\CreditmemoItemRepositoryInterface::getList`
- `\Magento\Sales\Api\CreditmemoRepositoryInterface::getList`
- `\Magento\Sales\Api\InvoiceCommentRepositoryInterface::getList`
- `\Magento\Sales\Api\InvoiceItemRepositoryInterface::getList`
- `\Magento\Sales\Api\InvoiceRepositoryInterface::getList`
- `\Magento\Sales\Api\OrderAddressRepositoryInterface::getList`
- `\Magento\Sales\Api\OrderItemRepositoryInterface::getList`
- `\Magento\Sales\Api\OrderPaymentRepositoryInterface::getList`
- `\Magento\Sales\Api\OrderRepositoryInterface::getList`
- `\Magento\Sales\Api\OrderStatusHistoryRepositoryInterface::getList`
- `\Magento\Sales\Api\ShipmentCommentRepositoryInterface::getList`
- `\Magento\Sales\Api\ShipmentItemRepositoryInterface::getList`
- `\Magento\Sales\Api\ShipmentRepositoryInterface::getList`
- `\Magento\Sales\Api\ShipmentTrackRepositoryInterface::getList`
- `\Magento\Sales\Api\TransactionRepositoryInterface::getList`
- `\Magento\Quote\Api\CartRepositoryInterface::getList`
- `\Magento\Vault\Model\PaymentTokenRepository::getList`
- `\Magento\Tax\Model\TaxRuleRepository::getList`
- `\Magento\Sales\Model\OrderRepository::getList`
- `\Magento\Sales\Model\Order\AddressRepository::getList`
- `\Magento\Sales\Model\Order\CreditmemoRepository::getList`
- `\Magento\Sales\Model\Order\InvoiceRepository::getList`
- `\Magento\Sales\Model\Order\ItemRepository::getList`
- `\Magento\Sales\Model\Order\ShipmentRepository::getList`
- `\Magento\Sales\Model\Order\Payment\Repository::getList`
- `\Magento\Sales\Model\Order\Payment\Transaction\Repository::getList`
- `\Magento\Quote\Model\QuoteRepository::getList`

### Affected {{site.data.var.ee}} repositories

- `\Magento\Signifyd\Api\CaseRepositoryInterface::getList`
- `\Magento\Rma\Api\CommentRepositoryInterface::getList`
- `\Magento\Rma\Api\RmaManagementInterface::search`
- `\Magento\Rma\Api\RmaRepositoryInterface::getList`
- `\Magento\Rma\Api\TrackRepositoryInterface::getList`
- `\Magento\GiftWrapping\Api\WrappingRepositoryInterface::getList`
- `\Magento\GiftCardAccount\Api\GiftCardAccountRepositoryInterface::getList`
- `\Magento\Signifyd\Model\CaseRepository::getList`
- `\Magento\Rma\Model\Service\RmaManagement::search`
- `\Magento\GiftWrapping\Model\WrappingRepository::getList`

## Compiler changes

This release removes the multi-tenant compiler option and support of the definitions option for the single tenant compiler in the `env.php` file.

The following classes are no longer available:

- `Magento\Setup\Console\Command\DiCompileMultiTenantCommand`
- `Magento\Framework\ObjectManager\Relations\Compiled`
- `Magento\Framework\ObjectManager\Definition\Compiled\Serialized`
- `Magento\Framework\ObjectManager\Definition\Compiled\Binary`
- `Magento\Framework\Interception\Definition\Compiled`

The `bin/magento setup:config:set` command no longer has the `--definition-format` option.

## Changes in UI

### Advanced section in System Configurations

**Action:** Section `Advanced` was removed from [Admin](https://glossary.magento.com/admin) Interface<br/>
**Description:** Magento does not support disabling/enabling modules output from the Admin Panel in 2.2.0 version. Module output can still be enabled/disabled in configuration files.

## Database schema changes

### store_group

**Action:** New column `code` was added to `store_group` table. This column has a unique key.<br/>
**Description:** Data to this column for existing store Groups will be automatically filled based on Group names.

## Database data format changes

This release replaces usages of `unserialize` with [`json_decode`]({{ page.baseurl }}/extension-dev-guide/framework/serializer.html).

The release also provides upgrade scripts that convert Magento data stored in serialized format.

[Extension](https://glossary.magento.com/extension) developers should review the following cases to see what actions they should take for their extensions:

**Case 1:**
Your extension declared fields for automatic serialization/unserialization using the `_serializableFields` parameter of `\Magento\Framework\Model\ResourceModel\Db\AbstractDb`.
**Solution:**
Write an [upgrade script]({{ page.baseurl }}/ext-best-practices/tutorials/serialized-to-json-data-upgrade.html) to convert your extension data to JSON format.

**Case 2:**
Your extension stores or adds serialized data to Magento entities (e.g. new/custom attributes for Product).
**Solution:**
Your extension will continue working normally, but we recommend switching to JSON for security reasons.
You also need to write an upgrade script for the data in the database.

**Case 3:**
Your extension relies on serialized data from Magento entities.
**Solution:**
Update all usages to expect the data in JSON format.

**Case 4:**
The serialize/unserialize logic belongs to your extension and stores data in a new table or field.
**Solution:**
Your extension will continue working normally, but we recommend switching to JSON for security reasons.
You also need to write an upgrade script for the data in the database.

**Case 5:**
Your extension accesses values in the `core_config_data` table using the following paths:

- `payment/braintree/countrycreditcard`
- `design/theme/ua_regexp`
- `cataloginventory/item_options/min_sale_qty`
- `currency/options/customsymbol`
- `admin/magento_logging/actions`

**Solution:**
Update your extension to use `\Magento\Framework\Serialize\Serializer\Json` for serializing/unserializing data instead of the native [PHP](https://glossary.magento.com/php) serialize/unserialize functions.

**Case 6:**
Your extension uses a backend model that extends `\Magento\Config\Model\Config\Backend\Serialized` to save/load data to/from the database.

**Solution:**
Write an [upgrade script]({{ page.baseurl }}/ext-best-practices/tutorials/serialized-to-json-data-upgrade.html) to update data stored by the extension in the `core_config_data` table from serialized to JSON format.

**See:**

- [Serialize to JSON data upgrade]({{ page.baseurl }}/ext-best-practices/tutorials/serialized-to-json-data-upgrade.html)
- [Serialize Library]({{ page.baseurl }}/extension-dev-guide/framework/serializer.html)

## Database field changes

This is a list of tables and fields where the data format changed from serialized to JSON format.

{% collapsible Show table %}

| Resource Model                                                                       | Table                            | Field                                                         |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------- |
| \Magento\Quote\Model\ResourceModel\Quote\Payment                                     | quote_payment                    | additional_information                                        |
| \Magento\Reward\Model\ResourceModel\Reward\History                                   | magento_reward_history           | additional_data                                               |
| \Magento\Sales\Model\ResourceModel\Order\Item                                        | sales_order_item                 | product_options                                               |
| \Magento\Sales\Model\ResourceModel\Order\Payment                                     | sales_order_payment              | additional_information                                        |
| \Magento\Sales\Model\ResourceModel\Order\Shipment                                    | sales_shipment                   | packages                                                      |
| \Magento\Sales\Model\ResourceModel\Order\Payment\Transaction                         | sales_payment_transaction        | additional_information                                        |
| \Magento\Quote\Model\Quote\Item\Option                                               | quote_item_option                | value                                                         |
| \Magento\GiftRegistry\Model\Item\Option                                              | magento_giftregistry_item_option | value                                                         |
| \Magento\Wishlist\Model\Item                                                         | wishlist_item_option             | value                                                         |
| \Magento\Sales\Model\ResourceModel\Order                                             | sales_order                      | gift_cards                                                    |
| \Magento\Quote\Model\ResourceModel\Quote                                             | quote                            | gift_cards                                                    |
| \Magento\Quote\Model\ResourceModel\Quote\Address                                     | quote_address                    | applied_taxes, gift_cards                                     |
| \Magento\Quote\Model\Quote\Payment                                                   | quote_payment                    | additional_data                                               |
| \Magento\Customer\Model\Attribute                                                    | customer_eav_attribute           | validate_rules                                                |
| \Magento\Rma\Model\Item\Attribute                                                    | magento_rma_item_eav_attribute   | validate_rules                                                |
| \Magento\UrlRewrite\Model\UrlRewrite                                                 | url_rewrite                      | metadata                                                      |
| \Magento\Framework\Flag\FlagResource                                                 | flag                             | flag_data                                                     |
| \Magento\Config\Model\ResourceModel\Config                                           | core_config_data                 | value                                                         |
| \Magento\Widget\Model\ResourceModel\Widget\Instance                                  | widget_instance                  | widget_parameters                                             |
| \Magento\Reminder\Model\Rule                                                         | magento_reminder_rule            | conditions_serialized                                         |
| \Magento\TargetRule\Model\Rule                                                       | magento_targetrule               | actions_serialized, conditions_serialized, action_select_bind |
| \Magento\SalesRule\Model\Rule                                                        | salesrule                        | conditions_serialized, actions_serialized                     |
| \Magento\CatalogRule\Model\Rule                                                      | catalogrule                      | conditions_serialized, actions_serialized                     |
| \Magento\CustomerSegment\Model\Segment                                               | magento_customersegment_segment  | conditions_serialized                                         |
| \Magento\Sales\Model\Order\Creditmemo\Item                                           | sales_creditmemo_item            | tax_ratio                                                     |
| \Magento\Sales\Model\Order\Invoice\Item                                              | sales_invoice_item               | tax_ratio                                                     |
| \Magento\User\Model\User                                                             | admin_user                       | extra                                                         |
| \Magento\Catalog\Model\ResourceModel\Eav\Attribute                                   | catalog_eav_attribute            | additional_data                                               |
| \Magento\Support\Model\ResourceModel\Report                                          | support_report                   | report_data                                                   |
| \Magento\Logging\Block\Adminhtml\Details                                             | magento_logging_event            | info                                                          |
| \Magento\Logging\Block\Adminhtml\Details\Renderer\Diff                               | magento_logging_event_changes    | original_data, result_data                                    |
| \Magento\Rma\Model\Item, \Magento\Rma\Model\Rma                                      | magento_rma_item_entity          | product_options                                               |
| \Magento\Rma\Model\Shipping, \Magento\Rma\Model\Shipping\LabelService                | magento_rma_shipping_label       | packages                                                      |
| \Magento\GiftRegistry\Model\Person, \Magento\GiftRegistry\Model\ResourceModel\Person | magento_giftregistry_person      | custom_values                                                 |
| \Magento\GiftRegistry\Model\Entity, \Magento\GiftRegistry\Model\ResourceModel\Entity | magento_giftregistry_entity      | custom_values, shipping_address                               |
| \Magento\ScheduledImportExport\Model\Scheduled\Operation                             | magento_scheduled_operations     | file_info, entity_attributes                                  |
| \Magento\Cms\Model\ResourceModel\Block                                               | cms_block                        | content                                                       |
| \Magento\Cms\Model\ResourceModel\Page                                                | cms_page                         | content                                                       |
| \Magento\Widget\Model\ResourceModel\Widget\Instance                                  | layout_update                    | xml                                                           |
| \Magento\Banner\Model\ResourceModel\Banner                                           | magento_banner_content           | banner_content                                                |
| \Magento\Cms\Model\ResourceModel\Page                                                | cms_page                         | layout_update_xml                                             |
| \Magento\Catalog\Model\ResourceModel\Product                                         | catalog_product_entity_text      | value                                                         |
| \Magento\Catalog\Model\ResourceModel\Category                                        | catalog_category_entity_text     | value                                                         |

{% endcollapsible %}

### Table deprecations

The table for `\Magento\Widget\Model\ResourceModel\Widget` has been deprecated.

### New Class: `FieldDataConverter`

This class supports data [conversion](https://glossary.magento.com/conversion) from one format to another.
It can be used to upgrade data in upgrade scripts.

#### Features

- Ability to process records in batches
- Can use the `where` condition
- Update multiple fields in a table at once
- Update records in multiple threads
- Convert nested serialized data
- Update duplicate records at once

## Input/Output format of methods

The following methods now return JSON instead of a serialized string.

{% collapsible Show methods %}

- `\Magento\Catalog\Model\Product\Option\Type\File::prepareForCart()`
- `\Magento\CatalogInventory\Helper\Minsaleqty::serializeValue($value)`
  - Only if `$value` is array type
- `\Magento\Widget\Helper\Conditions::encode($value)`
- `\Magento\Wishlist\Model\Item\Option::getValue`
- `\Magento\Wishlist\Model\Item\Option::getData('value',...)`
- `\Magento\Widget\Model\Widget\Instance::getData('widget_parameters')`
- `\Magento\Sales\Model\Order\Creditmemo\Item::getTaxRatio`
- `\Magento\Sales\Model\Order\Invoice\Item::getTaxRatio`
- `\Magento\Quote\Model\Quote\Address\Total::getAppliedTaxes()`
- `\Magento\Catalog\Model\ResourceModel\Eav\Attribute::getData('additional_data')`
- `\Magento\Catalog\Model\ResourceModel\Eav\Attribute::getAdditionalData()`
- `\Magento\Sales\Model\Order\Item::getProductOptions()`
  - Return value is an array, applicable only for "bundle_selection_attributes" key
- `\Magento\Quote\Model\Quote\Item::getOptionByCode`
  - `info_buyRequest` option
- `\Magento\Rule\Model\AbstractModel::getConditionsSerialized()`
- `\Magento\Catalog\Model\Product->getCustomOption('attributes')->getValue()`
- `\Magento\CatalogInventory\Helper\Minsaleqty::makeStorableArrayFieldValue()`
- `\Magento\Catalog\Model\Product\Option\Type\File::prepareForCart()`
- `\Magento\Catalog\Model\Product\Configuration\Item\Option\OptionInterface::getValue()`
- `\Magento\Quote\Model\Quote\Item\Option::getValue()`
- `\Magento\Catalog\Model\Product\Configuration\Item\ItemInterface::getOptionByCode('bundle_selection_ids')->getValue()`
- `\Magento\Sales\Model\Order\Item::getProductOptions()['bundle_selection_ids']`
- `\Magento\Catalog\Model\Product::getCustomOption('bundle_selection_ids')`
- `\Magento\Rma\Model\Shipping::getPackages()`
- `\Magento\Rma\Model\Item::getProductOptions()`
- `\Magento\Logging\Model\Event\Changes::getResultData()`
- `\Magento\Logging\Model\Event::getInfo()`
- `\Magento\GiftCardAccount\Helper\Data::getCards()`
- `\Magento\Sales\Api\Data\OrderInterface`
  - ['extension_attributes' => 'gift_cards' => JSON]

{% endcollapsible %}

The following methods now require JSON as a parameter instead of a serialized string.

{% collapsible Show methods %}

- `\Magento\Catalog\Model\Product\Option\Type\File::getFormattedOptionValue($optionValue)`
- `\Magento\Catalog\Model\Product\Option\Type\File::_unserializeValue($value)`
- `\Magento\Catalog\Model\Product\Option\Type\File::getEditableOptionValue($optionValue)`
- `\Magento\Catalog\Model\Product\Option\Type\File::prepareOptionValueForRequest($optionValue)`
- `\Magento\CatalogInventory\Helper\Minsaleqty::unserializeValue($value)`
- `\Magento\Widget\Helper\Conditions::decode($value)`
- `\Magento\Wishlist\Model\Item\Option::setValue($value)`
- `\Magento\Wishlist\Model\Item\Option::setData('value', $value)`
- `\Magento\Widget\Model\Widget\Instance::setData('widget_parameters', $value)`
- `\Magento\Sales\Model\Order\Creditmemo\Item::setTaxRatio($value)`
- `\Magento\Sales\Model\Order\Invoice\Item::setTaxRatio($value)`
- `\Magento\Quote\Model\Quote\Address\Total::setAppliedTaxes($value)`
- `\Magento\Quote\Model\Quote\Address\Total::setFullInfo($value)`
  - Only for string values
- `\Magento\Catalog\Model\ResourceModel\Eav\Attribute::setData('additional_data', $value)`
- `\Magento\Catalog\Model\ResourceModel\Eav\Attribute::setAdditionalData($value)`
- `\Magento\Sales\Model\Order\Item::setProductOptions($value)`
  - `$value` is an array, applicable only for `bundle_selection_attributes` key
- `\Magento\Quote\Model\Quote\Item::setOptionByCode`
  - `info_buyRequest` option
- `\Magento\Rule\Model\AbstractModel::setConditionsSerialized($value)`
- `\Magento\Catalog\Model\Product::addCustomOption('attributes', $value)`
  - For attributes `bundle_selection_ids` key
- `\Magento\UrlRewrite\Model\UrlRewrite::setMetadata($value)`
  - For non array values
- `\Magento\UrlRewrite\Service\V1\Data::setMetadata($value)`
  - For non array values
- `\Magento\UrlRewrite\Model\UrlPersistInterface::deleteByData()`
  - For metadata key
- `\Magento\Catalog\Model\Product\Configuration\Item\Option\OptionInterface::setValue($value)`
- `\Magento\Quote\Model\Quote\Item\Option::setValue($value)`
- `\Magento\Rma\Model\Shipping::setPackages($value)`
- `\Magento\Rma\Model\Item::setProductOptions($value)`
- `\Magento\Logging\Model\Event\Changes::setResultData($value)`
- `\Magento\Sales\Api\Data\OrderInterface`
  - ['extension_attributes' => 'gift_cards' => JSON]

{% endcollapsible %}

### Other class changes

| Class                                                          | Change                                                                                                      |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `Magento\Framework\Acl\Cache`                                  | Class removed                                                                                               |
| `Magento\Framework\Acl\Builder::__construct`                   | [public] Method parameter changed                                                                           |
| `Magento\Framework\Acl\Builder::$_cache`                       | [protected] Property removed                                                                                |
| `Magento\User\Model\ResourceModel\User::__construct`           | [public] Method parameter changed                                                                           |
| `Magento\User\Model\ResourceModel\User::$_aclCache`            | [protected] Property removed                                                                                |
| `Magento\Authorization\Model\ResourceModel\Rules::__construct` | [public] Method parameter changed                                                                           |
| `Magento\Authorization\Model\ResourceModel\Rules::$_aclCache`  | [protected] Property removed                                                                                |
| `Magento\Setup\Module\Di\Compiler\Config\Writer\Filesystem`    | Format and type of `generated\metadata` files changed from `.ser` to `.php` and serialized data to php data |

## Changes in file system

### File `app/etc/config.local.php` is not supported

**Description:** file app/etc/config.local.php is not read anymore.
 CLI command `app:config:dump` writes data to `app/etc/config.php` instead. File `app/etc/config.local.php` may be removed manually.

### Directories `var/di` and `var/generate` are moved

**Description:**

- `var/di` is moved to `generated/metadata`
- `var/generate` is moved to `generated/code`
