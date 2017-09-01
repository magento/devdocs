---
layout: default
group: cloud
subgroup: 170_trouble
title: Troubleshoot Fastly
menu_title: Troubleshoot Fastly
menu_order: 20
menu_node:
version: 2.0
github_link: cloud/trouble/trouble_fastly.md
---

For information setting up and configuring Fastly, see [Set up Fastly]({{ page.baseurl}}cloud/access-acct/fastly.html).

To verify the Fastly extension is working or to debug the Fastly extension, you can use the `curl` command to display certain response headers. The values of these response headers indicate whether or not Fastly is enabled and functioning properly. You can further investigate issues based on the values of headers and caching behavior.

## Received warning about TLS deprecation {#tls}
**Important TLS Deprecation Notice**: We are following Fastly's timeline for [TLS 1.0/1.1 deprecation](https://www.fastly.com/blog/phase-two-our-tls-10-and-11-deprecation-plan).

We currently cannot enable or disable protocols on a per-customer basis due to Fastly's limitations. You may receive early warnings from PCI scans, which are within PCI's deadline for the protocol's deprecation.

Please consider and plan your upgrade to a supported TLS version as part of your deployment.

## Test your live site {#curl-live}
First, check your live site to verify the response headers with `curl`. The command goes through the Fastly extension to receive responses. If you don't receive the correct headers, then you should test the [origin servers directly](#cloud-test-stage). This command returns the values of the `Fastly-Magento-VCL-Uploaded` and `X-Cache` headers.

If you don't have a live site set up with DNS, you can use either a static route or you can use the optional `--resolve` flag, which bypasses DNS name resolution.

_Optional:_ To set up a static route only if your site isn't set up with DNS:

1.  Locate your operating system's [`hosts` file](https://en.wikipedia.org/wiki/Hosts_(file)#Location_in_the_file_system){:target="_blank"}.
2.  Add the static route in the format:

        <ip address> <url>

Check your response headers on the live site URL:

1. In a terminal, enter the following command to test your live site URL:

		curl http://<live URL> -vo /dev/null -HFastly-Debug:1 [--resolve]

	Use `--resolve` only if your live URL isn't set up with DNS and you don't have a static route set.
	For example: `curl http://www.mymagento.biz -vo /dev/null -HFastly-Debug:1`
