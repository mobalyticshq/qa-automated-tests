import {
  SignInPage,
  AccountPage,
  Navbar,
  ProfilePage,
  MainPage,
  MainURLs,
  StAdminPage,
  StPage,
  UgProfilePage,
  UgBuildPage,
  HomePage,
  CardGalleryV2Widget,
} from "./index";

export class Moba {
  constructor(page) {
    this.page = page;
    this.stAdminPage = new StAdminPage(page);
    this.homePage = new HomePage(page);
    this.ugProfilePage = new UgProfilePage(page);
    this.ugBuildPage = new UgBuildPage(page);
    this.stPage = new StPage(page);
    this.navbar = new Navbar(page);
    this.signInPage = new SignInPage(page);
    this.accountPage = new AccountPage(page);
    this.profilePage = new ProfilePage(page);
    this.mainPage = new MainPage(page);
    this.mainURLs = new MainURLs(page);
    this.cardGalleryV2Widget = new CardGalleryV2Widget(page);
  }
}
