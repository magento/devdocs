---
group: php-developer-guide
title: List of events
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com
migrated_to: https://developer.adobe.com/commerce/php/development/components/events-and-observers/event-list/
layout: migrated
---

This is the list of [event]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html) names ordered alphabetically.
Each event contains a short description and a list of supported arguments.

### abstract_search_result_load_after

#### Use cases

To modify product stock items and stock statuses.

#### Origins

`\Magento\Framework\Data\AbstractSearchResult`:

```php
protected function afterLoad()
{
   $this->eventManager->dispatch('abstract_search_result_load_after', ['collection' => $this]);
```

*  `collection` is an object of `\Magento\Framework\Data\AbstractSearchResult`

#### Examples of classes that raise the event

*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Status\Collection`

### abstract_search_result_load_before

#### Use cases

To modify product stock items and stock statuses.

#### Origins

`\Magento\Framework\Data\AbstractSearchResult`:

```php
protected function beforeLoad()
{
$this->eventManager->dispatch('abstract_search_result_load_before', ['collection' => $this]);
```

*  `collection` is an object of `\Magento\Framework\Data\AbstractSearchResult`

#### Classes raising the event

*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Status\Collection`

### adminhtml_block_eav_attribute_edit_form_init

#### Use cases

To modify backend attribute edit page form.

#### Origins

`\Magento\Eav\Block\Adminhtml\Attribute\Edit\Main\AbstractMain`:

```php
protected function _initFormValue()
{
$this->eventManager->dispatch('adminhtml_block_eav_attribute_edit_form_init', ['form' => $this->getForm()]);
```

*  `form` is an object of `\Magento\Framework\Data\Form`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Main`

### adminhtml_block_html_before

#### Origins

*  `\Magento\Backend\Block\Template::_toHtml()`:

   ```php
   protected function _toHtml()
   {
   $this->_eventManager->dispatch('adminhtml_block_html_before', ['block' => $this]);
   ```

*  `\Magento\Customer\\Block\Adminhtml\Edit\Tab\Carts::_toHtml()`:

   ```php
   protected function _toHtml()
   {
   $this->_eventManager->dispatch('adminhtml_block_html_before', ['block' => $this]);
   ```

*  `block` is an object of `\Magento\Framework\View\Element\Template`

#### Classes raising the event

*  `\Magento\AdminNotification\Block\System\Messages`
*  `\Magento\AdobeIms\Block\Adminhtml\SignIn`

#### Use cases

To modify backend block contents.

### adminhtml_block_promo_widget_chooser_prepare_collection

#### Use cases

To modify collection of shopping cart rules used in a chooser widget.

#### Origins

`\Magento\SalesRule\Block\Adminhtml\Promo\Widget\Chooser::_prepareCollection()`:

```php
protected function _prepareCollection()
{
...
$this->_eventManager->dispatch(
         'adminhtml_block_promo_widget_chooser_prepare_collection',
         ['collection' => $collection]
);
```

*  `collection` is an object of `\Magento\SalesRule\Model\ResourceModel\Rule\Collection`

#### Classes raising the event

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Widget\Chooser`

### adminhtml_block_salesrule_actions_prepareform

#### Use cases

To modify sales rule actions form.

#### Origins

`\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Actions::addTabToForm()`:

```php
protected function addTabToForm($model
                              , $fieldsetId = 'actions_fieldset'
                              , $formName = 'sales_rule_form')
{
...
$this->_eventManager->dispatch('adminhtml_block_salesrule_actions_prepareform'
      , ['form' => $form]);
);
```

*  `form` is an object of `\Magento\Framework\Data\Form`

#### Classes raising the event

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Actions`

### adminhtml_cache_flush_all

#### Use cases

To perform actions **before** all cache is flushed.

#### Origins

*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushAll::execute()`:

   ```php
   public function execute()
   {
   $this->_eventManager->dispatch('adminhtml_cache_flush_all');
   ```

*  `\Magento\Backend\Console\Command\CacheFlushCommand::performAction()`:

   ```php
   protected function performAction(array $cacheTypes)
   {
   $this->eventManager->dispatch('adminhtml_cache_flush_all');
   ```

#### Classes raising the event

*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushAll`
*  `\Magento\Backend\Console\Command\CacheFlushCommand`

### adminhtml_cache_flush_system

#### Use cases

To perform actions when system cache is cleaned.

#### Origins

*  `\Magento\Translation\Model\Inline\CacheManager::updateAndGetTranslations()`:

   ```php
   public function updateAndGetTranslations()
   {
   $this->eventManager->dispatch('adminhtml_cache_flush_system');
   ```

*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushSystem::execute()`:

   ```php
   public function execute()
   {
   ...
   $this->_eventManager->dispatch('adminhtml_cache_flush_system');
   ```

*  `\Magento\Backend\Console\Command\CacheCleanCommand::performAction()`

  ```php
  protected function performAction(array $cacheTypes)
  {
  $this->eventManager->dispatch('adminhtml_cache_flush_system');
  ```

#### Classes raising the the event

*  `\Magento\Translation\Model\Inline\CacheManager`
*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushSystem`
*  `\Magento\Backend\Console\Command\CacheCleanCommand`

### adminhtml_cache_refresh_type

#### Use cases

*  To perform actions **before** Full Page Cache is cleared.
*  To perform actions **after** Configuration Cache is cleared.

#### Origins

*  `\Magento\Tax\Controller\Adminhtml\Tax\IgnoreTaxNotification::execute()`:

   ```php
   public function execute()
   {
   $this->_eventManager->dispatch('adminhtml_cache_refresh_type', ['type' => 'config']);
   ```
   *  `type` for cache type cleared

*  `\Magento\PageCache\Model\Cache\Type::clean()`:

   ```php
   public function clean($mode = \Zend_Cache::CLEANING_MODE_ALL, array $tags = [])
   {
   $this->eventManager->dispatch('adminhtml_cache_refresh_type');
   ```

#### Classes raising the the event

*  `\Magento\Tax\Controller\Adminhtml\Tax\IgnoreTaxNotification`
*  `\Magento\PageCache\Model\Cache\Type`

### adminhtml_catalog_category_tree_can_add_root_category

#### Use cases

To change availability of adding root category.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Category\Tree::canAddRootCategory()`:

```php
public function canAddRootCategory()
{
  $options = new \Magento\Framework\DataObject(['is_allow' => true]);
  $this->_eventManager->dispatch(
      'adminhtml_catalog_category_tree_can_add_root_category',
      ['category' => $this->getCategory(), 'options' => $options, 'store' => $this->getStore()->getId()]
  );
```

*  `category` - product category
*  `options` - `\Magento\Framework\DataObject(['is_allow' => true])`
*  `store` - current store ID

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Category\Checkboxes\Tree`
*  `\Magento\Catalog\Block\Adminhtml\Category\Widget\Chooser`

### adminhtml_catalog_category_tree_can_add_sub_category

#### Use cases

To change availability of adding a subcategory.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Category\Tree::canAddSubCategory()`:

```php
public function canAddSubCategory()
{
      $options = new \Magento\Framework\DataObject(['is_allow' => true]);
      $this->_eventManager->dispatch(
         'adminhtml_catalog_category_tree_can_add_sub_category',
         ['category' => $this->getCategory(), 'options' => $options, 'store' => $this->getStore()->getId()]
      );
```

*  `category` - product category
*  `options` - `\Magento\Framework\DataObject(['is_allow' => true])`
*  `store` - current store ID

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Category\Checkboxes\Tree`
*  `\Magento\Catalog\Block\Adminhtml\Category\Widget\Chooser`

### adminhtml_catalog_category_tree_is_moveable

#### Use cases

To change moveability of a category.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Category\Tree::_isCategoryMoveable()`:

```php
protected function _isCategoryMoveable($node)
{
      $options = new \Magento\Framework\DataObject(['is_moveable' => true, 'category' => $node]);

      $this->_eventManager->dispatch('adminhtml_catalog_category_tree_is_moveable', ['options' => $options]);
```

*  `options` - `\Magento\Framework\DataObject(['is_moveable' => true, 'category' => $node])`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Category\Checkboxes\Tree`
*  `\Magento\Catalog\Block\Adminhtml\Category\Widget\Chooser`

### adminhtml_catalog_product_attribute_edit_frontend_prepare_form

#### Use cases

To customize a product attribute edit form.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Front::_prepareForm()`:

```php
protected function _prepareForm()
{
...
$this->_eventManager->dispatch(
         'adminhtml_catalog_product_attribute_edit_frontend_prepare_form',
         ['form' => $form, 'attribute' => $attributeObject]
);
```

*  `form` is an object of `\Magento\Framework\Data\Form`
*  `attribute` is an object of `\Magento\Catalog\Model\Entity\Attribute`

#### Classes raising the event

 `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Front`

### adminhtml_catalog_product_attribute_set_main_html_before

#### Use cases

To customize the adminhtml catalog attribute set main block.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Main::_toHtml()`:

```php
   protected function _toHtml()
   {
      $this->_eventManager->dispatch(
         'adminhtml_catalog_product_attribute_set_main_html_before',
         ['block' => $this]
      );
```

*  `block` is an object of `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Main`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Main`

### adminhtml_catalog_product_attribute_set_toolbar_main_html_before

#### Use cases

To customize the adminhtml catalog attribute set toolbar main block.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Toolbar\Main::_toHtml()`:

```php
   protected function _toHtml()
   {
      $this->_eventManager->dispatch(
         'adminhtml_catalog_product_attribute_set_toolbar_main_html_before',
         ['block' => $this]
      );
```

*  `block` is an object of `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Toolbar\Main`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Toolbar\Main`

### adminhtml_catalog_product_edit_element_types

#### Use cases

To add or customize additional element types for catalog product edit attributes tab.

#### Origins

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes::_getAdditionalElementTypes()`:

   ```php
    protected function _getAdditionalElementTypes()
    {
    ...
    $this->_eventManager->dispatch('adminhtml_catalog_product_edit_element_types',
       ['response' => $response]);
   ```

*  `response` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Bundle\Block\Adminhtml\Catalog\Product\Edit\Tab\Attributes`
*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes`

### adminhtml_catalog_product_edit_prepare_form

#### Origins

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes::_prepareForm()`:

   ```php
    protected function _prepareForm()
    {
    ...
            $this->_eventManager->dispatch(
                'adminhtml_catalog_product_edit_prepare_form',
                ['form' => $form, 'layout' => $this->getLayout()]
            );
   ```

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\NewAttribute\Product\Attributes::_prepareForm()`:

   ```php
    protected function _prepareForm()
    {
    ...
        $this->_eventManager->dispatch('adminhtml_catalog_product_edit_prepare_form',
            ['form' => $form]
        );
   ```

*  `form` is an object of `\Magento\Framework\Data\Form`
*  `layout` is an object of `\Magento\Framework\View\LayoutInterface`

{:.procedure}
There are only three classes that raise this event:

*  `\Magento\Bundle\Block\Adminhtml\Catalog\Product\Edit\Tab\Attributes`
*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes`
*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\NewAttribute\Product\Attributes`

#### Use cases

To customize catalog product edit attribute tab form

### adminhtml_catalog_product_edit_tab_attributes_create_html_before

#### Origins

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes\Create::_toHtml()`:

   ```php
    protected function _toHtml()
    {
        $this->setCanShow(true);
        $this->_eventManager->dispatch(
            'adminhtml_catalog_product_edit_tab_attributes_create_html_before',
            ['block' => $this]
        );
   ```

*  `block` is an object of `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes\Create`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes\Create`

#### Use cases

To customize catalog product edit create attribute block

### adminhtml_catalog_product_form_prepare_excluded_field_list

#### Origins

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Action\Attribute\Tab\Attributes::_prepareForm()`:

   ```php
    protected function _prepareForm(): void
    {
        $this->setFormExcludedFieldList($this->excludeFields);
        $this->_eventManager->dispatch(
            'adminhtml_catalog_product_form_prepare_excluded_field_list',
            ['object' => $this]
        );
   ```

*  `object` is an object of `\Magento\Catalog\Block\Adminhtml\Product\Edit\Action\Attribute\Tab\Attributes`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Action\Attribute\Tab\Attributes`

#### Use cases

To customize catalog product edit attribute tab block

### adminhtml_catalog_product_grid_prepare_massaction

#### Use cases

To customize Mass Actions of a catalog product grid backend block.

#### Origins

*  `\Magento\Catalog\Block\Adminhtml\Product\Grid::_prepareMassaction()`:

   ```php
    protected function _prepareMassaction()
    {
     ...

     $this->_eventManager->dispatch('adminhtml_catalog_product_grid_prepare_massaction',
                                    ['block' => $this]);
     return $this;
    }
   ```

*  `block` is an object of `\Magento\Catalog\Block\Adminhtml\Product\Grid`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Grid`
*  `\Magento\UrlRewrite\Block\Catalog\Product\Grid`

### adminhtml_cmspage_on_delete

#### Origins

*  `\Magento\Cms\Controller\Adminhtml\Page\Delete::execute()`:

   ```php
    protected function execute()
    {
     ...
                $this->_eventManager->dispatch('adminhtml_cmspage_on_delete', [
                    'title' => $title,
                    'status' => 'success'
                ]);

                return $resultRedirect->setPath('*/*/');
            } catch (\Exception $e) {
                $this->_eventManager->dispatch(
                    'adminhtml_cmspage_on_delete',
                    ['title' => $title, 'status' => 'fail']
                );
     ...
    }
   ```

*  `title` is a string, title of a cms page
*  `status` is a string, 'success' or 'fail'

#### Classes raising the event

*  `\Magento\Cms\Controller\Adminhtml\Page\Delete`

#### Use cases

To perform actions on either successful or unsuccessful cms page removal

### adminhtml_controller_catalogrule_prepare_save

#### Origins

*  `\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Save::execute()`:

   ```php
    protected function execute()
    {
     ...
            try {
                $this->_eventManager->dispatch(
                    'adminhtml_controller_catalogrule_prepare_save',
                    ['request' => $this->getRequest()]
                );
     ...
    }
   ```

*  `request` is a page request object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Save`

#### Use cases

To alter how a catalog price rule is being saved

### adminhtml_controller_salesrule_prepare_save

#### Origins

*  `\Magento\SalesRule\Controller\Adminhtml\Promo\Quote\Save::execute()`:

   ```php
    protected function execute()
    {
     ...
            try {
                ...
                $this->_eventManager->dispatch(
                    'adminhtml_controller_salesrule_prepare_save',
                    ['request' => $this->getRequest()]
                );
     ...
    }
   ```

*  `request` is a page request object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\SalesRule\Controller\Adminhtml\Promo\Quote\Save`

#### Use cases

To alter how a cart price rule is being saved

### adminhtml_customer_orders_add_action_renderer

#### Origins

*  `\Magento\Sales\Block\Adminhtml\Reorder\Renderer\Action::render()`:

   ```php
    public function render(\Magento\Framework\DataObject $row)
    {
        ...
        $this->_eventManager->dispatch(
            'adminhtml_customer_orders_add_action_renderer',
            ['renderer' => $this, 'row' => $row]
        );
   ```

*  `renderer` is an object of `\Magento\Sales\Block\Adminhtml\Reorder\Renderer\Action`
*  `row` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Sales\Block\Adminhtml\Reorder\Renderer\Action`

#### Use cases

To modify the way action sales admin reorder block is rendered

### adminhtml_customer_prepare_save

#### Use cases

To modify a customer object before it is saved in admin panel.

#### Origins

`\Magento\Customer\Controller\Adminhtml\Index\Save::execute()`:

```php
   public function execute()
   {
   ...
               $this->_eventManager->dispatch(
                  'adminhtml_customer_prepare_save',
                  ['customer' => $customer, 'request' => $this->getRequest()]
               );
```

*  `customer` is an object of `\Magento\Customer\Api\Data\CustomerInterface`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Customer\Controller\Adminhtml\Index\Save`

### adminhtml_customer_save_after

#### Use cases

To modify a customer object after it is saved in admin panel.

#### Origins

`\Magento\Customer\Controller\Adminhtml\Index\Save::execute()`:

```php
   public function execute()
   {
   ...
               $this->_eventManager->dispatch(
                  'adminhtml_customer_save_after',
                  ['customer' => $customer, 'request' => $this->getRequest()]
               );
```

*  `customer` is an object of `\Magento\Customer\Api\Data\CustomerInterface`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Customer\Controller\Adminhtml\Index\Save`

### adminhtml_product_attribute_types

#### Use cases

To modify the way product attributes are processed.

#### Origins

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Main::execute()`:

   ```php
    private function processFrontendInputTypes(): void
    {
    ...
    $this->_eventManager->dispatch('adminhtml_product_attribute_types', ['response' => $response]);
   ```

*  `\Magento\Catalog\Model\Product\Attribute\Source\Inputtype::toOptionArray()`:

   ```php
   public function toOptionArray()
   {
   ...
   $this->_eventManager->dispatch('adminhtml_product_attribute_types', ['response' => $response]);
   ```

`response` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Main`
*  `\Magento\Catalog\Model\Product\Attribute\Source\Inputtype`

### adminhtml_promo_quote_edit_tab_coupons_form_prepare_form

#### Use cases

To modify the admin coupon code form is generated.

#### Origins

`\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Coupons\Form::_prepareForm()`:

```php
   protected function _prepareForm()
   {
      $this->_eventManager->dispatch(
         'adminhtml_promo_quote_edit_tab_coupons_form_prepare_form',
         ['form' => $form]
      );
```

*  `form` is an object of `\Magento\Framework\Data\Form`

#### Classes raising the event

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Coupons\Form`

### adminhtml_sales_order_create_process_data

#### Use cases

To modify an order after it gets processed.

#### Origins

`\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

```php
   protected function _processActionData()
   {
   ...
      $eventData = [
         'order_create_model' => $this->_getOrderCreateModel(),
         'request' => $this->getRequest()->getPostValue(),
      ];

      $this->_eventManager->dispatch('adminhtml_sales_order_create_process_data', $eventData);
```

*  `order_create_model` is an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request` is an array of POST values

#### Classes raising the event

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

### adminhtml_sales_order_create_process_data_before

#### Use cases

To modify an order before it gets processed.

#### Origins

`\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

```php
   protected function _processActionData()
   {
      $eventData = [
         'order_create_model' => $this->_getOrderCreateModel(),
         'request_model' => $this->getRequest(),
         'session' => $this->_getSession(),
      ];

      $this->_eventManager->dispatch('adminhtml_sales_order_create_process_data_before', $eventData);
```

*  `order_create_model` is an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request_model` is an object of `\Magento\Framework\App\RequestInterface`
*  `session` is an object of `\Magento\Backend\Model\Session\Quote`

#### Classes raising the event

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

### adminhtml_sales_order_create_process_item_after

#### Use cases

To modify an order item after it gets processed.

#### Origins

`\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

```php
   protected function _processActionData()
   {
      $eventData = [
         'order_create_model' => $this->_getOrderCreateModel(),
         'request_model' => $this->getRequest(),
         'session' => $this->_getSession(),
      ];
   ...
      $this->_eventManager->dispatch('adminhtml_sales_order_create_process_item_after', $eventData);
```

*  `order_create_model` is an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request_model` is an object of `\Magento\Framework\App\RequestInterface`
*  `session` is an object of `\Magento\Backend\Model\Session\Quote`

#### Classes raising the event

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

### adminhtml_sales_order_create_process_item_before

#### Use cases

To modify an order item before it gets processed.

#### Origins

`\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

```php
   protected function _processActionData()
   {
      $eventData = [
         'order_create_model' => $this->_getOrderCreateModel(),
         'request_model' => $this->getRequest(),
         'session' => $this->_getSession(),
      ];
   ...
      $this->_eventManager->dispatch('adminhtml_sales_order_create_process_item_before', $eventData);
```

*  `order_create_model` is an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request_model` is an object of `\Magento\Framework\App\RequestInterface`
*  `session` is an object of `\Magento\Backend\Model\Session\Quote`

#### Classes raising the event

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

### adminhtml_sales_order_creditmemo_register_before

#### Use cases

To modify a credit memo before it gets saved in the registry.

#### Origins

*  `\Magento\Sales\Controller\Adminhtml\Order\CreditmemoLoader::load()`:

   ```php
    public function load()
    {
    ...
        $this->eventManager->dispatch(
            'adminhtml_sales_order_creditmemo_register_before',
            ['creditmemo' => $creditmemo, 'input' => $this->getCreditmemo()]
        );
   ```

*  `creditmemo` is an object of `\Magento\Sales\Model\Order\Creditmemo`
*  `input` is a data array

#### Classes raising the event

*  `\Magento\Sales\Controller\Adminhtml\Order\CreditmemoLoader`

### adminhtml_store_edit_form_prepare_form

#### Use cases

To a store edit form before it gets rendered.

#### Origins

`\Magento\Backend\Block\System\Store\Edit\AbstractForm::_prepareForm()`:

```php
   protected function _prepareForm()
   {
   ...
      $this->_eventManager->dispatch('adminhtml_store_edit_form_prepare_form', ['block' => $this]);
```

*  `block` is an object of `\Magento\Backend\Block\System\Store\Edit\AbstractForm`

#### Classes raising the event

*  `\Magento\Backend\Block\System\Store\Edit\Form\Website`
*  `\Magento\Backend\Block\System\Store\Edit\Form\Group`
*  `\Magento\Backend\Block\System\Store\Edit\Form\Store`

### adminhtml_system_config_advanced_disableoutput_render_before

#### Use cases

To alter modules list before they get displayed.

#### Origins

`\Magento\Config\Block\System\Config\Form\Fieldset\Modules\DisableOutput::render()`:

```php
   protected function render()
   {
   ...
      $dispatchResult = new \Magento\Framework\DataObject($modules);
      $this->_eventManager->dispatch(
         'adminhtml_system_config_advanced_disableoutput_render_before',
         ['modules' => $dispatchResult]
      );
```

*  `modules` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Config\Block\System\Config\Form\Fieldset\Modules\DisableOutput`

### adminhtml_widget_grid_filter_collection

#### Use cases

To alter report collection or filter values.

#### Origins

`\Magento\Reports\Block\Adminhtml\Grid::_prepareCollection()`:

```php
   protected function _prepareCollection()
   {
   ...
         $this->_eventManager->dispatch(
               'adminhtml_widget_grid_filter_collection',
               ['collection' => $this->getCollection(), 'filter_values' => $this->_filterValues]
         );
```

*  `collection` is an object of `\Magento\Reports\Model\ResourceModel\Report\Collection`
*  `filter_values` is a value array

#### Classes raising the event

*  `\Magento\Reports\Block\Adminhtml\Grid`

### admin_permissions_role_prepare_save

#### Use cases

To alter the role object before it is saved.

#### Origins

`\Magento\User\Controller\Adminhtml\User\Role\SaveRole::execute()`:

```php
   public function execute()
   {
   ...
         $this->_eventManager->dispatch(
               'admin_permissions_role_prepare_save',
               ['object' => $role, 'request' => $this->getRequest()]
         );
```

*  `object` is an object of `\Magento\Authorization\Model\Role`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\User\Controller\Adminhtml\User\Role\SaveRole`

### admin_system_config_changed_section_currency

#### Use cases

To perform actions after currency symbol is set in admin panel.

#### Origins

`\Magento\CurrencySymbol\Model\System\Currencysymbol::setCurrencySymbolsData()`:

```php
   public function setCurrencySymbolsData($symbols = [])
   {
   ...
      $this->_eventManager->dispatch(
         'admin_system_config_changed_section_currency',
         ['website' => $this->_websiteId, 'store' => $this->_storeId]
      );
```

*  `website` is a website ID
*  `store` is a store ID

#### Classes raising the event

*  `\Magento\CurrencySymbol\Model\System\Currencysymbol`

### admin_system_config_changed_section_currency_before_reinit

#### Use cases

To perform actions before admin configuration reinitialized.

#### Origins

`\Magento\CurrencySymbol\Model\System\Currencysymbol::setCurrencySymbolsData()`:

```php
   public function setCurrencySymbolsData($symbols = [])
   {
   ...
      $this->_eventManager->dispatch(
         'admin_system_config_changed_section_currency_before_reinit',
         ['website' => $this->_websiteId, 'store' => $this->_storeId]
      );
```

*  `website` is a website ID
*  `store` is a store ID

#### Classes raising the event

*  `\Magento\CurrencySymbol\Model\System\Currencysymbol`

### admin_system_config_changed_section_design

#### Use cases

To perform actions after admin design section saved or deleted.

#### Origins

*  `\Magento\Theme\Model\Design\Config\Plugin::afterSave()`:
   ```php
    public function afterSave(DesignConfigRepository $subject, DesignConfigInterface $designConfig)
    {
    ...
        $this->eventManager->dispatch(
            'admin_system_config_changed_section_design',
            ['website' => $website, 'store' => $store]
        );
   ```
*  `\Magento\Theme\Model\Design\Config\Plugin::afterDelete()`:
   ```php
    public function afterDelete(DesignConfigRepository $subject, DesignConfigInterface $designConfig)
    {
    ...
        $this->eventManager->dispatch(
            'admin_system_config_changed_section_design',
            ['website' => $website, 'store' => $store]
        );
   ```

*  `website` is an object of `\Magento\Store\Api\Data\WebsiteInterface`
*  `store` is an object of `\Magento\Store\Api\Data\StoreInterface`

#### Classes raising the event

*  `\Magento\Theme\Model\Design\Config\Plugin`

### admin_system_config_save

#### Use cases

To perform actions after admin configuration is saved.

#### Origins

`\Magento\Config\Controller\Adminhtml\System\Config\Save::execute()`:

```php
   public function execute()
   {
   ...
         $this->_eventManager->dispatch(
               'admin_system_config_save',
               ['configData' => $configData, 'request' => $this->getRequest()]
         );
```

*  `configData` is a data array
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Config\Controller\Adminhtml\System\Config\Save`

### admin_user_authenticate_after

#### Use cases

To perform actions after a user is authenticated.

#### Origins

*  `\Magento\User\Model\User::authenticate()`:
   ```php
    public function authenticate($username, $password)
    {
    ...
            $this->_eventManager->dispatch(
                'admin_user_authenticate_after',
                ['username' => $username, 'password' => $password, 'user' => $this, 'result' => $result]
            );
   ```
*  `\Magento\User\Model\User::performIdentityCheck()`:
   ```php
   public function performIdentityCheck($passwordString)
   {
   ...
        $this->_eventManager->dispatch(
            'admin_user_authenticate_after',
            [
                'username' => $this->getUserName(),
                'password' => $passwordString,
                'user' => $this,
                'result' => $isCheckSuccessful
            ]
        );
   ```

*  `username` is a username string
*  `password` is a password string
*  `user` is an object of `\Magento\User\Model\User`
*  `result` is a boolean value

#### Classes raising the event

*  `\Magento\User\Model\User`

### admin_user_authenticate_before

#### Use cases

To perform actions before a user is authenticated.

#### Origins

`\Magento\User\Model\User::authenticate()`:

```php
   public function authenticate($username, $password)
   {
   ...
         $this->_eventManager->dispatch(
               'admin_user_authenticate_before',
               ['username' => $username, 'user' => $this]
         );
```

*  `username` is a username string
*  `user` is an object of `\Magento\User\Model\User`

#### Classes raising the event

*  `\Magento\User\Model\User`

### amazon_customer_authenticated

#### Use cases

To perform actions before an Amazon user is authenticated.

#### Origins

`\Amazon\Login\Helper\Session::dispatchAuthenticationEvent()`:

```php
   protected function dispatchAuthenticationEvent()
   {
      $this->eventManager->dispatch('amazon_customer_authenticated');
   }
```

Used in functions:

```php
   public function loginById($customerId)
   {
      $this->dispatchAuthenticationEvent();
   ...

   public function login(CustomerInterface $customerData)
   {
      $this->dispatchAuthenticationEvent();
   ...
```

#### Classes raising the event

*  `\Amazon\Login\Helper\Session`

### amazon_login_authorize_error

#### Use cases

To handle an Amazon login exception.

#### Origins

`\Amazon\Login\Controller\Login\Authorize::execute()`:

```php
   public function execute()
   {
   ..
      $this->_eventManager->dispatch('amazon_login_authorize_error', ['exception' => $e]);
   }
```

*  `exception` is an object of `Magento\Framework\Exception\ValidatorException` or `\Exception`

#### Classes raising the event

*  `\Amazon\Login\Controller\Login\Authorize`

### amazon_login_authorize_validation_error

#### Use cases

To handle a `ValidatorException` Amazon login exception.

#### Origins

`\Amazon\Login\Controller\Login\Authorize::execute()`:

```php
   public function execute()
   {
   ..
      $this->_eventManager->dispatch('amazon_login_authorize_validation_error', ['exception' => $e]);
   }
```

*  `exception` is an object of `Magento\Framework\Exception\ValidatorException`

#### Classes raising the event

*  `\Amazon\Login\Controller\Login\Authorize`

### amazon_payment_authorize_before

#### Use cases

To perform actions before Amazon authorizes a payment.

#### Origins

`\Amazon\Payment\Gateway\Request\AuthorizationRequestBuilder::build()`:

```php
   public function build(array $buildSubject)
   {
   ..
         $transport = new DataObject($data);
         $this->eventManager->dispatch(
               'amazon_payment_authorize_before',
               [
                  'context' => 'authorization',
                  'payment' => $paymentDO->getPayment(),
                  'transport' => $transport
               ]
         );
   }
```

*  `context` is a string `authorization`
*  `payment` is an object of `Magento\Payment\Model\InfoInterface`
*  `transport` is a `DataObject` object

#### Classes raising the event

*  `\Amazon\Payment\Gateway\Request\AuthorizationRequestBuilder`

### amazon_payment_pending_authorization_hard_decline_after

#### Use cases

To perform actions before a hard decline of Amazon payment.

#### Origins

`\Amazon\Payment\Model\PaymentManagement\Authorization::hardDeclinePendingAuthorization()`:

```php
   protected function hardDeclinePendingAuthorization(...)
   {
   ..
      $this->eventManager->dispatch(
         'amazon_payment_pending_authorization_hard_decline_after',
         [
               'order' => $order,
               'pendingAuthorization' => $pendingAuthorization,
         ]
      );
   }
```

*  `order` is an object of `\Magento\Sales\Api\Data\OrderInterface`
*  `pendingAuthorization` is an object of `\Amazon\Payment\Api\Data\PendingAuthorizationInterface`

#### Classes raising the event

*  `\Amazon\Payment\Model\PaymentManagement\Authorization`

### amazon_payment_pending_authorization_soft_decline_after

#### Use cases

To perform actions before a soft Amazon payment decline.

#### Origins

`\Amazon\Payment\Model\PaymentManagement\Authorization::softDeclinePendingAuthorization()`:

```php
   protected function softDeclinePendingAuthorization(...)
   {
   ..
      $this->eventManager->dispatch(
         'amazon_payment_pending_authorization_soft_decline_after',
         [
               'order' => $order,
               'pendingAuthorization' => $pendingAuthorization,
         ]
      );
   }
```

*  `order` is an object of `\Magento\Sales\Api\Data\OrderInterface`
*  `pendingAuthorization` is an object of `\Amazon\Payment\Api\Data\PendingAuthorizationInterface`

#### Classes raising the event

*  `\Amazon\Payment\Model\PaymentManagement\Authorization`

### assigned_theme_changed

#### Use cases

To perform actions after an assigned theme changed.

#### Origins

`\Magento\Theme\Observer\CheckThemeIsAssignedObserver::execute()`:

```php
   public function execute(EventObserver $observer)
   {
   ..
      $this->eventDispatcher->dispatch('assigned_theme_changed', ['theme' => $theme]);
   }
```

*  `theme` is an object of `\Magento\Framework\View\Design\ThemeInterface`

#### Classes raising the event

*  `\Magento\Theme\Observer\CheckThemeIsAssignedObserver`

### assign_theme_to_stores_after

#### Use cases

To perform actions after a new theme is assigned to a store.

#### Origins

`\Magento\Theme\Model\Config::assignToStore()`:

```php
   public function assignToStore(...)
   {
   ..
      $this->_eventManager->dispatch(
         'assign_theme_to_stores_after',
         ['stores' => $stores, 'scope' => $scope, 'theme' => $theme]
      );
   }
```

*  `stores` is an array of stores
*  `scope` - scope value defined in `\Magento\Store\Model\ScopeInterface`
*  `theme` is an object of `\Magento\Framework\View\Design\ThemeInterface`

#### Classes raising the event

*  `\Magento\Theme\Model\Config`

### backend_auth_user_login_failed

#### Use cases

To perform actions after a backend login attempt has failed.

#### Origins

`\Magento\Backend\Model\Auth::login()`:

```php
   public function login($username, $password)
   {
   ..
      } catch (PluginAuthenticationException $e) {
         $this->_eventManager->dispatch(
               'backend_auth_user_login_failed',
               ['user_name' => $username, 'exception' => $e]
         );
         throw $e;
      } catch (\Magento\Framework\Exception\LocalizedException $e) {
         $this->_eventManager->dispatch(
               'backend_auth_user_login_failed',
               ['user_name' => $username, 'exception' => $e]
         );
   }
```

*  `user_name` - username string
*  `exception` is an object of `\Magento\Framework\Exception\LocalizedException` or `\Magento\Framework\Exception\Plugin\AuthenticationException`

#### Classes raising the event

*  `\Magento\Backend\Model\Auth`

### backend_auth_user_login_success

#### Use cases

To perform actions after a successful backend login attempt.

#### Origins

`\Magento\Backend\Model\Auth::login()`:

```php
   public function login($username, $password)
   {
   ..
               $this->_eventManager->dispatch(
                  'backend_auth_user_login_success',
                  ['user' => $this->getCredentialStorage()]
               );
   }
```

*  `user` is an object of `\Magento\Backend\Model\Auth\Credential\StorageInterface`

#### Classes raising the event

*  `\Magento\Backend\Model\Auth`

### backend_block_widget_grid_prepare_grid_before

#### Use cases

To perform actions before a backend grid is prepared.

#### Origins

`\Magento\Backend\Block\Widget\Grid::_prepareGrid()`:

```php
   protected function _prepareGrid()
   {
      $this->_eventManager->dispatch(
         'backend_block_widget_grid_prepare_grid_before',
         ['grid' => $this, 'collection' => $this->getCollection()]
      );
   }
```

*  `this` is an object of `\Magento\Backend\Block\Widget\Grid`
*  `collection` is an object of `\Magento\Framework\Data\Collection`

#### Classes raising the event

*  `\Magento\AdvancedSearch\Block\Adminhtml\Search\Grid`
*  `\Magento\Newsletter\Block\Adminhtml\Subscriber\Grid`

### braintree_googlepay_update_quote_after

#### Use cases

To perform actions after braintree updates a quote.

#### Origins

`\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater::updateQuote()`:

```php
   private function updateQuote(Quote $quote, array $details)
   {
   ...
      $this->eventManager->dispatch('braintree_googlepay_update_quote_after', [
         'quote' => $quote,
         'googlepay_response' => $details
      ]);
   }
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `googlepay_response` is a response array

#### Classes raising the event

*  `\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater`

### braintree_googlepay_update_quote_before

#### Use cases

To perform actions before braintree updates a quote.

#### Origins

*  `\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater::updateQuote()`:

   ```php
    private function updateQuote(Quote $quote, array $details)
    {
        $this->eventManager->dispatch('braintree_googlepay_update_quote_before', [
            'quote' => $quote,
            'googlepay_response' => $details
        ]);
    }
   ```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `googlepay_response` is a response array

#### Classes raising the event

*  `\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater`

### braintree_paypal_update_quote_after

#### Use cases

To perform actions after Braintree updates a quote.

#### Origins

`\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater::updateQuote()`:

```php
   private function updateQuote(Quote $quote, array $details)
   {
   ...
      $this->eventManager->dispatch('braintree_paypal_update_quote_before', [
         'quote' => $quote,
         'paypal_response' => $details
      ]);
   }
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `paypal_response` is a response array

#### Classes raising the event

*  `\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater`

### braintree_paypal_update_quote_before

#### Use cases

To perform actions before Braintree updates a quote.

#### Origins

`\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater::updateQuote()`:

```php
   private function updateQuote(Quote $quote, array $details)
   {
      $this->eventManager->dispatch('braintree_paypal_update_quote_before', [
         'quote' => $quote,
         'paypal_response' => $details
      ]);
   }
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `paypal_response` is a response array

#### Classes raising the event

*  `\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater`

### catalogrule_dirty_notice

#### Use cases

To perform actions when some catalog rules have changed but changes have not been applied yet.

#### Origins

`\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Index::execute()`:

```php
   public function execute()
   {
      $dirtyRules = $this->_objectManager->create(\Magento\CatalogRule\Model\Flag::class)->loadSelf();
      $this->_eventManager->dispatch(
         'catalogrule_dirty_notice',
         ['dirty_rules' => $dirtyRules, 'message' => $this->getDirtyRulesNoticeMessage()]
      );
   }
```

*  `dirty_rules` is an object of `\Magento\CatalogRule\Model\Flag`
*  `message` is a message string

#### Classes raising the event

*  `\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Index`

### catalogsearch_reset_search_result

#### Use cases

To perform actions when search results are reset.

#### Origins

*  `\Magento\CatalogSearch\Model\ResourceModel\Fulltext::resetSearchResults()`:
   ```php
    public function resetSearchResults()
    {
    ...
        $this->_eventManager->dispatch('catalogsearch_reset_search_result');
        return $this;
    }
    ```
*  `\Magento\CatalogSearch\Model\ResourceModel\Fulltext::resetSearchResultsByStore()`:
   ```php
    public function resetSearchResultsByStore($storeId)
    {
    ...
        $this->_eventManager->dispatch('catalogsearch_reset_search_result', ['store_id' => $storeId]);

   ```

`store_id` is a store identifier.

#### Classes raising the event

*  `\Magento\CatalogSearch\Model\ResourceModel\Fulltext`

### catalogsearch_searchable_attributes_load_after

#### Use cases

To perform actions after searchable attributes get loaded.

#### Origins

`\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider::getSearchableAttributes()`:

```php
   public function getSearchableAttributes($backendType = null)
   {
   ...
         $this->eventManager->dispatch(
               'catalogsearch_searchable_attributes_load_after',
               ['engine' => $this->engine, 'attributes' => $attributes]
         );
   }
```

*  `engine` is an object of `\Magento\CatalogSearch\Model\ResourceModel\EngineInterface`
*  `attributes` is an array of attributes

#### Classes raising the event

*  `\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider`

### catalog_block_product_list_collection

#### Use cases

To perform actions with a product collection after it is initialized.

#### Origins

`\Magento\Catalog\Block\Product\ListProduct::initializeProductCollection()`:

```php
   private function initializeProductCollection()
   {
   ...
      $this->_eventManager->dispatch(
         'catalog_block_product_list_collection',
         ['collection' => $collection]
      );
   }
```

*  `collection` is an object of `\Magento\Eav\Model\Entity\Collection\AbstractCollection`

#### Classes raising the event

*  `\Magento\Catalog\Block\Product\ProductList\Random`
*  `\Magento\Catalog\Block\Product\ProductList\Promotion`

### catalog_block_product_status_display

#### Use cases

To perform actions when the `displayProductStockStatus()` function is called.

#### Origins

`\Magento\Catalog\Block\Product\AbstractProduct::displayProductStockStatus()`:

```php
   public function displayProductStockStatus()
   {
      $statusInfo = new \Magento\Framework\DataObject(['display_status' => true]);
      $this->_eventManager->dispatch('catalog_block_product_status_display'
                                    , ['status' => $statusInfo]);
      return (bool) $statusInfo->getDisplayStatus();
   }
```

*  `status` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Reports\Block\Product\Compared`
*  `\Magento\Reports\Block\Product\Widget\Viewed\Item`

### catalog_category_change_products

#### Use cases

To perform actions after new products get assigned to a category.
Assigned products get unassigned, or positions of assigned products are changed.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Category::_saveCategoryProducts()`:

```php
   protected function _saveCategoryProducts($category)
   {
   ...
         $this->_eventManager->dispatch(
               'catalog_category_change_products',
               ['category' => $category, 'product_ids' => $productIds]
         );
   }
```

*  `category` is an object of `\Magento\Catalog\Model\Category`
*  `product_ids` is a product IDs array

#### Classes raising the event

*  `\Magento\Catalog\Model\ResourceModel\Category`

### catalog_category_delete_after_done

#### Use cases

To perform actions after a category gets deleted.

#### Origins

*  `\Magento\Catalog\Model\ResourceModel\Category::delete()`:

   ```php
    public function delete($object)
    {
        $this->getEntityManager()->delete($object);
        $this->_eventManager->dispatch(
            'catalog_category_delete_after_done',
            ['product' => $object, 'category' => $object]
        );
        return $this;
    }
   ```

*  `product` is an object of `\Magento\Catalog\Model\Category`
*  `category` is an object of `\Magento\Catalog\Model\Category`

#### Classes raising the event

*  `\Magento\Catalog\Model\ResourceModel\Category`

### catalog_category_flat_loadnodes_before

#### Use cases

To modify a `select` object before category flat nodes are loaded.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Category\Flat::_loadNodes()`:
```php
   protected function _loadNodes($parentNode = null, $recursionLevel = 0, $storeId = 0, $skipMenuFilter = false)
   {
   ...
      $this->_eventManager->dispatch('catalog_category_flat_loadnodes_before'
                                    , ['select' => $select]);
```

*  `select` is an object of `Zend_Db_Select`

#### Classes raising the event

*  `\Magento\Catalog\Model\ResourceModel\Category\Flat`

### catalog_category_prepare_save

#### Use cases

To modify a category before it is saved.

#### Origins

`\Magento\Catalog\Controller\Adminhtml\Category\Save::execute()`:
```php
   public function execute()
   {
   ...
               $this->_eventManager->dispatch(
                  'catalog_category_prepare_save',
                  ['category' => $category, 'request' => $this->getRequest()]
               );
```

*  `category` is an object of `\Magento\Catalog\Model\Category`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Adminhtml\Category\Save`

### catalog_category_tree_init_inactive_category_ids

#### Use cases

To add more inactive category IDs.

#### Origins

*  `\Magento\Catalog\Model\ResourceModel\Category\Tree::_initInactiveCategoryIds()`
*  `\Magento\Catalog\Model\ResourceModel\Category\Flat::_initInactiveCategoryIds()`:
   ```php
    protected function _initInactiveCategoryIds()
    {
        $this->_inactiveCategoryIds = [];
        $this->_eventManager->dispatch('catalog_category_tree_init_inactive_category_ids', ['tree' => $this]);
        return $this;
    }
   ```

`tree` is an object of `\Magento\Catalog\Model\ResourceModel\Category\Tree` or `\Magento\Catalog\Model\ResourceModel\Category\Flat`

#### Classes that raise the event

*  `\Magento\Catalog\Model\ResourceModel\Category\Tree`
*  `\Magento\Catalog\Model\ResourceModel\Category\Flat`

### catalog_controller_category_delete

#### Use cases

To perform actions before a category gets deleted.

#### Origins

`\Magento\Catalog\Controller\Adminhtml\Category\Delete::execute()`:
```php
   public function execute()
   {
   ...
               $this->_eventManager->dispatch('catalog_controller_category_delete', ['category' => $category]);
```

*  `category` is an object of `\Magento\Catalog\Model\Category`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Adminhtml\Category\Delete`

### catalog_controller_category_init_after

#### Use cases

To perform actions after a category gets initialized.

#### Origins

`\Magento\Catalog\Controller\Category\View::_initCategory()`:

```php
   protected function _initCategory()
   {
   ...
         $this->_eventManager->dispatch(
               'catalog_controller_category_init_after',
               ['category' => $category, 'controller_action' => $this]
         );
```

*  `category` is an object of `\Magento\Catalog\Model\Category`
*  `controller_action` is an object of `\Magento\Catalog\Controller\Category\View`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Category\View`

### catalog_controller_product_init_after

#### Use cases

To perform actions after a product gets initialized.

#### Origins

`\Magento\Catalog\Helper\Product::initProduct()`:

```php
   public function initProduct($productId, $controller, $params = null)
   {
   ...
         $this->_eventManager->dispatch(
               'catalog_controller_product_init_after',
               ['product' => $product, 'controller_action' => $controller]
         );
```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `controller_action` is an object of `\Magento\Framework\App\Action\Action`

#### Classes raising the event

*  `\Magento\Catalog\Helper\Product`

### catalog_controller_product_init_before

#### Use cases

To perform actions before a product gets initialized.

#### Origins

`\Magento\Catalog\Helper\Product::initProduct()`:

```php
   public function initProduct($productId, $controller, $params = null)
   {
   ...
      $this->_eventManager->dispatch(
         'catalog_controller_product_init_before',
         ['controller_action' => $controller, 'params' => $params]
      );
```

*  `params` is an object of `\Magento\Framework\DataObject`
*  `controller_action` is an object of `\Magento\Framework\App\Action\Action`

#### Classes raising the event

*  `\Magento\Catalog\Helper\Product`

### catalog_controller_product_view

#### Use cases

To perform actions before a product page is displayed on the frontend.

#### Origins

`\Magento\Catalog\Helper\Product\View::prepareAndRender()`:

```php
   public function initProduct($productId, $controller, $params = null)
   {
   ...
      $this->_eventManager->dispatch('catalog_controller_product_view', ['product' => $product]);
```

*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Catalog\Helper\Product\View`

### catalog_prepare_price_select

#### Use cases

To modify the way prices are added to a `select` statement.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Product\Collection::_preparePriceExpressionParameters()`:

```php
   protected function _preparePriceExpressionParameters($select)
   {
   ...
      $eventArgs = [
         'select' => $select,
         'table' => $table,
         'store_id' => $this->getStoreId(),
         'response_object' => $response,
      ];

      $this->_eventManager->dispatch('catalog_prepare_price_select', $eventArgs);

```

*  `select` is an object of `\Magento\Framework\DB\Select`
*  `table` is a table name
*  `store_id` is a store ID
*  `response_object` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`

### catalog_product_attribute_update_before

#### Use cases

To perform actions before a product attribute(s) gets updated.

#### Origins

`\Magento\Catalog\Model\Product\Action::updateAttributes()`:
```php
   public function updateAttributes($productIds, $attrData, $storeId)
   {
      $this->_eventManager->dispatch(
         'catalog_product_attribute_update_before',
         ['attributes_data' => &$attrData, 'product_ids' => &$productIds, 'store_id' => &$storeId]
      );
```

*  `attributes_data` is a data array
*  `product_ids` is a product IDs array
*  `store_id` is a store ID

#### Classes raising the event

*  `\Magento\Catalog\Model\Product\Action`

### catalog_product_collection_apply_limitations_after

#### Use cases

To perform actions after product collection limitations have been applied.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Product\Collection::_applyProductLimitations()`:

```php
   protected function _applyProductLimitations()
   {
   ...
      $this->_eventManager->dispatch(
         'catalog_product_collection_apply_limitations_after',
         ['collection' => $this]
      );
```

*  `collection` is an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`

#### Classes raising the event

*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`

### catalog_product_collection_before_add_count_to_categories

#### Use cases

To perform actions before category counts get added to a product collection.

#### Origins

*  `\Magento\Catalog\Model\ResourceModel\Product\Collection::addCountToCategories()`:

   ```php
    public function addCountToCategories($categoryCollection)
    {
    ...
            $this->_eventManager->dispatch(
                'catalog_product_collection_before_add_count_to_categories',
                ['collection' => $this]
            );
   ```

*  `collection` is an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`

#### Classes raising the event

*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`

### catalog_product_collection_load_after

#### Use cases

To perform actions after a product collection gets loaded.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Product\Collection::_afterLoad()`:

```php
   protected function _afterLoad()
   {
   ...
   $this->_eventManager->dispatch('catalog_product_collection_load_after', ['collection' => $this]);
```

*  `collection` is an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`

#### Classes raising the event

*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`

### catalog_product_compare_add_product

#### Use cases

To perform actions after a product gets added to a compare list.

#### Origins

`\Magento\Catalog\Controller\Product\Compare\Add::execute()`:

```php
   public function execute()
   {
   ...
   $this->_eventManager->dispatch('catalog_product_compare_add_product', ['product' => $product]);
```

*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Product\Compare\Add`

### catalog_product_compare_item_collection_clear

#### Use cases

To perform actions after a compare list collection gets cleared.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Product\Compare\Item\Collection::clear()`:

```php
   public function clear()
   {
      $this->_catalogProductCompareItem->clearItems($this->getVisitorId(), $this->getCustomerId());
      $this->_eventManager->dispatch('catalog_product_compare_item_collection_clear');
   ...
```

#### Classes raising the event

*  `\Magento\Catalog\Model\ResourceModel\Product\Compare\Item\Collection`

### catalog_product_compare_remove_product

#### Use cases

To perform actions after a product gets removed from a compare list.

#### Origins

`\Magento\Catalog\Controller\Product\Compare\Remove::execute()`:
d
```php
   public function execute()
   {
   ...
                  $this->_eventManager->dispatch(
                     'catalog_product_compare_remove_product',
                     ['product' => $item]
                  );
   ...
```

*  `product` is an object of `\Magento\Catalog\Model\Product\Compare\Item`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Product\Compare\Remove`

### catalog_product_delete_after_done

#### Use cases

To perform actions after a product gets deleted.

#### Origins

`\Magento\Catalog\Model\ResourceModel\Product::delete()`:

```php
   public function delete($object)
   {
      $this->getEntityManager()->delete($object);
      $this->eventManager->dispatch(
         'catalog_product_delete_after_done',
         ['product' => $object]
      );
   ...
```

*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Catalog\Model\ResourceModel\Product`
*  `\Magento\CatalogImportExport\Model\Import\Proxy\Product\ResourceModel`

### catalog_product_edit_action

#### Use cases

To perform actions after a product gets edited in admin panel.

#### Origins

`\Magento\Catalog\Controller\Adminhtml\Product\Edit::execute()`:

```php
   public function execute()
   {
   ...
      $this->_eventManager->dispatch('catalog_product_edit_action', ['product' => $product]);
```

*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Downloadable\Controller\Adminhtml\Downloadable\Product\Edit\Edit`
*  `\Magento\Bundle\Controller\Adminhtml\Bundle\Product\Edit\Edit`

### catalog_product_gallery_prepare_layout

#### Use cases

To modify the way a product admin gallery block layout is rendered.

#### Origins

`\Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content::_prepareLayout()`:

```php
   protected function _prepareLayout()
   {
   ...
      $this->_eventManager->dispatch('catalog_product_gallery_prepare_layout', ['block' => $this]);
```

*  `block` is an object of `\Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content`

#### Classes raising the event

*  `\Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content`

### catalog_product_gallery_upload_image_after

#### Use cases

To perform an action after product gallery image gets uploaded.

#### Origins

`\Magento\Catalog\Controller\Adminhtml\Product\Gallery\Upload::execute()`:

```php
   public function execute()
   {
   ...
         $this->_eventManager->dispatch(
               'catalog_product_gallery_upload_image_after',
               ['result' => $result, 'action' => $this]
         );
```

*  `result` is an array of uploader save data
*  `action` is an object of `\Magento\Catalog\Controller\Adminhtml\Product\Gallery\Upload`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Adminhtml\Product\Gallery\Upload`

### catalog_product_get_final_price

#### Use cases

To alter the way the final product price is generated.

#### Origins

*  `\Magento\Catalog\Model\Product\Type\Price::getFinalPrice()`:
   ```php
    public function getFinalPrice($qty, $product)
    {
    ...
     $this->_eventManager->dispatch('catalog_product_get_final_price', ['product' => $product, 'qty' => $qty]);
   ```
*  `\Magento\Bundle\Pricing\Price\BundleSelectionPrice::getValue()`:
   ```php
   public function getValue()
   {
   ...
                $this->eventManager->dispatch(
                    'catalog_product_get_final_price',
                    ['product' => $product, 'qty' => $this->bundleProduct->getQty()]
                );
   ```
*  `\Magento\Bundle\Model\Product\Price::getSelectionFinalTotalPrice()`:

  ```php
     public function getSelectionFinalTotalPrice(
        $bundleProduct,
        $selectionProduct,
        $bundleQty,
        $selectionQty,
        $multiplyQty = true,
        $takeTierPrice = true
    ) {
    ...
                 $this->_eventManager->dispatch(
                    'catalog_product_get_final_price',
                    ['product' => $product, 'qty' => $bundleQty]
                );
  ```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `qty` for quantity float or null

#### Classes raising the event

*  `\Magento\Bundle\Model\Product\Price`
*  `\Magento\Downloadable\Model\Product\Price`
*  `\Magento\GroupedProduct\Model\Product\Type\Grouped\Price`

### catalog_product_import_bunch_delete_after

#### Use cases

To perform an action after products get deleted.

#### Origins

`\Magento\CatalogImportExport\Model\Import\Product::_deleteProducts()`:

```php
   protected function _deleteProducts()
   {
   ...
               $this->_eventManager->dispatch(
                  'catalog_product_import_bunch_delete_after',
                  ['adapter' => $this, 'bunch' => $bunch]
               );
```

*  `adapter` is an object of `\Magento\CatalogImportExport\Model\Import\Product`
*  `bunch` is a data array

#### Classes raising the event

*  `\Magento\CatalogImportExport\Model\Import\Product`

### catalog_product_import_bunch_delete_commit_before

#### Use cases

To perform an action before products get deleted.

#### Origins

`\Magento\CatalogImportExport\Model\Import\Product::_deleteProducts()`:

```php
   protected function _deleteProducts()
   {
   ...
                  $this->_eventManager->dispatch(
                     'catalog_product_import_bunch_delete_commit_before',
                     [
                           'adapter' => $this,
                           'bunch' => $bunch,
                           'ids_to_delete' => $idsToDelete,
                     ]
                  );
```

*  `adapter` is an object of `\Magento\CatalogImportExport\Model\Import\Product`
*  `bunch` is a data array
*  `ids_to_delete` is a product IDs array

#### Classes raising the event

*  `\Magento\CatalogImportExport\Model\Import\Product`

### catalog_product_import_bunch_save_after

#### Use cases

To perform an action after products get saved.

#### Origins

`\Magento\CatalogImportExport\Model\Import\Product::_saveProducts()`:

```php
   protected function _deleteProducts()
   {
   ...
         $this->_eventManager->dispatch(
               'catalog_product_import_bunch_save_after',
               ['adapter' => $this, 'bunch' => $bunch]
         );
```

*  `adapter` is an object of `\Magento\CatalogImportExport\Model\Import\Product`
*  `bunch` is a data array

#### Classes raising the event

*  `\Magento\CatalogImportExport\Model\Import\Product`

### catalog_product_import_finish_before

#### Use cases

To perform an action before a product import is finished.

#### Origins

`\Magento\CatalogImportExport\Model\Import\Product::_importData()`:

```php
   protected function _importData()
   {
   ...
      $this->_eventManager->dispatch('catalog_product_import_finish_before', ['adapter' => $this]);
```

*  `adapter` is an object of `\Magento\CatalogImportExport\Model\Import\Product`

#### Classes raising the event

*  `\Magento\CatalogImportExport\Model\Import\Product`

### catalog_product_is_salable_after

#### Use cases

To perform an action after it checks if a product is available for sale.

#### Origins

`\Magento\Catalog\Model\Product::isSalable()`:

```php
   public function isSalable()
   {
   ...
      $object = new \Magento\Framework\DataObject(['product' => $this, 'is_salable' => $salable]);
      $this->_eventManager->dispatch(
         'catalog_product_is_salable_after',
         ['product' => $this, 'salable' => $object]
      );
```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `salable` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\CatalogImportExport\Model\Import\Proxy\Product`
*  `\Magento\Catalog\Model\Product`

### catalog_product_is_salable_before

#### Use cases

To perform an action before it checks if a product is available for sale.

#### Origins

`\Magento\Catalog\Model\Product::isSalable()`:

```php
   public function isSalable()
   {
   ...
      $this->_eventManager->dispatch('catalog_product_is_salable_before', ['product' => $this]);
```

*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\CatalogImportExport\Model\Import\Proxy\Product`
*  `\Magento\Catalog\Model\Product`

### catalog_product_new_action

#### Use cases

To perform an action after a new product is created.

#### Origins

`\Magento\Catalog\Controller\Adminhtml\Product\NewAction::execute()`:

```php
   public function execute()
   {
   ...
      $this->_eventManager->dispatch('catalog_product_new_action', ['product' => $product]);
```

*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Adminhtml\Product\NewAction`
*  `\Magento\Bundle\Controller\Adminhtml\Bundle\Product\Edit\NewAction`
*  `\Magento\Downloadable\Controller\Adminhtml\Downloadable\Product\Edit\NewAction`

### catalog_product_option_price_configuration_after

#### Use cases

To modify JSON representation of product price options.

#### Origins

`\Magento\Bundle\Block\Catalog\Product\View\Type\Bundle::getJsonConfig()` and `\Magento\Catalog\Block\Product\View\Options::getJsonConfig()`:

```php
   public function getJsonConfig()
   {
   ...
      $configObj = new DataObject(
         [
               'config' => $config,
         ]
      );
      $this->_eventManager->dispatch('catalog_product_option_price_configuration_after', ['configObj' => $configObj]);

```

*  `configObj` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Bundle\Block\Catalog\Product\View\Type\Bundle`
*  `\Magento\Catalog\Block\Adminhtml\Product\Composite\Fieldset\Options`

### catalog_product_prepare_index_select

#### Use cases

To alter temporary price index data for bundle products.

#### Origins

`\Magento\Bundle\Model\ResourceModel\Indexer\Price::prepareBundlePriceByType()`:

```php
   private function prepareBundlePriceByType($priceType, array $dimensions, $entityIds = null)
   {
   ...
      $this->eventManager->dispatch(
         'catalog_product_prepare_index_select',
         [
               'select' => $select,
               'entity_field' => new \Zend_Db_Expr('e.entity_id'),
               'website_field' => new \Zend_Db_Expr('pw.website_id'),
               'store_field' => new \Zend_Db_Expr('cwd.default_store_id')
         ]
      );
```

*  `select` is an object of `\Magento\Framework\DB\Select`
*  `entity_field` is a `Zend_Db_Expr` object
*  `website_field` is a `Zend_Db_Expr` object
*  `store_field` is a `Zend_Db_Expr` object

#### Classes raising the event

*  `\Magento\Bundle\Model\ResourceModel\Indexer\Price`

### catalog_product_to_website_change

#### Use cases

To perform actions after product websites have been updated.

#### Origins

`\Magento\Catalog\Model\Product\Action::updateWebsites()`:

```php
   public function updateWebsites($productIds, $websiteIds, $type)
   {
   ...
      $this->_eventManager->dispatch('catalog_product_to_website_change', ['products' => $productIds]);
```

*  `products` is a product IDs array

#### Classes raising the event

*  `\Magento\Catalog\Model\Product\Action`

### catalog_product_upsell

#### Use cases

To do modify a product's upsell collection.

#### Origins

`\Magento\Catalog\Block\Product\ProductList\Upsell::_prepareData()`:

```php
   protected function _prepareData()
   {
   ...
      $this->_eventManager->dispatch(
         'catalog_product_upsell',
         ['product' => $product, 'collection' => $this->_itemCollection, 'limit' => null]
      );
```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `collection` is an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`
*  `limit` - null

#### Classes raising the event

*  `\Magento\Catalog\Block\Product\ProductList\Upsell`

### catalog_product_validate_variations_before

#### Use cases

To perform actions before a product variations attributes validation.

#### Origins

`\Magento\ConfigurableProduct\Model\Product\Validator\Plugin::_validateProductVariations()`:

```php
   protected function _validateProductVariations(Product $parentProduct, array $products, RequestInterface $request)
   {
   ...
      $this->eventManager->dispatch(
         'catalog_product_validate_variations_before',
         ['product' => $parentProduct, 'variations' => $products]
      );
```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `variations` is an array

#### Classes raising the event

*  `\Magento\ConfigurableProduct\Model\Product\Validator\Plugin`

### catalog_product_view_config

#### Use cases

To perform actions a JSON encoded product configuration.

#### Origins

`\Magento\Catalog\Block\Product\View::getJsonConfig()`:

```php
   public function getJsonConfig()
   {
   ...
   $responseObject = new \Magento\Framework\DataObject();
   $this->_eventManager->dispatch('catalog_product_view_config', ['response_object' => $responseObject]);
```

*  `response_object` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\ProductAlert\Block\Product\View\Stock`
*  `\Magento\ProductAlert\Block\Product\View\Price`

### category_move

#### Use cases

To perform actions after a category has been moved.

#### Origins

`\Magento\Catalog\Model\Category::move()`:

```php
   public function move($parentId, $afterCategoryId)
   {
   ...
   $this->_eventManager->dispatch('category_move', $eventParams);
```

*  `category_move` is a data array

#### Classes raising the event

*  `\Magento\Catalog\Model\Category`

### category_prepare_ajax_response

#### Use cases

To modify category ajax response object.

#### Origins

`\Magento\Catalog\Controller\Adminhtml\Category::ajaxRequestResponse()`:

```php
   protected function ajaxRequestResponse($category, $resultPage)
   {
   ...
      $this->_eventManager->dispatch(
         'category_prepare_ajax_response',
         ['response' => $eventResponse, 'controller' => $this]
      );
```

*  `response` is an object of `\Magento\Framework\DataObject`
*  `controller` is an object of `\Magento\Catalog\Controller\Adminhtml\Category`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Adminhtml\Category\Grid`
*  `\Magento\Catalog\Controller\Adminhtml\Category\RefreshPath`

### catelogsearch_searchable_attributes_load_after

#### Use cases

To modify a searchable attributes array.

#### Origins

`\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider::getSearchableAttributes()`:

```php
   public function getSearchableAttributes($backendType = null)
   {
   ...
      $this->eventManager->dispatch(
               'catelogsearch_searchable_attributes_load_after',
               ['engine' => $this->engine, 'attributes' => $attributes]
      );
```

*  `engine` is an object of `\Magento\CatalogSearch\Model\ResourceModel\EngineInterface`
*  `attributes` is an array of attributes

#### Classes raising the event

*  `\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider`

### checkout_allow_guest

#### Use cases

To modify the allow guest checkout check (or do something if it is enabled).

#### Origins

`\Magento\Checkout\Helper\Data::isAllowedGuestCheckout()`:

```php
   public function isAllowedGuestCheckout(\Magento\Quote\Model\Quote $quote, $store = null)
   {
   ...
      $this->_eventManager->dispatch(
               'checkout_allow_guest',
               ['quote' => $quote, 'store' => $store, 'result' => $result]
      );
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `store` is an integer or an object of `\Magento\Store\Model\Store`
*  `result` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Checkout\Helper\Data`

### checkout_cart_add_product_complete

#### Use cases

To perform actions after a product has been added to the cart.

#### Origins

`\Magento\Checkout\Controller\Cart\Add::execute()`:

```php
   public function execute()
   {
   ...
         $this->_eventManager->dispatch(
               'checkout_cart_add_product_complete',
               ['product' => $product, 'request' => $this->getRequest(), 'response' => $this->getResponse()]
         );
```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `response` is an object of `\Magento\Framework\App\ResponseInterface`

#### Classes raising the event

*  `\Magento\Checkout\Controller\Cart\Add`

### checkout_cart_product_add_before

#### Use cases

To perform actions before a product has been added to the cart.

#### Origins

`\Magento\Checkout\Model\Cart::addProduct()`:

```php
   public function addProduct($productInfo, $requestInfo = null)
   {
   ...
               $this->_eventManager->dispatch(
                  'checkout_cart_product_add_before',
                  ['info' => $requestInfo, 'product' => $product]
               );
```

*  `info` is an integer or an array or an object of `\Magento\Framework\DataObject`
*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Checkout\Model\Cart`

### checkout_cart_product_update_after

#### Use cases

To perform actions after a cart item has been updated.

#### Origins

`\Magento\Checkout\Model\Cart::updateItem()`:

```php
   public function updateItem($itemId, $requestInfo = null, $updatingParams = null)
   {
   ...
      $this->_eventManager->dispatch(
         'checkout_cart_product_update_after',
         ['quote_item' => $result, 'product' => $product]
      );
```

*  `quote_item` is an object of `\Magento\Quote\Model\Quote\Item`
*  `product` is an object of `\Magento\Catalog\Model\Product`

#### Classes raising the event

*  `\Magento\Checkout\Model\Cart`

### checkout_cart_save_after

#### Use cases

To perform actions after a cart has been saved.

#### Origins

`\Magento\Checkout\Model\Cart::save()`:

```php
   public function save()
   {
   ...
      $this->_eventManager->dispatch('checkout_cart_save_after', ['cart' => $this]);
```

*  `cart` is an object of `\Magento\Checkout\Model\Cart`

#### Classes raising the event

*  `\Magento\Checkout\Model\Cart`

### checkout_cart_save_before

#### Use cases

To perform actions before a cart is updated.

#### Origins

`\Magento\Checkout\Model\Cart::save()`:

```php
   public function save()
   {
   ...
      $this->_eventManager->dispatch('checkout_cart_save_before', ['cart' => $this]);
```

*  `cart` is an object of `\Magento\Checkout\Model\Cart`

#### Classes raising the event

*  `\Magento\Checkout\Model\Cart`

### checkout_cart_update_items_after

#### Use cases

To perform actions after cart items have been updated.

#### Origins

`\Magento\Checkout\Model\Cart::updateItems()`:

```php
   public function updateItems($data)
   {
   ...
      $this->_eventManager->dispatch(
         'checkout_cart_update_items_after',
         ['cart' => $this, 'info' => $infoDataObject]
      );
```

*  `cart` is an object of `\Magento\Checkout\Model\Cart`
*  `info` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Checkout\Model\Cart`

### checkout_cart_update_items_before

#### Use cases

To perform actions before cart items are updated.

#### Origins

`\Magento\Checkout\Model\Cart::updateItems()`:

```php
   public function updateItems($data)
   {
   ...
      $this->_eventManager->dispatch(
         'checkout_cart_update_items_before',
         ['cart' => $this, 'info' => $infoDataObject]
      );
```

*  `cart` is an object of `\Magento\Checkout\Model\Cart`
*  `info` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Checkout\Model\Cart`

### checkout_cart_update_item_complete

#### Use cases

To perform actions once a cart item update is complete.

#### Origins

`\Magento\Checkout\Controller\Cart\UpdateItemOptions::execute()`:

```php
   public function execute()
   {
   ...
   $this->_eventManager->dispatch(
               'checkout_cart_update_item_complete',
               ['item' => $item, 'request' => $this->getRequest(), 'response' => $this->getResponse()]
   );
```

*  `item` is an object of `\Magento\Quote\Model\Quote\Item`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `response` is an object of `\Magento\Framework\App\ResponseInterface`

#### Classes raising the event

*  `\Magento\Checkout\Controller\Cart\UpdateItemOptions`

### checkout_controller_multishipping_shipping_post

#### Use cases

To perform actions before a multishipping shipping method is set.

#### Origins

`\Magento\Multishipping\Controller\Checkout\ShippingPost::execute()`:

```php
   public function execute()
   {
   ...
         $this->_eventManager->dispatch(
               'checkout_controller_multishipping_shipping_post',
               ['request' => $this->getRequest(), 'quote' => $this->_getCheckout()->getQuote()]
         );
```

*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `quote` is an object of `\Magento\Quote\Model\Quote`

#### Classes raising the event

*  `\Magento\Multishipping\Controller\Checkout\ShippingPost`

### checkout_controller_onepage_saveOrder

#### Use cases

To perform actions after an attempt to place an order has been made (successful or not).

#### Origins

`\Magento\Checkout\Controller\Onepage\SaveOrder::execute()`:

```php
   public function execute()
   {
   ...
      $this->_eventManager->dispatch(
         'checkout_controller_onepage_saveOrder',
         [
               'result' => $result,
               'action' => $this
         ]
      );
```

*  `result` is an object of `\Magento\Framework\DataObject`
*  `action` is an object of `\Magento\Checkout\Controller\Onepage\SaveOrder`

#### Classes raising the event

*  `\Magento\Checkout\Controller\Onepage\SaveOrder`

### checkout_multishipping_refund_all

#### Use cases

To do catch a moment when multishipping orders failed to be placed.

#### Origins

`\Magento\Multishipping\Model\Checkout\Type\Multishipping::createOrders()`:

```php
   public function execute()
   {
   ...
      } catch (\Exception $e) {
         $this->_eventManager->dispatch('checkout_multishipping_refund_all', ['orders' => $orders]);
         throw $e;
      }

```

*  `orders` is an array of orders

#### Classes raising the event

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`

### checkout_onepage_controller_success_action

#### Use cases

To perform actions when an one page checkout success page is rendered.

#### Origins

`\Magento\Checkout\Controller\Onepage\Success::execute()`:

```php
   public function execute()
   {
   ...
      $this->_eventManager->dispatch(
         'checkout_onepage_controller_success_action',
         [
               'order_ids' => [$session->getLastOrderId()],
               'order' => $session->getLastRealOrder()
         ]
      );
```

*  `order_ids` is an array of last order ID(s)
*  `order` is an object of `\Magento\Sales\Model\Order`

#### Classes raising the event

*  `\Magento\Checkout\Controller\Onepage\Success`

### checkout_quote_destroy

#### Use cases

To perform actions when a session quote is cleared.

#### Origins

`\Magento\Checkout\Model\Session::clearQuote()`:

```php
   public function clearQuote()
   {
   ...
      $this->_eventManager->dispatch('checkout_quote_destroy', ['quote' => $this->getQuote()]);
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`

#### Classes raising the event

*  `\Magento\Checkout\Model\Session`

### checkout_quote_init

#### Use cases

To perform actions when a session quote is initialized.

#### Origins

`\Magento\Checkout\Model\Session::getQuote()`:

```php
   public function getQuote()
   {
   ...
   $this->_eventManager->dispatch('checkout_quote_init', ['quote' => $quote]);
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`

#### Classes raising the event

*  `\Magento\Checkout\Model\Session`

### checkout_submit_all_after

#### Use cases

To perform actions after an order was placed.

#### Origins

*  `\Magento\Checkout\Model\Type\Onepage::saveOrder()`:
   ```php
    public function saveOrder()
    {
    ...
        $this->_eventManager->dispatch(
            'checkout_submit_all_after',
            [
                'order' => $order,
                'quote' => $this->getQuote()
            ]
        );
   ```
*  `\Magento\Sales\Model\AdminOrder\Create::createOrder()`:
   ```php
   public function createOrder()
   {
   ...
   $this->_eventManager->dispatch('checkout_submit_all_after', ['order' => $order, 'quote' => $quote]);
   ```
*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping::createOrders()`:
   ```php
   public function createOrders()
   {
   ...
            $this->_eventManager->dispatch(
                'checkout_submit_all_after',
                ['orders' => $orders, 'quote' => $this->getQuote()]
            );
   ```
*  `\Magento\Quote\Model\QuoteManagement::placeOrder()`:
   ```php
   public function placeOrder($cartId, PaymentInterface $paymentMethod = null)
   {
   ...
   $this->eventManager->dispatch('checkout_submit_all_after', ['order' => $order, 'quote' => $quote]);
   ```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `order` is an object of `\Magento\Sales\Api\Data\OrderInterface`

#### Classes raising the event

*  `\Magento\Quote\Model\QuoteManagement`
*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`
*  `\Magento\Sales\Model\AdminOrder\Create`
*  `\Magento\Checkout\Model\Type\Onepage`

### checkout_submit_before

#### Use cases

To perform actions when before a quote is submitted.

#### Origins

`\Magento\Quote\Model\QuoteManagement::placeOrder()`:

```php
   public function placeOrder($cartId, PaymentInterface $paymentMethod = null)
   {
   ...
   $this->eventManager->dispatch('checkout_submit_before', ['quote' => $quote]);
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`

#### Classes raising the event

*  `\Magento\Quote\Model\QuoteManagement`

### checkout_type_multishipping_create_orders_single

#### Use cases

To perform actions after a single order is placed within a multishipping checkout.

#### Origins

`\Magento\Multishipping\Model\Checkout\Type\Multishipping::createOrders()`:

```php
   public function createOrders()
   {
   ...
               $this->_eventManager->dispatch(
                  'checkout_type_multishipping_create_orders_single',
                  ['order' => $order, 'address' => $address, 'quote' => $this->getQuote()]
               );
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `order` is an object of `\Magento\Sales\Model\Order`
*  `address` is an object of `\Magento\Quote\Model\Quote\Address`

#### Classes raising the event

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`

### checkout_type_multishipping_set_shipping_items

#### Use cases

To perform actions after shipping information is set within a multishipping checkout.

#### Origins

`\Magento\Multishipping\Model\Checkout\Type\Multishipping::setShippingItemsInformation()`:

```php
   public function setShippingItemsInformation($info)
   {
   ...
         $this->_eventManager->dispatch('checkout_type_multishipping_set_shipping_items', ['quote' => $quote]);
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`

#### Classes raising the event

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`

### checkout_type_onepage_save_order_after

#### Use cases

To perform actions after an order is saved within a onepage checkout.

#### Origins

`\Magento\Checkout\Model\Type\Onepage::saveOrder()`:

```php
   public function saveOrder()
   {
   ...
         $this->_eventManager->dispatch(
               'checkout_type_onepage_save_order_after',
               ['order' => $order, 'quote' => $this->getQuote()]
         );
```

*  `quote` is an object of `\Magento\Quote\Model\Quote`
*  `order` is an object of `\Magento\Sales\Model\Order`

#### Classes raising the event

*  `\Magento\Checkout\Model\Type\Onepage`

### clean_cache_after_reindex

#### Use cases

To perform actions before indexed item cache entries are cleared.

#### Origins

`\Magento\Indexer\Model\Processor\CleanCache::afterUpdateMview()`:

```php
   public function afterUpdateMview(\Magento\Indexer\Model\Processor $subject)
   {
      $this->eventManager->dispatch('clean_cache_after_reindex', ['object' => $this->context]);
   ...
```

*  `object` is an object of `\Magento\Framework\Indexer\CacheContext`

#### Classes raising the event

*  `\Magento\Indexer\Model\Processor\CleanCache`

### clean_cache_by_tags

#### Use cases

To perform actions at the time specific tags are cleaned from cache.

#### Origins

*  `\Magento\Framework\Model\AbstractModel::afterSave()`:

   ```php
   public function afterSave()
   {
   ...
   $this->_eventManager->dispatch('clean_cache_by_tags', ['object' => $this]);
   ```

*  `\Magento\Framework\Model\AbstractModel::afterDelete()`:

   ```php
   public function afterSave()
   {
   ...
   $this->_eventManager->dispatch('clean_cache_by_tags', ['object' => $this]);
   ```

*  `\Magento\CatalogInventory\Model\Indexer\Stock\CacheCleaner::clean()`:

   ```php
   public function clean(array $productIds, callable $reindex)
   {
   ...
   $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->cacheContext]);
   ```

*  `\Magento\Catalog\Plugin\Model\Product\Action\UpdateAttributesFlushCache::afterUpdateAttributes()`:

   ```php
   public function afterUpdateAttributes(
        \Magento\Catalog\Model\Product\Action $subject,
        \Magento\Catalog\Model\Product\Action $result
    ) {
        $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->cacheContext]);
        return $result;
   }
   ```

*  `\Magento\Catalog\Plugin\Model\Product\Action\UpdateAttributesFlushCache::afterUpdateWebsites()`:

   ```php
   public function afterUpdateWebsites(
        \Magento\Catalog\Model\Product\Action $subject
    ) {
        $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->cacheContext]);
   }
   ```

*  `\Magento\Catalog\Model\Category::move()`:

   ```php
   public function move($parentId, $afterCategoryId)
   {
   ...
   $this->_eventManager->dispatch('clean_cache_by_tags', ['object' => $this]);
   ```

*  `\Magento\Catalog\Model\Indexer\Product\Category\Action\Rows::execute()`:

   ```php
   public function execute(array $entityIds = [], $useTempTable = false)
   {
   ...
   $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->cacheContext]);
   ```

*  `\Magento\Catalog\Model\Indexer\Category\Product\Action\Rows::execute()`:

   ```php
   public function execute(array $entityIds = [], $useTempTable = false)
   {
   ...
   $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->cacheContext]);
   ```

*  `\Magento\InventoryCache\Model\FlushCacheByProductIds::execute()`:

   ```php
   public function execute(array $productIds)
   {
   ...
   $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $cacheContext]);
   ```

*  `\Magento\CatalogRule\Model\Indexer\AbstractIndexer::executeFull()`:

   ```php
   public function executeFull()
   {
   $this->indexBuilder->reindexFull();
   $this->_eventManager->dispatch('clean_cache_by_tags', ['object' => $this]);
   ```

*  `\Magento\Indexer\Model\Indexer\CacheCleaner::cleanCache()`:

   ```php
   private function cleanCache()
   {
        $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->cacheContext]);
   ```

*  `\Magento\Indexer\Model\Processor\CleanCache::afterReindexAllInvalid()`:

   ```php
   public function afterReindexAllInvalid(\Magento\Indexer\Model\Processor $subject)
   {
   $this->eventManager->dispatch('clean_cache_by_tags', ['object' => $this->context]);
   ```

`object` is an object of `\Magento\Framework\Indexer\CacheContext`.

#### Classes raising the event

*  `\Magento\Indexer\Model\Processor\CleanCache`
*  `\Magento\Weee\Model\Tax`
*  `\Magento\Reports\Model\Event`

### clean_catalog_images_cache_after

#### Use cases

To perform actions after image cache has been cleared.

#### Origins

`\Magento\Backend\Controller\Adminhtml\Cache\CleanImages::execute()`:

```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch('clean_catalog_images_cache_after');
```

#### Classes raising the event

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanImages`

### clean_media_cache_after

#### Use cases

To perform actions after JavaScript/CSS cache has been cleared.

#### Origins

`\Magento\Backend\Controller\Adminhtml\Cache\CleanMedia::execute()`:

```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch('clean_media_cache_after');
```

#### Classes raising the event

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanMedia`

### clean_static_files_cache_after

#### Use cases

To perform actions after static files cache has been cleared.

#### Origins

`\Magento\Backend\Controller\Adminhtml\Cache\CleanStaticFiles::execute()`:

```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch('clean_static_files_cache_after');
```

#### Classes raising the event

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanStaticFiles`

### cms_controller_router_match_before

#### Use cases

To perform actions before a CMS page is matched.

#### Origins

`\Magento\Cms\Controller\Router::match()`:

```php
   public function match(\Magento\Framework\App\RequestInterface $request)
   {
   ....
   $this->_eventManager->dispatch(
         'cms_controller_router_match_before',
         ['router' => $this, 'condition' => $condition]
   );
```

*  `router` is an object of `\Magento\Cms\Controller\Router`
*  `condition` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Cms\Controller\Router`

### cms_page_prepare_save

#### Use cases

To perform actions before a cms page is saved.

#### Origins

`\Magento\Cms\Controller\Adminhtml\Page\Save::execute()`:

```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch(
                  'cms_page_prepare_save',
                  ['page' => $model, 'request' => $this->getRequest()]
   );
```

*  `page` is an object of `\Magento\Cms\Model\Page`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Cms\Controller\Adminhtml\Page\Save`

### cms_page_render

#### Use cases

To perform actions before a cms page is rendered.

#### Origins

`\Magento\Cms\Helper\Page::prepareResultPage()`:

```php
   public function prepareResultPage(ActionInterface $action, $pageId = null)
   {
   ....
      $this->_eventManager->dispatch(
         'cms_page_render',
         ['page' => $this->_page, 'controller_action' => $action, 'request' => $this->_getRequest()]
      );
```

*  `page` is an object of `\Magento\Cms\Model\Page`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `controller_action` is an object of `\Magento\Framework\App\ActionInterface`

#### Classes raising the event

*  `\Magento\Cms\Helper\Page`

### cms_wysiwyg_images_static_urls_allowed

#### Use cases

To do change whether using static URLs is allowed or not.

#### Origins

*  `\Magento\Cms\Helper\Wysiwyg\Images::isUsingStaticUrlsAllowed()`:

   ```php
    public function isUsingStaticUrlsAllowed()
    {
    ....
        $this->_eventManager->dispatch(
            'cms_wysiwyg_images_static_urls_allowed',
            ['result' => $checkResult, 'store_id' => $this->_storeId]
        );
   ```

*  `result` is a PHP object variable
*  `store_id` is a store ID

#### Classes raising the event

*  `\Magento\Cms\Helper\Wysiwyg\Images`

### controller_action_catalog_product_save_entity_after

#### Use cases

To perform actions after a product has been saved in backend.

#### Origins

*  `\Magento\Catalog\Controller\Adminhtml\Product\Save::execute()`:

   ```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch(
      'controller_action_catalog_product_save_entity_after',
         ['controller' => $this, 'product' => $product]
   );
   ```

*  `product` is an object of `\Magento\Catalog\Model\Product`
*  `controller` is an object of `\Magento\Catalog\Controller\Adminhtml\Product\Save`

#### Classes raising the event

*  `\Magento\Catalog\Controller\Adminhtml\Product\Save`
*  `\Magento\Bundle\Controller\Adminhtml\Bundle\Product\Edit\Save`
*  `\Magento\Downloadable\Controller\Adminhtml\Downloadable\Product\Edit\Save`

### controller_action_inventory_populate_source_with_data

#### Use cases

Modify inventory source before it gets saved.

#### Origins

`\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save::processSave()`:

```php
private function processSave(SourceInterface $source, array $requestData)
{
....
      $this->_eventManager->dispatch(
         'controller_action_inventory_populate_source_with_data',
         [
               'request' => $this->getRequest(),
               'source' => $source,
         ]
      );
```

*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `source` is an object of `\Magento\InventoryApi\Api\Data\SourceInterface`

#### Classes raising the event

*  `\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save`

### controller_action_inventory_populate_stock_with_data

#### Use cases

Modify inventory stock model before it gets saved.

#### Origins

`\Magento\InventoryAdminUi\Model\Stock\StockSaveProcessor::process()`:

```php
public function process($stockId, RequestInterface $request): int
{
....
      $this->eventManager->dispatch(
         'controller_action_inventory_populate_stock_with_data',
         [
               'request' => $request,
               'stock' => $stock,
         ]
      );
```

*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `stock` is an object of `\Magento\InventoryApi\Api\Data\StockInterface`

#### Classes raising the event

*  `\Magento\InventoryAdminUi\Model\Stock\StockSaveProcessor`

### controller_action_inventory_source_save_after

#### Use cases

Modify inventory source after it gets saved.

#### Origins

`\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save::processSave()`:

```php
private function processSave(SourceInterface $source, array $requestData)
{
....
      $this->_eventManager->dispatch(
         'controller_action_inventory_source_save_after',
         [
               'request' => $this->getRequest(),
               'source' => $source,
         ]
      );
```

*  `request` is an object of `\Magento\Framework\App\RequestInterface`
*  `source` is an object of `\Magento\InventoryApi\Api\Data\SourceInterface`

#### Classes raising the event

*  `\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save`

### controller_action_layout_render_before

#### Use cases

To perform actions before page layout is rendered.

#### Origins

`\Magento\Framework\App\View::renderLayout()`:

```php
public function renderLayout($output = '')
{
....
$this->_eventManager->dispatch('controller_action_layout_render_before');
```

#### Classes raising the event

*  `\Magento\Framework\App\View`

### controller_action_nocookies

#### Use cases

To perform actions before a nocookies page is rendered.

#### Origins

`\Magento\Cookie\Controller\Index\NoCookies::execute()`:

```php
public function execute()
{
....
$this->_eventManager->dispatch(
         'controller_action_nocookies',
         ['action' => $this, 'redirect' => $redirect]
);
```

*  `action` is an object of `\Magento\Cookie\Controller\Index\NoCookies`
*  `redirect` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Cookie\Controller\Index\NoCookies`

### controller_action_noroute

#### Use cases

To perform actions before a 404 page is rendered.

#### Origins

`\Magento\Framework\Controller\Noroute\Index::execute()`:

```php
public function execute()
{
....
$this->_eventManager->dispatch('controller_action_noroute',
      ['action' => $this, 'status' => $status]);
```

*  `action` is an object of `\Magento\Cookie\Controller\Index\NoCookies`
*  `status` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Framework\Controller\Noroute\Index`

### controller_action_postdispatch

#### Use cases

To perform actions when postdispatch events are raised.

#### Origins

`\Magento\Framework\App\Action\Plugin\EventDispatchPlugin::dispatchPostDispatchEvents()`:

```php
private function dispatchPostDispatchEvents(ActionInterface $action)
{
....
$this->eventManager->dispatch('controller_action_postdispatch', $this->getEventParameters($action));
```

*  `controller_action` is an object of `\Magento\Framework\App\ActionInterface`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Framework\App\Action\Plugin\EventDispatchPlugin`

### controller_action_predispatch

#### Use cases

To perform actions when predispatch events are raised.

#### Origins

`\Magento\Framework\App\Action\Plugin\EventDispatchPlugin::dispatchPreDispatchEvents()`:

```php
private function dispatchPreDispatchEvents(ActionInterface $action)
{
$this->eventManager->dispatch('controller_action_predispatch', $this->getEventParameters($action));
...
```

*  `controller_action` is an object of `\Magento\Framework\App\ActionInterface`
*  `request` is an object of `\Magento\Framework\App\RequestInterface`

#### Classes raising the event

*  `\Magento\Framework\App\Action\Plugin\EventDispatchPlugin`

### controller_front_send_response_before

#### Use cases

To perform actions before sending application output.

#### Origins

`\Magento\Framework\App\Http::launch()`:

```php
public function launch()
{
...
$eventParams = ['request' => $this->_request, 'response' => $this->_response];
$this->_eventManager->dispatch('controller_front_send_response_before', $eventParams);
...
```

*  `response` is an object of `\Magento\Framework\App\Response\Http`
*  `request` is an object of `\Magento\Framework\App\Request\Http`

#### Classes raising the event

*  `\Magento\Framework\App\Http`

### core_app_init_current_store_after

#### Use cases

To perform actions after the current store is initialized in test cases.

#### Origins

`\Magento\TestFramework\Store\StoreManager::dispatchInitCurrentStoreAfterEvent()`:

```php
protected function dispatchInitCurrentStoreAfterEvent()
{
...
$this->eventManager->dispatch('core_app_init_current_store_after');
```

#### Classes raising the event

*  `\Magento\TestFramework\Store\StoreManager`

### core_collection_abstract_load_after

#### Use cases

To perform actions after a collection is loaded.

#### Origins

`\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection::_afterLoad()`:

```php
protected function _afterLoad()
{
...
$this->_eventManager->dispatch('core_collection_abstract_load_after', ['collection' => $this]);
```

`collection` is an object of `\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection`

#### Classes raising the event

*  `\Magento\Security\Model\ResourceModel\AdminSessionInfo\Collection`
*  `\Magento\Store\Model\ResourceModel\Config\Collection\Scoped`

### core_collection_abstract_load_before

#### Use cases

To perform actions before a collection is loaded.

#### Origins

`\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection::_beforeLoad()`:

```php
protected function _beforeLoad()
{
...
$this->_eventManager->dispatch('core_collection_abstract_load_before', ['collection' => $this]);
```

`collection` is an object of `\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection`

#### Classes raising the event

*  `\Magento\Security\Model\ResourceModel\AdminSessionInfo\Collection`
*  `\Magento\Store\Model\ResourceModel\Config\Collection\Scoped`

### core_layout_block_create_after

#### Use cases

To perform actions after a particular block is created.

#### Origins

`\Magento\Framework\View\Layout\Generator\Block::process()`:

```php
public function process(Layout\Reader\Context $readerContext, Layout\Generator\Context $generatorContext)
{
...
$this->eventManager->dispatch('core_layout_block_create_after', ['block' => $block]);
```

`block` is an object of `\Magento\Framework\View\Element\AbstractBlock`

#### Classes raising the event

*  `\Magento\Framework\View\Layout\Generator\Block`

### core_layout_render_element

#### Use cases

To perform actions when a layout element is rendered.

#### Origins

`\Magento\Framework\View\Layout::renderElement()`:

```php
public function renderElement($name, $useCache = true)
{
...
$this->_eventManager->dispatch(
         'core_layout_render_element',
         ['element_name' => $name, 'layout' => $this, 'transport' => $this->_renderingOutput]
      );
```

*  `element_name` is an element name string
*  `layout` is an object of `\Magento\Framework\View\Layout`
*  `transport` is an object of `\Magento\Framework\DataObject`

#### Classes raising the event

*  `\Magento\Framework\View\Layout`

### cron_job_run

#### Use cases

To perform actions before a particular cron job is run.

#### Origins

`\Magento\Cron\Observer\ProcessCronQueueObserver::_runJob()`:

```php
protected function _runJob($scheduledTime, $currentTime, $jobConfig, $schedule, $groupId)
{
...
$this->eventManager->dispatch('cron_job_run', ['job_name' => 'cron/' . $groupId . '/' . $jobCode]);
```

`job_name` is a job name string.

#### Classes raising the event

*  `\Magento\Cron\Observer\ProcessCronQueueObserver`

### currency_display_options_forming

#### Use cases

To perform actions after getting getting a currency object by currency code.

#### Origins

`\Magento\Framework\Locale\Currency::getCurrency()`:

```php
public function getCurrency($currency)
{
...
$this->_eventManager->dispatch(
               'currency_display_options_forming',
               ['currency_options' => $options, 'base_code' => $currency]
);
```

*  `currency_options` is an array of currency options
*  `base_code` is a currency code string

#### Classes raising the event

*  `\Magento\Framework\Locale\Currency`

### customer_account_edited

#### Use cases

To perform actions after a customer has been successfully edited.

#### Origins

`\Magento\Customer\Controller\Account\EditPost::dispatchSuccessEvent()`:

```php
private function dispatchSuccessEvent(\Magento\Customer\Api\Data\CustomerInterface $customerCandidateDataObject)
{
      $this->_eventManager->dispatch(
         'customer_account_edited',
         ['email' => $customerCandidateDataObject->getEmail()]
      );
}
```

*  `email` is a customer email

#### Classes raising the event

*  `\Magento\Customer\Controller\Account\EditPost`

### customer_address_format

#### Use cases

To alter the way an address is formatted.

#### Origins

*  `\Magento\Sales\Model\Order\Address\Renderer::format()`:
   ```php
   public function format(Address $address, $type)
   {
   ...
        $this->eventManager->dispatch('customer_address_format', ['type' => $formatType, 'address' => $address]);
   }
   ```
*  `\Magento\Customer\Model\Address\AbstractAddress::format()`:
   ```php
   public function format(Address $address, $type)
   {
   ...
        $this->eventManager->dispatch('customer_address_format', ['type' => $formatType, 'address' => $this]);
   }
   ```

*  `type` is an object of `\Magento\Framework\DataObject`
*  `address` is an object of either `\Magento\Customer\Model\Address\AbstractAddress` or `\Magento\Sales\Model\Order\Address`

#### Classes raising the event

*  `\Magento\Sales\Model\Order\Address\Renderer`
*  `\Magento\Customer\Model\Address\AbstractAddress`
*  `\Magento\Customer\Model\Address`

### customer_customer_authenticated

#### Use cases

To perform actions after a customer has been authenticated.

#### Origins

*  `\Magento\Customer\Model\Customer::authenticate()`:
   ```php
   public function authenticate($login, $password)
   {
    ....
        $this->_eventManager->dispatch(
            'customer_customer_authenticated',
            ['model' => $this, 'password' => $password]
        );
   }
   ```
*  `\Magento\Customer\Model\AccountManagement::authenticate()`:
   ```php
   public function authenticate($username, $password)
   {
    ....
        $this->eventManager->dispatch(
            'customer_customer_authenticated',
            ['model' => $customerModel, 'password' => $password]
        );
   }
   ```

*  `model` is an object of `\Magento\Customer\Model\Customer`
*  `password` is a password string

#### Classes raising the event

*  `\Magento\Customer\Model\Customer`
*  `\Magento\Customer\Model\AccountManagement`
*  `\Magento\Customer\Model\Backend\Customer`

### customer_data_object_login

#### Use cases

To perform actions after a customer has been logged in.

#### Origins

*  `\Magento\Customer\Model\Session::setCustomerAsLoggedIn()`:
   ```php
   public function setCustomerAsLoggedIn($customer)
   {
    ....
     $this->_eventManager->dispatch('customer_data_object_login', ['customer' => $this->getCustomerDataObject()]);
   }
   ```
*  `\Magento\Customer\Model\Session::setCustomerDataAsLoggedIn()`:
   ```php
   public function setCustomerDataAsLoggedIn($customer)
   {
    ....
     $this->_eventManager->dispatch('customer_data_object_login', ['customer' => $customer]);
   }
   ```
*  `\Magento\Customer\Model\AccountManagement::authenticate()`:
   ```php
   public function authenticate($username, $password)
   {
    ....
     $this->eventManager->dispatch('customer_data_object_login', ['customer' => $customer]);
   }
   ```

*  `customer` is an object of `\Magento\Customer\Api\Data\CustomerInterface`

#### Classes raising the event

*  `\Magento\Customer\Model\Session`
*  `\Magento\Customer\Model\AccountManagement`

### customer_login

#### Use cases

To perform actions after a customer has been logged in.

#### Origins

*  `\Magento\Customer\Model\Session::setCustomerAsLoggedIn()`:

   ```php
   public function setCustomerAsLoggedIn($customer)
   {
    ....
     $this->_eventManager->dispatch('customer_login', ['customer' => $customer]);
   }
   ```

*  `\Magento\Customer\Model\Session::setCustomerDataAsLoggedIn()`:

   ```php
   public function setCustomerDataAsLoggedIn($customer)
   {
    ....
     $this->_eventManager->dispatch('customer_login', ['customer' => $customerModel]);
   }
   ```

*  `\Magento\Integration\Model\CustomerTokenService::createCustomerAccessToken()`:

  ```php
  public function createCustomerAccessToken($username, $password)
  {
  ...
  $this->eventManager->dispatch('customer_login', ['customer' => $customerDataObject]);
  ```

*  `customer` is an object of either `\Magento\Customer\Api\Data\CustomerInterface` or `\Magento\Customer\Model\Customer`

#### Classes raising the event

*  `\Magento\Customer\Model\Session`
*  `\Magento\Integration\Model\CustomerTokenService`

### customer_logout

#### Use cases

To perform actions before a customer is logged out.

#### Origins

`\Magento\Customer\Model\Session::logout()`:

```php
public function logout()
{
....
$this->_eventManager->dispatch('customer_logout', ['customer' => $this->getCustomer()]);
}
```

`customer` is an object of `\Magento\Customer\Model\Customer`

#### Classes raising the event

*  `\Magento\Customer\Model\Session`
