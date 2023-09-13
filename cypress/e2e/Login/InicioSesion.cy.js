/// <reference types="cypress"/>

const validUser = {
    email: 'manuel@manuel.com',
    password:'123456',
  }
  
  describe("Administrador de Citas", () => {
    it("Inicio de sesion", () => {
      cy.visit("http://localhost:5173/");
  
      cy.get(':nth-child(1) > .border').type(validUser.email)
  
      cy.get(':nth-child(2) > .border').type(validUser.password)
  
      cy.get('.bg-indigo-700').click()
  
    });
  });
  