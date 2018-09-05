---
group: cloud
title: Magento Commerce Cloud guide
functional_areas:
  - Cloud
---

{{site.data.var.ece}} is a managed, automated hosting platform for the {{site.data.var.ee}} software. {{site.data.var.ece}} comes with a variety of additional features that sets it apart from the on-premise {{site.data.var.ee}} and {{site.data.var.ce}} platforms:

![Cloud Benefits]

{{site.data.var.ece}} provides a pre-provisioned infrastructure that includes PHP, MySQL, Redis, RabbitMQ, and Elasticsearch technologies; a git-based workflow with automatic build and deploy for efficient **Rapid development** and **Continuous deployment** every time you push code changes in a PaaS environment; highly **Customizable** environment configuration files and [tools](#ece-tools-package); and AWS hosting that offers a **Scalable** and **Secure** environment for online sales and retailing.

## Technology stack

Amazon Web Services (AWS) powers the underlying Infrastructure as a Service for {{site.data.var.ece}}. Each {{site.data.var.ece}} plan provides a PaaS Integration environment for developing, testing, and integrating services, see [{{site.data.var.ece}} architecture]({{page.baseurl}}/cloud/architecture/cloud-architecture.html) for a comparison and additional features. Performance tools provide granular visibility into the site performance and PHP profiling. [Fastly]({{page.baseurl}}/cloud/cdn/cloud-fastly.html) caches site assets and, as customers access the site and stores, loads the cached assets fast. The [Fastly Image Optimization]({{page.baseurl}}/cloud/cdn/fastly-image-optimization.html) offloads image processing and resizing load, freeing servers to process orders and conversions efficiently.
<!-- Also, the Fastly Web Application Firewall (WAF) prevents malicious traffic and other OWASP Top 10 threats from affecting the site. -->

![Cloud Stack]

## {{site.data.var.ct}} package
The new `{{site.data.var.ct}}` package is a scalable deployment tool that provides an easier path for upgrading your Cloud instance. In February of 2018, we deprecated the `magento-cloud-configuration` and `ece-patches` packages to provide a single package across all versions. We encourage all customers to [upgrade to use `{{site.data.var.ct}}`]({{page.baseurl}}/cloud/project/ece-tools-upgrade-project.html) as soon as possible to benefit from the package features, such as commands designed to help manage your code and automatically build and deploy your projects.

<!-- Link definitions -->

[Cloud Benefits]: {{site.baseurl}}/common/images/cloud/CloudBenefits.png
{: width="930px" height="305px"}

[Cloud Stack]: {{site.baseurl}}/common/images/cloud/CloudStack.svg
{: width="804px" height="721px"}
