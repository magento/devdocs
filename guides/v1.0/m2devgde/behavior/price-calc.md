---
layout: howtom2devgde_chapters
title: How Magento Calculates Prices


---
 
<h1 id="m2devgde-pricecalc">How Magento Calculates Prices</h1>

<h2 id="m2devgde-pricecalc-overview">Overview</h2>
This article provides in-depth information about Magento price calculation logic implemented in the <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing" target="_blank"><code>Magento\Framework\Pricing</code></a> library.

<h2 id="m2devgde-pricecalc-gen">Price Calculation General Flow</h2>

To use the Pricing library for a product (`SaleableItem`), the product model should implement <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/Object/SaleableInterface.php" target="_blank"><code>Magento\Framework\Pricing\Object\SaleableInterface</code></a>.
The implementation of `SaleableItemInterface` gives access to the `PriceInfo` object of a product, which in turn provides all available `Price` objects or `Adjustments` specific to the product.
The `Price` object provides the Amount calculated by applying or excluding `Adjustments`. And finally, calling the `getValue()` method of the `Amount` object returns a float price (number). 

The flow can be illustrated as follows:
<p><img src="{{ site.baseurl }}common/images/price_usage1.png" alt="The diagram SaleableItem to PriceInfoFactory to PriceInfoInterface, from here to Price and to Adjustment, from Price to Adjustment Calculator, from here to Adjustment and to Amount, from Amount to Value"></p>

<h2 id="m2devgde-pricecalc-api">Price Calculation API</h2>
<h3 id="m2devgde-pricecalc-api_adj">AdjustmentInterface</h3>

<a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/Adjustment/AdjustmentInterface.php" target="_blank"><code>Magento\Framework\Pricing\Adjustment\AdjustmentInterface</code></a> contains the business logic responsible for applying adjustment to the `SaleableItem` final price. 

<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input Parameters</th>
      <th>Return Value Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>getAdjustmentCode</code>
      </td>
      <td>-</td>
      <td>
        <code>string</code>
      </td>
      <td>Returns unique adjustment code as used in DI and Layout configurations.</td>
    </tr>
    <tr>
      <td>
        <code>isIncludedInBasePrice</code>
      </td>
      <td>-</td>
      <td>
        <code>boolean</code>
      </td>
      <td>Returns a Boolean flag defining if adjustment amount is included to base price.</td>
    </tr>
    <tr>
      <td>
        <code>isIncludedInDisplayPrice</code>
      </td>
      <td>-</td>
      <td>
        <code> <span>boolean</span> </code>
      </td>
      <td>Returns a Boolean flag defining if adjustment amount should be included in display price.</td>
    </tr>
    <tr>
      <td>
        <code>extractAdjustment</code>
      </td>
      <td>
        <ul>
          <li>
            <code>$amount : float </code>
          </li>
          <li>
            <code>$saleableItem : SaleableInterface</code>
          </li>
        </ul>
      </td>
      <td>
        <code>float</code>
      </td>
      <td>Extracts adjustment from the given amount and returns the result.</td>
    </tr>
    <tr>
      <td>
        <code>applyAdjustment</code>
      </td>
      <td>
        <p>
          <code>$amount : float</code>
        </p>
        <p>
          <code>$saleableItem : SaleableInterface</code>
        </p>
      </td>
      <td>
        <code>float</code>
      </td>
      <td>Adds adjustment amount to the given amount value and returns the resulting value.</td>
    </tr>
    <tr>
      <td>
        <code>isExcludedWith</code>
      </td>
      <td>
        <code>$adjustmentCode : string</code>
      </td>
      <td>
        <code>boolean</code>
      </td>
      <td>Checks if adjustment should be excluded from calculations along with the given adjustment.</td>
    </tr>
    <tr>
      <td>
        <code>getSortOrder</code>
      </td>
      <td>-</td>
      <td>
        <code>integer</code>
      </td>
      <td>Returns the position of the adjustment in the applying adjustments order.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricecalc-calcint"><code>CalculatorInterface</code></h3>

<a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/Adjustment/CalculatorInterface.php" target="_blank"><code>Magento\Framework\Pricing\Adjustment\CalculatorInterface</code></a> prepares `Amount` (applies and extracts adjustments) according to the saleable item (product) configuration.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input Parameters</th>
      <th>Return Value Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>getAmount</code>
      </td>
      <td>
        <ul>
          <li>
            <code>$amount</code>
          </li>
          <li>
            <code>$saleableItem : <span>SaleableInterface</span> </code>
          </li>
          <li>
            <code>$exclude [optional]</code>
          </li>
        </ul>
      </td>
      <td>
        <code>AmountInterface</code>
      </td>
      <td>Retrieves the <code>Amount</code> object based on the given float amount, product and exclude option.<br class="atl-forced-newline"/>It is possible to pass <code>true</code> or adjustment code to exclude all or specific adjustment from an amount.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-calcint-dep">Price Calculator Dependencies</h4>


