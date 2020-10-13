let navToggle = document.getElementById("nav-toggle");
let mobileNavbar = document.getElementById("nav-links-cont");

navToggle.addEventListener("click", (e)=>{
	console.log(mobileNavbar)
	mobileNavbar.classList.toggle("show-nav");
})