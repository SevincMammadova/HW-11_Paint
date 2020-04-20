(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    this._view.changeColoring(this.changeColor.bind(this));
    this._view.changeSize(this.changeWidth.bind(this));
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

Controller.prototype.changeWidth = function(width) {
    this._width = width; 
}

Controller.prototype.changeColor = function(color) {
    this._color = color; 
}

module.exports = Controller;
},{}],2:[function(require,module,exports){
function Model() {
    
}

Model.prototype.init = function () {

}


module.exports = Model;
},{}],3:[function(require,module,exports){
function View() {
    this._root = document.querySelector('div#root');
    this._canvas = null;
    this._ctx = null;
    this._colorInput = null;
    this._rangeInput = null;

    this.init();
}

const createInput = (id, type, min, max, step) => {
    const wrapper = document.createElement('div');

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', type);

    input.value = '';
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
    this._colorInput = createInput('color', 'color');
    this._rangeInput = createInput('range', 'range','0','50', '1');

    this._root.append(this._canvas);
    this._root.append(this._colorInput);
    this._root.append(this._rangeInput);
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

View.prototype.changeColoring = function(cb) {
    this._colorInput.addEventListener('change', function (event) {
        
         cb(event.target.value);
   }) 
}

View.prototype.changeSize = function(cb) {
    this._rangeInput.addEventListener('change', function (event) {
        
        cb(event.target.value);
  }) 
}

module.exports = View;
},{}],4:[function(require,module,exports){
const Model = require("./Model.js");
const View = require("./View.js");
const Controller = require("./Controller.js");

function initProject() {
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);

    controller.init();
}

initProject();
},{"./Controller.js":1,"./Model.js":2,"./View.js":3}]},{},[4]);
