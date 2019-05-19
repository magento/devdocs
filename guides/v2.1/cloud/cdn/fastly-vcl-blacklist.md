---
group: cloud-guide
subgroup: 090_configure
title: Custom blacklist VCL
redirect_from:
   - /guides/v2.1/cloud/configure/fastly-vcl-blacklist.html
   - /guides/v2.2/cloud/configure/fastly-vcl-blacklist.html
   - /guides/v2.3/cloud/configure/fastly-vcl-blacklist.html
functional_areas:
  - Cloud
  - Setup
---

You may want to create a blacklist of IPs to block from accessing your site. You can create an Edge ACL list of the blacklisted IPs with a VCL snippet. The code checks the IP of the incoming IP address. If it matches a member of the ACL, it is blocked with a 403 Forbidden error from accessing your entire website. All other client IPs are allowed access.

You must have the following information to complete this VCL code snippet:

* List of client IPs to blacklist, or block access
* Account access and URL to the Magento Admin for the Staging or Production environment

{:.bs-callout .bs-callout-info}
This information is just the code portion for setting up your VCL. Use this information with [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

## Create Edge ACL for allowing client IPs {#edge-acl}

Edge ACLs create IP lists for managing access for your VCL snippet. For this example, create an Edge ACL of IPs to block from accessing your site. Then create a custom VCL snippet to manage access.

If you want to allow access to Staging and Production, create the Edge ACL in both Magento Admins with the same name. You can have different IPs in the two environments. The VCL snippet code will apply to both environments.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge ACL** section.
4. Click **Add ACL** to create a list. For this example, name the list "blocklist".
5. Enter IP values in the list. Any client IPs added to this list will be blocked access from the site.
6. Optionally, select the Negated checkbox if needed.

You will use the Edge ACL by name in your VCL snippet code.

## Create blocklist.json {#vcl}

To block blacklisted IPs from access to Staging and Production environments, you can use the same VCL snippet file without edits.

Create an `blocklist.json` file with the following JSON content:

```json
{
  "name": "blocklist",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "if ( client.ip ~ blocklist) { error 403 \"Forbidden\"; }"
}
```

Review the following values for the code to determine if you need to make changes:

* `name`: Name for the VCL snippet. For this example, we used the name `blocklist`.
* `priority`: Determines the order VCL snippets call. You want to set the priority to 5 to immediately run and check for blacklisted, blocked IPs. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50.
* `type`: For this VCL, we use `recv`, which places it in the vcl_recv subroutine by below the boilerplate VCL and above any objects.
* `content`: The snippet of VCL code to run, which verifies the client IP. If the IP is in the Edge ACL, it is blocked from access with a 403 Forbidden error for the entire website. All other client IPs are allowed access.

{:.bs-callout .bs-callout-info}
The default VCL snippets you uploaded included a prepended name of `magentomodule_` with a priority of 50. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also consider the priority of your custom snippets if they should override the default snippets.

## Finish adding the VCL {#complete}

When saved, continue creating other VCLs. You can then run the bash script, then validate and activate your VCLs to complete the process. For complete steps, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

