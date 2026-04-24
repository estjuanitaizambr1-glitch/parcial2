/**
 * Universidad Militar Nueva Granada- Ingeniería en Multimedia
 * Asignatura: Introducción a la Computación Gráfica
 * Estudiante: Juanita Isabel Zambrano Maldonado
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
/**
 * Dibuja un píxel en pantalla
 * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
 * @param {number} x - Coordenada X
 * @param {number} y - Coordenada Y
 * @param {string} color - Color del píxel
 * @returns {void}
 */
function drawPixel(ctx, x, y, color = "#000000") {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), 1, 1);
}
/**
 * Implementación del algoritmo de Bresenham para líneas.
 * @param {number} x0, y0 - Coordenadas iniciales
 * @param {number} x1, y1 - Coordenadas finales
 * @param {string} color - Color
 * @returns {void}
 */
function bresenhamLine(x0, y0, x1, y1, color = "#000000") {
    // Desarrollo del estudiante
}