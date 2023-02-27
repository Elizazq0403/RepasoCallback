console.log(Math.pow(1,1)); //1 -1°, se ejecuta pow y le 1 a console log y pinta el primer numero que es 1 
setTimeout(function () {console.log(2)},0); //2 - se ejecuto en 0 milisegundos, tiene un leve retraso 
    console.log(3); //3 - sale despues del 1 ya no tiene codigo asincrono
    var interval=setInterval(function(){
        console.log(4); //4
        setTimeout(function(){
            console.log(5); //5
    },500);
},1000)
setTimeout(function(){
clearInterval(interval);
console.log(6); //6
},1000)
console.log(7); //7

1//
3//
7//
2//

// setInterval indica que se debe incluir el callback en la cola cada 1000 milisegundo, por eso estos numeros se imprimen con retraso
4//
6//
5//