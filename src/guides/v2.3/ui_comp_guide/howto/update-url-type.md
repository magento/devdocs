---
subgroup: howtos
group: ui-components-guide
title: Update the page URL type
---
## What's in this topic

This topic describes how to extend the existing [`UrlInput` component](../components/ui-urlinput.html) to implement a new link type, or update an existing one, for your module.

## Overview

To update a page URL type, you must:

1. [Create the link class](#link-class).
1. [Add the link to the di.xml file](#di-xml).
1. [Create the component's JavaScript implementation](#js-implementation).
1. [Create a controller to search the page](#search-page).
1. [Create a controller to return the page or array by `cmsPageId`](#return-page).

## Create the link class {#link-class}

Create a `.php` file implementing the new link class in the module directory containing the applicable UI component, such as `<your-module>/Ui/Component/UrlInput/`.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace %your module namespace%;

use Magento\Framework\UrlInterface;

/** Provides configuration for url input with type CMS page */
class Page implements \Magento\Ui\Model\UrlInput\ConfigInterface
{
    /**
     * @var \Magento\Framework\UrlInterface
     */
    private $urlBuilder;
    /**
     * @param UrlInterface $urlBuilder
     */
    public function __construct(UrlInterface $urlBuilder)
    {
        $this->urlBuilder = $urlBuilder;
    }
    /**
     * {@inheritdoc}
     */
    public function getConfig(): array
    {
        return [
            'label' => __('Page'),
            'component' => '%link to .js component you will complete in next step%',
            'disableLabel' => true,
            'filterOptions' => true,
            'searchOptions' => true,
            'chipsEnabled' => true,
            'levelsVisibility' => '1',
            'options' => [],
            'sortOrder' => 45,
            'multiple' => false,
            'closeBtn' => true,
            'template' => 'ui/grid/filters/elements/ui-select',
            'searchUrl' => $this->urlBuilder->getUrl('%path for search controller%'),
            'filterPlaceholder' => __('Page Name'),
            'isDisplayEmptyPlaceholder' => true,
            'emptyOptionsHtml' => __('Start typing to find cms page'),
            'missingValuePlaceholder' => __('Cms Page with ID: %s doesn\'t exist'),
            'isDisplayMissingValuePlaceholder' => true,
            'validationUrl' => $this->urlBuilder->getUrl('%path for validation controller%'),
        ];
    }
}
```

## Add the link to the `di.xml` file {#di-xml}

Add the link class you just created to the `di.xml` file.

```xml
<type name="Magento\Ui\Model\UrlInput\LinksConfigProvider">
    <arguments>
        <argument name="linksConfiguration" xsi:type="array">
            <item name="page" xsi:type="string">%link to your class%</item>
        </argument>
    </arguments>
</type>
```

## Create the component's JavaScript implementation {#js-implementation}

Create the JavaScript implementation for the applicable UI component in your module-specific directory, such as `<your-module>/view/<area>/web/js/form/element/page-ui-select.js`.

`<area>` would be `adminhtml`, `frontend`, or `base` depending on where you are applying the component implementation.

```js
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Ui/js/form/element/ui-select',
    'jquery',
    'underscore'
], function (Select, $, _) {
    'use strict';

    return Select.extend({
        defaults: {
            validationUrl: false,
            loadedOption: {},
            validationLoading: true
        },

        /** @inheritdoc */
        initialize: function () {
            this._super();

            this.validateInitialValue();

            return this;
        },

        /**
         * Validate initial value actually exists
         */
        validateInitialValue: function () {
            if (!_.isEmpty(this.value())) {
                $.ajax({
                    url: this.validationUrl,
                    type: 'GET',
                    dataType: 'json',
                    context: this,
                    data: {
                        cmsPageId: this.value()
                    },

                    /** @param {Object} response */
                    success: function (response) {
                        if (!_.isEmpty(response)) {
                            this.options([response]);
                            this.loadedOption = response;
                        }
                    },

                    /** set empty array if error occurs */
                    error: function () {
                        this.options([]);
                    },

                    /** stop loader */
                    complete: function () {
                        this.validationLoading(false);
                        this.setCaption();
                    }
                });
            } else {
                this.validationLoading(false);
            }
        },

        /** @inheritdoc */
        getSelected: function () {
            var options = this._super();

            if (!_.isEmpty(this.loadedOption)) {
                return this.value() === this.loadedOption.value ? [this.loadedOption] : options;
            }

            return options;
        },

        /**
         * Get path to current option
         *
         * @param {Object} data - option data
         * @returns {String} path
         */
        getPath: function (data) {
            var path = '';

            if (this.renderPath) {
                path = data.identifier || path;
            }

            return path;
        }
    });
});
```

## Create a controller to search the page {#search-page}

Create a controller to search the page using a search key.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace %path to your module namespace%;

use Magento\Framework\App\Action\HttpGetActionInterface;
use Magento\Framework\App\Action\HttpPostActionInterface;
use Magento\Framework\UrlInterface;

class Search extends \Magento\Backend\App\Action implements HttpGetActionInterface, HttpPostActionInterface
{
    /**
     * Authorization level of a basic admin session
     *
     * @see _isAllowed()
     */
    const ADMIN_RESOURCE = 'Magento_Cms::save';
    /**
     * @var \Magento\Framework\Controller\Result\JsonFactory
     */
    private $resultJsonFactory;
    /**
     * @var \Magento\Cms\Model\ResourceModel\Page\CollectionFactory
     */
    private $cmsCollectionFactory;
    /**
     * @param \Magento\Framework\Controller\Result\JsonFactory $resultFactory
     * @param \Magento\Cms\Model\ResourceModel\Page\CollectionFactory $cmsCollectionFactory
     * @param \Magento\Backend\App\Action\Context $context
     */
    public function __construct(
        \Magento\Framework\Controller\Result\JsonFactory $resultFactory,
        \Magento\Cms\Model\ResourceModel\Page\CollectionFactory $cmsCollectionFactory,
        \Magento\Backend\App\Action\Context $context
    ) {
        $this->resultJsonFactory = $resultFactory;
        $this->cmsCollectionFactory = $cmsCollectionFactory;
        parent::__construct($context);
    }
    /**
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute(): \Magento\Framework\Controller\ResultInterface
    {
        $searchKey = $this->getRequest()->getParam('searchKey');
        $pageNum = (int)$this->getRequest()->getParam('page');
        $limit = (int)$this->getRequest()->getParam('limit');
        /** @var \Magento\Cms\Model\ResourceModel\Page\Collection $cmsCollection */
        $cmsCollection = $this->cmsCollectionFactory->create();
        $cmsCollection->setCurPage($pageNum)->setPageSize($limit);
        $totalValues = $cmsCollection->getSize();
        $cmsCollection->addFilter('title', ['in'=> $searchKey]);
        $pagesById = [];
       /** @var \Magento\Cms\Model\Page $cmsPage */
        foreach ($cmsCollection as $cmsPage) {
            $cmsId = $cmsPage->getId();
            $pagesById[$cmsId] = [
                'value' => $cmsId,
                'label' => $cmsPage->getTitle(),
                'identifier' => sprintf(__('ID: %s'), $cmsId)
            ];
        }
        /** @var \Magento\Framework\Controller\Result\Json $resultJson */
        $resultJson = $this->resultJsonFactory->create();
        return $resultJson->setData([
            'options' => $pagesById,
            'total' => empty($pagesById) ? 0 : $totalValues
        ]);
    }
}
```

## Create a controller to return the page or array {#return-page}

Create a controller to return the page, or empty array if the option doesn't exist, by the `cmsPageId`.

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace %path to your module%;

use Magento\Framework\App\Action\HttpGetActionInterface;

class GetSelected extends \Magento\Backend\App\Action implements HttpGetActionInterface
{
    /**
     * Authorization level of a basic admin session
     *
     * @see _isAllowed()
     */
    const ADMIN_RESOURCE = 'Magento_Cms::save';
    /**
     * @var \Magento\Framework\Controller\Result\JsonFactory
     */
    private $resultJsonFactory;
    /**
     * @var \Magento\Cms\Model\ResourceModel\Page\CollectionFactory
     */
    private $cmsCollectionFactory;
    /**
     * GetSelected constructor.
     * @param \Magento\Framework\Controller\Result\JsonFactory $jsonFactory
     * @param \Magento\Cms\Model\ResourceModel\Page\CollectionFactory $cmsCollectionFactory
     * @param \Magento\Backend\App\Action\Context $context
     */
    public function __construct(
        \Magento\Framework\Controller\Result\JsonFactory $jsonFactory,
        \Magento\Cms\Model\ResourceModel\Page\CollectionFactory $cmsCollectionFactory,
        \Magento\Backend\App\Action\Context $context
    ) {
        $this->resultJsonFactory = $jsonFactory;
        $this->cmsCollectionFactory = $cmsCollectionFactory;
        parent::__construct($context);
    }
    /**
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute() : \Magento\Framework\Controller\ResultInterface
    {
        $cmsPageId = $this->getRequest()->getParam('cmsPageId');
        /** @var \Magento\Cms\Model\ResourceModel\Page\Collection $cmsPageCollection */
        $cmsPageCollection = $this->cmsCollectionFactory->create();
        $cmsPageCollection->addFilter('page_id', $cmsPageId);
        $option = [];
        if (!empty($cmsPageCollection->getFirstItem()->getData())) {
            $cmsPage = $cmsPageCollection->getFirstItem();
            $option = [
                'value' => $cmsPageId,
                'label' => $cmsPage->getTitle(),
                'identifier' => sprintf(__('ID: %s'), $cmsPageId)
            ];
        }
        /** @var \Magento\Framework\Controller\Result\Json $resultJson */
        $resultJson = $this->resultJsonFactory->create();
        return $resultJson->setData($option);
    }
}
```
