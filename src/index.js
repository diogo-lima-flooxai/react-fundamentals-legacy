import React from "react";
import { createRoot } from "react-dom/client";
//import PrimeiroComponente from "./componentes/PrimeiroComponente";
// import CompA, { CompB as B } from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";
// import FamiliaSilva from "./componentes/FamiliaSilva";
// import Familia from "./componentes/Familia";
// import Membro from "./componentes/Membro";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
// import Pai from "./componentes/Pai";
// import ComponenteClasse from "./componentes/ComponenteClasse";
// import Contador from "./componentes/Contador";
import Hook from "./componentes/Hook";

const elemento = document.getElementById("root");
const root = createRoot(elemento);
root.render(
  <div>
    <Hook />
    {/* <Contador numeroInicial = {1000} /> */}
    {/* <ComponenteClasse valor="Sou um componente de Classe" /> */}
    {/* <Pai /> */}
    {/* <Familia sobrenome=" Silva" >
      <Membro nome="Rafael" />
      <Membro nome="Daniela" />
    </Familia> */}
    {/* <FamiliaSilva/> */}
    {/* <MultiElementos /> */}
    {/* <CompA valor="Olá eu sou A!" />
    <B valor="B na área!" />  */}
    {/* <PrimeiroComponente valor='Bom dia'/> */}
  </div>
);

// root.render(<ul> 
//   <l1>1 Pedro</l1>
//   <l1>2 Maria</l1>
//   <l1>3 Ana</l1>
// </ul>)
