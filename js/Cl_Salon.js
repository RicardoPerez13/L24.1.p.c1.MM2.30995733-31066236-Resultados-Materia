export default class Cl_Salon{
    constructor(){
    this.cont_aprobados=0;
    this.cont_total=0;
    this.aux_ced=0;
    this.cedula_mejor=0;
    }
    
procesar(e){
    this.cont_total++;
    if(e._nota>= 48){ 
        this.cont_aprobados++;
         }
    if(e._nota> this.aux_ced){
        this.aux_ced =  e._nota;
        this.cedula_mejor = e._cedula;
    }
}
porcAprobados(){
    return (this.cont_aprobados/this.cont_total)*100;
}
devolvercontador(){
    return this.cont_total;
}
devolvercedula_mejor(){
    return this.cedula_mejor;
}
}
