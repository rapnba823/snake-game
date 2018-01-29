class Board {
    /**
     * Inicializa el tablero de juego.
     * @param {Object} canvas 
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.step_length = 10;
        this.x_ramdon_limit = (canvas.width / this.step_length) - 1;
        this.y_ramdon_limit = (canvas.height / this.step_length) - 1;
        this.food = new Food(this.generateRandomPos());
        this.snake = new Snake({
            x: 200, y: 200
        }, this.step_length);

        var self = this;
        document.getElementsByTagName('body')[0].addEventListener('keydown', function (e) {
            self.snake.move(e);
        });
    }
    /**
     * Limpia el tablero de juego.
     * @method clear
     */
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * Genera una posición aleatoria dentro de los limites del 
     * tablero de juego.
     * @method generateRandomPos
     */
    generateRandomPos() {
        return {
            x: Math.floor(Math.random() * this.x_ramdon_limit) * this.step_length,
            y: Math.floor(Math.random() * this.y_ramdon_limit) * this.step_length
        };
    }
    /**
     * Dibuja el estado actual del tablero y todos los elementos
     * que este contiene (comida y serpiente).
     * @method refreshDrawing
     */
    refreshDrawing() {
        this.clear();
        this.food.draw(this.context, this.step_length);
        this.snake.draw(this.context);
    }
    /**
     * Detecta si la serpiente choco con alguna
     * de las paredes del tablero.
     * @method collision
     */
    collision() {
        if (this.snake.head.x < 0 || this.snake.head.y < 0) {
            return true;
        }
        if (this.snake.head.x > this.canvas.width || this.snake.head.y > this.canvas.height) {
            return true;
        }
        return false;
    }

}