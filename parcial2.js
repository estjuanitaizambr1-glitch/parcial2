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

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);

    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;
  /**
     * Parámetro de decisión
     * Controla el error acumulado de la recta
     */
    let err = dx - dy;
     while (true) {

        drawPixel(ctx, x0, y0, color);

        if (x0 === x1 && y0 === y1) break;

        let e2 = 2 * err;

        /**
         * Ajuste en X
         */
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }

        /**
         * Ajuste en Y
         */
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}