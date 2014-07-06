---
layout: howtom2devgde_chapters
title: How-To&mdash;Using the Firefox REST Client to Create a Customer
---

# How-To&mdash;Using the Firefox REST Client to Create a Customer

<p><a href="{{ site.githuburl }}guides/m2devgde/v1.0.0.0/rest/rest-ff-rest-client.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

This topic discusses how to use the <a href="https://addons.mozilla.org/en-US/firefox/addon/restclient/" target="_blank">Firefox REST Client</a> browser add-on to send a REST call that creates a new Magento 2 customer.

To do this, you need to set up an _integration_ that provides access to Magento customer resources but you don't need to do any coding. You set up the integration using the Magento Admin.

<div id="accordion">
<h2>Step 1: Get the Firefox REST Client add-on</h2>
<div><p>If you haven't already done so, install the <a href="https://addons.mozilla.org/en-US/firefox/addon/restclient/" target="_blank">Firefox REST Client</a>.</p>
</div>

<h2>Step 2: Look up the call in webapi.xml</h2>
<div><p>This section discusses how to make an HTTP GET call to the <tt>getCustomer()</tt> method.</p>
<ol><li>Open <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/webapi.xml" target="_blank">webapi.xml</a>.</li>
<li><p>Find the desired call; for example,</p> 
<pre>
&lt;route url="/V1/customerAccounts" method="POST">
    &lt;service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="createCustomer"/>
    &lt;resources>
        &lt;resource ref="anonymous"/>
    &lt;/resources>
&lt;/route>
</pre></li></ol>
<p>The <tt>route url</tt> specifies the URI of the REST call. (Step TBD shows the entire URL.)</p>
<p>In this example, the URI is <tt>POST /V1/customerAccounts</tt></p>
<p><strong>Note</strong>: Any value prefixed by a colon character is a required input.</p>
<p><strong>Note</strong>: Some REST calls have no route; for these cases, use the Base URL only.</p>
</div>

<h2>Step 3: Find the service data object</h2>
<div>
<p>The service data object tells you what data to pass in to the REST API. The service data object is specified by the service interface method named by <tt>&lt;service class</tt> in <tt>webapi.xml</tt>.</p>
<p>Continuing the preceding example, the <tt>createCustomer()</tt> method on the <tt>\Magento\Customer\Service\V1\CustomerAccountServiceInterface</tt> specifies the data service object as follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/9775420.js"></script>
<p>In this case, the service object is <a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/CustomerDetails.php" target="_blank">\Magento\Customer\Service\V1\Data\CustomerDetails</a>.</p>
<p><strong>Note</strong>: To use <tt>CustomerDetails</tt> as a JSON or XML parameter in the POST call payload, you must specify it as follows: <tt>customer_details</tt>. In other words, the parameter name is all lowercase with camel case strings separated by an underscore character. To use it as JSON input, <tt>customer_details</tt> must specify a <a href="http://www.json.com/" target="_blank">JSON</a>.</p>
</div>

