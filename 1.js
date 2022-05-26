//* factory function
let r = Math.round((Math.random()) * 255);
let g = Math.round((Math.random()) * 255);
let b = Math.round((Math.random()) * 255);

let x = Math.round((Math.random()) * 200);
let y = Math.round((Math.random()) * 200);

function creatRectangle(x, y, r, g, b) {
    return {
        x,
        y,
        r,
        g,
        b,
        produce() {
            let rect1 = document.createElement('div');
            rect1.style.width = this.x * 2 + 'px';
            rect1.style.height = this.y * 2 + 'px';
            rect1.style.top = this.x + 'px';
            rect1.style.left = this.y + 'px';
            rect1.style.position = 'absolute';
            rect1.style.display = 'inline-block';
            rect1.style.backgroundColor = `rgb(${r},${g},${b})`;

            document.body.appendChild(rect1);
        }
    }
}

let intervalRect = setInterval(function () {
    creatRectangle(x, y, r, g, b).produce();

    x -= Math.random() * 10;
    y -= Math.random() * 3;
    r += Math.random() / 2;
    g += Math.random() * 4;
    b += Math.random() + 10;
    if (x < 0) {
        clearInterval(function () {
            creatRectangle(x, y, r, g, b).produce();
        })
    }
}, 500)