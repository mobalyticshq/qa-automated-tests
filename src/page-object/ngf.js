import {
  SignInPage,
  AccountPage,
  Navbar,
  ProfilePage,
  MainPage,
  EditProfilePage,
  GamePage,
  ShoppingCart,
  FriendsPage,
  MainURLs,
  StPage,
} from "./index";

export class Ngf {
  constructor(page) {
    this.page = page;
    this.stPage = new StPage(page);
    this.navbar = new Navbar(page);
    this.signInPage = new SignInPage(page);
    this.accountPage = new AccountPage(page);
    this.profilePage = new ProfilePage(page);
    this.mainPage = new MainPage(page);
    this.gamePage = new GamePage(page);
    this.mainURLs = new MainURLs(page);
  }
}
