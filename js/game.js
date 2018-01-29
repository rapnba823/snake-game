class Game {
    constructor() {
        if (this.init()) {
            this.board = new Board(this.canvas);
        }
    }
    /**
     * Comprueba que se pueda utilizar el canvas.
     * @method init
     */
    init() {
        this.canvas = document.getElementById('board');
        if (this.canvas.getContext) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Representa cada iteracion en el ciclo del juego.
     * @method frame
     */
    frame() {
        this.board.refreshDrawing();
        if (this.board.food.collision(this.board.snake)) {
            this.board.food.setPos(this.board.generateRandomPos());
            this.board.snake.grow();
        } else if (this.board.collision() || this.board.snake.collision()) {
            this.finish();
        }

        this.board.snake.movement();
    }
    /**
     * Configura e inicia el ciclo del juego.
     * @method run
     */
    run() {
        var self = this;
        self.cycle = setInterval(function () {
            self.frame();
        }, 100);
    }
    /**
     * Se ejecuta cuando el jugador pierde,
     * por ende se reinicializa el juego, y se
     * vuelve a invocar el ciclo principal.
     * @method finish
     */
    finish() {
        clearInterval(this.cycle);
        alert('Colisionnnnnnnnnnnnnnnnn');
        this.board = new Board(this.canvas);
        this.run();
    }
}