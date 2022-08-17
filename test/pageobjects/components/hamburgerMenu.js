module.exports = class hamburgerMenu {
  get hmenuCustomerProfileContainer() {
    return $('#hmenu-customer-profile');
  }

  get hmenuCustomerIcon() {
    return $('#hmenu-customer-avatar-icon');
  }

  get hmenuSignIn() {
    return $('#hmenu-customer-profile-right');
  }

  get hmenuCustomerProfileContainer() {
    return $('#hmenu-customer-profile');
  }

  get hmenuContainer() {
    return $('#hmenu-content');
  }

  get hmenuDigitalTitle() {
    return $('//*[@id="hmenu-content"]/ul[1]/li[1]/div');
  }

  get hsubmenuAmazonMusic() {
    return $(
      '#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(2) > a'
    );
  }

  get hsubmenuAmazonMusicUnlimited() {
    return $('=Amazon Music Unlimited');
  }

  get backMainMenu() {
    return $('//*[@id="hmenu-content"]/ul[2]/li[1]/a');
  }

  get yourAccount() {
    return $('//*[@id="hmenu-content"]/ul[1]/li[21]/a');
  }
};
