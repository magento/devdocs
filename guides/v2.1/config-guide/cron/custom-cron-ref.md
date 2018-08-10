---
group: config-guide
subgroup: 12_cron
title: Custom cron job and cron group reference
menu_title: Custom cron job and cron group reference
menu_order: 2
menu_node:
version: 2.1
functional_areas:
  - Configuration
  - System
  - Setup
---

This topic helps you set up crontabs and optionally cron groups for custom modules. If your custom {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} needs to schedule tasks periodically, you must set up a crontab for that module. A *crontab* is a cron job's configuration.

You can optionally set up a custom group, which among other things enables you to run cron jobs defined in that group independently of other cron jobs.

For a step-by-step tutorial, see [Configure custom cron jobs and cron groups (tutorial)]({{ page.baseurl }}/config-guide/cron/custom-cron-tut.html).

## Overview of cron {#config-cli-cron-overview}

{% include config/cron-overview.md %}

## Configure cron groups {#config-cli-cron-group-conf}

This section discusses how to optionally create a cron group for a custom module. If you don't need to do this, continue with the next section.

A *cron group* is a logical group that enables you to easily run cron for more than one process at a time. Most Magento modules use the `default` cron group; some modules use the `index` group.

If you're implementing cron for a custom module, it's your choice of whether or not to use the `default` group or a different group.

To configure a cron group for your module, create a `crontab.xml` file in your module directory:
`<your component base dir>/<vendorname>/module-<name>/etc/crontab.xml`

For one group, the file should have the following contents:

{%highlight xml%}
<config>
    <group id="<group_name>">
        <job name="<job_name>" instance="<classpath>" method="<method>">
            <schedule><time></schedule>
        </job>
    </group>
</config>
{%endhighlight%}

where:

|Value|Description|
|---|---|
|`group_name`|Name of the cron group. The group name doesn't have to be unique. You can run cron for one group at a time.|
|`job_name`|Unique ID for this cron job.|
|`classpath`|Class to be instantiated (classpath).|
|`method`|Method in `classpath` to call.|
|`time`|Schedule in [cron format](http://www.nncron.ru/help/EN/working/cron-format.htm){:target="_blank"}. Omit this parameter if the schedule is defined in the Magento database or other storage.|

The resulting `crontab.xml` with two groups may look like this:

{%highlight xml%}
<config>
    <group id="default">
        <job name="<job_1_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
        <job name="<job_2_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
    </group>
    <group id="index">
        <job name="<job_3_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
        <job name="<job_4_name>" instance="<classpath>" method="<method_name>">
            <schedule>* * * * *</schedule>
        </job>
    </group>
</config>
{%endhighlight%}

As an example, see <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/crontab.xml" target="_blank">Magento_Customer crontab.xml</a>.

#### Specifying Cron group options {#specify-cron-group-options}

You may declare a new group and specify its configuration options (all of which run in {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} scope) via the `cron_groups.xml` file, located in:

`<your component base dir>/<vendorname>/module-<name>/etc/cron_groups.xml`

Below is an example of the `cron_groups.xml` file:

{%highlight xml%}
<config>
    <group id="<group_name>">
        <schedule_generate_every>1</schedule_generate_every>
        <schedule_ahead_for>4</schedule_ahead_for>
        <schedule_lifetime>2</schedule_lifetime>
        <history_cleanup_every>10</history_cleanup_every>
        <history_success_lifetime>60</history_success_lifetime>
        <history_failure_lifetime>600</history_failure_lifetime>
        <use_separate_process>1</use_separate_process>
    </group>
</config>
{%endhighlight%}

where:

|Option|Description|
|---|---|
|`schedule_generate_every`|Frequency (in minutes) that schedules are written to the `cron_schedule` table.|
|`schedule_ahead_for`|Time (in minutes) in advance that schedules are written to the `cron_schedule` table.|
|`schedule_lifetime`|Window of time (in minutes) that cron job must start or will be considered missed ("too late" to run).|
|`history_cleanup_every`|Time (in minutes) that cron history is kept in the database.|
|`history_success_lifetime`|Time (in minutes) that the record of successfully completed cron jobs are kept in the database.|
|`history_failure_lifetime`|Time (in minutes) that the record of failed cron jobs are kept in the database.|
|`use_separate_process`|This feature is available only for Magento 2.1 and later.|

#### Related topic
[Tutorial&mdash;configure custom cron jobs and cron groups]({{ page.baseurl }}/config-guide/cron/custom-cron-tut.html)



