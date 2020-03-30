---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Collapsible widget
---

The Magento collapsible widget converts a header/content pair into an accordion, where the content is collapsed or expanded on the header click.

Unlike the accordion widget which is initialized for a set of title/contents pairs, the collapsible widget is initialized for one title/content pair.

To "bind" several instances of a collapsible widget, the [`collateral`] option is used.

Once it is expanded, the content can be updated using Ajax. The collapsed/expanded state can be saved into local storage, or cookies if the browser does not support local storage.

The collapsible widget source is [lib/web/mage/collapsible.js].

## Initialize collapsible in JS {#collaps_init_js}

Generally the collapsible widget is instantiated like following:

```javascript
$("#element").collapsible();
```

Where `#element` is the element's selector.

If you need to be able to save the expanded/collapsed state, the element must have the `id` attribute specified.

The element's `id` is also used in deep linking: if the `id` of the content or the `id` of the element that appends the content is specified as an anchor, the content for that element is automatically expanded.

Similar to the accordion widget, the header, title and content for collapsible can be defined by the child elements' attributes or passed as widget options. See [Accordion widget initialization] for details.

### Initialize collapsible with header only

You can initialize the collapsible widget without having a container that consists of a header and a content. In this case the initialization is made on the header:
```javascript
$("#header").collapsible();
```

## Initialize collapsible in a template

The collapsible widget can be initialized using the `data-mage-init` attribute or `<script>` tag, as described in [JavaScript initialization].

## Options

The collapsible widget has the following options:

