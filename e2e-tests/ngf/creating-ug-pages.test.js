import { v4 as uuidv4 } from 'uuid';
import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';
import {
  filterProjectsByFeatureStatus as filterProjectsByAvailableStaticData,
  filterProjectsByFeatureStatus as filterProjectsByBuilds,
  filterProjectsByFeatureStatus as filterProjectsByGuides,
  filterProjectsByFeatureStatus as filterProjectsByTierLists,
  filterProjectsByFeatureStatus as filterProjectsByTeams,
  filterProjectsByFeatureStatus as filterProjectsByClassic,
} from '../../app/helpers/index';

test.beforeEach(() => new Promise((resolve) => setTimeout(() => resolve(), 1000)));

test.describe('Creating UG Pages', () => {
  filterProjectsByBuilds('build').forEach(({ game, projectPath }) => {
    test(`Create a build page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-build-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        // await moba.mainURLs.openTftPage();
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoBuildPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Build page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Build`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  filterProjectsByGuides('guide').forEach(({ game, projectPath }) => {
    test(`Create a guide page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-guide-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoGuidePlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Guide page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Guide`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  filterProjectsByTierLists('tierList').forEach(({ game, projectPath }) => {
    test(`Create a tier-list page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-tier-list-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoTierListPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Tier-list page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Tier List`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  filterProjectsByTeams('team').forEach(({ game, projectPath }) => {
    test(`Create a team page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-team-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoTeamPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Team page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Team`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  filterProjectsByClassic('classic').forEach(({ game, projectPath }) => {
    test(`Create a classic page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-team-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoClassicPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Team page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Classic`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  test(`Create a character page on Endfield project`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `qa-automation-character-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgEndfieldPage();
    await moba.ugProfilePage.gotoCharacterPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Character page with the name: ${pageName} is created on Endfield project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText('Endfield Character');
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a deck page on Riftbound project`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `qa-automation-deck-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgRiftboundPage();
    await moba.ugProfilePage.gotoDeckPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Deck page with the name: ${pageName} is created on Riftbound project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText('Riftbound Deck');
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });
});
