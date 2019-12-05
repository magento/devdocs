---
group: cloud-guide
title: Scaled architecture
functional_areas:
  - Cloud
---

The Cloud infrastructure scales according to your resource needs to achieve greater efficiency. The {{site.data.var.ece}} monitors your applications and can adjust capacity to maintain steady, predictable performance. Converting to this architecture helps to mitigate problems, such as latency, large spikes in traffic, or running out of storage.

## Split architecture

Historically, the Pro architecture consisted of 3 nodes, each containing a full tech stack. Now, the scalable infrastructure provides a tiered solution with a minimum of 6 nodes: 3 nodes for the web server and 3 nodes for the core database and other services. This split architecture provides the capability to scale tiers independently to achieve an optimal balance of performance. The core tier scales vertically (increases in size), and the web tier scales horizontally (increases instance count) and vertically (changes instance type and size).

### Core tier scaling

There are 3 nodes (core nodes) for the database and included services, such as ElasticSearch and Redis. When the core tier approaches capacity, the only way to scale is to increase the server size, such as boosting the CPU power and memory. Capacity is limited to the size of the node that is available. Because the database cluster is designed for high availability, you cannot scale horizontally in a reliable way with the technologies used.

![Core tier scaling]

Further optimizing performance includes routing traffic. You can route traffic based on the node type. For example, you can serve web traffic on the db node or you can isolate the db node from the web traffic.

### Web tier scaling

There are 3 nodes for the web servers. In addition to vertical scaling by increasing power and memory, the web tier can scale horizontally by adding extra web servers to an existing cluster when constricted at the PHP level.

![Web tier scaling]

This complements the vertical scaling provided by the database tier. Consider the following when scaling the web tier:

You must use the same instance type and size for each node.

-  all `C5 instances` for WEB nodes
-  all `M5 or M5n instances` for Core nodes

## Project structure

Certain files and logs, such as the `/app/<project_id>/var/log` directory, are not shared between nodes. Each node has a unique SSH access. You can not use the Magento Cloud CLI to log in to the core or web nodes, but you can find the SSH access list in the Project Web UI:

![SSH access list]

{:.procedure}
To access a node using SSH:

```bash
ssh <node>.<project-ID>-<environment>-<user-ID>@ssh.<region>.magento.com
```

Example response from a core node:

```terminal
 __  __                   _          ___ _             _ 
|  \/  |__ _ __ _ ___ _ _| |_ ___   / __| |___ _  _ __| |
| |\/| / _` / _` / -_) ' \  _/ _ \ | (__| / _ \ || / _` |
|_|  |_\__,_\__, \___|_||_\__\___/  \___|_\___/\_,_\__,_|
            |___/                                        

 Welcome to Magento Cloud.

 This is server unique-server-id, role project-id:unified.

project-id@server-id:~$ 
```
{:.no-copy}

[Core tier scaling]: {{ site.baseurl }}/common/images/cloud/scaling-core.png
[Web tier scaling]: {{ site.baseurl }}/common/images/cloud/scaling-web.png
[SSH access list]: {{ site.baseurl }}/common/images/cloud/scaling-sshaccess.png
{: width="400px"}