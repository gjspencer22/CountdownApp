// Set the date we're counting down to
const countDownDate = new Date("Nov 14, 2022 00:00:00").getTime();
// document.getElementById("userInput")
// Date = "userInput"
// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("number").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + " and " + seconds + " seconds...";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("number").innerHTML = "Let The Magic Happen!";
    document.getElementById("disney").innerHTML = "";
  }
}, 1000);








// var body = document.body;
// var currentPos = 0;
// var images = ["./CAdventrue.jpg"]  //replace this with array of your images

// function changeBg() {
//   if (++currentPos >= images.length)
//     currentPos = 0;

//   body.style.backgroundImage = `url(${images[currentPos]})`;
// }

// setInterval(changeBg, 1);