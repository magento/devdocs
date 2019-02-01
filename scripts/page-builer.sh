#!/bin/bash
set -x
ls >> _config.page-builder.yml
sed -i '' -ne '/^[^_]/p' _config.page-builder.yml
sed -i '' -ne '/^page-builder/!p' _config.page-builder.yml
sed -i '' -e 's/^/- /' _config.page-builder.yml
sed -i '' -e '1s;^;exclude:\
;' _config.page-builder.yml