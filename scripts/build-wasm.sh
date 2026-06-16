#!/usr/bin/env bash
#
# Builds the ogen OpenAPI validator to WebAssembly and places the artifacts in
# static/wasm so the docs can load them at runtime.
#
# The validator source lives in the ogen repository under cmd/ogen-wasm.
# By default we build from a sibling checkout (../ogen); override with OGEN_DIR.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ogen_dir="${OGEN_DIR:-$here/../ogen}"
out_dir="$here/static/wasm"

mkdir -p "$out_dir"

echo "Building ogen-wasm from $ogen_dir"
(
  cd "$ogen_dir"
  GOOS=js GOARCH=wasm go build -ldflags="-s -w" \
    -o "$out_dir/ogen.wasm" ./cmd/ogen-wasm
)

cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" "$out_dir/wasm_exec.js"

echo "Wrote:"
ls -lh "$out_dir/ogen.wasm" "$out_dir/wasm_exec.js"
