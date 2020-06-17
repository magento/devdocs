---
group: cloud-guide
title: PrivateLink service
functional_areas:
  - Cloud
  - Setup
---

Magento supports PrivateLink connections for Cloud customers to establish secure, private communication between {{site.data.var.ece}} environments and external systems. Both the Magento application and external systems must be accessible through private VPC endpoints hosted within the same Cloud region (AWS or Azure).

## Features and support

The PrivateLink service offering for {{site.data.var.ece}} projects includes the following features and support:

-  A secure connection between a customer Virtual Private Cloud (VPC) and the Magento VPC within the same Cloud region.
-  Support for unidirectional or bidirectional communication between Magento and Customer VPCs.
-  Service enablement–
   -  Open communication on the necessary ports in the Magento Cloud environment
   -  Establish the initial connection between the customer and Magento VPCs
   -  Troubleshoot connection issues during enablement

## Limitations

-  Support for PrivateLink is available on Pro plan Production and Staging environments only. It is not available on local or integration environments, or on Starter plan projects.
-  You cannot establish SSH connections using PrivateLink. Due to infrastructure requirements, Magento cannot open Port 22 for communication between VPCs.
-  Magento support does not cover troubleshooting AWS PrivateLink issues beyond initial enablement. Customers have the option to purchase additional support from Magento Services.
-  Customers are responsible for costs associated with managing their own VPC.

## PrivateLink connection types

The following network diagram shows the PrivateLink connection types available to establish secure communication between the Magento store and external systems hosted outside of the Cloud environment.<br><br>

![PrivateLink network diagram]

For Pro plan Production and Staging environments, you must specify the PrivateLink connection type required for your environments:

-  **Unidirectional PrivateLink**–Choose this configuration to retrieve data securely from a Magento Commerce store.
-  **Bidirectional PrivateLink**–Choose this configuration to establish secure connections to and from systems outside of the Magento Cloud environment. The bidirectional option requires two connections:
   -  A connection between your VPC and the Magento VPC
   -  A connection between the Magento VPC and your VPC

{:.bs-callout-tip}
Work with your network administrator and Magento CTA to determine the right PrivateLink connection type for your project. Also, see your Cloud platform PrivateLink documentation [AWS PrivateLink][], [Azure PrivateLink].

## Request PrivateLink enablement

{:.bs-callout-warning}
Enabling PrivateLink can take up to 5 business days. Providing incomplete, or inaccurate information when you request enablement can delay the process.

### Prerequisites

-  {:.fix}A Cloud account (AWS or Azure) in the same region as the {{site.data.var.ece}} instance
-  {:.fix}A VPC in the customer environment that hosts the services to connect via PrivateLink
-  {:.fix}For bidirectional PrivateLink connections, your must configure the PrivateLink service in your VPC environment before requesting Magento PrivateLink enablement. See [Customer set up for bidirectional PrivateLink communication](#customer-set-up-for-bidirectional-privatelink-connections).
-  {:.fix}Gather the following data required for PrivateLink enablement:

   -  **Cloud account number** (AWS or Azure)–Must be in the same region as the Magento Cloud instance
   -  **Cloud region**–Provide the Cloud region where the account is hosted for verification purposes
   -  **Services and communication ports**–Magento must open ports to enable service communication between VPCs, for example _Webserver, HTTP port 80_, _SFTP port 2222_
   -  **Magento Cloud Project ID**
   -  **Connection Type**–Specify unidirectional or bidirectional for connection type
   -  **Service Name**–Service name for the VPC service endpoint that Magento must connect to. Required only to enable bidirectional PrivateLink connections.

### Enablement workflow

The following workflow outlines the PrivateLink enablement process for {{site.data.var.ece}}.

1. **Customer** contacts their Magento Customer Technical Advisor (CTA) to request PrivateLink enablement, providing the customer data required for PrivateLink enablement.

1. After verifying the customer data, **the Magento CTA** submits a Magento Support ticket request for PrivateLink enablement.

   We use the Support ticket to coordinate communication between you, your CTA, the Magento infrastructure team, and the Magento Support team during the enablement process.

1. **Magento infrastructure team** enables customer account access to the Magento VPC.

   -  Update the Magento VPC configuration to accept requests initiated from the customer Cloud platform account.

   -  Update the Support ticket to provide Magento VPC connection details to the customer.

1. **Customer** submits a PrivateLink connection request to the Magento VPC using the Magento VPC connection details.

1. **Magento infrastructure team** approves the connection request.

1. After connection request approval, **the customer** verifies the connection between your VPC and the Magento VPC.

1. Additional steps to enable bidirectional connections:

   -  **Magento infrastructure team** uses the endpoint service name supplied by the customer to submit a connection request from the Magento VPC to the customer Network Load Balancer (NLB).

   -  **Customer** approves the request to complete the setup. See the Cloud platform documentation for instructions:

      -  For AWS, see [Accepting and rejecting interface endpoint connection requests][].
      -  For Azure, see [Manage connection requests][].

   -  **Customer** verifies the connection to and from the Magento VPC.

## Customer set up for bidirectional PrivateLink connections

The customer VPC must have a the following resources available to support bidirectional PrivateLink connections:

-  A Network Load Balancer
-  An endpoint service configuration that enables access to a service from your VPC environment
-  An [interface endpoint][] (AWS) or [private endpoint][] (Azure) that allows Magento to connect to endpoint services hosted in your VPC

If these resources are not available in the customer VPC, you must sign into your Cloud platform account to add the configuration.

-  Amazon VPC console– ```https://console.aws.amazon.com/vpc/```
-  Azure portal– ```https://portal.azure.com```

See your Cloud platform documentation for PrivateLink set up instructions:

-  **AWS PrivateLink  documentation**
   -  [Create a Network Load Balancer][]
   -  [Create an endpoint service configuration][]
   -  [Create an interface endpoint][]

-  **Azure PrivateLink documentation**
   -  [Create a Load Balancer][]
   -  [Azure PrivateLink workflow][]

<!--Link definitions-->

[PrivateLink network diagram]: {{site.baseurl}}/common/images/cloud/cloud-privatelink-architecture-diagram.png
{:width="800px"}

[AWS PrivateLink Overview]: https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html#endpoint-service-overview
[AWS PrivateLink documentation]: https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html#what-is-privatelink
[AWS PrivateLink]: https://aws.amazon.com/privatelink/
[Accepting and rejecting interface endpoint connection requests]: https://docs.aws.amazon.com/vpc/latest/userguide/accept-reject-endpoint-requests.html
[Azure PrivateLink]: https://docs.microsoft.com/en-us/azure/private-link/
[Create a Load Balancer]: https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-public-portal
[Create a Network Load Balancer]: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-network-load-balancer.html
[Create an endpoint service configuration]: https://docs.aws.amazon.com/vpc/latest/userguide/create-endpoint-service.html
[Create an interface endpoint]: https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html#create-interface-endpoint
[Manage connection requests]: https://docs.microsoft.com/en-us/azure/private-link/private-link-service-overview#manage-your-connection-requests
[interface endpoint]: https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html
[private endpoint]: https://docs.microsoft.com/en-us/azure/private-link/private-endpoint-overview
[Azure PrivateLink workflow]: https://docs.microsoft.com/en-us/azure/private-link/private-link-service-overview#workflow
