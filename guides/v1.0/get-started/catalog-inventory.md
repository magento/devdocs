---
layout: default
title: Catalog inventory service
---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="api-services">{{ page.title }}</h1>
      </div>
      <div class="col-xs-3">
         <p><b>Contents</b></p>
         <div style="" id="category" class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top" role="complementary">
         </div>
         <a class="back-to-top" href="#top">
         Back to top
         </a>
         <a href="#" class="bs-docs-theme-toggle">
         Preview theme
         </a>
      </div>
      <div class="col-xs-9" role="main">
         <div class="bs-docs-section">
            <p><a href="{{ site.githuburl }}api-guide-get-started/services/service-layer.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
            <h2 class="api2" id="catalog-inventory-overview">Overview</h2>
            <p style="color:red">Most of this content will move to the API reference, but I'm keeping it here for the moment.</p>
            <p>Use the <code>CatalogInventory</code> service to get information about the inventory of a store.</p>
            <p>The <code>CatalogInventory</code> module provides these services:</p>
            <ul>
               <li>
                  <p><b><a href="#stock-status-service">Stock status service</a></b>. Enables the transfer of stock status data to and from Magento.</p>
               </li>
               <li>
                  <p><b><a href="#stock-item-service">Stock item service</a></b>. Enables the transfer of stock item data to and from Magento.</p>
               </li>
            </ul>
            <p>You can find the modules for the service interfaces in the <code>Magneto/CatalogInventory/Service/V1</code> folder.</p>
            <h2 id="stock-status-service" class="api2">Stock status service</h2>
            <p>The <code>StockStatusServiceInterface</code> class provides the stock status service.</p>
            <p>The stock status service enables you to get the status of the stock for a product, which is <code>in stock</code> or <code>out of stock</code>.</p>
            <p>The stock status service provides these methods that enable you to:</p>
            <ul>
               <li>Get the stock status for one or more products by product ID.</li>
               <li>Get the stock status for one or more products by SKU.</li>
               <li>List low-in-stock products for a specified low stock criteria.</li>
            </ul>
            <h3 id="getproductstockstatus" class="api3">getProductStockStatus</h3>
            <blockquote>
               <pre>getProductStockStatus($productIds, $websiteId, $stockId = Stock::DEFAULT_STOCK_ID)</pre>
            </blockquote>
            <p>Gets the stock status of one or more products specified by product ID.</p>
            <p>Gets product ID and product stock status.</p>
            <h3 id="getproductstockstatusbysku" class="api3">getProductStockStatusBySku</h3>
            <blockquote>
               <pre>getProductStockStatusBySku($sku)</code></pre>
            </blockquote>
            <p>Gets the stock status for a product specified by SKU.</p>
            <h3 id="getlowstockitems" class="api3">getLowStockItems</h3>
            <blockquote>
               <pre>getLowStockItems($lowStockCriteria)</pre>
            </blockquote>
            <p>Lists low-in-stock products for a specified low stock criteria.</p>
            <h2 class="api2" id="stock-item-service">Stock item service</h2>
            <p>The <code>StockItemServiceInterface</code> class provides the stock item service.</p>
            <p>The stock item service enables you to get inventory data for a product based on its ID or SKU, and save inventory changes for a product.</p>
              <p>You can also define the minimum or maximum product quantity that can be added to the shopping cart, get the quantity of a product in a quote, and get the quantity for a product.</p>
               <p>You can enable the quantity increments feature for a product and define the quantity increment value.</p>
              <p>You can define whether stock for a product can be managed, and calculate the product quantity to add to the shopping cart based on certain parameters.</p>
              <p>You can determine whether the in-stock quantity for a product can meet a request, whether the quantity of a product can be set manually, and whether a product is in stock.</p>
              <p>You can subscribe to the out-of-stock product notification.</p>
            <h3 id="getStockItem" class="api3">getStockItem</h3>
            <blockquote>
            <pre>getStockItem($productId)</pre>
            </blockquote>
            <p>Gets inventory data for a product based on its ID.</p>
            <h3 id="getStockItemBySku" class="api3">getStockItemBySku</h3>
             <blockquote><pre>getStockItemBySku($productSku)</pre></blockquote>
            <p>Gets inventory data for a product based on its SKU.</p>
            <h3 id="saveStockItem" class="api3">saveStockItem</h3>
             <blockquote><pre>saveStockItem($stockItem)</pre></blockquote>
            <p>Saves the changes made in the inventory data of a product.</p>
            <h3 id="saveStockItemBySku" class="api3">saveStockItemBySku</h3>
            <blockquote>
            <pre>saveStockItemBySku($productSku, Data\StockItemDetails $stockItemDetailsDo)</pre></blockquote>
            <p>Saves the changes made in the inventory data of a product based on product's SKU.</p>
            <h3 id="getMinSaleQty" class="api3">getMinSaleQty</h3>
            <blockquote><pre>getMinSaleQty($productId)</pre></blockquote>
            <p>Defines the minimum product quantity that you can add to the shopping cart.</p>
            <h3 id="getMaxSaleQty" class="api3">getMaxSaleQty</h3>
            <blockquote><pre>getMaxSaleQty($productId)</pre></blockquote>
            <p>Defines the maximum product quantity that you can add to the shopping cart.</p>
            <h3 id="getEnableQtyIncrements" class="api3">getEnableQtyIncrements</h3>
            <blockquote><pre>getEnableQtyIncrements($productId)</pre></blockquote>
            <p>Enables the quantity increments feature for a product.</p>
            <h3 id="getQtyIncrements" class="api3">getQtyIncrements</h3>
            <blockquote><pre>getQtyIncrements($productId)</pre></blockquote>
            <p>Defines the quantity increment value for a product.</p>
            <h3 id="getManageStock" class="api3">getManageStock</h3>
            <blockquote><pre>getManageStock($productId)</pre></blockquote>
            <p>Defines whether stock for a product can be managed. That is, the quantity, stock status, and other characteristics are enabled for a product.</p>
            <h3 id="suggestQty" class="api3">suggestQty</h3>
            <blockquote><pre>suggestQty($productId, $qty)</pre></blockquote>
            <p>Calculates the product quantity that a buyer is recommended to add to the shopping cart given the minimum and maximum quantity allowed in the cart and the quantity increments value.</p>
            <h3 id="checkQuoteItemQty" class="api3">checkQuoteItemQty</h3>
            <blockquote><pre>checkQuoteItemQty($productId, $qty, $summaryQty, $origQty = 0)</pre></blockquote>
            <p>Gets the product quantity in a quote.</p>
            <h3 id="verifyStock" class="api3">verifyStock</h3>
            <blockquote><pre>verifyStock($productId, $qty = null)</pre></blockquote>
            <p>Determines whether the in-stock product quantity can meet a request.</p>
            <h3 id="verifyNotification" class="api3">verifyNotification</h3>            <blockquote><pre>verifyNotification($productId, $qty = null)</pre></blockquote>
            <p>Subscribes to the out-of-stock product notification.</p>
            <h3 id="getIsInStock" class="api3">getIsInStock</h3>
            <blockquote><pre>getIsInStock($productId)</pre></blockquote>
            <p>Determines whether a product is in stock.</p>
            <h3 id="getStockQty" class="api3">getStockQty</h3>
            <blockquote><pre>getStockQty($productId)</pre></blockquote>
            <p>Gets the product quantity.</p>
            <h3 id="isQty" class="api3">isQty</h3>
            <blockquote><pre>isQty($productTypeId)</pre></blockquote>
            <p>Defines whether the product quantity can be set manually. For instance, unlike for composite products, you can manually specify the quantity for simple, downloadable, virtual products. Except for bundled products with fixed price, the quantity is calculated based on quantity of options encapsulated in a composite product.</p>
            <h3 id="getIsQtyTypeIds" class="api3">getIsQtyTypeIds</h3>
            <blockquote><pre>getIsQtyTypeIds($filter = null)</pre></blockquote>
            <p>Filters products based on whether their quantities can be set manually.</p>

            <h2 id="rest-and-soap-catalog-inventory" class="api2">REST and SOAP API calls</h2>
            <p>The <code>CatalogInventory</code> module also enables you to make certain REST and SOAP API calls.</p>
            <h3 class="api3" id="data-by-sku">getStockItemBySku</h3>
            <p>To get the inventory data for a product, use:</p>
            <ul>
            <li>SOAP. The <code>getStockItemBySku</code> method.</li>
            <li>REST. <code>GET /V1/stockItem/:productSku</code> method.</li>
            </ul>
            <p><b>Input parameters:</b></p>
            <dl>
               <dt><code>productSku</code></dt>
               <dd>The product SKU for which you want to get inventory data.</dd>
            </dl>
            <p><b>Output parameters:</b></p>
            <dl>
               <dt><code>item_id</code></dt>
               <dd>Integer. The item ID. That is, a product exists in different <code>stores/websites/views</code>.</dd>
               <dt><code>product_id</code></dt>
               <dd>Integer. Product ID.</dd>
               <dt><code>stock_id</code></dt>
               <dd>Integer. Stock ID, if there multiple stocks.</dd>
               <dt><code>qty</code></dt>
               <dd>Float. The quantity of a product.</dd>
               <dt><code>min_qty</code></dt>
               <dd>Float. Mininum quantity that indicates that a product is close to being out of stock.</dd>
               <dt><code>use_config_min_qty</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for minimum quantity parameter. 1 is true. 0 is false.</dd>
               <dt><code>is_qty_decimal</code></dt>
               <dd>Boolean. Defines whether a product's quantity is decimal. 1 is true. 0 is false.</dd>
               <dt><code>backorders</code></dt>
               <dd>Boolean. Defines whether the backorders are allowed for a product. 1 is true. 0 is false.</dd>
               <dt><code>use_config_backorders</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the back orders parameter.
               1 is true. 0 is false.</dd>
               <dt><code>min_sale_qty</code></dt>
               <dd>Float. The minimum product quantity that can be added to the shopping cart in the storefront.</dd>
               <dt><code>use_config_min_sale_qty</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the minimum quantity allowed in shopping cart parameter. 1 is true. 0 is false.</dd>
               <dt><code>max_sale_qty</code></dt>
               <dd>Float. The maximum product quantity that that can be added to the shopping cart in the storefront.</dd>
               <dt><code>use_config_max_sale_qty</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the maximum quantity allowed in shopping cart parameter. 1 is true. 0 is false.</dd>
               <dt><code>is_in_stock</code></dt>
               <dd>Boolean. Defines whether a product is in or out of stock. 1 is <b>in stock</b> and 0 is <b>out of stock</b>.</dd>
               <dt><code>low_stock_date</code></dt>
               <dd>String. The date when the general inventory configurations were changed.</dd>
               <dt><code>notify_stock_qty</code></dt>
               <dd>Float. A product quantity that triggers a notification about low stock.</dd>
               <dt><code>use_config_notify_stock_qty</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the notify for quantity below parameter. 1 is true. 0 is false.</dd>
               <dt><code>manage_stock</code></dt>
               <dd>Boolean. Defines whether a stock is managable. 1 is true. 0 is false.</dd>
               <dt><code>use_config_manage_stock</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the manage stock parameter. 1 is true. 0 is false.</dd>
               <dt><code>stock_status_changed_auto</code></dt>
               <dd>Boolean. Defines whether the stock status of a product changes when the minimum quantity parameter in general inventory configurations changes. 1 is true. 0 is false.</dd>
               <dt><code>use_config_qty_increments</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the quantity increments parameter. 1 is true. 0 is false.</dd>
               <dt><code>qty_increments</code></dt>
               <dd>Float. The quantity increments value when a product can be added to the shopping cart in the storefront.</dd>
               <dt><code>use_config_enable_qty_inc</code></dt>
               <dd>Boolean. Defines whether the general configurations are used for the enable quantity increments parameter. 1 is true. 0 is false.</dd>
               <dt><code>enable_qty_increments</code></dt>
               <dd>Boolean. Defines whether the quantity increments feature is enabled for a product. 1 is true. 0 is false.</dd>
               <dt><code>is_decimal_divided</code></dt>
               <dd>Boolean. If a product quantity is decimal, defines whether a product can be shipped in several boxes. 1 is true. 0 is false.</dd>
            </dl>
            <h3 class="api3" id="save-inventory-data-by-sku">saveStockItemBySku</h3>
            <p>To save the changes in the stock data for a product, use:</p>
            <ul>
            <li>SOAP. <code>saveStockItemBySku</code> method.</li>
            <li>REST. <code>POST /V1/stockItem/:productSku</code> method.</li>
            </ul>
            <p><b>Input parameters:</b></p>
            <dt><code>productSku</code></dt>
            <dd>Product SKU for which you want to change the inventory data.</dd>
            <dt><code>qty</code></dt>
            <dd>Quantity of a product.</dd>
            <dt><code>min_qty</code></dt>
            <dd>Quantity of product when it becomes out of stock.</dd>
            <dt><code>is_qty_decimal</code></dt>
            <dd>Defines whether a product quantity can be decimal.</dd>
            <dt><code>backorders</code></dt>
            <dd>Defines whether the backorders are allowed for a product.</dd>
            <dt><code>min_sale_qty</code></dt>
            <dd>The minimum quantity of product allowed to be added to the shopping cart.</dd>
            <dt><code>is_in_stock</code></dt>
            <dd>Whether a product is in stock.</dd>
            <dt><code>low_stock_date</code></dt>
            <dd>The date when the general inventory configurations were changed.</dd>
            <dt><code>notify_stock_qty</code></dt>
            <dd>The product quantity that triggers a notification about low stock.</dd>
            <dt><code>manage_stock</code></dt>
            <dd>Whether a stock should be manageable.</dd>
            <dt><code>stock_status_changed_auto</code></dt>
            <dd>Whether the stock status of a product changes when the minimum quantity parameter in general inventory configurations changes.</dd>
            <dt><code>qty_increments</code></dt>
            <dd>The quantity increments for adding a product to the shopping cart in the storefront.</dd>
            <dt><code>enable_qty_increments</code></dt>
            <dd>Enable the quantity increments feature for a product.</dd>
            <dt><code>is_decimal_devided</code></dt>
            <dd>If a product quantity is decimal, defines whether a product can be shipped in several boxes.</dd>
            </dl>
            <p><b>Output parameters:</b></p>
            <dl>
               <dt><code>item_id</code></dt>
               <dd>String containing ID of a stock item in the database.</dd>
            </dl>
            <h3 id="stock-status-by-sku" class="api3">getProductStockStatusBySku</h3>
            <p>To get the stock status for a product specified by SKU, use:</p>
            <ul>
            <li>SOAP. <code>getProductStockStatusBySku</code> method.</li>
            <li>REST. <code>GET /V1/stockItem/status/:sku</code> method.</li>
            </li>
            <p><b>Input parameter:</b></p>
            <dl>
               <dt><code>sku</code></dt>
               <dd>The SKU of a product for which you want to retrieve its stock status.</dd>
            </dl>
            <p><b>Output parameters:</b></p>
            <dl>
               <dt><code>is_in_stock</code></dt>
               <dd>Boolean. Defines whether a product is in or out of stock. 1 is <b>in stock</b> and 0 is  <b>out of stock</b>.</dd>
               <dt><code>qty</code></dt>
               <dd>Integer. The quantity of a product.</dd>
            </dl>
            <h3 class="api3" id="list-stock-status">getLowStockItems</h3>
            <p>To save the changes in the stock data for a product, use:</p>
            <ul>
            <li>SOAP. <code>getLowStockItems</code> method.</li>
            <li>REST. <code>PUT /V1/stockItem/lowStock/</code> method.</li>
            </ul>
            <p><b>Input parameter:</b></p>
            <dl>
               <dt><code>qty</code></dt>
               <dd>The quantity that suffices to consider a product as 'low in stock'.</dd>
               <dt><code>page_size</code></dt>
               <dd>The size of a page that lists the low-in-stock products.</dd>
               <dt><code>current_page</code></dt>
               <dd>The number of the page that lists the low-in-stock products.</dd>
            </dl>
            <p><b>Output parameters:</b></p>
            <dl>
               <dt><code>items</code></dt>
               <dd>String. List of SKUs of the low-in-stock products.</dd>
               <dt><code>search_criteria</code></dt>
               <dd>String. The search criteria (that is, the input parameters), namely: qty, page_size, current_page.</dd>
               <dt><code>total_count</code></dt>
               <dd>Integer. The total number of the search results.</dd>
            </dl>
            <h2 id="stock-status-exceptions" class="api2">Exceptions</h2>
            <p><code>"No such entity"</code> exception appears for <code>saveStockItemBySku</code> and <code>getProductStockStatusBySku</code> methods when the SKU of a product, for which you want to change the inventory data or the stock status, is not found in the database. </p>
         </div>
      </div>
   </div>
</div>



