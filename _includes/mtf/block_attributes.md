<div markdown="1">

See the `block` node attributes details in the following table:

|`block` attribute | Description | Is required|Values| Example|
|---|---|---|---|---|
|`name`| Name of the block| Required|Unique in the page. The method to get the block class instance is generated using this value.|`widgetGrid`|
|`class`| Full name of the block class |Required| Class name |`Magento\Widget\Test\Block\Adminhtml\Widget\WidgetGrid` |
|`locator`| CSS selector or XPath locator of the block|Required|[CSS Selectors](http://www.w3.org/TR/selectors/), <a href="http://www.w3.org/TR/xpath-31/">XPath</a>|CSS: `#widgetInstanceGrid`, XPath: `//*[@id="widgetInstanceGrid"]`|
|`strategy` |Selector strategy| Required|`css selector` or `xpath`| `css selector`|

</div>