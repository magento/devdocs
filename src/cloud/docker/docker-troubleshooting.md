---
group: cloud-guide
title: Cloud Docker Troubleshooting
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.mcd-prod}} is a Magento Community Engineering project supported by the Magento developer community. You have several options to get support and learn more about {{site.data.var.mcd-prod}} and Magento local development.

-  **[Magento Community Engineering Slack organization]**–For support, questions, or discussion, chat with us in the **#cloud-docker** and **#cloud** channels. To join, send a request to _engcom@adobe.com_ or [sign yourself up] using Slack.

-  **[{{site.data.var.mcd-package}} GitHub repository]**–Visit the GitHub repository to read discussions about current issues, check current development, and submit issues or pull requests to improve the project.

-  **Magento Cloud Community Engineering demos**–Magento hosts Cloud demo session where you can learn about developing Magento on the Cloud platform, including information about local development with {{site.data.var.mcd-prod}}. For a schedule and recordings of previous demos, see the [Magento Cloud Community Engineering Demo Schedule].

## Fix Elasticsearch map count error

When you launch the Docker environment on some Linux systems, the Elasticsearch service fails to start and the following error displays:

```terminal
ERROR: [1] bootstrap checks failed
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

To fix the error, run the following `sysctl` command to increase the memory map area allocation.

```bash
sysctl -w vm.max_map_count=262144
```

{:.procedure}
To permanently update the system setting for `vm.max_map_count`:

1. Edit the sysctl configuration file (`etc/sysctl.conf`) and set the required value for the `vm.max_map_count` option.

1. Reboot your system.

1. Run the following command to verify the change.

   ```bash
   sysctl vm.max_map_count
   ```

<!--Link definitions-->

[Magento Cloud Community Engineering demo schedule]: https://spark.adobe.com/page/PbxJoujH7oRTc/
[Magento Community Engineering Slack organization]: https://magentocommeng.slack.com/
[sign yourself up]: https://magentocommeng.slack.com/ssb/redirect
