---
group: cloud-guide
title: Message queues
functional_areas:
  - Cloud
  - Configuration
  - Services
---

If you use cron jobs—or some other external process manager—to manage message queues instead of [RabbitMQ]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html), you may need to use an environment variable to restart message queue consumers after every deployment. (Requires {{site.data.var.ece}} version 2.2.0 or later.)

## Symptom

Message queue consumers fail to restart after you deploy code to an environment.

## Solution

Use the [`CRON_CONSUMERS_RUNNER` environment variable](https://devdocs.magento.com/guides/v2.2/cloud/env/variables-deploy.html#cron_consumers_runner) to ensure that consumers are retrieving messages from the message queue.
