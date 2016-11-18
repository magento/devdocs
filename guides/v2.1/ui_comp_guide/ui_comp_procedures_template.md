---
layout: default
group: UI Components
subgroup: 
title:
menu_title:
menu_node:
menu_order: 1
version: 2.0
github_link: contributor-guide/basic_template.md
---

<!-- контент -->


## Title (ex. How to make coffee)
{:.no_toc}

<!-- Table of Content -->

### Overview 

One or two sentences, describing what is the procedure and when the user might need it. High-level workflow. 


### Prerequisites (if relevant)
What preparations are required, what a user should be familiar with.  


## Actual steps

Intro sentence (ex.: To make coffee, take the following steps:)
1.	First Step 
2.	Second Step
3.	Third Step

For big steps, add info how to validate that step was successful.

For the whole procedure, add info how to validate that procedure was successful, and what to do if not.  

<!-- форматирование -->

### Formatting reference


### Basic Markdown Syntax
Below are some basic examples of what you can do with markdown.

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



#### Code blocks

By indenting your content by at least 4 spaces, you can create a code block.

    //This is a code block!
    print "Hello World!";

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
