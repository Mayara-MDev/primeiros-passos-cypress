import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage.js";

const loginPage = new LoginPage();

describe("login Orange HRM Tests", () => {
  it("login - Fail!", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userFail.username,
      userData.userFail.password
    );
    //dashboardPage.checkAccessInvalid();
  });

  it("login - Success!", () => {
    loginPage.accessLoginPage();

    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
  });
});
