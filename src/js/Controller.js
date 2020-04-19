function Controller(model, view) {
    this._model = model;
    this._view = view;
    this._isPressed = false;
    this._ctx = null;
    this._color = '';
    this._width = 0;

    this._x = 0;
    this._y = 0;
}

Controller.prototype.init = function() {
    this._ctx = this._view.getCanvasContext();
    this._view.onMouseDown(this.startDraw.bind(this));
    this._view.onMouseUp(this.stopDraw.bind(this));
    this._view.onMouseMove(this.isMouseDraw.bind(this));
}

Controller.prototype.startDraw = function(x, y) {
    this._isPressed = true;
    
    this._ctx.strokeStyle = this._color;
    this._ctx.lineWidth = this._width;
    this._ctx.lineCap = 'round';

    this._ctx.beginPath();
    this._ctx.moveTo(x, y);

    this._x = x;
    this._y = y;
}

Controller.prototype.stopDraw = function() {
    this._isPressed = false;
}

Controller.prototype.isMouseDraw =function(x,y) {
    if (this._isPressed) {
        this._ctx.lineTo(x, y);
        this._ctx.stroke();
        this._ctx.moveTo(x, y);

        this._addLine(x, y);

        this._x = x;
        this._y = y;
    }
}

Controller.prototype._addLine = function(x, y) {
    const line = {
        start: { x: this._x, y: this._y },
        end: { x, y},
    }

    return line;
}

Controller.prototype.changeWidth = function() {
    
}

Controller.prototype.changeColor = function() {
    this._color = this.value;
}

module.exports = Controller;