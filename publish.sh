#!/usr/bin/env bash

set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-update site}"

git add -A
if git diff --cached --quiet; then
  echo "(nothing new to commit)"
else
  git commit -m "$MSG"
fi
git push

./deploy-uci.sh
