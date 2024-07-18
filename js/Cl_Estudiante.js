export default class Cl_Estudiante{
    constructor(cedula, nota){
        this.cedula=cedula;
        this.nota=+nota;
    }
    set cedula(c){
        this._cedula=+c;
    }
    get cedula(){
        return this._cedula;
    }
    set nota(n){
        this._nota=+n;
    }
    get nota(){
        return this._nota;
    }
}