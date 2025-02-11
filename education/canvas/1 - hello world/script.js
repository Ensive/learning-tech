/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('hello-world-canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(5, 0, 50, 50);

context.fillStyle = 'yellow';
context.fillRect(200, -25, 50, 80);
