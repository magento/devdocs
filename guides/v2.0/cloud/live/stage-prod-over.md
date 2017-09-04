---
layout: default
group:
subgroup:
title: Overview of staging and production
menu_title: Overview of staging and production
menu_order:
menu_node:
version: 2.0
github_link: cloud/live/stage-prod-over.md
---

As discussed in more detail in [Cloud Architecture]({{ page.baseurl }}cloud/reference/discover-arch.html), Magento Enterprise Cloud Edition has three types of environments:

*	*Integration*: provides eight active environments, including your project's `master` branch, for your developers to code, build, and test. You merge all of your final code to the `master` and deploy to Staging for extensive production-like testing.

*	*Staging*: provides an environment for full testing prior to going live. Staging includes all production services to provide a near-production environment for testing your finalized code for merchant and customer interactions. It shares a dedicated container with Production.

*	*Production*: hosts your public-facing live store on triple-redundant hardware for immediate fail-over to and continued access by your customers and merchant admins. Production shares a dedicated container with Staging.

This table lists the differences between the environments.

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

In your Integration environment, you can create up to eight active environments for each active Git branch of your code. For example, you could have a feature branch and iterate development over several sprints. At the end of a sprint, you could merge (that is, push) code to the parent branch (labeled Feature1 in the preceding diagram). To start another sprint you could sync (that is, pull) code from Feature1 to your next sprint.

After you fix bugs, you merge Feature1 with `master`, making that code potentially ready for deployment to Staging and then to Production.

<div class="bs-callout bs-callout-info" id="info">
  <p>Although the Integration environment can have many branches, Staging and Production have only one branch: the deployed Git <code>master</code>.</p>
</div>

## Assisted deployment
The Staging and Production environments require *assisted deployment*. These environments are not accessible through the Enterprise Cloud Edition Web Interface to add SSH keys or to modify environment variables, routes, or settings. You must enter a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to deploy code, add SSH keys, and go live.

With SSH keys added, you can access the environments to complete CLI commands without requiring tickets.

### Enter a ticket to deploy
{% include cloud/hooks.md %}

### Git and SSH URLs
Locate your Git and SSH URLs from the OneDrive onboarding document you received when you signed up for Magento Enterprise Cloud Edition.

After you know these URLs, you can access those environments without further intervention.
* Use the URLs to access the store as a customer.
* Use the URL /admin to access the Admin panel.
* Use SSH access and Git CLI commands to deploy updated code to Staging or Production. Magento Cloud CLI commands are not available in Staging and Production.

## Read-only environments
You should always deploy code and data from the `master` branch of your Integration environment to Staging, then to Production. If you need to fix issues, fix them in local development, push to Git, and complete the full deployment.

#### Related topics
*	[Prepare to deploy]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html)
*	[Deploy code and data]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)
*	[Test deployment]({{ page.baseurl }}cloud/live/stage-prod-test.html)
