---
layout: default
group: coding-standards
subgroup: Coding standards
title: Less coding standard
menu_title: Less coding standard
menu_order: 7
github_link: coding-standards/code-standard-less.md
---
# Less Coding Standard

This standard defines Magento requirements for code formatting and style for teams that develop LESS and CSS code. 

Some parts of Magento code might not comply with this coding standard.

This coding standard is optional for third-party Magento developers.

## General rules

### Indentation

Use spaces instead tabs:

* Tab size: 4 spaces
* Indent size: 4 spaces
* Continuation indent: 4 spaces

{% highlight css %}
```
    .nav {
        .nav-item {
            ...
        }
    }
```
{% endhighlight%}

### Formatting

#### Braces

Add space before opening brace and line break after. And line break before closing brace.

##### Not recommended:
```
    .nav{color: @nav__color;}
```

##### Recommended:

```
    .nav {
        color: @nav__color;
    }
```

#### Selector delimiters

Add line break after each selector delimiter. Delimeter shouldn't have spaces before and after.

##### Not recommended:

```
    .nav, .bar {
        color: @color__base;
    }
```

##### Recommended:

```
    .nav,
    .bar {
        color: @color__base;
    }
```

#### Quotes

Use single quotes.

##### Not recommended:

```
    .nav {
        content: "lorem ipsum";
    }
```

##### Recommended:

```
    .nav {
        content: 'lorem ipsum';
    }
```

#### Combinator indents

Use spaces before and after combinators.

##### Not recommended:

```
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

##### Recommended:

```
    .nav + .bar {
        color: @bar__color;
    }
```

#### Properties line break

Use line break for each property declaration.

##### Not recommended:

```
    .nav {
        color: @nav__color; background-color: @nav__background-color;
    }
```

##### Recommended:

```
    .nav {
        background-color: @nav__background-color;
        color: @nav__color;
    }
```

#### Properties colon indents

Use no space before property colon, and space after.

##### Not recommended:

```
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

##### Recommended:

```
    .nav {
        color: @nav__color;
    }
```

#### End of file

Each less file should be finished with new line.

#### End of the selector

Each selector should be finished with new line.

##### Not recommended:

```css
    .nav {
        background-color: @nav__background-color;
    }
    .bar {
        background-color: @bar__background-color;
    }
```

##### Recommended:

```css
    .nav {
        background-color: @nav__background-color;
    }

    .bar {
        background-color: @bar__background-color;
    }
```

#### End of the property line

Each property should be finished with semicolon.

##### Not recommended:

```
    .nav {
        background-color: @nav__background-color
    }
```

##### Recommended:

```
    .nav {
        background-color: @nav__background-color;
    }
```

#### !important property

Basically avoid use this property at all, but if you really really need it use the following format:

##### Not recommended:

```
    .jquery-ui-calendar-item {
        background-color: @nav__background-color!important;
    }
```

##### Recommended:

```
    .jquery-ui-calendar-item {
        background-color: @nav__background-color !important;
    }
```

### Comments

Please follow the next format of comments:
First and second level comment should have an empty line before and after the comment. 
First, second and third level comment should have 2 spaces after "//" before the text. Inline comment should have 1 space after "//" before the text.

```
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

According to browser support standards the oldest browser that we support is IE9+, it means that you can feel free to use almost all CSS3 selectors: descendants, attributes, pseudo classes, structural, pseudo elements, etc.
Exeption: Please avoid to use id selector.

##### Not recommended:

```
    #foo {
        ...
    }
```

##### Recommended:

```
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

### Naming

#### Standard classes

All classes should be written in lowercase, starts with letter (exept helper classes), words in classes should be separated with dash (minus sign '-').

##### Not recommended:

```
    .navBar {
       ...
    }
```

##### Not recommended: underscore separation

```
    .nav_bar {
       ...
    }
```

##### Recommended:

```
    .nav-bar {
        ...
    }
```

#### Helper classes

Helper classes should be written in lowercase, starts with underscore ("_").

##### Example:

```
    ._active {
        ...
    }
```

### Size

Use class names that are as short as possible but as long as necessary.
Try to convey what class is about while being as brief as possible.
Using class names this way contributes to acceptable levels of understandability and code efficiency.

##### Not recommended: too long

```
    .navigation-panel-in-footer {
       ...
    }
```

##### Not recommended: too short

```
    .nvpf {
       ...
    }
```

