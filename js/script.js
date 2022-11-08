$(document).ready(function () {


	let sub_menu_hight = $('.menu-list__sub-list').height();
	let i = 0;
	let menuInteval = setInterval(() => {
		if (i > 50) {
			clearInterval(menuInteval)
		}
		$('.menu-list__item')
			.children('.menu-list__sub-list')
			.css('top', -$('.menu-list__sub-list').height());
		i++;
	}, 10);

	let w = $(window).width();
	$('.menu-list__item_spisok').on('mouseover', function () {
		$(this).addClass('menu-list__item_active');
		if (w <= 1750) {
			$('.menu-list__item')
				.children('.menu-list__sub-list')
				.css('top', '50px');
		} else if (w <= 1250) {
			$('.menu-list__item')
				.children('.menu-list__sub-list')
				.css('top', '60px');
		} else if (w <= 950) {
			$('.menu-list__item')
				.children('.menu-list__sub-list')
				.css('top', '45px');
		} else {
			$('.menu-list__item').children('.menu-list__sub-list').css('top', '60px');
		}
	});
	$('.menu-list__item_spisok').on('mouseout', function () {
		$(this).removeClass('menu-list__item_active');
		$('.menu-list__item')
			.children('.menu-list__sub-list')
			.css('top', -$('.menu-list__sub-list').height());
	});

	let menu_mob_hight = $('.menu-mob__wraper').height();
	if (!$('.menu-mob__wraper').hasClass('menu-mob__wraper_active')) {
		$('.menu-mob__wraper').css('top', -menu_mob_hight);
	}
	let hed_hight = $('.header').height();

	$('.header__burger').click(function () {
		$('body').toggleClass('body__active');
		$('.header__logo').toggleClass('header__logo_active');
		$(this).toggleClass('header__burger_active');
		$('.menu-mob__wraper').toggleClass('menu-mob__wraper_active');
		if ($('.menu-mob__wraper').hasClass('menu-mob__wraper_active')) {
			$('.menu-mob__wraper').css('top', '90px');
			$('.menu-mob__wraper').height(menu_mob_hight - hed_hight);
		} else {
			$('.menu-mob__wraper').css('top', -menu_mob_hight - 100);
		}
	});
	if (w <= 450) {
		$('.header__burger').click(function () {
			if ($('.menu-mob__wraper').hasClass('menu-mob__wraper_active')) {
				$('.menu-mob__wraper').css('top', '77px');
			} else {
				$('.menu-mob__wraper').css('top', -menu_mob_hight - 100);
			}
		});
	}

	$('.menu-mob-list__link-spisok').click(function () {
		$(this).toggleClass('menu-mob-list__item_active');
		$(this).next().slideToggle();
		$('.menu-mob-list__link-spisok')
			.not(this)
			.removeClass('menu-mob-list__item_active')
			.next()
			.slideUp();
	});

	$(function () {
		$('ul.documents__links').on(
			'click',
			'li:not(.documents__link_active)',
			function () {
				$(this)
					.addClass('documents__link_active')
					.siblings()
					.removeClass('documents__link_active')
					.closest('div.documents__content')
					.find('div.documents__tab')
					.removeClass('documents__tab_active')
					.eq($(this).index())
					.addClass('documents__tab_active');
			}
		);
	});

	$('.about-us__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
	});
	$('.slider-one').slick({
		arrows: true,
		prevArrow: $('.clients__button-l'),
		nextArrow: $('.clients__button-r'),
		infinite: true,
		speed: 500,
		autoplay: true,
		dots: false,
		autoplaySpeed: 5000,
		slidesToShow: 5,
		slidesToScroll: 1,
		// cssEase: 'linear',
		responsive: [
			{
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	});
	$('.slider-two').slick({
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		dots: false,
		autoplaySpeed: 5000,
		slidesToShow: 6,
		slidesToScroll: 1,
		// cssEase: 'linear',
		responsive: [
			{
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	});

	$('.reviews__slider:not(.video, .photo)').slick({
		prevArrow: $('.reviews__button-l'),
		nextArrow: $('.reviews__button-r'),
		arrows: true,
		dots: false,
		infinite: true,
		speed: 350,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				},
			},
		],
	});
	$('.reviews__slider.video').slick({
		prevArrow: $('.reviews__button-l.v'),
		nextArrow: $('.reviews__button-r.v'),
		arrows: true,
		dots: false,
		infinite: true,
		speed: 350,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				},
			},
		],
	});
	$('.reviews__slider.photo').slick({
		prevArrow: $('.reviews__button-l.p'),
		nextArrow: $('.reviews__button-r.p'),
		arrows: true,
		dots: false,
		infinite: true,
		speed: 350,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				},
			},
		],
	});

});

