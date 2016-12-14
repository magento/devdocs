---
layout: default
group: cloud
subgroup: 40_live
title: Overview of staging and production
menu_title: Overview of staging and production
menu_order: 5
menu_node: 
level3_menu_node: level3child
level3_subgroup: stage-prod
version: 2.0
github_link: cloud/live/stage-prod-over.md
---

<style>
td.blank {border: none!important;
background: none!important;
}
</style>

As discussed in more detail in [Architecture]({{ page.baseurl }}cloud/discover-arch.html), Magento Enterprise Cloud Edition has three types of systems:

*	*Integration*, used by a developer to write custom code and test it.

    You can have up to eight environments in your integration system.

*	*Staging*, which runs on hardware similar to production.

	Staging is where you test your finalized code before deploying to your live production system.

*	*Production*, which runs your public-facing store on triple-redundant hardware.

The differences between integration, staging, and production follow:

<table>
    <tbody>
        
    <tr>
        <td class="blank"></td>
        <th>Integration</th>
        <th>Staging</th>
        <th>Production</th>
    </tr>
    <tr><td>Managed by a UI</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
    </tr>
    <tr><td>Uses <code>.yaml</code> files for configuration</td>
    <td>Yes</td>
    <td>Requires support ticket for deployment settings</td>
    <td>Requires support ticket for deployment settings</td>
    </tr>
    <tr><td>Multiple environments</td>
    <td>Yes</td>
    <td>No (master only)</td>
    <td>No (master only)</td>
    </tr>
    <tr><td>Runs on dedicated hardware</td>
    <td>No</td>
    <td>Yes</td>
    <td>Yes</td>
    </tr>
    
</tbody>
</table>

The following diagram illustrates how the three systems work on a high level:

![How test, staging, and production works]({{ site.baseurl }}common/images/cloud_stage-prod-concept1.png){:width="600px"}

In your integration system, you can create up to eight environments however you want. For example, you could have a feature branch and iterate development over several sprints. At the end of a sprint, you could merge (that is, push) code the the parent branch (labeled Feature1 in the preceding diagram). To start another sprint you could sync (that is, pull) code from Feature1 to your next sprint.

After you fix bugs, you merge Feature1 with master, making that code potentially ready for deployment to staging and then to production.

<div class="bs-callout bs-callout-info" id="info">
  <p>Although the integration system can have many branches, staging and production have only one, <code>master</code>.</p>
</div>

*Assisted deployment* means that your staging and production systems require you to perform the tasks discussed in the following paragraphs.

### Support ticket
Create a [support ticket]({{ page.baseurl }}cloud/get-help.html) to notify us you're ready to move to either staging or production.

{% include cloud/hooks.md %}

### Git and SSH URLs
Get your Git and SSH URLs from the OneDrive onboarding document you received when you signed up for Magento Enterprise Cloud Edition.

After you know these URLs, you can access them without further intervention. You can deploy updated code to staging or production using Git commands. 

<div class="bs-callout bs-callout-warning">
    <p>You should always deploy code and data from integration to staging, and then from staging to production. If you need to fix issues, fix them in development and push them to staging before production.</p>
</div>

#### Next step
[Prepare to migrate data]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html)