describe("testes no ORANGE HRM", () => {
  it("login com sucesso!", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").contains("Dashboard");
  });

  it("login com falha", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("test");
    cy.get('[name="password"]').type("test");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content");
  });
});
