---
group: cloud-guide
title: Fastly troubleshooting
redirect_from:
   - /cloud/trouble/trouble_fastly.html
functional_areas:
  - Cloud
  - Configuration
---

Use the following information to troubleshoot and manage the Fastly CDN module for Magento 2 in your {{ site.data.var.ece }} project environments. For example, you can investigate response header values and caching behavior to resolve Fastly service and performance issues.

On Pro Production and Staging environments, you can use [New Relic Logs]({{ site.baseurl }}/cloud/project/new-relic.html) to view and analyze Fastly CDN and WAF log data to troubleshoot errors and performance problems.

{:.bs-callout-info}
For information about setting up and configuring Fastly, see [Set up Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html).

## Locate Fastly service ID {#service-id}

You need the Fastly service ID to configure Fastly from the Magento Admin UI or to submit Fastly API requests for advanced Fastly configuration and troubleshooting.

If Fastly is enabled in your project environment, you can get the service ID from the Magento Admin UI. See [Get Fastly credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#cloud-fastly-creds).

Developers and advanced VCL users can use custom VCL to retrieve the service ID using the Fastly variable `req.service_id`. For example, you can add the `req.service_id` to the custom logging directive in your VCL to capture the service ID value:

```json
log {"syslog"} req.service_id {" my_logging_endpoint_name :: "}
```

You can use the same VCL for Production and Staging environments. See [How to configure vcl_log](https://support.fastly.com/hc/en-us/community/posts/360040447172-How-to-configure-vcl-log).

## Troubleshoot site performance, purge, and cache issues

Use the following list to identify and troubleshoot issues related to the Fastly service configuration for your {{site.data.var.ece}} environment.

-  **Store menu does not display or work**—You might be using a link or temp link directly to the origin server instead of using the live site URL, or you used `-H "host:URL"` in a [cURL command](#curl-live). If you bypass Fastly to the origin server, the main menu does not work and incorrect headers display that allow caching on the browser side.

-  **Top level navigation does not work**—The top level navigation relies on Edge Side Includes (ESI) processing which is enabled when you upload the default Magento Fastly VCL snippets. If the navigation is not working, [upload the Fastly VCL]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) and recheck the site.

-  **Geo-location/GeoIP does not work**— The default Magento Fastly VCL snippets append the country code to the URL. If the country code is not working, [upload the Fastly VCL]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) and recheck the site.

-  **Pages are not caching**—By default, Fastly does not cache pages with the `Set-Cookies` header. Magento sets cookies even on cacheable pages (TTL > 0). The default Magento Fastly VCL strips those cookies on cacheable pages. If pages are not caching, [upload the Fastly VCL]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets) and recheck the site.

   This issue can also occur if a page block in a template is marked uncacheable. In that case, the problem is most likely caused by a third-party module or Magento extension blocking or removing the Magento headers. To resolve the issue, see [X-Cache contains only MISS, no HIT](#xcache-miss).

-  **Purge requests are failing**—Fastly returns the following error when you submit a purge request:

   ```The purge request was not processed successfully.```

   This issue can be caused by either of the following issues:

   -  Invalid Fastly credentials in the Fastly service configuration for the {{ site.data.var.ece }} project environment
   -  Invalid code in a custom VCL snippet

   To resolve the issue, see [Error purging Fastly cache on Cloud](https://support.magento.com/hc/en-us/articles/115001853194-Error-purging-Fastly-cache-on-Cloud-The-purge-request-was-not-processed-successfully-) in the Magento Help Center.

## 503 errors from Fastly {#errors}

If Fastly returns 503 timeout errors, check the error logs and the 503 error page to identify the root cause.

{:.bs-callout-info}
If the timeout occurs when running bulk operations, you can [extend the Fastly timeout for the Magento Admin UI]({{site.baseurl}}/cloud/cdn/configure-fastly-customize-cache.html#extend-fastly-timeout).

If you receive a 503 error, check the Production or Staging environment error log and php access log to troubleshoot the issue.

{:.procedure}
To check the error logs:

-  [Error log]({{ site.baseurl }}/cloud/project/log-locations.html#application-logs)

   ```text
   /var/log/platform/<project_ID>/error.log
   ```

   This log includes any errors from the application or PHP engine, for example `memory_limit` or `max_execution_time exceeded` errors. If you do not find any Fastly-related errors, check the PHP access log.

-  PHP access log

   ```text
   /var/log/platform/<project_ID>/php.access.log
   ```

   Search the log for HTTP 200 responses for the URL that returned the 503 error. If you find the 200 response, it means that Magento returned the page without errors. That indicates the issue might have occurred after the interval that exceeds the `first_byte_timeout` value set in the Fastly service configuration.

When a 503 error occurs, Fastly returns the reason on the error and maintenance page. You might not be able to see the reason if you added code for a custom response page. To view the reason code on the default error page, you can remove the HTML code for the custom error page.

{:.procedure}
To check the Fastly 503 error page:

{% include cloud/admin-ui-login-step.md %}

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. In the right pane, expand **Full Page Cache**.

1. In the **Fastly Configuration** section, expand **Custom Synthetic Pages** as the following figure shows.

   ![Custom 503 error page]

1. Click **Set HTML**.

1. Remove the custom code. You can save it in a text program to add back later.

1. Click **Upload** to send your updates to Fastly.

1. Click **Save Config** at the top of the page.

1. Reopen the URL that caused the 503 error. Fastly returns an error page with the reason as shown in the following example.

   ![Fastly error]({{ site.baseurl }}/common/images/cloud/cloud_fastly-503-example.png)

## Apex and subdomains already associated with a Fastly account {#domains}

If the apex domain and subdomains for your {{ site.data.var.ece }} project are already associated with an existing Fastly account with an assigned Service ID, you cannot launch until you update your Fastly configuration:

-  Update the apex and subdomain configuration on the existing Fastly account. See [Multiple Fastly accounts and assigned domains]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#domain).

-  [Enable and configure Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#cloud-fastly-config) and complete the [DNS configuration]({{ site.baseurl }}/cloud/live/site-launch-checklist.html#dns) for your project environment.

## Verify or debug Fastly services

You can troubleshoot performance or caching issues for a {{ site.data.var.ece }} site by testing site URLs and examining the header values returned in the response.

### Check live site through Fastly {#curl-live}

Use the Fastly API to check the following response headers returned from your live site: `Fastly-Magento-VCL-Uploaded` and `X-Cache`.

Fastly API requests are passed through the Fastly extension to get a response from your origin servers. If the response returns incorrect headers, test the [origin servers directly](#cloud-test-stage).

{:.procedure}
To check the response headers:

1. In a terminal, use the following `curl` command to test your live site URL:

   ```bash
   curl https://<live URL> -vo /dev/null -H Fastly-Debug:1
   ```

   If you have not set a static route or completed the DNS configuration for the domains on your live site, use the `--resolve` flag, which bypasses DNS name resolution.

   ```bash
   curl -svo /dev/null --resolve '<your_hostname>:443:<IP-address-of-cache-node>' <https-URL>
   ```

   {:.bs-callout-info}
   To use this command with the `--resolve` option, you must have TLS enabled with Fastly via a SSL/TLS certificate and find the IP address of the cache node.

1. In the response, verify the [headers](#response-headers) to ensure that Fastly is working. You should see following unique headers in the response:

   ```http
   < Fastly-Magento-VCL-Uploaded: yes
   < X-Cache: HIT, MISS
   ```

If the headers do not have the correct values, see the following information:

-  [Check VCL upload](#no-VCL)

-  [X-Cache contains only MISS, no HIT](#xcache-miss)

### Bypass Fastly cache to check Staging and Production sites {#cloud-test-stage}

If the Fastly service returns incorrect headers, you can create a VCL snippet that allows you to submit requests that bypass the Fastly cache. See [Bypass Fastly cache]({{site.baseurl}}/cloud/cdn/fastly-vcl-bypass-to-origin.html).

After you add the VCL snippet, use cURL commands to submit requests to the origin server from the specified IP address. Then, check the responses for errors.

### Check cache HIT and MISS response headers {#response-headers}

Verify that the returned response contains the following information:

-  Includes the `X-Magento-Tags` header

-  The value of the `Fastly-Module-Enabled` header is either `Yes` or the version number of the Fastly for CDN Magento 2 module installed in the project environment

-  [Cache-Control: max-age](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) is greater than 0

-  [Pragma](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32) setting is `cache`

The following excerpt from the cURL command output shows the correct values for the `Pragma`, `X-Magento-Tags`, and `Fastly-Module-Enabled` headers:

```terminal

* STATE: INIT => CONNECT handle 0x600057800; line 1402 (connection #-5000)
* Rebuilt URL to: https://www.mymagento.biz.c.sv7gVom4qrpek.ent.magento.cloud/
* Added connection 0. The cache now contains 1 members
* Trying 192.0.2.31...
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

```

 {:.bs-callout-info}
For detailed information on hits and misses, see [Understanding cache HIT and MISS headers with shielded services](https://docs.fastly.com/guides/performance-tuning/understanding-cache-hit-and-miss-headers-with-shielded-services) in the Fastly documentation.

### Resolve errors found in response headers {#curl}

This section provides suggestions for resolving errors returned when checking response headers using the Fastly API.

#### Fastly module is not enabled {#no-module}

If the Fastly module is not enabled (`Fastly-Module-Enabled: no`) or if the header is missing, [use SSH to log in]({{site.baseurl}}/cloud/env/environments-ssh.html#magento-cli) to the project. Then, run the following command to check the module status.

```bash
php bin/magento module:status Fastly_Cdn
```

Based on the status returned, use the following instructions to update the Fastly configuration.

-  `Module does not exist`—If the module does not exist [install and configure](https://github.com/fastly/fastly-magento2/blob/master/Documentation/INSTALLATION.md) the Fastly CDN Module for Magento 2 in an Integration branch. After installation completes, enable and configure the module. See [Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

-  `Module is disabled`—If the Fastly module is disabled, update the environment configuration on an Integration branch in your local environment to enable it. Then, push the changes to Staging and Production. See [Manage extensions]({{ site.baseurl }}/cloud/howtos/install-components.html).

   If you use [Configuration Management]({{site.baseurl}}/cloud/live/sens-data-over.html), check the Fastly CDN module status in the `app/etc/config.php` configuration file before you push changes to the Production or Staging environment.

   If the module is not enabled (`Fastly_CDN => 0`) in the `config.php` file, delete the file and run the following command to update `config.php` with the latest configuration settings.

   ```bash
   bin/magento magento-cloud:scd-dump
   ```

#### Fastly VCL has not been uploaded {#no-VCL}

If the Fastly VCL has not been uploaded (`Fastly-Magento-VCL-Uploaded`: `false`), use the *Upload VCL* option in the Magento Admin UI to upload it. See [Upload Fastly VCL snippets]({{ site.baseurl }}/cloud/cdn/configure-fastly.html#upload-vcl-snippets).

#### X-Cache contains only MISS, no HIT {#xcache-miss}

If the `X-Cache` header contains `HIT` (`HIT, HIT` or `HIT, MISS`), it indicates that Fastly returns the cached content successfully.

If the `X-Cache` header is `MISS, MISS` and does not contain `HIT`, run the `curl` command again to make sure the page was not recently purged from the cache.

If you get the same result, use the [`curl` commands](#curl-live) and verify the [response headers](#response-headers):

-  `Pragma` is `cache`
-  `X-Magento-Tags` exists
-  `Cache-Control: max-age` is greater than 0

If the issue persists, another extension is likely resetting these headers. Repeat the following procedure in the Staging environment, disabling all extensions and re-enabling each one to determine which extension is resetting the headers. After you identify the extension causing the problem, you must disable it in the Production environment.

{% include cloud/admin-ui-login-step.md %}

1. Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **Advanced**.

1. In the *Disable Modules Output* section in the right pane, locate and disable all of your extensions.

1. Click **Save Config**.

1. Click **System** > **Tools** > **Cache Management**.

1. Click **Flush Magento Cache**.

1. Complete the following steps for each extension potentially causing issues with Fastly headers:

   -  Enable one extension at a time, save the configuration, and flush the Magento cache.

   -  Run the [`curl` commands](#curl-live) to verify the [response headers](#response-headers).

   Repeat this process for each extension. If the Fastly response headers no longer display, you have identified the extension causing issues with Fastly.

After you identify the extension that is resetting Fastly headers, contact the extension developer for additional assistance. We cannot provide fixes or updates to make third-party extensions work with Fastly caching.

## Rollback Fastly configuration changes

If custom VCL snippet updates or other Fastly configuration changes cause a {{ site.data.var.ece }} site to break or return errors, use the Fastly API [activate](https://docs.fastly.com/api/config#version_0b79ae1ba6aee61d64cc4d43fed1e0d5) command to rollback to an earlier VCL version. You cannot rollback the VCL version from the Magento Admin UI.

{:.procedure}
To rollback the VCL version:

1. To get a list of the available VCL versions for a service, run the following command

   ```bash
   curl -H "Fastly-Key: <FASTLY_API_TOKEN>" https://api.fastly.com/service/<FASTLY_SERVICE_ID>/version/
   ```

1. Run the following command to change the active VCL version to a specified version.

   ```bash
   curl -H "Fastly-Key: <FASTLY_API_TOKEN>" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/<FASTLY_SERVICE_ID>/version/<Version #>/activate
   ```

For details about using the Fastly API to review and manage VCL, see [Manage VCL using the API]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api).

<!-- Link definitions -->

[Custom 503 error page]: {{site.baseurl}}/common/images/cloud/cloud-fastly-custom-synthetic-pages-edit-html.png
{:width="650px"}
