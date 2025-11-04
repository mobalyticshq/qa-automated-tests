import { test } from "@playwright/test";

export class MainURLs {
  constructor(page) {
    this.page = page;
  }

  async openMainPage() {
    await test.step(`Open url: ${process.env.BASE_URL}`, async () => {
      await this.page.goto("/", { waitUntil: "domcontentloaded" });
    });
  }

  async openAdminPoe2Page() {
    await test.step(`Open 'PoE 2' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe-2/admin`);
    });
  }

  async openAdminPoePage() {
    await test.step(`Open 'PoE' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe/admin`);
    });
  }

  async openAdminDiablo4Page() {
    await test.step(`Open 'Diablo4' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/diablo-4/admin`);
    });
  }
  
  async openAdmin2xkoPage() {
    await test.step(`Open '2XKO' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/2xko/admin`);
    });
  }

  async openAdminNightreignPage() {
    await test.step(`Open 'Nightreign' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/elden-ring-nightreign/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminDeadlockPage() {
    await test.step(`Open 'Deadlock' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/deadlock/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMhwPage() {
    await test.step(`Open "MHW" ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminBazaarPage() {
    await test.step(`Open 'Bazaar' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/the-bazaar/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMarvelRivalsPage() {
    await test.step(`Open 'Marvel Rivals' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/marvel-rivals/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminZzzPage() {
    await test.step(`Open 'ZZZ' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/zzz/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminTFTPage() {
    await test.step(`Open 'ZZZ' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/tft/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminHades2Page() {
    await test.step(`Open 'ZZZ' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/hades-2/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminBorderlands4Page() {
    await test.step(`Open 'Borderlands 4' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/borderlands-4/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminValorantPage() {
    await test.step(`Open 'Valorant' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/valorant/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminDestiny2Page() {
    await test.step(`Open 'Destiny 2' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/destiny-2/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminExampleGamePage() {
    await test.step(`Open 'Example Game' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/example-game/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminLoLPage() {
    await test.step(`Open 'LoL' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/lol/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgZzzPage() {
    await test.step(`Open 'ZZZ' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/zzz/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUg2xkoPage() {
    await test.step(`Open '2xko' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/2xko/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMarvelRivalsPage() {
    await test.step(`Open 'Marvel Rivals' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/marvel-rivals/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgBazaarPage() {
    await test.step(`Open 'Bazaar' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/the-bazaar/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgExampleGamePage() {
    await test.step(`Open 'Example Game' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/example-game/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMhwPage() {
    await test.step(`Open 'MHW' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgDeadlockPage() {
    await test.step(`Open 'Deadlock' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/deadlock/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgPoe2Page() {
    await test.step(`Open 'PoE 2' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe-2/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgPoePage() {
    await test.step(`Open 'PoE' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgDiablo4Page() {
    await test.step(`Open 'Diablo4' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/diablo-4/creator-profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgNightreignPage() {
    await test.step(`Open 'Nightreign' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/elden-ring-nightreign/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgBorderlands4Page() {
    await test.step(`Open 'Borderlands 4' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/borderlands-4/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgHades2Page() {
    await test.step(`Open 'Hades 2' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/hades-2/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgLolPage() {
    await test.step(`Open 'LoL' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/lol/creator-profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgTftPage() {
    await test.step(`Open 'TFT' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/tft/creator-profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgDestiny2Page() {
    await test.step(`Open 'Destiny 2' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/destiny-2/creator-profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgValorantPage() {
    await test.step(`Open 'Valorant' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/valorant/creator-profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openPoe2Page() {
    await test.step(`Open url: ${process.env.BASE_URL}/poe-2`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe-2`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openPoePage() {
    await test.step(`Open url: ${process.env.BASE_URL}/poe`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openBazaarPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/the-bazaar`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/the-bazaar`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openMarvelRivalsPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/marvel-rivals`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/marvel-rivals`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openLolPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/lol`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/lol`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openTftPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/tft`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/tft`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openDiablo4Page() {
    await test.step(`Open url: ${process.env.BASE_URL}/diablo-4`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/diablo-4`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openDestiny2Page() {
    await test.step(`Open url: ${process.env.BASE_URL}/destiny-2`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/destiny-2`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openBorderlands4Page() {
    await test.step(`Open url: ${process.env.BASE_URL}/borderlands-4`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/borderlands-4`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openValorantPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/valorant`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/valorant`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openHades2Page() {
    await test.step(`Open url: ${process.env.BASE_URL}/hades-2`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/hades-2`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openZzzPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/zzz`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/zzz`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openLostArkPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/lost-ark`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/lost-ark`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openDeadlockPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/deadlock`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/deadlock`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openMhwPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/mhw`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openNightreignPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/elden-ring-nightreign`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/elden-ring-nightreign`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openMhwBuildPlanner() {
    await test.step(`Open url: ${process.env.BASE_URL}/mhw/planner/builds`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw/planner/builds`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openDestiny2StPlanner() {
    await test.step(`Open url: ${process.env.BASE_URL}/destiny-2/planner/st`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/destiny-2/planner/st`, {
        waitUntil: "domcontentloaded",
      });
    });
  }
}
