// grab everything we need
const crazyButtons = document.querySelectorAll('.btn-crazy');

// create/define a function we will use
function goCrazy() {
  // get a random number for the left offset
  // get random num for top offset
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  const offsetTop = Math.random() * (innerHeight - this.clientHeight);

  console.log(offsetLeft, offsetTop);


  // apply those numbers
  this.style.left = offsetLeft + 'px';
  this.style.top = offsetTop + 'px'; 
  
}

// add an event listener 

crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));

