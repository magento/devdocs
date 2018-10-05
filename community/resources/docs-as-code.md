---
group: community
title: Docs as Code
---

To further expand documentation options for DevDocs, we offer a new opportunity for developers to contribute content through Community Engineering project repositories!

Docs as Code is a new process that pulls content from public GitHub repositories and generates it as part of DevDocs. The DevDocs team helps you write add your content for the site. 

{:.bs-callout .bs-callout-info}
This is the first of many new options for expanding documentation for developers. We will add more information and examples coming soon.

## Docs as Code benefits

 - Keep your documentation in the same repo as your code. 
 - All content updates follow your repo pull request and issue processes.
 - Content publishing is automated with DevDocs, without moving your files.
 - DevDocs writers handle all the hard parts for docs: navigation, tables of contents, reviews, formatting, and more.

## How does it work?

![Docs Repo and Writing Content]({{ site.baseurl }}/common/images/docs-as-code-developer.png) 

1. Create a `docs` folder in the root of your public repository. If you have images, create an `images` folder in `docs`.
1. Write simple markdown (`.md`) files using [Kramdown](https://kramdown.gettalong.org/syntax.html).
1. Contact [Lori Krell](mailto:lkrell@adobe.com) in Community Engineering with the following details:
    - Project name or feature
    - GitHub Repository link
    - Contact for your project  
    - Any additional information such as type of content, labels used for doc issues, if you need diagrams, and so on

## What happens next?

![Writers Review and Automate]({{ site.baseurl }}/common/images/docs-as-code-writer.png)

The DevDocs team will help get your content ready for publication!

- Review and edit your content, including Kramdown formatting, Liquid tags, grammar, and more.
- Connect your content to DevDocs navigation including custom table of contents and search facets.
- Configure automation for generating documentation.

All you need to do is write!

The documentation source files remain in your code repository `docs` folder. All reviews will follow development and pull request processes for your repo. 

When complete, all generation is automated. DevDocs generate on an automated cycle to capture all changes submitted to all repos, DevDocs and other remotes.

## Technical details

Additional technical information will be provided as these options release.

All DevDocs builds use the following technologies:

- [Kramdown](https://kramdown.gettalong.org/syntax.html) 
- [Liquid](https://shopify.github.io/liquid/)
- [Jekyll](https://jekyllrb.com/)
- [Jenkins](https://jenkins.io/)
- [GitHub Pages](https://pages.github.com/)