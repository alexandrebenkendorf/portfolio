# AGENTS

Global, authoritative rules for this repository.

## Order of precedence

1. `/AGENTS.md`
2. `/.agents/local/skills/*` (overrides, if present)
3. `/.agents/agents-playbooks/skills/*` (base skills)
4. Existing code and comments

If instructions conflict, follow the higher-precedence source and mention the conflict.

### Required skill discovery (before starting any task)

Before you execute a task, you must check for additional skills that may be vendored into the project:

- Read `.agents/README.md` first (if present) and treat its listed skills as available.
- Then scan for skill folders under `.agents/local/skills/*/SKILL.md` and `.agents/agents-playbooks/skills/*/SKILL.md`.
- If a skill is listed there or its description matches the task, you must use it, following the same trigger rules as this file.
- If you did not check `.agents/`, state that explicitly and stop to check before proceeding.

---

## Repo composition

- Personal portfolio site for alexandrebenkendorf.com
- Vite + React + TypeScript, no backend — static build, no server
- Tailwind CSS v4 for styling, Vitest + React Testing Library for tests
- `src/features/<feature>/` — one folder per content page section (component, data, types, hooks, assets together); `src/components/<component>/` — structural/layout pieces that aren't a content section (topbar, sidebar, hero); `src/shared/` — cross-feature hooks and i18n
- Shared tooling: `@alexandrebenkendorf/frontend-tooling` (ESLint, Prettier, TypeScript configs)
- Solo project — no CI/CD configured yet

---

## Non-negotiable rules

- Do NOT invent APIs, routes, env vars, or secrets.
- Keep changes minimal and incremental.
- Avoid nested ternaries for non-trivial logic.
- `.agents/agents-playbooks` is a vendored copy — do not edit it in place; changes to shared skills belong upstream in that repo.

---

## Commands that must pass

- Install: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Format: `npm run format:check`
- Typecheck: `npx tsc --build tsconfig.json`
- Test: `npm run test`
- Build: `npm run build`
- Preview production build: `npm run preview`

## Docs

- Vite: https://vite.dev/guide/
- Vitest: https://vitest.dev/guide/

---

## Definition of Done

- [ ] Lint, format check, typecheck and build passing
- [ ] No duplicated constants or paths
- [ ] Skills and/or documentation updated if a new pattern was introduced
