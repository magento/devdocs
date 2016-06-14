---
layout: default
group:
subgroup: Step 3. Use cURL to run the request
title: Firefox REST client
menu_title: Firefox REST client
menu_order: 3
version: 2.1
github_link: get-started/gs-rest-ff-client.md
---

This topic discusses how to use the <a href="https://addons.mozilla.org/en-US/firefox/addon/restclient/" target="_blank">Firefox REST Client</a> browser add-on to send a REST call that creates a new Magento customer.

To do this, you need to set up an _integration_ that provides access to Magento customer resources. You set up the integration using the Magento Admin.

You don't need to do any coding in this example.

<div id="accordion">
<h2>Step 1: Get the Firefox REST Client add-on</h2>
<div><p>If you haven't already done so, install the <a href="https://addons.mozilla.org/en-US/firefox/addon/restclient/" target="_blank">Firefox REST Client</a>.</p>
</div>

<h2>Step 2: Look up the call in webapi.xml</h2>
<div><p>This section discusses how to make an HTTP POST call to the <code>createCustomer()</code> method.</p>
<ol><li>Open <a href="{{ site.mage2100url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a>.</li>
<li><p>Find the desired call; for example,</p>
<pre>
&lt;route url="/V1/customerAccounts" method="POST">
    &lt;service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="createCustomer"/>
    &lt;resources>
        &lt;resource ref="anonymous"/>
    &lt;/resources>
&lt;/route>
</pre></li></ol>
<p>The <code>route url</code> specifies the URI of the REST call. (Step 10 shows the entire URL.)</p>
<p>In this example, the URI is <code>POST /V1/customerAccounts</code></p>
<div class="bs-callout bs-callout-info" id="info">
  <ul class="note"><li>Any value prefixed by a colon character is a required input.</li>
  <li>Some REST calls have no route; for these cases, use the Base URL only.</li></ul>
  </div>

</div>

<h2>Step 3: Find the service data object</h2>
<div>
<p>The service data object tells you what data to pass in to the REST API. The service data object is specified by the service interface method named by <code>service class</code> in <code>webapi.xml</code>.</p>
<p>Continuing the preceding example, the <code>createCustomer()</code> method on the <code>\Magento\Customer\Service\V1\CustomerAccountServiceInterface</code> specifies the data service object as follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/9775420.js"></script>
<p>In this case, the service object is <a href="{{ site.mage2100url }}app/code/Magento/Customer/Service/V1/Data/customer.php" target="_blank">\Magento\Customer\Service\V1\Data\customer</a>.</p>
<div class="bs-callout bs-callout-info" id="info">
  <p>To use <code>customer</code> as a JSON or XML parameter in the POST call payload, you must specify it as follows: <code>customer_details</code>. The parameter name is all lowercase with camel case strings separated by an underscore character. To use it as JSON input, <code>customer_details</code> must specify a <a href="http://www.json.com/" target="_blank">JSON</a> object.</p>
  </div>
</div>

