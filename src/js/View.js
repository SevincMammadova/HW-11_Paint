function View() {
    this._root = document.querySelector('div#root');
    this._canvas = null;
    this._ctx = null;
    this._colorInput = null;

    this.init();
}

const createInput = (id, type, min, max, step) => {
    const wrapper = document.createElement('div');

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', type);

    // value && (input.value = value);
    min && (input.min = min);
    max && (input.max = max);
    step && (input.step = step);
    wrapper.append(input);

    return wrapper;
}

const createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'canvas');
    canvas.setAttribute('height', '500px');
    canvas.setAttribute('width', '1000px');

    this._ctx = canvas.getContext('2d');

    return canvas;
}

View.prototype.init = function() {
    this._canvas = createCanvas();
    const colorInput = createInput('color', 'color');
    const rangeInput = createInput('range', 'range','0','50', '1');

    this._root.append(this._canvas);
    this._root.append(colorInput);
    this._root.append(rangeInput);
}

View.prototype.getCanvasContext = () => {
    return this._ctx;
}

View.prototype.onCanvasClick = function(callback) {
    this._canvas.addEventListener('click', function(event) {
        const { layerX, layerY } = event;
        callback(layerX, layerY);
    })
}

View.prototype.onMouseDown = function(callback) {
    this._canvas.addEventListener('mousedown', function(event) {
        const { layerX, layerY } = event;
        callback(layerX, layerY);
    })
}

View.prototype.onMouseUp = function(callback) {
    this._canvas.addEventListener('mouseup', function() {
        callback();
    })
}

View.prototype.onMouseMove = function(callback) {
    this._canvas.addEventListener('mousemove', function(event) {
        const { layerX, layerY } = event;
        callback(layerX, layerY);
    })
}


module.exports = View;