---
layout: default
group: contributor
subgroup: templates
title: Workflow template
menu_title: Workflow template
menu_order: 2
version: 2.0
github_link: contributor-guide/templates/workflow_template.md
---


<div class="flow-row">
<div class="flow-column push">

<div class="flow-intro" markdown="1">
Continue From:<br />
**Local development**
</div>

<div class="flow-arrow">
Needs nav label
</div>

</div>
</div>


<div class="flow-row">
<div class="flow-column">

<div class="flow-block" markdown="1">

#### [1A. Onboarding](http://devdocs.magento.com/1)
1. Install CLI
2. Enagle SSH
3. Auth Keys??
4. Install Magento locally and in cloud
</div>

</div>
<div class="flow-column">

<div class="flow-block" markdown="1">
#### [1B. Cloud Environment](http://devdocs.magento.com/2)
- Environment = Git branch
- Up to 8 branches for feature development
</div>




</div>
</div>


<div class="flow-row">
<div class="flow-column">

<div class="flow-nav turn-right">
  < Needs nav label >
</div>


</div>
<div class="flow-column">

<div class="flow-nav turn-left">
  Push all changes to master branch
</div>

</div>
</div>


<div class="flow-row centered">
<div class="flow-column">

<div class="flow-arrow">
</div>

<div class="flow-block" markdown="1">
#### [2. Integration System](http://devdocs.magento.com/3)
1. Install / upgrade / configure Magento 2
2. Install / upgrade / test extensions
3. Test customizations
4. Back up
Everyday development and testing
</div>

<div class="flow-arrow">
  Migrate
</div>



<div class="flow-block" markdown="1">
#### [3. Staging System](http://devdocs.magento.com/4)
1. Test Fastly
2. Test deployment
3. Test DB
4. Test payment gateways
Final testing before go-live
</div>

<div class="flow-arrow">
  Migrate
</div>


<div class="flow-block" markdown="1">
#### [4. Production System](http://devdocs.magento.com/5)
Your live store
</div>


</div>
</div>


## Cloud Workflow
<div class="flow-row centered">
<div class="flow-column">


<div class="flow-block" markdown="1">
### 1. Setup
{% collapsible Show More %}
**Goal:  Prepare for development**

In local environment:

1.  Install CLI.
2.  Enable SSH.
3.  Add auth keys.
4.  Install Git, PHP, MySQL, Composer.
5.  Create Magento Enterprise Cloud Edition  project from template.
{% endcollapsible %}
</div>

<div class="flow-arrow">
  Check out project, start development
</div>


<div class="flow-block flow-block-layers" markdown="1">
### 2. Local developers’ environments
{% collapsible Show More %}
**Goal:  Develop code, extensions and test**

1. Themes and extensions.
  - Install, update (including third-party extensions).
  - Develop custom code.
2. Initial testing.<br />
  **Recommended:** Test in both production  and developer modes.
{% endcollapsible %}
</div>

<div class="flow-arrow flow-arrow-back">
</div>

<div class="flow-arrow">
Deploy changes to integration <br />
- OR -<br />
 Pull code to local environment
</div>


<div class="flow-block" markdown="1">
### 3. Integration   testing (cloud)
{% collapsible Show More %}
**Goal: Configure (M2); Functional Test**

1. Test the following items:
  - Custom themes, extensions.
  - Payment gateways.
2. Back up database and file system (optional).
3. Test upgrades of Magento 2.
{% endcollapsible %}
</div>

<div class="flow-arrow">
  Deploy all changes to staging
</div>


<div class="flow-block" markdown="1">
### 4. Staging testing (cloud)
{% collapsible Show More %}
**Goal: Final Test; Performance Test**

1.  Test the following items, using real product  and catalog data:
  - Fastly.
  - Deployment.
  - Payment gateways.
2. Complete final testing, User Acceptance  Testing (UAT) before production.<br />
  **Recommended for performance testing:** Blackfire.io profiling; New Relic Application  Performance Monitoring
{% endcollapsible %}
</div>


<div class="flow-arrow">
  Deploy all changes to production
</div>

<div class="flow-block" markdown="1">
### 5. Production (cloud) — your live store
{% collapsible Show More %}
**Goal: Regular maintenance:**

- Use New Relic Application Performance  Monitoring.
- Execute deployments, rollbacks.
- Review error logs.

System backup:  Automatically, every 6 hours
{% endcollapsible %}
</div>


</div>
</div>
