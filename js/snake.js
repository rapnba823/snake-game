/**
 * Clase para manejar la serpiente.
 */
class Snake {
    /**
     * 
     * @param {Object} pos - coordenadas {x,y} es la posicion inicial de la serpiente.
     * @param {Integer} step_length - representa el tamaño de los cuadros que conforman cada parte del cuerpo de la serpiente.
     */
    constructor(pos, step_length) {
        this.head = {
            x: 0,
            y: 0
        };
        this.body = new Array();
        this.color = '#0000FF';
        this.step_length = step_length;
        this.setPos(pos);
        this.x_direction = this.step_length;
        this.y_direction = 0;
    }
    /**
     * Funcion para hacer crecer a la serpiente.
     * @method grow
     */
    grow() {
        this.body.push({
            x: this.head.x,
            y: this.head.y
        });
    }
    /**
     * Cambia la posicion de toda la serpiente (cabeza y cuerpo),
     * utilizando la nueva coordena de posicion de su cabeza
     * (parametro pos).
     * @method setPos
     * @param {Object} pos - nueva posicion {x,y}
     */
    setPos(pos) {
        if (this.body.length > 0) {
            for (var i = 0; i < this.body.length - 1; i++) {
                this.body[i] = this.body[i + 1];
            }

            this.body[i] = {
                x: this.head.x,
                y: this.head.y
            };
        }
        this.head.x = pos.x;
        this.head.y = pos.y;        
    }
    /**
     * Dibuja la serpiente.
     * @method draw
     * @param {Object} context 
     */
    draw(context) {
        context.fillStyle = this.color;
        for (let part of this.body) {
            context.fillRect(part.x, part.y, this.step_length, this.step_length);
        }
        context.fillRect(this.head.x, this.head.y, this.step_length, this.step_length);
    }
    /**
     * Detecta colisiones de la serpiente consigo misma.
     * @method collision
     */
    collision() {
        for(let part of this.body) {
            if(part.x == this.head.x && part.y == this.head.y) {
                return true;
            }
        }
        return false;
    }
    /**
     * Genera la nueva posicion de la serpiente.
     * @method movement
     */
    movement() {
        this.setPos({
            x: this.head.x + this.x_direction,
            y: this.head.y + this.y_direction
        });
    }
    /**
     * Cambia la direccion de la serpiente, segun la tecla
     * que presione el usuario.
     * @method move
     * @param {Object} e - JavaScript event object.
     */
    move(e) {
        switch (e.keyCode) {
            case 38:
                //arriba
                if (this.y_direction == 0) {
                    this.y_direction = - (this.step_length);
                    this.x_direction = 0;
                }

                break;
            case 40:
                //abajo
                if (this.y_direction == 0) {
                    this.y_direction = this.step_length;
                    this.x_direction = 0;
                }
                break;
            case 39:
                //derecha
                if (this.x_direction == 0) {
                    this.x_direction = this.step_length;
                    this.y_direction = 0;
                }
                break;
            case 37:
                //izquierda
                if (this.x_direction == 0) {
                    this.x_direction = - (this.step_length);
                    this.y_direction = 0;
                }
                break;
            default:
                break;
        }
    }
}