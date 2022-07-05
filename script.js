function agregarNumeroUno() {
    document.querySelector('.pantalla').innerText += '1'
}
function agregarNumeroDos() {
    document.querySelector('.pantalla').innerText += '2'
}
function agregarNumeroTres() {
    document.querySelector('.pantalla').innerText += '3'
}
function agregarNumeroCuatro() {
    document.querySelector('.pantalla').innerText += '4'
}
function agregarNumeroCinco() {
    document.querySelector('.pantalla').innerText += '5'
}
function agregarNumeroSeis() {
    document.querySelector('.pantalla').innerText += '6'
}
function agregarNumeroSiete() {
    document.querySelector('.pantalla').innerText += '7'
}
function agregarNumeroOcho() {
    document.querySelector('.pantalla').innerText += '8'
}
function agregarNumeroNueve() {
    document.querySelector('.pantalla').innerText += '9'
}
function Cero() {
    document.querySelector('.pantalla').innerText += '0'
}
function limpiar() {
    document.querySelector('.pantalla').innerText = ''
}
function Suma() {
    document.querySelector('.pantalla').innerText += '+'
}
function Resta() {
    document.querySelector('.pantalla').innerText += '-'
}
function Multiplicacion() {
    document.querySelector('.pantalla').innerText += '*'
}
function Division() {
    document.querySelector('.pantalla').innerText += '/'
}
function Punto() {
    document.querySelector('.pantalla').innerText += '.'
}
function Porcentaje() {
    document.querySelector('.pantalla').innerText += '%'
}
function Igual() {
    let resultado = document.querySelector('.pantalla').innerText
    console.log(resultado)
    console.log(eval(resultado))
    document.querySelector('.pantalla').innerText = eval(resultado)
}