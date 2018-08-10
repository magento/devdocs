---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce (Cloud) 2.1.3 and 2.0.11 Release Notes
menu_title: Magento Commerce (Cloud) 2.1.3 and 2.0.11 Release Notes
menu_order: 385
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
version: 2.0
redirect_from:
  - /guides/v2.2/cloud/release-notes/CloudReleaseNotes2.1.3.html
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the Magento Enterprise Cloud Edition for versions 2.1.3 and 2.0.11.

## Changes in this release

* Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

## Required update to `.magento.app.yaml`

Before you [upgrade]({{ page.baseurl }}/cloud/howtos/upgrade-magento.html) to version 2.1.3 or 2.0.11, you must add a rule to the `web` section of your `.magento.app.yaml` file. You must make the change in your local system, push it to your [integration environment]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int), then, after upgrading, push the changes to [staging]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-stage) and [production]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-prod).

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Update `.magento.app.yaml`

{% collapsible To update .magento.app.yaml: %}

1.	Open `<Magento root dir>/.magento.app.yaml` in a text editor.
2.	Locate the `web:` section, and the `/static` location in it.
3.	Add the following to the `rules:` clause:

		^/static/version\d+/(?<resource>.*)$:
             passthru: "/static/$resource"

    The `/static` location should look like this after the change:

    ~~~
    "/static":
        root: "pub/static"
        allow: true
        scripts: false
        passthru: "/front-static.php"
        rules:
            ^/static/version\d+/(?<resource>.*)$:
                passthru: "/static/$resource"
    ~~~
4.	Save your changes to `.magento.app.yaml` and exit the text editor.
5.	You may now [upgrade]({{ page.baseurl }}/cloud/howtos/upgrade-magento.html) to version 2.1.3 or 2.0.11.


{% endcollapsible %}

## Update your Elasticsearch configuration {#cloud-rn-213-es}

This section discusses how to update your [integration]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int) system to replace Solr with Elasticsearch. Currently, all Magento Enterprise Cloud Edition upgrades to 2.1.3 must perform these tasks.

Elasticsearch is supported by Magento Cloud Enterprise Edition 2.1.x only.

If you installed Magento Enterprise Cloud Edition 2.1.3 for the first time, you don't need to do this because Elasticsearch is already the default search engine.

To use Elasticsearch on a [staging]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-stage) or [production]({{ page.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-prod) system, open a [Support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) and request Elasticsearch.

<div class="bs-callout bs-callout-warning" markdown="1">
After installing Elasticsearch, you must do a full index of your fulltext index.
This process can take a while if the index is large.

The search functionality will be unavailable until the process completes.
</div>

To use Elasticsearch, you must perform all the tasks discussed in this section.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Step 1: Update .magento.app.yaml

{% collapsible To update .magento.app.yaml: %}

1.  Open `.magento.app.yaml` in a text editor.

    It's located in your Magento Enterprise Cloud Edition project root directory.
2.  In the `relationships:` section, delete `solr: "solr:solr"` if it exists.
3.  Add `elasticsearch: "elasticsearch:elasticsearch"`

    A sample follows:

        relationships:
           database: "mysql:mysql"
           elasticsearch: "elasticsearch:elasticsearch"
           redis: "redis:redis"
4.  Save your changes to `.magento.app.yaml` and exit the text editor.

{% endcollapsible %}

### Step 2: Update .magento/services.yaml

{% collapsible To update .magento/services.yaml: %}

1.  Open `.magento/services.yaml` in a text editor.
2.  Remove the entire `solr:` section.
3.  Add a new `elasticsearch:` section with the following contents:

        elasticsearch:
           type: elasticsearch:<version>
           disk: 1024
4.  Save your changes to `.magento/services.yaml` and exit the text editor.

{% endcollapsible %}

### Step 3: Push the changes and redeploy the environment

{% collapsible To push the changes: %}

1.  Add, commit, and push the changes:

        git add -A && git commit -m "Add Elasticsearch"
        git push origin <branch name>
2.  Wait for the project to deploy.

{% endcollapsible %}

### Step 4: Get Elasticsearch connection information {#cloud-es-config-mg}

This section discusses how to get connection information for Elasticsearch so you can configure the Magento application to use it as your search engine.

{% collapsible To get Elasticsearch connection information: %}

1.  Open an SSH tunnel to your integration environment.

        magento-cloud environment:ssh
2.  Enter the following command to get Elasticsearch connection details:

        echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp

    A sample follows:

         "elasticsearch" : [
           {
              "host" : "elasticsearch.internal",
              "ip" : "250.0.97.96",
              "scheme" : "http",
              "port" : "9200"
           }
        ],
3.  Write down the connection information.
4.  Enter `exit` to close the SSH tunnel.
4.  Log in to the Magento Admin as an administrator.

    To view the Magento Admin connection details, enter the following commands:

        magento-cloud environment:url
        magento-cloud variable:list

    These two commands provide you with the environment's base URL and Admin login information, respectively.

    An example follows:

        magento-cloud environment:url
        Enter a number to choose a URL
           [0] https://mybranch-vyaprfq-dyrupdn6bw82h.us.magentosite.cloud/
           [1] http://mybranch-vyaprfq-dyrupdn6bw82h.us.magentosite.cloud/
           > 1
        http://mybranch-vyaprfq-dyrupdn6bw82h.us.magentosite.cloud/

        magento-cloud variable:list
        +----------------+---------------+-----------+------+
        | ID             | Value         | Inherited | JSON |
        +----------------+---------------+-----------+------+
        | ADMIN_PASSWORD | admin_A456    | Yes       | No   |
        | ADMIN_URL      | magento_A8v10 | Yes       | No   |
        | ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
        +----------------+---------------+-----------+------+

5.  Continue with the next section.

{% endcollapsible %}

### Step 5: Configure the Magento application to use Elasticsearch

Configure Magento using the instructions in the [Magento configuration for Elasticsearch]({{ site.baseurl }}/guides/v2.1/config-guide/elasticsearch/configure-magento.html) guide.

## Fixed issue

Note the following issue in this release:

* The `magento setup:install` command (used for deployment) succeeds in either a staging or production system if a Magento database already exists.

### {{site.data.var.ee}} Release Notes
* [{{site.data.var.ee}} 2.0.11 Release Notes]({{ site.gdeurl }}release-notes/ReleaseNotes2.0.11EE.html)
* [{{site.data.var.ee}} 2.1.3 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.3EE.html)
