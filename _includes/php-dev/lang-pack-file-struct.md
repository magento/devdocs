### Language Package file structure
A typical directory structure for three language packages follows:

~~~
├── de_de
│   ├── composer.json
│   ├── language.xml
│   ├── LICENSE_AFL.txt
│   ├── LICENSE.txt
│   └── registration.php
├── en_us
│   ├── composer.json
│   ├── language.xml
│   ├── LICENSE_AFL.txt
│   ├── LICENSE.txt
│   └── registration.php
├── pt_br
│   ├── composer.json
│   ├── language.xml
│   ├── LICENSE_AFL.txt
│   ├── LICENSE.txt
│   └── registration.php
~~~

The only required directory for a language package is the top-level directory. Although not required, we recommend that the directory name match the [ISO](http://www.iso.org/iso/home/standards/language_codes.htm){:target="_blank"} code to identify the locale. (The directory name *must be* lowercase.)

For more information about language packages, see [Translation dictionaries and language packages]({{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html).
