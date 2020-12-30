class Vehiculo{
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    getMarca(){
        return this.marca;
    }
    getModelo(){
        return this.modelo;
    }
    getPrecio(){
        return this.precio;
    }
    getFormatoPrecio(){
        let formatoPrecio = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        });
        let precioFormateado = formatoPrecio.format(this.getPrecio());
        for(let i = 0; i < precioFormateado.length; i++){
            if(precioFormateado[i] === ','){
                precioFormateado = precioFormateado.substring(0, i)+ '.' + precioFormateado.substring(i+1);
            }else if(precioFormateado[i] === '.'){
                precioFormateado = precioFormateado.substring(0, i)+ ',' + precioFormateado.substring(i+1);;
            }
        }
        return precioFormateado;
    }
    getInfoVehiculo(){
        return "";
    }
    getMarcaYModelo(){
        return `${this.getMarca()} ${this.getModelo()}`;
    }
}

class Auto extends Vehiculo{
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    getPuertas(){
        return this.puertas;
    }
    
    getInfoVehiculo(){
        return `Marca: ${this.getMarca()} // Modelo: ${this.getModelo()} // Puertas: ${this.getPuertas()} // Precio: ${this.getFormatoPrecio()}`
    }
}

class Moto extends Vehiculo{
    constructor(marca, modelo, precio, cilindrada){
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }
    
    getCilindrada(){
        return this.cilindrada;
    }
    
    getInfoVehiculo(){
        return `Marca: ${this.getMarca()} // Modelo: ${this.getModelo()} // Cilindrada: ${this.getCilindrada()}cc // Precio: ${this.getFormatoPrecio()}`
    }
}

const cargarVehiculos = () =>{
    const vehiculos = []
    const auto1 = new Auto('Peugeot', "206", 200000.00, 4);
    vehiculos.push(auto1);
    const moto1 = new Moto('Honda', 'Titan', 60000.00, 125);
    vehiculos.push(moto1);
    const auto2 = new Auto('Peugeot', '208', 250000.00, 5);
    vehiculos.push(auto2);
    const moto2 = new Moto('Yamaha', 'YBR', 80500.50, 160);
    vehiculos.push(moto2);

    return vehiculos;
}

const conseguirCaro = (listaVehiculos) =>{
    let valorActual = 0;
    let vehiculoActual = "";
    for(let i= 0; i < listaVehiculos.length; i++){
        if(listaVehiculos[i].getPrecio() > valorActual){
            vehiculoActual = listaVehiculos[i].getMarcaYModelo();
            valorActual = listaVehiculos[i].getPrecio();
        }
    }
    return `Vehículo más caro: ${vehiculoActual}`;
}

const conseguirBarato = (listaVehiculos) =>{
    let valorActual = 99999999999;
    let vehiculoActual = "";
    for(let i= 0; i < listaVehiculos.length; i++){
        if(listaVehiculos[i].getPrecio() < valorActual){
            vehiculoActual = listaVehiculos[i].getMarcaYModelo();
            valorActual = listaVehiculos[i].getPrecio();
        }
    }
    return `Vehículo más barato: ${vehiculoActual}`;
}

const modeloConY = (listaVehiculos) =>{
    let vehiculoY = "";
    for(let i = 0; i< listaVehiculos.length; i++){
        if(listaVehiculos[i].getModelo().toLowerCase().includes('y')){
            vehiculoY = `${listaVehiculos[i].getMarcaYModelo()} ${listaVehiculos[i].getFormatoPrecio()}`
        }
    }
    return `Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoY}`;
}

const vehiculosDeMayorAMenor = (listaVehiculos) =>{
    let nuevaLista = listaVehiculos.sort((a, b)=> (a.getPrecio() < b.getPrecio()) ? 1 : -1)
    let finalString = `Vehículos ordenados por precio de mayor a menor:`;
    for(let i = 0; i < nuevaLista.length; i++){
        finalString = `${finalString}
${nuevaLista[i].getMarcaYModelo()}`
    }
    return finalString;
}

const vehiculos = cargarVehiculos();

vehiculos.forEach(elem =>{
    console.log(elem.getInfoVehiculo());
})
console.log('=============================');
console.log(conseguirCaro(vehiculos));
console.log(conseguirBarato(vehiculos));;
console.log(modeloConY(vehiculos));;
console.log('=============================');
console.log(vehiculosDeMayorAMenor(vehiculos));