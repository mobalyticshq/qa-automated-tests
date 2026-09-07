---
description: Explore a feature in the live app and draft a manual-QA spec into specs/
argument-hint: <feature or URL to explore> [target spec file]
---

Draft a manual-QA test plan for: $ARGUMENTS

1. Read @specs/README.md (the spec format QA uses here) and @specs/\_TEMPLATE.md.
2. Pick the seed that matches the user state this feature needs, from the seed table in
   @specs/README.md. Say which you picked.
3. Dispatch the `playwright-test-planner` agent to explore the live app and save the plan.
   Tell it explicitly:
   - the seed file path to pass to `planner_setup_page`;
   - to write the plan to `specs/<kebab-case-feature>.md` unless a target file was given;
   - to follow the exact heading structure in @specs/\_TEMPLATE.md (`### N.` suites,
     `**Seed:**`, `#### N.N` scenarios, `**Steps:**`, `**Expected Results:**`) so the
     generator can parse it later;
   - to write steps as user actions in product language, never as selectors;
   - to keep scenarios independent and start each from a fresh state;
   - to mark any scenario that creates data as needing cleanup.
4. Read the saved plan back and review it against the "Rules for good steps" section of
   @specs/README.md. Fix violations directly in the file.
5. Report the spec path and a one-line summary per scenario. Flag anything a human QA
   engineer should confirm about intended behaviour before we automate it — the planner
   describes what the app _does_, which is not always what it _should_ do.

Do not generate tests. That is `/qa-spec`.
