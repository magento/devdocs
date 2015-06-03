



<h2>Errors</h2>

Web API returns SOAP faults to the client. SOAP faults follow the structure defined in W3C SOAP 1.2 fault code specification.

If service throws `Magento_Service_Exception` or any of its derivatives:

* Code is "Sender" in fault message
* The error code returned as part of an exception by a service is Code in {{Detail }}node of fault message.
* The error message returned as part of an exception by a service is Reason in fault message.
* The list of parameters returned as part of exception including Detail in fault message.
* For all system errors, set Code as 'Receiver' in fault message.

<p><b>Sample SOAP error message:</b></p>


<pre>
&lt;env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"
xmlns:xml="http://www.w3.org/XML/1998/namespace"
xmlns:m="http://magento.com">
&lt;env:Body>
&lt;env:Fault>
&lt;env:Code>
&lt;env:Value>env:Sender&lt;/env:Value>
&lt;/env:Code>
&lt;env:Reason>
&lt;env:Text xml:lang="en">Invalid Quantity&lt;/env:Text>
&lt;/env:Reason>
&lt;env:Detail>
&lt;m:ErrorDetails>
&lt;m:Parameters>
&lt;m:parameterA>product&lt;/m:parameterA>
&lt;m:parameterB>email&lt;/m:parameterB>
&lt;/m:Parameters>
&lt;m:Code>3100&lt;/m:Code>
&lt;/m:ErrorDetails>
&lt;/env:Detail>
&lt;/env:Fault>
&lt;/env:Body>
&lt;/env:Envelope>
</pre>



<p><b>Sample JSON error message:</b></p>


<pre>
error: {
code: 3100,
message: Invalid Quantity,
parameters: [product, email]
}
</pre>
