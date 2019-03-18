---
group: cloud-guide
subgroup: 170_trouble
title: Fastly troubleshooting
menu_title: Fastly troubleshooting
menu_order: 20
menu_node:
redirect_from:
- /guides/v2.0/cloud/trouble/trouble_fastly.html
functional_areas:
  - Cloud
  - Configuration
---

For information setting up and configuring Fastly, see [Set up Fastly]({{ page.baseurl }}/cloud/cdn/cloud-fastly.html).

To verify the Fastly extension is working or to debug the Fastly extension, you can use the `curl` command to display certain response headers. The values of these response headers indicate whether or not Fastly is enabled and functioning properly. You can further investigate issues based on the values of headers and caching behavior.

## Errors from Fastly {#errors}

If you receive the following errors with Fastly, check the following:

* **503 error**: When you receive this error, check through logs and the Fastly 503 error page. See [503 timeouts](#timeouts) for details.
* **Store menu doesn't display or work**: You may be using a link or temp link directly to the origin server instead of through the live site URL or you used `-H "host:URL"` in a [cURL command](#curl). If you bypass Fastly to the origin server, the main menu doesn't work and incorrect headers display that allow caching on a browser side.

### 503 timeouts {#timeouts}

If you receive a 503 error, check the following logs and information to better troubleshoot the issue.

First, check your [error log]({{ page.baseurl }}/cloud/trouble/environments-logs.html) on your Production or Staging environment: `/var/log/platform/<project_ID>/error.log`.  The log will include possible errors from the application or PHP engine. For example: `memory_limit` or `max_execution_time exceeded`

If the logs do not include errors related to Fastly, check the PHP access log: `/var/log/platform/<project_ID>/php.access.log`. Check the log for an HTTP code 200 for the URL that threw a 503 error. If a 200 is returned for the URL, Magento returned the page without errors. The issue could have occurred after the interval that exceeds `first_byte_timeout` timeout configured by Fastly.

When a 503 error occurs, Fastly returns the reason on the error and maintenance page. If you added code for a custom Error/Maintenance page, you can remove the custom code through the Magento Admin.

1.	Log into the Magento Admin for the Production or Staging Admin.
2.	Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.
3.	In the right pane, expand **Full Page Cache**.
4.	In the **Fastly Configuration** section, expand **Error/Maintenance Page** as the following figure shows.

	![Custom Fastly error page]({{ site.baseurl }}/common/images/cloud_fastly-503-page.png)
5.	Click **Set HTML**.
3.	Remove the custom code. You can save it in a text program to add back later.
4.	When you're done, click **Upload** to send your updates to Fastly.
5.	Click **Save Config** at the top of the page.
6.	Reopen the URL that caused the 503 error. Fastly returns an error page with the reason. The following image is an example.

	![Fastly error]({{ site.baseurl }}/common/images/cloud_fastly-503-example.png)

### Apex and subdomains already in Fastly {#domains}

If your apex domain and subdomains are already managed by a Fastly account with an assigned Service ID, you cannot launch until you do the following:

* Remove the apex domain and subdomains from an existing Fastly account, may include removing or changing the CNAME record
* Complete configurations and CNAME for the Fastly account and Service ID we provide

Fastly only allows one apex domain and all subdomains assigned to a single Fastly service and account. For example, if you have the apex domain of mystore.com with subdomains of shoes.mystore.com and socks.mystore.com managed by an existing Fastly account, you need to remove them from that account before going live with Fastly and {{site.data.var.ece}}.

For details, review your Fastly accounts and [documentation](https://docs.fastly.com/) to remove the domains. This may include removing and updating CNAME records and more.

## Locate Service ID {#service-id}

You can contact us for your Service ID for Staging and Production. For developers and advanced VCL users, you can also make a call using the Fastly variable `req.service_id`. This variable will return the Fastly `service_id`.

For example, you can add this to custom logging to capture the value. If you are using a custom logging format in your VCL, you can set the call to your format:

    log {"syslog "}req.service_id{" my_logging_endpoint_name :: "}

You can then use the same vcl within different services.

## Test your live site {#curl-live}

First, check your live site to verify the response headers with `curl`. The command goes through the Fastly extension to receive responses. If you don't receive the correct headers, then you should test the [origin servers directly](#cloud-test-stage). This command returns the values of the `Fastly-Magento-VCL-Uploaded` and `X-Cache` headers.

If you don't have a live site set up with DNS, you can use either a static route or you can use the optional `--resolve` flag, which bypasses DNS name resolution.

Check response headers with **curl command**:

1. In a terminal, enter the following command to test your live site URL:

		curl http://<live URL> -vo /dev/null -HFastly-Debug:1 [--resolve]

	Use `--resolve` only if your live URL isn't set up with DNS and you don't have a static route set.
	For example: `curl http://www.mymagento.biz -vo /dev/null -HFastly-Debug:1`
2. Verify the [response headers](#response-headers) to ensure Fastly is working. The output for this command is similar to curl Staging and Production. For example, you should see the returned unique headers by this command:

		< Fastly-Magento-VCL-Uploaded: yes
		< X-Cache: HIT, MISS

### Test your Staging and Production sites {#cloud-test-stage}

The command format differs for Staging and Production.

For more information on these commands, you bypass Fastly when you inject `-H "host:URL"`, replace with origin to connecting location (CNAME information from your OneDrive Spreadsheet), `-k` ignores SSL, and `-v` provides verbose responses. If headers display correctly, check the live site and verify headers again.

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

If you do not have DNS set up for a public hostname, enter a command similar to the following:

	curl -k https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud -vo /dev/null -HFastly-Debug:1

### Check response headers {#response-headers}

For detailed information on hits and misses, see Fastly's [Understanding cache HIT and MISS headers with shielded services](https://docs.fastly.com/guides/performance-tuning/understanding-cache-hit-and-miss-headers-with-shielded-services){:target="_blank"}.

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

To determine if the default VCL snippets are not uploaded, check the following:

* **Top level navigation does not work**: The top level navigation relies on Edge Side Includes (ESI) processing which is not enabled by default. When you upload the Magento VCL snippets during configuration, ESIs are enabled. See [Upload Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets).
* **Pages are not caching**: By default Fastly doesn’t cache pages with Set-Cookies. Magento sets Cookies even on cacheable pages (TTL > 0). Magento Fastly VCL strips those cookies on cacheable pages. This may also happen if page block in a template is marked uncacheable. If this occurs, it's due to a 3rd party module or Magento extension blocking or removing the Magento headers. See [X-Cache missed section](#xcache-miss) for details.
* **Geo-location/GeoIP does not work**: The uploaded Magento Fastly VCL snippets append the country code to the URL. See [Upload Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets).

## Resolve errors found by cURL {#curl}

This section provides suggestions for resolving errors you might find using the `curl` command.

### Fastly-Module-Enabled is not present {#no-module}

If you don't receive a "yes" for the `Fastly-Module-Enabled` in the response headers, you need to verify the Fastly module is installed and selected.

To verify Fastly is enabled in Staging and Production, check the configuration in the Magento Admin for each environment:

1. Log into the Admin console for Staging and Production using the URL with /admin (or the changed Admin URL).
2. Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **System**. Scroll and click **Full Page Cache**.
3. Ensure Fastly CDN is selected.
4. Click on **Fastly Configuration**. Ensure the Fastly Service ID and Fastly API token are entered (your Fastly credentials). Verify you have the correct credentials entered for the Staging and Production environment. Click **Test credentials** to help.
5. Edit your `composer.json` and ensure the Fastly module is included with version. This file has all modules listed with versions.

	* In the "require" section, you should have `"fastly/magento2": <version number>`
	* In the "repositories" section, you should have:

			"fastly-magento2": {
						"type": "vcs",
						"url": "https://github.com/fastly/fastly-magento2.git"
				}
6. If you use [Configuration Management]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html#cloud-config-specific-recomm), you should have a configuration file. Edit the `app/etc/config.app.php` (2.0, 2.1) or `app/etc/config.php` (2.2) file and make sure the setting `'Fastly_Cdn' => 1` is correct. The setting should not be `'Fastly_Cdn' => 0` (meaning disabled).

	If you enabled Fastly, delete the configuration file and run the `bin/magento magento-cloud:scd-dump` command to update. For a walk-through of this file, see [Example of managing system-specific settings]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-initial.html).

If the module is not installed, you need to install in an Integration environment branch and deployed to Staging and Production. See [Set up Fastly]({{ page.baseurl }}/cloud/cdn/cloud-fastly.html) for instructions.

### Fastly-Magento-VCL-Uploaded is not present {#no-VCL}

During installation and configuration, you should have uploaded the Fastly VCL. These are the base VCL snippets provided by the Fastly module, not custom VCL snippets you create. For instructions, see [Upload Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets).

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

### Check Fastly credentials {#creds}

Verify if you have the correct Fastly Service ID and API token in your environment. If you have Staging credentials in Production, the purges may not process or process incorrectly.

1. Log in to your local Magento Admin as an administrator.
2. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System** and expand **Full Page Cache**.
3. Expand **Fastly Configuration** and verify the Fastly Service ID and API token for your environment.
4. If you modify the values, click **Test Credentials**.

### Check VCL snippets {#snippets}

If the credentials are correct, you may have issues with your VCLs. To list and review your VCLs per service, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<FASTLY_SERVICE_ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key: <FASTLY_API_TOKEN>"

Review the list of VCLs. If you have issues with the default VCLs from Fastly, you can upload again or verify the content per the [Fastly default VCLs](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}. For editing your custom VCLs, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

## Activating a deactivated version {#activate}

Using `curl` commands and APIs, you can activate, deactivate, and delete a version and service. If you have deactivated a service, you have deactivated the version without leaving any version active.

1. List and find a version you want to activate. For a fully deactivated service, all of the versions will have a flag of `active: false`.

    curl -X GET -s https://api.fastly.com/service/<FASTLY_SERVICE_ID>/version -H "Fastly-Key: <FASTLY_API_TOKEN>"

2. Use the following command to validate all snippets for the version you want to activate:

  	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X GET https://api.fastly.com/service/{FASTLY_SERVICE_ID}/version/{Editable Version #}/validate

  Fastly should return: `"status": "ok"`.

3. To activate a deactivated Version, enter the Service ID and Version in the following command:

	   curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/{FASTLY_SERVICE_ID}/version/{Editable Version #}/activate

If you want to activate an older version, you need to deactivate the currently active version:

  curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/{FASTLY_SERVICE_ID}/version/{Editable Version #}/deactivate

Then activate the version you want active:

  curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/{FASTLY_SERVICE_ID}/version/{Editable Version #}/activate

#### Related topics

* [Fastly in Cloud]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html)
* [Set up Fastly]({{ page.baseurl }}/cloud/cdn/cloud-fastly.html)
* [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html)
