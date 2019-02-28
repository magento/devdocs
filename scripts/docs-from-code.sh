#!/usr/bin/env bash

dir=$1
repo=$2
branch=$3

echo "Creating a directory: $dir"
mkdir "$dir"
cd "$dir" || exit

echo 'Initiating git in the directory'
git init

echo "Adding a remote repository: $repo"
git remote add origin -f "$repo"

echo 'Enabling sparse checkout'
git config core.sparseCheckout true

echo 'Adding /docs/* to sparse checkout'
echo '/docs/*' >> .git/info/sparse-checkout

echo "Checkouting a branch: $branch"
git checkout "$branch"
cd ..
