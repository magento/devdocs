---
layout: default
group: cloud
subgroup: 010_welcome
title: Subscriptions and plans
menu_title: Subscriptions and plans
menu_order: 5
menu_node:
version: 2.0
github_link: cloud/basic-information/cloud-plans.md
---


{{site.data.var.ece}} includes the following plans with different infrastructures for smaller to larger stores and supported products. For a breakdown of the plans and to start your [free 30-day trial](https://magento.com/trial){:target="_blank"}, see our [Plan Comparison](https://magento.com/trial/plans-comparison){:target="_blank"}.

<table>
    <tbody>

    <tr>
        <td class="blank"></td>
        <th>Starter</th>
        <th>Pro</th>
    </tr>
    <tr><td>Core features</td>
    <td><li>All Magento 2 core features</li>
    <li>PayPal Onboarding Tool</li></td>
    <td><li>All Magento 2 core features</li>
    <li>PayPal Onboarding Tool</li>
    <li><a href="https://magento.com/business-needs/b2b-commerce">B2B module</a></li>
    <li><a href="https://magento.com/products/business-intelligence/essentials">BI Essentials</a></li>
    </td>
    </tr>
    <tr><td>Infrastructure and deployment</td>
    <td>
    <li>Platform-as-a-service (PaaS) based Production, Staging, and development environments (4 total active environments) optimized for Magento</li>
    <li>Continuous cloud integration tools with unlimited users</li>
    <li>Fastly Content Delivery Network (CDN) and DDoS protection with generous bandwidth allowances</li>
    <li><a href="{{page.baseurl}}cloud/project/new-relic.html">New Relic APM</a> (Performance Monitoring) on 3 branches: <code>master</code> and 2 of your choice</li>
    <li><a href="{{page.baseurl}}cloud/project/project-integrate-blackfire.html">Blackfire.io</a> Enterprise (Performance Testing)</li>
</td>
    <td>
    <li>Platform-as-a-service (PaaS) based Integration development environments (8 total active environments) optimized for Magento</li>
    <li>Infrastructure-as-a-Service (IaaS) dedicated for Production and Staging</li>
    <li>Continuous cloud integration tools with unlimited users</li>
    <li>Fastly Content Delivery Network (CDN) and DDoS protection with generous bandwidth allowances</li>
    <li><a href="{{page.baseurl}}cloud/project/new-relic.html">New Relic APM</a> (Performance Monitoring) on 3 branches: Integration <code>master</code>, Staging, and Production</li>
    <li><a href="{{page.baseurl}}cloud/project/project-integrate-blackfire.html">Blackfire.io</a> Enterprise (Performance Testing)</li>
    </td>
    </tr>
    <tr><td>24x7 email support</td>
    <td>24x7 monitoring and email support for the core application and the cloud infrastructure</td>
    <td>24x7 monitoring and email support for the core application and the cloud infrastructure</td>
    </tr>
    <tr><td>Business Intelligence</td>
    <td class="blank"></td>
    <td>Magento Business Intelligence Essentials giving you full visibility into your data with 75 reports and 5 dashboards available out of the box</td>
    </tr>
    <tr><td>High availability infrastructure</td>
    <td class="blank"></td>
    <td>High availability architecture with a three-server setup in the underlying Infrastructure-as-a-Service (IaaS) to provide enterprise grade reliability and availability</td>
    </tr>
    <tr><td>Dedicated hardware</td>
    <td class="blank"></td>
    <td>Isolated and dedicated hardware setup in the underlying Infrastructure-as-a-Service (IaaS) to provide even higher levels of reliability and availability</td>
    </tr>
    <tr><td>Dedicated Launch Manager</td>
    <td class="blank"></td>
    <td>Dedicated technical account management for the initial launch period, starting with your subscription until your initial site launch</td>
    </tr>
</tbody>
</table>

## Trial accounts {#trials}
We provide a [free 30-day trial](https://magento.com/trial){:target="_blank"} for both Start and Pro to give you a full preview of {{site.data.var.ece}} running on Cloud infrastructures. When signing up for a trial, we automatically provision your project with the latest version of {{site.data.var.ece}}. We also provide an [Onboarding Portal]({{page.baseurl}}cloud/onboarding/onboarding-portal.html) for reviewing your project and getting started.

See the [Trial signup](https://magento.com/trial){:target="_blank"} for full details and subscription prices.

![Onboarding Portal getting started]({{ site.baseurl }}common/images/cloud_portal-trial.png)

### What is auto provisioning? {#autoprovisioning}
When you create an account with a Trial, your {{site.data.var.ece}} project is created automatically. As part of the process, we generate a code branch and environment with the latest Magento code for you.

We complete the following steps for you to make the entire process easier to get started:

* For Starter: We create a project with the latest version of {{site.data.var.ece}} in a `master` Git branch. We build, deploy, and install the code, generating your store and admin link access. This environment and branch of code is your Production environment.
* For Pro: We create a project with the latest version of {{site.data.var.ece}} in a `master` Git branch of your Integration environment. We build, deploy, and install the code, generating your store and admin link access. Staging and Production are provisioned after your first payment.
* We add the `ADMIN_EMAIL` variable using the email address of the Project Owner.
* We send an email inviting the Project Owner to the Onboarding Portal.
* We send an email to the Project Owner to change the Magento admin password for the deployed store.

When done, you can access the links from those emails, add a Technical Admin, and get started developing your stores and sites.

## Additional options {#extras}
To further customize your {{site.data.var.ece}} project and account, you can purchase additional options.

### Domain-Validated SSL (HTTP) certificate {#ssl}
If you don't want to use the shared SSL certificate, you can purchase this option as part of your subscription. The cost of the service includes adding and deploying the Domain-Validated SSL certificate to all Fastly servers and services.

This service is an additional cost for your contract.

### AWS Managed VPN Connection Service access {#vpn}
If you need access to your own Virtual Private Network (VPN) to access your {{site.data.var.ee}} environment, you can purchase this option to gain access to the AWS Managed VPN Connection Service. We will provide information required for configurations including the required IPs and modes.

This service is an additional cost for your contract. VPN configurations require technical resources and requirements for configuring. For information on the AWS service, see their [AWS Managed VPN Connections](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html){:target="_blank"} and  [VPN Connections](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpn-connections.html){:target="_blank"}.

## Get started! {#getstarted}
If you create your account with the 30-day trial, we set you up quickly to get started. When you sign-up for the trial, we auto-provision your project with the latest version of {{site.data.var.ee}} as s base template. If you didn't start with a trial, we have information to help set up your project.

For new or existing projects without a Trial, we include instructions to help you prepare your project and start developing.

See the following topics to learn more about onboarding and next steps:

* [Onboarding tasks]({{page.baseurl}}cloud/onboarding/onboarding-tasks.html) walks through the initial steps you should consider and complete when new to your project.
* [Onboarding Portal management]({{page.baseurl}}cloud/onboarding/onboarding-portal.html) provides a central portal for getting started with new Trial Starter and Pro accounts.
* [Prepare your project environments]({{page.baseurl}}cloud/before/before-project-owner.html) lists all of the steps to complete from creating a project and providing access to your technical staff and solution experts access, create your project. If you started with a Trial, we have set up most of this for you.
* [Additional documentation]({{page.baseurl}}cloud/bk-cloud.html#magento2) to learn more about Magento 2
