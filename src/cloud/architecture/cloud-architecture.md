---
group: cloud-guide
title: Magento Commerce Cloud architecture
functional_areas:
  - Cloud
redirect_from:
  - /cloud/basic-information/cloud-plans.html
---

{{site.data.var.ece}} has a Starter and a Pro plan. Each plan has a unique architecture to drive your {{site.data.var.ee}} development and deployment process. Both the Starter plan and the Pro plan architecture deploy databases, web server, and caching servers across multiple environments for end-to-end testing while supporting continuous integration.

For comparison, each plan includes the following infrastructure features and supported products.

<table>
  <tbody>
    <tr>
      <td class="blank"></td>
      <th>Starter</th>
      <th>Pro</th>
    </tr>
    <tr>
      <td>Core features</td>
      <td>
        <ul>
          <li>All Magento 2 core features</li>
          <li>PayPal Onboarding Tool</li>
          <li><a href="https://magento.com/products/business-intelligence">Business Intelligence</a></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>All Magento 2 core features</li>
          <li>PayPal Onboarding Tool</li>
          <li><a href="https://magento.com/products/business-intelligence">Business Intelligence</a></li>
          <li><a href="https://magento.com/business-needs/b2b-commerce">B2B module</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Infrastructure and deployment</td>
      <td>
        <ul>
          <li>Continuous cloud integration tools with unlimited users</li>
          <li>Fastly Content Delivery Network (CDN), Image Optimization (IO), and added security with generous bandwidth allowances. The Web Application Firewall (WAF) service is available on Production environments only.</li>
          <li>
            <a href="{{ site.baseurl }}/cloud/project/new-relic.html">New Relic</a> APM (Performance Monitoring) on 3 branches: <code>master</code> and 2 of your choice
          </li>
          <li>Platform-as-a-service (PaaS) based Production, Staging, and development environments (4 total active environments) optimized for {{site.data.var.ee}}</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Continuous cloud integration tools with unlimited users</li>
          <li>Fastly Content Delivery Network (CDN), Image Optimization (IO), and added security with generous bandwidth allowances. The Web Application Firewall (WAF) service is available on Production environments only.</li>
          <li>
            <a href="{{ site.baseurl }}/cloud/project/new-relic.html">New Relic</a> Infrastructure on Production + APM (Performance Monitoring) on Staging and Production. The <a href="{{ site.baseurl }}/cloud/project/new-relic.html#monitor-performance-with-managed-alerts">Managed alerts for {{ site.data.var.ee }} policy</a> implements monitoring best practices to proactively notify you about application and infrastructure issues affecting site performance.
          </li>
          <li>Platform-as-a-service (PaaS) based Integration development environments (2 total active environments) optimized for {{site.data.var.ee}}</li>
          <li>Infrastructure-as-a-Service (IaaS)—dedicated virtual infrastructure for Production environments and for Staging environments</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>High availability infrastructure</td>
      <td class="blank"></td>
      <td>High availability architecture with a three-server setup in the underlying Infrastructure-as-a-Service (IaaS) to provide enterprise grade reliability and availability</td>
    </tr>
    <tr>
      <td>Dedicated hardware</td>
      <td class="blank"></td>
      <td>Isolated and dedicated hardware setup in the underlying Infrastructure-as-a-Service (IaaS) to provide even higher levels of reliability and availability</td>
    </tr>
    <tr>
      <td>24x7 email support</td>
      <td>24x7 monitoring and email support for the core application and the cloud infrastructure</td>
      <td>24x7 monitoring and email support for the core application and the cloud infrastructure</td>
    </tr>
    <tr>
      <td>A dedicated Customer Technical Advisor (CTA)</td>
      <td class="blank"></td>
      <td>Dedicated technical account management for the initial launch period, starting with your subscription until your initial site launch</td>
    </tr>
    <tr>
      <td>Add-ons*</td>
      <td>
        <ul>
          <li><a href="https://magento.com/business-needs/b2b-commerce">B2B module</a></li>
        </ul>
      </td>
      <td class="blank"></td>
    </tr>
  </tbody>
</table>
\* _Available for an additional fee_

## Starter projects

The [Starter plan architecture]({{ site.baseurl }}/cloud/architecture/starter-architecture.html) has four environments:

-  **Integration**—The Integration environment provides two testable environments. Each environment includes an active Git branch, database, web server, caching, some services, environment variables, and configurations.
-  **Staging**—As code and extensions pass your tests, you can merge your Integration branch to a Staging environment, which becomes your pre-Production testing environment. It includes the `staging` active branch, database, web server, caching, third-party services, environment variables, configurations, and services, such as Fastly and New Relic.
-  **Production**—When code is ready and tested, all code merges to `master` for deployment to the Production live site. This environment includes your active `master` branch, database, web server, caching, third-party services, environment variables, and configurations.
-  **Inactive**—You can have an unlimited number of inactive branches.

## Pro projects

The [Pro plan architecture]({{ site.baseurl }}/cloud/architecture/pro-architecture.html) has a global master with three environments:

-  **Integration**—The Integration environment provides a testable environment that includes a database, web server, caching, some services, environment variables, and configurations. You can develop, deploy, and test your code before merging to the Staging environment.
   -  _Inactive_—You can have an unlimited number of inactive branches based on the Integration environment, but only one active branch (not including Integration itself).
-  **Staging**—The Staging environment is for pre-Production testing and includes a database, web server, caching, third-party services, environment variables, configurations, and services, such as Fastly.
-  **Production**—The Production environment includes a three-node, high-availability architecture for your data, services, caching, and store. This is your live, public store environment with environment variables, configurations, and third-party services.
