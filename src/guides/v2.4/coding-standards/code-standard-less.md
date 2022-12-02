---
group: coding-standards
subgroup: 01_Coding standards
title: Less coding standard
landing-page: Coding standards
menu_title: Less coding standard
menu_order: 8
functional_areas:
  - Standards
redirect_to: https://developer.adobe.com/commerce/php/coding-standards/less/
layout: migrated
---

This standard defines Magento internal requirements for code formatting and style for teams that develop Less and [CSS](https://glossary.magento.com/css) code.

Some parts of Magento code might not comply with this coding standard yet, but we are working to gradually improve this.

This coding standard is optional for third-party Magento developers.

## General rules

### Indentation

Use only spaces for indentation:

*  Tab size: 4 spaces
*  Indent size: 4 spaces
*  Continuation indent: 4 spaces

**Correct**:

```css
.nav {
    .nav-item {
        ...
    }
}
```

### Formatting

#### Braces

Add one space before opening braces and a line break after. Add a line break before closing braces.

**Correct**:

```css
.nav {
    color: @nav__color;
}
```

**Incorrect**:

```css
.nav{color: @nav__color;}
```

#### Selector delimiters

Add a line break after each selector delimiter. Do not add spaces before or after delimiters.

**Correct**:

```css
.nav,
.bar {
    color: @color__base;
}
```

**Incorrect**:

```css
.nav, .bar {
    color: @color__base;
}
```

#### Quotes

Use single quotes.

**Correct**:

```css
.nav {
    content: 'lorem ipsum';
}
```

**Incorrect**:

```css
.nav {
    content: "lorem ipsum";
}
```

#### Combinator indents

Add spaces before and after combinators.

**Correct**:

```css
.nav + .bar {
    color: @bar__color;
}
```

**Incorrect**:

```css
.nav+.bar {
    color: @bar__color;
}

.nav +.bar {
    color: @bar__color;
}

.nav+ .bar {
    color: @bar__color;
}
```

#### Properties line break

Start each property declaration in a new line.

**Correct**:

```css
.nav {
    background-color: @nav__background-color;
    color: @nav__color;
}
```

**Incorrect**:

```css
.nav {
    color: @nav__color; background-color: @nav__background-color;
}
```

#### Properties colon indents

Add space after but not before the colon that separates property names from values.

**Correct**:

```css
.nav {
    color: @nav__color;
}
```

**Incorrect**:

```css
.nav {
    color : @nav__color;
}

.bar {
    color:@bar__color;
}

.item {
    color :@item__color;
}
```

#### End of file

Add a blank line at the end of file.

#### End of selector

Add a blank line after a selector.

**Correct**:

```css
.nav {
    background-color: @nav__background-color;
}

.bar {
    background-color: @bar__background-color;
}
```

**Incorrect**:

```css
.nav {
    background-color: @nav__background-color;
}
.bar {
    background-color: @bar__background-color;
}
```

#### End of the property line

Add a semicolon after property.

**Correct**:

```css
.nav {
    background-color: @nav__background-color;
}
```

**Incorrect**:

```css
.nav {
    background-color: @nav__background-color
}
```

#### !important property

Avoid using the `!important` property if possible. If it is required, add a space before the property.

**Correct:**

```css
.jquery-ui-calendar-item {
    background-color: @nav__background-color !important;
}
```

**Incorrect**:

```css
.jquery-ui-calendar-item {
    background-color: @nav__background-color!important;
}
```

### Comments

First and second level comments must be surrounded by empty lines.
First, second and third level comments should have two spaces after "//". Inline comments should have one space after "//".

**Correct:**

```css
//
//  First level comment
//  _____________________________________________

.nav {
    background-color: @nav__background-color;
}

//
//  Second level comment
//  ---------------------------------------------

.nav {
    background-color: @nav__background-color;
}

//  Comment
.nav {
    //  New line comment
    background-color: @nav__background-color; // ToDo UI: todo inline comment
    color: @nav__color; // inline comment
}
```

### Selectors

#### Types

Magento supports the two most recent versions of all major browsers. Internet Explorer is supported from version 9 and later.

You can use almost all CSS3 selectors: descendants, attributes, pseudo classes, structural, pseudo elements, and so on.

Exception: Avoid the `id` selector.

**Correct**:

```css
.nav {
    ...
}

.nav + bar {
    ...
}

.nav:not(.bar) {
    ...
}
```

**Incorrect**:

```css
#foo {
    ...
}
```

### Classes Naming

#### Standard classes

Class names should be lowercase, start with a letter (except helper classes), words should be separated with dash '-'.

**Correct**:

```css
.nav-bar {
    ...
}
```

**Incorrect**:

```css
.navBar {
    ...
}
```

**Incorrect**: underscore separation

```css
.nav_bar {
    ...
}
```

#### Helper classes

Helper class names should be lowercase and start with underscore ("_").

Some parts of Magento code might not comply with this standard yet. You might still find helper names with no underscores. We are working to gradually remove the inconsistency.

**Example:**

```css
._active {
    ...
}
```

#### Size

Use class names that are as short as possible, but as long as necessary.
Try to convey what class is about while being as brief as possible.

**Correct**:

```css
.nav-bar {
    ...
}
```

**Incorrect**: too long

```css
.navigation-panel-in-footer {
    ...
}
```

**Incorrect**: too short

```css
.nvpf {
    ...
}
```

#### Meaning

Use meaningful, specific class names that reflect the purpose of the element. Class names should not be presentational or cryptic.

**Correct**: specific

```css
.category {
    ...
}
.category-title {
    ...
}
```

**Incorrect**: cryptic

```css
.foo-1901 {
    ...
}
```

**Incorrect**: presentational

```css
.button-green {
    ...
}

.clear {
    ...
}
```

### Selectors naming

#### Type selectors

Avoid qualifying class names with type selectors.

Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.

**Correct**:

```css
.error {
    ...
}
```

**Incorrect**:

```css
div.error {
    ...
}
```

Type selectors must be lowercase.

**Correct**:

```css
.nav > li {
    ...
}
```

**Incorrect**:

```css
.nav > LI {
    ...
}
```

#### Formatting

Write selector in one line, do not use concatenation.

**Correct**:

```css
.product-list-item {
    ...
}
```

**Incorrect**:

```css
.product {
    ...
    &-list {
        ...
        &-item {
            ...
        }
    }
}
```

#### Nesting

Avoid using more than three levels of nesting.

Exceptions are pseudo elements and states.

**Correct**:

```css
.footer {
    ...
    .nav {
        ...
    }
    .nav-list {
        ...
        .nav-list-item {
            ...
        }
    }
}
```

**Incorrect**:

```css
.footer {
    ...
    .nav {
        ...
        .nav-list {
            ...
            .nav-list-item {
                ...
            }
        }
    }
}
```

## Properties

### Sorting

Sort all properties in the alphabetical order. Mixins, variables, and so on should go first.

**Correct**:

```css
.nav {
    background-color: @nav__background-color;
    color: @nav__color;
    text-align: center;
}
```

**Incorrect**:

```css
.nav {
    color: @nav__color;
    text-align: center;
    background-color: @nav__background-color;
}
```

### Shorthand

Use shorthand properties where possible.

CSS offers a variety of shorthand properties that should be used whenever possible, even in cases where only one value is explicitly set.

**Correct**:

```css
border-top: 0;
padding: 0 1em 2em;
```

**Incorrect**:

```css
border-top-style: none;
padding-bottom: 2rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0;
```

### 0 and units

Do not specify units "0" value.

**Correct**:

```css
border-width: 0;
margin: 0;
```

**Incorrect**:

```css
border-width: 0px;
margin: 0rem;
```

### Floating values

Omit leading "0"s in values, use dot instead.

**Correct**:

```css
margin-left: .5rem;
```

**Incorrect**:

```css
margin-left: 0.5rem;
```

### Hexadecimal notation

*  Use lowercase only.
*  Use three-character hexadecimal notation where possible.
*  Avoid using hexadecimal values for color in properties, use only variables instead.

**Correct**:

```css
@nav__color: #fafafa;
@nav-item__color: #f00;
...
color: @nav-item__color;
```

**Incorrect**:

```css
color: #ff0000;
@nav__color: #FAFAFA;
@nav-item__color: red;
```

## Variables

### Location

#### Local variables

If variables are local and used only in a [module](https://glossary.magento.com/module) scope, they should be located in the module file, in the beginning of the general comment.

**Example:** `_module.less`:

```css
...

//
//  Variables
//  _____________________________________________

    //  Colors
@btn__color: @color-brownie;
@btn-primary__color: @color-white;
@btn-secondary__color: @color-white;
...
```

#### Theme variables

If variables are common for several modules they should be specified in the `_theme.less` file.

### Naming

All variable names must be lowercase.

#### Value variables

General model is the following:

```css
@property-name
```

**Examples**:

```css
@primary__color: @color-phoenix;
@indent__base: 2rem;
@border-radius-round: 100%;
```

#### Parameter variables

General model is the following:

```css
@component-element__state__property__modifier
```

Component name must meaningful. It can contain the `primary`, `secondary`, `tertiary` names.

`base` is a modifier.

**Examples**:

```css
@color-orange: '';

@link__hover__color: '';

@nav-element__background-color: '';

@secondary__color: '';

@side-nav__indent__s: '';

@side-nav-el__background-color: '';

@side-nav-el__active__background-color: '';

@side-nav-el__active-focus__background-color: '';

@side-nav-el__active-focus__font-size__xl: '';

@text__color__base: '';
```

## Mixins

### Location

[Theme](https://glossary.magento.com/theme) mixins (except extends) should be located in the `web/css/source` directory. For more details, refer to [Css Theme][].

### Naming

For [mixin](https://glossary.magento.com/mixin) naming apply the class naming rules.

For mixins grouping use the double underscore "__" prefix.

There are common situations when different elements use a similar set of CSS properties.

In a `.css` file, properties are duplicated for each element. In a `.less` file, it is done by reusing the CSS rule - using mixins.

For example, many elements on the page use the same animation. For this, create an `.animation-1` class with a set of animation properties:

**Example:**

```css
.extend__clearfix(...) {
    ...
}

.vendor-prefix__flex-direction(...) {
    ...
}
```

```css
.animation-1 {
    transition: 300ms ease-in-out;
    -moz-transition: 300ms ease-in-out;
    -webkit-transition: 300ms ease-in-out;
    -o-transition: 300ms ease-in-out;
}
```

And then apply this mixin where necessary:

```css
.example-1 {
   .animation-1();
   width: 100%;
}
```

After compiling the `.less` file into a `.css` file, the `.example-1` element has the following:

```css
.animation-1 {
   transition: 300ms ease-in-out;
   -moz-transition: 300ms ease-in-out;
   -webkit-transition: 300ms ease-in-out;
   -o-transition: 300ms ease-in-out;
}
.example-1 {
   transition: 300ms ease-in-out;
   -moz-transition: 300ms ease-in-out;
   -webkit-transition: 300ms ease-in-out;
   -o-transition: 300ms ease-in-out;
   width: 100%;
}
```

### Mixins with parameters

Mixins also accept parameters. When calling these mixins, these parameter values are passed in. When creating this type of mixin, always set default values, since issues may occur when calling the mixin without specifying the parameter value. The example below shows how to create a mixin with parameters based on the example above and shows how to call it:

```css
.animation-1 (
    @animation-speed: 300ms,
    @animation-type: ease-in-out
) {
    transition: @animation-speed @animation-type;
    -moz-transition: @animation-speed @animation-type;
    -webkit-transition: @animation-speed @animation-type;
    -o-transition: @animation-speed @animation-type;
}
.example-1 {
    .animation-1(
        @animation-speed: 1500ms
    );
}
```

Mixin parameters are set in parentheses with default values.

When calling a mixin in parentheses, set the required value of the mixin parameters, if they differ from the default values.

After compiling the `.less` file into a `.css` file, the `.example-1` element will have the following:

```css
.example-1 {
   transition: 1500ms ease-in-out;
   -moz-transition: 1500ms ease-in-out;
   -webkit-transition: 1500ms ease-in-out;
   -o-transition: 1500ms ease-in-out;
}
```

## Extends

### Location

Local extends used only in one file, should be specified in this file.
Extends that are used in several files should be specified in the theme's `source/_extend.less` file.

### Naming

Extend names should start with the `.abs-` prefix.

## `@import` directive

Always add the file [extension](https://glossary.magento.com/extension) of the imported resource.

**Correct**:

```css
@import 'source/lib/_lib.less';
@import (css) 'styles.css';
```

**Incorrect**:

```css
@import 'source/lib/_lib';
@import (css) 'styles';
```

Use single quotes.

**Correct**:

```css
@import 'source/lib/_lib.less';
```

**Incorrect**:

```css
@import "source/lib/_lib.less";
```

<!-- Link definitions -->
[Css Theme]: {{ page.baseurl }}/frontend-dev-guide/css-topics/css-themes.html