<table>
  <tbody>
    <tr>
      <th>Class / Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>\Magento\Pricing\Amount\AmountFactory</code> </td>
      <td>Amount objects factory</td>
    </tr>
  </tbody>
</table>
<h3 id="m2devgde-pricecalc-amint">
  <code> AmountInterface</code>
</h3>

<a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/Amount/AmountInterface.php" target="_blank"><code>Magento\Framework\Pricing\Amount\AmountInterface</code></a> is a container of a composite price value information. Price is represented as base amount value and an array of adjustment codes.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Input Parameters</th>
      <th colspan="1">Return Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <p>
          <code>getValue</code>
        </p>
      </td>
      <td>
        <p>
          <code> <span>$exclude : string|array = null</span> </code>
        </p>
      </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td>
        <span>Returns full amount value excluding the specified adjustments.</span>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>__toString</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code>string</code>
      </td>
      <td colspan="1">
        <span>Returns full amount value in string format.</span>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getBaseAmount</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td colspan="1">
        <span>Returns base amount part value.</span>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getAdjustmentAmount</code>
        </p>
      </td>
      <td colspan="1">
        <code> <span>$adjustmentCode : String</span> </code>
      </td>
      <td colspan="1">
        <code>float</code>
      </td>
      <td colspan="1">
        <span>Returns adjustment amount part value by adjustment code.</span>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getTotalAdjustmentAmount</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code> <span>float</span> </code>
      </td>
      <td colspan="1">
        <span>Returns the sum of all applied adjustments.</span>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>getAdjustmentAmounts</code>
        </p>
      </td>
      <td colspan="1"> </td>
      <td colspan="1">
        <code> <span>float</span> </code>
      </td>
      <td colspan="1">
        Return all applied adjustments as array.
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <p>
          <code>hasAdjustment</code>
        </p>
      </td>
      <td colspan="1">
        <code>$adjustmentCode : string</code>
      </td>
      <td colspan="1">
        <code>boolean</code>
      </td>
      <td colspan="1">Checks if the <code>Amount</code> object contains an <code>Adjustment</code>. 
      </td>
    </tr>
  </tbody>
</table>

<h3 id="m2devgde-pricecalc-absprice">AbstractPrice</h3>

<a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/Price/AbstractPrice.php" target="_blank"><code>Magento\Framework\Pricing\Price\AbstractPrice</code></a> is responsible for providing information about specific price type.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>input params</th>
      <th>Return value</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>getValue</code>
      </td>
      <td>-</td>
      <td>
        <code>float|boolean</code>
      </td>
      <td>Returns price value or <code>false</code> if price value cannot be returned.</td>
    </tr>
    <tr>
      <td>
        <code>getAmount</code>
      </td>
      <td>-</td>
      <td>
        <code>float</code>
      </td>
      <td>Gets amount object.</td>
    </tr>
    <tr>
      <td>
        <code>getCustomAmount</code>
      </td>
      <td>
        <ul>
          <li>
            <p class="_mce_tagged_br">
              <code>$amount : float = null</code>
            </p>
          </li>
          <li>
            <p class="_mce_tagged_br">
              <code>$exclude : boolean|string = null</code>
            </p>
          </li>
        </ul>
      </td>
      <td>
        <p>
          <code>AmountInterface|boolean|float</code>
        </p>
      </td>
      <td>Calculates custom amount excluding specified adjustments.</td>
    </tr>
    <tr>
      <td>
        <code>getPriceCode</code>
      </td>
      <td>-</td>
      <td>
        <code>AdjustmentInterface</code>
      </td>
      <td>Gets price code.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-abs-dep"><code>AbstractPrice</code> Dependencies</h4>
<table>
  <tbody>
    <tr>
      <th>Class / Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Object\SaleableInterface</code>
      </td>
      <td>Saleable item (that is Product).</td>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Adjustment\CalculatorInterface</code>
      </td>
      <td>Adjustment calculator.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-pricecalc-abs-type">Price Types</h4>
Every class implementing a price type should extend <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/Price/AbstractPrice.php" target="_blank"><code>Magento\Framework\Pricing\Price\AbstractPrice</code></a>.

<h3 id="m2devgde-pricecalc-abs-priceinfo">PriceInfo</h3>
<a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/Pricing/PriceInfoInterface.php" target="_blank"><code>Magento\Framework\Pricing\PriceInfoInterface</code></a> holds prices and adjustments collections and provides access to them.

<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>input params</th>
      <th>Return value</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>getPrices</code>
      </td>
      <td>-</td>
      <td>
        <code>PriceInterface[]</code>
      </td>
      <td>Gets all prices.</td>
    </tr>
    <tr>
      <td>
        <code>getPrice</code>
      </td>
      <td>
        <code>$priceCode : string</code>
      </td>
      <td>
        <code>PriceInterface</code>
      </td>
      <td>Gets specific price.</td>
    </tr>
    <tr>
      <td>
        <code>getAdjustments</code>
      </td>
      <td>-</td>
      <td>
        <code>AdjustmentInterface[]</code>
      </td>
      <td>Gets all adjustments.</td>
    </tr>
    <tr>
      <td>
        <code>getAdjustment</code>
      </td>
      <td>
        <code>$adjustmentCode : string</code>
      </td>
      <td>
        <code>AdjustmentInterface</code>
      </td>
      <td>Gets specific adjustment.</td>
    </tr>
  </tbody>
