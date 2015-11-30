// 1st i need to have variable for x and o and to place
//them on each part of the board
var player= 1;
var a = document.getElementById("one");
var b = document.getElementById("two");
var c = document.getElementById("three");
var d = document.getElementById("four");
var e = document.getElementById("five");
var f = document.getElementById("six");
var g = document.getElementById("seven");
var h = document.getElementById("eight");
var i = document.getElementById("nine");
var boxes = document.getElementsByClassName("box")

var onClick = function (){
  if(player===1) {
      this.style.backgroundColor="red";
      player -=1;
      this.style.pointerEvents = 'none';


      getWinner();

    }
    else {
      this.style.backgroundColor="yellow";
      player +=1;

      getWinner();

      }
}

for(var k=0; k<boxes.length; k++) {
  boxes[k].addEventListener("click", onClick, false)
}

// 2nd i need to tell who wins by getting three in a row

function getWinner () {
  if (
    a.style.backgroundColor==="red" &&
    b.style.backgroundColor==="red" &&
    c.style.backgroundColor==="red" ||

    d.style.backgroundColor==="red" &&
    e.style.backgroundColor==="red" &&
    f.style.backgroundColor==="red" ||

    g.style.backgroundColor==="red" &&
    h.style.backgroundColor==="red" &&
    i.style.backgroundColor==="red" ||

    a.style.backgroundColor==="red" &&
    e.style.backgroundColor==="red" &&
    i.style.backgroundColor==="red" ||

    c.style.backgroundColor==="red" &&
    e.style.backgroundColor==="red" &&
    g.style.backgroundColor==="red" ||

    a.style.backgroundColor==="red" &&
    d.style.backgroundColor==="red" &&
    g.style.backgroundColor==="red" ||

    b.style.backgroundColor==="red" &&
    e.style.backgroundColor==="red" &&
    h.style.backgroundColor==="red" ||

    c.style.backgroundColor==="red" &&
    f.style.backgroundColor==="red" &&
    i.style.backgroundColor==="red"
    )
  { alert("RED has you deafeated.");
    Reset();
}
  else if (
    a.style.backgroundColor==="yellow" &&
    b.style.backgroundColor==="yellow" &&
    c.style.backgroundColor==="yellow" ||

    d.style.backgroundColor==="yellow" &&
    e.style.backgroundColor==="yellow" &&
    f.style.backgroundColor==="yellow" ||

    g.style.backgroundColor==="yellow" &&
    h.style.backgroundColor==="yellow" &&
    i.style.backgroundColor==="yellow" ||

    a.style.backgroundColor==="yellow" &&
    e.style.backgroundColor==="yellow" &&
    i.style.backgroundColor==="yellow" ||

    c.style.backgroundColor==="yellow" &&
    e.style.backgroundColor==="yellow" &&
    g.style.backgroundColor==="yellow" ||

    a.style.backgroundColor==="yellow" &&
    d.style.backgroundColor==="yellow" &&
    g.style.backgroundColor==="yellow" ||

    b.style.backgroundColor==="yellow" &&
    e.style.backgroundColor==="yellow" &&
    h.style.backgroundColor==="yellow" ||

    c.style.backgroundColor==="yellow" &&
    f.style.backgroundColor==="yellow" &&
    i.style.backgroundColor==="yellow"
    )
{ alert("YELLOW has you defeated.");
  Reset();
}


  }
