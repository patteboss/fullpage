// Allmäna variabler
var c, ctx, ladybug;

// Figurens position
var xPos, yPos, rotation = 0;

function run() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    // För att ladda in bilden
    ladybug = new Image();
    ladybug.src = "nyckelpiga.png";

    // Figurens ursprungsläge
    xPos = c.width / 2;
    yPos = c.height / 2;

    // Upprepa var 30ms
    window.setInterval(gameLoop, 30);
}

function gameLoop() {
    // Sudda bort allt
    ctx.clearRect(0, 0, c.width, c.height);

    // Rita ut figuren
    ctx.save();
    ctx.translate(xPos, yPos);
    ctx.rotate(rotation);
    ctx.drawImage(ladybug, -50, -50);
    ctx.restore();
}

// Lyssna på tangentnedtryckningar
function keyDown(e) {
    switch(e.keyCode) {
        case 37: // Vänster
            xPos -= 5;
            rotation = 270*Math.PI/180;
            if (xPos < 0)
                xPos = c.width;
            break;

        case 39: // Höger
            xPos += 5;
            rotation = 90*Math.PI/180;
            if (xPos > c.width)
                xPos = 0;
            break;

        case 38: // Upp
            yPos -= 5;
            rotation = 0;
            if (yPos < 0)
                yPos = c.height;
            break;

        case 40: // Ned
            yPos += 5;
            rotation = Math.PI;
            if (yPos > c.height)
                yPos = 0;
            break;
    }
}
