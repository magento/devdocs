<div markdown="1">

The following table discusses the component types that Magento Marketplace supports. The composer `type` column specifies the value of the `type` field you must add to `composer.json` for that type of component.

<table>
<tbody>
<tr>
<th>Friendly name</th>
<th>composer.json <code>type</code></th>
<th>Description</th>
</tr>
<tr>
<td>Metapackage</td>
<td>metapackage</td>
<td><p>A special type that specifies other components. A metapackage consists of only a <code>composer.json</code> that specifies a list of components and their dependencies. </p>
<p>For example, both Magento CE and Magento EE are metapackages.</p></td>
</tr>
<tr>
<td>Module</td>
<td>magento2-module</td>
<td>Code that modifies Magento application behavior. You can upload a single module to the Magento Marketplace or your module can be dependent on some parent package.</td>
</tr>
<tr>
<td>Theme</td>
<td>magento2-theme</td>
<td>Code that modifies the look and feel of the storefront or Magento Admin.</td>
</tr>
<td>Language package</td>
<td>magento2-language</td>
<td>Translations for the storefront or Admin.</td>
</tbody>
</table>
