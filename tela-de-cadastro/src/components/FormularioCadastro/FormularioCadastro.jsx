import React from "react";

function FormularioCadastro() {
  return (
    <form>
      <label>Nome</label>
      <input type="text"></input>
      <label>Sobrenome</label>
      <input type="text"></input>
      <label>CPF</label>
      <input type="text"></input>
      <label>Promoções</label>
      <input type="checkbox"></input>
      <label>Novidades</label>
      <input type="text"></input>
      <button>Cadastrar</button>
    </form>
  );
}
