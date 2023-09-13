/// <reference types="cypress"/>
  
  describe("Administrador de Citas", () => {
    it("Inicio de sesion", () => {
      cy.visit("http://localhost:5173/");
  
      cy.get('[href="/registrar"]').click()

      cy.get(':nth-child(1) > .border').type('NuevoVeterinario3')
      cy.get(':nth-child(2) > .border').type('nuevo3@nuevo.com')
      cy.get(':nth-child(3) > .border').type('123456')
      cy.get(':nth-child(4) > .border').type('123456')
      
      cy.get('.bg-indigo-700').click()

      //Seleccionar Alerta y verificas
    cy.get('.from-indigo-400')
    .invoke('text')
    .should('equal','Creado Correctamente, revisa tu email')

     //Verificamos que la alerta tenga el css rojo
     cy.get('.from-indigo-400')
    .should('have.class','to-indigo-600')


    });
  });
  
  
  
  
  //Password Incorrecto
  