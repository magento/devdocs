---
group: marketplace-sellers
title: Packaging Magento Version 1.x Extensions
---

Extensions developed for Magento version 1.x have different packaging guidelines than [Magento version 2.x]({% link guides/v2.3/extension-dev-guide/package/package_module.md %}).

1. Log in to the Magento Admin.

1. From the Admin, go to **System** > **Magento Connect** > **Package Extensions**.

    ![]({% link extensions/marketplace/images/create-extension-package.png %}){: .zoom}
    _Create Extension Package_

    This takes you to the Create Extension Package page, which consists of six sections:

    - Package info
    - Release info
    - Authors
    - Dependencies
    - Contents
    - Load local package

## Section A: Package info

Enter the name of the extension. It is good practice to keep the name short using simple words whenever possible.

Formatting requirements: The name of an extension can be a combination of letters (a-z or A- Z), numbers (0-9), and the underscore character (\_). Other characters are not allowed.

{: .bs-callout .bs-callout-info}
The name used in this field will be your extension key. It is case-sensitive.

![]({% link extensions/marketplace/images/package-info.png %}){: .zoom}
_Package Info_

### Channel

The Channel field is required and determined by the version of Magento you are using to package your extension. Make sure to type it exactly as it is shown below. These fields are case sensitive.

- If you are using Magento 1.5 or later to package your extension, type  `community`.
- If you are using Magento 1.4 or prior to package your extension, type `connect.magentocommerce.com/community`.

{: .bs-callout .bs-callout-info}
If the wrong channel is used during the packaging process, you will receive an error and will have to resubmit it.

### Supported releases

This field is intended for backward compatibility.

- Select the option **Pre 1.5** if this extension supports Magento versions 1.4.x and lower. For these releases, the package will be created in PEAR format and all associated files will be saved in the magento/var/pear/ directory.
- Select the option **1.5.0.0 &amp; later** if this extension supports Magento versions 1.5.x and later. For these releases, the package will be saved in the magento/var/connect directory.
- Select both options if this extension supports both older and newer versions.

{: .bs-callout .bs-callout-info}
If you are using EE 1.9 or earlier versions this field is absent but this won’t affect extension packaging process. You can skip this step in this situation.

### Upload and packaging options

If you are packaging an extension using a Magento Pre 1.5 (i.e., 1.4.x and lower) version and the extension only supports Pre 1.5 versions of Magento use the following settings:

- Channel: **connect.magentocommerce.com/community**
- Supported Releases: **Pre 1.5**
- Package file will appear in `<magento root>/var/pear/`. Package will appear in PEAR format.

{: .bs-callout .bs-callout-info}
If there is no `<magento root>/var/pear` folder, create it before packaging your extension.

If you are packaging an extension using a Magento 1.5 and later version and the extension only supports 1.5 and later versions of Magento use the following settings:

- Channel: **Community**
- Supported releases: **1.5 &amp; later**
- Package file will appear in `<magento root>/var/connect/`.

If you are packaging an extension using a Magento 1.5 and later version, but the extension supports both Magento Pre 1.5 and Magento 1.5 and later versions use the following settings:

- Channel: **connect.magentocommerce.com/community**
- Supported Releases: **Pre 1.5 and 1.5 &amp; later (select both)**
- Package will appear in `<magento root>/var/pear`.

{: .bs-callout .bs-callout-info}
Another package will be created in `<magento root>/var/connect`. You will need this file if your extension is paid and you prefer to give customers the .tgz file to upload into their Magento Connect Manager.

If you are supporting two extensions with the same name when one of them is compatible with Magento Pre 1.5 and another with Magento 1.5+ do the following:

- Package version of your extension for Magento Pre 1.5 in Channel 1.0 format and [submit it to Magento Marketplace]({% link extensions/marketplace/submit-for-review.md %}).
- Package new version of your extension for Magento versions 1.5+ in Channel 2.0 format and [submit it to Magento Marketplace]({% link extensions/marketplace/submit-for-review.md %}).
- Package will appear in `<magento root>/var/pear`.

{: .bs-callout .bs-callout-info}
Version numbers for your Pre 1.5 and 1.5+ versions should be different. You are not allowed to upload several versions with the same version number to Magento Marketplace.

{: .bs-callout .bs-callout-tip}
It’s a good idea to also mention information about the supported releases in the extensions description, so merchants can quickly know whether or not they can use it.

### Summary and description

Provide a brief summary and description about the extension. This is a required field. Magento uses this information in the extension review process. The summary will be displayed in Magento Marketplace.

### License

The License field is required. Select the license that your extension falls under. The full list of possible licenses as stated on the Magento community website is:

- Open Software License (OSL)
- Mozilla Public License (MPL)
- Massachusetts Institute of Technology License (MITL)
- GNU Lesser General Public License (LGPL)
- GNU General Public License (GPL)
- Berkeley Software Distribution License (BSDL)
- Apache Software License (ASL)
- Academic Free License (AFL)
- You can specify another (commercial) license if you distribute the extension package as paid.

