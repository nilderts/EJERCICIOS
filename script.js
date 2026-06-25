function calcular(){
    let numero1;
    let numero2;
    let operacion;
    let resultado;

    numero1 = Number(
        document.getElementById("n1").value
    );

    numero2 = Number(
        document.getElementById("n2").value
    );

    operacion = document.getElementById("operacion").value;

    if(operacion == "suma"){
        resultado = numero1+numero2;
    }
    else if(operacion == "resta"){
        resultado = numero1-numero2;
    }
    else if(operacion == "multiplicacion"){
        resultado = numero1*numero2;
    }
    else if(operacion == "division"){
        resultado = numero1/numero2;
    }

    document.getElementById("resultado").innerHTML 
    = "Resultado: "+resultado;

}