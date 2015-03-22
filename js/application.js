var site = {
	isMobile: {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (site.isMobile.Android() || site.isMobile.BlackBerry() || site.isMobile.iOS() || site.isMobile.Opera() || site.isMobile.Windows());
		}
	},
	
	setNavigation: function() {
		var $window = $(window);
		var $tabs = $('.tabs');
		
		$window.scroll(function(){
			if ($window.scrollTop() >= ($('.tabs').position().top) + 13) {
				$('.tabs nav').addClass('fixed');
				$('.content-wrap').addClass('nav-height');
			}
			else {
				$('.tabs nav').removeClass('fixed');
				$('.content-wrap').removeClass('nav-height');
			}
		});
	},
	
	
	init: function() {
		this.setNavigation();
	}
}

$(function () {
	site.init();
})