---
description: Turn a manual-QA Markdown spec into committed Playwright tests (generate -> POM extraction -> heal)
argument-hint: specs/<spec>.md [scenario number, e.g. 1.2 or "all"]
---

Turn the manual-QA spec `$1` into Playwright tests in this repo.

Scope: ${2:-all scenarios in the spec}.

## Steps

1. **Read the spec** `$1` and read @specs/CONVENTIONS.md. Read the seed file each suite names
   under `**Seed:**`. If a suite has no `**Seed:**` line, pick one from the table in
   @specs/README.md and say which you picked and why.

2. **Validate the spec before spending tokens on the browser.** Report and stop if:
   - a step has no `- expect:` line under it;
   - a step describes a DOM detail instead of a user action;
   - a scenario depends on state left behind by an earlier scenario;
   - a scenario creates data but the spec never says it is disposable.

3. **Generate.** For each scenario in scope, dispatch the `playwright-test-generator` agent —
   one agent per scenario, in parallel where the scenarios are independent. Give each one:
   - the seed file path;
   - the `test.describe` title (the `### N.` heading, ordinal stripped);
   - the test title (the `#### N.N.` heading, ordinal stripped);
   - the target file path: the scenario's `**File:**` line, or, if absent, a path chosen
     from the directory table in @specs/CONVENTIONS.md;
   - the verbatim steps and their `- expect:` lines;
   - an instruction to follow @specs/CONVENTIONS.md exactly: import from
     `../fixtures/fixture`, `const moba = new Moba(page)`, prefer existing `Moba` page-object
     methods (grep `app/page-object/`), wrap every assertion in
     `await test.step('Expected Result: ...')`, and flag any inline selector with
     `// TODO(pom): extract to app/page-object/<file>.js`.

4. **Extract selectors.** For every `TODO(pom)` in the generated files, move the locator into
   the right `app/page-object/` class (constructor locator, or an action method wrapped in
   `test.step()`), wire it through `Moba` if the class is new, and update the test to call it.
   Remove the TODO. This is your job, not the generator's — it has no write access.

5. **Verify.** Run only the generated files, e.g.
   `npm test -- --project <project> --grep "<test title>"`. If anything fails, dispatch
   `playwright-test-healer` on the failing files. Re-run until green.

6. **Report** — do not commit. Give me:
   - the files created or changed;
   - the actual `npm test` output (pass/fail counts, verbatim on failure);
   - every assertion you consider weak, and why;
   - anything in the spec you could not automate, and what a human needs to decide.

Format the result with `npx prettier --write` before reporting.
