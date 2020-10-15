---
group: php-developer-guide
title: Admin Grids
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com
---

## Overview

Admin grids are used to represent, filter and sort various data in the Magento backend. They are also used to perform mass actions such as updates and deletes.
This tutorial will show you how to create a simple admin grid.

### 1. Create a backbone module

Everything starts with a module. `Dev_Grid` will be used as the namespace:

```bash
mkdir -p app/code/Dev/Grid/etc
```

Here are the required files to get started:

`app/code/Dev/Grid/etc/module.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
 <module name="Dev_Grid" setup_version="1.0.0">
  <sequence>
   <module name="Magento_Backend"/>
   <module name="Magento_Ui"/>
  </sequence>
 </module>
</config>
```

`app/code/Dev/Grid/registration.php`:

```php
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Dev_Grid',
    __DIR__
);
```

`app/code/Dev/Grid/etc/adminhtml/routes.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">
    <router id="admin">
        <route id="dev_grid" frontName="dev_grid">
            <module name="Dev_Grid" before="Magento_Backend" />
        </route>
    </router>
</config>
```

`app/code/Dev/Grid/etc/adminhtml/menu.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">
    <menu>
        <add id="Dev_Grid::home" title="Category Listing" module="Dev_Grid" sortOrder="1000" parent="Magento_Catalog::catalog_categories" resource="Magento_Catalog::categories" action="dev_grid/index/index"/>
    </menu>
</config>
```

### 2. Define the Admin Grid

The grid displays a list of available categories that start with a letter `b` or `B`.
This grid has three columns: `ID`, `category path` and `category name`. `ID` and `category path` are from the `catalog_category_entity` table. For the `name` values, joins are used.
The page layout file is `app/code/Dev/Grid/view/adminhtml/layout/dev_grid_index_index.xml`:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            <uiComponent name="dev_grid_category_listing"/>
        </referenceContainer>
    </body>
