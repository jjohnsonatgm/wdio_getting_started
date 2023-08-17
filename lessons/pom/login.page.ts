import { waitForPageToBeReady } from '../../utility/useful-functions';

class LoginPage {
  get inputEmail() {
    return $('input#email');
  }
  get inputPassword() {
    return $('#password');
  }
  get btnSubmit() {
    return $('button[aria-label="Log in"]');
  }
  get loginWithEmailBtn() {
    return $('button[class*="LoginWithEmail"]');
  }
  get newPasswordInput() {
    return $('#newPassword');
  }
  get confirmPasswordInput() {
    return $('#confirmPassword');
  }
  get loginToCmsBtn() {
    return $('button[color="primary"]');
  }
  get emailErrorMessage() {
    return $('#helper-message-email');
  }

  async waitForPageToBeReady() {
    return waitForPageToBeReady('');
  }

  async waitForLoginPage() {
    return waitForPageToBeReady('/login', 'button[class*="LoginWithEmail"]');
  }
}

export const loginPage = new LoginPage();