##### Recommended:

```
    .nav-bar {
        ...
    }
```

### Writing

Write selector name together in single line, don't use concatenation.

##### Not recommended:

```
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

##### Recommended:

```
    .product-list-item {
        ...
    }
```

### Meaning

**Use meaningful or generic class names.**

Instead of presentational or cryptic names, always use class names that reflect the purpose of the element in question, or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.
Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”

Using functional or generic names reduces the probability of unnecessary document or template changes.

##### Not recommended:
```
    .foo-1901 {
        ...
    }
```

##### Not recommended: presentational

```
    .button-green {
       ...
    }

    .clear {
       ...
    }
```

##### Recommended: specific

```
    .category {
        ...
    }
    .category-title {
        ...
    }
```

### Type selectors

**Avoid qualifying class names with type selectors.**

Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.

Avoiding unnecessary ancestor selectors is useful for performance reasons.

##### Not recommended:

```
    div.error {
       ...
    }
```

##### Recommended:

```
    .error {
        ...
    }
```

Use type selectors in lowercase

##### Not recommended:

```
    .nav > LI {
       ...
    }
```

##### Recommended:

```
    .nav > li {
        ...
    }
```

### Nesting

Be careful with selectors nesting. In general try to use 3 nested levels as max.

Exception are pseudo elements and states.

##### Not recommended:

```
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

##### Recommended:

```
    .footer {
        ...
        .nav {
            ...
        }
        .nav-list {
            ...
        }
        .nav-list-item {
            ...
         }
    }
```

## Properties

### Sorting

Sort all properties alphabetical. Mixins, variables etc. should go first.

##### Not recommended:

```
    .nav {
        color: @nav__color;
        text-align: center;
        background-color: @nav__background-color;
    }
```

##### Recommended:

```
    .nav {
        background-color: @nav__background-color;
        color: @nav__color;
        text-align: center;
    }
```

### Shorthand

Use shortland properties where possible.

CSS offers a variety of shorthand properties that should be used whenever possible, even in cases where only one value is explicitly set.
Using shorthand properties is useful for code efficiency and understandability.

##### Not recommended:

```
    border-top-style: none;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0;
```

##### Recommended:

```
    border-top: 0;
    padding: 0 1em 2em;
```

### 0 and units

Omit unit specification after "0" values.

##### Not recommended:

```
    border-width: 0px;
    margin: 0rem;
```

##### Recommended:

```
    border-width: 0;
    margin: 0;
```

### Floating values

Omit leading "0"s in values, use dot instead.

##### Not recommended:

```
    margin-left: 0.5rem;
```

##### Recommended:

```
    margin-left: .5rem;
```

### Hexadecimal notation

* Use lowercase only
* Use 3 character hexadecimal notation where possible.
* For color values that permit it, 3 character hexadecimal notation is shorter and more compact.
* Also please avoid hex color in properties, use only variables instead.

##### Not recommended:

```
    color: #ff0000;
    @nav__color: #FAFAFA;
    @nav-item__color: red;
```

##### Recommended:

```
    @nav__color: #fafafa;
    @nav-item__color: #f00;
    ...
    color: @nav-item__color;
```

## Variables

### Location

#### Local variables

If variables are local and used only in module scope they should be located in module file on the top of it with general comment.

Example **_module.less**:
```
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

If variables are common for a couple of modules they should be located in **_theme.less** file

### Naming

All variables should be written in lowercase.

#### Value variables

##### General model is:

```
    @property-name
```

##### Examples:

```
    @primary__color: @color-phoenix;
    @indent__base: 2rem;
    @border-radius-round: 100%;
```

#### Parameter variables

##### General model is:

```
    @component-element__state__property__modifier
```

Please mention that component can be not only element name, it also can be primary, secondary, tertiary.

"Base" is a modifier.

##### Examples:

```
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

Theme mixins (except extends) should be saved in **source/utilities** folder.

### Naming

In name creation you can follow the same rules as for the creation of class names.
For mixins grouping use prefix__.

##### Example:

```
    .extend__clearfix (...) {
        ...
    }

    .vendor-prefix__flex-direction (...) {
        ...
    }
```

## Extends

### Location

Local extends that used only in one file, should be written in this **local file**.
Extends that used in more than two files should be saved in theme **source/_extend.less**.

### Naming

Extend class names should have prefix **.abs-** (from abstract).
