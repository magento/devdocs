---
layout: howtom2devgde_chapters
title: Template engine
---

<h1 id="m2devgde-temp-eng">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/view/template-engine.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-temp-eng-over">Overview</h2>
A template engine is a mechanism for rendering HTML output from templates associated with page layout blocks. The Magento template rendering subsystem can support multiple template engines, including the default PHP-based engine for processing PHTML templates.

This article describes the design of the Magento template rendering subsystem and the implementation of the default template engine, and provides instructions on how to add a custom engine to support templates other than PHTML.

<h2 id="m2devgde-temp-eng-role">Role of the Magento Template Engine in Rendering HTML Output</h2>
A template engine is invoked during page layout processing. Any page layout is a hierarchy of containers, which are placeholders for content, and blocks, which actually generate content.  Each block corresponds to a certain Magento PHP class.

All block classes are inherited from either <code>Magento\Framework\View\Element\AbstractBlock</code> or <code>Magento\Framework\View\Element\Template</code> (which in its turn is inherited from <code>AbstractBlock</code>).

The difference between these two classes is that the <code>Template</code> class has methods required to work with templates and allows initiating a template engine to generate HTML content based on a template, while <code>AbstractBlock</code> has no methods for working with templates, and provides only displaying the hard-coded HTML content:

<p><img src="{{ site.baseurl }}common/images/view_te2.png" alt="Blocks class diagram"></p>

The AbstractBlock class implements the main {code}toHtml()</code> method, which is called by all blocks when it is necessary to generate the HTML output.
The sequence of execution of {code}toHtml()</code> depends on whether the HTML content was previously cached:
Case 1: HTML was previously cached:
Load the cached HTML content.
Perform the HTML content post-processing defined in <code>_afterToHtml()</code>.
Case 2: HTML was not previously cached:
Perform the preparatory tasks defined <code>in _beforeToHtml()</code>.
Generate the HTML content. Here is where the template engine is invoked for blocks with templates: if a block class is inherited from the <code>Template</code> class, and has a predefined or dynamically obtained  template name, then generating the HTML content is performed by calling <code>Tempalte:: fetchView()</code> which initiates the template engine, calls the <code>render()</code> method, and returns the HTML content for subsequent processing by <code>AbstractBlock::toHtml()</code>.
Cache the generated HTML.
Perform the HTML content post-processing defined in <code>_afterToHtml()</code>.

Schematically, a template engine performs the following (Case 2, step 2):

<p><img src="{{ site.baseurl }}common/images/view_te4.png" alt="toHtml() execution flow"></p>

The same process, with more technical details:

<p><img src="{{ site.baseurl }}common/images/view_te5.png" alt="toHtml() execution flow more details"></p>

<h3 id="m2devgde-temp-eng-invoke">Invoking a PHTML Block from a PHTML Block</h3>

The following diagram illustrates the actions executed when a PHTML block is invoked from a PHTML block by a <code>getChildHtml</code> call.

<p><img src="{{ site.baseurl }}common/images/view_te6.png" alt="Diagram: actions executed when a PHTML block is invoked from a PHTML block by a getChildHtml call"></p>

Example of a <code>getChildHtml</code> call:

<code>
&lt;?php&nbsp;echo&nbsp;$this-&gt;getChildHtml('product_type_data')&nbsp;?&gt;
</code>


<h3 id="m2devgde-temp-eng-temp">Template Rendering</h3>

Template files rendering is performed by <code>\Magento\Framework\View\TemplateEngine\Php</code>:
<p><img src="{{ site.baseurl }}common/images/view_te7.png" alt="template rendering flow diagram"></p>

<h2 id="m2devgde-temp-eng-resources">Template Engine Resources</h2>
<h3 id="m2devgde-temp-eng-temp">Template Engine File Structure</h3>
All template engine files are stored in the <code>View</code> library:
<pre>
_lib/Magento/View
&nbsp;|--TemplateEngineFactory.php
&nbsp;|--TemplateEngineInterface.php
&nbsp;|--TemplateEnginePool.php
&nbsp;|_/Element
&nbsp;&nbsp;&nbsp;|--AbstractBlock.php
&nbsp;&nbsp;&nbsp;|--Template.php
&nbsp;|_/TemplateEngine
&nbsp;&nbsp;&nbsp;|--Php.php
</pre>

The default engine for working with templates is the <code>Magento\Framework\View\TemplateEngine\Php</code> class.

<h3 id="m2devgde-temp-eng-basic">Basic Classes</h3>
The class diagram of the basic classes implementing the template rendering subsystem:
<p><img src="{{ site.baseurl }}common/images/view_te8.png" alt="template rendering diagram of classes"></p>

