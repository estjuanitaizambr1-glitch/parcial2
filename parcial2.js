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

    // Caso especial: un solo punto
    if (x0 === x1 && y0 === y1) {
        drawPixel(ctx, x0, y0, color);
        return;
    }

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
/**
 * Dibuja una circunferencia usando el algoritmo de punto medio.
 * (Definición inicial de la función)
 * @param {number} cx - Centro X
 * @param {number} cy - Centro Y
 * @param {number} r - Radio
 * @param {string} color - Color
 * @returns {void}
 */
function drawCircle(cx, cy, r, color = "#000000") {

    // Variables base del algoritmo
    let x = 0;
    let y = r;

    /**
     * Parámetro de decisión inicial:
     *  * p < 0 → el punto medio está dentro del círculo
     * p >= 0 → el punto medio está fuera
     * Define si el siguiente punto cae dentro o fuera de la circunferencia ideal
     */
    let p = 1 - r;
    /**
     * Se dibujan los 8 puntos simétricos
     * para evitar cálculos redundantes
     */
    function drawSymmetricPoints(cx, cy, x, y) {
        drawPixel(ctx, cx + x, cy + y, color);
        drawPixel(ctx, cx - x, cy + y, color);
        drawPixel(ctx, cx + x, cy - y, color);
        drawPixel(ctx, cx - x, cy - y, color);
        drawPixel(ctx, cx + y, cy + x, color);
        drawPixel(ctx, cx - y, cy + x, color);
        drawPixel(ctx, cx + y, cy - x, color);
        drawPixel(ctx, cx - y, cy - x, color);
    }

    // Dibujar los puntos iniciales
    drawSymmetricPoints(cx, cy, x, y);

    while (x < y) {
        x++;

        /**
         * Actualización del parámetro de decisión:
         * Caso 1: p < 0 → se elige el punto Este
         * Caso 2: p >= 0 → se elige el punto Sureste
         */
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * (x - y) + 1;
        }

        drawSymmetricPoints(cx, cy, x, y);
    }
}
/**
 * Calcula los vértices de un polígono regular.
 * @param {number} centerX, centerY - Centro
 * @param {number} sides - Número de lados
 * @param {number} radius - Radio
 * @returns {Array} Arreglo de objetos {x, y}
 */
function getPolygonVertices(centerX, centerY, sides, radius) {
    // Desarrollo del estudiante (Uso de Math.sin/Math.cos y retorno de datos)
     let vertices = [];

    for (let i = 0; i < sides; i++) {

        /**
        * Ángulo central del polígono en radianes
        */
        let angle = (2 * Math.PI * i) / sides;

        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);

        vertices.push({ x, y });
    }

    return vertices;
}
/**
 * Genera un número aleatorio entero entre min y max
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
