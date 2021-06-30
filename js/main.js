//Ingreso de seleccion de usuario 

let selectItem = prompt('Escoge un numero de producto'); 

//Constructor de objeto Producto ES6
class Producto {

	constructor(marca, modelo, id, precio){
		this.marca = marca;
		this.modelo = modelo;
		this.id = id; 
		this.precio = precio;
	}

	agregarItem(numeroItem){

		if(numeroItem == this.id){

			return 'Item: '+ this.marca +' '+ this.modelo + ' y su valor es: ARS '+ this.precio;
		}
	}

	ver() {
		console.log('El producto es: '+this.marca+' '+this.modelo+' y su valor es: ARS '+this.precio);
	}
}

//Variables definiendo los productos

let producto = new Producto('Nike', 'Kyrie-4', 1, 6500);
let producto2 = new Producto('Adidas', 'Harden-1', 2, 8900);
let producto3 = new Producto('Nike', 'Mamba Rage', 3, 8150);
let producto4 = new Producto('Adidas','Hoops', 4, 13000);


function seleccionarItem(numeroItem){

	switch (numeroItem) {
		case '1':
			alert(producto.agregarItem(numeroItem));
			break;
		case '2':
			alert(producto2.agregarItem(numeroItem));
			break;
		case '3':
			alert(producto3.agregarItem(numeroItem));
			break;
		case '4':
			alert(producto4.agregarItem(numeroItem));
			break;
		default:
			alert('El numero no coincide con un producto en stock');
			break;
	}
}

while (selectItem != 'esc') {
	
	seleccionarItem(selectItem);

	selectItem = prompt('Escoge un numero de producto');
}

//Se separan zapatillas por marca...

let zapatillasNike = [producto, producto3];

let zapatillasAdidas = [producto2, producto4]; 

console.log(zapatillasNike);
console.log(zapatillasAdidas);

//Concatenacion de Arrays

let zapatillas = zapatillasNike.concat(zapatillasAdidas);

console.log(zapatillas);




