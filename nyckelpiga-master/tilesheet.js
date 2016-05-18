// Inställningar för banan
var c, ctx;
var mapIndexOffset = -1;
var mapRows = 15;
var mapCols = 15;


//Skapar en tom bild
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

//förbereder ritytan i webbläsaren, dvs canvas
function run() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    tileSheet.addEventListener('load', drawScreen, false);
    tileSheet.src = "tanks_sheet.png";
}

//ritar ut alla rutor enligt arrayen
function drawScreen() {
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
