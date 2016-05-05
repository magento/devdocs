---
layout: default
group:
subgroup: A_Introduction
title: template (generic)
menu_title: template (generic)
menu_order: 1


---
*This is a template for a topic that has not yet been written by the Magento Developer Docs team.*

We encourage our community members to add content; either by writing a full topic, adding new sections to existing topic, or even just a few sentences about something you know of this topic. Don't worry about perfect grammar or form; just get your brilliance down!!

To get started, edit your local version of this file, using the markdown language (and HTML where needed). Then, create a Pull Request to have your contribution reviewed by the DevDocs team.

Your contributions to our Docs and your experience with using Magento, are very valued and appreciated. Let us know if you have any questions!

<h2 id="overview">Overview</h2>
PROVIDE OVERVIEW OF TOPIC HERE

<h2 id="H2">HEADING 2</h2>
PROVIDE TEXT HERE FOR FIRST SECTION.

<div class="bs-callout bs-callout-info" id="info">

  <p>INSERT NOTE TEXT HERE</a>.</p>

</div>

<h3 id="H3">HEADING 3</h3>
PROVIDE TEXT HERE FOR NEXT SECTION.

TO HYPERLINK TO ANOTHER TOPIC... refer to the <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">NAME OF TOPIC OR BOOK</a>.



<h2 id="H2">HEADING 2</h2>
PROVIDE TEXT HERE FOR NEXT SECTION.

ADD DIAGRAM OR ILLUSTRATION <p><img src="{{ site.baseurl }}common/images/NAME_OF_IMAGEjpg" alt="HOVER TEXT HERE"></p>

<h2 id="book-related">Related topics</h2>

* <a href="{{ site.gdeurl }}_____/_____.html">Title of related topic</a>
* <a href="{{ site.gdeurl }}_____/_____.html">Title of related topic</a>

## Collapsible Content

### Examples
<div class="collapsible">
  <h4 class="collapsible-title">Click to show/hide content</h4>
  <p>To use the collapsible content functionality, you must use a container with the class name "collapsible". Clickable titles must have the class name "collapsible-title". The next immediate element of the clickable title will be the hidden content.</p>
</div>

<!-- Please note the `markdown="1"` property in the collapsible container for this example. -->
<div class="collapsible" markdown="1">
  <h4 class="collapsible-title">Click to show/hide Image</h4>
  ![This is an image]({{ site.baseurl }}common/images/connect_keys2.png)
</div>

<div class="collapsible">
  <h4 class="collapsible-title">Click to show/hide HTML Table</h4>
  <table>
    <tbody>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
        <th>Col 3</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
      </tr>
      <tr>
        <td>Data 7</td>
        <td>Data 8</td>
        <td>Data 9</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Please note the `markdown="1"` property in the collapsible container for this example. -->
<div class="collapsible" markdown="1">
  <h4 class="collapsible-title">Markdown Table</h4>

  | Col 1  | Col 2  | Col 3  |
  | :----: | :----: | :----: |
  | Data 1 | Data 2 | Data 3 |
  | Data 4 | Data 5 | Data 6 |
  | Data 7 | Data 8 | Data 9 |

</div>

<!-- Please note the `markdown="1"` property in the collapsible container for this example. -->
<div class="collapsible" markdown="1">
  <h4 class="collapsible-title">Click to show/hide list</h4>

* List Item 1
* List Item 2
* List Item 3

</div>

<!-- We will wrap the included content in a div tag to make sure it will be hidden -->
<div class="collapsible">
  <h4 class="collapsible-title">Click to show/hide included content</h4>
  <div>
    {% include mtf/page-generator.html %}
  </div>
</div>

<div class="collapsible">
  <span class="collapsible-title">Highlighted Code Example</span>
  {% highlight html %}
  <div class="collapsible">
    <h4 class="collapsible-title">Collapsible Title</h4>
    <p>Put collapsible content here.</p>
  </div>
  {% endhighlight %}
</div>

<!-- Please note the markdown="1" property in the collapsible container for this example. -->
<div class="collapsible" markdown="1">
  <h4 class="collapsible-title">Markdown Code Example</h4>

~~~
<div class="collapsible">
  <h4 class="collapsible-title">Collapsible Title</h4>
  <p>Put collapsible content here.</p>
</div>
~~~

</div>

### Collapsible Group

<div class="collapsible">
  <h4 class="collapsible-title">Collapsible Topic 1</h4>
  <p>You can have multiple title-content pairs in a collapsible container.</p>
  <h4 class="collapsible-title">Collapsible Topic 2</h4>
  <p>Each content is controlled by its preceding title. </p>
  <h4 class="collapsible-title">Collapsible Topic 3</h4>
  <p>Clicking on each title will open its corresponding content and close any open contents.</p>
</div>
