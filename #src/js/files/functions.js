function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});


//Smooth scroll for header links
let smoothLinks = document.querySelectorAll('.main-nav__link');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


// Header show scroll 
let header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('_scroll');
	} else {
		header.removeClass('_scroll');
	}
	scrollPrev = scrolled;
});


// Pop-Up
let link = document.querySelector(".modal-link");
let popup = document.querySelector(".modal__book");
let close = popup.querySelector(".modal-close");
let overlay = document.querySelector(".modal-overlay");
let body = document.querySelector("body");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
	overlay.classList.add("modal-show");
	body.classList.add("lock");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
	body.classList.remove("lock");
});

