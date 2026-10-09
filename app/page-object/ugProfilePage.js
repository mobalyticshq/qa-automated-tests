import { test } from '@playwright/test';

export class UgProfilePage {
  constructor(page) {
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.deleteButton = page.getByRole('menuitem', { name: 'Delete' });
    this.buttonDeleteInModal = page.getByRole('button', { name: 'Delete' });
    this.dotesButton = page.locator('section').getByRole('button').filter({ hasText: /^$/ });
    this.buildButton = page.getByRole('menuitem', {
      name: 'Build Create a Build',
    });
    this.teamButton = page.getByRole('menuitem', {
      name: 'Team Create a Team',
    });
    this.classicButton = page.getByRole('menuitem', {
      name: 'Classic Create a Build',
    });
    this.guideButton = page.getByRole('menuitem', {
      name: 'Guide Create a Guide',
    });
    this.tierListButton = page.getByRole('menuitem', {
      name: 'Tier List Create a Tier List',
    });
    this.characterButton = page.getByRole('menuitem', {
      name: 'Character Create a Character',
    });
    this.classButton = page.getByRole('menuitem', {
      name: 'Create a Class Guide',
    });
    this.dungeonButton = page.getByRole('menuitem', {
      name: 'Create a Dungeon Guide',
    });
    this.questButton = page.getByRole('menuitem', {
      name: 'Create a Quest Guide',
    });
    this.raidButton = page.getByRole('menuitem', {
      name: 'Create a Raid Guide',
    });
    this.deckButton = page.getByRole('menuitem', { name: 'Create a Deck' });
    this.buildWidget = (pageName) => page.getByRole('main').filter({ hasText: `${pageName}` });
  }

  async gotoQuestsPlannerPage() {
    await test.step('Go to Quest Planner Page', async () => {
      await this.createButton.click();
      await this.questButton.click();
    });
  }

  async gotoDungeonsPlannerPage() {
    await test.step('Go to Dungeon Planner Page', async () => {
      await this.createButton.click();
      await this.dungeonButton.click();
    });
  }

  async gotoRaidsPlannerPage() {
    await test.step('Go to Raid Planner Page', async () => {
      await this.createButton.click();
      await this.raidButton.click();
    });
  }

  async gotoClassesPlannerPage() {
    await test.step('Go to Class Planner Page', async () => {
      await this.createButton.click();
      await this.classButton.click();
    });
  }

  async gotoBuildPlannerPage() {
    await test.step('Go to Build Planner Page', async () => {
      await this.createButton.click();
      await this.buildButton.click();
    });
  }

  async gotoDeckPlannerPage() {
    await test.step('Go to Deck Planner Page', async () => {
      await this.createButton.click();
      await this.deckButton.click();
    });
  }

  async gotoCharacterPlannerPage() {
    await test.step('Go to Character Planner Page', async () => {
      await this.createButton.click();
      await this.characterButton.click();
    });
  }

  async gotoTeamPlannerPage() {
    await test.step('Go to Team Planner Page', async () => {
      await this.createButton.click();
      await this.teamButton.click();
    });
  }

  async gotoClassicPlannerPage() {
    await test.step('Go to Classic Planner Page', async () => {
      await this.createButton.click();
      await this.classicButton.click();
    });
  }

  async gotoTierListPlannerPage() {
    await test.step('Go to Tier List Planner Page', async () => {
      await this.createButton.click();
      await this.tierListButton.click();
    });
  }

  async gotoGuidePlannerPage() {
    await test.step('Go to Guide Planner Page', async () => {
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
