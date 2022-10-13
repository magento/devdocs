---
group: cloud-guide
title: PrivateLink service
functional_areas:
  - Cloud
  - Setup
---

{{site.data.var.ece}} supports integration with the [AWS PrivateLink][] or [Azure Private Link][] service to allow Cloud customers to establish secure, private communication between {{site.data.var.ece}} environments and services and applications hosted on external systems. Both the {{site.data.var.ee}} application and external systems must be accessible through private VPC endpoints configured within the same Cloud region (AWS or Azure).

## Features and support

The PrivateLink service integration for {{site.data.var.ece}} projects includes the following features and support:

-  A secure connection between a customer Virtual Private Cloud (VPC) and the Adobe VPC within the same Cloud region.
-  Support for unidirectional or bidirectional communication between endpoint services available in Adobe and Customer VPCs.
-  Service enablement–
   -  Open required ports in the {{site.data.var.ece}} environment
   -  Establish the initial connection between the customer and Adobe VPCs
   -  Troubleshoot connection issues during enablement

## Limitations

-  Support for PrivateLink is available on Pro Production and Staging environments only. It is not available on local or integration environments, or on Starter projects.
-  You cannot establish SSH connections using PrivateLink. For SSH, see [Enable SSH keys][].
-  {{site.data.var.ee}} support does not cover troubleshooting AWS PrivateLink issues beyond initial enablement.
-  Customers are responsible for costs associated with managing their own VPC.
-  You cannot use the HTTPS protocol (port 443) to connect to {{ site.data.var.ece }} over PrivateLink.
-  PrivateDNS is not available.

## PrivateLink connection types

There are two PrivateLink connection types available—shown in the following network diagram—to establish secure communication between your store and external systems hosted outside of the Cloud environment.

![PrivateLink network diagram]

Choose one of the PrivateLink connection types best suited for your {{site.data.var.ece}} environments:

-  **Unidirectional PrivateLink**–Choose this configuration to retrieve data securely from a {{ site.data.var.ece }} store.
-  **Bidirectional PrivateLink**–Choose this configuration to establish secure connections to and from systems outside of the {{site.data.var.ece}} environment. The bidirectional option requires two connections:
   -  A connection between the customer VPC and the Adobe VPC
   -  A connection between the Adobe VPC and the customer VPC

{:.bs-callout-tip}
 Work with your network administrator or Cloud platform provider for help with selecting the PrivateLink connection type, or help with VPC setup and administration. See Cloud platform PrivateLink documentation: [AWS PrivateLink][] or [Azure Private Link][].

## Request PrivateLink enablement

{:.bs-callout-warning}
Enabling PrivateLink can take up to _five_ business days. Providing incomplete or inaccurate information can delay the process.

### Prerequisites

