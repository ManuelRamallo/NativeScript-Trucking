export class Camiones{



    //Atributos de la clase independientes
    id:number;
    marca:String;
    altura:number;
    peso:number;

    //Atributo de la clase dependiente

    //Rutas
    //Carga


    constructor(id: number, marca: String, altura: number, peso: number) {
        this.id = id;
        this.marca = marca;
        this.altura = altura;
        this.peso = peso;
    }
}