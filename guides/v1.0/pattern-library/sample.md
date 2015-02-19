---
layout: default
group: 
subgroup: 
title: 
menu_title: 
menu_order: 
menu_node: 
github_link: pattern-library/sample.md
---

#### Contents 

*	<a href="#intro">What th' heck?</a>
*	<a href="#basics">Basic stuff</a>
* <a href="#tables">Tables</a>
* <a href="#images">Images</a>
* <a href="#note">Note, Tip, Warning</a>
* <a href="#code">Code samples</a>

<h2 id="intro">What th' heck?</h2>
This page has samples of Markdown and HTML we commonly use in our writing. We hope it will help you get started faster in the wild, wacky, and wonderful world of GitHub and Markdown!

<h2 id="basics">Basic stuff</h2>
Some initial ground rules and guidelines:

* We use non-gerund, sentence-case headings because who has the time to figure out capitalization rules? Gerunds are good for task-oriented topics but in the world of developer documentation, it's often very clunky to use them.

* It's up to you but Steve Johnson (hereafter referred to as SteveJ or Steve) recommends HTML headings with the  `id` attribute because that way, cross-references to those headings will never return a 404. You're welcome to read up on <a href="http://daringfireball.net/projects/markdown/syntax#link" target="_blank">Markdown headings and cross-references</a> and use them if you want.

  Speaking of external references, Steve prefers the `<a>` tag to have `target="_blank"` so it opens in a new browser tab page or window.

* Only a few things *must* be HTML; everything else can be a combination of HTML and Markdown. See our <a href="https://wiki.corp.x.com/display/WRI/Part+2.+Author+in+Markdown+-+Best+Practices#Part2.AuthorinMarkdown-BestPractices-RulesforMarkdownandHTML" target="_blank">wiki</a> for more information.

<h2 id="site-vars">Site variables</h2>
*Very important*. To enable URLs to be resolved properly on the internal and live sites, you *must* use site variables properly.

If you're one of the faithful, you can use relative paths but there might be a risk with that.

<div class="bs-callout bs-callout-warning">
    <p>Never ever <em>ever</em> hard-code a path to any asset because the link will break in either the internal or live sites. Guaranteed.</p>
</div>

Here are some examples:

* Cross-reference to a topic: <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Installation Overview</a>
* Referring to Magento 2 code in GitHub: <a href="{{ site.mage2000url }}ib/internal/Magento/Framework/App/Cache/Type/ConfigSegment.php" target="_blank">ConfigSegment.php</a>
* Inline image: <img src="{{ site.baseurl }}common/images/icon_github-account.png">


<h2 id="tables">Tables</h2>
<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables" target="_blank">Markdown tables</a> are a barrel o' laffs, I tellya. You can certainly use them but Steve recommends not being crazy.

Use HTML tables instead; no styling or classes required.

<h2 id="images">Images</h2>
We recommend putting all images in `common/images` or a subdirectory as opposed to storing them under `guides`. Use a naming convention that separates your files from ours.

You can use either an HTML `<img>` tag, or you can use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images" target="_blank">Markdown</a>-style image tags.

Sample HTML:

<p><img src="{{ site.baseurl }}common/images/price_rend1.png" alt="Magento\Framework\Pricing\Render\RenderPool searches for renders based on SaleableItem type and PriceCode (createPriceRender, createAmountRender, and createAdjustmentRender methods"></p>

<h2 id="note">Note, Tip, Warning</h2>
Use them as `<div>`s as follows:

<div class="bs-callout bs-callout-info" id="info">
  <p>This is a note.</p>
</div>

<div class="bs-callout bs-callout-warning">
    <p>This is important.</p>
</div>

<div class="bs-callout bs-callout-tip">
  <p>This is a tip.</p>
</div>

<div class="bs-callout bs-callout-danger">
  <p>This is a caution. Use this only in very limited circumstances when discussing:
  </p><ul class="note"><li>Data loss</li>
  <li>Financial loss</li>
  <li>Legal liability</li></ul><p></p>
</div>

<h2 id="code">Code samples</h2>
There are at least three ways to do them:

* <a href="https://wiki.corp.x.com/display/WRI/Part+2.+Author+in+Markdown+-+Best+Practices#Part2.AuthorinMarkdown-BestPractices-GuidelinesforCreatingGists" target="_blank">Gists</a>, which are stored in GitHub and versioned like anything else. Let Steve know if this interests you. You get syntax highlighting for free.
* By <a href="#code-indent">indenting</a> the entire sample one tab stop past the paragraph above it.
* Using a <a href="#code-hilite">special syntax</a> that enables you to take advantage of syntax highlighting.

<div class="bs-callout bs-callout-info" id="info">
  <p>There's almost no need to ever use <code>&lt;pre</code> tags.</p>
</div>

<h3 id="code-indent">Indenting code</h3>
This is really easy *and* it lets you avoid escaping left angle brackets because it's Markdown, not HTML. Disadvantage is there's no syntax highlighting.

Couple of examples follow.

**Example 1**: Code following a normal paragraph (what could be easier?). All you need to do is indent every line of the code sample one additional tab stop.

    add-apt-repository ppa:ondrej/php5-5.6
    apt-get -y update
    apt-get -y install php5

(Thrilling, isn't it?)

**Example 2**: Just a little trickier; to use code samples in a bulleted or numbered list, indent three tab stops. Looks weird in the source but it works.

1.  Enter the following command:

        apt-get -y install php5

2.  Verify the PHP version by entering `php -v`. Messages similar to the following should display:

        PHP 5.5.9-1ubuntu4.4 (cli) (built: Sep  4 2014 06:56:34)
        Copyright (c) 1997-2014 The PHP Group
        Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
        with Zend OPcache v7.0.3, Copyright (c) 1999-2014, by Zend Technologies

<h3 id="code-hilite">Syntax highlighting</h3>
To get syntax highlighting to work, either use the following or use a gist:

{% highlight PHP %}
<? php
'cache_types' =>
  array (
    'config' => 1,
    'layout' => 1,
    'block_html' => 1,
    'view_files_fallback' => 1,
    'view_files_preprocessing' => 1,
    'collections' => 1,
    'db_ddl' => 1,
    'eav' => 1,
    'full_page' => 1,
    'translate' => 1,
    'config_integration' => 1,
    'config_webservice' => 1,
    'config_integration_api' => 1,
  ),
);
{% endhighlight %}

#### Some light reading

* <a href="https://wiki.corp.x.com/display/WRI/Part+2.+Author+in+Markdown+-+Best+Practices" target="_blank">Best practices for Markdown</a>
* <a href="https://wiki.corp.x.com/display/WRI/Part+1.+Author+in+Markdown+-+Get+Started" target="_blank">Getting started with Markdown</a>