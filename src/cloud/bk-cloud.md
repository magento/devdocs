---
group: cloud-guide
title: Magento Commerce Cloud guide
functional_areas:
  - Cloud
---

{{site.data.var.ece}} is a managed, automated hosting platform for the {{site.data.var.ee}} software. {{site.data.var.ece}} comes with a variety of additional features that sets it apart from the on-premises {{site.data.var.ee}} and {{site.data.var.ce}} platforms:

![Cloud Benefits]

{{site.data.var.ece}} provides a pre-provisioned infrastructure that includes PHP, MySQL, Redis, RabbitMQ, and Elasticsearch technologies; a git-based workflow with automatic build and deploy for efficient **Rapid development** and **Continuous deployment** every time you push code changes in a Platform as a Service (PaaS) environment; highly **Customizable** environment configuration files and [tools](#ece-tools-package); and AWS hosting that offers a **Scalable** and **Secure** environment for online sales and retailing.

## Technology stack

Think of the {{site.data.var.ece}} as five functional layers, as shown here:

![Cloud Stack]

Amazon Web Services (AWS) powers the underlying Infrastructure as a Service (IaaS) for {{site.data.var.ece}}. For {{site.data.var.ece}} Pro projects, you can choose either AWS or Microsoft Azure for IaaS support.

Each {{site.data.var.ece}} plan provides a PaaS Integration environment for developing, testing, and integrating services, see [{{site.data.var.ece}} architecture]({{ site.baseurl }}/cloud/architecture/cloud-architecture.html) for a comparison and additional features. New Relic provides granular visibility into the site performance. [Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) caches site assets and, as customers access the site and stores, loads the cached assets fast. The [Fastly Image Optimization]({{ site.baseurl }}/cloud/cdn/fastly-image-optimization.html) (IO) offloads image processing and resizing load, freeing servers to process orders and conversions efficiently.
<!-- Also, the Fastly Web Application Firewall (WAF) prevents malicious traffic and other OWASP Top 10 threats from affecting the site. -->

## {{site.data.var.ct}} package

The [`{{site.data.var.ct}}` package][ece] is a scalable deployment tool that simplifies the Cloud upgrade process. In 2018, we deprecated the `magento-cloud-configuration` and `ece-patches` packages in favor of providing a single package. We encourage all customers to [upgrade to use `{{site.data.var.ct}}`]({{ site.baseurl }}/cloud/project/ece-tools-upgrade-project.html) as soon as possible to benefit from the package features, such as commands to create a backup of the database, apply custom patches, and verify environment configuration.

<!-- Link definitions -->

[Cloud Benefits]: {{site.baseurl}}/common/images/cloud/CloudBenefits.svg
{:width="930px"}

[Cloud Stack]: {{site.baseurl}}/common/images/cloud/CloudStack.svg
{:width="804px"}

[ece]: reference/ece-tools-reference.html
