# Vendored skill: UI/UX Pro Max

- Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT, see LICENSE)
- Commit: 0fa6f35939138cdfaa97cb375e711396bb1e43a7
- Copied from `.claude/skills/ui-ux-pro-max/` in that repo; `scripts/tests/` omitted.
- Reviewed before adding: runtime scripts are local Python (stdlib only), no network or shell calls.

Run the search tool from the repo root (the upstream docs use `${CLAUDE_PLUGIN_ROOT}`, which is only set for plugin installs):

    python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system

Project rules in /CLAUDE.md and docs/BRIEF.md take precedence over anything this skill suggests.
