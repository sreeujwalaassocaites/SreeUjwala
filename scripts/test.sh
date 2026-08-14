#!/usr/bin/env bash
set -Eeuo pipefail
cd "$(dirname "$0")/.."

printf '1/4 Python syntax...\n'
python3 -m py_compile backend/server.py backend/export_leads.py backend/test_server.py

printf '2/4 Python unit tests...\n'
(
  cd backend
  python3 -m unittest -v test_server.py
)

printf '3/4 TypeScript/TSX syntax parse...\n'
node <<'NODE'
const fs = require('fs');
const path = require('path');
let ts;
try {
  ts = require('typescript');
} catch {
  const globalPath = '/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript';
  try { ts = require(globalPath); } catch { console.log('TypeScript package unavailable; skipped syntax parse.'); process.exit(0); }
}
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const item = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(item);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(item);
  }
}
walk('src');
files.push('next.config.ts');
let errors = 0;
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const result = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.ReactJSX,
      isolatedModules: true,
    },
  });
  for (const diagnostic of result.diagnostics || []) {
    if (diagnostic.category === ts.DiagnosticCategory.Error) {
      errors += 1;
      console.error(`${file}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, ' ')}`);
    }
  }
}
if (errors) process.exit(1);
console.log(`Parsed ${files.length} TypeScript files.`);
NODE

printf '4/4 Secret-pattern scan...\n'
if grep -RInE --exclude-dir=.git --exclude-dir=docs \
  --exclude='package-lock.json' --exclude='test.sh' --exclude='*.md' \
  --exclude='*.txt' --exclude='.env.example' \
  'AC[0-9a-fA-F]{32}|SK[0-9a-fA-F]{32}|TWILIO_AUTH_TOKEN=[A-Za-z0-9]{20,}|SMTP_PASSWORD=[^<[:space:]_]{12,}' .; then
  echo 'Potential committed secret found.' >&2
  exit 1
fi

printf 'All available checks passed.\n'
