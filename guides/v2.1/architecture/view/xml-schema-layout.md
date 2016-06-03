---
layout: default
group: 
subgroup: View library
title: XML layouts and schemas
menu_title: XML layouts and schemas
menu_order: 
github_link21: architecture/view/xml-schema-layout.md
---

<h2 id="m2devgde-xml-layout-intro">Overview</h2>
<p>In the Magento system, you define application page layouts in XML files, also known as <i>layouts</i>.</p>
<p>The system uses the Magento XML schemas to validate these layouts.</p>
<h2 id="xml-schemas">XML schemas</h2>
<p>The Magento system uses the following XML schemas to validate these layouts:</p>

<p class="q">Reviewer: The original topic mentioned 3 XSD files, two of which do not exist or have been renamed: layout_single.xsd, layouts.xsd, and layout_merged.xsd. I guessed that layout_single = layout_generic but I do not know the correct reference for layouts.xsd. Please provide this information.</p>
<table>
   <tbody>
      <tr style="background-color: lightgray">
         <th>Schema</th>
         <th>Validates</th>
      </tr>
      <tr>
         <td><a href="{{ site.mage2100url }}lib/internal/Magento/Framework/View/Layout/etc/layout_generic.xsd" target="_blank">layout_generic.xsd</a></code>
         </td>
         <td>Individual layouts</td>
      </tr>
      <tr>
         <td><a href="{{ site.mage2100url }}lib/internal/Magento/Framework/View/PageLayout/etc/layouts.xsd" target="_blank">layouts.xsd</a></td>
         <td>Individual layouts.</td>
      </tr>
      <tr>
         <td><a href="{{ site.mage2100url }}lib/internal/Magento/Framework/View/Layout/etc/layout_merged.xsd" target="_blank">layout_merged.xsd</a></td>
         <td>Merged layouts.</td>
      </tr>
   </tbody>
</table>
<p>These layout-specific XML schemas might use additional universal XML schemas.</p>
<h2 id="layout-elements">XML layout elements and structure</h2>
<p>The following table lists the allowable XML layout elements.
   The table reflects the correct structure for these elements.
