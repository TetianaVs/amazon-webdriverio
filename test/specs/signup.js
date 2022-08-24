const MainPage = require('../pageobjects/main.page');
const MainNavigation = require('../pageobjects/components/mainNavigation');
const SignUpPage = require('../pageobjects/signup.page');
const { userNameGenerator } = require('../helpers/helpers');
const { emailGenerator } = require('../helpers/helpers');
const { passwordGenerator } = require('../helpers/helpers');

describe('Signup', () => {
  before(async () => {
    await browser.maximizeWindow();
    await MainPage.open();
  });

  it('should open sign up page from main navigation', async () => {
    await MainNavigation.openSignUpFormMainNavigation();
    await expect(await SignUpPage.createAccountHeading.getText()).toEqual(
      'Create account'
    );
  });

  it('should open captcha after filling in the registration form', async () => {
    const newName = await userNameGenerator();
    const newEmail = await emailGenerator();
    const newPassword = await passwordGenerator();
    await SignUpPage.signUp(newName, newEmail, newPassword);
    await expect(await SignUpPage.captchaText).toHaveTextContaining(
      'Solve this puzzle to protect your account'
    );
  });
});
