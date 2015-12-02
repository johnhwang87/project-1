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

//below code starts the game with 80 bugs
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


});

//below codes detect keyboard input
function keyInput1 () {
    $(document).keydown(function(h) {
        if (h.keyCode > 64 && h.keyCode < 91) {
            var e = String.fromCharCode(h.keyCode).toLowerCase()
            $("#"+e).css("color", "red")
            // var top = $("#"+e).position().top
            // var bottom = top + 90
            // var left = $("#"+e).position().left
            // var right = left + 90
//below shows the position of each key that is pressed.
            // console.log(top)
            // console.log(bottom)
            // console.log(left)
            // console.log(right)

            // var bugPosX = $('.bug').each(function (){
            //     if ($(this).offset().left > key.offset().left) {};
            //     return ($(this)).offset().left
            // });

            // var bugPosY = $('.bug').each.offset().top
            // console.log(bugPosX);
            // console.log(bugPosY);

            // console.log("keydown called");
        }

       function squash () {
            var x = $("#"+e).offset().left
            var y = $("#"+e).offset().top
            var width = $("#"+e).width()
            var height = $("#"+e).height()
            $('.bug').each(function(index, s){
                if(s.offsetLeft > x && s.offsetLeft < x+width){
                    if(s.offsetTop > y && s.offsetTop < y+height){
                        $($(this)).addClass('kill');
                        $($(this)).removeClass('bug');
                }
            }
            });


                    // $('.bug').each(function (){
                    // $('.bug').addClass('kill').removeClass('bug');
                    // });
            // var bugPosY = $('.bug').offset().top
            // if(width > bugPosX > x && height > bugPosY > y)
            //     });

}

        squash();
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


