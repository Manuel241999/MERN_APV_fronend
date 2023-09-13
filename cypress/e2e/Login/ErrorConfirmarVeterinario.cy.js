/// <reference types="cypress"/>

const token = '1h9r20h5f6kaapf3irh';

  describe("Administrador de Citas", () => {
    it("Inicio de sesion", () => {
      cy.visit(`http://localhost:5173/confirmar/${token}`);
  
      cy.get('.from-red-400').invoke("text").should("equal", "Token no valido");
      cy.get('.from-red-400').should("have.class", "to-red-600");

    });
  });
  