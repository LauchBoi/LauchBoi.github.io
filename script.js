var pic = document.getElementById("catto");

function move(element, direction, distance=20, duration=1000) {
    var topOrLeft = (direction=="left" || direction=="right") ? "left" : "top";
    var isNegated = (direction=="up" || direction=="left");
    if (isNegated) { distance *= -1; }
    var elStyle = window.getComputedStyle(element);
    var value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
    var destination = Number(value) + distance;
    var frameDistance = distance / (duration / 10);
    function moveAFrame() {
       elStyle = window.getComputedStyle(element);
       value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
       var newLocation = Number(value) + frameDistance;
       var beyondDestination = ( (!isNegated && newLocation>=destination) || (isNegated && newLocation<=destination) );
       if (beyondDestination) {
          element.style[topOrLeft] = destination + "px";
          clearInterval(movingFrames);
       }
       else {
          element.style[topOrLeft] = newLocation + "px";
       }
    }
    var movingFrames = setInterval(moveAFrame, 10);
 };

 this.move(pic,"right",20,1000);