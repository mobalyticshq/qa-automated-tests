# Mobalytics Plus Upsell Test Plan

## Application Overview

Mobalytics Plus is the paid subscription that removes advertising and unlocks premium widgets
across all game sections. Every game page carries an upsell control in the navbar that leads
to the Plus pricing page, where three billing periods are offered: 1 month, 3 months and 12
months. What the visitor sees depends on their tier — an anonymous visitor and a free
signed-in user are both offered the upgrade, while an existing Plus subscriber must never be
shown it. This plan covers reaching and reading the pricing page. It deliberately stops
before card entry: the purchase path is exercised by `e2e-tests/payments/payment.test.js`.

## Test Scenarios

### 1. Plus pricing page for an anonymous visitor

**Seed:** `e2e-tests/agent-seeds/anonymous.seed.test.js`

#### 1.1. Open the pricing page from a game page navbar

**File:** `e2e-tests/payments/plus-pricing-anonymous.test.js`

**Steps:**
  1. Open the Path of Exile 2 game page
    - expect: The navbar shows an upsell control offering to remove ads or get Plus
  2. Click the upsell control in the navbar
    - expect: The Mobalytics Plus pricing page opens
    - expect: A 1 month plan is listed
    - expect: A 3 months plan is listed
    - expect: A 12 months plan is listed

#### 1.2. Each plan offers a purchase button

**File:** `e2e-tests/payments/plus-plan-buttons-anonymous.test.js`

**Steps:**
  1. Open the Path of Exile 2 game page
  2. Click the upsell control in the navbar
    - expect: The Mobalytics Plus pricing page opens
  3. Read the 1 month, 3 months and 12 months plan cards
    - expect: Every one of the three plan cards has its own enabled purchase button
    - expect: Every one of the three plan cards shows a price

### 2. Plus upsell for a free signed-in user

**Seed:** `e2e-tests/agent-seeds/regular-user.seed.test.js`

#### 2.1. A free signed-in user is offered the upgrade

**File:** `e2e-tests/payments/plus-upsell-regular-user.test.js`

**Steps:**
  1. Open the Path of Exile 2 game page
    - expect: The navbar shows the upsell control
    - expect: The navbar does not show a "Sign In" button
  2. Click the upsell control in the navbar
    - expect: The Mobalytics Plus pricing page opens
    - expect: All three billing periods are listed

### 3. No upsell for an existing Plus subscriber

**Seed:** `e2e-tests/agent-seeds/plus-user.seed.test.js`

#### 3.1. A Plus subscriber is never shown the upsell

**File:** `e2e-tests/payments/plus-upsell-hidden-for-plus-user.test.js`

**Steps:**
  1. Open the Path of Exile 2 game page
    - expect: The navbar does not show a "Get Plus" button
    - expect: The navbar does not show a "Remove Ads" button
  2. Open the Monster Hunter Wilds game page
    - expect: The navbar does not show a "Get Plus" button
    - expect: The navbar does not show a "Remove Ads" button

<!--
Notes for the automation engineer:

- This is the reference spec for the AI codegen pipeline. It was written by hand in the same
  format `planner_save_plan` emits, to show what a hand-written spec looks like.

- Coverage gap it closes: `app/page-object/pricingPage.js` exists but no test uses it, and
  the "Purchase PLUS 1 month plan" test in e2e-tests/payments/payment.test.js is commented
  out and unfinished.

- CHECK THIS LIVE BEFORE GENERATING. On PROD (2026-08-25) an anonymous visitor on
  https://mobalytics.gg/poe-2 sees a navbar control labelled "Remove ads", not "Get Plus" —
  but `app/page-object/navbar.js` defines `getPlusButton` as
  `getByRole('button', { name: 'Get Plus' })` and `removeAdsButton` as
  `getByRole('button', { name: 'Remove Ads', exact: true })` (note the capitalisation).
  The steps above are written as user intent on purpose so the generator resolves the real
  control against the live DOM. Whatever it finds, fix the page object rather than the test.

- No data is created, so no cleanup fixture is needed.

- Card entry is out of scope. Do not let the generator click through to payment on PROD.
-->