</table>
<h4 id="m2devgde-pricecalc-prinfdep">Price Info Dependencies</h4>
<table>
  <tbody>
    <tr>
      <th>Class / Interface</th>
      <th>Comment</th>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Adjustment\Collection</code>
      </td>
      <td>Adjustments collection.</td>
    </tr>
    <tr>
      <td>
        <code>Magento\Framework\Pricing\Price\Collection</code>
      </td>
      <td>Prices collection.</td>
    </tr>
  </tbody>
</table>





<h2 id="m2devgde-pricecalc-intro">Introduction to the Magento Pricing Library</h2> 

Wiki reference: https://wiki.magento.com/display/MAGE2DOC/Price+Calculation+Logic

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Please be patient with us while we map topics from the Magento wiki to Markdown. Or maybe this topic isn't written yet. Check back later.</p></span>
</div>

<h2 id="help">Helpful Aids for Writers</h2>

Writers, use information in this section to get started migrating content then delete the section. You can find this same information <a href="https://github.corp.ebay.com/stevjohnson/internal-documentation/blob/master/markdown-samples/complex-examples.md" target="_blank">here</a>.

### General Markdown Authoring Tips

*	<a href="http://daringfireball.net/projects/markdown/syntax" target="_blank">Daring Fireball</a>
*	<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown cheat sheet</a>
*	<a href="https://wiki.corp.x.com/display/WRI/Markdown+Authoring+Part+2%2C+Markdown+Authoring+Tips" target="_blank">Internal wiki page</a>

### Note, Tip, Important, Caution

There is an example of Note in the first section.

  <div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
    <p>This is important. </p></span>
  </div>
  
<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>This is a tip. </p></span>
</div>

<div class="bs-callout bs-callout-danger" id="danger">
  <img src="{{ site.baseurl }}common/images/icon_caution.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>This is a caution. Use this only in very limited circumstances when discussing:
  <ul class="note"><li>Data loss</li>
  <li>Financial loss</li>
  <li>Legal liability</li></ul></p></span>
</div>

### Tables

There is no good solution right now. Suggest you either use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables" target="_blank">Markdown tables</a> or HTML tables.

HTML table:

<table>
	<tbody>
		<tr>
			<th>Magento 1</th>
			<th>Magento 2</th>
		</tr>
	<tr>
		<td>The Address model contains both display and business logic.</td>
		<td>The Address service has business logic only so interacting with it is simpler.</td>
	</tr>
	<tr>
		<td>Sends a model back to the template. Because the model contains business logic, it's tempting process that logic in your templates. This can lead to confusing code that's hard to maintain.</td>
		<td>Sends only data back to the template. </td>
	</tr>
	<tr>
		<td>The model knows how to render itself so it has to send a <tt>render('html')</tt> call to the block to do that, which makes the coding more complex. </td>
		<td>The data object is rendered by the renderer block. The roles of the renderer block and the model are separate from each other, easier to understand, and easier to implement.</td>
	</tr>
	</tbody>
</table>

### Images

Whether you add a new image or move an image from the wiki, you must store the image in `common/images` using a naming convention discussed <a href="https://wiki.corp.x.com/display/WRI/Markdown+Authoring+Part+1%2C+Getting+Started#MarkdownAuthoringPart1%2CGettingStarted-BestPracticesforNamingMarkdownFilesandImages" target="_blank">here</a>.

To embed the link in a page, use either <a href="http://daringfireball.net/projects/markdown/syntax#img" target="_blank">Markdown</a> or HTML image links, it doesn't matter. Either way, you *should* add alt tags to your images to improve accessibility.

You can also use a title tag to provide a mouseover tooltip; this is recommended for accessiblity (screen readers and so on).You can also use a title tag to provide a mouseover tooltip.

HTML example:

<p><img src="{{ site.baseurl }}common/images/services_service-interaction_addr-book_mage1.png" alt="This is additional information that might help someone who uses a screen reader"></p>

Markdown example using an alt tag:

![Click **System** > **Integrations** to start]({{ site.baseurl }}common/images/integration.png)

### Cross-References

All cross-references should look like the following:

*	Cross-reference to another topic in any of the guides: <a href="{{ site.gdeurl }}m2fedg/css/css-preprocess.html">Understanding Magento 2 CSS Preprocessing</a>
*	Cross-reference to Magento 2 code in the public GitHub: <a href="{{ site.mage2000url }}blob/master/lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a>
*	Cross-reference for the "help us improve this topic" link at the top of every page (only for pages you create yourself): <p><a href="{{ site.githuburl }}m2fedg/fedg-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
* 	Cross-reference to an external site should, IMHO, include `target="_blank"` as in `<a href="http://daringfireball.net/projects/markdown/syntax#img" target="_blank">Markdown</a>`