<h2>Step 4: Find getters on CustomerDetails</h2>
<div>
<p>Getters on service data objects enable you to find what data is required to execute the action (in this case, create a customer).</p>
<p>There are two getters on <tt>CustomerDetails</tt>:</p>
<ul><li><p><tt>getAddresses()</tt>, which returns data defined by the service data object <a href="{{ site.mage200url }}app/code/Magento/Customer/Service/V1/Data/Address.php" target="_blank">\Magento\Customer\Service\V1\Data\Address</a></p>
<p>Note that the <tt>@return</tt> specifies <tt>\Magento\Customer\Service\V1\Data\Address[]|null</tt>, which means that null values are accepted (in other words, you don't have to pass any data in).</p></li>
<li><tt>getCustomer()</tt>, which returns data defined by <a href="{{ site.mage200url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">\Magento\Customer\Service\V1\Data\Customer</a>.</li></ul>
<p><strong>Note</strong>: To use <tt>getAddresses</tt> and <tt>getCustomer</tt> as JSON or XML values, remove <tt>get</tt> and convert the remainder of the string to lowercase separated by underscores. In this case,</p>
<ul><li><tt>getCustomer</tt> becomes <tt>customer</tt></li>
<li><tt>getAddresses</tt> becomes <tt>addresses</tt></li></ul>
</div>

<h2>Step 5: Find getters on Address</h2>
<div>
<p><a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Address.php" target="_blank">\Magento\Customer\Service\V1\Data\Address</a> has several getters, all of which are optional. Each getter has <tt>@return</tt> that tells you the data type.</p>
<p>Pick a few values to create your customer record; remember to use the same rules in step 3 (that is, remove <tt>get</tt>, convert everything to lowercase, and replace camel case letters with underscores).</p>
</div>

<h2>Step 6: Find Getters on Customer</h2>
<div>
<p><a href="{{ site.mage2000url }}app/code/Magento/Customer/Service/V1/Data/Customer.php" target="_blank">\Magento\Customer\Service\V1\Data\Customer</a> has several getters.</p>
<p>Pick a few values to create your customer record.</p>
</div>

<h2>Step 7: Construct the JSON</h2>
<div><p>Now that you know all the data you need to create a customer, you can create the JSON necessary to create the customer. A sample follows:</p>
<script src="https://gist.github.com/xcomSteveJohnson/3901c6cf9d41964bd319.js"></script>
<p>You'll use this in the procedure that follows.</p>
</div>

<h2>Step 8: Create the integration</h2>
<div><p>For OAuth 1.0a authorization to work, you must create an integration that optionally has access to customer resources. (Although the <tt>createCustomer</tt> method can authenticate anonymously, you should grant access to customer objects anyway.)</p>
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

<h2>Step 9: Getting started with the Firefox REST Client</h2>
<div><p>Now you can start building the REST call using the Firefox REST Client as follows:</p>
<ol><li>Start the Firefox web browser and the Firefox REST Client.</li>
<li>From the <strong>Method</strong> list, click <strong>POST</strong>.</li>
<li>In the <strong>URL</strong> field, enter the following:<br>
<tt>https://[your Magento host or IP]/[your Magento base install dir]/rest/default/V1/customerAccounts</tt><br>
The following figure shows an example.<br>
<img src="{{ site.baseurl }}common/images/rest_ff-rest-initial-url.png"></li></ol>
<p><strong>Note</strong>: Remember that <tt>/V1/customerAccounts</tt> is the REST route from step 2.</p>
</div>

<h2>Step 10: Setting up authorization for your REST call</h2>
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
<li>Click <strong>Insert</strong> > <strong>as header</strong>.</li>
<li>Click <strong>Yes, please</strong> at the confirmation dialog box.</li></ol>
</div>

<h2>Step 11: Complete the REST call</h2>
<div>
<p>Now you have your <tt>Authorization</tt> header set, you must set one more header for Magento 2 to accept the REST call: <tt>Content-Type: application/json</tt>, add the request body, and send the request.</p>
<p>To complete your REST call:</p>
<ol><li>Click <strong>Headers</strong> > <strong>Custom Header</strong>.</li>
<li>In the <strong>Name</strong> field, enter <tt>Content-Type</tt>.</li>
<li>In the <strong>Value</strong> field, enter <tt>application/json</tt>.</li>
<li>Click <strong>Okay</strong>.<br>
The Firefox REST Client should now look like the following:<br>
<img src="{{ site.baseurl }}common/images/rest_client-with-headers.png"></li>
<li>In the <strong>Body</strong> field, enter your JSON data to create the customer.<br>
An example follows:<br>
<script src="https://gist.github.com/xcomSteveJohnson/3901c6cf9d41964bd319.js"></script></li>
<li>Click <strong>Send</strong>.</li></ol>
<p>If the REST call succeeded, the <strong>Response Headers</strong> tab page at the bottom should show <tt>200 OK</tt> on the first line.</p>
<p>If the REST call failed, click the <strong>Response Body (Raw)</strong> tab page to display the XML data you get back from Magento.</p>
<p>Following is sample raw data from a successful REST call:</p>
<script src="https://gist.github.com/xcomSteveJohnson/fed484b41f9fbdd46331.js"></script>

</div>

</div>


#### Related Topics:

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.html">What is the Magento 2 Service Framework?</a>
*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>
*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html">Basics of Building a Service</a>
*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html">What Is the Web API Framework?</a>