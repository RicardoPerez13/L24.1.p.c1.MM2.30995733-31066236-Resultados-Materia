/*Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Porcentaje de aprobados: 75%
Cédula de uno de los mejores estudiantes: 333*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Salon from "./Cl_Salon.js";

let estudiante1=new Cl_Estudiante (888, 60);
let estudiante2=new Cl_Estudiante (777, 50);
let estudiante3=new Cl_Estudiante (999, 40);
let estudiante4=new Cl_Estudiante (333, 90);
let estudiante5=new Cl_Estudiante (111, 30);
let estudiante6=new Cl_Estudiante (666, 90);
let estudiante7=new Cl_Estudiante (444, 48);
let estudiante8=new Cl_Estudiante (222, 60);

let salon=new Cl_Salon();
salon.procesar(estudiante1);
salon.procesar(estudiante2);
salon.procesar(estudiante3);
salon.procesar(estudiante4);
salon.procesar(estudiante5);
salon.procesar(estudiante6);
salon.procesar(estudiante7);
salon.procesar(estudiante8);

let salida=document.getElementById("salida");
salida.innerHTML="Resultados del Salon de Clases";
salida.innerHTML+="<br> El número de estudiantes es de: "+salon.devolvercontador();
salida.innerHTML+="<br> El porcentaje de Aprobados es de: "+salon.porcAprobados().toFixed(2)+"%";
salida.innerHTML+="<br> La cedula del mejor estudiante es: "+salon.devolvercedula_mejor();
