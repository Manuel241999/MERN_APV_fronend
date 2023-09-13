/// <reference types="cypress"/>
const validUser = {
    emai: 'manuel@manuel.com',
    password: '123456',
}

describe("Administrador de Citas", () =>{
    it("Inicio de sesion", () => {

        let alertMessage = null;
    cy.on('window:alert', (message) => {
      alertMessage = message;
    });
        
        cy.visit("http://localhost:5173");

        cy.get(':nth-child(1) > .border').type(validUser.emai)
        
        cy.get(':nth-child(2) > .border').type(validUser.password)
        
        cy.get('.bg-indigo-700').click()
        cy.wait(5000);
        //Editar paciente

        cy.get(':nth-child(9) > .flex > .bg-indigo-600').click()
        cy.wait(5000);
        //Limpia los input
        cy.get('#nombre').clear()
        cy.get('#propietario').clear()
        cy.get('#email').clear()
        cy.get('#fecha').clear() 
        cy.get('#sintomas').clear()
        cy.wait(5000);
        //Agrega la nueva información
        cy.get('#nombre').type('ZEUS')
        cy.get('#propietario').type('Darcy')
        cy.get('#email').type('orgullo@gmail.com')
        cy.get('#fecha').type('2023-09-09') 
        cy.get('#sintomas').type('Lele pancha jejejeje')
        cy.wait(5000);
        cy.get('.bg-white > .bg-indigo-600').click()
        //Verifica si se agrego correctamente
        cy.get('.from-indigo-400', { timeout: 4000 }).should('be.visible');
    })
})