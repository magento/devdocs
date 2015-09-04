---
layout: default
group: coding-standards
subgroup: Coding standards
title: Less coding standard
menu_title: Less coding standard
menu_order: 7
github_link: coding-standards/code-standard-less.md
---

This standard defines Magento requirements for code formatting and style for teams that develop LESS and CSS code.

Some parts of Magento code might not comply with this coding standard.

This coding standard is optional for third-party Magento developers.

## General rules

### Indentation

Use only spaces for indentation:

* Tab size: 4 spaces
* Indent size: 4 spaces
* Continuation indent: 4 spaces

##### Correct:

        .nav {
            .nav-item {
                ...
            }
        }


### Formatting

#### Braces

Add one space before opening braces and line break after. Add line break before closing braces.

##### Incorrect:
```
    .nav{color: @nav__color;}
```

##### Correct:

```
    .nav {
        color: @nav__color;
    }
```

#### Selector delimiters

Add line break after each selector delimiter. Do not add spaces before and after delimiters.

##### Correct:

```
    .nav,
    .bar {
        color: @color__base;
    }
```

##### Incorrect:

```
    .nav, .bar {
        color: @color__base;
    }
```



#### Quotes

Use single quotes.

##### Correct:

```
    .nav {
        content: 'lorem ipsum';
    }
```

##### Incorrect:

```
    .nav {
        content: "lorem ipsum";
    }
```


#### Combinator indents

Add spaces around combinators.

##### Correct:

```
    .nav + .bar {
        color: @bar__color;
    }
```

##### Incorrect:

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

#### Properties line break

Start each property declaration in a new line.

##### Incorrect:

```
    .nav {
        color: @nav__color; background-color: @nav__background-color;
    }
```

##### Correct:

```
    .nav {
        background-color: @nav__background-color;
        color: @nav__color;
    }
```

#### Properties colon indents

Do not add spaces around property colon.

##### Correct:

```
    .nav {
        color: @nav__color;
    }
```

##### Incorrect:

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


#### End of file

Add a blank line in the end of file.

#### End of the selector

Add a blank line after selector.

##### Correct:

```css
    .nav {
        background-color: @nav__background-color;
    }

    .bar {
        background-color: @bar__background-color;
    }
```

##### Incorrect:

```css
    .nav {
        background-color: @nav__background-color;
    }
    .bar {
        background-color: @bar__background-color;
    }
```


#### End of the property line

Add semicolon after property.

##### Correct:

```
    .nav {
        background-color: @nav__background-color;
    }
```

##### Incorrect:

```
    .nav {
        background-color: @nav__background-color
    }
```


#### !important property

Avoid using the `!important` property if possible. If it is required, use the notation similar to the following:

```
    .jquery-ui-calendar-item {
        background-color: @nav__background-color !important;
    }
```
<p class="q">what exactly is important in this notation?</p>

##### Incorrect:

```
    .jquery-ui-calendar-item {
        background-color: @nav__background-color!important;
    }
```


### Comments

First and second level comments must be surrounded have an empty line before and after the comment.
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

##### Incorrect:

```
    #foo {
        ...
    }
```

##### Correct:

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

##### Incorrect:

```
    .navBar {
       ...
    }
```

##### Incorrect: underscore separation

```
    .nav_bar {
       ...
    }
```

##### Correct:

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

##### Incorrect: too long

```
    .navigation-panel-in-footer {
       ...
    }
```

##### Incorrect: too short

```
    .nvpf {
       ...
    }
```

##### Correct:

```
    .nav-bar {
        ...
    }
```

### Writing

Write selector name together in single line, don't use concatenation.

##### Incorrect:

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

##### Correct:

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

##### Incorrect:
```
    .foo-1901 {
        ...
    }
```

##### Incorrect: presentational

```
    .button-green {
       ...
    }

    .clear {
       ...
    }
```

##### Correct: specific

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

##### Incorrect:

```
    div.error {
       ...
    }
```

##### Correct:

```
    .error {
        ...
    }
```

Use type selectors in lowercase

##### Incorrect:

```
    .nav > LI {
       ...
    }
```

##### Correct:

```
    .nav > li {
        ...
    }
```

### Nesting

Be careful with selectors nesting. In general try to use 3 nested levels as max.

Exception are pseudo elements and states.

##### Incorrect:

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

##### Correct:

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

##### Incorrect:

```
    .nav {
        color: @nav__color;
        text-align: center;
        background-color: @nav__background-color;
    }
```

##### Correct:

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

##### Incorrect:

```
    border-top-style: none;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0;
```

##### Correct:

```
    border-top: 0;
    padding: 0 1em 2em;
```

### 0 and units

Omit unit specification after "0" values.

##### Incorrect:

```
    border-width: 0px;
    margin: 0rem;
```

##### Correct:

```
    border-width: 0;
    margin: 0;
```

### Floating values

Omit leading "0"s in values, use dot instead.

##### Incorrect:

```
    margin-left: 0.5rem;
```

##### Correct:

```
    margin-left: .5rem;
```

### Hexadecimal notation

* Use lowercase only
* Use 3 character hexadecimal notation where possible.
* For color values that permit it, 3 character hexadecimal notation is shorter and more compact.
* Also please avoid hex color in properties, use only variables instead.

##### Incorrect:

```
    color: #ff0000;
    @nav__color: #FAFAFA;
    @nav-item__color: red;
```

##### Correct:

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