<h3 id="m2devgde-temp-eng-desc">Class Description</h3>
<h4 id="m2devgde-temp-eng-class-temp"><code>Magento\Framework\View\Element\Template</code></h4>
The <code>Magento\Framework\View\Element\Template</code> class is the starting point for template rendering. To initiate the rendering process, <code>Template::fetchView()</code> is invoked with the name of the template file. It starts by extracting the template file extension and passing it to <code>Magento\Framework\View\TemplateEngineFactory</code>. On receiving an instance of <code>Magento\Framework\View\TemplateEngineInterface</code>, it calls the <code>render()</code> method and passes the rendered output to the caller.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>fetchView($fileName)</code>
      </td>
      <td>Retrieve the block view from the file (template). </td>
    </tr>
    <tr>
      <td>
        <code>getTemplateFile() </code>
      </td>
      <td>Get the absolute path to the template. </td>
    </tr>
    <tr>
      <td>
        <code>setTemplate($template) </code>
      </td>
      <td>Set a path to the template used for generating the block output. </td>
    </tr>
    <tr>
      <td>
        <code>getTemplate() </code>
      </td>
      <td>Get relevant path to the template. </td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-temp-eng-class-tef"><code>Magento\Framework\View\TemplateEngineFactory</code></h4>

<code>TemplateEngineFactory::create()</code> receives the file extension, and constructs an instance of <code>Magento\Framework\View\TemplateEngineInterface</code> that implements the appropriate template engine.

<table>
<tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>create($name)</code>
      </td>
      <td>Retrieve a template engine instance by its unique name.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-temp-eng-class-tep"><code>Magento\Framework\View\TemplateEnginePool</code></h4>

This class maintains the list of all template engines available in the system. It uses the template engine factory to construct a template engine instance upon the first request.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>get($name)</code>
      </td>
      <td>Retrieve a template engine instance by its unique name.</td>
    </tr>
  </tbody>
</table>
<h4 id="m2devgde-temp-eng-class-tei">
  <code>Magento\Framework\View\TemplateEngineInterface</code>
</h4>
This interface defines the <code>render()</code>method. The resulting markup generated by the template engine is not sent directly to the output buffer, but it is returned to the caller.
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <pre>
render(&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\Magento\Framework\View\Element\BlockInterface&nbsp;$block,&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$templateFile,&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array&nbsp;$dictionary&nbsp;=&nbsp;array()&nbsp;
&nbsp;)
</pre>
      </td>
      <td>
        <br/>Render the specified template in the context of a particular block and with the data provided in<code>$vars</code>.</td>
    </tr>
  </tbody>
</table>

<h4 id="m2devgde-temp-eng-class-php">
  <code>Magento\Framework\View\TemplateEngine\Php</code>
</h4>
Implements <code>Magento\Framework\View\TemplateEngineInterface</code>,handles PHTML files, which use PHP as a templating language. In its <code>render()</code> implementation, it invokes <code>include()</code> to execute the PHP code contained in the template file. This means that PHP code in a template file must be written assuming that it will not be included to the template's associated block class.</p>
<table>
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
<pre>
render(&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BlockInterface&nbsp;$block,&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$fileName,&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array&nbsp;$dictionary&nbsp;=&nbsp;array())&nbsp;
      </pre>
      </td>
      <td>Include the specified PHTML template using the given block as <code>$this</code> reference, though only public methods will be accessible. </td>
    </tr>
  </tbody>
</table>

<h2 id="m2devgde-temp-eng-class-cust">Customizing the Template Rendering Subsystem</h2>
The Magento template rendering subsystem supports the following:

* Your module can introduce a new template engine.
* You can use PHTML templates together with other kinds of templates.
* You can embed any block to other blocks regardless of the underlying template engine.

<h2>Adding a New Template Engine</h2>
To add support for a new template engine:

1. Save the template engine code base in your Magento instance directory.
2. Create a new implementation of <code>Magento\Framework\View\TemplateEngineInterface</code>. This class is used to initialize the underlying template engine, and must also implement the <code>render()</code> function responsible for invoking the template engine on the given template file.
3. Register a newly introduced engine class through the DI configuration to process template files of a certain type as follows:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;Magento\Framework\View\TemplateEngineFactory&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;param&nbsp;name=&quot;engines&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;array&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;key=&quot;{template_extension}&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;value&gt;{engine_class}&lt;/value&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/array&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/param&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&lt;/config&gt;
</pre>

Where:

* <code>{template_extension}</code> is the type of template files, which are to be processed by the template engine. For example, phtml
* <code>{engine_class}</code> is the name of the class that implements a template engine

Example of a DI configuration file:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;Magento\Framework\View\TemplateEngineFactory&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;param&nbsp;name=&quot;engines&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;array&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;key=&quot;phtml&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;value&gt;Magento\Framework\View\TemplateEngine\Php&lt;/value&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/array&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/param&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&nbsp;&lt;/config&gt;
</pre>

