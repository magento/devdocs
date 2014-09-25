echo on

call C:\jekyll\PortableJekyll\setpath

sleep 2

cd C:\Docs\_github-working\private\Magento\devdocs_internal

jekyll serve --baseurl '/'  --watch --config _config.steve.yml