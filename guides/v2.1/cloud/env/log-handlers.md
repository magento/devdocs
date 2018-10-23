---
group: cloud-guide
title: Logging handlers
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

You can configure logging handlers to send messages to a remote logging server. Logging handler pushes build and deploy logs to other systems, similarly to the way you can push logs to Slack and email. Simply enable a _syslog_ handler, which is ideal for logging messages related to hardware, or a Graylog Extended Log Format (GELF) handler, which is ideal for logging messages from software applications.

The following example configures both of these handlers by adding the configuration to the `.magento.env.yaml` file. For the minimum logging level (`min_level`), see [Log levels](#log-levels).

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

Log levels determine the level of detail your notification messages contain. You can choose from the following options:

-   **debug**—Detailed debug information.
-   **info**—Interesting events. For example, a user logs in, SQL logs, etc.
-   **notice**—Normal but significant events.
-   **warning**—Exceptional occurrences that are not errors. For example, use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.
-   **error**—Runtime errors that don't require immediate action but should be logged and monitored.
-   **critical**—Critical conditions. For example, an unavailable application component, unexpected exceptions.
-   **alert**—Action must be taken immediately. For example, your website is down, the database is unavailable, etc. This should trigger SMS alerts and wake you up.
-   **emergency**—The system is unusable.