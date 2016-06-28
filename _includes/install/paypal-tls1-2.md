<div markdown="1">

## TLS 1.2 requirement for PayPal
PayPal recently announced they will require Transport Layer Security (TLS) version 1.2 to process payments in a live environment. (PayPal already requires TLS 1.2 in the sandbox.)

More information:

*	[Details (PayPal security bulletin)](https://www.paypal.com/uk/webapps/mpp/ssl-security-update){:target="_blank"} 
*	[PayPal live payments switching in June 2016 (PayPal technical blog)](https://devblog.paypal.com/upcoming-security-changes-notice/#tls){:target="_blank"} 

### Symptom
According to PayPal, symptoms of the issue include the following messages in your error log:

	*Unknown SSL protocol error* in connection to api-3t.sandbox.paypal.com:-9824

or

	140062736746144:error:1408F10B:SSL routines:SSL3_GET_RECORD:wrong version number:s3_pkt.c:337:
	
	... (more messages) ...
	
	New, (NONE), Cipher is (NONE)
	Secure Renegotiation IS NOT supported*
	Compression: NONE
	Expansion: NONE
	SSL-Session:
	Protocol: SSLv3*

	... (more messages) ...

### Description
The source of the issue is your version of [`libcurl`](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html){:target="_blank"}. `libcurl` versions earlier than 7.34 use TLS 1.1 or earlier by default. 

To determine the version of `libcurl` you're running, enter the following command on the server that processes PayPal transactions:

	curl --version

If the version is earlier than 7.34, continue with the next section. If you're already running version 7.34 or later, no action is necessary.

### Solution
This issue is typically limited to CentOS 6 or earlier because [recommended package repositories](https://wiki.centos.org/AdditionalResources/Repositories){:target="_blank"} don't provide `libcurl` version 7.34.

You have the following options:

*	(Recommended). Upgrade your Magento server to CentOS 6.8 or later. 

	Its recommended repositories support current versions of TLS with `libcurl`. Using CentOS 6.8 or later is the most secure way to continue operating your store and accepting PayPal.

	CentOS 6.8 has a `libcurl` version that defaults to TLS 1.2. 

*	(Less secure, *not recommended*). Upgrade to `libcurl` 7.34 or later on CentOS 6 using a non-recommended third-party repository.

	One possible solution is to use the information on [serverfault](http://serverfault.com/questions/321321/upgrade-curl-to-latest-on-centos){:target="_blank"}.

	<div class="bs-callout bs-callout-warning">
    	<p>Installing software from non-recommended repositories can change other system packages and can result in issues. We strongly recommend you upgrade <code>libcurl</code> in a development environment and <em>thoroughly test</em> all payment processors you use as well as any other critical software before putting this into production.</p>
	</div>