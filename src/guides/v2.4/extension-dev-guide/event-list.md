---
group: php-developer-guide
title: List of Events
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com
---

## Overview

This is the list of all event names ordered alphabetically. Each event has a short description and a list of supported arguments.

The list is divided into two sections: constant event names and dynamic event names.

## Constant Event Names

### 1. abstract_search_result_load_after

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\Data\AbstractSearchResult`:

   ```php
   protected function afterLoad()
   {
    $this->eventManager->dispatch('abstract_search_result_load_after', ['collection' => $this]);
   ```

{:.procedure}
Variables passed:

*  `collection`: an object of `\Magento\Framework\Data\AbstractSearchResult`

{:.procedure}
A few classes that fire this event:

*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Status\Collection`

{:.procedure}
When to listen:

*  One can listen to that event to modify product stock items and stock statuses.

### 2. abstract_search_result_load_before

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\Data\AbstractSearchResult`:

   ```php
   protected function beforeLoad()
   {
   $this->eventManager->dispatch('abstract_search_result_load_before', ['collection' => $this]);
   ```

{:.procedure}
Variables passed:

*  `collection`: an object of `\Magento\Framework\Data\AbstractSearchResult`

{:.procedure}
A few classes that fire this event:

*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Item\Collection`
*  `\Magento\CatalogInventory\Model\ResourceModel\Stock\Status\Collection`

One can listen to that event to modify product stock items and stock statuses.

### 3. adminhtml_block_eav_attribute_edit_form_init

{:.procedure}
Where it was introduced:

*  `\Magento\Eav\Block\Adminhtml\Attribute\Edit\Main\AbstractMain`:

   ```php
   protected function _initFormValue()
   {
   $this->eventManager->dispatch('adminhtml_block_eav_attribute_edit_form_init', ['form' => $this->getForm()]);
   ```

{:.procedure}
Variables passed:

*  `form`: an object of `\Magento\Framework\Data\Form`

{:.procedure}
Only one class fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Main`

One can listen to that event to modify backend attribute edit page form.

### 4. adminhtml_block_html_before

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Block\Template::_toHtml()`:

   ```php
   protected function _toHtml()
   {
   $this->_eventManager->dispatch('adminhtml_block_html_before', ['block' => $this]);
   ```

   and

*  `\Magento\Customer\\Block\Adminhtml\Edit\Tab\Carts::_toHtml()`:

   ```php
   protected function _toHtml()
   {
   $this->_eventManager->dispatch('adminhtml_block_html_before', ['block' => $this]);
   ```

{:.procedure}
Variables passed:

*  `block`: an object of `\Magento\Framework\View\Element\Template`

{:.procedure}
A few classes that fire this event:

*  `\Magento\AdminNotification\Block\System\Messages`
*  `\Magento\AdobeIms\Block\Adminhtml\SignIn`

{:.procedure}
When to listen:

* to modify backend block contents

### 5. adminhtml_block_promo_widget_chooser_prepare_collection

{:.procedure}
Where it was introduced:

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Widget\Chooser::_prepareCollection()`:

   ```php
   protected function _prepareCollection()
   {
   ...
   $this->_eventManager->dispatch(
            'adminhtml_block_promo_widget_chooser_prepare_collection',
            ['collection' => $collection]
   );
   ```

{:.procedure}
Variables passed:

*  `collection`: an object of `\Magento\SalesRule\Model\ResourceModel\Rule\Collection`

{:.procedure}
Only one class fires this event:

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Widget\Chooser`

{:.procedure}
When to listen:

* to modify collection of shopping cart rules used in a chooser widget

### 6. adminhtml_block_salesrule_actions_prepareform

{:.procedure}
Where it was introduced:

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Actions::addTabToForm()`:

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

{:.procedure}
Variables passed:

*  `form`: an object of `\Magento\Framework\Data\Form`

{:.procedure}
Only one class fires this event:

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Actions`

{:.procedure}
When to listen:

* to modify sales rule actions form

### 7. adminhtml_cache_flush_all

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushAll::execute()`:

   ```php
   public function execute()
   {
   $this->_eventManager->dispatch('adminhtml_cache_flush_all');
   ```

* `\Magento\Backend\Console\Command\CacheFlushCommand::performAction()`:

   ```php
   protected function performAction(array $cacheTypes)
   {
   $this->eventManager->dispatch('adminhtml_cache_flush_all');
   ```

{:.procedure}
Variables passed:

*  N/A

{:.procedure}
Only two classes fire this event:

*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushAll`
*  `\Magento\Backend\Console\Command\CacheFlushCommand`

{:.procedure}
When to listen:

* to do things **before** all cache is flushed

### 8. adminhtml_cache_flush_system

{:.procedure}
Where it was introduced:

*  `\Magento\Translation\Model\Inline\CacheManager::updateAndGetTranslations()`:

   ```php
   public function updateAndGetTranslations()
   {
   $this->eventManager->dispatch('adminhtml_cache_flush_system');
   ```

* `\Magento\Backend\Controller\Adminhtml\Cache\FlushSystem::execute()`:

   ```php
   public function execute()
   {
   ...
   $this->_eventManager->dispatch('adminhtml_cache_flush_system');
   ```

* `\Magento\Backend\Console\Command\CacheCleanCommand::performAction()`

  ```php
  protected function performAction(array $cacheTypes)
  {
  $this->eventManager->dispatch('adminhtml_cache_flush_system');
  ```

{:.procedure}
Variables passed:

*  N/A

{:.procedure}
Only three classes fire this event:

*  `\Magento\Translation\Model\Inline\CacheManager`
*  `\Magento\Backend\Controller\Adminhtml\Cache\FlushSystem`
*  `\Magento\Backend\Console\Command\CacheCleanCommand`

{:.procedure}
When to listen:

* to do things when system cache is cleaned

### 9. adminhtml_cache_refresh_type

{:.procedure}
Where it was introduced:

*  `\Magento\Tax\Controller\Adminhtml\Tax\IgnoreTaxNotification::execute()`:

   ```php
   public function execute()
   {
   $this->_eventManager->dispatch('adminhtml_cache_refresh_type', ['type' => 'config']);
   ```

*  `\Magento\PageCache\Model\Cache\Type::clean()`:

   ```php
   public function clean($mode = \Zend_Cache::CLEANING_MODE_ALL, array $tags = [])
   {
   $this->eventManager->dispatch('adminhtml_cache_refresh_type');
   ```

{:.procedure}
Variables passed:

*  N/A or `type` - what cache type has been cleared

{:.procedure}
Only three classes fire this event:

*  `\Magento\Tax\Controller\Adminhtml\Tax\IgnoreTaxNotification`
*  `\Magento\PageCache\Model\Cache\Type`

{:.procedure}
When to listen:

* to do things **before** Full Page Cache is cleared
* to do things **after** Configuration Cache is cleared

### 10. adminhtml_catalog_category_tree_can_add_root_category

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Category\Tree::canAddRootCategory()`:

   ```php
   public function canAddRootCategory()
   {
        $options = new \Magento\Framework\DataObject(['is_allow' => true]);
        $this->_eventManager->dispatch(
            'adminhtml_catalog_category_tree_can_add_root_category',
            ['category' => $this->getCategory(), 'options' => $options, 'store' => $this->getStore()->getId()]
        );
   ```

{:.procedure}
Variables passed:

*  `category` - product category
*  `options` - `\Magento\Framework\DataObject(['is_allow' => true])`
*  `store` - current store ID

{:.procedure}
A few other classes that fire this event:

*  `\Magento\Catalog\Block\Adminhtml\Category\Checkboxes\Tree`
*  `\Magento\Catalog\Block\Adminhtml\Category\Widget\Chooser`

{:.procedure}
When to listen:

*  If one wants to change availability of adding root category

### 11. adminhtml_catalog_category_tree_can_add_sub_category

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Category\Tree::canAddSubCategory()`:

   ```php
   public function canAddSubCategory()
   {
        $options = new \Magento\Framework\DataObject(['is_allow' => true]);
        $this->_eventManager->dispatch(
            'adminhtml_catalog_category_tree_can_add_sub_category',
            ['category' => $this->getCategory(), 'options' => $options, 'store' => $this->getStore()->getId()]
        );
   ```

{:.procedure}
Variables passed:

*  `category` - product category
*  `options` - `\Magento\Framework\DataObject(['is_allow' => true])`
*  `store` - current store ID

{:.procedure}
A few other classes that fire this event:

*  `\Magento\Catalog\Block\Adminhtml\Category\Checkboxes\Tree`
*  `\Magento\Catalog\Block\Adminhtml\Category\Widget\Chooser`

{:.procedure}
When to listen:

*  If one wants to change availability of adding a subcategory

### 12. adminhtml_catalog_category_tree_is_moveable

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Category\Tree::_isCategoryMoveable()`:

   ```php
   protected function _isCategoryMoveable($node)
   {
        $options = new \Magento\Framework\DataObject(['is_moveable' => true, 'category' => $node]);

        $this->_eventManager->dispatch('adminhtml_catalog_category_tree_is_moveable', ['options' => $options]);
   ```

{:.procedure}
Variables passed:

*  `options` - `\Magento\Framework\DataObject(['is_moveable' => true, 'category' => $node])`

{:.procedure}
A few other classes that fire this event:

*  `\Magento\Catalog\Block\Adminhtml\Category\Checkboxes\Tree`
*  `\Magento\Catalog\Block\Adminhtml\Category\Widget\Chooser`

{:.procedure}
When to listen:

*  If one wants to change moveability of a category

### 13. adminhtml_catalog_product_attribute_edit_frontend_prepare_form

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Front::_prepareForm()`:

   ```php
   protected function _prepareForm()
   {
   ...
   $this->_eventManager->dispatch(
            'adminhtml_catalog_product_attribute_edit_frontend_prepare_form',
            ['form' => $form, 'attribute' => $attributeObject]
   );
   ```

{:.procedure}
Variables passed:

*  `form` - an object of `\Magento\Framework\Data\Form`
*  `attribute` - an object of `\Magento\Catalog\Model\Entity\Attribute`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Front`

{:.procedure}
When to listen:

*  If one wants to customize a product attribute edit form

### 14. adminhtml_catalog_product_attribute_set_main_html_before

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Main::_toHtml()`:

   ```php
    protected function _toHtml()
    {
        $this->_eventManager->dispatch(
            'adminhtml_catalog_product_attribute_set_main_html_before',
            ['block' => $this]
        );
   ```

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Main`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Main`

{:.procedure}
When to listen:

*  If one wants to customize the adminhtml catalog attribute set main block

### 15. adminhtml_catalog_product_attribute_set_toolbar_main_html_before

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Toolbar\Main::_toHtml()`:

   ```php
    protected function _toHtml()
    {
        $this->_eventManager->dispatch(
            'adminhtml_catalog_product_attribute_set_toolbar_main_html_before',
            ['block' => $this]
        );
   ```

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Toolbar\Main`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Set\Toolbar\Main`

{:.procedure}
When to listen:

*  If one wants to customize the adminhtml catalog attribute set toolbar main block

### 16. adminhtml_catalog_product_edit_element_types

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes::_getAdditionalElementTypes()`:

   ```php
    protected function _getAdditionalElementTypes()
    {
    ...
    $this->_eventManager->dispatch('adminhtml_catalog_product_edit_element_types',
       ['response' => $response]);
   ```

{:.procedure}
Variables passed:

*  `response` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There are only two classes that fire this event:

*  `\Magento\Bundle\Block\Adminhtml\Catalog\Product\Edit\Tab\Attributes`
*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes`

{:.procedure}
When to listen:

*  If one wants to add or customize additional element types for catalog product edit attributes tab

### 17. adminhtml_catalog_product_edit_prepare_form

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `form` - an object of `\Magento\Framework\Data\Form`
*  `layout` - an object of `\Magento\Framework\View\LayoutInterface`

{:.procedure}
There are only three classes that fire this event:

*  `\Magento\Bundle\Block\Adminhtml\Catalog\Product\Edit\Tab\Attributes`
*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes`
*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\NewAttribute\Product\Attributes`

{:.procedure}
When to listen:

*  If one wants to customize catalog product edit attribute tab form

### 18. adminhtml_catalog_product_edit_tab_attributes_create_html_before

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes\Create`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Tab\Attributes\Create`

{:.procedure}
When to listen:

*  If one wants to customize catalog product edit create attribute block

### 19. adminhtml_catalog_product_form_prepare_excluded_field_list

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `object` - an object of `\Magento\Catalog\Block\Adminhtml\Product\Edit\Action\Attribute\Tab\Attributes`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Edit\Action\Attribute\Tab\Attributes`

{:.procedure}
When to listen:

*  If one wants to customize catalog product edit attribute tab block

### 20. adminhtml_catalog_product_grid_prepare_massaction

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Catalog\Block\Adminhtml\Product\Grid`

{:.procedure}
There are only two classes that fire this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Grid`
*  `\Magento\UrlRewrite\Block\Catalog\Product\Grid`

{:.procedure}
When to listen:

*  If one wants to customize Mass Actions of a catalog product grid backend block

### 21. adminhtml_cmspage_on_delete

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `title` - a string, title of a cms page
*  `status` - a string, 'success' or 'fail'

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cms\Controller\Adminhtml\Page\Delete`

{:.procedure}
When to listen:

*  If one wants to do things on either successful or unsuccessful cms page removal

### 22. adminhtml_controller_catalogrule_prepare_save

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `request` - a page request object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Save`

{:.procedure}
When to listen:

*  If one wants to alter how a catalog price rule is being saved

### 23. adminhtml_controller_salesrule_prepare_save

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `request` - a page request object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\SalesRule\Controller\Adminhtml\Promo\Quote\Save`

{:.procedure}
When to listen:

*  If one wants to alter how a cart price rule is being saved

### 24. adminhtml_customer_orders_add_action_renderer

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `renderer` - an object of `\Magento\Sales\Block\Adminhtml\Reorder\Renderer\Action`
*  `row` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Sales\Block\Adminhtml\Reorder\Renderer\Action`

{:.procedure}
When to listen:

*  If one wants to modify the way action sales admin reorder block is rendered

### 25. adminhtml_customer_prepare_save

{:.procedure}
Where it was introduced:

*  `\Magento\Customer\Controller\Adminhtml\Index\Save::execute()`:

   ```php
    public function execute()
    {
    ...
                $this->_eventManager->dispatch(
                    'adminhtml_customer_prepare_save',
                    ['customer' => $customer, 'request' => $this->getRequest()]
                );
   ```

{:.procedure}
Variables passed:

*  `customer` - an object of `\Magento\Customer\Api\Data\CustomerInterface`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Customer\Controller\Adminhtml\Index\Save`

{:.procedure}
When to listen:

*  If one wants to modify a customer object before it is saved in admin panel

### 26. adminhtml_customer_save_after

{:.procedure}
Where it was introduced:

*  `\Magento\Customer\Controller\Adminhtml\Index\Save::execute()`:

   ```php
    public function execute()
    {
    ...
                $this->_eventManager->dispatch(
                    'adminhtml_customer_save_after',
                    ['customer' => $customer, 'request' => $this->getRequest()]
                );
   ```

{:.procedure}
Variables passed:

*  `customer` - an object of `\Magento\Customer\Api\Data\CustomerInterface`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Customer\Controller\Adminhtml\Index\Save`

{:.procedure}
When to listen:

*  If one wants to modify a customer object after it is saved in admin panel

### 27. adminhtml_product_attribute_types

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Main::execute()`:

   ```php
    private function processFrontendInputTypes(): void
    {
    ...
    $this->_eventManager->dispatch('adminhtml_product_attribute_types', ['response' => $response]);
   ```

* `\Magento\Catalog\Model\Product\Attribute\Source\Inputtype::toOptionArray()`:

   ```php
   public function toOptionArray()
   {
   ...
   $this->_eventManager->dispatch('adminhtml_product_attribute_types', ['response' => $response]);
   ```

{:.procedure}
Variables passed:

*  `response` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There are only two classes that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Attribute\Edit\Tab\Main`
*  `\Magento\Catalog\Model\Product\Attribute\Source\Inputtype`

{:.procedure}
When to listen:

*  If one wants to modify the way product attributes are processed

### 28. adminhtml_promo_quote_edit_tab_coupons_form_prepare_form

{:.procedure}
Where it was introduced:

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Coupons\Form::_prepareForm()`:

   ```php
    protected function _prepareForm()
    {
        $this->_eventManager->dispatch(
            'adminhtml_promo_quote_edit_tab_coupons_form_prepare_form',
            ['form' => $form]
        );
   ```

{:.procedure}
Variables passed:

*  `form` - an object of `\Magento\Framework\Data\Form`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\SalesRule\Block\Adminhtml\Promo\Quote\Edit\Tab\Coupons\Form`

{:.procedure}
When to listen:

*  If one wants to modify the admin coupon code form is generated

### 29. adminhtml_sales_order_create_process_data

{:.procedure}
Where it was introduced:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

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

{:.procedure}
Variables passed:

*  `order_create_model` - an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request` - an array of POST values

{:.procedure}
A few classes that fire the event:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

{:.procedure}
When to listen:

*  If one wants to modify an order after it gets processed

### 30. adminhtml_sales_order_create_process_data_before

{:.procedure}
Where it was introduced:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

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

{:.procedure}
Variables passed:

*  `order_create_model` - an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request_model` - an object of `\Magento\Framework\App\RequestInterface`
*  `session` - an object of `\Magento\Backend\Model\Session\Quote`

{:.procedure}
A few classes that fire the event:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

{:.procedure}
When to listen:

*  If one wants to modify an order before it gets processed

### 31. adminhtml_sales_order_create_process_item_after

{:.procedure}
Where it was introduced:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

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

{:.procedure}
Variables passed:

*  `order_create_model` - an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request_model` - an object of `\Magento\Framework\App\RequestInterface`
*  `session` - an object of `\Magento\Backend\Model\Session\Quote`

{:.procedure}
A few classes that fire the event:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

{:.procedure}
When to listen:

*  If one wants to modify an order item after it gets processed

### 32. adminhtml_sales_order_create_process_item_before

{:.procedure}
Where it was introduced:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create::_processActionData()`:

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

{:.procedure}
Variables passed:

*  `order_create_model` - an object of `\Magento\Sales\Model\AdminOrder\Create`
*  `request_model` - an object of `\Magento\Framework\App\RequestInterface`
*  `session` - an object of `\Magento\Backend\Model\Session\Quote`

{:.procedure}
A few classes that fire the event:

*  `\Magento\Sales\Controller\Adminhtml\Order\Create\Cancel`
*  `\Magento\Sales\Controller\Adminhtml\Order\Create\ProcessData`

{:.procedure}
When to listen:

*  If one wants to modify an order item before it gets processed

### 33. adminhtml_sales_order_creditmemo_register_before

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `creditmemo` - an object of `\Magento\Sales\Model\Order\Creditmemo`
*  `input` - a data array

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Sales\Controller\Adminhtml\Order\CreditmemoLoader`

{:.procedure}
When to listen:

*  If one wants to modify a credit memo before it gets saved in the registry

### 34. adminhtml_store_edit_form_prepare_form

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Block\System\Store\Edit\AbstractForm::_prepareForm()`:

   ```php
    protected function _prepareForm()
    {
    ...
        $this->_eventManager->dispatch('adminhtml_store_edit_form_prepare_form', ['block' => $this]);
   ```

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Backend\Block\System\Store\Edit\AbstractForm`

{:.procedure}
A few classes that fire the event:

*  `\Magento\Backend\Block\System\Store\Edit\Form\Website`
*  `\Magento\Backend\Block\System\Store\Edit\Form\Group`
*  `\Magento\Backend\Block\System\Store\Edit\Form\Store`

{:.procedure}
When to listen:

*  If one wants to a store edit form before it gets rendered

### 35. adminhtml_system_config_advanced_disableoutput_render_before

{:.procedure}
Where it was introduced:

*  `\Magento\Config\Block\System\Config\Form\Fieldset\Modules\DisableOutput::render()`:

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

{:.procedure}
Variables passed:

*  `modules` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Config\Block\System\Config\Form\Fieldset\Modules\DisableOutput`

{:.procedure}
When to listen:

*  If one wants to alter modules list before they get displayed

### 36. adminhtml_widget_grid_filter_collection

{:.procedure}
Where it was introduced:

*  `\Magento\Reports\Block\Adminhtml\Grid::_prepareCollection()`:

   ```php
    protected function _prepareCollection()
    {
    ...
            $this->_eventManager->dispatch(
                'adminhtml_widget_grid_filter_collection',
                ['collection' => $this->getCollection(), 'filter_values' => $this->_filterValues]
            );
   ```

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Reports\Model\ResourceModel\Report\Collection`
*  `filter_values` - a value array

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Reports\Block\Adminhtml\Grid`

{:.procedure}
When to listen:

*  If one wants to alter report collection or filter values

### 37. admin_permissions_role_prepare_save

{:.procedure}
Where it was introduced:

*  `\Magento\User\Controller\Adminhtml\User\Role\SaveRole::execute()`:

   ```php
    public function execute()
    {
    ...
            $this->_eventManager->dispatch(
                'admin_permissions_role_prepare_save',
                ['object' => $role, 'request' => $this->getRequest()]
            );
   ```

{:.procedure}
Variables passed:

*  `object` - an object of `\Magento\Authorization\Model\Role`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\User\Controller\Adminhtml\User\Role\SaveRole`

{:.procedure}
When to listen:

*  If one wants to alter role object before it's saved

### 38. admin_system_config_changed_section_currency

{:.procedure}
Where it was introduced:

*  `\Magento\CurrencySymbol\Model\System\Currencysymbol::setCurrencySymbolsData()`:

   ```php
    public function setCurrencySymbolsData($symbols = [])
    {
    ...
        $this->_eventManager->dispatch(
            'admin_system_config_changed_section_currency',
            ['website' => $this->_websiteId, 'store' => $this->_storeId]
        );
   ```

{:.procedure}
Variables passed:

*  `website` - a website ID
*  `store` - a store ID

{:.procedure}
There is only one class that fires the event:

*  `\Magento\CurrencySymbol\Model\System\Currencysymbol`

{:.procedure}
When to listen:

*  If one wants to do something after currency symbol is set in admin panel

### 39. admin_system_config_changed_section_currency_before_reinit

{:.procedure}
Where it was introduced:

*  `\Magento\CurrencySymbol\Model\System\Currencysymbol::setCurrencySymbolsData()`:

   ```php
    public function setCurrencySymbolsData($symbols = [])
    {
    ...
        $this->_eventManager->dispatch(
            'admin_system_config_changed_section_currency_before_reinit',
            ['website' => $this->_websiteId, 'store' => $this->_storeId]
        );
   ```

{:.procedure}
Variables passed:

*  `website` - a website ID
*  `store` - a store ID

{:.procedure}
There is only one class that fires the event:

*  `\Magento\CurrencySymbol\Model\System\Currencysymbol`

{:.procedure}
When to listen:

*  If one wants to do something before admin configuration reinitialized

### 40. admin_system_config_changed_section_design

{:.procedure}
Where it was introduced:

*  `\Magento\Theme\Model\Design\Config\Plugin::afterSave()` and `\Magento\Theme\Model\Design\Config\Plugin::afterDelete()`:

   ```php
    public function afterSave(DesignConfigRepository $subject, DesignConfigInterface $designConfig)
    {
    ...
        $this->eventManager->dispatch(
            'admin_system_config_changed_section_design',
            ['website' => $website, 'store' => $store]
        );
   ```

   ```php
    public function afterDelete(DesignConfigRepository $subject, DesignConfigInterface $designConfig)
    {
    ...
        $this->eventManager->dispatch(
            'admin_system_config_changed_section_design',
            ['website' => $website, 'store' => $store]
        );
   ```

{:.procedure}
Variables passed:

*  `website` - an object of `\Magento\Store\Api\Data\WebsiteInterface`
*  `store` - an object of `\Magento\Store\Api\Data\StoreInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Theme\Model\Design\Config\Plugin`

{:.procedure}
When to listen:

*  If one wants to do something after admin design section saved or deleted

### 41. admin_system_config_save

{:.procedure}
Where it was introduced:

*  `\Magento\Config\Controller\Adminhtml\System\Config\Save::execute()`:

   ```php
    public function execute()
    {
    ...
            $this->_eventManager->dispatch(
                'admin_system_config_save',
                ['configData' => $configData, 'request' => $this->getRequest()]
            );
   ```

{:.procedure}
Variables passed:

*  `configData` - a data array
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Config\Controller\Adminhtml\System\Config\Save`

{:.procedure}
When to listen:

*  If one wants to do something after admin configuration is saved

### 42. admin_user_authenticate_after

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `username` - a username string
*  `password` - a password string
*  `user` - an object of `\Magento\User\Model\User`
*  `result` - a boolean value

{:.procedure}
There is only one class that fires the event:

*  `\Magento\User\Model\User`

{:.procedure}
When to listen:

*  If one wants to do something after a user is authenticated

### 43. admin_user_authenticate_before

{:.procedure}
Where it was introduced:

*  `\Magento\User\Model\User::authenticate()`:

   ```php
    public function authenticate($username, $password)
    {
    ...
            $this->_eventManager->dispatch(
                'admin_user_authenticate_before',
                ['username' => $username, 'user' => $this]
            );
   ```

{:.procedure}
Variables passed:

*  `username` - a username string
*  `user` - an object of `\Magento\User\Model\User`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\User\Model\User`

{:.procedure}
When to listen:

*  If one wants to do something before a user is authenticated

### 44. amazon_customer_authenticated

{:.procedure}
Where it was introduced:

*  `\Amazon\Login\Helper\Session::dispatchAuthenticationEvent()`:

   ```php
    protected function dispatchAuthenticationEvent()
    {
        $this->eventManager->dispatch('amazon_customer_authenticated');
    }
   ```

It's used in functions:

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

{:.procedure}
No variables are used.

{:.procedure}
There is only one class that fires the event:

*  `\Amazon\Login\Helper\Session`

{:.procedure}
When to listen:

*  If one wants to do something before an amazon user is authenticated

### 45. amazon_login_authorize_error

{:.procedure}
Where it was introduced:

*  `\Amazon\Login\Controller\Login\Authorize::execute()`:

   ```php
    public function execute()
    {
     ..
       $this->_eventManager->dispatch('amazon_login_authorize_error', ['exception' => $e]);
    }
   ```

{:.procedure}
Variables passed:

*  `exception` - an object of `Magento\Framework\Exception\ValidatorException` or `\Exception`

{:.procedure}
There is only one class that fires the event:

*  `\Amazon\Login\Controller\Login\Authorize`

{:.procedure}
When to listen:

*  If one wants to handle an amazon login exception

### 46. amazon_login_authorize_validation_error

{:.procedure}
Where it was introduced:

*  `\Amazon\Login\Controller\Login\Authorize::execute()`:

   ```php
    public function execute()
    {
     ..
       $this->_eventManager->dispatch('amazon_login_authorize_validation_error', ['exception' => $e]);
    }
   ```

{:.procedure}
Variables passed:

*  `exception` - an object of `Magento\Framework\Exception\ValidatorException`

{:.procedure}
There is only one class that fires the event:

*  `\Amazon\Login\Controller\Login\Authorize`

{:.procedure}
When to listen:

*  If one wants to handle a `ValidatorException` amazon login exception

### 47. amazon_payment_authorize_before

{:.procedure}
Where it was introduced:

*  `\Amazon\Payment\Gateway\Request\AuthorizationRequestBuilder::build()`:

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

{:.procedure}
Variables passed:

*  `context` - a string `authorization`
*  `payment` - an object of `Magento\Payment\Model\InfoInterface`
*  `transport` - a `DataObject` object

{:.procedure}
There is only one class that fires the event:

*  `\Amazon\Payment\Gateway\Request\AuthorizationRequestBuilder`

{:.procedure}
When to listen:

*  If one wants to do something before amazon authorize a payment

### 48. amazon_payment_pending_authorization_hard_decline_after

{:.procedure}
Where it was introduced:

*  `\Amazon\Payment\Model\PaymentManagement\Authorization::hardDeclinePendingAuthorization()`:

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

{:.procedure}
Variables passed:

*  `order` - an object of `\Magento\Sales\Api\Data\OrderInterface`
*  `pendingAuthorization` - an object of `\Amazon\Payment\Api\Data\PendingAuthorizationInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Amazon\Payment\Model\PaymentManagement\Authorization`

{:.procedure}
When to listen:

*  If one wants to do something before a hard amazon payment decline

### 49. amazon_payment_pending_authorization_soft_decline_after

{:.procedure}
Where it was introduced:

*  `\Amazon\Payment\Model\PaymentManagement\Authorization::softDeclinePendingAuthorization()`:

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

{:.procedure}
Variables passed:

*  `order` - an object of `\Magento\Sales\Api\Data\OrderInterface`
*  `pendingAuthorization` - an object of `\Amazon\Payment\Api\Data\PendingAuthorizationInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Amazon\Payment\Model\PaymentManagement\Authorization`

{:.procedure}
When to listen:

*  If one wants to do something before a soft amazon payment decline

### 50. assigned_theme_changed

{:.procedure}
Where it was introduced:

*  `\Magento\Theme\Observer\CheckThemeIsAssignedObserver::execute()`:

   ```php
    public function execute(EventObserver $observer)
    {
     ..
        $this->eventDispatcher->dispatch('assigned_theme_changed', ['theme' => $theme]);
    }
   ```

{:.procedure}
Variables passed:

*  `theme` - an object of `\Magento\Framework\View\Design\ThemeInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Theme\Observer\CheckThemeIsAssignedObserver`

{:.procedure}
When to listen:

*  If one wants to do something after an assigned theme changed

### 51. assign_theme_to_stores_after

{:.procedure}
Where it was introduced:

*  `\Magento\Theme\Model\Config::assignToStore()`:

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

{:.procedure}
Variables passed:

*  `stores` - an array of stores
*  `scope` - scope value defined in `\Magento\Store\Model\ScopeInterface`
*  `theme` - an object of `\Magento\Framework\View\Design\ThemeInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Theme\Model\Config`

{:.procedure}
When to listen:

*  If one wants to do something after a new theme is assigned to a store

### 52. backend_auth_user_login_failed

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Model\Auth::login()`:

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

{:.procedure}
Variables passed:

*  `user_name` - username string
*  `exception` - an object of `\Magento\Framework\Exception\LocalizedException` or `\Magento\Framework\Exception\Plugin\AuthenticationException`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Backend\Model\Auth`

{:.procedure}
When to listen:

*  If one wants to do something after a backend login attempt has failed

### 53. backend_auth_user_login_success

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Model\Auth::login()`:

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

{:.procedure}
Variables passed:

*  `user` - an object of `\Magento\Backend\Model\Auth\Credential\StorageInterface`

{:.procedure}
There is only one class that fires the event:

*  `\Magento\Backend\Model\Auth`

{:.procedure}
When to listen:

*  If one wants to do something after a successful backend login attempt

### 54. backend_block_widget_grid_prepare_grid_before

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Block\Widget\Grid::_prepareGrid()`:

   ```php
    protected function _prepareGrid()
    {
        $this->_eventManager->dispatch(
            'backend_block_widget_grid_prepare_grid_before',
            ['grid' => $this, 'collection' => $this->getCollection()]
        );
    }
   ```

{:.procedure}
Variables passed:

*  `this` - an object of `\Magento\Backend\Block\Widget\Grid`
*  `collection` - an object of `\Magento\Framework\Data\Collection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\AdvancedSearch\Block\Adminhtml\Search\Grid`
*  `\Magento\Newsletter\Block\Adminhtml\Subscriber\Grid`

{:.procedure}
When to listen:

*  If one wants to do something before a backend grid is prepared

### 55. braintree_googlepay_update_quote_after

{:.procedure}
Where it was introduced:

*  `\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater::updateQuote()`:

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

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `googlepay_response` - a response array

{:.procedure}
There is only one class that fires this event:

*  `\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater`

{:.procedure}
When to listen:

*  If one wants to do something after braintree updates a quote

### 56. braintree_googlepay_update_quote_before

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `googlepay_response` - a response array

{:.procedure}
There is only one class that fires this event:

*  `\PayPal\Braintree\Model\GooglePay\Helper\QuoteUpdater`

{:.procedure}
When to listen:

*  If one wants to do something before braintree updates a quote

### 57. braintree_paypal_update_quote_after

{:.procedure}
Where it was introduced:

*  `\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater::updateQuote()`:

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

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `paypal_response` - a response array

{:.procedure}
There is only one class that fires this event:

*  `\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater`

{:.procedure}
When to listen:

*  If one wants to do something after braintree updates a quote

### 58. braintree_paypal_update_quote_before

{:.procedure}
Where it was introduced:

*  `\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater::updateQuote()`:

   ```php
    private function updateQuote(Quote $quote, array $details)
    {
        $this->eventManager->dispatch('braintree_paypal_update_quote_before', [
            'quote' => $quote,
            'paypal_response' => $details
        ]);
    }
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `paypal_response` - a response array

{:.procedure}
There is only one class that fires this event:

*  `\PayPal\Braintree\Model\Paypal\Helper\QuoteUpdater`

{:.procedure}
When to listen:

*  If one wants to do something before braintree updates a quote

### 59. catalogrule_dirty_notice

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Index::execute()`:

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

{:.procedure}
Variables passed:

*  `dirty_rules` - an object of `\Magento\CatalogRule\Model\Flag`
*  `message` - a message string

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogRule\Controller\Adminhtml\Promo\Catalog\Index`

{:.procedure}
When to listen:

*  If one wants to do something when catalog rules are dirty

### 60. catalogsearch_reset_search_result

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogSearch\Model\ResourceModel\Fulltext::resetSearchResults()` and `\Magento\CatalogSearch\Model\ResourceModel\Fulltext::resetSearchResultsByStore()`:

   ```php
    public function resetSearchResults()
    {
    ...
        $this->_eventManager->dispatch('catalogsearch_reset_search_result');
        return $this;
    }

    public function resetSearchResultsByStore($storeId)
    {
    ...
        $this->_eventManager->dispatch('catalogsearch_reset_search_result', ['store_id' => $storeId]);

   ```

{:.procedure}
Variables passed:

*  `store_id` - store ID

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogSearch\Model\ResourceModel\Fulltext`

{:.procedure}
When to listen:

*  If one wants to do something when search results are reset

### 61. catalogsearch_searchable_attributes_load_after

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider::getSearchableAttributes()`:

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

{:.procedure}
Variables passed:

*  `engine` - an object of `\Magento\CatalogSearch\Model\ResourceModel\EngineInterface`
*  `attributes` - an array of attributes

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider`

{:.procedure}
When to listen:

*  If one wants to do something after searchable attributes get loaded

### 62. catalog_block_product_list_collection

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Product\ListProduct::initializeProductCollection()`:

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

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Eav\Model\Entity\Collection\AbstractCollection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Catalog\Block\Product\ProductList\Random`
*  `\Magento\Catalog\Block\Product\ProductList\Promotion`

{:.procedure}
When to listen:

*  If one wants to do something with a product collection after it's initialized

### 63. catalog_block_product_status_display

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Product\AbstractProduct::displayProductStockStatus()`:

   ```php
    public function displayProductStockStatus()
    {
        $statusInfo = new \Magento\Framework\DataObject(['display_status' => true]);
        $this->_eventManager->dispatch('catalog_block_product_status_display'
                                     , ['status' => $statusInfo]);
        return (bool) $statusInfo->getDisplayStatus();
    }
   ```

{:.procedure}
Variables passed:

*  `status` - an object of `\Magento\Framework\DataObject`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Reports\Block\Product\Compared`
*  `\Magento\Reports\Block\Product\Widget\Viewed\Item`

{:.procedure}
When to listen:

*  If one wants to do something when **displayProductStockStatus()** function is called.

### 64. catalog_category_change_products

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Category::_saveCategoryProducts()`:

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

{:.procedure}
Variables passed:

*  `category` - an object of `\Magento\Catalog\Model\Category`
*  `product_ids` - a product IDs array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\ResourceModel\Category`

{:.procedure}
When to listen:

*  If one wants to do something after new products get assigned to a category, already assigned products get unassigned or positions of assigned products changed

### 65. catalog_category_delete_after_done

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Category`
*  `category` - an object of `\Magento\Catalog\Model\Category`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\ResourceModel\Category`

{:.procedure}
When to listen:

*  If one wants to do something after a category gets deleted

### 66. catalog_category_flat_loadnodes_before

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Category\Flat::_loadNodes()`:

   ```php
    protected function _loadNodes($parentNode = null, $recursionLevel = 0, $storeId = 0, $skipMenuFilter = false)
    {
    ...
        $this->_eventManager->dispatch('catalog_category_flat_loadnodes_before'
                                     , ['select' => $select]);
   ```

{:.procedure}
Variables passed:

*  `select` - an object of `Zend_Db_Select`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\ResourceModel\Category\Flat`

{:.procedure}
When to listen:

*  If one wants to modify select object before category flat nodes are loaded

### 67. catalog_category_prepare_save

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Adminhtml\Category\Save::execute()`:

   ```php
    public function execute()
    {
    ...
                $this->_eventManager->dispatch(
                    'catalog_category_prepare_save',
                    ['category' => $category, 'request' => $this->getRequest()]
                );
   ```

{:.procedure}
Variables passed:

*  `category` - an object of `\Magento\Catalog\Model\Category`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Controller\Adminhtml\Category\Save`

{:.procedure}
When to listen:

*  if one wants to modify a category before it's saved

### 68. catalog_category_tree_init_inactive_category_ids

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Category\Tree::_initInactiveCategoryIds()` and `\Magento\Catalog\Model\ResourceModel\Category\Flat::_initInactiveCategoryIds()`:

   ```php
    protected function _initInactiveCategoryIds()
    {
        $this->_inactiveCategoryIds = [];
        $this->_eventManager->dispatch('catalog_category_tree_init_inactive_category_ids', ['tree' => $this]);
        return $this;
    }
   ```

{:.procedure}
Variables passed:

*  `tree` - an object of `\Magento\Catalog\Model\ResourceModel\Category\Tree` or `\Magento\Catalog\Model\ResourceModel\Category\Flat`

{:.procedure}
There is only two classes that fires this event:

*  `\Magento\Catalog\Model\ResourceModel\Category\Tree`
*  `\Magento\Catalog\Model\ResourceModel\Category\Flat`

{:.procedure}
When to listen:

*  If one wants to add more inactive category IDs

### 69. catalog_controller_category_delete

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Adminhtml\Category\Delete::execute()`:

   ```php
    public function execute()
    {
    ...
                $this->_eventManager->dispatch('catalog_controller_category_delete', ['category' => $category]);
   ```

{:.procedure}
Variables passed:

*  `category` - an object of `\Magento\Catalog\Model\Category`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Controller\Adminhtml\Category\Delete`

{:.procedure}
When to listen:

*  If one wants to do something before a category gets deleted

### 70. catalog_controller_category_init_after

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Category\View::_initCategory()`:

   ```php
    protected function _initCategory()
    {
    ...
            $this->_eventManager->dispatch(
                'catalog_controller_category_init_after',
                ['category' => $category, 'controller_action' => $this]
            );
   ```

{:.procedure}
Variables passed:

*  `category` - an object of `\Magento\Catalog\Model\Category`
*  `controller_action` - an object of `\Magento\Catalog\Controller\Category\View`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Controller\Category\View`

{:.procedure}
When to listen:

*  If one wants to do something after a category gets initialized

### 71. catalog_controller_product_init_after

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Helper\Product::initProduct()`:

   ```php
    public function initProduct($productId, $controller, $params = null)
    {
    ...
            $this->_eventManager->dispatch(
                'catalog_controller_product_init_after',
                ['product' => $product, 'controller_action' => $controller]
            );
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `controller_action` - an object of `\Magento\Framework\App\Action\Action`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Helper\Product`

{:.procedure}
When to listen:

*  If one wants to do something after a product gets initialized

### 72. catalog_controller_product_init_before

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Helper\Product::initProduct()`:

   ```php
    public function initProduct($productId, $controller, $params = null)
    {
    ...
        $this->_eventManager->dispatch(
            'catalog_controller_product_init_before',
            ['controller_action' => $controller, 'params' => $params]
        );
   ```

{:.procedure}
Variables passed:

*  `params` - an object of `\Magento\Framework\DataObject`
*  `controller_action` - an object of `\Magento\Framework\App\Action\Action`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Helper\Product`

{:.procedure}
When to listen:

*  If one wants to do something before a product gets initialized

### 73. catalog_controller_product_view

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Helper\Product\View::prepareAndRender()`:

   ```php
    public function initProduct($productId, $controller, $params = null)
    {
    ...
        $this->_eventManager->dispatch('catalog_controller_product_view', ['product' => $product]);
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Helper\Product\View`

{:.procedure}
When to listen:

*  If one wants to do something before a product page is displayed on the frontend

### 74. catalog_prepare_price_select

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Product\Collection::_preparePriceExpressionParameters()`:

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

{:.procedure}
Variables passed:

*  `select` - an object of `\Magento\Framework\DB\Select`
*  `table` - a table name
*  `store_id` - a store ID
*  `response_object` - an object of `\Magento\Framework\DataObject`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`

{:.procedure}
When to listen:

*  If one wants to modify the way prices are added to a select statement

### 75. catalog_product_attribute_update_before

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\Product\Action::updateAttributes()`:

   ```php
    public function updateAttributes($productIds, $attrData, $storeId)
    {
        $this->_eventManager->dispatch(
            'catalog_product_attribute_update_before',
            ['attributes_data' => &$attrData, 'product_ids' => &$productIds, 'store_id' => &$storeId]
        );
   ```

{:.procedure}
Variables passed:

*  `attributes_data` - a data array
*  `product_ids` - a product IDs array
*  `store_id` - a store ID

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\Product\Action`

{:.procedure}
When to listen:

*  If one wants to do something before a product attribute(s) gets updated

### 76. catalog_product_collection_apply_limitations_after

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Product\Collection::_applyProductLimitations()`:

   ```php
    protected function _applyProductLimitations()
    {
    ...
         $this->_eventManager->dispatch(
            'catalog_product_collection_apply_limitations_after',
            ['collection' => $this]
        );
   ```

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`

{:.procedure}
When to listen:

*  If one wants to do something after product collection limitations have been applied

### 77. catalog_product_collection_before_add_count_to_categories

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`

{:.procedure}
When to listen:

*  If one wants to do something before category counts get added to a product collection

### 78. catalog_product_collection_load_after

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Product\Collection::_afterLoad()`:

   ```php
    protected function _afterLoad()
    {
    ...
    $this->_eventManager->dispatch('catalog_product_collection_load_after', ['collection' => $this]);
   ```

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Reports\Model\ResourceModel\Product\Downloads\Collection`
*  `\Magento\Reports\Model\ResourceModel\Product\Lowstock\Collection`

{:.procedure}
When to listen:

*  If one wants to do something after a product collection gets loaded

### 79. catalog_product_compare_add_product

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Product\Compare\Add::execute()`:

   ```php
    public function execute()
    {
    ...
    $this->_eventManager->dispatch('catalog_product_compare_add_product', ['product' => $product]);
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Controller\Product\Compare\Add`

{:.procedure}
When to listen:

*  If one wants to do something after a product gets added to a compare list

### 80. catalog_product_compare_item_collection_clear

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Product\Compare\Item\Collection::clear()`:

   ```php
    public function clear()
    {
        $this->_catalogProductCompareItem->clearItems($this->getVisitorId(), $this->getCustomerId());
        $this->_eventManager->dispatch('catalog_product_compare_item_collection_clear');
    ...
   ```

{:.procedure}
Variables passed:

none

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\ResourceModel\Product\Compare\Item\Collection`

{:.procedure}
When to listen:

*  If one wants to do something after a compare list collection gets cleared

### 81. catalog_product_compare_remove_product

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Product\Compare\Remove::execute()`:

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

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product\Compare\Item`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Controller\Product\Compare\Remove`

{:.procedure}
When to listen:

*  If one wants to do something after a product gets removed from a compare list

### 82. catalog_product_delete_after_done

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\ResourceModel\Product::delete()`:

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

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Catalog\Model\ResourceModel\Product`
*  `\Magento\CatalogImportExport\Model\Import\Proxy\Product\ResourceModel`

{:.procedure}
When to listen:

*  If one wants to do something after a product gets deleted

### 83. catalog_product_edit_action

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Adminhtml\Product\Edit::execute()`:

   ```php
    public function execute()
    {
    ...
        $this->_eventManager->dispatch('catalog_product_edit_action', ['product' => $product]);
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Downloadable\Controller\Adminhtml\Downloadable\Product\Edit\Edit`
*  `\Magento\Bundle\Controller\Adminhtml\Bundle\Product\Edit\Edit`

{:.procedure}
When to listen:

*  If one wants to do something after a product gets edited in admin panel

### 84. catalog_product_gallery_prepare_layout

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content::_prepareLayout()`:

   ```php
    protected function _prepareLayout()
    {
    ...
        $this->_eventManager->dispatch('catalog_product_gallery_prepare_layout', ['block' => $this]);
   ```

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Adminhtml\Product\Helper\Form\Gallery\Content`

{:.procedure}
When to listen:

*  If one wants to modify the way a product admin gallery block layout is rendered

### 85. catalog_product_gallery_upload_image_after

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Adminhtml\Product\Gallery\Upload::execute()`:

   ```php
    public function execute()
    {
    ...
            $this->_eventManager->dispatch(
                'catalog_product_gallery_upload_image_after',
                ['result' => $result, 'action' => $this]
            );
   ```

{:.procedure}
Variables passed:

*  `result` - an array of uploader save data
*  `action` - an object of `\Magento\Catalog\Controller\Adminhtml\Product\Gallery\Upload`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Controller\Adminhtml\Product\Gallery\Upload`

{:.procedure}
When to listen:

*  If one wants to perform an action after product gallery image gets uploaded

### 86. catalog_product_get_final_price

{:.procedure}
Where it was introduced:

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

* `\Magento\Bundle\Model\Product\Price::getSelectionFinalTotalPrice()`:

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

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `qty` - quantity float or null

{:.procedure}
A few classes that fire this event:

*  `\Magento\Bundle\Model\Product\Price`
*  `\Magento\Downloadable\Model\Product\Price`
*  `\Magento\GroupedProduct\Model\Product\Type\Grouped\Price`

{:.procedure}
When to listen:

*  If one wants to alter the way the final product price is generated

### 87. catalog_product_import_bunch_delete_after

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogImportExport\Model\Import\Product::_deleteProducts()`:

   ```php
    protected function _deleteProducts()
    {
    ...
                $this->_eventManager->dispatch(
                    'catalog_product_import_bunch_delete_after',
                    ['adapter' => $this, 'bunch' => $bunch]
                );
   ```

{:.procedure}
Variables passed:

*  `adapter` - an object of `\Magento\CatalogImportExport\Model\Import\Product`
*  `bunch` - a data array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogImportExport\Model\Import\Product`

{:.procedure}
When to listen:

*  If one wants to perform an action after products get deleted

### 88. catalog_product_import_bunch_delete_commit_before

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogImportExport\Model\Import\Product::_deleteProducts()`:

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

{:.procedure}
Variables passed:

*  `adapter` - an object of `\Magento\CatalogImportExport\Model\Import\Product`
*  `bunch` - a data array
*  `ids_to_delete` - a product IDs array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogImportExport\Model\Import\Product`

{:.procedure}
When to listen:

*  If one wants to perform an action before products get deleted

### 89. catalog_product_import_bunch_save_after

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogImportExport\Model\Import\Product::_saveProducts()`:

   ```php
    protected function _deleteProducts()
    {
    ...
            $this->_eventManager->dispatch(
                'catalog_product_import_bunch_save_after',
                ['adapter' => $this, 'bunch' => $bunch]
            );
   ```

{:.procedure}
Variables passed:

*  `adapter` - an object of `\Magento\CatalogImportExport\Model\Import\Product`
*  `bunch` - a data array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogImportExport\Model\Import\Product`

{:.procedure}
When to listen:

*  If one wants to perform an action after products get saved

### 90. catalog_product_import_finish_before

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogImportExport\Model\Import\Product::_importData()`:

   ```php
    protected function _importData()
    {
    ...
        $this->_eventManager->dispatch('catalog_product_import_finish_before', ['adapter' => $this]);
   ```

{:.procedure}
Variables passed:

*  `adapter` - an object of `\Magento\CatalogImportExport\Model\Import\Product`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogImportExport\Model\Import\Product`

{:.procedure}
When to listen:

*  If one wants to perform an action before a product import is finished

### 91. catalog_product_is_salable_after

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\Product::isSalable()`:

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

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `salable` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There are two classes that fire this event:

*  `\Magento\CatalogImportExport\Model\Import\Proxy\Product`
*  `\Magento\Catalog\Model\Product`

{:.procedure}
When to listen:

*  If one wants to perform an action after it checks if a product is available for sale

### 92. catalog_product_is_salable_before

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\Product::isSalable()`:

   ```php
    public function isSalable()
    {
    ...
        $this->_eventManager->dispatch('catalog_product_is_salable_before', ['product' => $this]);
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
There are two classes that fire this event:

*  `\Magento\CatalogImportExport\Model\Import\Proxy\Product`
*  `\Magento\Catalog\Model\Product`

{:.procedure}
When to listen:

*  If one wants to perform an action before it checks if a product is available for sale

### 93. catalog_product_new_action

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Adminhtml\Product\NewAction::execute()`:

   ```php
    public function execute()
    {
    ...
        $this->_eventManager->dispatch('catalog_product_new_action', ['product' => $product]);
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
There are three classes that fire this event:

*  `\Magento\Catalog\Controller\Adminhtml\Product\NewAction`
*  `\Magento\Bundle\Controller\Adminhtml\Bundle\Product\Edit\NewAction`
*  `\Magento\Downloadable\Controller\Adminhtml\Downloadable\Product\Edit\NewAction`

{:.procedure}
When to listen:

*  If one wants to perform an action after a new product is created

### 94. catalog_product_option_price_configuration_after

{:.procedure}
Where it was introduced:

*  `\Magento\Bundle\Block\Catalog\Product\View\Type\Bundle::getJsonConfig()` and `\Magento\Catalog\Block\Product\View\Options::getJsonConfig()`:

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

{:.procedure}
Variables passed:

*  `configObj` - an object of `\Magento\Framework\DataObject`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Bundle\Block\Catalog\Product\View\Type\Bundle`
*  `\Magento\Catalog\Block\Adminhtml\Product\Composite\Fieldset\Options`

{:.procedure}
When to listen:

*  If one wants to modify json representation of product price options

### 95. catalog_product_prepare_index_select

{:.procedure}
Where it was introduced:

*  `\Magento\Bundle\Model\ResourceModel\Indexer\Price::prepareBundlePriceByType()`:

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

{:.procedure}
Variables passed:

*  `select` - an object of `\Magento\Framework\DB\Select`
*  `entity_field` - a `Zend_Db_Expr` object
*  `website_field` - a `Zend_Db_Expr` object
*  `store_field` - a `Zend_Db_Expr` object

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Bundle\Model\ResourceModel\Indexer\Price`

{:.procedure}
When to listen:

*  If one wants to alter temporary price index data for bundle products

### 96. catalog_product_to_website_change

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\Product\Action::updateWebsites()`:

   ```php
    public function updateWebsites($productIds, $websiteIds, $type)
    {
    ...
        $this->_eventManager->dispatch('catalog_product_to_website_change', ['products' => $productIds]);
   ```

{:.procedure}
Variables passed:

*  `products` - a product IDs array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\Product\Action`

{:.procedure}
When to listen:

*  If one wants to do something after product websites have been updated

### 97. catalog_product_upsell

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Product\ProductList\Upsell::_prepareData()`:

   ```php
    protected function _prepareData()
    {
    ...
        $this->_eventManager->dispatch(
            'catalog_product_upsell',
            ['product' => $product, 'collection' => $this->_itemCollection, 'limit' => null]
        );
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `collection` - an object of `\Magento\Catalog\Model\ResourceModel\Product\Collection`
*  `limit` - null

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Block\Product\ProductList\Upsell`

{:.procedure}
When to listen:

*  If one wants to do modify a product's upsell collection

### 98. catalog_product_validate_variations_before

{:.procedure}
Where it was introduced:

*  `\Magento\ConfigurableProduct\Model\Product\Validator\Plugin::_validateProductVariations()`:

   ```php
    protected function _validateProductVariations(Product $parentProduct, array $products, RequestInterface $request)
    {
    ...
        $this->eventManager->dispatch(
            'catalog_product_validate_variations_before',
            ['product' => $parentProduct, 'variations' => $products]
        );
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `variations` - an array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\ConfigurableProduct\Model\Product\Validator\Plugin`

{:.procedure}
When to listen:

*  If one wants to do something before a product variations attributes validation

### 99. catalog_product_view_config

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Block\Product\View::getJsonConfig()`:

   ```php
    public function getJsonConfig()
    {
    ...
    $responseObject = new \Magento\Framework\DataObject();
    $this->_eventManager->dispatch('catalog_product_view_config', ['response_object' => $responseObject]);
   ```

{:.procedure}
Variables passed:

*  `response_object` - an object of `\Magento\Framework\DataObject`

{:.procedure}
A few classes that fire this event:

*  `\Magento\ProductAlert\Block\Product\View\Stock`
*  `\Magento\ProductAlert\Block\Product\View\Price`

{:.procedure}
When to listen:

*  If one wants to do something a JSON encoded product configuration

### 100. category_move

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Model\Category::move()`:

   ```php
    public function move($parentId, $afterCategoryId)
    {
    ...
    $this->_eventManager->dispatch('category_move', $eventParams);
   ```

{:.procedure}
Variables passed:

*  `category_move` - a data array

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Catalog\Model\Category`

{:.procedure}
When to listen:

*  If one wants to do something after a category has been moved

### 101. category_prepare_ajax_response

{:.procedure}
Where it was introduced:

*  `\Magento\Catalog\Controller\Adminhtml\Category::ajaxRequestResponse()`:

   ```php
    protected function ajaxRequestResponse($category, $resultPage)
    {
    ...
        $this->_eventManager->dispatch(
            'category_prepare_ajax_response',
            ['response' => $eventResponse, 'controller' => $this]
        );
   ```

{:.procedure}
Variables passed:

*  `response` - an object of `\Magento\Framework\DataObject`
*  `controller` - an object of `\Magento\Catalog\Controller\Adminhtml\Category`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Catalog\Controller\Adminhtml\Category\Grid`
*  `\Magento\Catalog\Controller\Adminhtml\Category\RefreshPath`

{:.procedure}
When to listen:

*  If one wants to modify category ajax response object

### 102. catelogsearch_searchable_attributes_load_after

{:.procedure}
Where it was introduced:

*  `\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider::getSearchableAttributes()`:

   ```php
    public function getSearchableAttributes($backendType = null)
    {
    ...
       $this->eventManager->dispatch(
                'catelogsearch_searchable_attributes_load_after',
                ['engine' => $this->engine, 'attributes' => $attributes]
       );
   ```

{:.procedure}
Variables passed:

*  `engine` - an object of `\Magento\CatalogSearch\Model\ResourceModel\EngineInterface`
*  `attributes` - an array of attributes

{:.procedure}
There is only one class that fires this event:

*  `\Magento\CatalogSearch\Model\Indexer\Fulltext\Action\DataProvider`

{:.procedure}
When to listen:

*  If one wants to modify a searchable attributes array

### 103. checkout_allow_guest

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Helper\Data::isAllowedGuestCheckout()`:

   ```php
    public function isAllowedGuestCheckout(\Magento\Quote\Model\Quote $quote, $store = null)
    {
    ...
        $this->_eventManager->dispatch(
                'checkout_allow_guest',
                ['quote' => $quote, 'store' => $store, 'result' => $result]
        );
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `store` - an integer or an object of `\Magento\Store\Model\Store`
*  `result` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Helper\Data`

{:.procedure}
When to listen:

*  If one wants to modify the allow guest checkout check (or do something if it's on)

### 104. checkout_cart_add_product_complete

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Controller\Cart\Add::execute()`:

   ```php
    public function execute()
    {
    ...
            $this->_eventManager->dispatch(
                'checkout_cart_add_product_complete',
                ['product' => $product, 'request' => $this->getRequest(), 'response' => $this->getResponse()]
            );
   ```

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `response` - an object of `\Magento\Framework\App\ResponseInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Controller\Cart\Add`

{:.procedure}
When to listen:

*  If one wants to do something after a product has been added to the cart

### 105. checkout_cart_product_add_before

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Cart::addProduct()`:

   ```php
    public function addProduct($productInfo, $requestInfo = null)
    {
    ...
                $this->_eventManager->dispatch(
                    'checkout_cart_product_add_before',
                    ['info' => $requestInfo, 'product' => $product]
                );
   ```

{:.procedure}
Variables passed:

*  `info` - an integer or an array or an object of `\Magento\Framework\DataObject`
*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Cart`

{:.procedure}
When to listen:

*  If one wants to do something before a product has been added to the cart

### 106. checkout_cart_product_update_after

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Cart::updateItem()`:

   ```php
    public function updateItem($itemId, $requestInfo = null, $updatingParams = null)
    {
    ...
        $this->_eventManager->dispatch(
            'checkout_cart_product_update_after',
            ['quote_item' => $result, 'product' => $product]
        );
   ```

{:.procedure}
Variables passed:

*  `quote_item` - an object of `\Magento\Quote\Model\Quote\Item`
*  `product` - an object of `\Magento\Catalog\Model\Product`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Cart`

{:.procedure}
When to listen:

*  If one wants to do something after a cart item has been updated

### 107. checkout_cart_save_after

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Cart::save()`:

   ```php
    public function save()
    {
    ...
        $this->_eventManager->dispatch('checkout_cart_save_after', ['cart' => $this]);
   ```

{:.procedure}
Variables passed:

*  `cart` - an object of `\Magento\Checkout\Model\Cart`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Cart`

{:.procedure}
When to listen:

*  If one wants to do something after a cart has been saved

### 108. checkout_cart_save_before

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Cart::save()`:

   ```php
    public function save()
    {
    ...
        $this->_eventManager->dispatch('checkout_cart_save_before', ['cart' => $this]);
   ```

{:.procedure}
Variables passed:

*  `cart` - an object of `\Magento\Checkout\Model\Cart`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Cart`

{:.procedure}
When to listen:

*  If one wants to do something before a cart is updated

### 109. checkout_cart_update_items_after

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Cart::updateItems()`:

   ```php
    public function updateItems($data)
    {
    ...
        $this->_eventManager->dispatch(
            'checkout_cart_update_items_after',
            ['cart' => $this, 'info' => $infoDataObject]
        );
   ```

{:.procedure}
Variables passed:

*  `cart` - an object of `\Magento\Checkout\Model\Cart`
*  `info` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Cart`

{:.procedure}
When to listen:

*  If one wants to do something after cart items have been updated

### 110. checkout_cart_update_items_before

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Cart::updateItems()`:

   ```php
    public function updateItems($data)
    {
    ...
        $this->_eventManager->dispatch(
            'checkout_cart_update_items_before',
            ['cart' => $this, 'info' => $infoDataObject]
        );
   ```

{:.procedure}
Variables passed:

*  `cart` - an object of `\Magento\Checkout\Model\Cart`
*  `info` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Cart`

{:.procedure}
When to listen:

*  If one wants to do something before cart items are updated

### 111. checkout_cart_update_item_complete

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Controller\Cart\UpdateItemOptions::execute()`:

   ```php
    public function execute()
    {
    ...
      $this->_eventManager->dispatch(
                'checkout_cart_update_item_complete',
                ['item' => $item, 'request' => $this->getRequest(), 'response' => $this->getResponse()]
      );
   ```

{:.procedure}
Variables passed:

*  `item` - an object of `\Magento\Quote\Model\Quote\Item`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `response` - an object of `\Magento\Framework\App\ResponseInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Controller\Cart\UpdateItemOptions`

{:.procedure}
When to listen:

*  If one wants to do something once a cart item update is complete

### 112. checkout_controller_multishipping_shipping_post

{:.procedure}
Where it was introduced:

*  `\Magento\Multishipping\Controller\Checkout\ShippingPost::execute()`:

   ```php
    public function execute()
    {
    ...
            $this->_eventManager->dispatch(
                'checkout_controller_multishipping_shipping_post',
                ['request' => $this->getRequest(), 'quote' => $this->_getCheckout()->getQuote()]
            );
   ```

{:.procedure}
Variables passed:

*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `quote` - an object of `\Magento\Quote\Model\Quote`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Multishipping\Controller\Checkout\ShippingPost`

{:.procedure}
When to listen:

*  If one wants to do something before a multishipping shipping method is set

### 113. checkout_controller_onepage_saveOrder

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Controller\Onepage\SaveOrder::execute()`:

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

{:.procedure}
Variables passed:

*  `result` - an object of `\Magento\Framework\DataObject`
*  `action` - an object of `\Magento\Checkout\Controller\Onepage\SaveOrder`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Controller\Onepage\SaveOrder`

{:.procedure}
When to listen:

*  If one wants to do something after an attempt to place an order has been made (successful or not)

### 114. checkout_multishipping_refund_all

{:.procedure}
Where it was introduced:

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping::createOrders()`:

   ```php
    public function execute()
    {
    ...
        } catch (\Exception $e) {
            $this->_eventManager->dispatch('checkout_multishipping_refund_all', ['orders' => $orders]);
            throw $e;
        }

   ```

{:.procedure}
Variables passed:

*  `orders` - an array of orders

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`

{:.procedure}
When to listen:

*  If one wants to do catch a moment when multishipping orders failed to be placed

### 115. checkout_onepage_controller_success_action

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Controller\Onepage\Success::execute()`:

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

{:.procedure}
Variables passed:

*  `order_ids` - an array of last order ID(s)
*  `order` - an object of `\Magento\Sales\Model\Order`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Controller\Onepage\Success`

{:.procedure}
When to listen:

*  If one wants to do something when an onepage checkout success page is rendered

### 116. checkout_quote_destroy

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Session::clearQuote()`:

   ```php
    public function clearQuote()
    {
    ...
        $this->_eventManager->dispatch('checkout_quote_destroy', ['quote' => $this->getQuote()]);
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Session`

{:.procedure}
When to listen:

*  If one wants to do something when a session quote is cleared

### 117. checkout_quote_init

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Session::getQuote()`:

   ```php
    public function getQuote()
    {
    ...
      $this->_eventManager->dispatch('checkout_quote_init', ['quote' => $quote]);
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Session`

{:.procedure}
When to listen:

*  If one wants to do something when a session quote is initialized

### 118. checkout_submit_all_after

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `order` - an object of `\Magento\Sales\Api\Data\OrderInterface`

{:.procedure}
There are four classes that fire this event:

*  `\Magento\Quote\Model\QuoteManagement`
*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`
*  `\Magento\Sales\Model\AdminOrder\Create`
*  `\Magento\Checkout\Model\Type\Onepage`

{:.procedure}
When to listen:

*  If one wants to do something after an order was placed

### 119. checkout_submit_before

{:.procedure}
Where it was introduced:

*  `\Magento\Quote\Model\QuoteManagement::placeOrder()`:

   ```php
    public function placeOrder($cartId, PaymentInterface $paymentMethod = null)
    {
    ...
    $this->eventManager->dispatch('checkout_submit_before', ['quote' => $quote]);
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Quote\Model\QuoteManagement`

{:.procedure}
When to listen:

*  If one wants to do something when befor a quote is submitted

### 120. checkout_type_multishipping_create_orders_single

{:.procedure}
Where it was introduced:

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping::createOrders()`:

   ```php
    public function createOrders()
    {
    ...
                $this->_eventManager->dispatch(
                    'checkout_type_multishipping_create_orders_single',
                    ['order' => $order, 'address' => $address, 'quote' => $this->getQuote()]
                );
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `order` - an object of `\Magento\Sales\Model\Order`
*  `address` - an object of `\Magento\Quote\Model\Quote\Address`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`

{:.procedure}
When to listen:

*  If one wants to do something after a single order is placed within a multishipping checkout

### 121. checkout_type_multishipping_set_shipping_items

{:.procedure}
Where it was introduced:

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping::setShippingItemsInformation()`:

   ```php
    public function setShippingItemsInformation($info)
    {
    ...
            $this->_eventManager->dispatch('checkout_type_multishipping_set_shipping_items', ['quote' => $quote]);
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Multishipping\Model\Checkout\Type\Multishipping`

{:.procedure}
When to listen:

*  If one wants to do something after shipping information is set within a mutlishipping checkout

### 122. checkout_type_onepage_save_order_after

{:.procedure}
Where it was introduced:

*  `\Magento\Checkout\Model\Type\Onepage::saveOrder()`:

   ```php
    public function saveOrder()
    {
    ...
            $this->_eventManager->dispatch(
                'checkout_type_onepage_save_order_after',
                ['order' => $order, 'quote' => $this->getQuote()]
            );
   ```

{:.procedure}
Variables passed:

*  `quote` - an object of `\Magento\Quote\Model\Quote`
*  `order` - an object of `\Magento\Sales\Model\Order`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Checkout\Model\Type\Onepage`

{:.procedure}
When to listen:

*  If one wants to do something after an order is saved within a onepage checkout

### 123. clean_cache_after_reindex

{:.procedure}
Where it was introduced:

*  `\Magento\Indexer\Model\Processor\CleanCache::afterUpdateMview()`:

   ```php
    public function afterUpdateMview(\Magento\Indexer\Model\Processor $subject)
    {
        $this->eventManager->dispatch('clean_cache_after_reindex', ['object' => $this->context]);
    ...
   ```

{:.procedure}
Variables passed:

*  `object` - an object of `\Magento\Framework\Indexer\CacheContext`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Indexer\Model\Processor\CleanCache`

{:.procedure}
When to listen:

*  If one wants to do something before indexed item cache entries are cleared

### 124. clean_cache_by_tags

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `object` - an object of `\Magento\Framework\Indexer\CacheContext`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Indexer\Model\Processor\CleanCache`
*  `\Magento\Weee\Model\Tax`
*  `\Magento\Reports\Model\Event`

{:.procedure}
When to listen:

*  If one wants to do something at the time specific tags are cleaned from cache

### 125. clean_catalog_images_cache_after

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanImages::execute()`:

   ```php
    public function execute()
    {
    ....
    $this->_eventManager->dispatch('clean_catalog_images_cache_after');
   ```

{:.procedure}
Variables passed:

N/A

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanImages`

{:.procedure}
When to listen:

*  If one wants to do something after image cache has been cleared

### 126. clean_media_cache_after

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanMedia::execute()`:

   ```php
    public function execute()
    {
    ....
    $this->_eventManager->dispatch('clean_media_cache_after');
   ```

{:.procedure}
Variables passed:

N/A

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanMedia`

{:.procedure}
When to listen:

*  If one wants to do something after Javascript/CSS cache has been cleared

### 127. clean_static_files_cache_after

{:.procedure}
Where it was introduced:

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanStaticFiles::execute()`:

   ```php
    public function execute()
    {
    ....
    $this->_eventManager->dispatch('clean_static_files_cache_after');
   ```

{:.procedure}
Variables passed:

N/A

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Backend\Controller\Adminhtml\Cache\CleanStaticFiles`

{:.procedure}
When to listen:

*  If one wants to do something after static files cache has been cleared

### 128. cms_controller_router_match_before

{:.procedure}
Where it was introduced:

*  `\Magento\Cms\Controller\Router::match()`:

   ```php
    public function match(\Magento\Framework\App\RequestInterface $request)
    {
    ....
    $this->_eventManager->dispatch(
            'cms_controller_router_match_before',
            ['router' => $this, 'condition' => $condition]
    );
   ```

{:.procedure}
Variables passed:

*  `router` - an object of `\Magento\Cms\Controller\Router`
*  `condition` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cms\Controller\Router`

{:.procedure}
When to listen:

*  If one wants to do something before a cms page is matched

### 129. cms_page_prepare_save

{:.procedure}
Where it was introduced:

*  `\Magento\Cms\Controller\Adminhtml\Page\Save::execute()`:

   ```php
    public function execute()
    {
    ....
    $this->_eventManager->dispatch(
                    'cms_page_prepare_save',
                    ['page' => $model, 'request' => $this->getRequest()]
    );
   ```

{:.procedure}
Variables passed:

*  `page` - an object of `\Magento\Cms\Model\Page`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cms\Controller\Adminhtml\Page\Save`

{:.procedure}
When to listen:

*  If one wants to do something before a cms page is saved

### 130. cms_page_render

{:.procedure}
Where it was introduced:

*  `\Magento\Cms\Helper\Page::prepareResultPage()`:

   ```php
    public function prepareResultPage(ActionInterface $action, $pageId = null)
    {
    ....
        $this->_eventManager->dispatch(
            'cms_page_render',
            ['page' => $this->_page, 'controller_action' => $action, 'request' => $this->_getRequest()]
        );
   ```

{:.procedure}
Variables passed:

*  `page` - an object of `\Magento\Cms\Model\Page`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `controller_action` - an object of `\Magento\Framework\App\ActionInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cms\Helper\Page`

{:.procedure}
When to listen:

*  If one wants to do something before a cms page is rendered

### 131. cms_wysiwyg_images_static_urls_allowed

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `result` - a PHP object variable
*  `store_id` - a store ID

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cms\Helper\Wysiwyg\Images`

{:.procedure}
When to listen:

*  If one wants to do change whether using static URLs is allowed or not

### 132. controller_action_catalog_product_save_entity_after

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `product` - an object of `\Magento\Catalog\Model\Product`
*  `controller` - an object of `\Magento\Catalog\Controller\Adminhtml\Product\Save`

{:.procedure}
There are only there classes that fire this event:

*  `\Magento\Catalog\Controller\Adminhtml\Product\Save`
*  `\Magento\Bundle\Controller\Adminhtml\Bundle\Product\Edit\Save`
*  `\Magento\Downloadable\Controller\Adminhtml\Downloadable\Product\Edit\Save`

{:.procedure}
When to listen:

*  If one wants to do something after a product has been saved in backend

### 133. controller_action_inventory_populate_source_with_data

{:.procedure}
Where it was introduced:

*  `\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save::processSave()`:

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

{:.procedure}
Variables passed:

*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `source` - an object of `\Magento\InventoryApi\Api\Data\SourceInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save`

{:.procedure}
When to listen:

* Modify inventory source before it gets saved

### 134. controller_action_inventory_populate_stock_with_data

{:.procedure}
Where it was introduced:

*  `\Magento\InventoryAdminUi\Model\Stock\StockSaveProcessor::process()`:

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

{:.procedure}
Variables passed:

*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `stock` - an object of `\Magento\InventoryApi\Api\Data\StockInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\InventoryAdminUi\Model\Stock\StockSaveProcessor`

{:.procedure}
When to listen:

* Modify inventory stock model before it gets saved

### 135. controller_action_inventory_source_save_after

{:.procedure}
Where it was introduced:

*  `\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save::processSave()`:

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

{:.procedure}
Variables passed:

*  `request` - an object of `\Magento\Framework\App\RequestInterface`
*  `source` - an object of `\Magento\InventoryApi\Api\Data\SourceInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\InventoryAdminUi\Controller\Adminhtml\Source\Save`

{:.procedure}
When to listen:

* Modify inventory source after it gets saved

### 136. controller_action_layout_render_before

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\App\View::renderLayout()`:

   ```php
   public function renderLayout($output = '')
   {
   ....
   $this->_eventManager->dispatch('controller_action_layout_render_before');
   ```

{:.procedure}
Variables passed:

N/A

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\App\View`

{:.procedure}
When to listen:

*  If one wants to do something before page layout is rendered

### 137. controller_action_nocookies

{:.procedure}
Where it was introduced:

*  `\Magento\Cookie\Controller\Index\NoCookies::execute()`:

   ```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch(
            'controller_action_nocookies',
            ['action' => $this, 'redirect' => $redirect]
   );
   ```

{:.procedure}
Variables passed:

*  `action` - an object of `\Magento\Cookie\Controller\Index\NoCookies`
*  `redirect` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cookie\Controller\Index\NoCookies`

{:.procedure}
When to listen:

*  If one wants to do something before a nocookies page is rendered

### 138. controller_action_noroute

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\Controller\Noroute\Index::execute()`:

   ```php
   public function execute()
   {
   ....
   $this->_eventManager->dispatch('controller_action_noroute',
       ['action' => $this, 'status' => $status]);
   ```

{:.procedure}
Variables passed:

*  `action` - an object of `\Magento\Cookie\Controller\Index\NoCookies`
*  `status` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\Controller\Noroute\Index`

{:.procedure}
When to listen:

*  If one wants to do something before a 404 page is rendered

### 139. controller_action_postdispatch

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\App\Action\Plugin\EventDispatchPlugin::dispatchPostDispatchEvents()`:

   ```php
   private function dispatchPostDispatchEvents(ActionInterface $action)
   {
   ....
   $this->eventManager->dispatch('controller_action_postdispatch', $this->getEventParameters($action));
   ```

{:.procedure}
Variables passed:

*  `controller_action` - an object of `\Magento\Framework\App\ActionInterface`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\App\Action\Plugin\EventDispatchPlugin`

{:.procedure}
When to listen:

*  If one wants to do something when postdispatch events are fired

### 140. controller_action_predispatch

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\App\Action\Plugin\EventDispatchPlugin::dispatchPreDispatchEvents()`:

   ```php
   private function dispatchPreDispatchEvents(ActionInterface $action)
   {
   $this->eventManager->dispatch('controller_action_predispatch', $this->getEventParameters($action));
   ...
   ```

{:.procedure}
Variables passed:

*  `controller_action` - an object of `\Magento\Framework\App\ActionInterface`
*  `request` - an object of `\Magento\Framework\App\RequestInterface`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\App\Action\Plugin\EventDispatchPlugin`

{:.procedure}
When to listen:

*  If one wants to do something when predispatch events are fired

### 141. controller_front_send_response_before

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\App\Http::launch()`:

   ```php
   public function launch()
   {
   ...
   $eventParams = ['request' => $this->_request, 'response' => $this->_response];
   $this->_eventManager->dispatch('controller_front_send_response_before', $eventParams);
   ...
   ```

{:.procedure}
Variables passed:

*  `response` - an object of `\Magento\Framework\App\Response\Http`
*  `request` - an object of `\Magento\Framework\App\Request\Http`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\App\Http`

{:.procedure}
When to listen:

*  If one wants to do something before sending application output

### 142. core_app_init_current_store_after

{:.procedure}
Where it was introduced:

*  `\Magento\TestFramework\Store\StoreManager::dispatchInitCurrentStoreAfterEvent()`:

   ```php
   protected function dispatchInitCurrentStoreAfterEvent()
   {
   ...
   $this->eventManager->dispatch('core_app_init_current_store_after');
   ```

{:.procedure}
Variables passed:

N/A

{:.procedure}
There is only one class that fires this event:

*  `\Magento\TestFramework\Store\StoreManager`

{:.procedure}
When to listen:

*  If one wants to do something after the current store is initialized in test cases

### 143. core_collection_abstract_load_after

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection::_afterLoad()`:

   ```php
   protected function _afterLoad()
   {
   ...
   $this->_eventManager->dispatch('core_collection_abstract_load_after', ['collection' => $this]);
   ```

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Security\Model\ResourceModel\AdminSessionInfo\Collection`
*  `\Magento\Store\Model\ResourceModel\Config\Collection\Scoped`

{:.procedure}
When to listen:

*  If one wants to do something after a collection is loaded

### 144. core_collection_abstract_load_before

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection::_beforeLoad()`:

   ```php
   protected function _beforeLoad()
   {
   ...
   $this->_eventManager->dispatch('core_collection_abstract_load_before', ['collection' => $this]);
   ```

{:.procedure}
Variables passed:

*  `collection` - an object of `\Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection`

{:.procedure}
A few classes that fire this event:

*  `\Magento\Security\Model\ResourceModel\AdminSessionInfo\Collection`
*  `\Magento\Store\Model\ResourceModel\Config\Collection\Scoped`

{:.procedure}
When to listen:

*  If one wants to do something before a collection is loaded

### 145. core_layout_block_create_after

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\View\Layout\Generator\Block::process()`:

   ```php
   public function process(Layout\Reader\Context $readerContext, Layout\Generator\Context $generatorContext)
   {
   ...
   $this->eventManager->dispatch('core_layout_block_create_after', ['block' => $block]);
   ```

{:.procedure}
Variables passed:

*  `block` - an object of `\Magento\Framework\View\Element\AbstractBlock`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\View\Layout\Generator\Block`

{:.procedure}
When to listen:

*  If one wants to do something after a particular block is created

### 146. core_layout_render_element

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\View\Layout::renderElement()`:

   ```php
   public function renderElement($name, $useCache = true)
   {
   ...
   $this->_eventManager->dispatch(
            'core_layout_render_element',
            ['element_name' => $name, 'layout' => $this, 'transport' => $this->_renderingOutput]
        );
   ```

{:.procedure}
Variables passed:

*  `element_name` - an element name string
*  `layout` - an object of `\Magento\Framework\View\Layout`
*  `transport` - an object of `\Magento\Framework\DataObject`

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\View\Layout`

{:.procedure}
When to listen:

*  If one wants to do something when a layout element is rendered

### 147. cron_job_run

{:.procedure}
Where it was introduced:

*  `\Magento\Cron\Observer\ProcessCronQueueObserver::_runJob()`:

   ```php
   protected function _runJob($scheduledTime, $currentTime, $jobConfig, $schedule, $groupId)
   {
   ...
   $this->eventManager->dispatch('cron_job_run', ['job_name' => 'cron/' . $groupId . '/' . $jobCode]);
   ```

{:.procedure}
Variables passed:

*  `job_name` - a job name string

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Cron\Observer\ProcessCronQueueObserver`

{:.procedure}
When to listen:

*  If one wants to do something before a particular cron job is run

### 148. currency_display_options_forming

{:.procedure}
Where it was introduced:

*  `\Magento\Framework\Locale\Currency::getCurrency()`:

   ```php
   public function getCurrency($currency)
   {
   ...
   $this->_eventManager->dispatch(
                'currency_display_options_forming',
                ['currency_options' => $options, 'base_code' => $currency]
   );
   ```

{:.procedure}
Variables passed:

*  `currency_options` - an array of currency options
*  `base_code` - a currency code string

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Framework\Locale\Currency`

{:.procedure}
When to listen:

*  If one wants to do something after getting getting a currency object by currency code

### 149. customer_account_edited

{:.procedure}
Where it was introduced:

*  `\Magento\Customer\Controller\Account\EditPost::dispatchSuccessEvent()`:

   ```php
   private function dispatchSuccessEvent(\Magento\Customer\Api\Data\CustomerInterface $customerCandidateDataObject)
   {
        $this->_eventManager->dispatch(
            'customer_account_edited',
            ['email' => $customerCandidateDataObject->getEmail()]
        );
   }
   ```

{:.procedure}
Variables passed:

*  `email` - a customer email

{:.procedure}
There is only one class that fires this event:

*  `\Magento\Customer\Controller\Account\EditPost`

{:.procedure}
When to listen:

*  If one wants to do something after a customer has been successfully edited

### 150. customer_address_format

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `type` - an object of `\Magento\Framework\DataObject`
*  `address` - an object of either `\Magento\Customer\Model\Address\AbstractAddress` or `\Magento\Sales\Model\Order\Address`

{:.procedure}
There are three classes that fire this event:

*  `\Magento\Sales\Model\Order\Address\Renderer`
*  `\Magento\Customer\Model\Address\AbstractAddress`
*  `\Magento\Customer\Model\Address`

{:.procedure}
When to listen:

*  If one wants to alter the way an address is formatted

### 151. customer_customer_authenticated

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `model` - an object of `\Magento\Customer\Model\Customer`
*  `password` - a password string

{:.procedure}
There are three classes that fire this event:

*  `\Magento\Customer\Model\Customer`
*  `\Magento\Customer\Model\AccountManagement`
*  `\Magento\Customer\Model\Backend\Customer`

{:.procedure}
When to listen:

*  If one wants to do something after a customer has been authenticated

### 152. customer_data_object_login

{:.procedure}
Where it was introduced:

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

{:.procedure}
Variables passed:

*  `customer` - an object of `\Magento\Customer\Api\Data\CustomerInterface`

{:.procedure}
There are two classes that fire this event:

*  `\Magento\Customer\Model\Session`
*  `\Magento\Customer\Model\AccountManagement`

{:.procedure}
When to listen:

*  If one wants to do something after a customer has been logged in

### 153. customer_login

{:.procedure}
Where it was introduced:

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

* `\Magento\Integration\Model\CustomerTokenService::createCustomerAccessToken()`:

  ```php
  public function createCustomerAccessToken($username, $password)
  {
  ...
  $this->eventManager->dispatch('customer_login', ['customer' => $customerDataObject]);
  ```

{:.procedure}
Variables passed:

*  `customer` - an object of either `\Magento\Customer\Api\Data\CustomerInterface` or `\Magento\Customer\Model\Customer`

{:.procedure}
There are two classes that fire this event:

*  `\Magento\Customer\Model\Session`
*  `\Magento\Integration\Model\CustomerTokenService`

{:.procedure}
When to listen:

*  If one wants to do something after a customer has been logged in

### 154. customer_logout

{:.procedure}
Where it was introduced:

*  `\Magento\Customer\Model\Session::logout()`:

   ```php
   public function logout()
   {
   ....
   $this->_eventManager->dispatch('customer_logout', ['customer' => $this->getCustomer()]);
   }
   ```
{:.procedure}
Variables passed:

*  `customer` - an object of `\Magento\Customer\Model\Customer`

{:.procedure}
There is one classe that fires this event:

*  `\Magento\Customer\Model\Session`

{:.procedure}
When to listen:

*  If one wants to do something before a customer is logged out

### 155. customer_register_success



