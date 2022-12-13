import * as assert from '@helper/assert';
import * as element from '@helper/element';
import * as route from '@helper/routes';
import { ROUTES } from '@tests/const/routes';
import * as login from '@tests/data/login.data';
import * as loginPage from '@tests/page/login.page';

describe("Login Test", () => {
    beforeEach(() => {
        route.visit(ROUTES.login)
    });
        
    it("Ensure the error message is displayed when user entered invalid login data", () => {
      element.fillfield(loginPage.usernameField, login.INVALID_LOGIN_DATA.username);
      element.fillfield(loginPage.passwordField, login.INVALID_LOGIN_DATA.password);
      element.click(loginPage.loginButton);
      assert.shouldContainText(loginPage.errorMessage, "Epic sadface: Username and password do not match any user in this service")
    });
  });