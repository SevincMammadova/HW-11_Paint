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

    


module.exports = View;

// const root = document.querySelector('div#root');

// const canvas = document.createElement('canvas');
// canvas.setAttribute('class', 'canvas');
// canvas.setAttribute('height', '500px');
// canvas.setAttribute('width', '500px');
// root.append(canvas);

// const inputDiv = document.createElement('div');
// root.appendChild(inputDiv);

// const input = document.createElement('input');
// input.setAttribute('id', 'color');
// input.value = '00000';
// input.type = 'color';
// inputDiv.appendChild(input); 

// const rangeDiv = document.createElement('div');
// root.appendChild(rangeDiv);

// const range = document.createElement('input');
// range.setAttribute('id', 'range');
// range.type = 'range';
// rangeDiv.appendChild(range);

// const ctx = canvas.getContext('2d');

// let isPressed = false;
// let newColor = 'black';

// document.getElementById('color').oninput = function() {
//     newColor = this.value;
// }
// canvas.addEventListener('mousedown', () => {
//     isPressed = true;
// })

// canvas.addEventListener('mouseup', () => {
//     isPressed = false;
//     ctx.beginPath();
    
// })

// ctx.lineWidth = 10 * 2;
// canvas.addEventListener('mousemove', (e) => {
//     if(isPressed) {
//         ctx.lineTo(e.client, e.clientY);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(e.clientX, e.clientY, 10, 0, 2*Math.PI);
//         ctx.fillStyle = newColor;
//         ctx.fill();

//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY);
        
//     }
// })