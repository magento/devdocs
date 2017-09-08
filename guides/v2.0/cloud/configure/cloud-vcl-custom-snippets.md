---
layout: default
group: cloud
subgroup: 090_configure
title: Custom Fastly VCL snippets
menu_title: Custom Fastly VCL snippets
menu_order: 7
menu_node:
version: 2.0
github_link: cloud/configure/cloud-vcl-custom-snippets.md
---

[Fastly]({{ page.baseurl}}cloud/basic-information/cloud-fastly.html) and {{site.data.var.ece}} support creating custom Varnish Configuration Language (VCL) snippets. For best results, we recommend creating Edge Dictionaries and Edge ACLs for your VCL snippets. You're free to customize your Fastly VCL snippets any way you like to complete custom code. The following examples and instructions walk through creating edge dictionaries, edge ACLs, and VCL snippets.

To create and upload these VCL snippets, you use a terminal application. You do not need to SSH into a specific environment. This information includes a walk-through creating regular snippets with [`curl` commands](#vcl-curl). _Don't worry, we walk you through the process with examples._

You need the following information to create VCL snippets:

* Fastly Service ID for Staging and Production to assign the snippets to a specific service or environment
* Fastly API key used for the `FASTLY_API_TOKEN` in the commands

For Fastly resources on creating VCL snippets, see:

* [All Fastly VCL content](https://docs.fastly.com/guides/vcl/){:target="_blank"}
*	[Fastly VCL guide](https://docs.fastly.com/guides/vcl/guide-to-vcl){:target="_blank"}
* [Mixing and matching Fastly VCL with custom VCL](https://docs.fastly.com/guides/vcl/mixing-and-matching-fastly-vcl-with-custom-vcl){:target="_blank"}
* [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="_blank"}

Fastly supports two types of snippets. We recommend and document how to create and use regular snippets.

* [Regular snippets](https://docs.fastly.com/guides/vcl-snippets/using-regular-vcl-snippets){:target="_blank"} are versioned VCL snippets. The code and settings are locked per version to create, modify, and deploy with the Fastly service.
* [Dynamic snippets](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"} are snippets you can only create via API calls. These snippets do not have a version and deploy separately from your Fastly service.

## The VCL snippet process {#process}
How do you create and add snippets? Here's the process:

1. [Get a service version](#version-number) number for Fastly
2. [Create VCL snippets](#create-snippet) for that version number
3. [Validate](#validate) all VCL snippets for the version number
4. [Activate](#validate) all VCL snippets for the version number

We provide more information on [Edge Dictionaries](#edge-dictionary), [Edge ACLs](#edge-acl), and [custom VCL snippets](#examples) to get you started.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}, we recommend creating a new snippet with updated values and code with a higher priority value of 100.
</div>

### VCL snippet values {#vcl-curl}
What you should know about the `curl` command and JSON values:

* `Service ID`: The ID indicates the specific Staging or Production service/environment. We provide this value.
* `FASTLY_API_TOKEN`: The API Key for your Fastly account. We provide this value.
* `Editable Version #`: The version of the service you add snippets to for validating and activating
* `type`: Specifies the location to place the generated snippet such as `init` (above subroutines) and within subroutines like `recv`. See [Fastly VCL snippet object values](https://docs.fastly.com/api/config#snippet){:target="_blank"} for information on these values.
* `content`: The snippet of VCL code to run
* `priority`: Determines the order VCL snippets call. Lower values run first, from 1 to 100. All Magento module uploaded snippets are 50. If you want an action to occur last or override Magento default VCL snippets, enter a higher number like 100. To have code occur immediately, enter a lower value like 5.
* `dynamic`: Indicates if this is a [dynamic snippet](https://docs.fastly.com/guides/vcl-snippets/using-dynamic-vcl-snippets){:target="_blank"}

All default VCL snippets have a priority of 50. Priorities will call VCL snippets starting from 1 to 100. Any VCL snippet at priority 5 will run immediately, best for blacklists, whitelists, and redirects. Priority 100 is best for overriding default VCL snippet code and values, best for extending timeouts. If you do not set a priority with your `curl` command, the default value set is 100.

### Get a service version number {#version-number}
When creating a new regular VCL snippet, or updating a current one, you need a new version number. This version is a new service configuration version number for your Fastly service. When adding VCL snippets, you add them all to a specific version of the service. You may have noticed the versioning when you upload VCLs during Fastly configuration through the Fastly module.

When you validate and activate your snippets, you actually activate a version. All snippets assigned to the version activate.

To generate the version, use the following command with your Service ID and API key in the command:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version

Fastly returns the editable version number and Service ID. You use the version number when creating, calling, and managing VCL snippets. For example:

	{
		"number":1,
		"service_id": "SU1Z0isxPaozGVKXdv0eY"
	}

When reviewing a list of VCL snippets, you will also note the snippets have a specific version number in the JSON output.

### Create the regular VCL snippet for a version {#create-snippet}
Create one or more VCL snippets on the new version numbers. We recommend typing out your `curl` command in a text editor to make sure everything is correct before entering it in a terminal. You can always copy and paste the command when ready to enter it.

When you assign VCL snippets to the version, you can then validate and activate all snippets for that version. When activated, that new service number is active.

Use the following command as a template:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "{VCL Name}", "type": "Type", "dynamic": 0, "priority": 100, "content": "{VCL snippet code}"}

After you run the `curl` command, Fastly returns a JSON response with the data. For example:

	{
	  "id": "62Yd1WfiCBPENLloXfXmlO",
	  "service_id": "{Service ID}",
	  "version": "{Editable Version #}",
	  "name": "apply_acl",
	  "priority": "100",
	  "dynamic": "1",
	  "type": "hit",
	  "content": "if ((client.ip ~ {ACLNAME}) && !req.http.Fastly-FF){ error 403; }",
	  "created_at": "2016-08-15T09:37:10+00:00",
	  "updated_at": "2016-08-15T09:37:10+00:00",
	  "deleted_at": null
	}

### Validate and activate snippets for a version {#validate}
When you add the VCL snippet(s) to the version, Fastly creates and assigns it to your service per that version number. Next, you should verify the entered VCL snippet(s) validates with Fastly. Use the following command to validate all snippets for the version:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X GET https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/validate

Fastly should return: `"status": "ok"`. If you received an OK, activate the version for that service:

Assuming no errors (if there are errors, fix them before proceeding), the last step is to activate the version with the following command. All VCL snippets associated with the version activate.

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X PUT https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/activate

If your received errors back from Fastly, track down the errors and update the specific snippet with the following command. Make sure to use the same version number you are working to activate.

	curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

## Manage regular VCL snippets with curl {#manage-vcl}
To review an individual snippet, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

To list all regular VCL snippets attached to a service, enter the following API call in a terminal:

	curl -X GET -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/ -H "Fastly-Key:FASTLY_API_TOKEN"

To update a custom VCL snippet using the API, list the snippet then enter a `curl` command with the specific snippet version, name, and edits:

	curl -X PUT -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN" -H 'Content-Type: application/x-www-form-urlencoded' --data $'content=if ( req.url ) {\n set req.http.my-snippet-test-header = \"affirmative\";\n}';

If you want to override values and settings from the [default Fastly VCL snippets](https://github.com/fastly/fastly-magento2/tree/master/etc/vcl_snippets){:target="_blank"}, we recommend creating a new snippet with updated values and code with a priority of 100 (overrides the defaults).

To delete an individual VCL snippet using the API, get a list of snippets and enter a `curl` command with the speicific snippet information to delete. We recommend keeping a copy of the creation command and JSON if you need to recreate it later.

	curl -X DELETE -s https://api.fastly.com/service/<Service ID>/version/<Editable Version #>/snippet/<Snippet Name e.g my_regular_snippet> -H "Fastly-Key:FASTLY_API_TOKEN"

## Create edge dictionary {#edge-dictionary}
Edge Dictionaries create key-value pairs for running against your VCL snippet. For example, you may want to build a dictionary of bad referring domains to block from your site. First, you would create the Edge Dictionary, then create a [custom VCL snippet](#bad-refer) using it.

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge dictionaries** section.
4. Click **Add container**. You need to create a container to hold up to 1,000 key-value pairs.
5. On the container, enter a Dictionary name. For this example, use the name for referers.
6. Select the checkbox for **Activate after the change** if you want to the dictionary after creating or editing the container.
7. Add key-value pairs in the new dictionary. For this example, enter the domains for bad refering websites you want to block from your site. Enter a value of 1.

You can use the Edge Dictionary by name in your VCL snippet code.

For more information on using Edge Dictionaries with your VCL snippets, see Fastly's [Creating and using Edge Dictionaries](https://docs.fastly.com/guides/edge-dictionaries/creating-and-using-dictionaries){:target="_blank"} and their example [custom VCL snippets](https://docs.fastly.com/guides/edge-dictionaries/creating-and-using-dictionaries#custom-vcl-examples){:target="_blank"}.

## Create edge ACL {#edge-acl}
Edge ACLs create IP lists for managing access for your VCL snippet. For example, you may want to create ACLs of IPs to whitelist or blacklist for access to your site. You can create an Edge ACL for whitelist IPs and another for blacklist IPs. Then create custom VCL snippets to manage access by providing normal access, redirecting to a specific location, or [displaying a 403 Forbidden message](#block-ip).

1. Log in to the Magento Admin.
2. Navigate to **Stores** > **Configuration** > **Advanced** > **System** > **Fastly Configuration**.
3. Expand the **Edge ACL** section.
4. Click **Add ACL** to create a list.
5. Enter IP values in the list. Optionally, select the Negated checkbox if needed.

You can use the Edge ACL by name in your VCL snippet code.

While we walk through the process of creating ACLs through the module for your VCL snippets, you can also manually manage the ACL along with the VCL in code. For more information on using manually added ACLs with your VCL snippets, see Fastly's [Manually creating access control lists](https://docs.fastly.com/guides/access-control-lists/manually-creating-access-control-lists){:target="_blank"}.

## Example VCL snippets {#examples}
The following are example regular VCL snippets using Edge Dictionaries and Edge ACLs. When creating your custom VCL snippet code, you may want to review the following references:

* [Fastly's VCL regular expression cheat sheet](https://docs.fastly.com/guides/vcl/vcl-regular-expression-cheat-sheet){:target="_blank"}
* [Fastly's VCL extensions](https://docs.fastly.com/guides/vcl/guide-to-vcl#fastlys-vcl-extensions){:target="_blank"}

### Create a block bad referers VCL {#bad-refer}
You may want to create a VCL snippet that runs before all other modules to block bad referring websites from accessing your site. To block these sites with a 403 Forbidden error through Fastly, create a VCL snippet to use with an Edge Dictionary of domains to block.

Of note for this snippet, you want to set the priority to 5 to immediate run and block the bad referers. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50. The name for the Edge Dictionary is also `referer_blocklist`. If the domain matches the dictionary, it is blocked from access.

The following is an example of this VCL code from Fastly:

* Name: `block_bad_referers`
* Type: `recv`, puts the code in the subroutine vcl_recv
* Priority: 5
* Content:

      # capture host of referer into a header
        set req.http.Referer-Host = regsub(req.http.Referer, "^https?://?([^:/\s]+).*$", "\1");
      # check if referrer host is in blocklist table
        if (table.lookup(referer_blocklist, req.http.Referer-Host)) {
            error 403 "Forbidden";
        }

The curl command would look like the following:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "block_bad_referers", "type": "recv", "dynamic": 0, "priority": 5, "content": "set req.http.Referer-Host = regsub(req.http.Referer, "^https?://?([^:/\s]+).*$", "\1"); if (table.lookup(referer_blocklist, req.http.Referer-Host)) { error 403 "Forbidden"; }"}

[Validate and activate](#validate) the version to activate the snippet.

### Create a block blacklisted IPs VCL {#block-ip}
You may want to create a blacklist of IPs to block from accessing your site. You can create an Edge ACL list of the blacklisted IPs with a VCL snippet. The code checks the IP of the incoming IP address. If it matches a member of the ACL, it is blocked with a 403 Forbidden error.

Of note for this snippet, you want to set the priority to 5 to immediately run and block those blacklisted IPs. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50. The name for the Edge ACL is also `blocklist`. If the domain matches the dictionary, it is blocked from access.

* Name: `block_bad_ips`
* Type: `recv`, puts the code in the subroutine vcl_recv
* Priority: 5
* Content:

      if ( client.ip ~ blocklist) {
        error 403 "Forbidden";
        }

The curl command would look like the following:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "block_bad_ips", "type": "recv", "dynamic": 0, "priority": 5, "content": "if ( client.ip ~ blocklist) { error 403 "Forbidden"; }"}

[Validate and activate](#validate) the version to activate the snippet.

### Create a whitelist VCL {#whitelist-ip}
You may want to create a whitelist of IPs to allow accessing your Magento Admin console. You can create an Edge ACL list of the whitelisted IPs with a VCL snippet. The code checks the IP of the incoming IP address. If it matches a member of the ACL, it is allowed access. All other IPs receive a 403 Forbidden error.

Of note for this snippet, you want to set the priority to 5 to immediately run and check for whitelisted IPs. This priority runs the snippet immediately and before any of the uploaded and default Magento VCL snippets (magentomodule) that have a priority of 50. The name for the Edge ACL is also `whitelist`. If the domain matches the dictionary, it is allowed access to a path of `/admin`. If you changed your Magento Admin path, use that value in this code example.

* Name: `whitelist_admin`
* Type: `recv`, puts the code in the subroutine vcl_recv
* Priority: 5
* Content:

			if ((req.url ~ "^/admin") && !(client.ip ~ whitelist) && !req.http.Fastly-FF) {
				error 403 "Forbidden";
				}

The curl command would look like the following:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "block_bad_ips", "type": "recv", "dynamic": 0, "priority": 5, "content": "if ((req.url ~ "^/admin") && !(client.ip ~ whitelist) && !req.http.Fastly-FF) { error 403 "Forbidden"; }"}

[Validate and activate](#validate) the version to activate the snippet.

### Extend Magento Admin timeout on Fastly {#admin-timeout}
Fastly has a strict timeout for the Magento Admin of three minutes. This may not be enough time for some extended actions. To extend the default timeout for the Magento Admin, you will create a new VCL snippet with a priority of 100 and a longer timeout value. This VCL snippet value will run last and override the default value in `pass.vcl` with a priority of 50 (already uploaded to your service).

To build the new command, we can take the default code and revise it with a new name and lower priority value. The order of priorities will use this value over the default 180 seconds. How did you set the default timeout? When you first uploded your VCL snippets when configuring Fastly, you uploaded a default VCL with a default timeout of 180 seconds (three minutes). The VCL snippet uploaded was from this [Fastly pass.vcl snippet](https://github.com/fastly/fastly-magento2/blob/master/etc/vcl_snippets/pass.vcl){:target="_blank"}. The important code that sets the timeout is the `first_byte_timeout` value:

	# Deactivate gzip on origin
	unset bereq.http.Accept-Encoding;

	# Increase first byte timeouts for /admin* URLs to 3 minutes
	if ( req.url ~ "^/(index\.php/)?admin(_.*)?/" ) {
		set bereq.first_byte_timeout = 180s;
		}

For this snippet, modify the `set bereq.first_byte_timeout` with a higher value. For example, 300s for five minutes or 600s for ten minutes. Ten minutes is the hard cap for Fastly timeouts.

To create a new snippet, use the following `curl` command. This version sets the timeout to 600s (ten minutes).

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "block_bad_ips", "type": "recv", "dynamic": 0, "priority": 5, "content": "if ( req.url ~ "^/(index\.php/)?admin(_.*)?/" ) { set bereq.first_byte_timeout = 600s; }"}

[Validate and activate](#validate) the version to activate the snippet.

### Choose a different backend VCL {#dif-backend}
You may have a separate Wordpress blog for all of your store's blog entries, kept separate from your store. For this example, you are trying to check the first part of the incoming path and redirect the visitor to your Wordpress backend. You would create an Edge Dictionary called `wordpress_urls` with a list of paths.

This VCL snippet locates and extracts the first part of the path. For example, it extracts `mypath` from the `/mypath/someotherpath`. It then compares that path against the Edge Dictionary. If a match is found, the visitor is redirected to the Wordpress backend. For this snippet, you may want to use priority 5 to have the check runn immediately and redirect those visitors to the other backend.

The following is an example of this VCL code from Fastly:

	# Extract first part of the path: /mypath/someotherpath extracts mypath.
	# Look up the path in the Wordpress URL lookup table and mark it as needed
	# to be processed by Wordpress.
	if ( req.url.path ~ "^\/?([^:\/\s]+).*$" ) {
     # check if first part of the url is in the wordpress urls table
     if ( table.lookup(wordpress_urls, re.group.1, "NOTFOUND") != "NOTFOUND" ) {
		 	set req.http.X-WP = "1";
			}
		}

For example, the command may look like this:

	curl -H "Fastly-Key: {FASTLY_API_TOKEN}" -H 'Content-Type: application/json' -H "Accept: application/json" -X POST https://api.fastly.com/service/{Service ID}/version/{Editable Version #}/snippet -d '{"name": "wordpress_backend", "type": "recv", "dynamic": 0, "priority": 5, "content": "if ( req.url.path ~ "^\/?([^:\/\s]+).*$" ) { if ( table.lookup(wordpress_urls, re.group.1, "NOTFOUND") != "NOTFOUND" ) { set req.http.X-WP = "1"; } }"}

For this VCL snippet to work, you also need to attach a condition to the Wordpress backend to handle this request:

	req.http.X-WP == “1”

#### Related topics

* [Fastly in Cloud]({{ page.baseurl}}cloud/basic-information/cloud-fastly.html)
* [Set up Fastly]({{ page.baseurl}}cloud/access-acct/fastly.html)
* [Troubleshoot Fastly]({{ page.baseurl}}cloud/trouble/trouble_fastly.html)
