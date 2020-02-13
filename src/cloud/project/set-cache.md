---
group: cloud-guide
title: Set cache for static files
functional_areas:
  - Cloud
  - Setup
  - Services
---

The cache time-to-live (TTL) for your media and static files is set in the `.magento.app.yaml` configuration file using the `expires` key.

{:.bs-callout-info}
Before making changes to your Production environment, we highly recommend testing in your Staging environment first. You must submit a support ticket to update the configuration on these environments.

1. Specify the TTL time (in seconds) in the `web` section of the `.magento.app.yaml` file. You can add the `expires` key under `locations` or under `"/media"` and `"/static"`.

    To prevent the cache from expiring, use the `expires: -1` key-value pair. See the following example:

    ```yaml
    # The configuration of app when it is exposed to the web.
    web:
      locations:
        "/media":
          ...
          expires: -1

        "/static":
          ...
          expires: -1
      ```

1. Add, commit, and push your code changes.

   ```bash
   git add -A && git commit -m "Set cache TTL for static files" && git push origin <branch-name>
   ```
