export class Rutas{

    id: number;
    salida:String;
    llegada:String;
    tiempo:number;
    urlImg:String;


    constructor(id: number, salida: String, llegada: String, tiempo: number, urlImg: String) {
        this.id = id;
        this.salida = salida;
        this.llegada = llegada;
        this.tiempo = tiempo;
        this.urlImg = urlImg;
    }
}