---
layout: default
title: Magento 2 Customer Service
---

<body>
   <div class="container bs-docs-container">
      <div class="row">
         <div class="jumbotron">
            <h1 class="heading1" id="php-api-ref">{{ page.title }}</h1>
         </div>
         <div class="col-xs-9" role="main">
            <div class="bs-docs-section">
         <p>Use the methods on customer account service objects to:</p>
         <ul>
            <li>Create a customer with a password or hashed password.</li>
            <li>Update, show information for, show details for, and delete a customer account.</li>
            <li>Activate, find, and log in a customer account.</li>
            <li>Check email availability and change the password for a customer.</li>
            <li>Get customer attributes, such as confirmation status, can update, can delete, and is customer in store.</li>
            <li>Validate a token in a reset password link.</li>
            <li>Send and resend email to a customer.</li>
         </ul>
         <p>See if this works: <a href="{{ site.gdeurl }}m2fedg/layout/layout-overview.html">Introduction to Magento 2 Theming</a>.</p>
         <h2 id="construct">__construct()</h2>
         <p class="blog-description">Constructs a customer service data object.</p>
         <blockquote class="codesample">
            <p>__construct(\Magento\Customer\Model\CustomerFactory $customerFactory,
               \Magento\Framework\Event\ManagerInterface $eventManager, ...)
            </p>
         </blockquote>
         <!-- /.blockquote -->
         <table class="docutils field-list" frame="void" rules="none"  width="400">
            <colgroup>
               <col width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Parameters:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
                        <li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <p/>
         <table class="docutils field-list" frame="void" rules="none" width="400">
            <colgroup>
               <col  width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Returns:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
                        <li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <p/>
         <table class="docutils field-list" frame="void" rules="none" width="400">
            <colgroup>
               <col  width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Throws:</th>
                  <td class="field-body">
                     <ul class="first last simple">
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
               \Magento\Framework\Event\ManagerInterface $eventManager, ...)
            </p>
         </blockquote>
         <!-- /.blockquote -->
         <table class="docutils field-list" frame="void" rules="none"  width="400">
            <colgroup>
               <col width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Parameters:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
                        <li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <p/>
         <table class="docutils field-list" frame="void" rules="none" width="400">
            <colgroup>
               <col  width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Returns:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
                        <li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <p/>
         <table class="docutils field-list" frame="void" rules="none" width="400">
            <colgroup>
               <col  width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Throws:</th>
                  <td class="field-body">
                     <ul class="first last simple">
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
               \Magento\Framework\Event\ManagerInterface $eventManager, ...)
            </p>
         </blockquote>
         <!-- /.blockquote -->
         <table class="docutils field-list" frame="void" rules="none"  width="400">
            <colgroup>
               <col width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Parameters:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
                        <li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <p/>
         <table class="docutils field-list" frame="void" rules="none" width="400">
            <colgroup>
               <col  width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Returns:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>qux</strong> (<em>string</em>) – The first argument to initialize class.</li>
                        <li><strong>spam</strong> (<em>bool</em>) – Spam me yes or no...</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <p/>
         <table class="docutils field-list" frame="void" rules="none" width="400">
            <colgroup>
               <col  width="25%" class="field-name">
               <col  width="75%" class="field-body">
            </colgroup>
            <tbody valign="top">
               <tr class="field-odd field">
                  <th class="field-name">Throws:</th>
                  <td class="field-body">
                     <ul class="first last simple">
                        <li><strong>FirstException</strong> (<em>string</em>) – Something went wrong.</li>
                        <li><strong>SecondException</strong> (<em>bool</em>) – Something else went wrong.</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
         </div>
         <div class="col-xs-3">
            <div style="" id="category" class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top" role="complementary">
               </div>
               <a class="back-to-top" href="#top">
               Back to top
               </a>
               <a href="#" class="bs-docs-theme-toggle">
               Preview theme
               </a>
            </div>
         </div>
      </div>
   </div>
</body>





