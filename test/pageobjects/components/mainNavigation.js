const Page = require('../page');

class MainNavigation extends Page {
  get mainLogo() {
    return $('#nav-logo-sprites');
  }

  get navigationIcon() {
    return $('#nav-packard-glow-loc-icon');
  }

  get navigationPopoverBlock() {
    return $('#nav-global-location-popover-link');
  }

  get navigationSearch() {
    return $('#nav-search');
  }

  get navSearchDropdownList() {
    return $('.nav-search-scope.nav-sprite');
  }

  get navSearchInput() {
    return $('#twotabsearchtextbox');
  }

  get navSearchSubmitButton() {
    return $('#nav-search-submit-button');
  }

  get navLinkAccount() {
    return $('#nav-link-accountList');
  }

  get signInButton() {
    return $('#nav-flyout-ya-signin > a');
  }

  get navSignInContainer() {
    return $('#nav-al-container');
  }

  get signUpButton() {
    return $('#nav-flyout-ya-newCust > a');
  }

  get yourListsTitle() {
    return $('#nav-al-title');
  }

  // Select specific Your Lists action
  selectYourListsAction(index) {
    return $(`#nav-al-wishlist > a:nth-child(${index})> span`);
  }

  // Click on specific Your List: Create a List{2}, Find a List or Registry{3}, Amazon Smile Charity Lists{4}.
  // @param {Number} index  - the specific index of Your Lists.
  async clickYourListsAction(index) {
    await this.selectYourListsAction(index).click();
  }

  get yourAccountTitle() {
    return $('#nav-al-your-account > div');
  }

  get accountLink() {
    return $('#nav-al-your-account > a:nth-child(2) > span');
  }

  get ordersLink() {
    return $('#nav_prefetch_yourorders > span');
  }

  get navCart() {
    return $('#nav-cart');
  }

  get hamMenuIcon() {
    return $('#nav-hamburger-menu');
  }

  get navXshopContainer() {
    return $('#nav-xshop');
  }

  get listXshop() {
    return $('#nav-xshop a');
  }

  get dismiss() {
    return $('[data-action-type=DISMISS]');
  }

  get xShopGiftCards() {
    return $('//*[@id="nav-xshop"]/a[4]');
  }

  // Select specific xShop element
  xShopGiftCardsList(index) {
    return $(`#nav-xshop a:nth-child(${index})`);
  }

  // select specific xShop element: Today's Deals{2}, Customer Service{3}, Registry{4}, Gift Cards{5}, Sell{6}
  // @param {Number} index  - the specific index of xShop element
  async clickXshopItem(index) {
    await this.xShopGiftCardsList(index).click();
  }

  // Open Sign up page from main navigation
  async openSignUpFormMainNavigation() {
    await this.navLinkAccount.moveTo();
    await this.signUpButton.click();
  }

  open() {
    return super.open('');
  }
}

module.exports = new MainNavigation();
