/// <reference types="cypress"/>

const token = '1h9r20h5f6kaapf3irh';

  describe("Administrador de Citas", () => {
    it("Inicio de sesion", () => {
      cy.visit(`http://localhost:5173/confirmar/${token}`);
  
      cy.get('.from-indigo-400').invoke("text").should("equal", "Usuario confirmado Correctamente");
      cy.get('.from-indigo-400').should("have.class", "to-indigo-600");

      cy.wait(5000)

      cy.get('.block').click()

    });
  });
  