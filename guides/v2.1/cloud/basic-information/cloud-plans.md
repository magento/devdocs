---
group: cloud-guide
title: Subscriptions and plans
---

{{site.data.var.ece}} has a Starter and a Pro plan. For comparison, each plan includes the following infrastructure features and supported products.

<table>
  <tbody>
    <tr>
      <td class="blank" />
      <th>Starter</th>
      <th>Pro</th>
    </tr>
    <tr>
      <td>Core features</td>
      <td>
        <ul>
          <li>All Magento 2 core features</li>
          <li>PayPal Onboarding Tool</li>
          <li><a href="https://magento.com/blog/magento-news/introducing-magento-business-intelligence-essentials">Business Intelligence Essentials</a></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>All Magento 2 core features</li>
          <li>PayPal Onboarding Tool</li>
          <li><a href="https://magento.com/blog/magento-news/introducing-magento-business-intelligence-essentials">Business Intelligence Essentials</a></li>
          <li><a href="https://magento.com/business-needs/b2b-commerce">B2B module</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Infrastructure and deployment</td>
      <td>
        <ul>
          <li>Platform-as-a-service (PaaS) based Production, Staging, and development environments (4 total active environments) optimized for Magento</li>
          <li>Continuous cloud integration tools with unlimited users</li>
          <li>Fastly Content Delivery Network (CDN) and DDoS protection with generous bandwidth allowances</li>
          <li>
            <a href="{{ page.baseurl }}/cloud/project/new-relic.html">New Relic APM</a> (Performance Monitoring) on 3 branches: <code>master</code> and 2 of your choice
          </li>
          <li>
            <a href="{{ page.baseurl }}/cloud/project/project-integrate-blackfire.html">Blackfire.io</a> Enterprise (Performance Testing)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Platform-as-a-service (PaaS) based Integration development environments (8 total active environments) optimized for Magento</li>
          <li>Infrastructure-as-a-Service (IaaS) dedicated for Production and Staging</li>
          <li>Continuous cloud integration tools with unlimited users</li>
          <li>Fastly Content Delivery Network (CDN) and DDoS protection with generous bandwidth allowances</li>
          <li>
            <a href="{{ page.baseurl }}/cloud/project/new-relic.html">New Relic APM</a> (Performance Monitoring) on 3 branches: Integration <code>master</code>, Staging, and Production
          </li>
          <li>
            <a href="{{ page.baseurl }}/cloud/project/project-integrate-blackfire.html">Blackfire.io</a> Enterprise (Performance Testing)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>24x7 email support</td>
      <td>24x7 monitoring and email support for the core application and the cloud infrastructure</td>
      <td>24x7 monitoring and email support for the core application and the cloud infrastructure</td>
    </tr>
    <tr>
      <td>High availability infrastructure</td>
      <td class="blank" />
      <td>High availability architecture with a three-server setup in the underlying Infrastructure-as-a-Service (IaaS) to provide enterprise grade reliability and availability</td>
    </tr>
    <tr>
      <td>Dedicated hardware</td>
      <td class="blank" />
      <td>Isolated and dedicated hardware setup in the underlying Infrastructure-as-a-Service (IaaS) to provide even higher levels of reliability and availability</td>
    </tr>
    <tr>
      <td>Dedicated Launch Manager</td>
      <td class="blank" />
      <td>Dedicated technical account management for the initial launch period, starting with your subscription until your initial site launch</td>
    </tr>
  </tbody>
</table>

### Domain-Validated SSL (HTTP) certificate

The Domain-Validated SSL (HTTP) certificate option is an alternative to using the shared SSL certificate. The cost of the service includes adding and deploying the Domain-Validated SSL certificate to all Fastly servers and services.

This service is an additional cost for your contract.
