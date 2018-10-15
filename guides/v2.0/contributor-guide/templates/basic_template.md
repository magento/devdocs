---
group: contributor-guide
title: Basic template
redirect_from: /guides/v2.0/howdoi/howdoi_template.html
---

Introductory text that gives an overview of the topic you will be writing about.

The purpose of this page is to provide you with a pre-formatted template and useful {% glossarytooltip a5ef9041-976f-4eb3-826e-bf836027d8c3 %}markdown{% endglossarytooltip %} references to help you get started writing docs.

You can start off by editing the local version of this file using markdown language (and {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} where needed). Then, create a Pull Request to have your contribution reviewed by the DevDocs team.

## Basic Markdown Syntax {#basic}

Below are some basic examples of what you can do with markdown.

### Text Effects {#text}

| Example           | Output       |
| ----------------- | ------------ |
|`*emphasis*`       |*emphasis*    |
|`**bold**`         | **bold**     |
|`` `inline code` ``| `inline code`|

By indenting your content by at least 4 spaces, you can create a code block. For extensive examples of adding code samples, see [Code blocks](#code-blocks).

    //This is a code block!
    print "Hello World!";

For more examples of basic markdown please follow this [link](https://daringfireball.net/projects/markdown/syntax){:target="_blank"}.

### Lists {#lists}

Lists are useful for organizing and displaying related items. Below are examples of a bulleted list and an ordered list.

**Bulleted List:**

```markdown
* List Item 1
* List Item 2
* List Item 3
```

*Output:*

* List Item 1
* List Item 2
* List Item 3

**Ordered List:**

```markdown
1. First Step
2. Second Step
3. Third Step
```

*Output:*

1. First Step
2. Second Step
3. Third Step

### Images {#images}

Please add any images you may need to the [`common/images`](https://GitHub.com/magento/devdocs/tree/develop/common/images){:target="_blank"} directory.

Once the image is added, you can use it in your documentation:

*Example:* `![Image]({{ site.baseurl }}/common/images/install_cygwin.png)`

*Output:*

![Image Example]({{ site.baseurl }}/common/images/install_cygwin.png)

You can even scale the image if it is too large:

*Example:* `![Scaled Image]({{ site.baseurl }}/common/images/install_cygwin.png){:width="446" height="246"}`

*Output:*

![Scaled Image Example]({{ site.baseurl }}/common/images/install_cygwin.png){:width="446" height="246"}

### Tables {#tables}

Tables can be useful for displaying different kinds of data in an organized way.

*Example:*

```markdown
<!-- Basic Markdown Table Syntax -->
| Column Heading | Column Heading | Column Heading |
|----------------|----------------|----------------|
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |
```

*Output:*

| Column Heading | Column Heading | Column Heading |
|----------------|----------------|----------------|
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |

You can read more about table syntax [here](http://kramdown.gettalong.org/syntax.html#tables){:target="_blank"}.

## Advanced Syntax {#advanced}

### Code blocks {#code-blocks}

Code blocks can also be defined using [Rouge formatting](http://rouge.jneen.net/){:target="_blank"}. View the .md file of this template for examples.

For inline code, surround the content with single backticks: `` `example` ``.

For blocks of code, surround content with 3 backticks and an optional [supported language](https://GitHub.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers){:target="_blank"}.

*Example:*

````
```html
<div class="container">
  <h4 class="title">Title</h4>
  <div class="content">
    <p>Paragraph content.</p>
  </div>
</div>
```
````

*Output:*

```html
<div class="container">
  <h4 class="title">Title</h4>
  <div class="content">
    <p>Paragraph content.</p>
  </div>
</div>
```

### Callout Messages {#callouts}

Use these messages to highlight or bring attention to a piece of information.

**Notes:**

```liquid
{%raw%}
{%
include note.html
type='info'
content='This is a note callout. You can use these to provide important information on a topic.'
%}
{%endraw%}
```

*Output:*

{%
include note.html
type='info'
content='This is a note callout. You can use these to provide important information on a topic.'
%}

**Warnings:**

```liquid
{%raw%}
{%
include note.html
type='warning'
content='This is a warning callout. This can be used to convey important information to the reader.'
%}
{%endraw%}
```

*Output:*

{%
include note.html
type='warning'
content='This is a warning callout. This can be used to convey important information to the reader.'
%}

**Tips:**

```liquid
{%raw%}
{%
include note.html
type='tip'
content='This is a tip callout. These can be used to provide useful tips or interesting facts on a topic.'
%}
{%endraw%}
```

*Output:*

{%
include note.html
type='tip'
content='This is a tip callout. These can be used to provide useful tips or interesting facts on a topic.'
%}

### Collapsible content {#collapsible}

You can use the collapsible content tag for large code samples in your content. Any content in a collapse is blocked from searching on page.

{: .bs-callout .bs-callout-info }
The `{%raw%}{% collapsible %}{%endraw%}` tag must be preceded by a blank line.

*Example:*

```liquid
{%raw%}
{% collapsible This is the title %}
Markdown content goes in this area.
{% endcollapsible %}
{%endraw%}
```

*Output:*

{% collapsible This is the title %}
Markdown content goes in this area.
{% endcollapsible %}
