#!/usr/bin/env bash
dir=$1
branch=$2

echo "Planting a worktree of the $branch branch at the $dir directory"
git worktree add --force "$dir" "$branch"