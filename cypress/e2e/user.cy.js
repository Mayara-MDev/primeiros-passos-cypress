import userData from "../fixtures/user-data.json";

describe("testes no ORANGE HRM", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert-content",
    myInfoButton: '[href = "/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name = 'lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='dd-mm-yyyy']",
    dateCloseButton: ".--close",
    submitButton: "[type = 'submit']",
  };

  it.only("user info update - Success!", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.sectionTitleTopBar).contains("Dashboard");
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type("firstNameTest");
    cy.get(selectorsList.lastNameField).clear().type("lastNameTest");
    cy.get(selectorsList.genericField).eq(3).clear().type("EmployeeID");
    cy.get(selectorsList.genericField).eq(4).clear().type("othertest");
    cy.get(selectorsList.genericField).eq(5).clear().type("Drivertest");
    cy.get(selectorsList.dateField).eq(0).clear().type("2026-10-03");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
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
