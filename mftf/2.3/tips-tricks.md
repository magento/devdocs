---
title: MFTF Tips and Tricks
---

Sometimes, little changes can make a big difference in your project. Here are some test writing tips to keep everything running smoothly.

<!-- {% raw %} -->

## Use descriptive variable names

Use descriptive variable names to increase readability.
It makes the code easier to follow and update.

 {:style="color:green"}
GOOD:

```xml
<element name="storeName" type="checkbox" selector="//label[contains(text(),'{{storeName}}')]" parameterized="true"/>
```

{:style="color:red"}
BAD:

```xml
<element name="storeName" type="checkbox" selector="//label[contains(text(),'{{var1}}')]" parameterized="true"/>
```

## Always specify a default value for action group arguments

Whenever possible, specify a `defaultValue` for action group arguments.

{:style="color:green"}
GOOD:

```xml
<actionGroup name="StorefrontAssertProductImagesOnProductPageActionGroup">
    <arguments>
        <argument name="productImage" type="string" defaultValue="Magento_Catalog/images/product/placeholder/image.jpg" />
    </arguments>
    <waitForElementNotVisible selector="{{StorefrontProductMediaSection.gallerySpinner}}" stepKey="waitGallerySpinnerDisappear" />
    <seeElement selector="{{StorefrontProductMediaSection.gallery}}" stepKey="seeProductGallery" />
    <seeElement selector="{{StorefrontProductMediaSection.productImage(productImage)}}" stepKey="seeProductImage" />
    <click selector="{{StorefrontProductMediaSection.productImage(productImage)}}" stepKey="openFullscreenImage" />
    <waitForPageLoad stepKey="waitForGalleryLoaded" />
    <seeElement selector="{{StorefrontProductMediaSection.productImageFullscreen(productImage)}}" stepKey="seeFullscreenProductImage" />
    <click selector="{{StorefrontProductMediaSection.closeFullscreenImage}}" stepKey="closeFullScreenImage" />
    <waitForPageLoad stepKey="waitForGalleryDisappear" />
</actionGroup>
```

{:style="color:red"}
BAD:

```xml
<actionGroup name="StorefrontAssertProductImagesOnProductPageActionGroup">
    <arguments>
        <argument name="productImage" type="string" />
    </arguments>
    <waitForElementNotVisible selector="{{StorefrontProductMediaSection.gallerySpinner}}" stepKey="waitGallerySpinnerDisappear" />
    <seeElement selector="{{StorefrontProductMediaSection.gallery}}" stepKey="seeProductGallery" />
    <seeElement selector="{{StorefrontProductMediaSection.productImage(productImage)}}" stepKey="seeProductImage" />
    <click selector="{{StorefrontProductMediaSection.productImage(productImage)}}" stepKey="openFullscreenImage" />
    <waitForPageLoad stepKey="waitForGalleryLoaded" />
    <seeElement selector="{{StorefrontProductMediaSection.productImageFullscreen(productImage)}}" stepKey="seeFullscreenProductImage" />
    <click selector="{{StorefrontProductMediaSection.closeFullscreenImage}}" stepKey="closeFullScreenImage" />
    <waitForPageLoad stepKey="waitForGalleryDisappear" />
</actionGroup>
```

## Build tests from action groups

Build your tests using action groups, even if an action group contains a single action.
For extension developers, this will make it easier to extend or customize tests.
Extending a single action group will update all tests that use this group.
This improves maintainability as multiple instances of a failure can be fixed with a single action group update.

{:style="color:green"}
GOOD:

```xml
<test name="NavigateClamberWatchEntityTest">
    <annotations>
        <!--some annotations-->
    </annotations>

    <actionGroup ref="StorefrontOpenProductPageActionGroup" stepKey="openProductPage">
        <argument name="productUrl" value="{{ClamberWatch.url_key}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductNameOnProductPageActionGroup" stepKey="assertProductName">
        <argument name="productName" value="{{ClamberWatch.name}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductSkuOnProductPageActionGroup" stepKey="assertProductSku">
        <argument name="productSku" value="{{ClamberWatch.sku}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductPriceOnProductPageActionGroup" stepKey="assertProductPrice">
        <argument name="productPrice" value="{{ClamberWatch.price}}" />
    </actionGroup>
    <actionGroup ref="StorefrontAssertProductImagesOnProductPageActionGroup" stepKey="assertProductImage">
        <argument name="productImage" value="{{ClamberWatch.image}}" />
    </actionGroup>
</test>
```

{:style="color:red"}
BAD:

```xml
<test name="NavigateClamberWatchEntityTest">
    <annotations>
                <!--some annotations-->
    </annotations>

    <amOnPage url="{{StorefrontProductPage.url(ClamberWatch.url_key)}}" stepKey="openProductPage"/>
    <see selector="{{StorefrontProductInfoMainSection.productName}}" userInput="{{ClamberWatch.name}}" stepKey="seeProductName" />
    <see selector="{{StorefrontProductInfoMainSection.productSku}}" userInput="{{ClamberWatch.sku}}" stepKey="seeProductSku" />
    <see selector="{{StorefrontProductInfoMainSection.price}}" userInput="{{ClamberWatch.price}}" stepKey="seeProductPrice" />
    <waitForElementNotVisible selector="{{StorefrontProductMediaSection.gallerySpinner}}" stepKey="waitGallerySpinnerDisappear" />
    <seeElement selector="{{StorefrontProductMediaSection.gallery}}" stepKey="seeProductGallery" />
    <seeElement selector="{{StorefrontProductMediaSection.productImage(ClamberWatch.productImage)}}" stepKey="seeProductImage" />
    <click selector="{{StorefrontProductMediaSection.productImage(ClamberWatch.productImage)}}" stepKey="openFullscreenImage" />
    <waitForPageLoad stepKey="waitForGalleryLoaded" />
    <seeElement selector="{{StorefrontProductMediaSection.productImageFullscreen(ClamberWatch.productImage)}}" stepKey="seeFullscreenProductImage" />
</test>
```

