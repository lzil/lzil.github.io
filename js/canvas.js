$(document).ready(function() {
	var c = document.getElementById("actCanvas");
	var ctx = c.getContext("2d");

	ctx.font = "30px Maven Pro";
	

	var numberOfSides = 8,
    smallSize = 25,
    largeSize = 40;
	makeLine(50, 50, 150, 50);
	makeLine(350, 50, 450, 50);
	makeLine(450, 50, 550, 50);
	makeLine(550, 50, 650, 50);
	makeLine(650, 50, 750, 50);

    makeActivity(50, 50);
    
    makeActivity(150, 50);
    
    makeActivity(350, 50);
    
    makeActivity(450, 50);
    
    makeActivity(550, 50);
    
    makeActivity(650, 50);
    
    makeActivity(750, 50);

    ctx.fillStyle = '#ffffff'
    ctx.fillText("i", 45, 60);
    ctx.fillText("m",135, 60);
    ctx.fillText("l",345, 60);
    ctx.fillText("i",445, 60);
    ctx.fillText("a",540, 60);
    ctx.fillText("n",640, 60);
    ctx.fillText("g.",740, 60);
	function makePoly(x, y, numSides, size, strokeColor, fillColor) {
		ctx.beginPath();
		ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          

		for (var i = 1; i <= numSides;i += 1) {
		    ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / numSides), y + size * Math.sin(i * 2 * Math.PI / numSides));
		}

		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = 1;
		ctx.fillStyle = fillColor;
		ctx.fill();
		ctx.stroke();
	}

	function makeActivity(x, y) {
		makePoly(x, y, 7, largeSize, '#ee8888', '#ee8888')
    	makePoly(x, y, 5, smallSize, '#aa4444', '#aa4444')
	}

	function makeLine(x1, y1, x2, y2) {
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
	}
});