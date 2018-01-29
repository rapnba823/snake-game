/**
* Clase para el manejo de la comida.
*/
class Food {
    constructor(pos) {
        this.color = '#FF0000';
        this.setPos(pos);
    }
    /**
    * Metodo para cambiar la posicion de la comida
    * @method setPos
    * @param {Object} pos - Tiene esta estructura { x, y }
    */
    setPos(pos) {
        this.x = pos.x;
        this.y = pos.y;
    }
    draw(context, step_length) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, step_length, step_length);
    }

    /**
    * Metodo para detectar colision de la serpiente con la comida
    * @method collision
    * @param {Object} snake - Ver objeto "Snake"
    * @return {Boolean}
    */
    collision(snake) {
        if (snake.head.x == this.x && snake.head.y == this.y) {
            return true;
        }
        return false;
    }
}