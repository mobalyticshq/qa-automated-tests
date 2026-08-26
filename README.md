# Instruction on How to Launch Automated Tests

### Introduction

Hey, folks! There are two ways to launch tests:

- Using GitHub Actions (CI/CD)
- On your local machine (PC)

## Steps to Run Tests Using GitHub Actions

1. Go to the **Actions** tab _(all workflows are located here)_.

2. Select the **mobalytics-tests** workflow from the Actions sidebar on the left side of the screen.

3. Click the **Run workflow** button above the workflows list.

4. Select environment: PROD or STG in the dropdown. Then click the green **Run workflow** button.

   > You will see a message indicating "Workflow run was successfully requested."
   > ![alt text](app/images/worklow_run.png)

5. Refresh the page and navigate to the running workflow _(a yellow circle indicates the workflow is running)_.

6. Click on the running job: **ngf-tests**.

   > You will see each step of the running job in progress.

   ![alt text](app/images/job-steps.png)

Once the job is completed, you will receive one of two results:

- A green checkmark ✅ means all tests passed successfully.

  ![alt text](app/images/green.png)

- A red cross ❌ means some tests failed or are broken.

  ![alt text](app/images/red.png)

### Steps to Access the Allure Report

1. Return to the **Actions** tab.

2. Wait until the **pages build and deployment** workflow completes to generate the Allure Report _(a yellow circle means the workflow is running)_. If the workflow has completed _(green checkmark ✅)_, proceed to the next step.

3. Select the most recently completed **pages build and deployment** workflow _(usually the last workflow in the list)_.

4. Click the link in the **deploy** job.

   > Your Allure Report will open, displaying the results from the latest test run.
   > ![alt text](app/images/allure-report.png)

<br>
<br>
<br>

## Steps to Run Tests Using Your Local Machine

1. **Create a Folder**
   - Create a folder on your local machine where you will clone the repository. Then open this folder in your code editor.

2. **Clone the Repository**
   - Open the terminal and paste the following command, then press **Enter**:

   ```bash
   git clone --branch main --single-branch https://github.com/mobalyticshq/qa-automated-tests.git .
   ```

   > After the repository has been cloned successfully, you will see the new folders & files in your created folder and **done** status messages in the terminal process.![alt text](app/images/cloned-repo.png)

3. **Install Dependencies**

   If **Node.js** is not installed on your system, please install it first before running the following commands.
   - In the terminal, paste the following commands and press **Enter**:

   ```bash
   npm install
   npx playwright install
   ```

   > After installing dependencies, you will see the following messages in the terminal.
   > ![alt text](app/images/install-dependecies.png)

4. **Set Up the `.env` File**
   - Rename the file `.env.example` to `.env`, retrieve the correct credentials from the #team-qa Slack channel, and update your .env with those values.

5. **Run the Tests**
   - In the terminal, run tests using the following command:

   ```bash
   npm t
   ```

   > You will see the results of all executed tests displayed in the terminal.
   > ![alt text](app/images/results.png)

### Steps to Access the Allure Report

- To generate and open the Allure Report, use the following command:

```bash
npm run generate-report
```

> Allure Report will be generated and opened in a new window
> ![> app/images/allure-results.png](app/images/allure-results.png)

   <br>
   <br>

> NOTE: To change the environment, navigate to the root project & find **.env** file then comment or uncomment the environment variables depending where you want to run tests STG or PROD![alt text](app/images/env.png)

## Writing Tests From a Manual QA Spec (AI-Assisted)

You do not need to write Playwright code to add a test. Write the test case as Markdown in
`specs/`, and Playwright's AI agents explore the live app, execute your steps in a real
browser, and produce a normal `*.test.js` file for review.

**The AI runs once, when the test is authored. CI runs plain Playwright — no model, no API
key, no extra cost per run.**

```
specs/your-feature.md          you write this
        │
        ▼  /qa-spec specs/your-feature.md      (in Claude Code)
e2e-tests/<area>/<scenario>.test.js            reviewed in a PR, committed
        │
        ▼  npm test
Allure report
```

### Start here

1. Read [`specs/README.md`](specs/README.md) — the spec format, with the rules for writing
   good steps.
2. Copy [`specs/_TEMPLATE.md`](specs/_TEMPLATE.md) and fill it in.
   [`specs/plus-upsell.md`](specs/plus-upsell.md) is a worked example.
3. Pick the seed that matches the login state your case needs (anonymous, admin, regular
   user, Plus user).
4. In Claude Code, run `/qa-spec specs/your-feature.md`.
5. Review the generated test, then open a PR.

Don't know the flow well enough to write the spec? Run `/qa-plan <feature>` and the planner
agent will explore the app and draft one for you to correct.

### One-time setup

```bash
npm install && npx playwright install --with-deps
```

A `.env` file with `BASE_URL` and the role credentials is required — the agents drive the real
app, so without it the seed tests fail with `Cannot navigate to invalid URL`. See
[`.env.example`](.env.example); values are in the `team-qa` Slack channel.

Claude Code must be restarted after the first checkout so it picks up the `playwright-test`
MCP server from [`.mcp.json`](.mcp.json), and you have to approve the server when prompted.

Check the plumbing before writing a spec:

```bash
npm run seeds
```

All four seed tests must pass. If a seed fails, the agents cannot generate anything — fix the
environment first (usually a missing `.env` value or a stale `.auth/` state).

### For automation engineers

- [`specs/CONVENTIONS.md`](specs/CONVENTIONS.md) — the house rules generated code is held to,
  and the review checklist.
- `/qa-heal <project|file|test title>` — diagnose and fix a failing test.
- `npm run agents:init` — regenerate the agent definitions after a Playwright upgrade. This
  overwrites `.claude/agents/*.md`, so never hand-edit those files; repo-specific rules live
  in `specs/CONVENTIONS.md` and in the seed file comments.
