---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: The di.xml file
menu_title: The di.xml file
menu_order: 1
version: 2.0
github_link: extension-dev-guide/build/di-xml-file.md
---

## Overview

The `di.xml` file configures which [dependencies]({{page.baseurl}}extension-dev-guide/depend-inj.html) to inject by the [object manager]({{page.baseurl}}extension-dev-guide/object-manager.html).

## Areas and application entry points

Each module can have a global and area-specific `di.xml` file.
Magento reads all the `di.xml` configuration files declared in the system and merges them all together by appending all nodes.

As a general rule, the area specific `di.xml` files should configure dependencies for the presentation layer, and your module's global `di.xml` file should configure the remaining dependencies.

Magento loads The configuration in the following stages:

1. Initial (`app/etc/di.xml`)
2. Global (`<moduleDir>/etc/di.xml`)
3. Area-specific (`<moduleDir>/etc/<area>/di.xml`)

During [bootstrapping]({{page.baseurl}}config-guide/bootstrap/magento-bootstrap.html), each application entry point loads the appropriate `di.xml` files for the requested [area]({{page.baseurl}}architecture/modules/mod_and_areas.html).

**Examples:**

* In `index.php`, the [`\Magento\Framework\App\Http`](https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/App/Http.php#L130-L132){:target="_blank"} class loads the area based on the front-name provided in url.

* In `static.php`, the [`\Magento\Framework\App\StaticResource`](https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/App/StaticResource.php#L101-L104){:target="_blank"} class also loads the area based on the url in the request.

* In `cron.php`, the [`\Magento\Framework\App\Cron`](https://github.com/magento/magento2/blob/develop/lib/internal/Magento/Framework/App/Cron.php#L68-L70){:target="_blank"} class always loads the 'crontab' area.

## Type configuration

Type configurations describe an object's lifestyle and how to instantiate it.

You can configure the type in your `di.xml` configuration node in the following ways:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <virtualType name="moduleConfig" type="Magento\Core\Model\Config">
        <arguments>
            <argument name="type" xsi:type="string">system</argument>
        </arguments>
    </virtualType>
    <type name="Magento\Core\Model\App">
        <arguments>
            <argument name="config" xsi:type="object">moduleConfig</argument>
        </arguments>
    </type>
</config>
{% endhighlight %}

The preceding example declares the following types:

*	`moduleConfig`: A virtual type that extends the type `Magento\Core\Model\Config`.
*	`Magento\Core\Model\App`: All instances of this type receive an instance of `moduleConfig` as a dependency.

### Virtual types
A virtual type allows you to change the arguments of a specific injectable dependency and change the behavior of a particular class.
This allows you to use a customized class without affecting other classes that have a dependency on the original.

The example creates a virtual type for `Magento\Core\Model\Config` and specifies `system` as the constructor argument for `type`.

## Constructor arguments

You can configure the class constructor arguments in your `di.xml` in the argument node.
The object manager injects these arguments into the class during creation.
The name of the argument configured in the XML file must correspond to the name of the parameter in the constructor in the configured class.

The following example creates instances of `Magento\Core\Model\Session` with the class constructor argument `$sessionName` set to a value of `adminhtml`:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Core\Model\Session">
        <arguments>
            <argument name="sessionName" xsi:type="string">adminhtml</argument>
        </arguments>
    </type>
</config>
{% endhighlight %}

### Argument types

`object`

Node Formats:

: `<argument xsi:type="object">{typeName}</argument>`
: `<argument xsi:type="object" shared="{shared}">{typeName}</argument>`

Creates an instance of `typeName` type and passes it in as an argument.
You can pass any class name, interface name, or virtual type as `typeName`.

Setting the `shared` property defines the lifestyle of a created instance.
See [object lifestyle configuration](#object-lifestyle-configuration).

---

`string`

Node Formats:

: `<argument xsi:type="string">{strValue}</argument>`
: `<argument xsi:type="string" translate="true">{strValue}</argument>`

Magento interprets any value for this argument node as a string.

---

`boolean`

Node Format:

: `<argument xsi:type="boolean">{boolValue}</argument>`

Magento converts any value for this argument node into a boolean value.
See table below:

| Input Type | Data     | Boolean Value |
| ---------- | -------- | ------------- |
| Boolean    | true     | true          |
| Boolean    | false    | false         |
| String     | "true"*  | true          |
| String     | "false"* | false         |
| String     | "1"      | true          |
| String     | "0"      | false         |
| Integer    | 1        | true          |
| Integer    | 0        | false         |

<small>*These String literals are case-sensitive</small>

---

`number`

Node Format:

: `<argument xsi:type="number">{numericValue}</argument>`

Acceptable values for this type include: integers, floats, or [numeric strings](http://us3.php.net/is_numeric){:taget="_blank"}.

---

`init_parameter`

Node Format:

: `<argument xsi:type="init_parameter">{Constant::NAME}</argument>`

This is the global application initialization argument represented by `Constant::NAME`.

---

`const`

Node Format:

: `<argument xsi:type="const">{Constant::NAME}</argument>`

This is the constant value represented by `Constant::NAME`.

---

`null`

Node Format:

: `<argument xsi:type="null"/>`

This indicates a null value.

---

`array`

Node Format:

: ~~~
  <argument xsi:type="array">
    <item name="someKey" xsi:type="<type>">someVal</item>
  </argument>
  ~~~

Magento builds an array with elements corresponding to the items and passes it as the argument.
The array can contain an infinite number of items, and each array item can be of any object type including an array itself.

When Magento merges the configuration files for a given scope, array arguments with the same name get merged into a new array.

When Magento loads a new configuration at a later time, either by a more specific scope or through code, then any array definitions in the new configuration will replace the loaded config instead of merging.

---

**Argument Examples:**

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Example\Type">
        <arguments>
            <!-- Pass simple string -->
            <argument name="stringParam" xsi:type="string">someStringValue</argument>
            <!-- Pass instance of Magento\Some\Type -->
            <argument name="instanceParam" xsi:type="object">Magento\Some\Type</argument>
            <!-- Pass true -->
            <argument name="boolParam" xsi:type="boolean">1</argument>
            <!-- Pass 1 -->
            <argument name="intParam" xsi:type="number">1</argument>
            <!-- Pass application init argument, named by constant value -->
            <argument name="globalInitParam" xsi:type="init_parameter">Magento\Some\Class::SOME_CONSTANT</argument>
            <!-- Pass constant value -->
            <argument name="constantParam" xsi:type="const">Magento\Some\Class::SOME_CONSTANT</argument>
            <!-- Pass null value -->
            <argument name="optionalParam" xsi:type="null"/>
            <!-- Pass array -->
            <argument name="arrayParam" xsi:type="array">
                <!-- First element is value of constant -->
                <item name="firstElem" xsi:type="const">Magento\Some\Class::SOME_CONSTANT</item>
                <!-- Second element is null -->
                <item name="secondElem" xsi:type="null"/>
                <!-- Third element is a subarray -->
                <item name="thirdElem" xsi:type="array">
                    <!-- Subarray contains scalar value -->
                    <item name="scalarValue" xsi:type="string">ScalarValue</item>
                    <!-- and application init argument -->
                    <item name="globalArgument " xsi:type="init_parameter">Magento\Some\Class::SOME_CONSTANT</item>
                </item>
            </argument>
        </arguments>
    </type>
</config>
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="merging-info" markdown="1">
**Merging and Arguments**

During merging, arguments replace other arguments with the same name if their type is different.
If the argument type is the same, then the newer argument replaces the old one.
</div>

### Abstraction-implementation mappings

The object managers uses the abstraction-implementation mappings when the constructor signature of a class requests an object by its interface.
The object manager uses these mappings to determine what the default implementation is for that class for a particular scope.

The `preference` node specifies the default implementation:

{% highlight xml %}
<!--  File: app/etc/di.xml -->
<config>
    <preference for="Magento\Core\Model\UrlInterface" type="Magento\Core\Model\Url" />
</config>
{% endhighlight %}

This mapping is in `app/etc/di/config.xml`, so the object manager injects the `Magento\Core\Model\Url` implementation class wherever there is a request for the `Magento\Core\Model\UrlInterface` in the global scope.

{% highlight xml %}
<!-- File: app/code/core/Magento/Backend/etc/adminhtml/di.xml -->
<config>
    <preference for="Magento\Core\Model\UrlInterface" type="Magento\Backend\Model\Url" />
</config>
{% endhighlight %}

This mapping is in `app/code/core/Magento/Backend/etc/adminhtml/di.xml`, so the object manager injects the `Magento\Backend\Model\Url` implementation class wherever there is a request for the `Magento\Core\Model\UrlInterface` in the admin area.

### Parameter configuration inheritance

Parameters configured for a class type pass on its configuration to its descendant classes.
Any descendant can override the parameters configured for its supertype; that is, the parent class or interface:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Framework\View\Element\Context">
        <arguments>
            <argument name="urlBuilder" xsi:type="object">Magento\Core\Model\Url</argument>
        </arguments>
    </type>
    <type name="Magento\Backend\Block\Context">
        <arguments>
            <argument name="urlBuilder" xsi:type="object">Magento\Backend\Model\Url</argument>
        </arguments>
    </type>
</config>
{% endhighlight %}

In the preceding example, [`Magento\Backend\Block\Context`]({{ site.mage2000url }}app/code/Magento/Backend/Block/Context.php){:target="_blank"} is a descendant of [`Magento\Framework\View\Element\Context`]({{ site.mage2000url }}lib/internal/Magento/Framework/View/Element/Context.php){:target="_blank"}.

The first entry configures all instances of `Magento\Framework\View\Element\Context` as well as its children to pass in [`Magento\Core\Model\Url`]({{ site.mage2000url }}lib/internal/Magento/Framework/Url.php){:target="_blank"} as `$urlBuilder` in their constructors.

The second entry overrides this and configures all instances of `Magento\Backend\Block\Context` to use [`Magento\Backend\Model\Url`]({{ site.mage2000url }}app/code/Magento/Backend/Model/Url.php){:target="_blank"} as the `$urlBuilder` instead.

## Object lifestyle configuration

The lifestyle of an object determines the number of instances that can exist of that object.

You can configure dependencies in Magento to have the following lifestyles:

*	**singleton**(default) - One instance of this class exists. The object manager creates it at the first request.
Requesting the class again returns the same instance.
Disposing or ending the container registered to it releases the instance.
*	**transient** - The object manager creates a new instance of the class for every request.

The `shared` property determines the lifestyle of both `argument` and `type` configurations.

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Filesystem" shared="false">
        <arguments>
            <argument name="adapter" xsi:type="object" shared="false">Magento\Filesystem\Adapter\Local</argument>
        </arguments>
    </type>
</config>
{% endhighlight %}

In this example `Magento\Filesystem` is not shared, so all clients will retrieve separate instances of `Magento\Filesystem`.
Also, every instance of `Magento\Filesystem` will get separate instance of `$adapter`, because it too is non-shared.

**Related topics**

* [ObjectManager]({{page.baseurl}}extension-dev-guide/object-manager.html)
* [Dependency injection]({{page.baseurl}}extension-dev-guide/depend-inj.md)
