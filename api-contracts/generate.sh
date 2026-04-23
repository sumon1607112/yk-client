#!/bin/bash
# OpenAPI Generator — generates TypeScript Angular clients from OpenAPI specs.
# Run from anywhere: bash yk-client/api-contracts/generate.sh
# Or via npm: cd yk-client && npm run api:generate

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLIENT_DIR="$SCRIPT_DIR/.."

echo "Generating API clients from OpenAPI specs..."
cd "$CLIENT_DIR"
npm run api:generate

echo ""
echo "Done. Generated files:"
echo "  yk-client/api-contracts/auth"
echo "  yk-client/api-contracts/product"
