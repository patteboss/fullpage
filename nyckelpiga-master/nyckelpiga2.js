// Allmäna variabler
var c, ctx;

// Figurens position
var ladybug, xPos, yPos, rotation = 0;


var mapIndexOffset = -1;
var mapRows = 15;
var mapCols = 15;
var tileMap = [
    [32, 31, 31, 31, 1, 31, 31, 31, 31, 32, 31, 31, 31, 31, 32]
   , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 32,]
   , [32, 1, 26, 1, 26, 1, 26, 1, 1, 32, 1, 26, 1, 1, 32]
   , [32, 26, 1, 1, 1, 1, 1, 1, 1, 32, 1, 26, 1, 1, 32]
   , [32, 1, 1, 1, 26, 26, 1, 26, 1, 1, 1, 1, 1, 1, 32]
   , [32, 1, 1, 26, 1, 1, 1, 1, 1, 32, 1, 1, 1, 1, 32]
   , [32, 1, 1, 1, 1, 1, 1, 26, 1, 32, 1, 26, 1, 1, 32]
   , [1, 1, 26, 1, 26, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1]
   , [32, 1, 1, 1, 1, 1, 1, 1, 1, 32, 1, 26, 1, 1, 32]
   , [32, 1, 1, 1, 26, 1, 1, 26, 1, 1, 1, 1, 26, 1, 32]
   , [32, 1, 1, 1, 1, 1, 1, 26, 1, 1, 26, 1, 1, 1, 32]
   , [32, 1, 26, 1, 26, 1, 1, 26, 1, 1, 1, 1, 1, 1, 32]
   , [32, 1, 1, 1, 1, 1, 1, 1, 1, 26, 1, 1, 26, 1, 32]
   , [32, 1, 1, 1, 1, 26, 1, 26, 1, 1, 1, 1, 1, 1, 32]
   , [32, 31, 31, 31, 1, 31, 31, 31, 31, 32, 1, 26, 1, 1, 32]

   ];
var tileSheet = new Image();



function run() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    // För att ladda in bilden
    ladybug = new Image();
    ladybug.src = "nyckelpiga.png";

    // Figurens ursprungsläge
    xPos = c.width / 2;
    yPos = c.height / 2;

    tileSheet.src = "tanks_sheet.png";

    // Upprepa var 30ms
    window.setInterval(gameLoop, 30);
}

function drawlabyrint() {
    for (var rowCtr = 0; rowCtr < mapRows; rowCtr++) {
        for (var colCtr = 0; colCtr < mapCols; colCtr++) {
            var tileId = tileMap[rowCtr][colCtr] + mapIndexOffset;
            var sourceX = Math.floor(tileId % 8) * 32;
            var sourceY = Math.floor(tileId / 8) * 32;
            ctx.drawImage(tileSheet, sourceX,
                sourceY, 32, 32, colCtr * 32, rowCtr * 32, 32, 32);
        }
    }
}

function gameLoop() {
    // Sudda bort allt
    ctx.clearRect(0, 0, c.width, c.height);

    drawlabyrint();

    // Rita ut figuren
   ctx.save();
    ctx.translate(xPos * 32 + 16, yPos * 32 + 16);
    ctx.rotate(rotation);
    ctx.drawImage(ladybug, -16, -16, 32, 32);
    ctx.restore();
}

// Lyssna på tangentnedtryckningar
function keyDown(e) {
    switch(e.keyCode) {
        case 37: // Vänster
            if (tileMap[yPos][xPos - 1] == 1)
            xPos--;
            rotation = 270*Math.PI/180;

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
