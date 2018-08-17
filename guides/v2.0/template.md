---
group:
subgroup: A_Introduction
title: template (generic)
menu_title: template (generic)
menu_order: 1
---
*This is a template for a topic that has not yet been written by the Magento Developer Docs team.*

We encourage our community members to add content; either by writing a full topic, adding new sections to existing topic, or even just a few sentences about something you know of this topic. Don't worry about perfect grammar or form; just get your brilliance down!!

To get started, edit your local version of this file, using the {% glossarytooltip a5ef9041-976f-4eb3-826e-bf836027d8c3 %}markdown{% endglossarytooltip %} language (and {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} where needed). Then, create a Pull Request to have your contribution reviewed by the DevDocs team.

Your contributions to our Docs and your experience with using Magento, are very valued and appreciated. Let us know if you have any questions!

## Overview   {#overview}

PROVIDE OVERVIEW OF TOPIC HERE

## HEADING 2   {#H2}

PROVIDE TEXT HERE FOR FIRST SECTION.

<div class="bs-callout bs-callout-info" id="info">

  <p>INSERT NOTE TEXT HERE</a>.</p>

</div>

### HEADING 3   {#H3}

PROVIDE TEXT HERE FOR NEXT SECTION.

TO HYPERLINK TO ANOTHER TOPIC... refer to the <a href="{{ page.baseurl }}/extension-dev-guide/bk-extension-dev-guide.html">NAME OF TOPIC OR BOOK</a>.

## HEADING 2   {#H2}

PROVIDE TEXT HERE FOR NEXT SECTION.

ADD DIAGRAM OR ILLUSTRATION <p><img src="{{ site.baseurl }}/common/images/NAME_OF_IMAGEjpg" alt="HOVER TEXT HERE"></p>

## Related topics   {#book-related}

* <a href="{{ page.baseurl }}/_____/_____.html">Title of related topic</a>
* <a href="{{ page.baseurl }}/_____/_____.html">Title of related topic</a>

## Collapsible Content

### Examples
{% collapsible Click to show/hide content %}
To use the collapsible content functionality, use the `collapsible` block tag. Any content inside this block will be hidden until the header text is clicked.

See the markdown version of this file for examples.
{% endcollapsible %}

{% collapsible Click to show/hide image %}
![This is an image]({{ site.baseurl }}/common/images/connect_keys2.png)
{% endcollapsible %}

{% collapsible HTML Table %}
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
{% endcollapsible %}

{% collapsible Markdown Table %}
| Col 1  | Col 2  | Col 3  |
| :----: | :----: | :----: |
| Data 1 | Data 2 | Data 3 |
| Data 4 | Data 5 | Data 6 |
| Data 7 | Data 8 | Data 9 |
{% endcollapsible %}

{% collapsible Click to show/hide list %}
* List Item 1
* List Item 2
* List Item 3
{% endcollapsible %}

{% collapsible Click to show/hide included content %}
{% include mtf/page-generator.html %}
{% endcollapsible %}

{% collapsible Collapsible Code Examples%}

**Normal Markdown**

~~~
<div class="collapsible">

#### Collapsible Title
{: .collapsible-title}

  <div class="collapsible-content">
    <p>Put collapsible content here.</p>
  </div>
</div>
~~~

**Highlighted Code**

{% highlight html %}
<div class="collapsible">

#### Collapsible Title
{: .collapsible-title}

  <div class="collapsible-content">
    <p>Put collapsible content here.</p>
  </div>
</div>
{% endhighlight %}
{% endcollapsible %}

### Collapsible Group

<div class="collapsible">
  <b class="collapsible-title">Collapsible Topic 1</b>
  <div class="collapsible-content">
    <p>You can have multiple title-content pairs in a collapsible container.</p>
  </div>
  <b class="collapsible-title">Collapsible Topic 2</b>
  <div class="collapsible-content">
    <p>Each content is controlled by its preceding title. </p>
  </div>
  <b class="collapsible-title">Collapsible Topic 3</b>
  <div class="collapsible-content">
    <p>Clicking on each title will open its corresponding content and close any open contents.</p>
  </div>
</div>

### Tooltips

You can use a glossary term's UUID from the [Magento Glossary](https://magento.github.io/glossary/){:target="_blank"} to add a tooltip for that term on the page.

#### Examples

* {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %}
* Inline {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}Markup{% endglossarytooltip %} text
