class LoginPage {
  selectorList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: ".oxd-button",
      wrongCredentialAlert: ".oxd-alert-content",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorList().usernameField).type(username);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().loginButton).click();
  }
}
export default LoginPage;