{: .bs-callout .bs-callout-info}
If you are using EE 1.9 or earlier versions, this field is absent but this won’t affect extension packaging process. You can skip this step in such situation.

### License URL

Use this field to link to the license text. It is not required, but recommended.

For example, http://opensource.org/licenses/osl-3.0.php

## Section B: Release info

In order to understand this process, see [Software Versioning][1].

![]({% link extensions/marketplace/images/release-info.png %}){: .zoom}
_Release Info_

### Release version

The release version can be any arbitrary number value that you want to use as the base version. This is often set to 1.0.0 or 10.0.0. It is critical, however, to increment the release version number every time you update and repackage this extension. To protect against incorrect release version inputs, Magento Marketplace will not allow you to upload the same version twice.

### Release stability

The release version can be any arbitrary number value that you want to use as the base version. This is often set to 1.0.0 or 10.0.0. It is critical, however, to increment the release version number every time you update and repackage this extension. To protect against incorrect release version inputs, Magento Marketplace will not allow you to upload the same version twice.

Release stability can be set to:

- Alpha
- Beta
- Stable

By default, Magento Marketplace users are only allowed to install Stable release extensions. To download development, alpha, or beta releases, the user must change this setting in the backend of Magento Marketplace. If you upload a package with release stability alpha or beta, add this information into the extension description.

{: .bs-callout .bs-callout-info}
Do not attempt to upload an extension with release stability Development. This option is used for testing purposes only. No Development release extensions will be approved.

### Notes

Add any notes you may have for this release.

## Section C: Authors

In the Authors section, type in the real name, user name, and email address of all members who contributed to this extension. The first user must match the user name of your Magento Developer account used to display your extensions on Magento Marketplace.

![]({% link extensions/marketplace/images/authors.png %}){: .zoom}
_Authors_

## Section D: Dependencies

The dependencies tab is used to specify the dependence of our code in regard to the PHP version. If it is necessary, the dependence on other extension packages can be filled out as well. During the installation of an extension, the system will check it in regard to all versions specified for it, and if dependent extensions are not installed, Magento Marketplace offers to install them. Also, you can specify the dependence on the PHP extensions, for example, if your module uses GD library functions of the latest version. In this case, if a necessary PHP extension is not installed on the server, Marketplace will show an alert the administrator.

The following example provides an example of dependency on the `Mage\_Core\_Modules` package. This means that our extension will only work with Magento versions within the set range. The PHP [`version\_compare`][2] function is used to verify the compatibility of versions during the extension installation.

![]({% link extensions/marketplace/images/dependencies.png %}){: .zoom}
_Dependencies_

## Section E: Contents

This is one of the most important sections in the extension packaging process. It is also the easiest to mess up. Be careful here.

For proper compilation of extension package contents, use the following tips for the Target field. The following options correspond to the path on the disk:

- Magento Local module file - `./app/code/local`
- Magento Community module file - `./app/code/community`
- Magento Core team module file - `./app/code/core`
- Magento User Interface (layouts, templates) - `./app/design`
- Magento Global Configuration - `./app/etc`
- Magento PHP Library file - `./lib`
- Magento Locale language file - `./app/locale`
- Magento Media library - `./media`
- Magento Theme Skin (Images, CSS, JS) - `./skin`
- Magento Other web accessible file - `./`
- Magento PHPUnit test - `./tests`
- Magento other - `./`

_Where “`./`” represents the Magento root directory._

In the Path field, enter the path relative to the path in the Target field. In the Include and Ignore fields, enter a regular expression which will check the path with the file name only for the rows where the Type field is set to Recursive Dir. A file to be included in the extension package must match the expression specified in the Include field. If the file matches the expression in the Ignore field, it will not be included in the extension package correspondingly.

![]({% link extensions/marketplace/images/contents.png %}){: .zoom}
_Contents_

## Section F: Load local package

After you fill in all of the fields, click **Save Data and Create the Package**.

This saves it in a package data file and creates a package file.

**Package data file** - The package data file is an XML document that stores the rules for building the package. This file is saved on the disk in the magento/var/connect/ folder if packaged with Magento 1.5 and later or in the magento/var/pear directory if packaged using Magento 1.4 or prior. A different location can be specified if you click the Save As button.

**Extension package file** - The Extension Package file contains all source code needed. In addition, the archive includes another file that is created by a packager - `package.xml`. This file contains information about the extension, including the description of the structure of files and folders included in the package, and md5 sum for each file.

When the extension package file is ready, it can be [submitted for review]({% link extensions/marketplace/submit-for-review.md %}).

{: .bs-callout .bs-callout-info}
First you should set write permissions to the appropriate folders.

[1]: https://en.wikipedia.org/wiki/Software_versioning
[2]: http://php.net/version-compare
