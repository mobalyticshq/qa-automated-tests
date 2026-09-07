# <Feature> Test Plan

## Application Overview

<2–4 sentences: what this feature is, who uses it, and which games / user tiers it covers.>

## Test Scenarios

### 1. <Suite name — becomes test.describe()>

**Seed:** `e2e-tests/agent-seeds/anonymous.seed.test.js`

#### 1.1. <Scenario name — becomes test()>

**File:** `e2e-tests/<area>/<scenario-name>.test.js`

**Steps:**
  1. <User action, in product language>
    - expect: <What must be true after this action>
  2. <User action>
    - expect: <What must be true>
    - expect: <Second thing that must be true>

#### 1.2. <Scenario name>

**File:** `e2e-tests/<area>/<scenario-name>.test.js`

**Steps:**
  1. <User action>
    - expect: <What must be true>

### 2. <Second suite — different user state, so a different seed>

**Seed:** `e2e-tests/agent-seeds/regular-user.seed.test.js`

#### 2.1. <Scenario name>

**File:** `e2e-tests/<area>/<scenario-name>.test.js`

**Steps:**
  1. <User action>
    - expect: <What must be true>

<!--
Notes for the automation engineer (the agents read this too):
- Games in scope:
- Data created that must be cleaned up:
- Known PROD vs STG differences:
- Anything deliberately NOT automated, and why:
-->
