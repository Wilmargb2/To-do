//Importamos el Nav y lo renderizamos en su div correspondiente del html del main
import { Nav } from "../shared/nav/nav.js";
document.getElementById("NavId").innerHTML = Nav();

//Importamos el App y lo renderizamos en su div correspondiente del html del main
import { App } from "../app/app.js";
document.getElementById("AppId").innerHTML = App();