let modal = document.getElementById('callback-modal');
let modalBg = document.getElementById('callback-modal-bg');
let modalError = document.getElementById('callback-error');

document.querySelectorAll('.open-modal, .overage-area__button').forEach(item => {
	item.addEventListener('click', openModal);
});
document.querySelectorAll('.main-form__krestik').forEach(item => {
	item.addEventListener('click', closeModal)
});

document.querySelectorAll('form').forEach(item => {
	item.addEventListener('submit', sendForm)
});

async function sendForm(event) {
	event.preventDefault();

	if (event.target.classList.contains('form-check') || event.target.classList.contains('check__form')) {
		passCheck(event);
		return;
	}

	let data = {
		url: window.location.pathname
	};

	let block = event.target.closest('.container');
	if (block) {
		block = block.querySelector('h2');
		if (block) {
			data['Блок'] = block.textContent;
		}
	}


	event.target.querySelectorAll('input, select, textarea').forEach(item => {
		if (item.placeholder) {
			data[item.placeholder] = item.value;
		}
	});


	if (event.target.querySelector('input[type="checkbox"]')) {
		if (!event.target.querySelector('input[type="checkbox"]').checked) {
			showError('Необходимо дать согласие на обработку персональных данных');
			return;
		}
	}

	let req = await fetch('/mail.php', {
		method: 'post',
		body: JSON.stringify(data)
	});
	let res = await req.json();

	if (!res.status) {
		showError(res.data);
		return;
	}
	ym(73036234, 'reachGoal', 'submit');
	dataLayer.push({ 'event': 'request' });
	showError('Ваше сообщение успешно отправлено');
	event.target.querySelectorAll('input, select').forEach(item => item.value = '');
}
async function passCheck(event) {
	$('.check-result').empty();
	let number = event.target.querySelector('input').value;

	let req = await fetch('/grz.php', {
		method: 'post',
		body: JSON.stringify({ grz: number })
	});
	let res = await req.json();

	if (!res.status) {
		showError(res.data);
		return;
	}
	if (!res.count) {
		showError('По данному ГРЗ пропуска не найдены');
		return;
	}

	showTable(event.target, res.items);
}
function sortPass(a, b) {
	if (a['status'] > b['status']) return 1;
	else if (a['status'] < b['status']) return -1;
	else return 0;
}
function showTable(target, items) {
	let list = '';

	items = items.sort(sortPass);

	for (let item of items) {
		let start = item.start.split(' ')[0];
		let end = item.end.split(' ')[0];
		list += `
		<tr>
			<td data-th="Номер пропуска">${item.pass}</td>
			<td data-th="Тип">${item.type ? item.type : `Ночной`}</td>
			<td data-th="Зона">${item.do}</td>
			<td data-th="Статус" style="color: ${item.status == 'Действует' ? `green` : `red`}">${item.status}</td>
			<td data-th="Действует с">${start}</td>
			<td data-th="Действует по">${end}</td>
		</tr>`;
	}

	$('.check-result').append(`
		<table class="table rwd-table">
			<thead>
				<tr>
					<th data-th="Номер пропуска">Номер пропуска</th>
					<th data-th="Тип">Тип</th>
					<th data-th="Зона">Зона</th>
					<th data-th="Статус">Статус</th>
					<th data-th="Действует с">Действует с</th>
					<th data-th="Действует по">Действует по</th>
				</tr>
			</thead>
			<tbody>${list}</tbody>
		</table>
	`);
}
function disableScroll(e) {
	e.preventDefault();
	e.stopPropagation();

	return false;
}
function enableScroll() {
	document.querySelector('body').removeEventListener('wheel', disableScroll);
}
function openModal(event) {

	event.preventDefault();
	modal.classList.remove('hidden');
	modalBg.classList.remove('hidden');
	let dk = event.target.classList.contains('dk');
	let rnis = event.target.classList.contains('rnis-m');
	let raz = event.target.classList.contains('raz');

	if (dk) {
		modal.querySelector('.main-form__inputs').nextElementSibling.classList.add('hidden');
	} else {
		modal.querySelector('.main-form__inputs').nextElementSibling.classList.remove('hidden');

		if (rnis) {
			modal.querySelector('.main-form__inputs').nextElementSibling.textContent = 'Скидка 1000 рублей при подключении виртуального трекера';
		} else {
			modal.querySelector('.main-form__inputs').nextElementSibling.textContent = 'Скидка 1000 рублей + 2 временных пропуска в подарок';
		}
		if (raz) {
			modal.querySelector('.main-form__inputs').nextElementSibling.textContent = 'Регистрация в РНИС в подарок';
		}
	}

	document.querySelector('body').addEventListener('wheel', disableScroll, { passive: false });
}
function closeModal(event) {
	event.preventDefault();
	if (event.target.closest('#callback-error')) {
		modalError.classList.add('hidden');
	} else {
		modal.classList.add('hidden');
	}
	if (modal.classList.contains('hidden')) {
		modalBg.classList.add('hidden');
		enableScroll();
	}
}
function showError(text, passes = []) {
	modalBg.classList.remove('hidden');
	modalError.classList.remove('hidden');

	modalError.querySelector('.error-text').classList.add('hidden');
	modalError.querySelector('.pass-list').classList.add('hidden');
	if (text) {
		modalError.querySelector('.error-text').textContent = text;
		modalError.querySelector('.error-text').classList.remove('hidden');
	} else {
		let html = '';
		for (let item of passes) {
			let start = item.start.split(' ')[0];
			let end = item.end.split(' ')[0];
			html += `<tr>
				<td>${item.pass}</td>
				<td>${item.type}</td>
				<td>${item.do}</td>
				<td>${item.status}</td>
				<td>${start}</td>
				<td>${end}</td>
			</tr>`;
		}
		modalError.querySelector('.pass-list tbody').innerHTML = html;
		modalError.querySelector('.pass-list').classList.remove('hidden');
	}
}

