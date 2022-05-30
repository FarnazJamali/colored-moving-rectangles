//* factory function

function creatRectangle(x, y, r, g, b) {
    return {
        x,
        y,
        r,
        g,
        b,
        produce() {
            let rect1 = document.createElement('div');
            rect1.style.width = this.x / 5 + 'px';
            rect1.style.height = this.y / 6 + 'px';
            rect1.style.top = this.x + 100 + 'px';
            rect1.style.left = this.y + 100 + 'px';
            rect1.style.position = 'absolute';
            rect1.style.margin = 20 + 'px';
            rect1.style.display = 'inline-block';
            rect1.style.backgroundColor = `rgb(${r},${g},${b})`;

            document.body.appendChild(rect1);
        }
    }
}

//* produce rectangles
for (let i = 0; i < 50; i++) {
    let r = Math.round((Math.random()) * 255);
    let g = Math.round((Math.random()) * 255);
    let b = Math.round((Math.random()) * 255);

    let x = Math.round((Math.random()) * (window.innerWidth - 50));
    let y = Math.round((Math.random()) * (window.innerHeight - 50)) + 60;

    creatRectangle(x, y, r, g, b).produce();
}

//* add an event listener
let move = document.getElementsByTagName('div');
for (const rect1 of move) {
    rect1.addEventListener('mouseover', moveUp);
}

function moveUp(event) {
    let anotherX = Math.floor(Math.random() * (window.innerWidth / 1.5));
    let anotherY = Math.floor(Math.random() * (window.innerHeight / 1.5));
    let element = event.target;
    element.style.top = anotherX + 'px';
    element.style.left = anotherY + 'px';
}