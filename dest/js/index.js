(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Controller(view, model) {
    this._view = view;
    this._model = model;
}

Controller.prototype.init = function() {
    this._model.init();
    this._view.init();

    view.drawing();

};





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
}

View.prototype.init = function() {
    const container = createDiv( {
        class: 'container',
        id: 'container',
    });

    const container__paint = createDiv({
        class: 'container__paint',
    });

    const container__input = createDiv({
        class: 'container__input',
    });
    
    const input__color = createInput({
        class: 'input__color',
        type: 'color',
    });

    const input__range = createInput({
        class: 'input__range',
        type: 'range',
    })

    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'paint__canvas');
    canvas.setAttribute('id', 'canvas')
    canvas.setAttribute('height', '500px');
    canvas.setAttribute('width', '500px');

    container__paint.append(canvas);
    container__input.append(input__color);
    container__input.append(input__range);
    container.append(container__paint);
    container.append(container__input);

    this._root.append(container);
}

const createDiv = params => {
    const div = document.createElement('div');
    div.setAttribute('class', params.class);
    params.id && (div.id = params.id);
    params.title && (div.title = params.title);
    params.inner && (div.innerHTML = params.inner);
    params.textContent && (div.textContent = params.textContent);

    return div;
}

const createInput = arguments => {
    const input = document.createElement('input');
    input.setAttribute('class', arguments.class);
    arguments.id && (input.id = arguments.id);
    arguments.type && (input.type = arguments.type);

    return input;
}

View.prototype.drawing = function() {
    const paint = document.getElementById('canvas');
    const ctx = getContext('2d');
    let isPressed = false;
    paint.addEventListener('mousedown', () => {
    isPressed = true;
    });

    paint.addEventListener('mouseup', () => {
    isPressed = false;
    });

    paint.addEventListener('mousemove', (e) => {
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, 2* Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    });
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
