document.querySelector(".menu-btn-item").addEventListener("click", (e) => { 

		if(document.querySelector(".menu-btn-item").classList.contains("menu-btn__active")) {
		document.querySelector(".menu-btn-item").classList.remove("menu-btn__active");
		document.querySelector(".nav__item-wrapper").style.display = "none";
		document.querySelector(".nav__socials-wrapper").style.display = "none";
		
		}
		else {
			document.querySelector(".menu-btn-item").classList.add("menu-btn__active");
			document.querySelector(".nav__item-wrapper").style.display = "flex";
			document.querySelector(".nav__socials-wrapper").style.display = "flex";
		}
	
	
	
});
// if($(window).width() < 767){