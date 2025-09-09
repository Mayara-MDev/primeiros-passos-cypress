class MyInfoPage {
  selectorList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name = 'lastName']",
      genericField: ".oxd-input--active",
      dateField: ".oxd-input",
      genericComboBox: ".oxd-select-text-input",
      dateCloseButton: ".--close",
      submitButton: "[type = 'submit']",
    };

    return selectors;
  }

  fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorList().firstNameField).clear().type(firstName);
    cy.get(this.selectorList().lastNameField).clear().type(lastName);
  }

  fillEmployeeDetails(employeeId, otherId, driversLicense) {
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicense);
    cy.get(this.selectorList().dateField).eq(7).clear().type("2026-10-03");
    cy.get(this.selectorList().dateCloseButton).click();
  }
  saveForm() {
    cy.get(this.selectorList().submitButton).eq(0).click({ force: true });
    cy.get("body").should("contain", "Successfully Updated");
  }

  fillStatus() {
    cy.get(this.selectorList().genericComboBox).eq(0).click();
    cy.get(".oxd-select-dropdown > :nth-child(4)").click();
    cy.get(this.selectorList().genericComboBox).eq(1).click();
    cy.get(".oxd-select-dropdown > :nth-child(2) > span").click();
  }
}
export default MyInfoPage;
