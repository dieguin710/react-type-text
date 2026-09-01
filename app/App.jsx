import { useState } from "react";
import "./App.css";

function App (){
  const [nome, setNome] = useState("");
  const [nomeDigitado, setNomeDigitado] = useState ("");

  function handleNome(e) {
  e.preventDefault();
  if (!nome.trim()) return;
  setNomeDigitado(nome);
  setNome("");
}

  return (<>
  <div class="container">
    <h1>Formulario De Nome</h1>
  <form class="form" onSubmit={handleNome}>
    <input type="text"
      placeholder="Digite seu nome"
      value={nome}
      onChange={(e) => setNome(e.target.value)} />
    <button class="botao" type="submit">Enviar</button>
  </form>
  {nome && (
    <span>
      Digitando: <strong>{nome}</strong>
    </span>
  )}
  { nomeDigitado && (<span>
    Ultimo nome digitado: <strong>{nomeDigitado}</strong>
  </span> )}
  </div>
  </>
)


}
export default App;
