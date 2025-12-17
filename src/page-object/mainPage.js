import { test } from '@playwright/test';

export class MainPage {
  constructor(page) {
    this.diabloGame = page.getByRole('link', {
      name: "5c7b868f-logo-diablo-'",
    });
    this.leageGame = page.getByRole('link', {
      name: 'edb5a013-logo-lol',
    });
    this.tftGame = page.getByRole('link', {
      name: 'b107a747-logo-tft',
    });
    this.deadlockGame = page.getByRole('link', {
      name: 'Deadlock Logo',
    });
    this.mhwGame = page.getByRole('link', {
      name: 'New mhw-logo',
    });
    this.poeGame = page.getByRole('link', {
      name: "mobalytics.atlassian (1)'",
    });
    this.marvelGame = page.getByRole('link', {
      name: 'New marvel-rivals-logo',
    });
    this.valorantGame = page.getByRole('link', {
      name: 'b85a5bf7-logo-valorant',
    });
    this.elden_ringGame = page.getByRole('link', {
      name: 'New index_page_logo',
    });
    this.bazaarGame = page.getByRole('link', {
      name: 'bb98758b-3dd6-487a-91bb-',
    });
    this.destinyGame = page.getByRole('link', {
      name: '4d6f7204-logo-destiny-',
    });
    this.lost_arkGame = page.getByRole('link', {
      name: '1c25faa0-logo-lost-ark',
    });

    this.searchInput = page.getByRole('searchbox', { name: 'search' });
    this.categoryButton = (category) => page.getByRole('link', { name: `${category}`, exact: true }).first();
    this.searchButton = page.getByRole('link', { name: 'Search Steam' }).locator('img');
  }

  async selectMhwProject() {
    await test.step(`Go to the MHW project`, async () => {
      await this.mhwGame.click();
    });
  }

  async selectLeageProject() {
    await test.step(`Go to the LoL project`, async () => {
      await this.leageGame.click();
    });
  }

  async selectTftProject() {
    await test.step(`Go to the TFT project`, async () => {
      await this.tftGame.click();
    });
  }

  async selectPoeProject() {
    await test.step(`Go to the PoE project`, async () => {
      await this.poeGame.click();
    });
  }

  async selectDiabloProject() {
    await test.step(`Go to the Diablo project`, async () => {
      await this.diabloGame.click();
    });
  }

  async selectMarverlProject() {
    await test.step(`Go to the Marvel Rivals project`, async () => {
      await this.marvelGame.click();
    });
  }

  async selectDeadlockProject() {
    await test.step(`Go to the Deadlock project`, async () => {
      await this.deadlockGame.click();
    });
  }

  async selectValorantProject() {
    await test.step(`Go to the Valorant project`, async () => {
      await this.valorantGame.click();
    });
  }

  async selectDestinyProject() {
    await test.step(`Go to the Destiny project`, async () => {
      await this.destinyGame.click();
    });
  }

  async selectLostArkProject() {
    await test.step(`Go to the Lost Ark project`, async () => {
      await this.lost_arkGame.click();
    });
  }

  async selectEldenRingProject() {
    await test.step(`Go to the Elden Ring project`, async () => {
      await this.elden_ringGame.click();
    });
  }
}
