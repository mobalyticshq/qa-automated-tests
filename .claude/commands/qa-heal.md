---
description: Diagnose and fix failing Playwright tests with the healer agent
argument-hint: <project name, file path, or test title>
---

Fix the failing tests for: $ARGUMENTS

1. Reproduce first: run the narrowest command that shows the failure
   (`npm test -- --project <project> --grep "<title>"`) and show me the real output.
2. Read @specs/CONVENTIONS.md before changing anything.
3. Dispatch the `playwright-test-healer` agent on the failing files.
4. Re-run and show the output.
5. Report per test: what was actually broken, and which of these it was —
   - **a product bug** — then the test was right; do not "fix" the test. Say so and stop.
   - **a stale selector or changed copy** — fixed, and the locator now lives in the right
     `app/page-object/` class rather than in the test body.
   - **a timing or isolation problem** — fixed by asserting on state, not by adding waits.
   - **environment drift** (PROD vs STG, missing `.env` value, expired auth state).

   Never mask a failure with `test.fixme()`, a `waitForTimeout`, or a weakened assertion
   without telling me explicitly and saying why the real fix is out of reach.
