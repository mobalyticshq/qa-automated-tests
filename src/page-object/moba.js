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
  UgBuildPlanner,
  AuthorizePage,
  AccountSettings,
  ByeBye,
} from './index';

export class Moba {
  constructor(page) {
    this.page = page;
    this.stAdminPage = new StAdminPage(page);
    this.ugBuildPlanner = new UgBuildPlanner(page);
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
    this.authorizePage = new AuthorizePage(page);
    this.accountSettings = new AccountSettings(page);
    this.byeBye = new ByeBye(page);
  }
}
