export const Calculadora = () => {
    "use strict"
    const dato1 = document.querySelector("#dato1"),
        dato2 = document.querySelector("#dato2"),
        btnSumar = document.querySelector("#sumar"),
        btnRestar = document.querySelector("#restar"),
        btnMultiplicar = document.querySelector("#multiplicar"),
        btnDividir = document.querySelector("#dividir"),
        Res = document.querySelector("#res");
    const sumar = () => dato1.value * 1 + dato2.value * 1

    const restar = () => dato1.value * 1 - dato2.value * 1

    const multiplicar = () => dato1.value * 1 * dato2.value * 1

    const dividir = () => dato1.value * 1 / dato2.value * 1;

    const vaciorVariables = () => {
        dato1.value = "";
        dato2.value = "";
    }
    const inicializarRes = () => {
        Res.innerText = "";
    }
    const Temporizador = () => {
        setTimeout(() => {
            inicializarRes();
        }, 2000);
    }

    btnSumar.addEventListener("click", () => {
        (dato1.value == "" && dato2.value == "")
            ? alert("Debe ingresar valores")
            : (dato1.value == "") ? alert("Debe ingresar el dato 1")
                : (dato2.value == "") ? alert("Debe ingresar el dato 2")
                    : (dato2.value != "" && dato1.value != "") ? alert("La suma de los datos es : " + sumar(), Res.innerText = sumar(), vaciorVariables()) : 1
        Temporizador();
    });
    btnRestar.addEventListener("click", () => {
        (dato1.value == "" && dato2.value == "")
            ? alert("Debe ingresar valores")
            : (dato1.value == "") ? alert("Debe ingresar el dato 1")
                : (dato2.value == "") ? alert("Debe ingresar el dato 2")
                    : (dato2.value != "" && dato1.value != "") ? alert("La resta de los datos es : " + restar(), Res.innerText = restar(), vaciorVariables()) : 1
        Temporizador();
    });
    btnMultiplicar.addEventListener("click", () => {

        (dato1.value == "" && dato2.value == "")
            ? alert("Debe ingresar valores")
            : (dato1.value == "") ? alert("Debe ingresar el dato 1")
                : (dato2.value == "") ? alert("Debe ingresar el dato 2")
                    : (dato2.value != "" && dato1.value != "") ? alert("La multiplicacion de los datos es : " + multiplicar(), Res.innerText = multiplicar(), vaciorVariables()) : 1
        Temporizador();
    });
    btnDividir.addEventListener("click", () => {
        (dato1.value == "" && dato2.value == "")
            ? alert("Debe ingresar valores")
            : (dato1.value == "") ? alert("Debe ingresar el dato 1")
                : (dato2.value == "") ? alert("Debe ingresar el dato 2")
                    : (dato2.value == 0) ? alert("No puede hacer una division por 0")
                        : (dato2.value != "" && dato1.value != "") ? alert("La division de los datos es : " + dividir(), Res.innerText = dividir(), vaciorVariables()) : 1
        Temporizador();
    });

}