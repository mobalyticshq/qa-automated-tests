import { test } from "@playwright/test";

export class UgProfilePage {
  constructor(page) {
    this.page = page;
    this.createButton = page.getByRole("button", { name: "Create" });
    this.deleteButton = page.getByRole("menuitem", { name: "Delete" });
    this.buttonDeleteInModal = page.getByRole("button", { name: "Delete" });
    this.dotesButton = page
      .locator("section")
      .getByRole("button")
      .filter({ hasText: /^$/ });
    this.buildWidget = (pageName) =>
      page.getByRole("main").filter({ hasText: `${pageName}` });
    this.buildButton = page.getByRole("menuitem", {
      name: "Build Create a Build",
    });
    this.teamButton = page.getByRole("menuitem", {
      name: "Team Create a Team",
    });
    this.guideButton = page.getByRole("menuitem", {
      name: "Guide Create a Guide",
    });
    this.tierListButton = page.getByRole("menuitem", {
      name: "Tier List Create a Tier List",
    });
  }

  async gotoBuildPlannerPage() {
    await test.step("Go to Build Planner Page", async () => {
      await this.createButton.click();
      await this.buildButton.click();
    });
  }

  async gotoTeamPlannerPage() {
    await test.step("Go to Team Planner Page", async () => {
      await this.createButton.click();
      await this.teamButton.click();
    });
  }

  async gotoTearListPlannerPage() {
    await test.step("Go to Team Planner Page", async () => {
      await this.createButton.click();
      await this.tierListButton.click();
    });
  }

  async gotoGuidePlannerPage() {
    await test.step("Go to Guide Planner Page", async () => {
      await this.createButton.click();
      await this.guideButton.click();
    });
  }

  async deleteBuild(pageName) {
    await test.step(`Delete ${pageName} build page`, async () => {
      await this.dotesButton.click();
      await this.deleteButton.click();
      await this.buttonDeleteInModal.click();
    });
  }
}
