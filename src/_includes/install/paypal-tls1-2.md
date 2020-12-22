## TLS 1.2 requirement for PayPal

PayPal recently announced they will require Transport Layer Security (TLS) version 1.2 to process payments in a live environment. (PayPal already requires TLS 1.2 in the sandbox.)

More information:

*  [Details (PayPal security bulletin)](https://www.paypal.com/uk/webapps/mpp/ssl-security-update)
*  [PayPal live payments switching in June 2016 (PayPal technical blog)](https://medium.com/paypal-engineering/security-related-changes-required-to-avoid-service-disruption-82caf7778328#0422)

### Symptom

According to PayPal, symptoms of the issue include the following messages in your error log:

```text
*Unknown SSL protocol error* in connection to api-3t.sandbox.paypal.com:-9824
```

or

```text
140062736746144:error:1408F10B:SSL routines:SSL3_GET_RECORD:wrong version number:s3_pkt.c:337:

... (more messages) ...

New, (NONE), Cipher is (NONE)
Secure Renegotiation IS NOT supported*
Compression: NONE
Expansion: NONE
SSL-Session:
Protocol: SSLv3*

... (more messages) ...
```

### Description

The source of the issue is your version of [`libcurl`](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html). `libcurl` versions earlier than 7.34 use TLS 1.1 or earlier by default.

To determine the version of `libcurl` you're running, enter the following command on the server that processes PayPal transactions:

```bash
curl --version
```

If the version is earlier than 7.34, continue with the next section. If you're already running version 7.34 or later, no action is necessary.

### Solution

The source of the issue is that the [`libcurl`](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html) library packaged with CentOS 6.6 and earlier use TLS 1.1 or earlier by default.

To determine the version of CentOS your server runs, enter the following command:

```bash
cat /etc/*release*
```

If you're already running CentOS 6.8 or later, no action is necessary. According to the [CentOS 6.8 changelog](https://wiki.centos.org/Manuals/ReleaseNotes/CentOS6.8), "various applications now support TLS 1.2, i.e. OpenLDAP, yum, stunnel, vsftpd, git, postfix and others. Also TLS 1.2 has been enabled by default in various packages".

(CentOS 7 has a newer version of `libcurl` that also defaults to TLS 1.2.)

You have the following options:

*  (Recommended). Upgrade your Magento server to CentOS 6.8 or later.

   Its recommended repositories support current versions of TLS with `libcurl`. Using CentOS 6.8 or later is the most secure way to continue operating your store and accepting PayPal.

   CentOS 6.8 has a `libcurl` version that defaults to TLS 1.2.

*  (Less secure, *not recommended*). Upgrade to `libcurl` 7.34 or later on CentOS 6 using a non-recommended third-party repository.

   One possible solution is to use the information on [serverfault](http://serverfault.com/questions/321321/upgrade-curl-to-latest-on-centos).

   {:.bs-callout-info}
   Installing software from non-recommended repositories can change other system packages and can result in issues. We strongly recommend you upgrade `libcurl` in a development environment and *thoroughly test* all payment processors you use as well as any other critical software before putting this into production.