2. Verify the [response headers](#response-headers) to ensure Fastly is working. The output for this command is similar to curl Staging and Production. For example, you should see the returned unique headers by this command:

		< Fastly-Magento-VCL-Uploaded: yes
		< X-Cache: HIT, MISS

## Test your Staging and Production sites {#cloud-test-stage}
This section discusses how to use `dig` and `curl` to get response headers from your Staging or Production site (the origin servers). You never need to test on the Integration environments. Basically, you are curling the edge for responses.

**Note:** If you encounter issues when using `dig` and `curl` to the direct origin servers, not through the live server domain, the issue may not be Fastly.

### dig command {#dig}
First, check for headers with a dig command to the URL. In a terminal application, enter `dig <url>` to verify Fastly services display in the headers. For additional `dig` tests, see Fastly's [Testing before changing DNS](https://docs.fastly.com/guides/basic-configuration/testing-setup-before-changing-domains){:target="_blank"}.

For example:

* Staging: `dig http[s]://staging.<your domain>.c.<instanceid>.ent.magento.cloud`
* Production: `dig http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`

### curl command {#curl}
Next, use a `curl` command to verify X-Magento-Tags exist and additional header information. The command format differs for Staging and Production.

For more information on these commands, you bypass Fastly when you inject `-H "host:URL"`, replace with origin to connecting location (CNAME informatin from your OneDrive Spreadsheet), `-k` ignores SSL, and `-v` provides verbose responses. If headers display correctly, check the live site and verify headers again.

* If header issues occur when directly hitting the origin servers bypassing Fastly, you may have issues in your code, with extensions, or with the infrastructure.
* If you encounter no errors directly hitting the origin servers, but headers are missing hitting the live domain through Fastly, you may have Fastly errors.

**Staging:**

	curl http[s]://staging.<your domain>.c.<instanceid>.ent.magento.cloud -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1

**Production:**

The load balancer:

	curl http[s]://<your domain>.c.<project ID>.ent.magento.cloud -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1

A direct Origin node:

	curl http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud -H "host: <url>" -k -vo /dev/null -HFastly-Debug:1

For example, if you have a public URL `www.mymagento.biz`, enter a command similar to the following to test the production site:

	curl -k https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud -H 'Host: www.mymagento.biz' -vo /dev/null -HFastly-Debug:1

If you do not have DNS set up for a public host name, enter a command similar to the following:

	curl -k https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud -vo /dev/null -HFastly-Debug:1

### Check response headers {#response-headers}
Check the returned response headers and values:

*	Fastly-Magento-VCL-Uploaded should be present
*	X-Magento-Tags should be returned
*	Fastly-Module-Enabled should be either Yes or the Fastly extension version number
*	X-Cache should be either `HIT` or `HIT, HIT`
*	x-cache-hits should be 1,1
*	[Cache-Control: max-age](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9){:target="_blank"} should be greater than 0
* [Pragma](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32){:target="_blank"} should be `cache`

The following example shows the correct values for `Pragma`, `X-Magento-Tags`, and `Fastly-Module-Enabled`.

The output for cURL commands can be lengthy. The following is a summary only:

	* STATE: INIT => CONNECT handle 0x600057800; line 1402 (connection #-5000)
	* Rebuilt URL to: https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud/
	* Added connection 0. The cache now contains 1 members
	*   Trying 192.0.2.31...
	* STATE: CONNECT => WAITCONNECT handle 0x600057800; line 1455 (connection #0)
	  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
	  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Connected to www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud (54.229.163.31) port 443 (#0)
	* STATE: WAITCONNECT => SENDPROTOCONNECT handle 0x600057800; line 1562 (connection #0)
	  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* ALPN, offering h2

	  ... portion omitted for brevity ...

	< Set-Cookie: mage-messages=%5B%5D; expires=Wed, 22-Nov-2017 17:39:58 GMT; Max-Age=31536000; path=/
	< Pragma: cache
	< Expires: Wed, 23 Nov 2016 17:39:56 GMT
	< Cache-Control: max-age=86400, public, s-maxage=86400, stale-if-error=5, stale-while-revalidate=5
	< X-Magento-Tags: cb_welcome_popup store cb cb_store_info_mobile cb_header_promotional_bar cb_store_info cb_discount-promo-bar cpg_2 cb_83 cb_81 cb_84 cb_85 cb_86 cb_87 cb_88 cb_89 p5646 catalog_product p5915 p6040 p6197 p6227 p7095 p6109 p6122 p6331 p7592 p7651 p7690
	< Fastly-Module-Enabled: yes
	< Strict-Transport-Security: max-age=31536000
		< Content-Security-Policy: upgrade-insecure-requests
	< X-Content-Type-Options: nosniff
	< X-XSS-Protection: 1; mode=block
	< X-Frame-Options: SAMEORIGIN
	< X-Platform-Server: i-dff64b52
	<
	* STATE: PERFORM => DONE handle 0x600057800; line 1955 (connection #0)
	* multi_done
	  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
	* Connection #0 to host www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud left intact

## Determine if VCL is not uploaded {#vcl-uploaded}
To determine if the VCL snippets are not uploaded, check the following:

* **Top level navigation does not work**: The top level navigation relies on Edge Side Includes (ESI) processing which is not enabled by default. When you upload the Magento VCL snippets during configuration, ESIs are enabled. See [Upload Fastly VCL snippets]({{ page.baseurl }}cloud/access-acct/fastly.html#upload-vcl-snippets).
* **Pages are not caching**: By default Fastly doesn’t cache pages with Set-Cookies. Magento sets Cookies even on cacheable pages (TTL > 0). Magento Fastly VCL strips those cookies on cacheable pages. This may also happen if page block in a template is marked uncacheable. If this occurs, it's due to a 3rd party module or Magento extension blocking or removing the Magento headers. See [X-Cache missed section](#xcache-miss) for details.
* **Geo-location/GeoIP does not work**: The uploaded Magento Fastly VCL snippets append the country code to the URL. See [Upload Fastly VCL snippets]({{ page.baseurl }}cloud/access-acct/fastly.html#upload-vcl-snippets).

## Resolve errors found by cURL
This section provides suggestions for resolving errors you might find using the `curl` command.

### Fastly-Module-Enabled is not present {#no-module}
If you don't receive a "yes" for the `Fastly-Module-Enabled` in the response headers, you need to verify the Fasty module is installed and selected.

To verify Fastly is enabled in Staging and Production, check the configuration in the Magento Admin for each environment:

1. Log into the Admin console for Staging and Production using the URL with /admin (or the changed Admin URL).
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System**. Scroll and click **Full Page Cache**.
3. Ensure Fastly CDN is selected.
4. Click on **Fastly Configuration**. Ensure the Fastly Service ID and Fastly API token are entered (your Fastly credentials). Verify you have the correct credentials entered for the Staging and Production environment. Click **Test credentials** to help.
5. Edit your `composer.json` and ensure the Fasty module is included with version. This file has all modules listed with versions.

	* In the "require" section, you should have `"fastly/magento2": <version number>`
	* In the "repositories" section, you should have:

			"fastly-magento2": {
						"type": "vcs",
						"url": "https://github.com/fastly/fastly-magento2.git"
				}
6. If you use [Configuration Management]({{ page.baseurl }}cloud/live/sens-data-over.html#cloud-config-specific-recomm), you should have a configuration file. Edit the `app/etc/config.app.php` (2.0, 2.1) or `app/etc/config.php` (2.2) file and make sure the setting `'Fastly_Cdn' => 1` is correct. The setting should not be `'Fastly_Cdn' => 0` (meaning disabled).

	If you enabled Fastly, delete the configuration file and run the `bin/magento magento-cloud:scd-dump` command to update. For a walk-through of this file, see [Example of managing system-specific settings]({{ page.baseurl }}cloud/live/sens-data-initial.html).

If the module is not installed, you need to install in an Integration environment branch and deployed to Staging and Production. See [Set up Fastly]({{ page.baseurl}}cloud/access-acct/fastly.html) for instructions.

### Fastly-Magento-VCL-Uploaded is not present {#no-VCL}
During installation and configuration, you should have uploaded the Fastly VCL. These are the base VCL snippets provided by the Fastly module, not custom VCL snippets you create. For instructions, see [Upload Fastly VCL snippets]({{ page.baseurl }}cloud/access-acct/fastly.html#upload-vcl-snippets).

### X-Cache includes MISS {#xcache-miss}
If `X-Cache` is either `HIT, MISS` or `MISS, MISS`, enter the same `curl` command again to make sure the page wasn't recently evicted from the cache.

If you get the same result, use the [`curl` commands](#curl) and verify the [response headers](#response-headers):

*	`Pragma` is `cache`
*	`X-Magento-Tags` exists
*	`Cache-Control: max-age` is greater than 0

If the issue persists, another extension is likely resetting these headers. Repeat the following procedure in Staging to disable extensions to find which one is causing the issue. After you locate the extension(s) causes issues, you will need to disable the extension(s) in Production.

1.	Log in to the Magento Admin on your Staging or Production site.
2.	Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **Advanced**.
3.	In the Disable Modules Output section in the right pane, locate and disable all of your extensions*.
5.	Click **Save Config**.
6.	Click **System** > **Tools** > **Cache Management**.
7.	Click **Flush Magento Cache**.
8.	Now enable one extension at a time, saving the configuration and flushing the Magento cache.
9.	Try the [`curl` commands](#curl) and verify the [response headers](#response-headers).
10.	Repeat steps 8 and 9 to enable and test the `curl` commands. When the Fastly headers no longer display, you have found the extension causing issues with Fastly.

When you isolate the extension that is resetting Fastly headers, contact the extension developer for additional assistance. We cannot provide fixes or updates for 3rd party extension developers to work with Fastly caching.

## Purges do not process {#purge}
If you attempt to use a Fastly purge option, and it does not process, you may have incorrect Fastly credentials in your environment or may have encountered an issue. You may receive the error: "The purge request was not processed successfully."

### Check Fasty credentials
Verify if you have the correct Fastly Service ID and API token in your environment. If you have Staging credentials in Production, the purges may not process or process incorrectly.

1. Log in to your local Magento Admin as an administrator.
2. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System** and expand **Full Page Cache**.
3. Expand **Fastly Configuration** and verify the Fastly Service ID and API token for your environment.
4. If you modify the values, click **Test Credentials**.

### Check VCL snippets
If the credentials are correct, you may have issues with your VCLs. To list and review your VCLs per service, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"

Review the list of VCLs. If you have issues with the default VCLs from Fastly, you can upload again or verify the content per the [Fastly default VCLs](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}. For editing your custom VCLs, see [Custom Fastly VCL snippets]({{ page.baseurl}}cloud/configure/cloud-vcl-custom-snippets.html).

#### Related topics
* [Fastly in Cloud]({{ page.baseurl}}cloud/basic-information/cloud-fastly.html)
* [Set up Fastly]({{ page.baseurl}}cloud/access-acct/fastly.html)
* [Custom Fastly VCL snippets]({{ page.baseurl}}cloud/configure/cloud-vcl-custom-snippets.html)
