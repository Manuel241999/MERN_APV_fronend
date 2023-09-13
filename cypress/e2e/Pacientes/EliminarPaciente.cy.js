/// <reference types="cypress"/>
const validUser = {
    emai: 'manuel@manuel.com',
    password: '123456',
}

describe("Administrador de Citas", () =>{
    it("Inicio de sesion", () => {

        
        cy.visit("http://localhost:5173");

        cy.get(':nth-child(1) > .border').type(validUser.emai)
        
        cy.get(':nth-child(2) > .border').type(validUser.password)
        
        cy.get('.bg-indigo-700').click()
        cy.wait(5000);
        //Editar paciente

        cy.get(':nth-child(8) > .flex > .bg-red-600').click()
        cy.wait(5000);

    })
})