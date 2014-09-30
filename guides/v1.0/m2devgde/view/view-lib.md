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
