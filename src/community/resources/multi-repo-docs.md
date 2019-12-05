---
group: community
title: Multi-Repo Docs
---

To further expand documentation options for DevDocs, we offer a new opportunity for developers to contribute content through Community Engineering project repositories!

**Multi-Repo Docs** is a new process that collects docs from multiple sources (repos) and publishes all them on a single website: devdocs.magento.com. The DevDocs team helps review your content and add it to the publication process.

{:.bs-callout-info}
This is the first of many new options for expanding documentation for developers. We will add more information and examples soon.

## Multi-Repo Docs benefits

You get to:

-  Keep your doc files in the same repo as your code.
-  Manage doc updates by following the same GitHub processes you use for your code.

The DevDocs team :

-  Reviews, edits, and formats your docs.
-  Automates content publishing using our CI/CD process, without moving your files.

## How does it work?

![Multi-Repo and Writing Content]({{ site.baseurl }}/common/images/remote-doc-repo-developer.png)

1. Create a `docs` directory in the root of your public repository. If you have images, add an `images` sudirectory.
1. Write simple markdown (`.md`) files using [kramdown](https://kramdown.gettalong.org/syntax.html).
1. Contact [Lori Krell](mailto:lkrell@adobe.com) in Community Engineering with the following details:
   -  Project name or feature
   -  GitHub Repository link
   -  Contact for your project
   -  Any additional information such as type of content, labels used for doc issues, if you need diagrams, and so on

## What happens next?

![Writers Review and Automate]({{ site.baseurl }}/common/images/remote-doc-repo-writer.png)

The DevDocs team will help get your content ready for publication:

1. Review and edit your content, including kramdown formatting, Liquid tags, grammar, and more.
1. Connect your content to DevDocs navigation including custom table of contents and search facets.
1. Configure automation for generating documentation on an automated cycle.

All you need to do is write and respond to PRs, just like code contributions!

{:.bs-callout-info}
To ensure quality documentation, your content must pass a quality review and acceptance by the Magento DevDocs team. We work with you through the process.

## What tech do you need?

Use any IDE to write content. All IDEs support markdown files (.md), including extensions that check formatting as you write. We recommend using [Kramdown](https://kramdown.gettalong.org/syntax.html), which includes markdown formatting.

We will add more technical information as we release Multi-Repo Doc support and features.
