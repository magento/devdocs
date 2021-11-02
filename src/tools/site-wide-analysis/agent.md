---
title: Agent for on-premises deployments
group: tools
---

The Site Wide Analysis Tool Agent allows you to bring Site Wide Analysis Tool Dashboard for On-Prem environments. Agent collects application and business data so it can be analyzed to provide additional insights about health of your Adobe Commerce Store and improve your customer's experience.

It monitors your application and help you identify performance, security, availability and application issues.

-  Find Best practice recommendations
-  Provides information about available and installed patches
-  Provides information about your 3rd party extensions
-  Provides detailed information about your Adobe Commerce instance

[Quick YouTube overview of Site Wide Analysis Tool](https://youtu.be/KW2R8ki_RG4)

## Architecture

![Architectural diagram of the Site Wide Analysis Tool agent]({{ site.baseurl }}/common/images/tools/swat-agent.svg)

## System requirements

Operating systems (Linux x86-64). Linux distributions, such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and similar. Magento is not supported on Microsoft Windows and macOS.

-  PHP CLI
-  Bash/Shell Utils
   -  grep
   -  awk
   -  nice
   -  grep
   -  network

## Quickstart

1. Contact your CSM to obtain license key and app name / Support team
1. Install agent
1. Configure Daemon

## Installation

### Quick installation

1. Run the following command and follow steps

```bash
bash -c "$(wget -qO - https://raw.githubusercontent.com/magento-swat/install-agent-helpers/main/install.sh)"
```

1. Once Agent is downloaded and installed there are two ways how you can launch the agent

   -  Agent as a daemon service (preferred if you have root access)
   -  Run Agent by cron

### Manual installation

1. Select and create directory where you want to download file
1. Download binary file and unpack

   {:.bs-callout-info}
   In order to use the SWAT Service, Customers will need to first read and accept the SWAT Terms of Use that are presented when they access the SWAT Dashboard from the Adobe Commerce Admin.

   For amd64 architecture:

   ```bash
   curl -O https://updater.swat.magento.com/launcher/launcher.linux-amd64.tar.gz
   ```

   ```bash
   tar -xf launcher.linux-amd64.tar.gz
   ```

   For ARM v8 arm64 architecture:

   ```bash
   curl -O https://updater.swat.magento.com/launcher/launcher.linux-arm64.tar.gz
   ```

   ```bash
   tar -xf launcher.linux-arm64.tar.gz
   ```

1. Verify signature for checksum file (Optional step):

   ```bash
   echo -n "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUE0M2FBTk1WRXR3eEZBdTd4TE91dQpacG5FTk9pV3Y2aXpLS29HendGRitMTzZXNEpOR3lRS1Jha0MxTXRsU283VnFPWnhUbHZSSFhQZWt6TG5vSHVHCmdmNEZKa3RPUEE2S3d6cjF4WFZ3RVg4MEFYU1JNYTFadzdyOThhenh0ZHdURVh3bU9GUXdDcjYramFOM3ErbUoKbkRlUWYzMThsclk0NVJxWHV1R294QzBhbWVoakRnTGxJUSs1d1kxR1NtRGRiaDFJOWZqMENVNkNzaFpsOXFtdgorelhjWGh4dlhmTUU4MUZsVUN1elRydHJFb1Bsc3dtVHN3ODNVY1lGNTFUak8zWWVlRno3RFRhRUhMUVVhUlBKClJtVzdxWE9kTGdRdGxIV0t3V2ppMFlrM0d0Ylc3NVBMQ2pGdEQzNytkVDFpTEtzYjFyR0VUYm42V3I0Nno4Z24KY1Q4cVFhS3pYRThoWjJPSDhSWjN1aFVpRHhZQUszdmdsYXJSdUFacmVYMVE2ZHdwYW9ZcERKa29XOXNjNXlkWApBTkJsYnBjVXhiYkpaWThLS0lRSURnTFdOckw3SVNxK2FnYlRXektFZEl0Ni9EZm1YUnJlUmlMbDlQMldvOFRyCnFxaHNHRlZoRHZlMFN6MjYyOU55amgwelloSmRUWXRpdldxbGl6VTdWbXBob1NrVnNqTGtwQXBiUUNtVm9vNkgKakJmdU1sY1JPeWI4TXJCMXZTNDJRU1MrNktkMytwR3JyVnh0akNWaWwyekhSSTRMRGwrVzUwR1B6LzFkeEw2TgprZktZWjVhNUdCZm00aUNlaWVNa3lBT2lKTkxNa1cvcTdwM200ejdUQjJnbWtldm1aU3Z5MnVMNGJLYlRoYXRlCm9sdlpFd253WWRxaktkcVkrOVM1UlNVQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==" | base64 -d > release.pub
   ```

   ```bash
   openssl dgst -sha256 -verify release.pub -signature launcher.sha256 launcher.checksum
   ```

1. Verify checksum (Optional step):

   ```bash
   shasum -a 512 -c launcher.checksum
   ```

1. Generate an .env file with configuration

   ```config
   SWAT_AGENT_APP_NAME=<APP_NAME>
   SWAT_AGENT_LICENSE_KEY=<LICENSE_KEY>
   SWAT_AGENT_APPLICATION_PHP_PATH=php
   SWAT_AGENT_APPLICATION_MAGENTO_PATH=<APPLICATION ROOT e.g: /var/www/html >
   SWAT_AGENT_APPLICATION_DB_USER=<APPLICATION_DB_USER>
   SWAT_AGENT_APPLICATION_DB_PASSWORD=<APPLICATION_DB_PASSWORD>
   SWAT_AGENT_APPLICATION_DB_HOST=<APPLICATION_DB_HOST>
   SWAT_AGENT_APPLICATION_DB_NAME=<APPLICATION_DB_NAME>
   SWAT_AGENT_APPLICATION_DB_PORT=3306
   SWAT_AGENT_APPLICATION_DB_REPLICATED=<false or true>
   SWAT_AGENT_APPLICATION_CHECK_REGISTRY_PATH=<TEMPORARY DIRECTORY e.g: /tmp/swat-agent-production >
   SWAT_AGENT_BACKEND_HOST=check.swat.magento.com:443
   SWAT_AGENT_LOGIN_BACKEND_HOST=login.swat.magento.com:443
   SWAT_AGENT_RUN_CHECKS_ON_START=1
   SWAT_AGENT_LOG_LEVEL=error
   ```

## Running the agent

### Run agent as a daemon service

1. Copy the scheduler binary file to dir where you want to keep it

   ```bash
   cp scheduler /usr/local/bin/
   ```

1. Create systemd unit /etc/systemd/system/scheduler.service file with configuration. Copy values from swat-agent.env file

   ```config
   [Unit]
   Wants=network.target
   After=network.target
   
   [Service]
   Type=simple
   DynamicUser=yes
   ExecStart=/usr/local/bin/scheduler
   Restart=always
   RestartSec=3
   EnvironmentFile=/path/to/swat-agent.env

   [Install]
   WantedBy=multi-user.target
   ```

1. Run the following commands to launch daemon

   ```bash
   systemctl daemon-reload
   ```

   ```bash
   systemctl start scheduler
   ```

   ```bash
   systemctl enable scheduler
   ```

1. Validate the daemon is up and running

   ```bash
   journalctl -u scheduler | grep "Next Version might update" | tail -1 && echo "Agent is successfuly installed"
   ```

### Run agent as a cron job

In case you do not have a root and do not have enough permissions to configure daemon as a root, you can use cron job approach. Follow the steps below:

Update your cron schedule by using the following command

```bash
crontab -e
* * * * * SHELL=/bin/bash flock -n /tmp/swat-agent.lockfile -c 'set +o allexport; source /path/to/swat-agent/swat-agent.env; set -o allexport; /path/to/swat-agent/scheduler' >> /path/to/swat-agent/errors.log 2>&1
```

## How to get access to the dashboard

Site Wide Analysis Tool is part of Adobe Commerce Installation. See devdocs page: https://docs.magento.com/user-guide/reports/site-wide-analysis-tool.html

To get access to Site Wide Analysist Tool UI:

1. Go to your Adobe Commerce Admin Panel
1. Open Reports > System Insights > Site Wide Analysis Tool

If you face an issue and get an application error you might faced a known issue and need to install a patch MDVA-38526

## Logging

How to watch SWAT Agent logs:

```bash
journalctl -f -u scheduler
```

## Uninstall Procedure

Run the following commands to uninstall the daemon from your system and remove all generated files

```bash
systemctl stop scheduler
```

```bash
systemctl disable scheduler
```

```bash
service scheduler stop
```

```bash
rm /etc/systemd/system/scheduler.service
```

```bash
systemctl daemon-reload
```

```bash
systemctl reset-failed
```

```bash
rm -rf <CHECK_REGISTRY_PATH> #see SWAT_AGENT_APPLICATION_CHECK_REGISTRY_PATH in /etc/systemd/system/scheduler.service
```

```bash
rm /usr/local/bin/scheduler
```

If you configured agent running by cron then ensure you remove it from the crontab list.

```bash
crontab -e
```

## Agent configuration reference

Property | Description |
---------|-------------|
SWAT_AGENT_APP_NAME | Your application name which is provided to you
SWAT_AGENT_LICENSE_KEY | Your private license key which is provided to you
SWAT_AGENT_APPLICATION_PHP_PATH | Path to your PHP CLI interpretator. Usually /usr/bin/php
SWAT_AGENT_APPLICATION_MAGENTO_PATH | application root to your Adobe Commerce Instance. Usually /var/www/html
SWAT_AGENT_APPLICATION_DB_USER | Database user with your Adobe Commerce Instance
SWAT_AGENT_APPLICATION_DB_PASSWORD | MySQL Database password with your Adobe Commerce Instance
SWAT_AGENT_APPLICATION_DB_HOST | MySQL Database host with your Adobe Commerce Instance
SWAT_AGENT_APPLICATION_DB_NAME | MySQL Database name with your Adobe Commerce Instance
SWAT_AGENT_APPLICATION_DB_PORT | MySQL Database port with your Adobe Commerce Instance. Usually 3306.
SWAT_AGENT_APPLICATION_DB_REPLICATED | Is MySQL Database connection for your Adobe Commerce instance has secondary instance. Usually false.
SWAT_AGENT_APPLICATION_CHECK_REGISTRY_PATH | Temporary directory. Usually /usr/local/swat-agent/tmp
SWAT_AGENT_BACKEND_HOST | Site Wide Analysis Backend Server and port. Usually check.swat.magento.com:443
SWAT_AGENT_LOGIN_BACKEND_HOST | Site Wide Analysis Backend Login Server and Port. Usually login.swat.magento.com:443
SWAT_AGENT_RUN_CHECKS_ON_START | Collect data on first run. Usually 1.
SWAT_AGENT_LOG_LEVEL | error
