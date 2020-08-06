---
group: contributor-guide
title: Basic template
redirect_from:
- guides/v2.3/contributor-guide/templates/basic_template.html
- guides/v2.4/contributor-guide/templates/basic_template.html
---

Introductory text that gives an overview of the topic you will be writing about.

The purpose of this page is to provide you with a pre-formatted template and useful [markdown](https://glossary.magento.com/markdown) references to help you get started writing docs.

You can start off by editing the local version of this file using markdown language (and [HTML](https://glossary.magento.com/html) where needed). Then, create a Pull Request to have your contribution reviewed by the DevDocs team.

## Metadata parameters

Add the following metadata parameters at the top of your page. We use YAML for the metadata in front matter. We use this data when generating the DevDocs for the following:

Parameter | Description
--- | ---
`group:` | The table of contents this file belongs to, which points to files located in `_data/toc/`. Only add the name of the file without the extension. For example, the group of this file is `group: contributor-guide`, which points to the table of contents defined in `_data/toc/contributor-guide.yml`.
`title:` | The title of the page.
`functional_areas:`  |  Optional. Adds facets for search results. Available facets include: Sales, Products, Carts, Customers, Marketing, Account, Content, Reports, Stores, System, Catalog, Orders, Frontend, Theme, Staging, Search, Configurations, Integration, Services, Tools, Setup, Testing, test, Standards, Install, Upgrade, B2B, Cloud, and Bundled extensions. These facets are case sensitive and support multiple facets separated by commas. For example: `functional_areas: Install`.
`redirect_from`  | Optional. Add a list of other pages in DevDocs that should redirect to this page. The link should start with the `/guides` directory. For an example, see the source code for this template page.
`ee_only:` | Optional. If set to `true`, graphics/cues display on the page indicating it applies to {{site.data.var.ee}}.
`contributor_name`  | Optional. Add a contributor's name to the metadata to add a "Thanks for contributing to this topic!" attribution in the top right corner of a topic.
`contributor_link:` | Optional. Add a link to the contributor's GitHub profile or website. The attribution will include this link.

If you need help with metadata, we can assist!

## Basic Markdown Syntax {#basic}

Below are some basic examples of what you can do with markdown.

### Text Effects {#text}

| Example           | Output       |
| ----------------- | ------------ |
|`*emphasis*`       |*emphasis*    |
|`**bold**`         | **bold**     |
|`` `inline code` ``| `inline code`|

Use code fences to create code blocks. For extensive examples of adding code samples, see [Code blocks](#code-blocks).

```text
//This is a code block!
print "Hello World!";
```

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

*  List Item 1
*  List Item 2
*  List Item 3

**Ordered List:**

```markdown
1. First Step
1. Second Step
1. Third Step
```

*Output:*

1. First Step
1. Second Step
1. Third Step

### Images {#images}

Please add any images you may need to the [`src/common/images`](https://github.com/magento/devdocs/tree/master/src/common/images) directory.

Once the image is added, you can use it in your documentation:

*Example:* `![Image]({{ site.baseurl }}/common/images/install_cygwin.png)`

*Output:*

![Image Example]({{ site.baseurl }}/common/images/install_cygwin.png)

You can even scale the image if it is too large:

*Example:* `![Scaled Image]({{ site.baseurl }}/common/images/install_cygwin.png){:width="446"}`

*Output:*

![Scaled Image Example]({{ site.baseurl }}/common/images/install_cygwin.png){:width="446"}

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

For blocks of code, surround content with 3 backticks and a [supported language](https://GitHub.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers){:target="_blank"}.

*Example:*

```text
<div class="container">
  <h4 class="title">Title</h4>
  <div class="content">
    <p>Paragraph content.</p>
  </div>
</div>
```

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

 {:.bs-callout-info}
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
