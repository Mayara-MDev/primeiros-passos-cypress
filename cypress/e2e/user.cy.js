import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";
import MyInfoPage from "../pages/myInfoPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("testes no ORANGE HRM", () => {
  const selectorsList = {};

  it.only("user info update - Success!", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkDashboardPage();
    menuPage.accessMyInfo();

    myInfoPage.fillPersonalDetails("First Name", "Last Name");
    myInfoPage.fillEmployeeDetails("employeeId", "otherId", "2026-10-03");
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

  it("login - Fail!", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
