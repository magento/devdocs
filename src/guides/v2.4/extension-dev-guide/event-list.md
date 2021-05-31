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

* if one wants to change availability of adding root category

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

* if one wants to change availability of adding a subcategory

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

* if one wants to change moveability of a category

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

* if one wants to customize a product attribute edit form

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

* if one wants to customize the adminhtml catalog attribute set main block

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

* if one wants to customize the adminhtml catalog attribute set toolbar main block

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

* if one wants to add or customize additional element types for catalog product edit attributes tab

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

* if one wants to customize catalog product edit attribute tab form

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

* if one wants to customize catalog product edit create attribute block

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

* if one wants to customize catalog product edit attribute tab block

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

* if one wants to customize Mass Actions of a catalog product grid backend block

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

* if one wants to do things on either successful or unsuccessful cms page removal

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

* if one wants to alter how a catalog price rule is being saved

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

* if one wants to alter how a cart price rule is being saved

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

* if one wants to modify the way action sales admin reorder block is rendered

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

* if one wants to modify a customer object before it is saved in admin panel

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

* if one wants to modify a customer object after it is saved in admin panel

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

* if one wants to modify the way product attributes are processed

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

* if one wants to modify the admin coupon code form is generated

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

* if one wants to modify an order after it gets processed

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

* if one wants to modify an order before it gets processed

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

* if one wants to modify an order item after it gets processed

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

* if one wants to modify an order item before it gets processed

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

* if one wants to modify a credit memo before it gets saved in the registry

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

* if one wants to a store edit form before it gets rendered

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

* if one wants to alter modules list before they get displayed

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

* if one wants to alter report collection or filter values

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

* if one wants to alter role object before it's saved

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

* if one wants to do something after currency symbol is set in admin panel

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

* if one wants to do something before admin configuration reinitialized


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

* if one wants to do something after admin design section saved or deleted

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

* if one wants to do something after admin configuration is saved

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

* if one wants to do something after a user is authenticated

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

* if one wants to do something before a user is authenticated

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

* if one wants to do something before an amazon user is authenticated

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

* if one wants to handle an amazon login exception

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

* if one wants to handle a `ValidatorException` amazon login exception

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

* if one wants to do something before amazon authorize a payment

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

* if one wants to do something before a hard amazon payment decline

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

* if one wants to do something before a soft amazon payment decline

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

* if one wants to do something after an assigned theme changed 

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

* if one wants to do something after a new theme is assigned to a store

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

* if one wants to do something after a backend login attempt has failed

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

* if one wants to do something after a successful backend login attempt

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

* if one wants to do something before a backend grid is prepared

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

* if one wants to do something after braintree updates a quote

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

* if one wants to do something before braintree updates a quote

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

* if one wants to do something after braintree updates a quote

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

* if one wants to do something before braintree updates a quote

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

* if one wants to do something when catalog rules are dirty

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

* if one wants to do something when search results are reset

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

* if one wants to do something after searchable attributes get loaded

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

* if one wants to do something with a product collection after it's initialized

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

* if one wants to do something when **displayProductStockStatus()** function is called. 

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

* if one wants to do something after new products get assigned to a category, already assigned products get unassigned or positions of assigned products changed

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

* if one wants to do something after a category gets deleted

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

* if one wants to modify select object before category flat nodes are loaded

### 67. catalog_category_prepare_save






