---
layout: apiref_main
title: Magento 2 Customer Service
---
 
 <div class="container">
	<div class="jumbotron">
       <h1 id="php-api-service">{{ page.title }}</h1>
    </div>
    <div class="row">
        <div class="col-xs-3" id="myScrollspy">
         <div class="bs-docs-sidebar hidden-print hidden-xs hidden-sm" role="complementary">
            <ul class="nav nav-tabs nav-stacked" data-spy="affix">          
               <li>
                  <a href="#construct">__construct()</a>
               </li>
               <li>
                  <a href="#create-customer">createCustomer()</a>
               </li>
               <li>
                  <a href="#resend-confirmation">resendConfirmation()</a>
               </li>
            </ul>
            <a class="back-to-top" href="#top">
            Top
            </a>
             <a class="bs-docs-theme-toggle" href="#">Previous</a>
             <a class="bs-docs-theme-toggle" href="#">Next</a>
         </div>
        </div>
        <div class="col-xs-9">
<p>Use the methods on customer account service objects to:</p>
<ul>
    <li>Create a customer with a password or hashed password.</li>
    <li>Update, show information for, show details for, and delete a customer account.</li>
    <li>Activate, find, and log in a customer account.</li>
    <li>Check email availability and change the password for a customer.</li>
    <li>Get customer attributes, such as confirmation status, can update, can delete, and is customer in store.</li>
    <li>Validate a token in a reset password link.</li>
    <li>Send and resend email to a customer.</li></ul>



<h2 id="construct" class="heading2">__construct()</h2>
<p class="blog-description">Constructs a customer service data object.</p>

<blockquote class="codesample">
              <p>__construct(\Magento\Customer\Model\CustomerFactory $customerFactory, 
              \Magento\Framework\Event\ManagerInterface $eventManager, ...)</p>
            </blockquote> <!-- /.blockquote -->

<table class="docutils field-list" frame="void" rules="none"  width="400">
<colgroup><col width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><ul class="first last simple">
<li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
<li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
</ul>
</td>
</tr>
</tbody>

</table>
<p/>

<table class="docutils field-list" frame="void" rules="none" width="400">
<colgroup><col  width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Returns:</th><td class="field-body"><ul class="first last simple">
<li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
<li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
</ul>
</td>
</tr>
</tbody>
</table>

<p/>

<table class="docutils field-list" frame="void" rules="none" width="400">
<colgroup><col  width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Throws:</th><td class="field-body"><ul class="first last simple">
<li><strong>FirstException</strong> (<em>string</em>) – Something went wrong.</li>
<li><strong>SecondException</strong> (<em>bool</em>) – Something else went wrong.</li>
</ul>
</td>
</tr>
</tbody>
</table>


<h2 id="create-customer">createCustomer()</h2>
<p class="blog-description">Creates a customer service data object.</p>

<blockquote class="codesample">
              <p>__construct(\Magento\Customer\Model\CustomerFactory $customerFactory, 
              \Magento\Framework\Event\ManagerInterface $eventManager, ...)</p>
            </blockquote> <!-- /.blockquote -->

<table class="docutils field-list" frame="void" rules="none"  width="400">

<colgroup><col width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><ul class="first last simple">
<li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
<li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
</ul>
</td>
</tr>
</tbody>

</table>

<table class="docutils field-list" frame="void" rules="none" width="400">
<colgroup><col  width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Returns:</th><td class="field-body"><ul class="first last simple">
<li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
<li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
</ul>
</td>
</tr>
</tbody>
</table>

<table class="docutils field-list" frame="void" rules="none" width="400">
<colgroup><col  width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Throws:</th><td class="field-body"><ul class="first last simple">
<li><strong>FirstException</strong> (<em>string</em>) – Something went wrong.</li>
<li><strong>SecondException</strong> (<em>bool</em>) – Something else went wrong.</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h2 id="resend-confirmation">resendConfirmation()</h2>
<p class="blog-description">Resends a confirmation email to a customer.</p>

<blockquote class="codesample">
              <p>__construct(\Magento\Customer\Model\CustomerFactory $customerFactory, 
              \Magento\Framework\Event\ManagerInterface $eventManager, ...)</p>
            </blockquote> <!-- /.blockquote -->

<table class="docutils field-list" frame="void" rules="none"  width="400">

<colgroup><col width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Parameters:</th><td class="field-body"><ul class="first last simple">
<li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
<li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
</ul>
</td>
</tr>
</tbody>

</table>

<table class="docutils field-list" frame="void" rules="none" width="400">
<colgroup><col  width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Returns:</th><td class="field-body"><ul class="first last simple">
<li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
<li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
</ul>
</td>
</tr>
</tbody>
</table>

<table class="docutils field-list" frame="void" rules="none" width="400">
<colgroup><col  width="25%" class="field-name">
<col  width="75%" class="field-body">
</colgroup><tbody valign="top">
<tr class="field-odd field"><th class="field-name">Throws:</th><td class="field-body"><ul class="first last simple">
<li><strong>FirstException</strong> (<em>string</em>) – Something went wrong.</li>
<li><strong>SecondException</strong> (<em>bool</em>) – Something else went wrong.</li>
</ul>
</td>
</tr>
</tbody>
</table>

           </div>
          <!-- 
  <h2 id="php-api-overview">Overview</h2>
            <p>Overview of everything.</p>
            <h3 id="subtopic1">Subtopic 1</h3>
            <p>Subtopic.</p>
            <h2 id="php-api-audience">Audience</h2>
            <p>This guide is for PHP API developers who want to change the world.</p>
            <h3 id="subtopic2">Subtopic 2</h3>
            <p>Subtopic.</p>
            <h2 id="php-api-prereqs">Prerequisites</h2>
            <p>Install a bunch of stuff.</p>
            <h3 id="subtopic3">Subtopic 3</h3>
            <p>Subtopic.</p>
            <h2 id="php-api-topic1">Topic 1</h2>
            <p>Topic 1.</p>
            <h3 id="subtopic4">Subtopic 4</h3>
            <p>Subtopic.</p>
 -->
         </div>
    </div>
</div>

           
           
           
     