</page>
```

The UI component `dev_grid_category_listing` must be defined separately in a file with the same name, ending with `.xml` - `app/code/Dev/Grid/view/adminhtml/ui_component/dev_grid_category_listing.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
  <argument name="data" xsi:type="array">
     <item name="js_config" xsi:type="array">
        <item name="provider" xsi:type="string">dev_grid_category_listing.dev_grid_category_listing_data_source</item>
        <item name="deps" xsi:type="string">dev_grid_category_listing.dev_grid_category_listing_data_source</item>
     </item>
     <item name="spinner" xsi:type="string">dev_grid_category_columns</item>
     <item name="buttons" xsi:type="array">
        <item name="add" xsi:type="array">
           <item name="name" xsi:type="string">add</item>
           <item name="label" xsi:type="string">View Category Tree</item>
           <item name="class" xsi:type="string">primary</item>
           <item name="url" xsi:type="string">catalog/category/index</item>
        </item>
     </item>
  </argument>
  <dataSource name="dev_grid_category_listing_data_source">
   <argument name="dataProvider" xsi:type="configurableObject">
       <argument name="class" xsi:type="string">Dev\Grid\Ui\DataProvider\Category\ListingDataProvider</argument>
       <argument name="name" xsi:type="string">dev_grid_category_listing_data_source</argument>
       <argument name="primaryFieldName" xsi:type="string">entity_id</argument>
       <argument name="requestFieldName" xsi:type="string">entity_id</argument>
       <argument name="data" xsi:type="array">
         <item name="config" xsi:type="array">
           <item name="update_url" xsi:type="url" path="mui/index/render"/>
           <item name="storageConfig" xsi:type="array">
             <item name="indexField" xsi:type="string">entity_id</item>
           </item>
         </item>
       </argument>
   </argument>
   <argument name="data" xsi:type="array">
     <item name="js_config" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/grid/provider</item>
     </item>
   </argument>
  </dataSource>
  <listingToolbar name="listing_top">
    <bookmark name="bookmarks"/>
    <columnsControls name="columns_controls"/>
    <massaction name="listing_massaction">
      <argument name="data" xsi:type="array">
        <item name="data" xsi:type="array">
           <item name="selectProvider" xsi:type="string">dev_grid_category_listing.dev_grid_category_listing.dev_grid_category_columns.ids</item>
           <item name="displayArea" xsi:type="string">bottom</item>
           <item name="component" xsi:type="string">Magento_Ui/js/grid/tree-massactions</item>
           <item name="indexField" xsi:type="string">entity_id</item>
        </item>
      </argument>
      <action name="delete">
         <argument name="data" xsi:type="array">
           <item name="config" xsi:type="array">
               <item name="type" xsi:type="string">delete</item>
               <item name="label" xsi:type="string" translate="true">Delete</item>
               <item name="url" xsi:type="url" path="dev_grid/category/massDelete"/>
               <item name="confirm" xsi:type="array">
                  <item name="title" xsi:type="string" translate="true">Delete items</item>
                  <item name="message" xsi:type="string" translate="true">Are you sure you want to delete selected items?</item>
               </item>
           </item>
         </argument>
      </action>
    </massaction>
    <filters name="listing_filters">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="templates" xsi:type="array">
                        <item name="filters" xsi:type="array">
                            <item name="select" xsi:type="array">
                                <item name="component" xsi:type="string">Magento_Ui/js/form/element/ui-select</item>
                                <item name="template" xsi:type="string">ui/grid/filters/elements/ui-select</item>
                            </item>
                        </item>
                    </item>
                </item>
            </argument>
    </filters>
    <paging name="listing_paging"/>
  </listingToolbar>
  <columns name="dev_grid_category_columns">
    <selectionsColumn name="ids">
       <argument name="data" xsi:type="array">
           <item name="config" xsi:type="array">
              <item name="indexField" xsi:type="string">entity_id</item>
           </item>
       </argument>
    </selectionsColumn>
    <column name="entity_id">
      <settings>
         <filter>textRange</filter>
         <label translate="true">ID</label>
         <resizeDefaultWidth>25</resizeDefaultWidth>
      </settings>
    </column>
    <column name="path">
      <settings>
         <filter>text</filter>
         <bodyTmpl>ui/grid/cells/text</bodyTmpl>
         <label translate="true">Path</label>
     </settings>
    </column>
    <column name="name">
      <settings>
         <filter>text</filter>
         <bodyTmpl>ui/grid/cells/text</bodyTmpl>
         <label translate="true">Name</label>
      </settings>
    </column>
    <column name="created_at" class="Magento\Ui\Component\Listing\Columns\Date" component="Magento_Ui/js/grid/columns/date">
      <settings>
        <filter>dateRange</filter>
        <dataType>date</dataType>
        <label translate="true">Created</label>
      </settings>
    </column>
    <actionsColumn name="actions" class="Dev\Grid\Ui\Component\Category\Listing\Column\Actions" sortOrder="200">
       <argument name="data" xsi:type="array">
          <item name="config" xsi:type="array">
              <item name="resizeEnabled" xsi:type="boolean">false</item>
              <item name="resizeDefaultWidth" xsi:type="string">107</item>
              <item name="indexField" xsi:type="string">entity_id</item>
          </item>
       </argument>
       <argument name="viewUrl" xsi:type="string">catalog/category/view</argument>
    </actionsColumn>
  </columns>
</listing>
```

This file consists of several sections:

*  `dataSource` - references the class that is responsible for getting the requested data.
*  `listingToolbar` - where mass actions and filters are defined.
*  `columns` - lists the columns to be displayed.

### 3. Define the DataSource Class

The UI references `Dev\Grid\Ui\DataProvider\Category\ListingDataProvider` as the data source class.

The corresponding file is `app/code/Dev/Grid/Ui/DataProvider/Category/ListingDataProvider.php`:

```php
namespace Dev\Grid\Ui\DataProvider\Category;

