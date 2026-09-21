#!/usr/bin/env bash

set -euo pipefail

UCINETID="mutahara"
REMOTE_HOST="openlab.ics.uci.edu"
REMOTE_DIR="public_html"

cd "$(dirname "$0")"

bundle exec jekyll build --baseurl "/~${UCINETID}"

rsync -avz --delete \
  --exclude='CNAME' \
  --exclude='sitemap.xml' \
  --exclude='robots.txt' \
  _site/ "${UCINETID}@${REMOTE_HOST}:${REMOTE_DIR}/"
