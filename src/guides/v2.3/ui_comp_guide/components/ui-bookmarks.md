---
group: ui-components-guide
title: Bookmarks component
---

The Bookmarks component stores active and changed state of a grid implemented using [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html). It includes the state of filters, columns position, applied sorting, pagination, and so on.

## Configuration options

Option | Description | Type | Default Value
--- | --- | --- | ---
`newViewLabel` | Default label for a new bookmark. | String | New View
`template` | Path to the component’s `.html` template. | String | `ui/grid/controls/bookmarks/bookmarks`
`viewTmpl` | Path to the `.html` template used to render each bookmark in the list. | String | `ui/grid/controls/bookmarks/view`
`defaultIndex` | The index of the default view. | String | `default`
`activeIndex` | The index of the current view. | String | `default`
`viewsArray` | The array of views. | Array | `default`

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [`app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js)
-  [`app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/view.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/view.html)

## Examples

### Integrate Bookmarks component with Listing component

This is an example of how the Bookmarks component integrates with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <listingToolbar>
        ...
        <bookmark name="bookmarks"/>
    </listingToolbar>
    ...
</listing>
```

#### Result

![Bookmarks Component example]({{ site.baseurl }}/common/images/ui_comps/bookmarks-result.png)
