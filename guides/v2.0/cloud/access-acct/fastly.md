---
layout: default
group: cloud
subgroup: 04_setup
title: Set up Fasly
menu_title: Set up Fasly
menu_order: 12
menu_node: 
version: 2.0
github_link: cloud/access-acct/fastly.md
---


## Set up Fastly
[Fastly](https://www.fastly.com/why-fastly){:target="_blank"} is required for Magento Enterprise Cloud Edition. It works with Varnish to provide fast caching capabilities and a Content Delivery Network (CDN) for static assets.

### Get started
Fastly recommends you do your development in its own branch because fine-tuning Fastly can be a lengthy process, depending on your needs and eCommerce shop size.

In the procedure that follows, make sure you *branch* a new environment; don't use an existing one unless you know this is what you want to `.

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Set up Fastly in your new environment
Set up Fastly using [Fastly's README.md](https://github.com/fastly/fastly-magento2/blob/master/README.md){:target="_blank"}.

<div class="bs-callout bs-callout-info" id="info">
  <p>Fastly's instructions assume you're using <em>any</em> Magento software installation. Some instructions don't apply to Magento Enterprise Cloud Edition, such as switching to the <em>Magento file system owner</em>. You can safely ignore those instructions.</p>
  <p>Before you enter the command-line commands discussed in their README, you must <a href="{{ page.baseurl }}cloud/env/environments-start.html#env-start-ssh">SSH to your environment</a>.</p>
</div>

When you're done with development, [merge your environment]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) with the `master` environment so it can be pushed to production.

#### Next steps
*   [Manage your environments]({{ page.baseurl }}cloud/env/environments.html)
*   [Use the Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html)
*   Configure your project:

    *   [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)
    *   [`routes.yaml`]({{ page.baseurl}}cloud/project/project-conf-files_routes.html)
    *   [`services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)