document.querySelectorAll('[href="#control"]').forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		document.querySelector('#control').scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});

	});
});


document.addEventListener('DOMContentLoaded', function () {
	let dateNow;

	let d = localStorage.getItem('days');
	let h = localStorage.getItem('hours');
	let m = localStorage.getItem('minutes');
	let s = localStorage.getItem('seconds');

	let u = (d * 86400) + (h * 3600) + (m * 60) + s;
	if (!u) {
		u = 20 * 60 * 1000;
	}

	dateNow = new Date((new Date()).valueOf() + u);
	if (dateNow == 'Invalid Date') {
		dateNow = new Date(new Date().valueOf() + (20 * 60 * 1000));
	}

	const deadline = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes());

	let timerId = null;
	function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}
	function countdownTimer() {
		if (!$days) {
			return;
		}
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		$days.textContent = days < 10 ? '0' + days : days;
		$hours.textContent = hours < 10 ? '0' + hours : hours;
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
		$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
		$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
		$minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
		$seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

		localStorage.setItem('days', $days.textContent);
		localStorage.setItem('hours', $hours.textContent);
		localStorage.setItem('minutes', $minutes.textContent);
		localStorage.setItem('seconds', $seconds.textContent);
	}
	let $days, $hours, $minutes, $seconds;

	document.querySelectorAll('.counter__item').forEach((item, index) => {
		if (index == 0) {
			$days = item.querySelector('span');
		} else if (index == 1) {
			$hours = item.querySelector('span');
		} else if (index == 2) {
			$minutes = item.querySelector('span');
		} else if (index == 3) {
			$seconds = item.querySelector('span');
		}
	});

	countdownTimer();
	timerId = setInterval(countdownTimer, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.reviews__slide').forEach(item => {
		let slideName = item.querySelector('.reviews__slide-name');
		if (slideName) {
			let p = slideName.nextElementSibling.nextElementSibling;
			let text = p.textContent.trim();

			p.title = text;
		}
	});

});

let faqHeight = $('.faq__item').outerHeight();

$(document).ready(() => {
	let win = $(window);
	let header = $('header');
	win.on('scroll', () => {
		if ($(window).width() > 820) {
			return;
		}
		if (win.scrollTop() > 160) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	});

	if (faqHeight) {
		$('.faq__item').each((index, item) => {
			$(item).css('height', faqHeight + 'px')
		})
	}
});

