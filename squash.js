$(document).ready(function(){


// how do I get the divs to spawn every second, rather than all at once?!!??!
for (var i=0; i<50; i++){
    setInterval(function (){
    $('#canvas').append("<div class='bug'></div>")
        moveRandom(i);
}, 500);
}


    function randomFromTo(from, to){
        return Math.floor(Math.random() * (to - from + .5) + from);
    }

    function moveRandom(obj) {
        /* get container position and size
         * -- access method : cPos.top and cPos.left */
        var cPos = $('#keyboard').offset();
        var cHeight = $('#keyboard').height();
        var cWidth = $('#keyboard').width();


        // get movable box size
        var bHeight = obj.height();
        var bWidth = obj.width();

        // set maximum position
        maxY = cPos.top + cHeight - bHeight;
        maxX = cPos.left + cWidth - bWidth;

        // set minimum position
        minY = cPos.top;
        minX = cPos.left;

        // set new position
        newY = randomFromTo(minY, maxY);
        newX = randomFromTo(minX, maxX);

        obj.animate({
            top: newY,
            left: newX
            }, 2000, function() {
      moveRandom(obj);
        });
    }
$('.bug').each(function() {
moveRandom($(this));
});



});


// $(document).keydown(function(e) {
//     if(e.keyCode === 81){
//     $("#q").css("color", "red")
//     }
// });
// $(document).keyup(function(e) {
//     if(e.keyCode === 81){
//     $("#q").css("color", "white")
//     }
// });

// below code trying to make a loop for each charCode, and then CSS it to change key up and key down



// WHAT THE f get this damn loop to work
// function keyInput () {
//     for(i=65; i<91; i++) {
//         var e = String.fromCharCode(i).toLowerCase()
//         $(document).keydown(function(e) {
//         if(e.keyCode === (i)) {
//         $("#"+e).css("color", "red")
//             }
//         });
//     }

// keyInput();
// }


// });



























// function makeNewPosition(){

//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;

//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);

//     return [nh,nw];

// }

// function animateDiv(){
//     var newq = makeNewPosition();
//     var oldq = $('.a').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);

//     $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();
//     });

// };

// function calcSpeed(prev, next) {

//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);

//     var greatest = x > y ? x : y;

//     var speedModifier = 0.1;

//     var speed = Math.ceil(greatest/speedModifier);

//     return speed;

// }

// ('a').animate(makeNewPosition)






