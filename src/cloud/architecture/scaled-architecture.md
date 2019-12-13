---
group: cloud-guide
title: Scaled architecture
functional_areas:
  - Cloud
---

The Cloud infrastructure scales according to your resource needs to achieve greater efficiency. The {{site.data.var.ece}} monitors your applications and can adjust capacity to maintain steady, predictable performance. Converting to this architecture helps to mitigate problems, such as latency, large spikes in traffic, or running out of storage.

## Split architecture

Historically, the Pro architecture consisted of 3 nodes, each containing a full tech stack. Now, the scalable infrastructure provides a tiered solution with a minimum of 6 nodes: 3 nodes for the web server and 3 nodes for the core database and other services. This split architecture provides the capability to scale tiers independently to achieve an optimal balance of performance. The core tier scales vertically (increases in size), and the web tier scales horizontally (increases instance count) and vertically (changes instance type and size).

Vertical scaling must use the same instance type and size for each node:

-  `C5 instances` for each WEB node
-  `M5 or M5n instances` for each Core node

### Core tier scaling

There are 3 nodes (core nodes) for the database and included services, such as ElasticSearch, MariaDB, and Redis. When the core tier approaches capacity, the only way to scale is to increase the server size, such as boosting the CPU power and memory. Capacity is limited to the size of the node that is available. Because the database cluster is designed for high availability, you cannot scale horizontally in a reliable way with the technologies used.

![Core tier scaling]

Consider an example that the core node instance type is _m5.2xlarge_ with 32Gb RAM. A service, such as the database, uses a considerable amount of memory (30Gb). Scaling to the next available instance size _m5.4xlarge_ provides 64Gb RAM, double the memory, and accommodates the growing needs of the database.

Further optimizing performance includes routing traffic. You can route traffic based on the node type. For example, you can serve web traffic on the db node or you can isolate the db node from the web traffic.

### Web tier scaling

There are 3 nodes for php-fpm and manages web traffic. In addition to vertical scaling by increasing power and memory, the web tier can scale horizontally by adding extra web servers to an existing cluster when constricted at the PHP level.

![Web tier scaling]

This complements the vertical scaling provided by the database tier.

Consider an example that the web node instance type is _C5.2xlarge with 8 CPU and 16Gb RAM_. The number of requests to the site increased greatly. You can add an additional C5.2xlarge node to handle the increase in php-fpm processes or you can change each instance type to _C5.4xlarge with 16 CPU and 32Gb RAM_. Adding an additional node is less expensive than changing all web node instances to a larger type.

## Project structure

Minimally, Pro projects with the Scaling architecture have 6 nodes available.

-  3 web nodes c5.2xlarge (8 CPU, 16 Gb RAM)
-  3 core nodes m5.2xlarge (8 CPU, 32 Gb RAM)

Each project is unique, however, and requires performance monitoring to properly analyze resource management. Each account includes the New Relic Infrastructure service, which automatically connects with the application data and performance analytics to provide dynamic server monitoring. See [New Relic services][nri].

### SSH access

Certain files and logs, such as the `/app/<project-id>/var/log` directory, are not shared between nodes. Each node has a unique SSH access. You can not use the Magento Cloud CLI to log in to the core or web nodes, but you can find the [SSH Access list] in the Project Web UI. The SSH Access 1 to 3 are Core nodes and 4 to 6 are web nodes.

```bash
ssh <node>.<project-ID>-<environment>-<user-ID>@ssh.<region>.magento.com
```

Example response as you log into a core node includes the _unified_ role:

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

Example response as you log into a core node includes the _web_ role:

```terminal
 __  __                   _          ___ _             _
|  \/  |__ _ __ _ ___ _ _| |_ ___   / __| |___ _  _ __| |
| |\/| / _` / _` / -_) ' \  _/ _ \ | (__| / _ \ || / _` |
|_|  |_\__,_\__, \___|_||_\__\___/  \___|_\___/\_,_\__,_|
            |___/

 Welcome to Magento Cloud.

 This is server unique-server-id, role project-id:web.

project-id@server-id:~$
```
{:.no-copy}

### Log locations

The log locations vary slightly depending on the node. For example, database logs are not written to web nodes.

Log file            | Core node                        | Web node
------------------- | -------------------------------- | --------
**MySQL error log** | `/var/log/mysql/mysql-error.log` | Not available

[Core tier scaling]: {{ site.baseurl }}/common/images/cloud/scaling-core.png
[Web tier scaling]: {{ site.baseurl }}/common/images/cloud/scaling-web.png
[SSH access list]: {{page.baseurl}}/cloud/env/environments-ssh.html#web-interface
[nri]: {{page.baseurl}}/cloud/project/new-relic.html
{: width="400px"}