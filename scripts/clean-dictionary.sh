#!/usr/bin/env bash
# Remove words from dictionary.txt that no longer appear in any source file.
# Scans the same file patterns as .spellcheckerrc.json.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DICT="$REPO_ROOT/dictionary.txt"

if [ ! -f "$DICT" ]; then
  echo "dictionary.txt not found" >&2
  exit 1
fi

unused=()
while IFS= read -r word; do
  [ -z "$word" ] && continue
  if ! grep -rqF "$word" \
    --include='*.ts' --include='*.tsx' --include='*.html' --include='*.json' --include='*.css' \
    --exclude-dir=node_modules --exclude-dir=build --exclude-dir=reports \
    --exclude=dictionary.txt \
    "$REPO_ROOT/src" "$REPO_ROOT/public" "$REPO_ROOT/.github" 2>/dev/null; then
    unused+=("$word")
  fi
done < "$DICT"

if [ ${#unused[@]} -eq 0 ]; then
  exit 0
fi

echo "Removing ${#unused[@]} unused dictionary word(s):"
for w in "${unused[@]}"; do
  echo "  - $w"
  grep -vxF "$w" "$DICT" > "$DICT.tmp" && mv "$DICT.tmp" "$DICT"
done

# Stage the cleaned dictionary so the commit includes it
git add "$DICT"
