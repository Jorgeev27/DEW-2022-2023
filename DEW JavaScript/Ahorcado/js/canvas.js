/* Dibujar el ahorcado. */
var canvas, context, canvaso, contexto;
canvaso = document.getElementById('imageView');
context = canvaso.getContext('2d');
context.lineWidth = 5;

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(256, 286);
context.lineTo(253, 74);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(252, 72);
context.lineTo(352, 72);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(349, 69);
context.lineTo(349, 101);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(214, 283);
context.lineTo(309, 285);
context.stroke();
context.closePath();