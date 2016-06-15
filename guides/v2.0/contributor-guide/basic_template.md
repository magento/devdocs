---
layout: default
group: howdoi
subgroup:
title:
menu_title:
menu_node:
menu_order: 1
version: 2.0
github_link: contributor-guide/basic_template.md
---
<!-- Start with H2, not H1 -->

## Main Content Heading
{:.no_toc}

<!-- Table of Content -->
* Table of Content placeholder; required but will not be rendered
{:toc}

### Overview
Introductory text that gives an overview of the topic you will be writing about.

The purpose of this page is to provide you with a pre-formatted template and useful markdown references to help you get started writing docs.

You can start off by editing the local version of this file using markdown language (and HTML where needed). Then, create a Pull Request to have your contribution reviewed by the DevDocs team.

### Basic Markdown Syntax
Below are some basic examples of what you can do with markdown.

#### Text Effects

| Example           | Output       |
| ----------------- | ------------ |
|`*emphasis*`       |*emphasis*    |
|`**bold**`         | **bold**     |
|`` `inline code` ``| `inline code`|

By indenting your content by at least 4 spaces, you can create a code block.

    //This is a code block!
    print "Hello World!";

For more examples of basic markdown please follow this [link](https://daringfireball.net/projects/markdown/syntax){:target="_self"}.

#### Lists
Lists are useful for organizing and displaying related items. Below are examples of a bulleted list and an ordered list.

**Bulleted List:**

~~~
* List Item 1
* List Item 2
* List Item 3
~~~

*Output:*

* List Item 1
*	List Item 2
*	List Item 3

**Ordered List:**

~~~
1. First Step
2. Second Step
3. Third Step
~~~

*Output:*

1.	First Step
2.	Second Step
3.	Third Step

#### Images
Please add any images you may need to the [`common/images`](https://github.com/magento/devdocs/tree/develop/common/images){:target="_blank"} directory.

Once the image is added, you can use it in your documentation:

*Example:* `{%raw%}![Image]({{site.baseurl}}common/images/install_cygwin.png){%endraw%}`

*Output:*

![Image Example]({{site.baseurl}}common/images/install_cygwin.png)

You can even scale the image if it is too large:

*Example:* `{%raw%}![Scaled Image]({{site.baseurl}}common/images/install_cygwin.png){:width="446" height="246"}{%endraw%}`

*Output:*

![Scaled Image Example]({{site.baseurl}}common/images/install_cygwin.png){:width="446" height="246"}


#### Tables
Tables can be useful for displaying different kinds of data in an organized way.

*Example:*

~~~
<!-- Basic Markdown Table Syntax -->
| Column Heading | Column Heading | Column Heading |
|----------------|----------------|----------------|
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |
~~~

*Output:*

| Column Heading | Column Heading | Column Heading |
|----------------|----------------|----------------|
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |

You can read more about table syntax [here](http://kramdown.gettalong.org/syntax.html#tables){:target="_blank"}.

### Advanced Syntax

#### Code blocks

Code blocks can also be defined by surrounding the block of code with `~~~` which can be seen in the [table](#tables) example.

For highlighted code blocks use the `highlight` Liquid tag.

*Example:*

~~~
{%raw%}
{% highlight html %}
<div class="container">
  <h4 class="title">Title</h4>
  <div class="content">
    <p>Paragraph content.</p>
  </div>
</div>
{% endhighlight %}
{%endraw%}
~~~

*Output:*

{% highlight html %}
<div class="container">
  <h4 class="title">Title</h4>
  <div class="content">
    <p>Paragraph content.</p>
  </div>
</div>
{% endhighlight %}

#### Callout Messages

Use these messages to highlight or bring attention to a piece of information.

**Notes:**

{% highlight html %}
<div class="bs-callout bs-callout-info">
  <p>This is a note callout. You can use these to provide important information on a topic.</p>
</div>
{% endhighlight %}

*Output:*

<div class="bs-callout bs-callout-info">
  <p>This is a note callout. You can use these to provide important information on a topic.</p>
</div>

**Warnings:**

{% highlight html %}
<div class="bs-callout bs-callout-warning">
    <p>This is a warning callout. This is can be used to convey important information to the reader.</p>
</div>
{% endhighlight %}

*Output:*

<div class="bs-callout bs-callout-warning">
    <p>This is a warning callout. This is can be used to convey important information to the reader.</p>
</div>

**Tips:**

{% highlight html %}
<div class="bs-callout bs-callout-tip">
  <p>This is a tip callout. These can be used to provide useful tips or interesting fact on a topic.</p>
</div>
{% endhighlight %}

*Output:*

<div class="bs-callout bs-callout-tip">
  <p>This is a tip callout. These can be used to provide useful tips or interesting fact on a topic.</p>
</div>

####Collapsible content
You can use the collapsible content tag to shorten your documentation.

<div class="bs-callout bs-callout-info">
  <p>The <code>{%raw%}{% collapsible %}{%endraw%}</code> tag must be preceded by a blank line. </p>
</div>


*Example:*

~~~
{%raw%}
{% collapsible This is the title %}
Markdown content goes in this area.
{% endcollapsible %}
{%endraw%}
~~~

*Output:*

{% collapsible This is the title %}
Markdown content goes in this area.
{% endcollapsible %}
