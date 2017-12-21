export class Carga{

    id:number;
    tipoCarga:String;
    cantidad:number;


    constructor(id: number, tipoCarga: String, cantidad: number) {
        this.id = id;
        this.tipoCarga = tipoCarga;
        this.cantidad = cantidad;
    }
}