-  [active](#fedg_collaps_active)
-  [ajaxUrlElement](#fedg_collaps_ajaxUrlElement)
-  [ajaxContent](#fedg_collaps_ajaxContent)
-  [animate](#fedg_collaps_animate)
-  [collapsible](#fedg_collaps_collapsible)
-  [collateral](#fedg_collaps_collateral)
-  [content](#fedg_collaps_content)
-  [closedState](#fedg_collaps_closedState)
-  [disabled](#fedg_collaps_disabled)
-  [disabledState](#fedg_collaps_disabledState)
-  [header](#fedg_collaps_header)
-  [icons](#fedg_collaps_icons)
-  [loadingClass](#fedg_collaps_loadingClass)
-  [openedState](#fedg_collaps_openedState)
-  [saveState](#fedg_collaps_saveState)
-  [trigger](#fedg_collaps_trigger)

### `active` {#fedg_collaps_active}
Specifies if the content should be expanded when the widget gets initialized.

**Type**: Boolean

**Default value**: false

Initialize the collapsible with the active option specified:
```javascript
$("#element").collapsible({ active: true});
```

Get or set the active option, after initialization:
```javascript
//getter
var active = $("#element").collapsible("option","active");

//setter
$("#element").collapsible("option","active",false);
```

### `ajaxUrlElement` {#fedg_collaps_ajaxUrlElement}
Selector applied on the header using `.find()`, for the element that contains the URL for Ajax request.

**Type**: String

**Default value**: `[data-ajax=true]`

### `ajaxContent` {#fedg_collaps_ajaxContent}
Specifies if the content is updated using Ajax request.

**Type**: Boolean

**Default value**: `false`

### `animate` {#fedg_collaps_animate}
Specifies if the collapse/expand actions are performed with animation.

**Type**:
Multiple types are supported:

-  Boolean: the `false` value disables the animation
-  Number: duration in milliseconds
-  String: is parsed to an object as a json string
-  Object: For details about the object passed, see [jQuery.animate()](http://api.jquery.com/animate/).

   ```javascript
       {
          duration: <Number>,
          easing: <String>,
          <propToAnimate>: <howToAnimate>
       }
   ```

**Default value**: `false`

Initialize the collapsible with the animate option specified:

```javascript
$("#element").collapsible({ animate: 1000});
$("#element").collapsible({ animate: {duration:1000,easing:"easeOutCubic"});
```

Get or set the animate option, after initialization:

```javascript
//getter
var animate = $("#element").collapsible("option","animate");

//setter
$("#element").collapsible("option","animate",false);
```

### `collapsible` {#fedg_collaps_collapsible}

If this option is set to false, the content is not collapsed when the panel is active.

**Type**: Boolean

**Default value**: true

Initialize the collapsible widget with the `collapsible` option specified:
```javascript
$("#element").collapsible({ collapsible: true});
```

Get or set the `collapsible` option after initialization:

```javascript
//getter
var collapsible = $("#element").collapsible("option","collapsible");

//setter
$("#element").collapsible("option","collapsible",false);
```

### `collateral` {#fedg_collaps_collateral}

Specifies the element, and the class which is assigned to this element, when the current element is opened; and is removed when the current element is closed.

An object that contains the following:

-  `element`: an element, can be a selector or jQuery object.
-  `openedState`: the class name which is assigned to the element when the current element is in opened; removed when the current element is closed.

**Type**: String

**Default value**:
```javascript
{
    element: null,
    openedState: null
}
```

### `content` {#fedg_collaps_content}

Selector for the content element, searched for using `.find()` on the main collapsible element.

**Type**:

-  String
-  jQuery Object

**Default value**: `[data-role=content]`

Initialize the collapsible with the content option specified:

```javascript
$("#element").collapsible({ content: ".content"});
```

Get or set the content option, after initialization:
```javascript
//getter
var content = $("#element").collapsible("option","content");

//setter
$("#element").collapsible("option","content",".content");
```

### `closedState` {#fedg_collaps_closedState}
Specifies the class that is assigned to the main collapsible element, when the content gets collapsed.

**Type**: String

**Default value**: `null`

Initialize the collapsible widget with the `closedState` option specified:
```javascript
$("#element").collapsible({ closedState: "collapsible-content"});
```

Get or set the `contentClass` option after initialization:

```javascript
//getter
var contentClass = $("#element").collapsible("option","contentClass");

//setter
$("#element").collapsible("option","contentClass","collapsible-content");
```

### `disabled` {#fedg_collaps_disabled}
Specifies if the content should be disabled, when the widget gets initialized.

**Type**: Boolean

**Default value**: `false`

Initialize the collapsible widget with the `disabled` option specified:
```javascript
$("#element").collapsible({ disabled: true});
```

Get or set the `disabled` option after initialization:
```javascript
//getter
var disabled = $("#element").collapsible("option","disabled");

//setter
$("#element").collapsible("option","disabled",false);
```

### `disabledState` {#fedg_collaps_disabledState}
Specifies the class that is assigned to the main collapsible element when a panel gets disabled.

**Type**: String

**Default value**: `null`

Initialize the collapsible with the `disabledState` option specified:
```javascript
$("#element").collapsible({ disabledState: "disabled"});
```

Get or set the disabledState option after initialization:
```javascript
//getter
var disabledState = $("#element").collapsible("option","disabledState");

//setter
$("#element").collapsible("option","disabledState","disabled");
```

### `header` {#fedg_collaps_header}

Selector for the header element, searched for using `.find()` on the main collapsible element. If the element with the specified selector is not found on the main collapsible element, the main element becomes a header.

**Type**:

-  String
-  jQuery Object

**Default value**: `[data-role=title]`

Initialize the collapsible with the content option specified:

```javascript
$("#element").collapsible({ header: ".header"});
```

Get or set the header option, after initialization:

```javascript
//getter
var header = $("#element").collapsible("option","header");

//setter
$("#element").collapsible("option","header",".header");
```

### `icons` {#fedg_collaps_icons}
The classes for icons to be used in headers. If no classes are specified, icons are not be created. A new span is created and appended to the header, the classes for this span are automatically changed whenever the content gets expanded/collapsed.

**Type**: String

**Default value**: `{ activeHeader: null, header: null }`

Initialize the collapsible with the `icons` option specified:
```javascript
$("#element").collapsible({ icons: {"header": "plus", "activeHeader": "minus"}});
```

Get or set the icons option, after initialization:

```javascript
//getter
var icons = $("#element").collapsible("option","icons");

//setter
$("#element").collapsible("option","icons",{"header": "plus", "activeHeader": "minus" });
```

### `loadingClass` {#fedg_collaps_loadingClass}
Specifies the class that is assigned to the main collapsible element when requesting data using Ajax.

**Type**: String

**Default value**: `null`

Initialize the collapsible with the `loadingClass` option specified:
```javascript
$("#element").collapsible({ loadingClass: "loading"});
```

Get or set the `loadingClass` option after initialization:
```javascript
//getter
var loadingClass = $("#element").collapsible("option","loadingClass");

//setter
$("#element").collapsible("option","loadingClass","loading");
```

Initialize the collapsible with the `loadingClass` option specified:
```javascript
$("#element").collapsible({ loadingClass: ".ajax"});
```

Get or set the `loadingClass` option, after initialization:
```javascript
//getter
var content = $("#element").collapsible("option","loadingClass");

//setter
$("#element").collapsible("option","loadingClass","ajax");
```

Initialize the collapsible with the `ajaxContent` option specified:
```javascript
$("#element").collapsible({ ajaxContent: true});
```

Get or set the ajaxContent option after initialization:
```javascript
//getter
var active = $("#element").collapsible("option","ajaxContent");

//setter
$("#element").collapsible("option","ajaxContent",true);
```

### `openedState` {#fedg_collaps_openedState}
Specifies the class that is assigned to the main collapsible element when the content gets expanded.

**Type**: String

**Default value**: `null`

Initialize the collapsible with the `openedState` option specified:
```javascript
$("#element").collapsible({ openedState: "opened"});
```

Get or set the `openedState` option after initialization:
```javascript
//getter
var openedState = $("#element").collapsible("option","openedState");

//setter
$("#element").collapsible("option","openedState","opened");
```

### `saveState` {#fedg_collaps_saveState}
Specifies if the state is saved in the local storage if the browser supports it. Otherwise is saved into a cookie.

**Type**: Boolean

**Default value**: `false`

Initialize the collapsible widget with the `saveState` option specified:
```javascript
$("#element").collapsible({ saveState: true});
```

Get or set the `saveState` option after initialization:
```javascript
//getter
var active = $("#element").collapsible("option","saveState");

//setter
$("#element").collapsible("option","saveState",true);
```

### `trigger` {#fedg_collaps_trigger}

Selector for the trigger element, applied using `.find()` on the main collapsible element. If the trigger is not found, the header becomes a trigger.

**Type**:

-  String
-  jQuery Object

**Default value**: `[data-role=trigger]`

Initialize the collapsible with the trigger option specified:
```javascript
$("#element").collapsible({ trigger: ".trigger"});
```

Get or set the trigger option after initialization:
```javascript
//getter
var trigger = $("#element").collapsible("option","trigger");

//setter
$("#element").collapsible("option","trigger",".trigger");
```

## Methods {#collaps_methods}

-  [activate()](#collaps_activate)
-  [deactivate()](#collaps_deactivate)
-  [disable()](#collaps_disable)
-  [enable()](#collaps_enable)
-  [forceActivate()](#collaps_forceActivate)
-  [forceDeactivate()](#collaps_forceDeactivate)

### `activate()` {#collaps_activate}
Expand the content when this method is called.

This method does not accept any arguments.

Invoke the activate method:
```javascript
$("#element").collapsible("activate");
```

### `deactivate()` {#collaps_deactivate}
Collapse the content when this method is called.

This method does not accept any arguments.

Invoke the deactivate method:
```javascript
$("#element").collapsible("deactivate");
```

### `disable()` {#collaps_disable}
Disable the panel.
This method does not accept any arguments.

Invoke the disable method:
```javascript
$("#element").collapsible("disable");
```

### `enable()` {#collaps_enable}
Enable the panel.

This method does not accept any arguments.

Invoke the enable method:
```javascript
$("#element").collapsible("enable");
```

### `forceActivate()` {#collaps_forceActivate}
Expand the content without animation when this method is called.

This method does not accept any arguments.

Invoke the `forceActivate` method:
```javascript
$("#element").collapsible("forceActivate");
```

### `forceDeactivate()` {#collaps_forceDeactivate}
Collapse the content without animation when this method is called.

This method does not accept any arguments.

Invoke the `forceDeactivate` method:
```javascript
$("#element").collapsible("forceDeactivate");
```

## Events {#collapsible_events}

### `beforeOpen callback` {#c_beforeOpen}
Called before the content is opened.

Example of adding a callback to `beforeOpen` events:

```javascript
$("#element").on("beforeOpen", function () {
    // do something before opening the content
});
```

### `dimensionsChanged` {#c_dimensionsChanged}
Called after content is opened or closed.

Example of adding a callback to `dimensionsChanged` events:

```javascript
$("#element").on("dimensionsChanged", function (event, data) {
    var opened = data.opened;

    if (opened) {
        // do something when the content is opened
        return;
    }

    // do something when the content is closed
});
```

#### Code sample

The following example shows how to initialize the collapsible widget and pass options during the initialization.

```html
<div data-mage-init='{
    "collapsible":{
        "collapsible": true,
        "openedState": "active",
        "active": true
    }}'>
    <div data-role="title">
        <h4>Fruit</h4>
    </div>
    <div data-role="content">
        <ul>
            <li>Orange</li>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </div>
</div>
<div data-mage-init='{
    "collapsible":{
        "animate":{ "duration" :1000, "easing":"easeOutCubic"}
    }}'>
    <div data-role="title">
        <h4>Exams</h4>
    </div>
    <div data-role="content">
        <ul>
            <li>Maths</li>
            <li>English</li>
            <li>Science</li>
        </ul>
    </div>
</div>
```

### Result

The result is two sections with separate collapsible content.

![Collapsible Widget]({{ site.baseurl }}/common/images/widget/collapsible-widget-result-initial.png)
![Collapsible Widget]({{ site.baseurl }}/common/images/widget/collapsible-widget-result-animate.png)

[`collateral`]: #fedg_collaps_collateral
[lib/web/mage/collapsible.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/collapsible.js
[Accordion widget initialization]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_accordion.html#accordion_init
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html#data_mage_init
