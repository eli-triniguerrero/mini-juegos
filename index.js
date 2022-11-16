/* DETECTAR EL CANVAS CON JAVASCRIPT
- crear variable canvas por medio del ID
- la variable CTX para manipular el canvas

 */

window.onload = function() {
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if(ctx) {
            alert("BIENVENIDOS AL CANVAS");
        } else {
            alert("ERROR AL CREAR CONTEXTO");
        }
    }
}