-  {:.fix}A Cloud account (AWS or Azure) in the same region as the {{site.data.var.ece}} instance.
-  {:.fix}A VPC in the customer environment that hosts the services to connect via PrivateLink. See the AWS or Azure documentation for help with VPC setup or contact your network administrator.
-  {:.fix}For bidirectional PrivateLink connections, you must create the endpoint service configuration for your application or service, and create an endpoint in your VPC environment before requesting PrivateLink enablement. See [Set up for bidirectional PrivateLink connections](#set-up-for-bidirectional-privatelink-connections).

Gather the following data required for PrivateLink enablement:

-  {:.fix}**Customer Cloud account number** (AWS or Azure)—Must be in the same region as the {{site.data.var.ece}} instance
-  {:.fix}**Cloud region**—Provide the Cloud region where the account is hosted for verification purposes
-  {:.fix}**Services and communication ports**—Adobe must open ports to enable service communication between VPCs, for example _Webserver, HTTP port 80_, _SFTP port 2222_
-  {:.fix}**Project ID**—Provide the {{site.data.var.ece}} Pro project ID. You can get the Project ID and other project information using the following [Magento Cloud CLI][] command: `magento-cloud project:info`
-  {:.fix}**Connection type**—Specify unidirectional or bidirectional for connection type
-  {:.fix}**Endpoint service**—For bidirectional PrivateLink connections, provide the DNS URL for the VPC endpoint service that Adobe must connect to, for example: `com.amazonaws.vpce.<cloud-region>.vpce-svc-<service-id>`
-  {:.fix}**Endpoint service access granted**—To connect to external service, allow the endpoint service access to the following AWS account principal: `arn:aws:iam::402592597372:root`

   {:.bs-callout-warning}
   If access to the endpoint service is not provided, then the bidirectional PrivateLink connection to the service in your VPC is **not** added, which delays the setup.

Additional prerequisites specific to Azure Private Link enablement:

-  {:.fix}Provide the cluster ID; using SSH, log in to the remote and use the command: `cat /etc/platform_cluster`

-  {:.fix}For an external service to connect to your {{site.data.var.ee}} Pro cluster, you need:

   -  A list of ports on your Pro cluster to expose to the new external Private Endpoint

   -  A list of Azure subscription IDs for the Private Endpoint connections

-  {:.fix}To connect your {{site.data.var.ee}} Pro cluster to an external service, you need:

   -  A list of resource IDs for the target services. External Private Link service IDs look similar to the following:

   ```text
   /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{svcNameID}
   ```

### Enablement workflow

The following workflow outlines the enablement process for PrivateLink integration with {{site.data.var.ece}}.

1. **Customer** submits a support ticket requesting PrivateLink enablement with the subject line `PrivateLink support for <company>`. Include the [data required for enablement](#prerequisites) in the ticket. Adobe uses the Support ticket to coordinate communication during the enablement process.

1. **Adobe** enables customer account access to the endpoint service in the Adobe VPC.

   -  Update the Adobe endpoint service configuration to accept requests initiated from the customer AWS or Azure account.

   -  Update the Support ticket to provide the service name for the Adobe VPC endpoint to connect to, for example `com.amazonaws.vpce.<cloud-region>.vpce-svc-<service-id>`.

1. **Customer** adds the Adobe endpoint service to their Cloud account (AWS or Azure), which triggers a connection request to Adobe. See the Cloud platform documentation for instructions:

   -  For AWS, see [Accepting and rejecting interface endpoint connection requests][].
   -  For Azure, see [Manage connection requests][].

1. **Adobe** approves the connection request.

1. After connection request approval, **the customer** [verifies the connection](#test-vpc-endpoint-service-connection) between their VPC and the Adobe VPC.

1. Additional steps to enable bidirectional connections:

   -  **Adobe** supplies the Adobe account principal (root user for AWS or Azure account) and requests access to the customer VPC endpoint service.

   -  **Customer** enables Adobe access to the endpoint service in the customer VPC. This assumes that the Adobe account principal has access to `arn:aws:iam::402592597372:root`, as previously described in the **Endpoint service access granted** prerequisite.

      -  Update the customer endpoint service configuration to accept requests initiated from the Adobe account. See the Cloud platform documentation for instructions:

         -  For AWS, see [Adding and removing permissions for your endpoint service][].
         -  For Azure, see [Manage a Private Endpoint connection][]

      -  Provide Adobe with the endpoint service name for the customer VPC.

   -  **Adobe** adds the customer endpoint service to Adobe platform account (AWS or Azure), which triggers a connection request to customer VPC.

   -  **Customer** approves the connection request from Adobe to complete the setup.

   -  **Customer** [verifies the connection](#test-vpc-endpoint-service-connection) from the Adobe VPC.

## Test VPC endpoint service connection

You can use the Telnet application to test the connection to the VPC endpoint service.

{:.bs-callout-tip}
For help with installing and using Telnet, see [Telnet How-To][] in the _Telnet_ documentation.

{:.procedure}
To test the connection to the VPC endpoint service:

1. Log in to {{site.data.var.ece}}.

   ```bash
   magento-cloud login
   ```

1. From the project root directory, **checkout** the Staging or Production environment configured to access the PrivateLink endpoint service.

   ```bash
   magento-cloud environment:checkout <environment-id>
   ```

1. Run the following CURL command:

   ```bash
   curl -v telnet://<endpoint-service-dns-url>:<port>/
   ```

   Example:

   ```terminal
   $ curl -v telnet://vpce-007ffnb9qkcnjgult-yfhmywqh.vpce-svc-083cqvm2ta3rxqat5v.us-east-1.vpce.amazonaws.com:80 -vvv
   ```

   If the connection succeeds, the following output displays:

   ```terminal
   * Rebuilt URL to: telnet://vpce-007ffnb9qkcnjgult-yfhmywqh.vpce-svc-083cqvm2ta3rxqat5v.us-east-1.vpce.amazonaws.com:80
   * Connected to vpce-0088d56482571241d-yfhmywqh.vpce-svc-083cqvm2ta3rxqat5v.us-east-1.vpce. amazonaws.com (191.210.82.246) port 80 (#0)
   ```
   {:.no-copy}

   If the connection fails, the following output displays:

   ```terminal
   Failed to connect to vpce-007ffnb9qkcnjgult-yfhmywqh.vpce-svc-083cqvm2ta3rxqat5v.ap-southeast-1.vpce.amazonaws.com port 80: Connection timed out
   * Closing connection 0
   ```
   {:.no-copy}

1. Verify the service is listening on VM.

   ```bash
   netstat -na | grep <port>
   ```

1. Check the packages flow.

   ```bash
   tcpdump -i <ethernet-interface> -tt -nn port <destination-port> and host <source-host>
   ```

   Check the following internal settings to ensure that the configuration is valid:

   -  Endpoint and endpoint services settings
   -  NLB settings
   -  The target groups in NLB and verify they are healthy
   -  The netcat/curl endpoint URL from each VM (listed above)

   See the following articles for help with troubleshooting connection issues:

   -  [AWS: Troubleshooting endpoint service connections][]
   -  [Amazon: Troubleshooting Azure Private Link connectivity problems][]

   If you cannot resolve the errors, update the {{site.data.var.ee}} Support ticket to request help establishing the connection.

## Change PrivateLink configuration

Submit a {{site.data.var.ee}} Support ticket to change an existing PrivateLink configuration. For example, you can request changes like the following:

-  Remove the PrivateLink connection from the {{site.data.var.ece}} Pro Production or Staging environment.
-  Change the customer Cloud platform account number for accessing the Adobe endpoint service.
-  Add or remove PrivateLink connections from the Adobe VPC to other endpoint services available in the customer VPC environment.

## Set up for bidirectional PrivateLink connections

The customer VPC must have the following resources available to support bidirectional PrivateLink connections:

-  A Network Load Balancer (NLB)
-  An endpoint service configuration that enables access to an application or service from the customer VPC
-  An [interface endpoint][] (AWS) or [private endpoint][] (Azure) that allows Adobe to connect to endpoint services hosted in your VPC

If these resources are not available in the customer VPC, you must sign into your Cloud platform account to add the configuration.

-  Amazon VPC console– `https://console.aws.amazon.com/vpc/`
-  Azure portal– `https://portal.azure.com`

See your Cloud platform documentation for PrivateLink set up instructions:

-  **AWS PrivateLink documentation**
   -  [Create a Network Load Balancer][]
   -  [Create an endpoint service configuration][]
   -  [Create an interface endpoint][]
   -  [Interface endpoint lifecycle][]

-  **Azure PrivateLink documentation**
   -  [Create a Load Balancer][]
   -  [Azure Private Link workflow][]

<!--Link definitions-->

[PrivateLink network diagram]: {{site.baseurl}}/common/images/cloud/cloud-privatelink-architecture-diagram.png
{:width="800px"}

[Accepting and rejecting interface endpoint connection requests]: https://docs.aws.amazon.com/vpc/latest/userguide/accept-reject-endpoint-requests.html
[Adding and removing permissions for your endpoint service]:https://docs.aws.amazon.com/vpc/latest/userguide/add-endpoint-service-permissions.html
[Amazon: Troubleshooting Azure Private Link connectivity problems]: https://docs.microsoft.com/en-us/azure/private-link/troubleshoot-private-link-connectivity
[AWS PrivateLink documentation]: https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html#what-is-privatelink
[AWS PrivateLink Overview]: https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html#endpoint-service-overview
[AWS PrivateLink]: https://aws.amazon.com/privatelink/
[AWS: Troubleshooting endpoint service connections]: https://aws.amazon.com/premiumsupport/knowledge-center/connect-endpoint-service-vpc/
[Azure Private Link workflow]: https://docs.microsoft.com/en-us/azure/private-link/private-link-service-overview#workflow
[Azure Private Link]: https://docs.microsoft.com/en-us/azure/private-link/
[Create a Load Balancer]: https://docs.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard-public-portal
[Create a Network Load Balancer]: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-network-load-balancer.html
[Create an endpoint service configuration]: https://docs.aws.amazon.com/vpc/latest/userguide/create-endpoint-service.html
[Create an interface endpoint]: https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html#create-interface-endpoint
[Enable SSH keys]: {{site.baseurl}}/cloud/before/before-workspace-ssh.html
[interface endpoint lifecycle]: https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html#vpce-interface-lifecycle
[interface endpoint]: https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html
[Magento Cloud CLI]: {{site.baseurl}}/cloud/reference/cli-ref-topic.html
[Manage a Private Endpoint connection]: https://docs.microsoft.com/en-us/azure/private-link/manage-private-endpoint
[Manage connection requests]: https://docs.microsoft.com/en-us/azure/private-link/private-link-service-overview#manage-your-connection-requests
[private endpoint]: https://docs.microsoft.com/en-us/azure/private-link/private-endpoint-overview
[Telnet How-To]: https://www.telnet.org/htm/howto.htm
