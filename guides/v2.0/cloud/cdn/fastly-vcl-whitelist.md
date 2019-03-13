---
group: cloud-guide
subgroup: 090_configure
title: Custom whitelist VCL
menu_title: Custom whitelist VCL
menu_order:
menu_node:
redirect_from:
  - /guides/v2.0/cloud/configure/fastly-vcl-whitelist.html
functional_areas:
  - Cloud
  - Setup
---

You may only want to allow specific client IPs access to your Magento Admin. To whitelist and allow these IPs access, you can create an Edge ACL through the Magento Admin with a list of IPs and create a VCL snippet with code to verify client IPs. Any IP not matching the allow list is restricted with a 403 Forbidden error.

You must have the following information to complete this VCL code snippet:

* List of client IPs to allow access
* Account access and URL to the Magento Admin for the Staging or Production environment
* URL for the Magento Admin. If you changed this URL from `/admin`, you will need to modify the code in this example.

{: .bs-callout .bs-callout-info }
This information is just the code portion for setting up your VCL. Use this information with [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

## Create Edge ACL for allowing client IPs {#edge-acl}

Edge ACLs create IP lists for managing access for your VCL snippet. For this example, create an Edge ACL of IPs to whitelist and enable access to your site. Then create a custom VCL snippet to manage access.

If you want to allow access to Staging and Production, create the Edge ACL in both Magento Admins with the same name. You can have different IPs in the two environments. The VCL snippet code will apply to both environments.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge ACL** section.
4. Click **Add ACL** to create a list. For this example, name the list "allowlist".
5. Enter IP values in the list. Any client IPs added to this list will be allowed access to the site.
6. Optionally, select the Negated checkbox if needed.

You will use the Edge ACL by name in your VCL snippet code.

## Create allowlist.json {#vcl}

To allow only whitelisted IPs access to Staging and Production environments, you can use the same VCL snippet file without edits.

Create an `allowlist.json` file with the following JSON content:

{% highlight json %}
{
  "name": "allowlist",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ((req.url ~ \"^/admin\") && !(client.ip ~ whitelist) && !req.http.Fastly-FF) { error 403 \"Forbidden\"; }"
}
{% endhighlight %}

Review the following values for the code to determine if you need to make changes:

* `name`: Name for the VCL snippet. For this example, we used the name `allowlist`.
* `priority`: Determines the order VCL snippets call. You want to set the priority to 5 to immediately run and check for whitelisted, allowed IPs. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50.
* `type`: For this VCL, we use `recv`, which places it in the vcl_recv subroutine by below the boilerplate VCL and above any objects.
* `content`: The snippet of VCL code to run, which verifies the client IP. The following occurs in this code:

  * If the IP is in the Edge ACL, it is allowed access. If not, they receive a 403 Forbidden error.
  * If your URL for your Magento Admin was changed, make sure to edit `/admin` with the new URL. For example, `/company-admin`.
  * In the code sample, the condition `!req.http.Fastly-FF` is important when using Origin Shielding. Do not remove or edit this code.

{: .bs-callout .bs-callout-info }
The default VCL snippets you uploaded included a prepended name of `magentomodule_` with a priority of 50. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also consider the priority of your custom snippets if they should override the default snippets.

## Finish adding the VCL {#complete}

When saved, continue creating other VCLs. You can then run the bash script, then validate and activate your VCLs to complete the process. For complete steps, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).
