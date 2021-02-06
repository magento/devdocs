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

