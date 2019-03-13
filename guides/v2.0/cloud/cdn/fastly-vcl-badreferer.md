---
group: cloud-guide
subgroup: 090_configure
title: Custom block bad referer VCL
menu_title: Custom block bad referer VCL
menu_order:
menu_node:
redirect_from:
  - /guides/v2.0/cloud/configure/fastly-vcl-badreferer.html
functional_areas:
  - Cloud
  - Setup
---

You may want to create a VCL snippet that runs before all other modules to block bad referring websites from accessing your site. To block these sites with a 403 Forbidden error through Fastly, create a VCL snippet to use with an Edge Dictionary of domains to block.

You must have the following information to complete this VCL code snippet:

* Create an Edge Dictionary in your environments
* Account access and URL to the Magento Admin for the Staging or Production environment

{: .bs-callout .bs-callout-info }
This information is just the code portion for setting up your VCL. Use this information with [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

## Create an Edge Dictionary {#edge-dictionary}

Edge Dictionaries create key-value pairs for running against your VCL snippet. For example, you may want to build a dictionary of URLs to redirect to a Wordpress backend. You may only want to create the edge dictionary in your Production environment. You can also create it in Staging for testing if needed.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Settings** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge dictionaries** section.
4. Click **Add container**. You need to create a container to hold up to 1,000 key-value pairs.
5. On the container, enter a Dictionary name. For this example, use the name `referer_blocklist`.
6. Select the checkbox for **Activate after the change** if you want to the dictionary after creating or editing the container.
7. Add key-value pairs in the new dictionary. For this example, enter the URLs for your blog that should be redirected to your Wordpress backend. Enter a value of 1.

For more information on using Edge Dictionaries with your VCL snippets, see Fastly's [Creating and using Edge Dictionaries](https://docs.fastly.com/guides/edge-dictionaries/creating-and-using-dictionaries){:target="_blank"} and their example [custom VCL snippets](https://docs.fastly.com/guides/edge-dictionaries/creating-and-using-dictionaries#custom-vcl-examples){:target="_blank"}.

## Create badreferer.json {#vcl}

For this example, you may only want to run it against the Production server. You can also add it to Staging for testing.

Create an `badreferer.json` file with the following JSON content:

{% highlight json %}
{
  "name": "badreferer",
  "dynamic": "0",
  "type": "recv",
  "priority": "5",
  "content": "set req.http.Referer-Host = regsub(req.http.Referer, \"^https?://?([^:/\\s]+).*$\", \"\\1\"); if (table.lookup(referer_blocklist, req.http.Referer-Host)) { error 403 \"Forbidden\"; }"
}
{% endhighlight %}

Review the following values for the code to determine if you need to make changes:

* `name`: Name for the VCL snippet. For this example, we used the name `badreferer`.
* `priority`: Determines the order VCL snippets call. You want to set the priority to 5 to immediately run and block bad referring websites. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50.
* `type`: For this VCL, we use `recv`, which places it in the vcl_recv subroutine by below the boilerplate VCL and above any objects.
* `content`: The code that runs. The code captures the host of a referer website into a header. It then checks if the referrer host is in the Edge Dictionary `referer_blocklist`.

{: .bs-callout .bs-callout-info }
The default VCL snippets you uploaded included a prepended name of `magentomodule_` with a priority of 50. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also consider the priority of your custom snippets if they should override the default snippets.

## Finish adding the VCL {#complete}

When saved, continue creating other VCLs. You can then run the bash script, then validate and activate your VCLs to complete the process. For complete steps, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

