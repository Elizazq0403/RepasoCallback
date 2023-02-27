//Datos semilla

let nombres=['Paloma Petro','Alvaro Cepeda','Polo Inverso','Juanpis Gonzalez']
let sexos=['0','1']
let senadores=[] //arreglos se nombran en plural

for(let i=0; i<20; i++){
    let senador={}
    //llenando 1 objeto senador con una funcion que ingresa datos aleatorios
    senador.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    senador.sexo=sexos[Math.floor(Math.random()*sexos.length)] 
    senador.voto=Math.floor(Math.random()*1000)

   //agregando el objeto SENADOR al arreglo SENADORES

    senadores.push(senador)// se le aplica push es al arreglo // arreglo senadores

}

//1- declando la funcion ppal filtrar mujeres senadoras con mas de 250 votos

function filtrarMujeres (senadores, callback){ //nombre la funcion y los parametros requeridos
    setTimeout(function(){            // método setTimeout()          
        let senadoras = senadores.filter(function(senador){    //(function(senador) es una funcion anonima y la variable auxiliar es (senador) // (senador)
            return (senador.sexo=='0' && senador.voto>250) // retorna la condicion requerida sexo mujer '0' y 
        }) // variable auxiliar (senador)
        callback(senadoras) //llamada al callback con parametro la variable senadoras - Hasta este punto se declara la funcion principal y se llama al callback
    },10000)// despues de 10 segundos sumar las edades de las mujeres filtradas
}


// El método setTimeout() establece un temporizador que ejecuta una función o una porción de código después de que transcurre un                                          tiempo establecido, en este caso 10000 ms 

// (senador) es la variable auxiliar y por vuelta almacena temporalente o en esa vuelta la informacion del objeto senador (uno solo) y asi puedo extraer la informacion que necesito ya que no puedo extraerla la de todos a la vez, en este caso se va sacando la sacaando la cantidad de votos de cada uno para el final hacer otra funcion que las sume todas y poder saber el total.

//let senadoras almacena el resultado del filtrado 

//2- Llamar a la funcion principal

filtrarMujeres(senadores, function(senadoras){ //aca decimos que hace el callback (senadoras)
    let sumaVotos= 0
    senadoras.forEach(function(senadora){ // Con el Forech recorro el arreglo y por cada vuelta en la variable auxiliar (senadora) almaceno el objeto senadora 
        sumaVotos = sumaVotos + senadora.voto // para obtener asi la propiedad voto y tener el resultado en la variable suma votos
    })
    console.log(`El total de votos del sexo femenino del pacto democratico fue: ${sumaVotos} votos`)
})

// paramatros: arreglo SENADORES (para este caso 20 senadores generados aleatoriamente) declarado en la zona global y NO se coloca la palabra CALLCACK pero si hay que definir el CALLBACK, aca definimos una funcioon anonima (funcion secundaria)

// para sumar los elementos de un arreglo utiizo un Forech que tiene adentro una funcion anonima para decir como funciona y dentro de esta hay una variable auxiliar 