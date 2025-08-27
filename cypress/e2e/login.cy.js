describe("testes no ORANGE HRM", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: ".oxd-alert-content",
  };

  it("login com sucesso!", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.sectionTitleTopBar).contains("Dashboard");
  });

  it("login com falha", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("test");
    cy.get(selectorsList.passwordField).type("test");
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
