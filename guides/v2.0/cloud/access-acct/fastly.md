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

In the procedure that follows, make sure you *branch* a new environment; don't use an existing one unless you know this is what you want to do.

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Set up Fastly in your new environment

{% collapsible To install Fastly: %}

1.	In your local environment root directory, enter the following commands in the order shown:

		composer config repositories.fastly-magento2 git "https://<your GitHub username]:[your GitHub password]@github.com/fastly/fastly-magento2.git"
		composer require fastly/magento2

2.	Wait for dependencies to be updated.
3.	Enter the following commands in the order shown:

		php bin/magento module:enable Fastly_Cdn
		php bin/magento setup:upgrade
		php bin/magento cache:clean

8. Once this has completed log in to the Magento Admin panel. Go to Stores > Configuration. Then to System > Advanced. Expand the section 'Full Page Cache'. From the 'Caching Application' select 'Fastly CDN'. You can then add the credentials and choose the caching options.

If any critical issue occurs you can't easily solve, call "bin/magento module:disable Fastly_Cdn"
to disable the FastlyCDN module. If necessary clear Magento's cache again.

{% endcollapsible %}

When you're done with development, [merge your environment]({{ page.baseurl }}cloud/howtos/environment-tutorial-env-merge.html) with the `master` environment so it can be pushed to production.

#### Next steps
*   [Manage your environments]({{ page.baseurl }}cloud/env/environments.html)
*   [Use the Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html)
*   Configure your project:

    *   [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)
    *   [`routes.yaml`]({{ page.baseurl}}cloud/project/project-conf-files_routes.html)
    *   [`services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)

