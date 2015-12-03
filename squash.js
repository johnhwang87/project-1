$(document).ready(function(){
//below code is for timer and end spawn time
var counter = 64;
var begin = setInterval(function(){
    startTime();
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
    document.getElementById('counter').innerHTML = "time:" +counter;
}

//
var scoreboard = 0;
var start = setInterval(function(){
    startScore();
    }, 100)
function startScore() {

    document.getElementById('scoreboard').innerHTML = "score:" +scoreboard;
}
//



//below code starts the game with 80 bugs
 for(var i=0; i<81; i++) {
           $('#canvas').append("<div class='bug'></div>")
    }

//below code spawns a bug every .4 seconds
var gameOver = setInterval(function() {
    $('#canvas').append("<div class='bug'></div>")
    // $('#spawner').append("<div class='bug'></div>")
}, 400);

var gameOver1 = setInterval(function () {
    $('#canvas').append("<div class='bug2'></div>")
}, 5000);

//below code gets random coordinates
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}


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
        }, 4000, function() {
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
            $("#"+f).css("color", "gray")
        }
       function squash () {
            var x = $("#"+f).offset().left -10;
            var y = $("#"+f).offset().top -10;
            var width = $("#"+f).width() -20;
            var height = $("#"+f).height() -20;
            $('.bug').each(function(index, s){
                if(s.offsetLeft > x && s.offsetLeft < x+width){
                    if(s.offsetTop > y && s.offsetTop < y+height){

                        scoreboard +=10;

                    $($(this)).remove();

                        $('body').append("<div class='kill' style='top: " + s.style.top + "; left: " + s.style.left + "'></div>");
                        $('body').append("<div class='plus' style='top: " + s.style.top + "; left: " + s.style.left + "'><p>+10</p></div>");
                        $('.plus').animate({'marginTop': "-=40px"});
                        $('.plus').fadeOut(500, function () {
                    });
                 }
             }
    });
            $('.bug2').each(function(index, s){
                if(s.offsetLeft > x && s.offsetLeft < x+width){
                    if(s.offsetTop > y && s.offsetTop < y+height){
                    $($(this)).remove();
                    $('body').append("<div class='kill2' style='top: " + s.style.top + "; left: " + s.style.left + "'></div>");
                    $('body').append("<div class='minus' style='top: " + s.style.top + "; left: " + s.style.left + "'><p>-200</p></div>");
                    $('.minus').animate({'marginTop': "-=40px"});
                    $('.minus').fadeOut(3000, function () {
                    });
             }
         }
    });
}

squash();

    });
}

keyInput2();

// add a minus sign when butterfly is killed
$(document).keydown(function() {
    if (event.keyCode === 16){
        $('.kill, .kill2').fadeOut(7000, function (){




        });
     }
});
setInterval(function() {
    $('p').fadeOut(500, function() {
        var $this = $(this);
        $this.text($this.text() == '(bloodwiper)' ? 'Shift' : '(bloodwiper)');
        $this.toggleClass();
        $this.fadeIn(500);
    });
}, 2000);


