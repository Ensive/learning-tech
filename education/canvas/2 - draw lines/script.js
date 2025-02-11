/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('hello-world-canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 10;
context.moveTo(0, 0);
context.lineTo(130, 70);
context.stroke();
