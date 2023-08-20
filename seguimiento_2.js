/*

const machine = true
const cookies = 1000
const soda = 2000

if (machine == true){
    var cash = parseInt(prompt("Cuanto dinero desea ingresar a la maquina: "))
    if (cash >=0){
        var selection = Number(prompt("Digite 1 para seleccionar las galletas, seleccione 2 para elegir la gaseosa"))
        if(selection == 1 || selection == 2){
            if(selection == 1 && cash >= cookies){
                alert(`Su compra de las galletas fue exitosa!, esta es su devuelta $`+ (cash - cookies))
            }else if(selection == 1 && cash <= cookies){
                alert("Su compra fue denegada, saldo insuficiente...")
            }else if(selection == 2 && cash >= soda){
                alert(`Su compra de las gaseosa fue exitosa!, esta es su devuelta $`+ (cash - soda))
            }else{
                alert("Su compra fue denegada, saldo insuficiente..")
            }
        }else{
            alert("La seleccion no es valida...")
        }
    }else{
        alert(`${cash} no es un valor valido mayor a 0...`)
    }
}else{
    alert("No está encendida la maquina...")
}

*/
/*
const mount = 25000
const machine = true
const password = "1234"

if (machine == true){
    var selection = Number(prompt("Digite 1 si quiere retirar dinero, 2 para consignar dinero, 3 para consultar saldo"))
    if (selection == 1){
        var cashout = Number(prompt("Cuanto dinero desea retirar:"))
        if (cashout <= mount){
            var pass = prompt("Digite la contraseña para continuar con la operacion:")
            if (pass == password){
                alert("Retiro exitoso!, su nuevo saldo es: "+ (mount - cashout))
            }else{
                alert("Retiro denegado!, contraseña invalida...")
            }
        }else{
            alert("No posee fondo suficientes para este retiro!")
        }
    }else if (selection == 2){
        const cashin = Number(prompt("Cuanto dinero desea consginar a su cuenta:"))
        if (cashin > 0){
            alert("El dinero se ha consignado correctamente, su nuevo saldo es de $"+(mount + cashin))
        }else{
            alert("El monto a consignar es invalido, debe ser mayor a 0")
        }
    }else if (selection == 3){
        alert("Su saldo actual es de $"+ mount)
    }else{
        alert("Ha seleccionado incorrectamente...")
    }
}else{
    alert("La maquina está apagada")
}
*/