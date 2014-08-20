---
layout: howtom2devgde_chapters_fedg
title: Examples of HTML and Markdown
---


<h1 id="unique-id">{{ page.title }}</h1>

<h2 id="topic1">Examples That Work</h2>

*	This markdown list item can have <em>HTML</em> or *markdown* elements in it. Notice how both words are italicized.

This markdown paragraph is **the** <strong>same</strong>.

<h2 id="topic2">Examples That Don't Work</h2>

The rule of thumb is, if a paragraph starts out with an HTML tag, it *cannot* have any markdown in it. This is a markdown paragraph so it can have both markdown and HTML in it. One reason to do that is to add hyperlinks that use `target=_blank` like so: <a href="http://www.cnn.com" target="_blank">CNN</a>.

<p>Any paragraph, like this one, that starts with an HTML tag can have <em>only</em> HTML in it.</p>

<p>This is another HTML paragraph. Notice how this **word** isn't bold like it would be in markdown; it just has asterisks around it. Same for markdown inline `code delimiters`, they don't work either.</p>