</p>
<table style="width:135%">
   <col width="33%">
   <col width="33%">
   <col width="33%">
   <thead>
      <tr>
         <th>Description</th>
         <th>Attributes</th>
         <th>Children</th>
      </tr>
   </thead>
   <tbody>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;layout&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Mandatory root element.</p>
         </td>
         <td>
            <ul>
               <li><code>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</code></li>
               <li><code>xsi:noNamespaceSchemaLocation="../../../../Core/etc/layout_single.xsd"</code></li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;block></code></li>
               <li><code>&lt;container></code></li>
               <li><code>&lt;remove></code></li>
               <li><code>&lt;move></code></li>
               <li><code>&lt;update></code></li>
               <li><code>&lt;referenceBlock></code></li>
               <li><code>&lt;referenceContainer></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;block&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>A unit of a page output, which generates content. Each block corresponds to a Magento PHP class.
               Instantiate each block one time only.
            </p>
            <p>If the cacheable attribute is set to false for one block on the page,
               each request generates the whole page.
            </p>
         </td>
         <td>
            <ul>
               <li><code>class="{block_class}"</code> (required)</li>
               <li><code>name="{arbitrary_name}"</code> (unique)</li>
               <li><code>as="{alias}"</code></li>
               <li><code>before="{name_of_sibling}"</code></li>
               <li><code>after=" {name_of_sibling}"</code></li>
               <li><code>template="{block_template}"</code></li>
               <li><code>group="{group_name}"</code></li>
               <li><code>output="1|0"</code></li>
               <li><code>acl="{resource_name}"</code> (the block is generated and its output is added to the rendered page if a user has permission for the resource)</li>
               <li><code>ifconfig="{сonfig_path}"</code> (the element is rendered just in case the corresponding configuration flag is set for the current scope)</li>
               <li><code>cacheable="true|false"</code></li>
               <li><code>ttl="block_lifetime_for_Varnish_ESI_cache"</code></li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;block></code></li>
               <li><code>&lt;container></code></li>
               <li><code>&lt;action></code></li>
               <li><code>&lt;arguments></code></li>
               <li><code>&lt;referenceBlock></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;container&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>A placeholder for blocks and other containers.</p>
         </td>
         <td>
            <ul>
               <li><code>name="{arbitrary_name}"</code> (unique)</li>
               <li><code>as="{alias}"</code></li>
               <li><code>before="{name_of_sibling}"</code></li>
               <li><code>after="{name_of_sibling}"</code></li>
               <li><code>group="{group_name}"</code></li>
               <li><code>output="1|0"</code></li>
               <li><code>htmlTag="{tag_to_wrap_in}"</code></li>
               <li><code>htmlId="{id_of_wrapping_tag}"</code></li>
               <li><code>htmlClass="{class_of_wrapping_tag}"</code></li>
               <li><code>label="label_displayed_for_user}"</code></li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;block></code></li>
               <li><code>&lt;container></code></li>
               <li><code>&lt;remove></code></li>
               <li><code>&lt;move></code></li>
               <li><code>&lt;referenceBlock></code></li>
               <li><code>&lt;referenceContainer></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;update&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>The specified handle is "included" and executed recursively.</p>
         </td>
         <td>
            <ul>
               <li><code>handle="{name_of_handle_to_include}"</code></li>
            </ul>
         </td>
         <td/>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;move&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Sets the declared element as a child to another element in the specified order.</p>
         </td>
         <td>
            <ul>
               <li><code>element="{name.of.an.element}"</code> (required)</li>
               <li><code>destination="{name.of.destination.element}"</code> (required)</li>
               <li><code>as="{new_alias}"</code></li>
               <li><code>after="{name.of.element.after}"</code></li>
               <li><code>before="{name.of.element.before}"</code></li>
            </ul>
         </td>
         <td/>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;remove&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Removes the specified element.</p>
         </td>
         <td>
            <ul>
               <li><code>name="{name.of.an.element}"</code> (required)</li>
            </ul>
         </td>
         <td/>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;action&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Invokes block method
               Will become obsolete eventually. It is being gradually replaced with non-imperative layout instructions.
            </p>
         </td>
         <td>
            <ul>
               <li><code>method="{block_class_method}"</code> (required)</li>
               <li><code>ifconfig="{config_path}"</code> (The element is rendered just in case the corresponding configuration flag is set by specified path for current scope.)</li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;argument></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;referenceBlock&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Wraps layout instructions, that is they will be executed in the context of the specified block.</p>
         </td>
         <td>
            <ul>
               <li><code>name="{block_name}"</code> (required)</li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;block></code></li>
               <li><code>&lt;container></code></li>
               <li><code>&lt;remove></code></li>
               <li><code>&lt;move></code></li>
               <li><code>&lt;update></code></li>
               <li><code>&lt;referenceBlock></code></li>
               <li><code>&lt;referenceContainer></code></li>
               <li><code>&lt;action></code></li>
               <li><code>&lt;arguments></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;referenceContainer&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Wraps layout instructions, that is they will be executed in the context of the specified container.</p>
         </td>
         <td>
            <ul>
               <li><code>name="{container_name}"</code> (required)</li>
               <li><code>htmlTag="{wrapping_tag}"</code></li>
               <li><code>htmlClass="{class_of_wrapping_tag}"</code></li>
               <li><code>htmlId="{id_of_wrapping_tag}"</code></li>
               <li><code>label="{lable_to_be_displayed_for_admin_user}"</code></li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;block></code></li>
               <li><code>&lt;container></code></li>
               <li><code>&lt;remove></code></li>
               <li><code>&lt;move></code></li>
               <li><code>&lt;update></code></li>
               <li><code>&lt;referenceBlock></code></li>
               <li><code>&lt;referenceContainer></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;arguments&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>A wrapper for arguments.</p>
         </td>
         <td/>
         <td>
            <ul>
               <li><code>&lt;argument></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;argument&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Handles parameters that are injected into the parent block constructor during instantiation.

            </p>
         </td>
         <td>
            <ul>
               <li><code>name ="{ argument_name}"</code> (required, unique)</li>
               <li><code>xsi:type =" string|boolean|object|number|null|array"</code></li>
               <li><code>translate="true|false"</code></li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;item></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;item&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Handles array items for array arguments type.</p>
         </td>
         <td>
            <ul>
               <li><code>name ="{ argument_name}"</code> (required, unique)</li>
               <li><code>xsi:type =" string|boolean|object|number|null|array"</code></li>
               <li><code>translate="true|false"</code></li>
            </ul>
         </td>
         <td>
            <ul>
               <li><code>&lt;item></code></li>
            </ul>
         </td>
      </tr>
      <tr style="background-color: lightgray">
         <th colspan="3"><code>&lt;updater&gt;</code></th>
      </tr>
      <tr>
         <td>
            <p>Changes argument value.</p>
         </td>
         <td/>
         <td/>
      </tr>
   </tbody>
</table>
<h2 id="xml-validation">Validate XML layouts</h2>
<p>Use the following tests
   to validate new or changed layouts:
</p>
<table style="width:125%">
   <col width="75%">
   <col width="25%">
   <thead>
      <tr style="background-color: lightgray">
         <th>Test</th>
         <th>Validates</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><a href="{{ site.mage2100url }}dev/tests/static/testsuite/Magento/Test/Integrity/Layout/HandlesTest.php" target="_blank">HandlesTest.php</a></td>
         <td>Layouts</td>
      </tr>
      <tr>
      <td>
         <a href="{{ site.mage2100url }}dev/tests/integration/testsuite/Magento/Test/Integrity/Modular/LayoutFilesTest.php" target="_blank">LayoutFilesTest.php</a></td>
         <td>Argument values correspond to required data types</td>
      </tr>
   </tbody>
</table>