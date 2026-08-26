# Manual QA specs

This folder holds **human-written test plans in Markdown**. A manual QA engineer writes a
spec here; the Playwright AI agents turn it into a real, committed Playwright test.

```
specs/checkout.md          ← you write this (plain Markdown, no code)
        │
        │  planner agent   — optional: explores the live app and drafts the spec for you
        │  generator agent — executes every step in a real browser, then writes the test
        ▼
e2e-tests/<area>/<scenario>.test.js   ← reviewed in a PR, committed
        │
        │  healer agent    — on demand, when a committed test breaks
        ▼
npm test                   ← CI runs plain Playwright. No AI, no API keys, deterministic.
```

The AI is used **once, at authoring time**. CI never calls a model.

## Writing a spec

Copy [`_TEMPLATE.md`](_TEMPLATE.md) and fill it in. The structure is not decorative — the
generator agent parses it, so keep the headings exactly as shown:

| Element | Meaning |
| --- | --- |
| `# <Title>` | Spec title. One spec file per feature area. |
| `## Application Overview` | A short paragraph on what the feature does. Context for the agent. |
| `### N. <Suite name>` | Becomes `test.describe('<Suite name>')`. |
| `**Seed:**` | Which login state the whole suite runs as. See the seed table below. |
| `#### N.N. <Scenario name>` | Becomes one `test('<Scenario name>')` in its own file. |
| `**File:**` | Where the generated test lands. Pick from the directory table in [`CONVENTIONS.md`](CONVENTIONS.md), or leave it out and an automation engineer fills it in. |
| `**Steps:**` | Numbered user actions, two-space indented. |
| `- expect:` | An assertion, four-space indented under the step it follows. Each one becomes an Allure `Expected Result:` step. |

This is exactly the format the `planner_save_plan` tool emits, so a spec you write by hand and
a spec the planner agent drafts are interchangeable. Assertions hang off the step that causes
them — there is no separate "Expected Results" block at the end.

```markdown
**Steps:**
  1. Click the "Get Plus" button in the navbar
    - expect: The Mobalytics Plus pricing page opens
    - expect: The 1 month, 3 months and 12 months plans are all listed
```

### Choosing a seed

The seed decides who is logged in when the scenario starts.

| Seed | Who | Use for |
| --- | --- | --- |
| `e2e-tests/agent-seeds/anonymous.seed.test.js` | Not signed in | Public pages, sign-up, paywalls, SEO |
| `e2e-tests/agent-seeds/admin.seed.test.js` | Admin | NGF, ST/UG planners, admin panel |
| `e2e-tests/agent-seeds/regular-user.seed.test.js` | Free signed-in user | Ads shown, account settings, upsells |
| `e2e-tests/agent-seeds/plus-user.seed.test.js` | Plus subscriber | Ad-free, premium widgets |

If you need a role that isn't listed (game manager, internal writer, ad-free), say so in the
spec and an automation engineer will add the seed — it is ~10 lines.

### Rules for good steps

- **Write what a user does, not what the DOM is.** "Click the *Get Plus* button", not
  `click button[data-testid=plus-cta]`. The agent finds the element itself, live.
- **One action per numbered step.** "Type `Buy groceries` and press Enter" is two steps.
- **Name things as they appear on screen**, in quotes: the "What needs to be done?" field.
- **Every scenario starts from a fresh state.** Do not chain scenario 1.2 onto 1.1.
- **Attach each `- expect:` to the step that causes it**, not to the end of the scenario.
- **Say what should be true, not just that it worked.** "Counter shows `1 item left`" beats
  "todo is added".
- **Anything created must be named as disposable.** If a step creates a page/build/guide,
  say so — the generator will wire up the cleanup fixture and a UUID suffix.

## Running the pipeline

From Claude Code in this repo:

```bash
/qa-spec specs/your-spec.md
```

Or drive the agents directly:

- `> use the playwright-test-planner agent to draft a spec for <feature> into specs/<name>.md`
- `> use the playwright-test-generator agent to generate tests from specs/<name>.md`
- `> use the playwright-test-healer agent to fix the failing tests in e2e-tests/<area>`

Generated code is a **draft**. Read the diff, check the assertions actually assert the thing,
then commit. Conventions the generator is held to live in [`CONVENTIONS.md`](CONVENTIONS.md).
