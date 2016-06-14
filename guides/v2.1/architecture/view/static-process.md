---
layout: default
group: 
subgroup: View library
title: Static file processing
menu_title: Static file processing
menu_order: 
version: 2.1
github_link21: architecture/view/static-process.md
---

#### Contents
*  <a href="#m2devgde-static-proc-intro">Overview</a>
*  <a href="#example-fallback">Fallback mechanism example</a>
*  <a href="#publish-static-view-files">Static view file publication</a>
*  <a href="#css-files">CSS file publication</a>
*  <a href="#static-view-files-url-resolution">URL resolution for static view files</a>

<h2 id="m2devgde-static-proc-intro">Overview</h2>
When a browser loads a web page and requests a static view file such as a JavaScript, CSS, image file, or another page asset, the Magento application processes the requested file before it returns the file to the browser.

This processing can include searching for a not-found file in additional locations, file merging, and file minification.

Whenever a static view file is requested in the Magento application, it uses the appropriate mechanisms for the file type and system configuration, as follows:

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
      <p>Magento merges all CSS or JavaScript assets linked in the <code>&lt;head></code> element of the page into a single files and replaces referenced files with a single reference.</p>
   </dd>
   <dt>JavaScript files minifying</dt>
   <dd>
      <p>Magento removes white spaces and comments.</p>
   </dd>
</dl>

<h2 id="example-fallback">Fallback mechanism example</h2>
As an example of static file fallback, suppose there is a request for the `logo.svg` image in the Blank theme.

The request URL is similar to:

      http://www.example.com/pub/static/frontend/Magento/blank/en_US/images/logo.svg

The Magento API request is similar to:

      $this->getViewFileUrl('logo.svg');

The current system context is:

<table>
   <tr>
      <th>Application area</th>
      <td>frontend</td>
   </tr>
   <tr>
      <th>Theme</th>
      <td><code>theme</code>, which inherits from <code>parent_theme</code></td>
   </tr>
</table>

Using theme inheritance and view file fallback rules, Magento uses the following search order:

<ol>
   <li><code>app/design/frontend/Magento/blank/web/images/logo.svg</code></li>
   <li><code>app/design/frontend/Magento/blank/web/logo.svg</code></li>
   <li><code>app/design/frontend/Magento/parent_theme/web/images/logo.svg</code></li>
   <li><code>app/design/frontend/Magento/parent_theme/web/logo.svg</code></li>
</ol>

If the file is found, it is published in the following location: 

      pub/static/frontend/blank/web/images/logo.svg

The path inside the `pub/static` directory coincides with the initial path in the `app/design` directory.

<h2 id="publish-static-view-files">Static view file publication</h2>
The Magento application has a *static view files publication command* that enables you to publish static view files in certain Magento <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html">modes</a>.

<div class="bs-callout bs-callout-info" id="info">
 <p>Any files that you manually upload (for example, product images), are always stored in <code>pub/media</code>.</p>
</div>

To use the static view file publication tool, see <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-static-view.html">deploy static view files</a>.

<h2 id="css-files">CSS file publication</h2>
<p>The publication flow for CSS files depends on whether CSS merging is enabled. The following sections describe the flow for both cases.</p>
<h3 id="merging-enabled">Merging enabled</h3>
<p>If CSS merging is enabled in your Magento instance, a CSS file copied from <code>app/design/&lt;areaname>/&lt;VendorName>/&lt;ThemeName></code> to <code>pub/static</code> is also parsed for references to other static resources, such as images or other CSS files.</p>
<p>To enable publication of these files, reference them in a CSS file, as follows:</p>
<ul>
   <li>Use the CSS <code>url()</code> directive to reference the file.</li>
   <li>Use a relative path to reference the file. The Magento application does not recognize absolute URLs or URIs.</li>
</ul>
<!-- <p>For example, if the original CSS file is to be published from <code>app/design/frontend/Magento/blank/web/css-topics/styles.css</code>,
the identified references are published from following locations:</p>

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
</table> -->

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
         <td><code>url(&lt;VendorName>_&lt;ModuleName>::images/image.gif)</code></td>
		 <td><code>url(../../../../&lt;VendorName>_&lt;ModuleName>/images/image.gif)</code></td>
      </tr>

   </tbody>
</table>

<h4 id="merging-disabled-css1">CSS specified by module</h4>

Example: <code>&lt;VendorName>_&lt;ModuleName>::css-topics/one/two/file.css</code>

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
		 <td><code>&lt;VendorName>_&lt;ModuleName>::css-topics/one/two/file.css</code></td>
		 <td><code>url(../../../../&lt;VendorName>_&lt;ModuleName>/images/image.gif)</code></td>
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
   <li>Creates a <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/View/Asset/Repository.php" target="_blank">\Magento\Framework\View\Asset\File</a> object.</li>
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
 <p>In production mode, the URL generating mechanism does not support the locale code; that is, generated URLs do not contain locale code.</p>
