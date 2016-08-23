---
layout: default
group: UI Components
subgroup: Concepts
title: %your page title%
menu_title:
menu_node:
menu_order: 1
version: 2.1
github_link: 
---

# Title
{:.no_toc}

<!-- Table of Content -->
* Table of Content placeholder; required but will not be rendered
{:toc}

<!-- Содержание -->

## Overview

High-level, one or two sentences, describing the functionality.

## Common Usage (if relevant)
Include one or two examples of how this feature or functionality is used.

## Implementation Details

This topic describes in more detail WHAT this feature is, and provides the reader an understanding of what the feature does, and how it is implemented/works. Explain core concepts, and relevant information about system or application workflows.

When writing a conceptual topic, pretend that you are describing this feature to a new developer who just joined your team, and who will be working with you to further develop it.

## Workflow Diagrams (if relevant)
Add any diagrams or text that explains core workflows.
 

<!-- форматирование -->

### Formatting reference


### Basic Markdown Syntax
Below are some basic examples of what you can do with markdown.

#### Text Effects

*emphasis*    
 **bold**     
 `inline code`

By indenting your content by at least 4 spaces, you can create a code block.

    //This is a code block!
    print "Hello World!";

For more examples of basic markdown please follow this [link](https://daringfireball.net/projects/markdown/syntax){:target="_self"}.

#### Lists
Lists are useful for organizing and displaying related items. Below are examples of a bulleted list and an ordered list.

**Bulleted List:**

* List Item 1
*	List Item 2
*	List Item 3

**Ordered List:**

1.	First Step
2.	Second Step
3.	Third Step

#### Tables
Tables can be useful for displaying different kinds of data in an organized way.

*Example:*

| Column Heading | Column Heading | Column Heading |
|----------------|----------------|----------------|
| Data 1         | Data 2         | Data 3         |
| Data 4         | Data 5         |                |
| Data 6         |                |                |

You can read more about table syntax [here](http://kramdown.gettalong.org/syntax.html#tables){:target="_blank"}.

#### Code blocks

Code blocks can also be defined by surrounding the block of code with `~~~` which can be seen in the [table](#tables) example.

For highlighted code blocks use the `highlight` Liquid tag.

*Example:*

{% highlight html %}
<div class="container">
  <h4 class="title">Title</h4>
  <div class="content">
    <p>Paragraph content.</p>
  </div>
</div>
{% endhighlight %}
