/// <reference types="cypress"/>

describe("Administrador de Citas", () => {
  it("Inicio de sesion", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[href="/registrar"]').click();

    //Usuario ya registrado

    cy.get(":nth-child(1) > .border").type("NuevoVeterinario3");
    cy.get(":nth-child(2) > .border").type("nuevo3@nuevo.com");
    cy.get(":nth-child(3) > .border").type("123456");
    cy.get(":nth-child(4) > .border").type("123456");

    cy.get(".bg-indigo-700").click();

    //Seleccionar Alerta y verificas
    cy.get(".from-red-400")
      .invoke("text")
      .should("equal", "Usuario ya registrado");

    //Verificamos que la alerta tenga el css rojo
    cy.get(".from-red-400").should("have.class", "to-red-600");

    cy.wait(10000);

    // Todos los campos son obligatorios
    cy.get(":nth-child(1) > .border").clear();
    cy.get(":nth-child(2) > .border").clear();

    cy.get(".bg-indigo-700").click();
    //Seleccionar Alerta y verificas
    cy.get(".from-red-400").invoke("text").should("equal", "Hay campos vacios");

    //Verificamos que la alerta tenga el css rojo
    cy.get(".from-red-400").should("have.class", "to-red-600");

    cy.wait(10000);

    //Contraseña demaciado corta:
    cy.get(":nth-child(3) > .border").clear();
    cy.get(":nth-child(4) > .border").clear();

    cy.get(":nth-child(1) > .border").type("NuevoVeterinario32");
    cy.get(":nth-child(2) > .border").type("nuevo32@nuevo.com");
    cy.get(":nth-child(3) > .border").type("12345");
    cy.get(":nth-child(4) > .border").type("12345");

    cy.get(".bg-indigo-700").click();

    //Contraseñas no coiciden:
    cy.get(".from-red-400").invoke("text").should("equal", "El password es muy corto, agrega minimo 6 caracteres");

    //Verificamos que la alerta tenga el css rojo
    cy.get(".from-red-400").should("have.class", "to-red-600");

    cy.wait(10000);

    //Contraseña demaciado corta:
    cy.get(":nth-child(1) > .border").clear();
    cy.get(":nth-child(2) > .border").clear();
    cy.get(":nth-child(3) > .border").clear();
    cy.get(":nth-child(4) > .border").clear();

    cy.get(":nth-child(1) > .border").type("NuevoVeterinario32");
    cy.get(":nth-child(2) > .border").type("nuevo32@nuevo.com");
    cy.get(":nth-child(3) > .border").type("123456");
    cy.get(":nth-child(4) > .border").type("12345");

    cy.get('.bg-indigo-700').click();

 
    cy.get(".from-red-400").invoke("text").should("equal", "Los Password no son iguales");
    cy.get(".from-red-400").should("have.class", "to-red-600");

  });
});

