---
layout: apiref_main
title: Magento 2 Customer Service
---
 
 <div class="container">

      <div class="blog-header">
<<<<<<< HEAD

        <h1 class="heading1">Customer service</h1>


=======
        <h1 class="heading1">Customer service</h1>
>>>>>>> d832b3f04d0e735f08a70b8e6e2d1d531971025a
                <p class="blog-description">Use customer account service objects to create and manage customers.</p>
      </div>

      <div class="row">

        <div class="col-sm-8 blog-main">
<p>Use the methods on customer account service objects to:</p>
<ul>
    <li>Create a customer with a password or hashed password.</li>
    <li>Update, show information for, show details for, and delete a customer account.</li>
    <li>Activate, find, and log in a customer account.</li>
    <li>Check email availability and change the password for a customer.</li>
    <li>Get customer attributes, such as confirmation status, can update, can delete, and is customer in store.</li>
    <li>Validate a token in a reset password link.</li>
    <li>Send and resend email to a customer.</li></ul>

<div class="blog-post">

<h2 id="construct" class="heading2">__construct()</h2>
<p class="blog-description">Constructs a customer service data object.</p>

<blockquote class="codesample">
              <p>__construct(\Magento\Customer\Model\CustomerFactory $customerFactory, 
              \Magento\Framework\Event\ManagerInterface $eventManager, ...)</p>
            </blockquote> <!-- /.blockquote -->
<<<<<<< HEAD


<table class="docutils field-list" frame="void" rules="none"  width="400">

=======
<table class="docutils field-list" frame="void" rules="none"  width="400">
>>>>>>> d832b3f04d0e735f08a70b8e6e2d1d531971025a
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
<<<<<<< HEAD

</table>
<p/>

</table>
<p/>

=======
</table>
<p/>
>>>>>>> d832b3f04d0e735f08a70b8e6e2d1d531971025a
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
<<<<<<< HEAD

<p/>


=======
<p/>
>>>>>>> d832b3f04d0e735f08a70b8e6e2d1d531971025a
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

           
          </div><!-- /.blog-post -->

        <div class="blog-post">

<h2 id="create-customer" class="heading2">createCustomer()</h2>
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

           
          </div><!-- /.blog-post -->
          <div class="blog-post">

<h2 id="resend-confirmation" class="heading2">resendConfirmation()</h2>
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

           
          </div><!-- /.blog-post -->

          <ul class="pager">
            <li><a class="ext1" href="#">Previous</a></li>
            <li><a class="ext1" href="#">Next</a></li>
          </ul>

        </div><!-- /.blog-main -->

        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
         
          <div class="sidebar-module">
            <h2 class="heading2">Methods</h2>
            <ol class="list-unstyled">

              <li><a class="ext1" href="#construct">__construct()</a></li>    
                <li><a class="ext1" href="#create-customer">createCustomer()</a></li>
                <li><a class="ext1" href="#resend-confirmation">resendConfirmation()</a></li>
            </ol>
          </div>
        </div><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </div><!-- /.container -->



