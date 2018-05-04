---
layout: default
group: cloud
title: Message queues
version: 2.1
github_link: cloud/trouble/message-queues.md
functional_areas:
  - Cloud
  - Configuration
  - Services
---

If you use cron jobs—or some other external process manager—to manage message queues instead of [RabbitMQ]({{page.baseurl}}/cloud/project/project-conf-files_services-rabbit.html), you may need to use an environment variable to restart message queue consumers after every deployment.

## Symptom
Message queue consumers fail to restart after you deploy code to an environment.

## Solution
Use the `CRON_CONSUMERS_RUNNER` environment variable to ensure that consumers are retrieving messages from the message queue.

{% include cloud/cron-consumers-runner.md %}
