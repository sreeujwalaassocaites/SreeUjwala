#!/usr/bin/env python3
"""Export stored leads to CSV on stdout. Run inside the API container."""

import csv
import os
import sqlite3
import sys
from pathlib import Path

path = Path(os.getenv("DATA_DIR", "/data")) / "leads.db"
if not path.exists():
    print("No lead database exists.", file=sys.stderr)
    raise SystemExit(1)

with sqlite3.connect(path) as conn:
    conn.row_factory = sqlite3.Row
    rows = conn.execute("SELECT * FROM leads ORDER BY created_at DESC").fetchall()

writer = csv.writer(sys.stdout)
if rows:
    writer.writerow(rows[0].keys())
    writer.writerows([tuple(row) for row in rows])
