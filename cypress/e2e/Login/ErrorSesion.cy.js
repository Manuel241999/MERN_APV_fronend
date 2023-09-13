/// <reference types="cypress"/>

const validUser = {
  email: "manuel@manuel.com",
  password: "123456",
  emailError:"manuel@XD.com",
  passwordError:"123",
  emailNoExiste:"chayanne@chayanne.com",
  passwordNoExiste:"123456",
};

describe("Administrador de Citas", () => {
  it("Inicio de sesion", () => {
    cy.visit("http://localhost:5173/");

    //Todos los campos obligatorios

    cy.get(":nth-child(2) > .border").type(validUser.password);

    cy.get(".bg-indigo-700").click();

    //Seleccionar Alerta y verificas
    cy.get('.from-red-400')
    .invoke('text')
    .should('equal','Todos los Campos son Obligatorios')

     //Verificamos que la alerta tenga el css rojo
     cy.get('.from-red-400')
    .should('have.class','to-red-600')

    cy.wait(10000);

    //Usario no existe
    cy.get(':nth-child(1) > .border').type(validUser.emailNoExiste)
  
    cy.get(':nth-child(2) > .border').type(validUser.passwordNoExiste)

    cy.get('.bg-indigo-700').click()

    //Seleccionar Alerta y verificas
    cy.get('.from-red-400')
    .invoke('text')
    .should('equal','El usuario no existe')

     //Verificamos que la alerta tenga el css rojo
     cy.get('.from-red-400')
    .should('have.class','to-red-600')

    cy.wait(10000);


    //Password Incorrecto

    cy.get(':nth-child(1) > .border').clear()
  
    cy.get(':nth-child(2) > .border').clear()

    cy.get(':nth-child(1) > .border').type(validUser.email)
  
    cy.get(':nth-child(2) > .border').type(validUser.passwordError)

    cy.get('.bg-indigo-700').click()

    //Seleccionar Alerta y verificas
    cy.get('.from-red-400')
    .invoke('text')
    .should('equal','El password es incorrecto!')

     //Verificamos que la alerta tenga el css rojo
     cy.get('.from-red-400')
    .should('have.class','to-red-600')

    cy.wait(10000);

    //Usuario no autenticado:
    cy.get(':nth-child(1) > .border').clear()
  
    cy.get(':nth-child(2) > .border').clear()

    cy.get(':nth-child(1) > .border').type('nuevo2@nuevo.com')
  
    cy.get(':nth-child(2) > .border').type('123456')

    cy.get('.bg-indigo-700').click()

    //Seleccionar Alerta y verificas
    cy.get('.from-red-400')
    .invoke('text')
    .should('equal','Tu Cuenta no ha sido confirmada')

     //Verificamos que la alerta tenga el css rojo
     cy.get('.from-red-400')
    .should('have.class','to-red-600')
    

  });
});




//Password Incorrecto
