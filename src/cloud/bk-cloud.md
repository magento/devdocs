---
group: cloud-guide
title: Cloud guide for Commerce
functional_areas:
  - Cloud
---

{{site.data.var.ece}} is a managed, automated hosting platform for the {{site.data.var.ee}} software. {{site.data.var.ece}} comes with additional features that set it apart from the on-premises {{site.data.var.ee}} and {{site.data.var.ce}} platforms:

*  A pre-provisioned infrastructure that includes PHP, MySQL (MariaDB), Redis, RabbitMQ, and supported search engine technologies
*  Git-based workflow with automatic build and deploy for efficient **Rapid development** and **Continuous deployment** every time you push code changes in a Platform as a Service (PaaS) environment
*  Highly **Customizable** environment configuration files and command-line interface (CLI) manage and deploy tools
*  Amazon Web Services (AWS) hosting that offers a **Scalable** and **Secure** environment for online sales and retailing

![Cloud Benefits]
## Technology stack

Think of the {{site.data.var.ece}} as five functional layers, as shown here:

![Cloud Stack]

1. [**Cloud Infrastructure**](https://devdocs.magento.com/cloud/architecture/pro-architecture.html): Choose either Amazon Web Services (AWS) or Microsoft Azure as your Infrastructure as a Service (IaaS) foundation for your {{site.data.var.ece}} Pro projects.
1. [**Platform as a Service**](https://devdocs.magento.com/cloud/architecture/cloud-architecture.html): Each Adobe Commerce on cloud infrastructure plan provides a Platform as a Service (PaaS) Integration environment for developing, testing, and integrating services.
1. [**Adobe Commerce**](https://devdocs.magento.com/cloud/requirements/cloud-requirements.html#cloud-arch-software):  Adobe Commerce on cloud infrastructure provides a pre-provisioned infrastructure that includes PHP, MySQL (MariaDB), Redis, RabbitMQ, and supported search engine technologies.
1. [**Performance Tools**](https://devdocs.magento.com/cloud/project/new-relic.html): New Relic performance tools enable you to debug, monitor and manage your applications and infrastructure by collecting, analyzing and displaying data from your Adobe Commerce on cloud infrastructure projects.
1. [**Content Delivery Network (CDN), Web Application Firewall (WAF) and Image Optimization (IO)**](https://devdocs.magento.com/cloud/cdn/cloud-fastly.html):

   *  [Fastly CDN](https://devdocs.magento.com/cloud/cdn/cloud-fastly.html#ddos-protection)- Provides secure CDN services with built in protection from Distributed Denial of Service (DDoS) attacks like Ping of Death, Smurf attacks, and other Internet Control Message Protocol (ICMP) based flood attacks.
   *  [Web Application Firewall (WAF)](https://devdocs.magento.com/cloud/cdn/fastly-waf-service.html)- WAF services ensure PCI compliance for Adobe Commerce storefronts in  Production environments and WAF policies that protect your Adobe Commerce web applications from a variety of injection attacks, malicious input, cross-site scripting, data exfiltration, HTTP protocol violations and other [OWASP Top Ten security threats.](https://www.owasp.org/index.php/Top_Ten)
   *  [Image optimization (IO)](https://devdocs.magento.com/cloud/cdn/fastly-image-optimization.html)- Provides real-time image manipulation and optimization to speed up image delivery and simplify maintenance of image source sets for responsive web applications. Fastly IO offloads image processing and resizing load, freeing servers to process orders and conversions efficiently.

## Tools to deploy and manage

Commerce Cloud Suite includes a set of packages designed to deploy and manage Commerce installations on the Cloud platform.

*  [`{{site.data.var.ct}}` package](https://devdocs.magento.com/cloud/reference/ece-tools-reference.html)- A scalable deployment tool that simplifies the Cloud upgrade process and includes commands to create a backup of the database, apply custom patches, and verify environment configuration.

*  [Magento Cloud components](https://devdocs.magento.com/cloud/release-notes/mcc-release-notes.html)- Extends Commerce core functionality for sites deployed on the Cloud platform.

*  [Magento Cloud Docker package](https://devdocs.magento.com/cloud/release-notes/mcd-release-notes.html)- Docker images and container orchestration to deploy Commerce to a local Cloud environment.

*  [Magento Cloud Patches package](https://devdocs.magento.com/cloud/release-notes/mcp-release-notes.html)- A set of patches which improve the integration of all Commerce versions with Cloud environments.

*  [`magento-cloud` CLI](https://devdocs.magento.com/cloud/reference/cli-ref-topic.html)- Provides developers and system administrators the ability to manage Cloud projects and environments, perform routines, and run automation tasks.

<!-- Link definitions -->

[Cloud Benefits]: {{site.baseurl}}/common/images/cloud/CloudBenefits.svg
{:width="930px"}

[Cloud Stack]: {{site.baseurl}}/common/images/cloud/CloudStack.svg
{:width="930px"}

[ece]: reference/ece-tools-reference.html