class ListingDataProvider extends \Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider
{
}
```

It has to extend `\Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider`.
The plugin then gets a `name` attribute:

`app/code/Dev/Grid/etc/di.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
 <type name="Dev\Grid\Ui\DataProvider\Category\ListingDataProvider">
   <plugin name="dev_grid_attributes" type="Dev\Grid\Plugin\AddAttributesToUiDataProvider"/>
 </type>
 <type name="Magento\Framework\View\Element\UiComponent\DataProvider\CollectionFactory">
  <arguments>
   <argument name="collections" xsi:type="array">
     <item name="dev_grid_category_listing_data_source" xsi:type="string">DevGridCategoryCollection</item>
   </argument>
  </arguments>
 </type>
 <virtualType name="DevGridCategoryCollection" type="Dev\Grid\Ui\DataProvider\Category\Listing\Collection">
   <arguments>
     <argument name="mainTable" xsi:type="string">catalog_category_entity</argument>
     <argument name="resourceModel" xsi:type="string">Dev\Grid\Model\ResourceModel\Category</argument>
   </arguments>
 </virtualType>
</config>
```

`app/code/Dev/Grid/Plugin/AddAttributesToUiDataProvider.php`:

```php
namespace Dev\Grid\Plugin;

use Dev\Grid\Ui\DataProvider\Category\ListingDataProvider as CategoryDataProvider;
use Magento\Eav\Api\AttributeRepositoryInterface;
use Magento\Framework\App\ProductMetadataInterface;
use Magento\Framework\View\Element\UiComponent\DataProvider\SearchResult;

class AddAttributesToUiDataProvider
{
    /** @var AttributeRepositoryInterface */
    private $attributeRepository;

    /** @var ProductMetadataInterface */
    private $productMetadata;

    /**
     * Constructor
     *
     * @param \Magento\Eav\Api\AttributeRepositoryInterface $attributeRepository
     * @param \Magento\Framework\App\ProductMetadataInterface $productMetadata
     */
    public function __construct(
        AttributeRepositoryInterface $attributeRepository,
        ProductMetadataInterface $productMetadata
    ) {
        $this->attributeRepository = $attributeRepository;
        $this->productMetadata = $productMetadata;
    }

    /**
     * Get Search Result after plugin
     *
     * @param \Dev\Grid\Ui\DataProvider\Category\ListingDataProvider $subject
     * @param \Magento\Framework\View\Element\UiComponent\DataProvider\SearchResult $result
     * @return \Magento\Framework\View\Element\UiComponent\DataProvider\SearchResult
     */
    public function afterGetSearchResult(CategoryDataProvider $subject, SearchResult $result)
    {
        if ($result->isLoaded()) {
            return $result;
        }

        $edition = $this->productMetadata->getEdition();

        $column = 'entity_id';

        if ($edition == 'Enterprise') {
            $column = 'row_id';
        }

        $attribute = $this->attributeRepository->get('catalog_category', 'name');

        $result->getSelect()->joinLeft(
            ['devgridname' => $attribute->getBackendTable()],
            'devgridname.' . $column . ' = main_table.' . $column . ' AND devgridname.attribute_id = '
            . $attribute->getAttributeId(),
            ['name' => 'devgridname.value']
        );

        $result->getSelect()->where('devgridname.value LIKE "B%"');

        return $result;
    }
}
```

This works with both enterprise and community versions by linking on different fields.
In this case, `LIKE` is case insensitive.

### 4. Data Source Collection

The `dataSource` name `dev_grid_category_listing_data_source` links to `Dev\Grid\Ui\DataProvider\Category\Listing\Collection` collection in `app/code/Dev/Grid/etc/di.xml`.

`di.xml` also sets the main table and resource model:

```xml
 <virtualType name="DevGridCategoryCollection" type="Dev\Grid\Ui\DataProvider\Category\Listing\Collection">
   <arguments>
     <argument name="mainTable" xsi:type="string">catalog_category_entity</argument>
     <argument name="resourceModel" xsi:type="string">Dev\Grid\Model\ResourceModel\Category</argument>
   </arguments>
 </virtualType>
