var sideNavLinks = document.querySelectorAll(".sidenav a");
var navBars = document.querySelectorAll(".navbar .collapse .navbar-nav a");
var titleContent = document.querySelector("#titleContent");
var fixedTop = document.querySelector(".fixed-top");

window.addEventListener("scroll", current);
navBars.forEach(navBar => navBar.addEventListener("click", clicked));

function current() {
	var fromTop = window.scrollY + 20;

	sideNavLinks.forEach(link => {
		var content = document.querySelector(link.hash);

		if (content.offsetTop <= fromTop &&
      		content.offsetTop + content.offsetHeight > fromTop
      	)
			link.classList.add("current");
		else
			link.classList.remove("current");

	});

}

function clicked() {
    $('.navbar-collapse').collapse('toggle');
}

AOS.init({
  duration: 1500,
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


