import React from "react";
import { createRoot } from "react-dom/client";
//import PrimeiroComponente from "./componentes/PrimeiroComponente";
import CompA, { CompB as B } from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";

const elemento = document.getElementById("root");
const root = createRoot(elemento);
root.render(
  <div>
    {/* <MultiElementos /> */}
    <CompA valor="Olá eu sou A!" />
    <B valor="B na área!" /> 
    {/* <PrimeiroComponente valor='Bom dia'/> */}
  </div>
);

// root.render(<ul> 
//   <l1>1 Pedro</l1>
//   <l1>2 Maria</l1>
//   <l1>3 Ana</l1>
// </ul>)
