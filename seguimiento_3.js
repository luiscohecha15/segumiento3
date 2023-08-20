
// Luis Alfonso Cohecha Suarez
// Daniel Felipe Manjarres
/*
                                                                  //Primer punto Guia
 for (let i = 10; i >= 3; i--){
    console.log(i)
 }


                                                                  //Segundo punto Guia
for (let i = 1; i <= 6; i++){
    if(i!=3){
        console.log(i)
    }
    
 }


                                                                 //Tercer ejercicio
 name1 = "Luis";
console.log(`Bienvenido usuario ${name1}`)
let cost = 0
let selection1 = 0;
while(cost <= 0){
    cost = Number(prompt("Cual es el precio del apartamento:"))
}
do{
    selection1 = Number(prompt("Seleccione el tipo de inmueble: \n 1.Usado \n2.Nuevo"))
}while(selection1 !== 1 && selection1 !== 2)

switch(selection1){
    case 1:
        var comiInm = cost*0.1
        break;
    case 2:
        var comiInm = cost*0.2
        break;
}
alert(`El precio que recibe el propietario es de ${cost-comiInm}\nLo que recibe la inmoviliaria es ${comiInm}`)
alert(`Hasta la proxima ${name1}`)




                                                                  //Cuarto ejercicio

let count = Number(prompt("Cuantas prendas traes para el mismo servicio"))
let selection1 = 0;
let selection2 = 0;

do{
    selection1 = Number(prompt("Seleccione el tipo de servicio: \n1.Lavado \n2.Planchado"))
}while(selection1 !== 1 && selection1 !== 2)
if (selection1 === 1){
    do{
        selection2 = Number(prompt("Seleccione el tipo de lavado: \n 1.Seco \n 2.Normal"))
    }while(selection2 !== 1 && selection2 !==2)
    if (selection2 === 1){
        let val11 = count * 4000
        alert(`El precio total del servicio es de $${val11}`)

    }else if(selection2 === 2){
        let val12 = count * 3000
        alert(`El precio total del servicio es de $${val12}`)
    }
    
}else if(selection1 === 2){
    let val2 = (count * 2000) + 4000
    alert(`El precio total del planchado es de $${val2}, ya viene incluido los $4000 del domicilio`)
}else{
    alert('No se ha seleccionado ningun servicio')
}




                                                                 //Quinto ejercicio



let selection1 = 0
let selection2 = 0
let count = 0 
do{
    selection1 = Number(prompt("Seleccione el tipo de Sticker desea comprar: \n1.Pequeño \n2.Grande"))
}while(selection1 !== 1 && selection1 !== 2)
do{
    count = Number(prompt("Cuantos stickers desea comprar?"))
    if(count < 10){
        alert("El numero de stickers debe ser mayor a 10")
    }
}while(count < 10)
switch(selection1){
    case 1:
        let sticLittle = count * 4000
        alert(`El precio de los ${count} stickers pequeños es de $${sticLittle}`)
        break;
        
    case 2:
        let sticBig = count * 6000
        alert(`El precio de los ${count} stickers grandes es de $${sticBig}`)
        break;

}
    



                                                          //Sexto ejercicio

let selection1 = 0
let selection2 = 0
let count = 0 
let cost = 0
let adc = 0
do{
    selection1 = Number(prompt("Seleccione: \n1.Pizza \n2.Sandwiches \n3.Ensaladas"))
}while(selection1 !== 1 && selection1 !== 2 && selection1 !== 3)
do{
    selection2 = Number(prompt("Digite la cantidad del producto anteriormente seleccionado:"))
}while(selection2 <= 0)
do{
    adc = Number(prompt("Desea adicional de salsa? \n1.Sí \n2.No"))
}while(adc !== 1 && adc !== 2)
adc == 1 ? adc = 500 : adc= 0
switch(selection1){
    case 1:
         cost = (selection2 * 7000) + adc
        alert(`El costo total del pedido de pizza es de $${cost}`)
        break;
        
    case 2:
         cost = (selection2 * 5000) + adc
         alert(`El costo total del pedido de sandwiches es de $${cost}`)
         break;
         
    case 3:
        cost = (selection2 * 15000) + adc
        alert(`El costo total del pedido de ensaladas es de $${cost}`)
        break;
    default :
    alert('No se ha seleccionado ningun producto')
        break;
}



                                                            //Septimo ejercicio

let selection1 = 0
let selection2 = 0
let time = 0
let count = 0
let cost = 0
do{
    selection1 = Number(prompt("Seleccione: \n1.Devolución \n2.Perdida"))
}while(selection1 !== 1 && selection1 !== 2)
switch(selection1){
    case 1:
        do{
            time = Number(prompt(`Cuantos dias de retraso tiene:`))
        }while(time <= 0)
        do{
            selection2 = Number(prompt("Seleccione: \n1.Revista \n2.Libro"))
        }while(selection2 !== 1 && selection2 !== 2)
        if(selection2==1){
            cost = time * 500
            alert(`El total de la multa a pagar es de $${cost}`)
        }else{
            cost = time * 600
            alert(`El total de la multa a pagar es de $${cost}`)
        }
        break;
    case 2:
        do{
            count = Number(prompt("Cuantos libros ejemplares perdidos:"))
        }while(count <= 0)
        cost = count * 10000
        alert(`El total de la multa a pagar por perdida es de $${cost}`)
}




                                                        //Octavo ejercicio

let side1 = 0
let side2 = 0
let side3 = 0

do{
    side1 = Number(prompt("Digite el primer lado del triangulo: "))
}while(side1 <= 0)

do{
    side2 = Number(prompt("Digite el segundo lado del triangulo: "))
}while(side2 <= 0)

do{
    side3 = Number(prompt("Digite el tecer lado del triangulo: "))
}while(side3 <= 0)

if(side1 == side2 && side2 == side3){
    alert("El triangulo es equilatero")

}else{
    alert("El triangulo no es equilatero")
}



 
                                                            //Noveno ejercicio

let a = 0
let d = 0
let selection1 = 0
for(let i = 1; i <=10;i++){
    do{
        selection1 = Number(prompt(`Votante numero ${i} \nSeleccione su candidato\n1.Ana Maria Suarez\n2.Diego Acero`))
    }while(selection1 !== 1 && selection1 !== 2)

    if(selection1==1){
        a++
    }else{
        d++
    }
}
a > d ? alert(`Ana Maria Suarez ha ganado la votacion con ${a} votos`) : (a < d) ? alert(`Diego Acero la votacion con ${d} votos`): alert(`Empataron la votacion`)




                                                            //Decimo ejercicio

 let count = 0
 let count2 = 0
 let q1 = 0
 let q2 = 0
 let q3 = 0
 let q4 = 0
 let q5 = 0

 q1 =Number(prompt("Cuanto es 2+2 :"))
 if(q1 == 4){
    count += 10
    count2 ++
 }
 do{
    q2 =Number(prompt("Que color resulta de combinar el amarillo y el azul:\n1.Gris\n2.Rojo\n3.Verde"))
 if(q2 == 3){
    count += 10
    count2 ++
 }
 }while(q2 !== 1 && q2!==2 && q2!==3)
 
 q3 =Number(prompt("Cuanto es 2/2 :"))
 if(q3 == 1){
    count += 10
    count2 ++
 }
 q4 =Number(prompt("Cuanto es 2*2 :"))
 if(q4 == 4){
    count += 10
    count2 ++
 }
 do{
    q5 =Number(prompt("Que es mas rapido:\n1.La luz\n2.El sonido"))
 if(q5 == 1){
    count += 10
    count2 ++
 }
 }while(q5 !== 1 && q5!==2)
 

 alert(`Su puntaje es ${count} y el numero de respuestas acertadas fueron ${count2}`)




                                                            // Onceavo ejercicio

let costIni = 500
let cost = 0
let costw = 500
let selection = 0
let selection1 = 0
let selection2 = 0

do{
    selection = Number(prompt("Seleccione el tipo de pago: \n1.Moneda \n2.Billetes\nTenga en cuenta el sobrecargo de $500 del uso de la pesa"))
}while(selection !== 1 && selection !== 2)

switch(selection){

    case 1:
        do{
            selection1 = Number(prompt("Que moneda \n1. $500 \n2. $1000"))
        }while(selection !== 1 && selection !== 2)
        if(selection1==1){
            alert("Es justo el pago del servicio!")
        }else{
            alert(`Dinero suficiente, su devuelta es de $${1000 - costIni}`)
        }
        
    break;
    case 2:
        do{
            selection1 = Number(prompt("Que billete \n1. $2000 \n2. $5000"))
        }while(selection !== 1 && selection !== 2)
        if(selection1 == 1){
            alert(`Dienero suficiente para el pago, su devuelta es de $${2000 - costIni}`)
        }else{
            alert(`Dinero suficiente, su devuelta es de $${5000 - costIni}`)
        }

    break;

}
alert("¡Vuelve pronto!")



                                                               //Doceavo ejercicio

var equipos = [];
var resultados = [];

for (var i = 0; i < 3; i++) {
    var equipo = prompt("Ingrese el nombre del equipo " + (i + 1) + ":");
    equipos.push(equipo);
    
    var fechaResultados = [];
    for (var j = 0; j < 3; j++) {
        var resultado = parseInt(prompt("Ingrese el marcador para " + equipo + " en la fecha " + (j + 1) + ":"));
        fechaResultados.push(resultado);
    }
    resultados.push(fechaResultados);
}


var puntos = [0, 0, 0]; // Inicialización de puntos para los 3 equipos
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (resultados[i][j] > resultados[i][(j + 1) % 3]) {
            puntos[i] += 3; // Victoria
        } else if (resultados[i][j] === resultados[i][(j + 1) % 3]) {
            puntos[i] += 1; // Empate
        }
    }
}

var ranking = [];
for (var i = 0; i < 3; i++) {
    ranking.push({ equipo: equipos[i], puntos: puntos[i] });
}


ranking.sort(function(a, b) {
    return b.puntos - a.puntos;
});

console.log("Ranking de Equipos:");
for (var i = 0; i < 3; i++) {
    console.log((i + 1) + ". " + ranking[i].equipo + " - Puntos: " + ranking[i].puntos);
}






                                                               //Treceavo ejercicio

let selection = 0
let selection1

do{
    selection = Number(prompt("Seleccione el tipo de pago: \n1.Chevrolet \n2.mazda\n3.Renault"))
}while(selection !== 1 && selection !== 2 && selection !== 3)

switch(selection){
    case 1:
        do{
        selection1 = Number(prompt("Seleccione la referencia\n1.Captiva\n2.Tracker"))
        }while(selection1!== 1 && selection1!== 2)
        if(selection1 == 1){
            alert("Captiva: Color blanco perlado, $120.000.000, sí hay disponibilidad")
        }else{
            alert("Tracker: Color negro, $100.000.000, no hay disponibilidad")
        }
        break;
    case 2:
        do{
        selection1 = Number(prompt("Seleccione la referencia\n1.Modelo A\n2.Modelo B"))
        }while(selection1!== 1 && selection1!== 2)
        if(selection1 == 1){
            alert("Modelo A: color rojo, $90.000.000, sí hay disponibilidad")
        }else{
            alert("Modelo B: color rojo, $99.000.000, sí hay disponibilidad")
        }
        break;
    case 3:
        do{
        selection1 = Number(prompt("Seleccione la referencia\n1.Referencia X\n2.Reefencia Y"))
        }while(selection1!== 1 && selection1!== 2)
        if(selection1 == 1){
            alert("Referencia X: Color azul, precio $110.000.000, no hay disponiblidad")
        }else{
            alert("Referencia Y: Color azul, precio $115.000.000, sí hay disponiblidad")
        }
        break;
}



                                                            //Catorceavo ejercicio
let entrada = 0
entrada = Number(prompt("Ingrese el numero que desee para multiplicarlo 10 veces"))
for(i = 1; i<=10;i++){
    console.log(`${entrada} X ${i} = ${i*entrada}`)
} 


                                                        // Quintoavo Ejercicio
const filas = 10;
const columnas = 10;

// Patrón para las estrellas y las líneas
const patronEstrella = "* ".repeat(columnas);
const patronLinea = "= ".repeat(columnas);

// Generación del patrón
let salida = "";
for (let fila = 1; fila <= filas; fila++) {
    if (fila % 2 === 0) {
        salida += patronLinea + "\n";
    } else {
        salida += patronEstrella + "\n";
    }
}

// Imprimir la salida
console.log(salida);

*/