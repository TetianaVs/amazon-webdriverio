module.exports = class NavBar {

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

  get navSearchDropdownList() {
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

  get signInButton() {
    return $('#nav-flyout-ya-signin > a');
  }

  get signUpButton() {
    return $('#nav-flyout-ya-newCust > a');
  }

  get yourListsTitle() {
    return $('#nav-al-title');
  }

  get createListLink() {
    return $('#nav-al-wishlist > a:nth-child(2) > span');
  }

  get findListRegistryLink() {
    return $('#nav-al-wishlist > a:nth-child(3) > span');
  }

  get charityListLink() {
    return $('#nav-al-wishlist > a:nth-child(4) > span');
  }

  get yourAccountTitle() {
    return $('#nav-al-your-account > div');
  }

  get accountLink() {
    return $('#nav-al-your-account > a:nth-child(2) > span');
  }

  get ordersLink() {
    return $('#nav-al-your-account > a:nth-child(2) > span');
  }

  get navCard() {
    return $('#nav-cart');
  }

  //*[@id="nav_prefetch_yourorders"]/span

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
//    */
  //   async login(username, password) {
  //     await this.inputUsername.setValue(username);
  //     await this.inputPassword.setValue(password);
  //     await this.btnSubmit.click();
  //   }

}

