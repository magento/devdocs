---
group: configuration-guide
title: Create symlinks to LESS files
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Create LESS files {#config-cli-subcommands-less-sass}

Use this command to create symlinks to LESS files.

Command options:

```bash
bin/magento dev:source-theme:deploy [--type="..."] [--locale="..."] [--area="..."] [--theme="..."] [file1] ... [fileN]
```

The following table explains this command's parameters and values.

<table>
   <col width="25%" />
   <col width="65%" />
   <col width="10%" />
   <tbody>
   <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Required?</th>
   </tr>
   <tr>
      <td><p>--type</p></td>
      <td><p>Type of source files: [less] (default: "less")</p>
         <p>Currently, LESS is the only file type supported.</p></td>
      <td><p>No</p></td>
   </tr>
   <tr>
      <td><p>--locale</p></td>
      <td><p>Locale code.</p>
         <p>To display the list of locale codes, enter <code>bin/magento info:language:list</code></p></td>
      <td><p>No</p></td>
   </tr>
   <tr>
      <td><p>--area</p></td>
      <td><p>Area (<code>adminhtml</code> for the administrative area, <code>frontend</code> for the storefront).</p></td>
      <td><p>No</p></td>
   </tr>
   <tr>
      <td><p>--theme</p></td>
      <td><p>Theme name in <code>&lt;VendorName>/&lt;theme name></code> format. For example, <code>Magento/blank</code> or <code>Magento/backend</code>.</p></td>
      <td><p>No</p></td>
   </tr>
   <tr>
      <td><p>&lt;file></p></td>
      <td><p>Space-separated list of CSS files to convert to LESS without the <code>.css</code> extension. (Default is <code>css/styles-m css/styles-l</code>, for adminhtml type <code>css/styles css/styles-old</code>)</p></td>
      <td><p>No</p></td>
   </tr>
   </tbody>
</table>

For example, to create LESS files for the frontend theme named `VendorName/themeName` in the `en_US` locale using a CSS file named `<magento_root>/pub/static/frontend/VendorName/themeName/en_US/css/styles-l.css`, enter the following command:

```bash
bin/magento dev:source-theme:deploy --type="less" --locale="en_US" --area="frontend" --theme="VendorName/themeName" css/styles-l
```

The following messages display to confirm success:

```terminal
Processed Area: frontend, Locale: en_US, Theme: VendorName/themeName, File type: less.
-> css/styles-l.less
Successfully processed.
```

To create LESS files for the adminhtml, enter the following command:

```bash
bin/magento dev:source-theme:deploy --locale="en_US" --area="adminhtml" --theme="Magento/backend" css/styles css/styles-old
```
