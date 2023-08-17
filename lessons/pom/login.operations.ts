
import { loginPage } from './login.page';

class AuthOperations {
  public async waitForPageToBeReady() {
    await loginPage.waitForPageToBeReady();
  }

  public async loginWithEmail(username: string, password: string) {
    await loginPage.loginWithEmailBtn.waitForClickable();
    await loginPage.loginWithEmailBtn.click();
    await loginPage.inputEmail.setValue(username);
    await loginPage.inputPassword.setValue(password);
    await loginPage.btnSubmit.click();
  }
}

export const authOperations = new AuthOperations();
