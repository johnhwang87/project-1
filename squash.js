$(document).ready(function(){

//below code is for timer and end spawn time
var counter = 64;
var begin = setInterval(function(){
    startTime()
}, 1000);
function startTime() {
    if(counter ===0){
        clearInterval(begin);
        clearInterval(gameOver);
        clearInterval(gameOver1);
    }
    else {
        counter--;
    }
    document.getElementById('counter').innerHTML = counter;
}

//below code starts the game with 60 bugs
 for(var i=0; i<81; i++) {
           $('#canvas').append("<div class='bug'></div>")
    }




//below code spawns a bug every .2 seconds
var gameOver = setInterval(function() {
    $('#canvas').append("<div class='bug'></div>")
}, 200);

var gameOver1 = setInterval(function () {
    $('#canvas').append("<div class='bug2'></div>")
}, 5000);

//below code gets random coordinates
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}


//bug squash mechanic
// var squash = function () {
//     $('.bug')collision('.keys')
//     if('')
//$('.bug').css("background", "url(http://4.bp.blogspot.com/-jTCP2eKcFf8/UPg04K-xW_I/AAAAAAAAX-s/DPUElojOXzA/s400/red%2Bsplat.png)"")
// }

setInterval(function (){
    function moveRandom(obj) {

    // get container position and size
    var keyboardPos = $('#keyboard').offset();
    var keyboardHeight = $('#keyboard').height();
    var keyboardWidth = $('#keyboard').width();

    // set maximum position
    maxY = keyboardPos.top + keyboardHeight;
    maxX = keyboardPos.left + keyboardWidth;

    // set minimum position
    minY = keyboardPos.top;
    minX = keyboardPos.left;

    // set new position
    newY = randomFromTo(minY, maxY);
    newX = randomFromTo(minX, maxX);

    obj.animate({
        top: newY,
        left: newX
        }, 5000, function() {
  moveRandom(obj);
    });
}

$('.bug').each(function() {
    moveRandom($(this));
});
$('.bug2').each(function () {
    moveRandom($(this));
});
}, 100);

// event.target?!?!?


});

//below codes detect keyboard input
function keyInput1 () {
    $(document).keydown(function(h) {
        if (h.keyCode > 64 && h.keyCode < 91) {
            var e = String.fromCharCode(h.keyCode).toLowerCase()
            $("#"+e).css("color", "red")
        }
    });
}
keyInput1();

function keyInput2 () {
    $(document).keyup(function(j) {
        if (j.keyCode > 64 && j.keyCode < 91) {
            var f = String.fromCharCode(j.keyCode).toLowerCase()
            $("#"+f).css("color", "white")
        }
    });
}
keyInput2();
