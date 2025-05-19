import React from "react";
import { createRoot } from "react-dom/client";
import PrimeiroComponente from "./componentes/PrimeiroComponente";

const elemento = document.getElementById("root");
const root = createRoot(elemento);
root.render(
  <div>
    <PrimeiroComponente />
  </div>
);

// root.render(<ul>
//   <l1>1 Pedro</l1>
//   <l1>2 Maria</l1>
//   <l1>3 Ana</l1>
// </ul>)
