class Canvas2DUtility {
    constructor(canvas) {
        this.canvasElement = canvas;
        this.context2d = canvas.getContext('2d');
    }

    get canvas() { return this.canvasElement; }
    get context() { return this.context2d; }

    drawRect(x, y, width, height, color) {
        if (color != null) {
            this.context2d.fillStyle = color;
        }
        this.context2d.fillRect(x, y, width, height);
    }

    drawLine(x1, y1, x2, y2, color, width = 1) {
        if (color != null) {
            this.context2d.strokeStyle = color;
        }
        this.context2d.lineWidth = width;
        this.context2d.beginPath();
        this.context2d.moveTo(x1, y1);
        this.context2d.lineTo(x2, y2);
        this.context2d.closePath();
        this.context2d.stroke();
    }

    drawText(text, x, y, color, width) {
        if (color != null) {
            this.context2d.fillStyle = color;
        }
        this.context2d.fillText(text, x, y, width);
    }

    imageLoader(path, callback) {
        let target = new Image();
        target.addEventListener('load', () => {
            if (callback != null) {
                callback(target);
            }
        }, false);
        target.src = path;
    }
}