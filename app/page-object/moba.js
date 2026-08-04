import {
  SignInPage,
  AccountPage,
  Navbar,
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
  AccountInformationTab,
  ProfileTab,
  AccountSettingsPage,
  BillingInfoTab,
  ByeBye,
  PricingPage,
  PaymentPage,
  Sidebar,
  MgpProfile,
} from './index';

export class Moba {
  constructor(page) {
    this.stAdminPage = new StAdminPage(page);
    this.ugBuildPlanner = new UgBuildPlanner(page);
    this.homePage = new HomePage(page);
    this.ugProfilePage = new UgProfilePage(page);
    this.ugBuildPage = new UgBuildPage(page);
    this.stPage = new StPage(page);
    this.navbar = new Navbar(page);
    this.signInPage = new SignInPage(page);
    this.accountPage = new AccountPage(page);
    this.mainPage = new MainPage(page);
    this.mainURLs = new MainURLs(page);
    this.cardGalleryV2Widget = new CardGalleryV2Widget(page);
    this.authorizePage = new AuthorizePage(page);
    this.accountInformationTab = new AccountInformationTab(page);
    this.profileTab = new ProfileTab(page);
    this.accountSettingsPage = new AccountSettingsPage(page);
    this.billingInfoTab = new BillingInfoTab(page);
    this.byeBye = new ByeBye(page);
    this.pricingPage = new PricingPage(page);
    this.paymentPage = new PaymentPage(page);
    this.sidebar = new Sidebar(page);
    this.mgpProfile = new MgpProfile(page);
  }
}
