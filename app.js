var kickTarget = document.getElementById('target1');
var catBlast = document.getElementById('cat-fireball');
var blast = document.getElementById('big-blast');
var catPower = document.getElementById('cat-powerup');

// EVENT LISTENERS
kickTarget.addEventListener('click', highKick);
document.body.addEventListener('keydown', kiBlast, true);
catPower.addEventListener('mousedown', takeOff);
catPower.addEventListener('mouseup', charging);


// FUNCTIONS FOR EVENT LISTENERS
function highKick(){
  var catKick = document.getElementById('cat-kick');
  catKick.classList.add('kicking');
  setTimeout(function(){
    catKick.classList.remove('kicking');
  }, 800);
}

function kiBlast(e){
  var key = e.keyCode;
  if(key == 32){
    catBlast.classList.add('fire');
    setTimeout(function(){
      catBlast.classList.remove('fire');
      blast.classList.add('energy');
    }, 1000);
    setTimeout(function(){
      var remove = setInterval(noBlast, 2000);
      function noBlast(){
        blast.classList.remove('energy');
        clearInterval(remove);
      }
    });
  }
}


function takeOff(){
  clearTimeout(this.downTimer);
  if (catPower.attributes.className === null || catPower.attributes.className === undefined){
    this.downTimer = setTimeout(function(){
      catPower.classList.add('fly');
    }, 1000);
  }
}

function charging(){
  clearTimeout(this.downTimer);
  setTimeout(function(){
    catPower.classList.remove('fly');
  }, 800);
}

