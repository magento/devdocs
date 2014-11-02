---
layout: howtom2devgde_chapters
title: Static file processing 
---

<h1 id="m2devgde-static-proc">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/view/static-process.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="m2devgde-static-proc-intro">Overview</h2>
<p>When a browser loads a web page and requests a static view file such as a JavaScript, CSS, image file, or another page asset,
   the Magento system processes the requested file before it returns the file to the browser.
</p>
<p>This processing can include searching for a not-found file in additional locations, file merging, and file minification.</p>
<p>Whenever a static view file is requested in the Magento application,
   it uses the appropriate mechanisms for the file type and system configuration, as follows:
</p>
<dl>
   <dt>View file fallback mechanism</dt>
   <dd>
      <p>When a view file is not found in the requested location, Magento uses rules to search for the file in additional locations.</p>
      <p>The following diagram shows how Magento processes static view files:</p>
      <p><img src="{{ site.baseurl }}common/images/Preprocesing_assets.png" alt="Static view files processing flow"></p>
   </dd>
   <dt>CSS files preprocessing</dt>
   <dd>
      <p>Magento generates CSS files from LESS files.</p>
   </dd>
   <dt>CSS and JavaScript file merging</dt>
   <dd>
      <p>Magento merges all CSS or JavaScript assets linked in the &lt;head> element of the page into a single files and replaces referenced files with a single reference.</p>
   </dd>
   <dt>JavaScript files minifying</dt>
   <dd>
      <p>Magento removes white spaces and comments.
   </dd>
</dl>
<h2 id="example-fallback">Fallback mechanism example</h2>
<p>This example illustrates the fallback mechanism.</p>
<p>The <code>http://www.example.com/pub/static/frontend/Magento/blank/en_US/images/logo.gif</code> URL requests the <code>logo.gif</code> image file.</p>
<p>Magento API request:</p>

   <pre>$this->getViewFileUrl('logo.gif');</pre>

<p>The current system context is:</p>

<table>
   <tr>
      <th>application area</th>
      <td>frontend</td>
   </tr>
   <tr>
      <th>theme</th>
      <td><code>theme</code>, which inherits <code>parent_theme</code></td>
   </tr>
   <tr>
      <th>language</th>
      <td><code>en_US</code></td>
   </tr>
</table>

<p>By using theme inheritance and view file fallback rules, the system searches in this order for these files:</p>
<p class="q">Reviewer: Please verify these paths. I do not see a /web/directory on my Magento 2 installation.</p>

<ol>
   <li><code>app/design/frontend/theme/web/i18n/en_US/logo.gif</code></li>
   <li><code>app/design/frontend/theme/web/logo.gif</code></li>
   <li><code>app/design/frontend/parent_theme/web/i18n/en_US/logo.gif</code></li>
   <li><code>app/design/frontend/parent_theme/web/logo.gif</code></li>
</ol>
<p>If the file is found, it is published in the following fully qualified location: <code>pub/static/frontend/theme/en_US/images/logo.gif</code>.</p>
<p>The path inside the <code>pub/static</code> directory coincides with initial path in the <code>app/design</code> directory.</p>
<h2 id="publish-static-view-files">Static view file publication</h2>
<p>Static files in their initial location might be not web accessible. To enable the Magento server to deliver static files, locate them in the public <code>pub/static</code> directory. The copy process is also known as <i>publication</i>.</p>
<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40"/>
<span class="glyphicon-class">
 <p>Any files that you manually upload (for example, product images), are always stored in <code>pub/media</code>.</p>
 </span>
</div>
<p>The publication logic depends on the application mode:</p>
<dl>
   <dt>Default mode</dt>
   <dd>Static files are published automatically when the requested file does not exist in the <code>pub/static</code> directory, or it exists but the original file was modified.</dd>
   <dt>Production mode</dt>
   <dd>To publish files, you must run the view files deployment tool. The script is located in <a href="{{ site.mage2000url }}dev/tools/Magento/Tools/View/deploy.php" target="_blank">deploy.php</a>.</dd>
   <dt>Developer mode</dt>
   <dd>Files are not published. Though you can still run the deployment tool, all static view files are cached in the <code>pub/static</code> directory.
   So, if a frontend developer changes any static view file, they must re-run the tool after each change.</dd>