```

The collection class translates into `app/code/Dev/Grid/Ui/DataProvider/Category/Listing/Collection.php`:

```php
namespace Dev\Grid\Ui\DataProvider\Category\Listing;

use Magento\Framework\View\Element\UiComponent\DataProvider\SearchResult;

class Collection extends SearchResult
{
    /**
     * Override _initSelect to add custom columns
     *
     * @return void
     */
    protected function _initSelect()
    {
        $this->addFilterToMap('entity_id', 'main_table.entity_id');
        $this->addFilterToMap('name', 'devgridname.value');
        parent::_initSelect();
    }
}
```

It uses a custom collection file to add custom filters to map, and makes the grid filters work with the ID and name fields. Without `addFilterToMap`, you will not be able to search within the `name` column.

### 5. Column Actions Class

The UI grid file defines a column actions class `Dev\Grid\Ui\Component\Category\Listing\Column\Actions`.

`app/code/Dev/Grid/Ui/Component/Category/Listing/Column/Actions.php`:

```php
namespace Dev\Grid\Ui\Component\Category\Listing\Column;

use Magento\Framework\View\Element\UiComponentFactory;
use Magento\Framework\View\Element\UiComponent\ContextInterface;
use Magento\Framework\Url;
use Magento\Ui\Component\Listing\Columns\Column;

class Actions extends Column
{
    /**
     * @var UrlInterface
     */
    protected $_urlBuilder;

    /**
     * @var string
     */
    protected $_viewUrl;

    /**
     * Constructor
     *
     * @param \Magento\Framework\View\Element\UiComponent\ContextInterface $context
     * @param \Magento\Framework\View\Element\UiComponentFactory $uiComponentFactory
     * @param \Magento\Framework\Url $urlBuilder
     * @param string $viewUrl
     * @param array $components
     * @param array $data
     */
    public function __construct(
        ContextInterface $context,
        UiComponentFactory $uiComponentFactory,
        Url $urlBuilder,
        $viewUrl = '',
        array $components = [],
        array $data = []
    ) {
        $this->_urlBuilder = $urlBuilder;
        $this->_viewUrl    = $viewUrl;
        parent::__construct($context, $uiComponentFactory, $components, $data);
    }

    /**
     * Prepare Data Source
     *
     * @param array $dataSource
     * @return array
     */
    public function prepareDataSource(array $dataSource)
    {
        if (isset($dataSource['data']['items'])) {
            foreach ($dataSource['data']['items'] as &$item) {
                $name = $this->getData('name');
                if (isset($item['entity_id'])) {
                    $item[$name]['view']   = [
                        'href'  => $this->_urlBuilder->getUrl($this->_viewUrl, ['id' => $item['entity_id']]),
                        'target' => '_blank',
                        'label' => __('View on Frontend')
                    ];
                }
            }
        }
        return $dataSource;
    }
}
```

It gets a frontend URL for every category it lists.

### 6. Backend Controllers

The main route defined in `app/code/Dev/Grid/etc/adminhtml/menu.xml` as `dev_grid/index/index` translates into `app/code/Dev/Grid/Controller/Adminhtml/Index/Index.php`:

```php
namespace Dev\Grid\Controller\Adminhtml\Index;

use Magento\Backend\App\Action;
use Magento\Backend\App\Action\Context;
use Magento\Framework\View\Result\Page;
use Magento\Framework\View\Result\PageFactory;

class Index extends Action implements HttpGetActionInterface
{
    /**
     * @var PageFactory
     */
    private $pageFactory;

