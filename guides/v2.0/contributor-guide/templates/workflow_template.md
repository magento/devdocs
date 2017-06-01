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




## Cloud Workflow
<div class="flow-row centered">
<div class="flow-column">

<div class="flow-block" markdown="1">

### 1. Setup

**Goal:  Prepare for development**

In local environment:

1. Install CLI.
2. Enable SSH.
3. Add auth keys.
4. Install Git, PHP, MySQL, Composer.
5. Create Magento Enterprise Cloud Edition project from template.

</div>

<div class="flow-arrow">
  Check out project, start development
</div>


<div class="flow-block flow-block-layers" markdown="1">
### 2. Local developers’ environments

**Goal:  Develop code, extensions and test**

1. Themes and extensions.
  - Install, update (including third-party extensions).
  - Develop custom code.
2. Initial testing.<br />
  **Recommended:** Test in both production  and developer modes.

</div>

<div class="flow-arrow flow-arrow-back"></div>

<div class="flow-arrow">
Deploy<sup><a href="#deploy">1</a></sup> changes to integration <br />
- OR -<br />
 Pull code to local environment
</div>


<div class="flow-block" markdown="1">
### 3. Integration<sup><a href="#integration">2</a></sup> testing (cloud)

**Goal: Configure (M2); Functional Test**

1. Test the following items:
  - Custom themes, extensions.
  - Payment gateways.
2. Back up database and file system (optional).
3. Test upgrades of Magento 2.

</div>

<div class="flow-arrow">
Deploy<sup><a href="#deploy">1</a></sup> all changes to staging
</div>


<div class="flow-block" markdown="1">
### 4. Staging testing (cloud)

**Goal: Final Test; Performance Test**

1.  Test the following items, using real product  and catalog data:
  - Fastly.
  - Deployment.
  - Payment gateways.
2. Complete final testing, User Acceptance  Testing (UAT) before production.<br />
  **Recommended for performance testing:** Blackfire.io profiling; New Relic Application  Performance Monitoring

</div>


<div class="flow-arrow">
Deploy<sup><a href="#deploy">1</a></sup> all changes to production
</div>

<div class="flow-block" markdown="1">
### 5. Production (cloud) — your live store

**Goal: Regular maintenance:**

- Use New Relic Application Performance  Monitoring.
- Execute deployments, rollbacks.
- Review error logs.

System backup:  Automatically, every 6 hours

</div>


</div>
</div>

<hr />

### Developer footnotes

1. Install / Update themes and extensions
... need content
2. Deploy checklist
— Move code (?)
— Verify DB changes
— Verify Config changes
— Feature branch info ???
... include any contextual notes for deployment in each environment.
3. Integration testing
Explain benefit of integration testing, including:
— It’s a best practice when multiple developers are on a project.
— It can be a sandbox to test extensions, apart from a full build in staging.
4. Test custom themes / extensions
For developers making their own extensions or using 3rd-party extensions, sometimes extensions will cause errors in production.
To prevent errors, in your local environment test your site in Production Mode.
5. Test upgrades to M2
... need content.
6 .Performance testing
... need content.
