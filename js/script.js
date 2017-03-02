// Hamburger Menu
var hamburger = document.querySelector(".hamburger");
var navList = document.getElementById("nav-list");
hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("is-active");
	navList.classList.toggle("showing");
});

// Scroll to Top Button
$(document).ready(function() {
	$("a").click(function(event) {
		event.preventDefault();
	    $("html, body").animate({
	        scrollTop: $($.attr(this,"href") ).offset().top
	    }, 500);
	});
});

// Footer Copyright
var copyright = document.getElementById("copyright");
var year = new Date().getFullYear();
var copyrightText = document.createTextNode("Copyright " + year);
copyright.appendChild(copyrightText);