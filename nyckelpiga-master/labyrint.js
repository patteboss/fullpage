// Allmäna variabler
var c, ctx, ladybug;

// Variabler för spelaren
var xPlayer = 1, yPlayer = 1, rotation = 0;

// Bana lagras i 2d-array
var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function run() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    // För att ladda in bilden
    ladybug = new Image();
    ladybug.src = "nyckelpiga-master/nyckelpiga.png";

    // Upprepa var 30ms
    ladybug.onload = function() {
        window.setInterval(gameLoop, 30);
    }
}

function gameLoop() {
    // Sudda canvas
    ctx.clearRect(0, 0, c.width, c.height);

    // Rita ut banan
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[j][i] == 1) {
                ctx.fillRect(i * 40, j * 40, 40, 40);
            }
        }
    }

    // Rita ut spelaren
    ctx.save();
    ctx.translate(xPlayer * 40 + 20, yPlayer * 40 + 20);
    ctx.rotate(rotation);
    ctx.drawImage(ladybug, -20,-20, 40, 40);
    ctx.restore();
}
    // Lyssna på tangentnedtryckningar
function keyDown(e) {
    switch (e.keyCode) {
        case 37: // Vänster
            if (map[yPlayer][xPlayer - 1] == 0)
                xPlayer--;
            rotation = 270*Math.PI/180;
            break;

        case 39: // Höger
            if (map[yPlayer][xPlayer + 1] == 0)
                xPlayer++;
            rotation = 90*Math.PI/180;
            break;

        case 38: // Upp
            if (map[yPlayer - 1][xPlayer] == 0)
                yPlayer--;
            rotation = 0;
            break;

        case 40: // Ned
            if (map[yPlayer + 1][xPlayer] == 0)
                yPlayer++;
            rotation = Math.PI;
            break;
    }
}

run();