</dl>
<h2 id="css-files">CSS file publication</h2>
<p>The publication flow for CSS files depends on whether CSS merging is enabled. The following sections describe the flow for both cases.</p>
<h3 id="merging-enabled">Merging enabled</h3>
<p>If CSS merging is enabled in your Magento instance, a CSS file copied from <code>app/design/[area]/[Vendor name]/[Theme name]</code> to <code>pub/static</code> is also parsed for references to other static resources, such as images or other CSS files.</p>
<p>To enable publication of these files, reference them in a CSS file, as follows:</p>
<ul>
   <li>Use the CSS <code>url()</code> directive to reference the file.</li>
   <li>Use a relative path to reference the file. The system does not recognize absolute URLs or URIs.</li>
</ul>
<p>For example, if the original CSS file is to be published from <code>app/design/frontend/Magento/blank/web/css-topics/styles.css</code>,
the identified references are published from following locations:</p>

<p class="q">Reviewer: Again, please verify the /web/ directory path.</p>

<table>
<col width="50%">
<col width="50%">
   <thead>
      <tr>
         <th>Reference</th>
         <th>Resulting file</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>url('../images/arrow.gif')</code></td>
         <td><code>app/design/frontend/Magento/blank/web/images/arrow.gif</code></td>
      </tr>
      <tr>
         <td><code>url(../images/arrow.gif)</code></td>
         <td><code>app/design/frontend/Magento/blank/web/images/arrow.gif</code></td>
      </tr>
      <tr>
         <td><code>url("callout.png")</code></td>
         <td><code>app/design/frontend/Magento/blank/web/css-topics/callout.png</code></td>
      </tr>
      <tr>
         <td><code>@include url('./styles-ie.css');</code></td>
         <td><code>app/design/frontend/default/demo/css-topics/styles-ie.css</code></td>
      </tr>
      <tr>
         <td><code>@include './styles-ie.css';</code></td>
         <td>N/A. The <code>@include</code> without <code>url()</code> is NOT recognized.</td>
      </tr>
      <tr>
         <td><code>url("http://example.com/image.jpg")</code>
            or <code>url("https://example.com/image.jpg")</code>
         </td>
         <td>N/A. Absolute URL.</td>
      </tr>
      <tr>
         <td><code>url("/image.jpg")</code></td>
         <td>N/A. Absolute URI.</td>
      </tr>
   </tbody>
</table>

<p>The referenced files can be located on different fallback levels, the publishing mechanism locates them recursively.</p>
<h3 id="merging-disabled">Merging disabled</h3>
<p>If CSS merging is disabled, CSS files are not parsed for references during the publication process.</p>
<p>Instead, the server requests the resource as soon as it is displayed on a browser page.</p>
<p>If the requested file is intended to be in the <code>pub/static</code> directory, the web server processes it and optionally, depending on the application mode, publishes it.</p>
<h3 id="context-notation">Context notation in CSS file references</h3>
<p>You can reference resources in CSS files relative to a theme or a certain module using scope notation.</p>
<p>The resulting link to a resource in the published file is relative to the original CSS file.</p>
<p>Examples follow:</p>
<h4 id="merging-disabled-css1">CSS specified by path</h4>

Example: <code>css-topics/one/two/file.css</code>

<table>
   
   <thead>
      <tr>
         <th>Reference with context notation</th>
         <th>Resulting reference</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>url([Vendor name]_[Module name]::images/image.gif)</code></td>
		 <td><code>url(../../../../[Vendor name]_[Module name]/images/image.gif)</code></td>
      </tr>
      
   </tbody>
</table>

<h4 id="merging-disabled-css1">CSS specified by module</h4>

Example: <code>[Vendor name]_[Module name]::css-topics/one/two/file.css</code>

