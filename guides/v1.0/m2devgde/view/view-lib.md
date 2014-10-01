---
title: Using the Magento 2 View Library
layout: howtom2devgde_chapters
...

{{ Magento\_View Library }}

### General Markdown Authoring Tips

-   Daring Fireball

-   Markdown cheat sheet

-   Internal wiki page

### Note, Tip, Important, Caution

There is an example of Note in the first section.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
<p>This is important. </p></span>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is a tip.

This is a caution. Use this only in very limited circumstances when discussing:

Data loss

Financial loss

Legal liability

### Tables

There is no good solution right now. Suggest you either use Markdown tables or
HTML tables.

HTML table:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Images

Whether you add a new image or move an image from the wiki, you must store the
image in `common/images` using a naming convention discussed here.

To embed the link in a page, use either Markdown or HTML image links, it doesn't
matter. Either way, you *should* add alt tags to your images to improve
accessibility.

You can also use a title tag to provide a mouseover tooltip.

HTML example:

Markdown example using an alt tag:

![](<{{%20site.baseurl%20}}common/images/integration.png>)

~   Click **System** \> **Integrations** to start

### Cross-References

All cross-references should look like the following:

-   Cross-reference to another topic in any of the guides: Understanding Magento
    2 CSS Preprocessing

-   Cross-reference to Magento 2 code in the public GitHub: object manager

-   Cross-reference for the "help us improve this topic" link at the top of
    every page (only for pages you create yourself):

    Help us improve this page 

-   Cross-reference to an external site should, IMHO, include `target="_blank"`
    as in `<a href="http://daringfireball.net/projects/markdown/syntax#img"
    target="_blank">Markdown</a>`

 

Contents
--------

-   [Overview][1]

    [1]: <https://wiki.magento.com/display/MAGE2DOC/Magento_View+Library#Magento_ViewLibrary-Overview>

-   [Using Magento\\Framework\\View Library][2]

    [2]: <https://wiki.magento.com/display/MAGE2DOC/Magento_View+Library#Magento_ViewLibrary-UsingMagento\Framework\ViewLibrary>

-   [Magento\\View Library Components][3]

    [3]: <https://wiki.magento.com/display/MAGE2DOC/Magento_View+Library#Magento_ViewLibrary-Magento\ViewLibraryComponents>

-   [Magento\\Framework\\View Library Dependencies][4]

    [4]: <https://wiki.magento.com/display/MAGE2DOC/Magento_View+Library#Magento_ViewLibrary-Magento\Framework\ViewLibraryDependencies>

Overview
--------

An independent View layer domain - the View component was created to eliminate
global dependencies
from `Magento_Core`, `Magento_Backend`, `Magento_Adminhtml` and `Magento_Page` modules
for HTML content rendering. So that all application modules perform rendering
using the VIew component, and remain independent from each other.

The View component is represented
as `Magento\Framework\View` library: `magento2/lib/Magento/Framework/View`.

Using `Magento\Framework\View` Library
--------------------------------------

The View component contains contains basic classes, factories and interfaces
used to implement HTML content rendering  for the frontend and backend
application areas. 

Magento\\View Library Components
--------------------------------

The `Magento\Framework\View` library has the following components:

-   Template Engine

-   Page Assets

-   Element (Block)

-   Design

    -   File Resolution

    -   Fallback

    -   Theme

-   Layout.  
      
    

`Magento\Framework\View` Library Dependencies
---------------------------------------------

The `Magento\Framework\View` library closely interacts with other Magento
libraries and modules, so it has multiple dependencies. 

`Magento\Framework\View` depends on the following Magento libraries:  

-   `\Magento\Framework\App\Dir`

-   `\Magento\Framework\Autoload`

-   `\Magento\Framework\Code`

-   `\Magento\Framework\Config`

-   `\Magento\Framework\Data`

-   `\Magento\Framework\Event`

-   `\Magento\Framework\File`

-   `\Magento\Framework\Filesystem`

-   `\Magento\Framework\Filter`

-   `\Magento\Framework\HTTP`

-   `\Magento\Framework\Image`

-   `\Magento\Framework\Json`

-   `\Magento\Framework\Message`

-   `\Magento\Framework\Module`

-   `\Magento\Framework\Object`

-   `\Magento\Framework\ObjectManager`

-   `\Magento\Framework\Profiler`

`Magento\Framework\View` depends on the following modules:

-   `Magento_Core`

Apart from obvious and reasonable dependencies,
the `Magento\Framework\View` library has so-called artifact dependencies, which
will be refactored in future releases.

Basic Magento modules that interact with the` Magento\Framework\View` library
are:

-   `Magento_Core`

-   `Magento_Theme`

-   `Magento_Backend`

-   `Magento_FullPageCache`

-   `Magento_Widget`

In addition, a few other modules also use the `Magento\Framework\View` library
in method calls, constructors of models, and helper classes.

The majority of Magento module dependencies on
the `Magento\Framework\View` library are induced on the level of Magento blocks
classes implementation. These dependencies result from unified process of block
classes creation, which is implemented by means of
the `Magento\Framework\View` library:  two parental classes
(`\Magento\Framework\View\Element\AbstractBlock` and`\Magento\Framework\View\Element\Template`)
are common ancestors for all block classes of Magento modules, and implement
the `\Magento\Framework\View\Element\BlockInterface` interface.
