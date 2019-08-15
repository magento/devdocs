### Example - Minor release

Minor releases contain new features, quality fixes, and security fixes. Use Composer to specify a minor release. For example, to specify the {{site.data.var.ee}} 2.3.0 metapackage:

```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.3.0 <install-directory-name>
```

### Example - Quality patch

Quality patches primarily contain functional _and_ security fixes. However, they can also sometimes contain new, backward-compatible features. Use Composer to download a quality patch. For example, to specify the {{site.data.var.ee}} 2.3.3 metapackage:

```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.3.3 <install-directory-name>
```

### Example - Security patch

Security patches contain security fixes only. They are designed to make the upgrade process faster and easier.

Security patches use the Composer naming convention `2.3.2-px`. Use Composer to specify a patch. For example, to download the {{site.data.var.ee}} 2.3.2.1 metapackage:

```bash
composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition=2.3.2-p1 <install-directory-name>
```