<table>
   <colgroup><col width="25%">
   <col width="75%">
</colgroup>
   <thead>
      <tr>
         <th>Reference with context notation</th>
         <th>Resulting reference</th>
      </tr>
   </thead>
   <tbody>
      <tr>
		 <td><code>[Vendor name]_[Module name]::css-topics/one/two/file.css</code></td>
		 <td><code>url(../../../../[Vendor name]_[Module name]/images/image.gif)</code></td>
      </tr>
      
   </tbody>
</table>

<h2 id="static-view-files-url-resolution">URL resolution for static view files</h2>
<p>The URL resolution mechanism builds URLs for static view files.</p>
<p>The mechanism also performs file publishing, if the initial location is not web accessible.</p>
<p>The following description of the URL resolution process illustrates the static view files processing from the prospective of the logic involved.</p>
<p>A fully qualified context for generating a URL path to a static view file includes: area code, theme path, and locale code. The URL path is generated from a file ID an invariant relative path to the file, which does not change regardless of whether it is used as part of the absolute file name or URL. The file ID may optionally qualify module name.</p>
<p>The following diagram illustrates how a URL to a static view file is generated:</p>
<p><img src="{{ site.baseurl }}common/images/va_10.png" alt="Generate a URL to a static view file"></p>
<p>The diagram uses these notations:</p>
<ul>
   <li><b>Client code</b>. Any client code that needs a URL to a static file.
   Typically, a page template, but can be a layout XML or helper file.</li>
   <li><b>AbstractBlock</b>. <code>\Magento\Framework\View\Element\AbstractBlock</code></li>
   <li><b>AssetRepository</b>. <code>\Magento\Framework\View\Asset\Repository</code></li>
   <li><b>AssetContext</b>. <code>\Magento\Framework\View\Asset\ContextInterface</code></li>
   <li><b>Asset</b>. <code>\Magento\Framework\View\Asset\File</code></li>
</ul>
<p>To generate a URL for a static file, client code uses the <code>getUrl()</code> or <code>getUrlWithParams()</code> method of the asset repository.</p>
<p>The asset repository is <code>\Magento\Framework\View\Asset\Repository</code>.</p>
<p>The repository:</p>
<ol>
   <li>Determines all necessary parameters and context.</li>
   <li>Creates a <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Asset/Repository.php" target="_blank">\Magento\Framework\View\Asset\File</a> object.</li>
   <li>Uses the <code>File::getUrl()</code> method to get the necessary URL to the static view file.</li>
</ol>
<p>If a client requests the URL, the web server handles it as a separate request:</p>
<ul>
<li>If the file already exists in the specified location in the <code>pub/static</code> directory, a web server returns it as-is, as a static resource.</li>
<li>If the file does not exist in the specified location, an internal URL rewrite rule from <code>pub/static/.htaccess</code> routes the request to the <code>pub/static.php</code> entry point, which publishes the file to this location in <code>pub/static</code> and returns the file content.</li>
<h3 id="example-url-resolution">URL resolution example</h3>
<p>The context:</p>

<table>
   <tbody>
      <tr>
         <th>Current area</th>
         <td>frontend</td>
      </tr>
      <tr>
         <th>Current theme</th>
         <td><code>Magento/blank</code></td>
      </tr>
      <tr>
         <th>Current locale</th>
         <td><code>en_US</code></td>
      </tr>
      <tr>
         <th>Requested file</th>
         <td><code>Magento_Catalog::images/product.gif</code></td>
      </tr>
      <tr>
         <th>Public static directory base URL</th>
         <td><code>http://magento.example.com/pub/static</code></td>
      </tr>
   </tbody>
</table>

<p>The generated URL is: <code>http://www.example.com/pub/static/frontend/Magento/blank/en_US/Magento_Catalog/web/images/product.gif</code>.</p>
<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
 <p>In production mode, the URL generating mechanism does not support the locale code; that is, generated URLs do not contain locale code.</p>
 </span></div>