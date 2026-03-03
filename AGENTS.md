# Agents

## Merging Pull Requests

- This repository only allows **rebase merges** (merge commits and squash merges are disabled).
- Branch protection rules require using the `--admin` flag to merge: `gh pr merge <number> --rebase --admin`
- The **Cloudflare Pages** check is the build/deploy check. If it fails, the PR would break the website and should **not** be merged.
