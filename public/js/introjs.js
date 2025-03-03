// consola (log, info, warn, error, assert)
console.log("Aquí se habla de plantas");
console.info("las plantas sirven para muchas cosas");
console.warn("Cuidado con las plantas venenosas");
console.error("No las vayas a ahogar");
console.assert(1 == 1);
console.assert(1 === 1);
console.assert(1 == "1");
console.assert(1 === "1");
console.assert(1 == true);
console.assert(1 === true);

// variables, constantes
var comestible = "espinaca"; //forma antigua de declarar variables

let flor = "rosa"; //forma moderna de declarar variables

const precio = 99.99;

// Alcance de las variables
for (let i = 0; i < 10; i++) {
    console.log(i);
    var mi_planta = "eucalipto";
}
console.log(mi_planta);


// alert, prompt, confirm
alert("hola");

const mi_planta_favorita = prompt("¿Cuál es tu planta favorita?");

const is_hungry = confirm("¿Tienes hambre?");

// funciones tradicionales
function regar(){
    console.log("Se regaron las plantas");
    return mi_planta_favorita;
}

regar();


// funciones modernas
() => {}  //Esto es una función anónima

//asignar una función anónima a la variable mi_funcion
const mi_funcion = () => {
    console.log("función anónima");
};

//Ejecuta la función anónima por medio del nombre de la variable
mi_funcion();


// arreglos

const arreglo = ["Elemento"];

const arreglo2 = new Array() 

arreglo.push("Otro elemento");

arreglo[10] = "Uno más";

arreglo[0] = "Elemento modificado";

//arreglos asociativos

arreglo["uno"] = 1;

//recorrido tradicional del arreglo

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo

for(let posicion in arreglo) {
    console.log(posicion);
}

for(let valor of arreglo) {
    console.log(valor);
}


//Objetos

const objeto = {}; 

objeto.color = "verde";
objeto.tipo = "orquídea";


// modificar html
const boton = document.getElementById("boton_regar");

const poner_imagen_menta = () => {
    const imagen = document.getElementById("imagen_menta");
    imagen.innerHTML = `<img alt="Foto de una planta de menta" 
        src="https://media.admagazine.com/photos/618a61cc51ab72df0a764124/3:2/w_3024,h_2016,c_limit/83664.jpg">`;
};

const poner_imagen_jacaranda = () => {
    const imagen = document.getElementById("imagen_jacaranda");
    imagen.innerHTML = `<img alt="Foto de una jacaranda" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7AcS5-bieXHv-N386kQ3gddYZCOpyHZIxg&s">`;
};

const poner_imagen_maqui = () => {
    const imagen = document.getElementById("imagen_maqui");
    imagen.innerHTML = `<img alt="Foto de una maqui" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VLwIEcNZLW0IchCAxc0HvvM3_vHsbBZ4Bw&s">`;
};

const regar_plantas = () => {
    poner_imagen_menta();
    poner_imagen_jacaranda();
    poner_imagen_maqui();
    boton.textContent = "Cortar";
    boton.onclick = cortar_plantas;
};

const cortar_plantas = () => {
    const imagen_tierra = 
        "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,w_1296,h_400/prod/build/shop/images/blog/aprender/que-sustrato-para-planta-elegir/banner_seo_2400x485_3.633751ed.jpg";
    
    document.getElementById("imagen_menta").innerHTML = 
        `<img alt="Foto de tierra" 
        src="${imagen_tierra}">`;
    
    document.getElementById("imagen_maqui").innerHTML = 
        `<img alt="Foto de tierra" 
        src="${imagen_tierra}">`;

    document.getElementById("imagen_jacaranda").innerHTML = 
        `<img alt="Foto de tierra" 
        src="${imagen_tierra}">`;

    boton.textContent = "Regar";
    boton.onclick = regar_plantas;
}

boton.onclick = regar_plantas;