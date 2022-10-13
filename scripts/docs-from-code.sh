#!/usr/bin/env bash

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

dir=$1
repo=$2
branch=$3
sparse=$4

echo "Creating a directory: $dir"
mkdir -p "$dir"
cd "$dir" || exit

echo 'Initiating git in the directory'
git init

echo "Adding a remote repository: $repo"
git remote add origin --fetch "$repo"

if $sparse; then
  echo 'Enabling sparse checkout'
  git config core.sparseCheckout true

  echo 'Adding /docs/* to sparse checkout'
  echo '/docs/*' >> .git/info/sparse-checkout
fi

echo "Checkouting a branch: $branch"
git checkout "$branch" || exit

cd ..
