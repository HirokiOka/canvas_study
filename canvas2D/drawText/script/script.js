window.addEventListener('load', () => {
    initialize();
    render();
}, false);

function initialize() {
    canvas = document.body.querySelector('#main_canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
}

function render() {
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#666666';
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    const POINT_COUNT = 5;
	let points = [];
	for (let i = 0; i < POINT_COUNT; i++) {
		points.push(generateRandomInt(300), generateRandomInt(300));
	}
	drawPolygon(points, '#119900');
    ctx.font = 'bold 30px cursive';
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'start';
    drawText('Graphics Programming', 100, 100, '#ff00aa', 300);
    
}

function drawText(text, x, y, color, width) {
    if (color != null) {
        ctx.fillStyle = color;
    }
    ctx.fillText(text, x, y, width);
}

function drawPolygon(points, color) {
	if (Array.isArray(points) !== true || points.length < 6) {
		return;
	}
	
	if (color != null) {
		ctx.fillStyle = color;
	}
	
	ctx.beginPath();
	
	ctx.moveTo(points[0], points[1]);
	
	for (let i = 2; i < points.length; i += 2) {
		ctx.lineTo(points[i], points[i + 1]);
	}
	
	ctx.closePath();
	
	ctx.fill();
}

function generateRandomInt(range) {
	return Math.floor(Math.random() * range);
}