$('body').on('click', '.faq__item', e => {
	e.target = $(e.target).closest('.faq__item');

	let src = $(e.target).find('img').attr('src');

	if (src.includes('plus')) {
		$(e.target).find('img').attr('src', '/img/faq-minus.png').attr('alt', 'Свернуть');
		$(e.target)
			.closest('.faq__item')
			.css('height', 'unset');
	} else {
		$(e.target).find('img').attr('src', '/img/faq-plus.png').attr('alt', 'Развернуть');
		$(e.target)
			.closest('.faq__item')
			.css('height', faqHeight + 'px');
	}

	$(e.target)
		.closest('.faq__item')
		.find('.faq__item-answer')
		.toggleClass('hidden');
});

$('body').on('mouseover', '.faq__item', e => {
	$(e.target).closest('.faq__item').css('box-shadow', 'rgb(0 0 0 / 25%) 0px 0px 0px, rgb(0 0 0 / 22%) 0px 10px 10px')
})
$('body').on('mouseout', '.faq__item', e => {
	$(e.target).closest('.faq__item').css('box-shadow', 'unset')
})
$('body').on('mouseover', '.price__item', e => {
	$(e.target).closest('.price__item').addClass('active');
});
$('body').on('mouseout', '.price__item', e => {
	$(e.target).closest('.price__item').removeClass('active');
});


document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.news-index__item')) {
		document.querySelector('.news-index__item').classList.add('current');

		let allNews = document.querySelectorAll('.news-index__item');

		document.querySelectorAll('.news-index__dots--circle').forEach(item => {
			item.addEventListener('click', e => {
				let action = e.target.alt == 'Вперёд' ? 'next' : 'prev';

				let currentFeed = document.querySelector('.news-index__item.current');
				currentFeed.classList.remove('current');

				let newFeed;
				if (action == 'next') {
					newFeed = currentFeed.nextElementSibling;
				} else {
					newFeed = currentFeed.previousElementSibling;
				}

				if (!newFeed || !newFeed.classList.contains('news-index__item')) {
					if (action == 'next') {
						allNews[0].classList.add('current');
					} else {
						allNews[allNews.length - 1].classList.add('current');
					}
					return;
				}
				newFeed.classList.add('current');
			});
		});
	}
});

$('body').on('click', '.header__burger', e => {
	let target = $(e.target).closest('.header__burger');
	console.log(target);
	if (target.hasClass('header__burger_active')) {
		$('.services').css('display', 'none');
	} else {
		setTimeout(() => {
			$('.services').css('display', 'block');
		}, 0)
	}
})

// document.addEventListener('scroll', e => {
// 	let zIndexImgs = document.querySelectorAll('.services__img');
// 	if (zIndexImgs.length) {
// 		zIndexImgs.forEach(item => {
// 			if (item.getBoundingClientRect().top < 71) {
// 				item.classList.add('hide');
// 			} else {
// 				item.classList.remove('hide');
// 			}
// 		});
// 	}
// });

document.addEventListener('DOMContentLoaded', () => {
	let reviews = document.querySelectorAll('.reviews__slide');
	if (reviews.length) {
		let height = 0;
		reviews.forEach(item => {
			let currentHeight = item.getBoundingClientRect().height;
			if (currentHeight > height) {
				height = currentHeight;
			}
		});
		height += 70;
		reviews.forEach(item => item.style.height = height + 'px');
	}
});
// $(document).ready(function(){
//     let sliderPosition = 0; // начальная позиция дорожки
//     const sliderContainer = $('.partners-content');
//     const sliderTrack = $('.partners');
//     const sliderItem = $('.partner-list');
//     const sliderItemWidth = sliderItem.width()  + 100;
//     const sliderContainerWidth = sliderContainer.width();
// 	console.warn(sliderItem.width());
//     // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
//     // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
//     const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth + 500; 
//     const sliderButtonPrev = $('.ms-arrow.left');
//     const sliderButtonNext = $('.ms-arrow.right');

//     function next(){ 
//         sliderPosition -= sliderItemWidth;
//         // if (sliderPosition < -sliderTrackWidth) {
//         //     sliderPosition = -sliderTrackWidth;
//         // }
//         sliderTrack.css('transform', `translateX(${sliderPosition}px`);
// 		if((sliderPosition-240) < -sliderTrackWidth) {
// 			sliderPosition = 0;
// 			sliderTrack.css('transform', `translateX(${sliderPosition}px`);
// 		}
//     }

// 	setInterval(() => {
// 		next();
// 	}, 1500);
// });