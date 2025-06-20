import path from "node:path";
import { USER_ROLES } from "../../src/setup/credentials";
import { test, expect } from "@playwright/test";

const userFile = "playwright/.auth/userFile.json";

// test("Получаем Bearer токен через GraphQL Login", async ({ request, page }) => {
//   // 1. Отправляем POST-запрос на эндпоинт
//   const loginResponse = await request.post(
//     "https://stg.mobalytics.gg/api/account/gql/v1/query",
//     {
//       data: {
//         query: `
//             mutation SignIn {
//                 signIn(
//                 email: "${USER_ROLES.admin_stg.email}"
//                 password: "${USER_ROLES.admin_stg.email}"
//                 )
//             }
//             `,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await expect(loginResponse.ok()).toBeTruthy();

//   const authResponse = await request.post(
//     "https://stg.mobalytics.gg/api/account/gql/v1/query",
//     {
//       data: {
//         query: `
//               query Auth {
//                   auth {
//                   token
//                   }
//               }
//           `,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await expect(loginResponse.ok()).toBeTruthy();

//   // 2. Разбираем JSON из authResponse риспона и достаём токен
//   const json = await authResponse.json();
//   const token = json?.data?.auth?.token;
//   if (!token) {
//     throw new Error(
//       "Token not found in the response. Verify the response structure."
//     );
//   }
//   console.log("Bearer token:", token);
//   // 3. (Опционально) убеждаемся, что токен не пустой
//   await expect(token).toBeTruthy();
// });

// test("UI login", async ({ page }) => {
//   const ngf = new Ngf(page);

//   await ngf.mainURLs.openDeadlockPage();
//   await ngf.navbar.gotoSignInPage();
//   await test.step('Condition: Whether "Welcome" modal appears', async () => {
//     if (await ngf.signInPage.welcomeModal.isVisible()) {
//       await ngf.signInPage.closeWelcomeModal();
//     }
//   });
//   await ngf.signInPage.loginUser(
//     USER_ROLES.admin_stg.email,
//     USER_ROLES.admin_stg.password
//   );
//   await test.step(`User is logged in`, async () => {
//     await expect(page.getByRole("img", { name: "settings" })).toBeVisible();
//   });
//   await page.context().storageState({ path: userFile });
// });

// test("API login", async ({ page, request }) => {
//   const loginResponse = await request.post(
//     "https://stg.mobalytics.gg/api/account/gql/v1/query",
//     {
//       data: {
//         query: `
//           mutation SignIn {
//             signIn(
//               email: "${USER_ROLES.admin_stg.email}"
//               password: "${USER_ROLES.admin_stg.password}"
//             )
//           }
//         `,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await expect(loginResponse.ok()).toBeTruthy();

//   await page.context().storageState({ path: userFile });
// });
