---
layout: default
title: Magento 2 Customer Service
---

<div class="container bs-docs-container">
   <div class="row">
      <div class="jumbotron">
         <h1 class="api1" id="php-api-ref">{{ page.title }}</h1>
      </div>
      <div class="col-xs-3">
         <h4 class="api4">Contents</h4>
         <div style="" id="category" class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top" role="complementary">
         </div>
         <a class="back-to-top" href="#top">
         Back to top
         </a>
         <a href="#" class="bs-docs-theme-toggle">
         Preview theme
         </a>
      </div>
      <div class="col-xs-9" role="main">
         <div class="bs-docs-section">
            <h2 class="api2" id="products">products</h2>
            <h3 class="api3" id="post-products">POST /default/V1/products</h3>
            <h4 class="api4">Request</h4>
            <pre>{
    "product": {
        "sku": "psku-test-1",
        "name": "sku-54291a683952a1.35684521",
        "visibility": 4,
        "type_id": "simple",
        "price": 3.62,
        "status": 1,
        "custom_attributes": [
            {
                "attribute_code": "description",
                "value": "test description"
            },
            {
                "attribute_code": "meta_title",
                "value": "meta_title"
            }
        ]
    }
}</pre>
            <h4 class="api4">Response</h4>
            <pre>"psku-test-1"</pre>
            <h3 class="api3" id="post-products2">POST /default/V1/products</h3>
            <h4 class="api4">Request</h4>
            <pre>{
    "product": {
        "sku": "psku-test-2",
        "name": "sku-54291a683952a1.41818957",
        "visibility": 4,
        "type_id": "virtual",
        "price": 3.62,
        "status": 1,
        "custom_attributes": [
            {
                "attribute_code": "description",
                "value": "test description"
            },
            {
                "attribute_code": "meta_title",
                "value": "meta_title"
            }
        ]
    }
}</pre>
            <h4 class="api4">Response</h4>
            <pre>"psku-test-2"</pre>
            <h3 class="api3" id="products-parameters">Request and response parameters</h3>
            <table class="docutils field-list" frame="void" rules="none"  width="400">
               <colgroup>
                  <col width="35%" class="field-name">
                  <col  width="65%" class="field-body">
               </colgroup>
               <tbody valign="top">
                  <tr class="field-odd field">
                     <th class="field-name">Request parameters:</th>
                     <td class="field-body">
                        <ul class="first last simple">
                           <li><strong>sku</strong> (<em>string</em>) – TBD.</li>
                           <li><strong>name</strong> (<em>string</em>) – TBD.</li>
                           <li><strong>visibility</strong> (<em>int</em>) – TBD.</li>
                           <li><strong>type_id</strong> (<em>string</em>) – TBD.</li>
                           <li><strong>price</strong> (<em>float</em>) – TBD.</li>
                           <li><strong>status</strong> (<em>int</em>) – TBD.</li>
                           <li><strong>custom_attributes</strong> (<em>dict</em>) – TBD.</li>
                        </ul>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="docutils field-list" frame="void" rules="none"  width="400">
               <colgroup>
                  <col width="35%" class="field-name">
                  <col  width="65%" class="field-body">
               </colgroup>
               <tbody valign="top">
                  <tr class="field-odd field">
                     <th class="field-name">Response attributes:</th>
                     <td class="field-body">
                        <ul class="first last simple">
                           <li><strong>sku</strong> (<em>string</em>) – TBD.</li>
                        </ul>
                     </td>
                  </tr>
               </tbody>
            </table>
            <h3 class="api3" id="products-responses">Response codes</h3>
            <table class="docutils field-list" frame="void" rules="none" width="400">
               <colgroup>
                  <col  width="35%" class="field-name">
                  <col  width="65%" class="field-body">
               </colgroup>
               <tbody valign="top">
                  <tr class="field-odd field">
                     <th class="field-name">Normal response codes:</th>
                     <td class="field-body">
                        <ul class="first last simple">
                           <li><strong>200</strong> – Success.</li>
                           <li><strong>201</strong> – Success.</li>
                        </ul>
                     </td>
                  </tr>
               </tbody>
            </table>
            <table class="docutils field-list" frame="void" rules="none" width="400">
               <colgroup>
                  <col  width="35%" class="field-name">
                  <col  width="65%" class="field-body">
               </colgroup>
               <tbody valign="top">
                  <tr class="field-odd field">
                     <th class="field-name">Error response codes:</th>
                     <td class="field-body">
                        <ul class="first last simple">
                           <li><strong>404</strong> – Something went wrong.</li>
                           <li><strong>501</strong> – Something else went wrong.</li>
                        </ul>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>

