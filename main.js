

// --------------------------------------------------------------
// CAROUSEL
// --------------------------------------------------------------

$("#carousel").skippr({
   autoPlayDuration: 2000,
   speed: 1000,
   navType: 'bubble',
   arrows: true,
   autoPlay: true
});




// --------------------------------------------------------------
// COLOUR CHANGER
// --------------------------------------------------------------

// javascript settings for colour changing the hero h1 tag.

$(".hero").mousemove(function (e) {
   red = e.pageX;
   green = e.pageY;
   blue = 255;
   rgb = "rgb(" + red + "," + green + "," + blue + ")";
   $(".hero h1").css("color", rgb);
});


// --------------------------------------------------------------
// COUNTDOWN TIMER
// --------------------------------------------------------------




// Set the date we're counting down to
var countDownDate = new Date("sept 19, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Output the result in an element with id="countdown"
   document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hrs " +
       minutes + " m " + seconds + " s ";

   // If the count down is over, write some text 
   if (distance < 0) {
       clearInterval(x);
       document.getElementById("countdown").innerHTML = "ITS ON";
   }
}, 1000);

//hamburger
function dropdown() {
    document.getElementsByClassName("topnav")[0].classList.toggle("active");
}

//for scroll to top
$(".scrollToTop").click(function(){
    var rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    }) 
  });

  //for storing values from form to local storage

  let values = [];
      
        const addValue = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let value = {
               
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                genre: document.getElementById('genre').value
            }
            values.push(value);
            document.forms[0].reset(); // to clear the form for the next entries
            
            console.warn('added' , {values} );
            
            //saving to localStorage
            localStorage.setItem('StoredValues', JSON.stringify(values) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addValue);
        });