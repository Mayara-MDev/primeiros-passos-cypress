import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe("testes no ORANGE HRM", () => {
  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name = 'lastName']",
    genericField: ".oxd-input--active",
    dateField: ".oxd-input",
    genericComboBox: ".oxd-select-text-input",
    dateCloseButton: ".--close",
    submitButton: "[type = 'submit']",
  };

  it.only("user info update - Success!", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkDashboardPage();
    menuPage.accessMyInfo();

    cy.get(selectorsList.firstNameField).clear().type("firstNameTest");
    cy.get(selectorsList.lastNameField).clear().type("lastNameTest");
    cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeID");
    cy.get(selectorsList.genericField).eq(4).clear().type("othertest");
    cy.get(selectorsList.genericField).eq(5).clear().type("Drivertest");
    cy.get(selectorsList.dateField).eq(7).clear().type("2026-10-03");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.submitButton).eq(0).click({ force: true });
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(selectorsList.genericComboBox).eq(0).click();
    cy.get(".oxd-select-dropdown > :nth-child(4)").click();
    cy.get(selectorsList.genericComboBox).eq(1).click();
    cy.get(".oxd-select-dropdown > :nth-child(2) > span").click();
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
