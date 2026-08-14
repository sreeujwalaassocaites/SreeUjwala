#!/usr/bin/env bash
set -Eeuo pipefail
outfile="eazykredit-leads-$(date +%Y%m%d-%H%M%S).csv"
docker exec eazykredit-api python /app/export_leads.py > "$outfile"
chmod 600 "$outfile"
printf 'Sensitive lead export written to %s\n' "$outfile"
