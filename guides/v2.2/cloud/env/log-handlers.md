---
group: cloud-guide
title: Logging handlers
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

You can configure logging handlers to send messages to a remote logging server. A logging handler pushes build and deploy logs to other systems, similarly to the way you push logs to Slack and email. You can enable a _syslog_ handler, which is ideal for logging messages related to hardware, or a Graylog Extended Log Format (GELF) handler, which is ideal for logging messages from software applications.

The following example configures both of these handlers by adding the configuration to the `.magento.env.yaml` file. For the minimum logging level (`min_level`) values, see [Log levels](#log-levels).

```yaml
log:
  syslog:
    ident: "<syslog-ident>"
    facility: 8 # http://php.net/manual/en/network.constants.php
    min_level: "info"
    logopts: <syslog-logopts>

  syslog_udp:
    host: "<syslog-host>"
    port: <syslog-port>
    facility: 8  # http://php.net/manual/en/network.constants.php
    ident: "<syslog-ident>"
    min_level: "info"

  gelf:
    min_level: "info"
    use_default_formatter: true
    additional: # Some additional information for each log message
      project: "<some-project-id>"
      app_id: "<some-app-id>"
    transport:
      http:
        host: "<http-host>"
        port: <http-port>
        path: "<http-path>"
        connection_timeout: 60
      tcp:
        host: "<tcp-host>"
        port: <tcp-port>
        connection_timeout: 60
      udp:
        host: "<udp-host>"
        port: <udp-port>
        chunk_size: 1024
```

### Log levels

Log levels determine the level of detail in notification messages. The following log level categories include every log level below it. For example, a `debug` level includes logging from every level, whereas an `alert` level only shows alerts and emergencies.

-  **debug**—detailed debug information
-  **info**—interesting events, such as a user login or SQL log
-  **notice**—normal, but significant events
-  **warning**—exceptional occurrences that are not errors, such as the use of a deprecated API or poor use of an API
-  **error**—run-time errors that do not require immediate action
-  **critical**—critical conditions, such as an unavailable application component or an unexpected exception
-  **alert**—immediate action required—such as a website is down or the database is unavailable—that triggers an SMS alert
-  **emergency**—system is unusable
