
const countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();

const x = setInterval(function() {

  const now = new Date().getTime();
  
  const distance = countDownDate - now;
    

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("number").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + " and " + seconds + " seconds...";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("number").innerHTML = "Merry Christmas";
    document.getElementById("disney").innerHTML = "";
  }
}, 1000);