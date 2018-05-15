---
group: cloud
subgroup: 090_configure
title: Custom extend Admin timeout VCL
menu_title: Custom extend Admin timeout VCL
menu_order:
menu_node:
version: 2.1
github_link: cloud/configure/fastly-vcl-extend-timeout.md
functional_areas:
  - Cloud
  - Setup
---

Fastly has a strict timeout for the Magento Admin of three minutes. This may not be enough time for some extended actions. To extend the default timeout for the Magento Admin, you will create a new VCL snippet with a priority of 100 and a longer timeout value. This VCL snippet value will run last and override the default value in `pass.vcl` with a priority of 50 (already uploaded to your service).

To build the new command, we took the default code and revised it with a new name (`extendtimeout`) and lower priority value. The order of priorities will use this value over the default 180 seconds. How did you set the default timeout? When you first uploded your VCL snippets when configuring Fastly, you uploaded a default VCL with a default timeout of 180 seconds (three minutes). The VCL snippet uploaded was from this [Fastly pass.vcl snippet](https://github.com/fastly/fastly-magento2/blob/master/etc/vcl_snippets/pass.vcl){:target="_blank"}.

The important code that sets the timeout is the `first_byte_timeout` value of 100. For this snippet, you can extend this time to 300s for five minutes or 600s for ten minutes. Ten minutes is the hard cap for Fastly timeouts. In this code example, we extend the timeout to ten minutes.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This information is just the code portion for setting up your VCL. Use this information with [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/configure/cloud-vcl-custom-snippets.html).
</div>

## Create extendtimeout.json {#vcl}
To extend the timeout for the Magento Admin to Staging and Production environments, you can use the same VCL snippet file without edits.

Create an `extendtimeout.json` file with the following JSON content:

{% highlight json %}
{
  "name": "extendtimeout",
  "dynamic": "0",
  "type": "pass",
  "priority": "100",
  "content": "if ( req.url ~ \"^/(index\\.php/)?admin(_.*)?/\" ) { set bereq.first_byte_timeout = 600s; }"
}
{% endhighlight %}

Review the following values for the code to determine if you need to make changes:

* `name`: Name for the VCL snippet. For this example, we used the name `blocklist`.
* `priority`: Determines the order VCL snippets call. You want the priority set to 100 to be the last run and overwrite the default `pass.vcl` timeout.
* `type`: For this VCL, we use `pass`.
* `content`: The code that runs. For this snippet, we change the `set bereq.first_byte_timeout` with a higher value. For example, 300s for five minutes or 600s for ten minutes. Ten minutes is the hard cap for Fastly timeouts.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The default VCL snippets you uploaded included a prepended name of `magentomodule_` with a priority of 50. For your custom VCL snippets, **do not use the `magentomodule_` name**. Also consider the priority of your custom snippets if they should override the default snippets.
</div>

## Finish adding the VCL {#complete}
When saved, continue creating other VCLs. You can then run the bash script, then validate and activate your VCLs to complete the process. For complete steps, see [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/configure/cloud-vcl-custom-snippets.html).

