### Language package file structure

A typical directory structure for three language packages follows:

```tree
├── de_DE
│   ├── composer.json
│   ├── language.xml
│   ├── LICENSE_AFL.txt
│   ├── LICENSE.txt
│   └── registration.php
├── en_US
│   ├── composer.json
│   ├── language.xml
│   ├── LICENSE_AFL.txt
│   ├── LICENSE.txt
│   └── registration.php
├── pt_BR
│   ├── composer.json
│   ├── language.xml
│   ├── LICENSE_AFL.txt
│   ├── LICENSE.txt
│   └── registration.php
```

The only required directory for a language package is the top-level directory. Although not required, we recommend that the directory name match the [ISO](http://www.iso.org/iso/home/standards/language_codes.htm) code to identify the locale.

For more information about language packages, see [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html).
