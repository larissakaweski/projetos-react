import { Component, Fragment } from "react";
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import "./App.css";

class App extends Component() {
  render() {
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
