<div markdown="1">

<h3 id="file-struct-comp-lang">Magento 2 language package file structure</h3>
A typical directory structure for three language packages follows:

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
	
The only required directory for a language package is the top-level directory. Although not required, we recommend that the directory name match the <a href="http://www.iso.org/iso/home/standards/language_codes.htm" target="_blank">ISO</a> code to identify the locale. (The directory name *must be* lowercase.)

For more information about language packages, see <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>.	