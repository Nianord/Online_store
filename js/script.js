//ibg
function ibg(){
let ibg=document.querySelectorAll(".ibg"); 
for (var i = 0; i < ibg.length; i++) { 
	if(ibg[i].querySelector('img')){ 
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } 
	}
}
ibg();

//tabs
function openCategory(evt, category) {
    var i, tabcontent, tabcontent2, tablinks, tablinks2;
    tabcontent = document.querySelectorAll(".products__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".products__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.querySelector(category).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.querySelector("#defaultOpen").click();

function openCategory2(evt, category) {
 	 tabcontent2 = document.querySelectorAll(".products2__tabcontent");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
     }
	 tablinks2 = document.querySelectorAll(".products2__tablinks");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.querySelector(category).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.querySelector("#defaultOpen2").click();

//sliderFeedBack
let feedbackSlider = new Swiper('.image-slider', {
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	slidesPerView: 1,
	watchOverflow: true,
	spaceBetween: 2000,
	loop: true,
	loopedSlides: 3,
	effect: 'slide',
	centeredSlides: true,
	autoHeight: true,
});

//sliderBlockFirst
let secondSlider = new Swiper('.second-slider', {
	grabCursor: true,
	direction: 'horizontal',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 1000,
	slideToClickedSlide: true,
	centeredSlides: true,
	effect: 'slide',
	thumbs: {
		swiper: {
			el: '.second-mini-slider',
			slidesPerView: 500,
		},
	},
});

let secondMiniSlider = new Swiper('.second-mini-slider', {
	direction: 'vertical',
	slidesPerView: 3,
	spaceBetween: 20,
	effect: 'slide',
});

secondSlider.on('slideChange', function () {
  var activeIndex = secondSlider.activeIndex;
  secondMiniSlider.slideTo(activeIndex);
});


//sliderProduct
let productSlider = new Swiper('.products-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: "bullets",
	},
	slidesPerView: 1,
	watchOverflow: true,
	spaceBetween: 1000,
	effect: 'slide',
	autoHeight: true,
	loop: true,
});
let productSlider2 = new Swiper('.products-slider2', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: "bullets",
	},
	slidesPerView: 1,
	watchOverflow: true,
	spaceBetween: 1000,
	effect: 'slide',
	autoHeight: true,
	loop: true,
});

//burgerMenu
let menu = document.querySelector(".menu");
let burgerMenu = document.querySelector(".main__burger");
let body = document.querySelector("body");

burgerMenu.addEventListener('click', changeClassBurgerMenu);

function changeClassBurgerMenu() {
	burgerMenu.classList.toggle("_active");
	menu.classList.toggle("_active");
	body.classList.toggle("_lock");
};

//dropdownLists
let blockTitles = document.querySelectorAll('.listblock__title');
let menuSliderRow = document.querySelector ('.menu-slider__row');
if (blockTitles.length > 0) {
	for (let i =0; i < blockTitles.length; i++) {
	blockTitles[i].addEventListener('click', function(){
		this.parentElement.classList.toggle("_active");
		//to cut block row
		if (event.target.closest(".collect")) {
		menuSliderRow.classList.toggle('_active');
		}
	});
}}
document.addEventListener ('click', function() {
	if (!event.target.closest(".listblock")) {
		let listblocks = document.querySelectorAll('.listblock');
		for (let i =0; i < listblocks.length; i++) {
			listblocks[i].classList.remove('_active');
			menuSliderRow.classList.remove('_active');
		}
	}
})


//searchBlock
let searchBtn = document.querySelector(".main__search_btn");
let searchBlock = document.querySelector(".main__search");

searchBtn.addEventListener('click', changeClassSearch);
function changeClassSearch() {
	searchBlock.classList.toggle("_active");
};

//timer
let timers = document.querySelectorAll('.timer');
if (timers.length > 0) {
	initTimers();
}

function initTimers() {
	let dateTo, day, hour, min, sec, dateNow, dateFinal, dateData, dayData, hourData, minData, secData;
	for (let i =0; i < timers.length; i++) {
		const timer = timers[i];
		initTimer(timer);
	}

	function initTimer(timer) {
		initTimerVars(timer);
		setTimerData();
	}

	function initTimerVars(timer) {
		dateTo = timer.querySelector('.timer__dateTo');
		day = timer.querySelector('.timer__day');
	   hour = timer.querySelector('.timer__hour');
	   min = timer.querySelector('.timer__min');
	   sec = timer.querySelector('.timer__sec');
	}

	function setTimerData() {
		dateNow = new Date();
		dateFinal = new Date (dateTo.innerHTML);
		dateData = dateFinal- dateNow;
		dayData = Math.floor(dateData / (24 * 60 * 60 * 1000));
		hourData = Math.floor((dateData - dayData * 24*60*60*1000) / (60 * 60 * 1000));
		minData = Math.floor((dateData - dayData * 24*60*60*1000 - hourData * 60 * 60 * 1000) / (60 * 1000));
		secData = Math.floor((dateData - dayData * 24*60*60*1000 - hourData * 60 * 60 * 1000 - minData *60 * 1000) / 1000);
		day.innerHTML = dayData;
	   hour.innerHTML = hourData;
	   min.innerHTML = minData;
	   sec.innerHTML = secData;
	}
}

function timersCaller() {
   setInterval(initTimers, 1000);
};
 function timerStopper() {
 	clearInterval(initTimers);
};
timersCaller();

//rating
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

function initRatings() {
	let ratingActive, ratingValue;
	for (let i = 0; i < ratings.length; i++) {
		const rating = ratings[i];
		initRating(rating);
	}

	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();
	}

	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}

	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.005;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}