## Build selectors in proper order

When building selectors for form elements, start with the parent context of the form element.
Then specify the element `name` attribute in your selector to ensure the correct element is targeted.

To build selector for an input, use the pattern: `{{section_selector}} {{input_selector}}` or for a button: `{{section_selector}} {{button_selector}}`

Example:
```xml
<div class="admin__field _required" data-bind="css: $data.additionalClasses, attr: {'data-index': index}, visible: visible" data-index="name">
    <div class="admin__field-label" data-bind="visible: $data.labelVisible">
        <span data-bind="attr: {'data-config-scope': $data.scopeLabel}, i18n: label" data-config-scope="[STORE VIEW]">Product Name</span>
    </div>
    <div class="admin__field-control" data-bind="css: {'_with-tooltip': $data.tooltip, '_with-reset': $data.showFallbackReset && $data.isDifferedFromDefault}">
        <input class="admin__control-text" type="text" name="product[name]" aria-describedby="notice-EXNI71H" id="EXNI71H" maxlength="255" data-bind="
            attr: {
                name: inputName,
                placeholder: placeholder,
                maxlength: 255}"/>
    </div>
</div>
```

{:style="color:green"}
GOOD:

```xml
<element name="productName" type="input" selector="*[data-index='product-details'] input[name='product[name]']"/>
```

{:style="color:red"}
BAD:

```xml
<element name="productName" type="input" selector=".admin__field[data-index=name] input"/>
```

## Use descriptive stepKey names

Make `stepKeys` descriptive as possible. This helps with readability and clarity.
Do not use numbers to make a `stepKey` unique.

{:style="color:green"}
GOOD:

```xml
<click selector="{{StorefrontNavigationSection.topCategory(SimpleSubCategory.name)}}" stepKey="clickSimpleSubCategoryLink" />
<waitForPageLoad stepKey="waitForSimpleSubCategoryPageLoad" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(SimpleProduct.urlKey)}}" stepKey="clickSimpleProductLink" />
<waitForPageLoad stepKey="waitForSimpleProductPageLoad" />

<!-- Perform some actions / Assert product page -->

<click selector="{{StorefrontNavigationSection.topCategory(CustomCategory.name)}}" stepKey="clickCustomCategoryLink" />
<waitForPageLoad stepKey="waitForCustomCategoryPageLoad" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(CustomSimpleProduct.urlKey)}}" stepKey="clickCustomSimpleProductLink" />
<waitForPageLoad stepKey="waitForCustomSimpleProductPageLoad" />
```


{:style="color:red"}
BAD:
```xml
<click selector="{{StorefrontNavigationSection.topCategory(SimpleSubCategory.name)}}" stepKey="clickCategoryLink1" />
<waitForPageLoad stepKey="waitForPageLoad1" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(SimpleProduct.urlKey)}}" stepKey="clickProductLink1" />
<waitForPageLoad stepKey="waitForPageLoad2" />

<!-- Perform some actions / Assert product page -->

<click selector="{{StorefrontNavigationSection.topCategory(CustomCategory.name)}}" stepKey="clickCategoryLink2" />
<waitForPageLoad stepKey="waitForPageLoad3" />
<click selector="{{StorefrontCategoryMainSection.productLinkByHref(CustomSimpleProduct.urlKey)}}" stepKey="clickProductLink2" />
<waitForPageLoad stepKey="waitForPageLoad4" />
```

**Exception:**

Use numbers in stepKeys when order is important, such as with testing sort order.

```xml
<createData entity="BasicMsiStock1" stepKey="createCustomStock1"/>
<createData entity="BasicMsiStock2" stepKey="createCustomStock2"/>
<createData entity="BasicMsiStock3" stepKey="createCustomStock3"/>
<createData entity="BasicMsiStock4" stepKey="createCustomStock4"/>
```

## Do not use click with checkboxes

When working with input type `checkbox`, do not use the `click` action; use `checkOption` or `uncheckOption` instead.

{:style="color:green"}
GOOD:

```xml
<checkOption selector="{{ProductInWebsitesSection.website('Second Website')}}" stepKey="selectSecondWebsite"/>
<uncheckOption selector="{{ProductInWebsitesSection.website('Second Website')}}" stepKey="unselectSecondWebsite"/>
```

{:style="color:red"}
BAD:

```xml
<click selector="{{ProductInWebsitesSection.website('Second Website')}}" stepKey="selectSecondWebsite"/>
<click selector="{{ProductInWebsitesSection.website('Second Website')}}" stepKey="unselectSecondWebsite"/>
```

<!-- {% endraw %} -->