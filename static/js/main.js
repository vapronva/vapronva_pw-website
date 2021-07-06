$(window).on('load', function () {
	animateWhenVisible();
})

function animateWhenVisible() {
	hideAll();
	inViewCheck();
	$(window).scroll(function () {
		inViewCheck();
		scrollToTopView();
	});
};

function hideAll() {
	$('.animated').each(function (i) {
		if ($("body").hasClass('mob-disable-anim')) {
			if ($(window).width() > 767) {
				$(this).removeClass('animated').addClass('hideMe');
			}
		} else {
			$(this).removeClass('animated').addClass('hideMe');
		}
	});
}

function inViewCheck() {
	$($(".hideMe").get().reverse()).each(function (i) {
		var target = jQuery(this);
		var a = target.offset().top + target.height();
		var b = $(window).scrollTop() + $(window).height();
		if (target.height() > $(window).height()) {
			a = target.offset().top;
		}
		if (a < b) {
			var objectClass = target.attr('class').replace('hideMe', 'animated');
			target.css('visibility', 'hidden').removeAttr('class');
			setTimeout(function () {
				target.attr('class', objectClass).css('visibility', 'visible');
			}, 0.01);
			target.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
				$(this).removeClass($(this).attr('data-appear-anim-style'))
			});
		}
	});
};

function scrollToTopView() {
	if ($(window).scrollTop() > $(window).height() / 3) {
		if (!$('.scrollToTop').hasClass('showScrollTop')) {
			$('.scrollToTop').addClass('showScrollTop');
		}
	} else {
		$('.scrollToTop').removeClass('showScrollTop');
	}
}