    /**
     * Constructor
     *
     * @param \Magento\Backend\App\Action\Context $context
     * @param \Magento\Framework\View\Result\PageFactory $rawFactory
     */
    public function __construct(
        Context $context,
        PageFactory $rawFactory
    ) {
        $this->pageFactory = $rawFactory;

        parent::__construct($context);
    }

    /**
     * Add the main Admin Grid page
     *
     * @return Page
     */
    public function execute(): Page
    {
        $resultPage = $this->pageFactory->create();
        $resultPage->setActiveMenu('Magento_Catalog::catalog_products');
        $resultPage->getConfig()->getTitle()->prepend(__('Admin Grid Tutorial Example'));

        return $resultPage;
    }
}
```

The Ui grid file defines the custom route `dev_grid/category/massDelete` (mass delete) and translates into `app/code/Dev/Grid/Controller/Adminhtml/Category/MassDelete.php`:

```php
namespace Dev\Grid\Controller\Adminhtml\Category;

use Magento\Backend\App\Action;
use Magento\Backend\App\Action\Context;
use Magento\Backend\Model\View\Result\Redirect;
use Magento\Catalog\Model\ResourceModel\Category\CollectionFactory;
use Magento\Catalog\Api\CategoryRepositoryInterface;
use Magento\Framework\App\Action\HttpPostActionInterface;
use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\Exception\NotFoundException;
use Magento\Ui\Component\MassAction\Filter;

class MassDelete extends Action implements HttpPostActionInterface
{
    /**
     * Authorization level
     */
    const ADMIN_RESOURCE = 'Magento_Catalog::categories';

    /**
     * @var \Magento\Catalog\Model\ResourceModel\Category\CollectionFactory
     */
    protected $collectionFactory;

    /**
     * @var \Magento\Catalog\Api\CategoryRepositoryInterface
     */
    private $categoryRepository;

    /**
     * @var \Magento\Ui\Component\MassAction\Filter
     */
    protected $filter;

    /**
     * Constructor
     *
     * @param \Magento\Backend\App\Action\Context $context
     * @param \Magento\Ui\Component\MassAction\Filter $filter
     * @param \Magento\Catalog\Model\ResourceModel\Category\CollectionFactory $collectionFactory
     * @param \Magento\Catalog\Api\CategoryRepositoryInterface $categoryRepository
     */
    public function __construct(
        Context $context,
        Filter $filter,
        CollectionFactory $collectionFactory,
        CategoryRepositoryInterface $categoryRepository
    ) {
        $this->filter = $filter;
        $this->collectionFactory = $collectionFactory;
        $this->categoryRepository = $categoryRepository;
        parent::__construct($context);
    }

    /**
     * Category delete action
     *
     * @return Redirect
     */
    public function execute(): Redirect
    {
        if (!$this->getRequest()->isPost()) {
            throw new NotFoundException(__('Page not found'));
        }
        $collection = $this->filter->getCollection($this->collectionFactory->create());
        $categoryDeleted = 0;
        foreach ($collection->getItems() as $category) {
            $this->categoryRepository->delete($category);
            $categoryDeleted++;
        }

        if ($categoryDeleted) {
            $this->messageManager->addSuccessMessage(
                __('A total of %1 record(s) have been deleted.', $categoryDeleted)
            );
        }
        return $this->resultFactory->create(ResultFactory::TYPE_REDIRECT)->setPath('dev_grid/index/index');
    }
}
```

## Completed extension

The complete extension can be found on GitHub at [Magento 2 Admin Grid Example Extension](https://github.com/goivvy/admin-grid-tutorial).
Installation instructions:

1. Clone the repository

   ```bash
   git clone https://github.com/goivvy/admin-grid-tutorial.git
   ```

1. Copy `app` folder

   ```bash
   cp -r ~/admin-grid/tutorial/app /path/to/magento2/root/folder
   ```

1. Install and recompile

   ```bash
   bin/magento setup:upgrade
   bin/magento deploy:mode:set production
   ```

The grid can now be accessed at **Catalog** > **Inventory** > **Category Listing**.
