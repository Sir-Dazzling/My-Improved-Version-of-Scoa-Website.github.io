$(document).ready(function() 
{
   // To make Carousel Fade
$('.carousel').carousel(
{
     animation: "fade",
     directionNav: false
});


// To Show or hide the sticky footer button
$(".go-top").hide();
$(window).scroll(function()
 {
 	event.preventDefault();

	if ($(this).scrollTop() > 200)
 {
	$(".go-top").fadeIn(200);
} 
else
 {
	$(".go-top").fadeOut(200);
}
 });		

// Animate the scroll to top
$(".go-top").click(function(event) 
{
	event.preventDefault();
	$('html, body').animate({scrollTop: 0}, 5000);
	})

    /*Script to toggle Accordion in Product Categories*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++)
    {
        acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

/*For Timer in Scoa IT */
/*For Seconds*/
let output1=document.querySelector(".seconds");
let output2=document.querySelector(".minutes");
let output3=document.querySelector(".hours");
let output4=document.querySelector(".days");
let days=30; hours=23; minutes=59;seconds=59;

let timer=setInterval(function()
{
    seconds--;
    if (seconds<=0) {
        seconds=59;
        minutes-=1;
    }
    if (minutes<=0) {
        minutes=59;
        hours-=1;
    }
    if (hours<=0) {
        minutes=seconds=0;
      clearInterval(timer)
}   
    output1.innerHTML= seconds+"";
    output2.innerHTML= minutes+"";
    output3.innerhtml = hours+"";
    output4.innerhtml = days+"";
},1000);


$("#myUL").hide();

});


