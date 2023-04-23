let variableSinValor;

let booleano1 = true;

let booleano2 = false;

const PI = 3.14;

const TAU = 2*PI;

var booleanoAnd = booleano1 == booleano2;

var booleanoNot = !booleano1;

var booleanoMix0 = (booleano1 || booleano2) && (booleano1 || !booleano1 && !booleano2);

var incrementarDesp = 3;

var resultadoDesp =+ 2;

var incrementarAntes = 3;

var resultadoAntes =+ incrementarAntes;

var contarHasta10_2 = 0;

for(let i = 0; i < 10; i++) {
    contarHasta10_2++;
}

var postI = 0;

var postJ = 0;

for(let i = 0; i < 11; i++) {
    postI = postI+postJ++;
}

var sumaPares = 0;

for(let i = 0; i < 10; i++) {
    if(i%2 == 0) {
        sumaPares = sumaPares+i;
    }
}

let variableValorNumerico = 1;

const MiNombre = "Santi";

const MiNumeroFav = 13;

var booleanoOr = Boolean(!booleano1 == booleano2);

var booleanoMix1 = Boolean(booleano1 && TAU/2 == PI | variableValorNumerico >= MiNumeroFav);

var seisNoEsNueve = null;

if(6 === 9) {
    seisNoEsNueve = false;
} else {
    seisNoEsNueve = true
}

var booleanoMix2 = null;

if(variableValorNumerico < MiNumeroFav * TAU) {
    booleanoMix2 = true;
} else {
    booleanoMix2 = false;
}

var valorSuma = MiNumeroFav+variableValorNumerico;

var valorResta = MiNumeroFav-variableValorNumerico;

var valorMultiplicacion = MiNumeroFav*variableValorNumerico;

var valorDivision = MiNumeroFav/3;

var contarHasta10 = 0;

while(contarHasta10 !== 10) {
    contarHasta10++;
}

var preI = 0;

var preJ = 0;

for(let i = 0; i < 11; i++) {
    preI = preI+ ++ preJ;
}

var sumaImpares = 0;

for(let i = 0; i < 10; i++) {
    if(i%2 != 0) {
        sumaImpares = sumaImpares+i;
    }
}