<h2>Step 4: Find getters on customer</h2>
<div>
<p>Getters on service data objects enable you to find what data is required to execute the action (in this case, create a customer).</p>
<p>There are two getters on <code>customer</code>:</p>
<ul><li><p><code>getAddresses()</code>, which returns data defined by the service data object <a href="{{ site.mage2100url }}app/code/Magento/Customer/Service/V1/Data/Address.php" target="_blank">\Magento\Customer\Service\V1\Data\Address</a></p>
<p>Note that the <code>@return</code> specifies <code>\Magento\Customer\Service\V1\Data\Address[]|null</code>, which means that null values are accepted (in other words, you don't have to pass any data in).</p></li>
<li><code>getCustomer()</code>, which returns data defined by <a href="{{ site.mage2100url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">\Magento\Customer\Service\V1\Data\Customer</a>.</li></ul>
<div class="bs-callout bs-callout-info" id="info">
<p>To use <code>getAddresses</code> and <code>getCustomer</code> as JSON or XML values, remove <code>get</code> and convert the remainder of the string to lowercase separated by underscores. In this case,</p>
  <ul class="note"><li><code>getCustomer</code> becomes <code>customer</code></li>
<li><code>getAddresses</code> becomes <code>addresses</code></li></ul>
  </div>
</div>

<h2>Step 5: Find getters on Address and Customer</h2>
<div>
<p><a href="{{ site.mage2100url }}app/code/Magento/Customer/Service/V1/Data/Address.php" target="_blank">\Magento\Customer\Service\V1\Data\Address</a> and <a href="{{ site.mage2100url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">\Magento\Customer\Service\V1\Data\Customer</a> have several getters, all of which are optional. Each getter has <code>@return</code> that tells you the data type.</p>
<p>Pick a few values to create your customer record; remember to use the same rules in step 3 (that is, remove <code>get</code>, convert everything to lowercase, and separate camel case letters with underscores).</p>
</div>

<h2>Step 6: Construct the JSON object</h2>
<div><p>Now that you know all the data you need to create a customer, you can create the JSON necessary to create the customer. A sample follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/3901c6cf9d41964bd319.js"></script>
<p>You'll use this in step 10.</p>
</div>

<h2>Step 7: Create and activate the integration</h2>
<div><p>For OAuth 1.0a authorization to work, you must create an integration that optionally has access to customer resources. (Although the <code>createCustomer</code> method can authenticate anonymously, it's good practice to grant access to customer objects anyway.)</p>
<p>The integration also provides the following OAuth 1.0a authorization details:</p>
<ul><li>Consumer key</li>
<li>Consumer secret</li>
<li>Access token</li>
<li>Access token secret</li></ul>
<p>To create the integration:</p>
<ol><li>Log in to the Magento Admin as an administrator.</li>
<li>Click <strong>System</strong> > <strong>Integrations</strong>.</li>
<li>In the upper right corner, click <strong>Add New Integration</strong>.</li>
<li>On the New Integration page, enter a unique name for the integration in the <strong>Name</strong> field.<br>
You can leave all other fields on this page blank.</li>
<li>In the left navigation bar, click <strong>API</strong> to assign resources to integration.</li>
<li>Select the <strong>Customers</strong> check box.</li>
<li>Optionally select other check boxes to allow the integration access to those resources.</li>
<li>Click <strong>Save</strong>.<br>
The integration displays on the Integrations page.<br></li>
<li>Click <strong>Activate</strong> next to the name of the integration you just created.<br>
The following figure shows an example.<br>
<img src="{{ site.baseurl }}common/images/rest_create-integration1.png" alt="Click an integration's activate text to allow it to access defined resources"></li>
<li>At the confirmation dialog box, click <strong>Allow</strong>.<br>
The Integration Tokens for Extensions dialog box displays the authorization credentials you'll need for the REST call. You can view these credentials at any time by logging in to the Magento Admin and editing the integration.</li></ol>
</div>

<h2>Step 8: Get started with the Firefox REST Client</h2>
<div><p>Now you can start building the REST call using the Firefox REST Client as follows:</p>
<ol><li>Start the Firefox web browser and the Firefox REST Client.</li>
<li>From the <strong>Method</strong> list, click <strong>POST</strong>.</li>
<li>In the <strong>URL</strong> field, enter the following:<br>
<code>https://<your Magento host or IP>/<your Magento install dir>/rest/default/V1/customerAccounts</code><br>
The following figure shows an example.<br>
<img src="{{ site.baseurl }}common/images/rest_ff-rest-initial-url.png"></li></ol>
<div class="bs-callout bs-callout-info" id="info">
  <p>Remember that <code>/V1/customerAccounts</code> is the REST route from step 2.</p>
  </div>
</div>

<h2>Step 9: Set up authorization for your REST call</h2>
<div>
<p>Before you continue, make sure you have the following for the integration you created in step 8:</p>
<ul><li>Consumer Key</li>
<li>Consumer Secret</li>
<li>Access Token</li>
<li>Access Token Secret</li></ul>
<p>In the Firefox REST Client:</p>
<ol><li>Click <strong>Authentication</strong> > <strong>OAuth</strong>.</li>
<li>Enter your OAuth credentials.<br>
The following figure shows an example.<br>
<img src="{{ site.baseurl }}common/images/rest_oauth-creds.png"></li>
<li>Optionally select the <strong>Remember the setting</strong> check box to avoid having to enter the credentials in future REST calls.</li>
<li>Click <strong>Insert</strong> > <strong>Insert as header</strong>.</li>
<li>Click <strong>Yes, please</strong> at the confirmation dialog box.</li></ol>
</div>

<h2>Step 10: Complete the REST call</h2>
<div>
<p>Now that you have your <code>Authorization</code> header set, you must set one more headers for the Magento system to accept the REST call: <code>Content-Type: application/json</code>. Finally, add the request body and send the request.</p>
<p>To complete your REST call:</p>
<ol><li>Click <strong>Headers</strong> > <strong>Custom Header</strong>.</li>
<li>In the <strong>Name</strong> field, enter <code>Content-Type</code>.</li>
<li>In the <strong>Value</strong> field, enter <code>application/json</code>.</li>
<li>Click <strong>Okay</strong>.<br>
The Firefox REST Client should now look like the following:<br>
<img src="{{ site.baseurl }}common/images/rest_client-with-headers.png"></li>
<li>In the <strong>Body</strong> field, enter your JSON data to create the customer.<br>
An example follows:<br>
<script src="https://gist.github.com/xcomSteveJohnson/3901c6cf9d41964bd319.js"></script></li>
<li>Click <strong>Send</strong>.</li></ol>
<p>If the REST call succeeded, the <strong>Response Headers</strong> tab page at the bottom should show <code>200 OK</code> on the first line.</p>
<p>If the REST call failed, click the <strong>Response Body (Raw)</strong> tab page to display the XML data you get back from Magento.</p>
<p>Following is sample raw data from a successful REST call:</p>
<script src="https://gist.github.com/xcomSteveJohnson/fed484b41f9fbdd46331.js"></script>

<h4 id="svcs_rest_reltop">Related topics</h4>


<ul><li><a href="{{ site.gdeurl21 }}get-started/gs-web-api-response.html">Step 4. Review the response</a></li>
<li><a href="{{ site.gdeurl21 }}extension-dev-guide/service-contracts/service-contracts.html">Service contracts</a></li>
</ul>

