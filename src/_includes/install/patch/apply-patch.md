To apply a patch:

1. Copy the patch file to your Magento installation directory.
1. As the Magento file system owner, use one of the following commands to extract it:

| Patch file format | Command to extract              |
| ----------------- | ------------------------------- |
| .zip              | `unzip -o <patch name>.zip`     |
| .tar.gz           | `tar -zxf <patch name>.tar.gz`  |
| .tar.bz2          | `tar -jxf <patch name>.tar.bz2` |

{:.bs-callout-info}
If you don't have command line access to your Magento server, extract the patch locally and transfer the files to the server using an FTP application.
