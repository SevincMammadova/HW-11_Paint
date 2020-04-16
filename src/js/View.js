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