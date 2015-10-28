
## Main client-side properties of a UI component ##
The most important client-side properties of a UI component are the following:


- <code>component</code>: the path to the JavaScript implementation of a component 
path in terms of RequireJS. JS component should return Class. 

	Example:

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}


 - template: path to the html template.The html template is based on top of Knockout

	Example:

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="template" xsi:type="string">ui/grid/controls/bookmarks/bookmarks.html</item>
</argument>
{% endhighlight xml%}

</li>
<li>
children -  is a fantom property that contains nested/linked components. In the xml configuration, all nodes that are not <argument/> are children.
in Knockout JS templates children  -  keys of the `elems` property 
</li>
</ul>