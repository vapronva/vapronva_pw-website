document.addEventListener("DOMContentLoaded", function () {
	navigation_bar_setup();
	[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
		return new bootstrap.Tooltip(e)
	});
	document.querySelectorAll(".nav-item [data-active-page]").forEach(function (target_object) {
		target_object.classList.add(target_object.getAttribute("data-active-page"));
	});
})

window.addEventListener("load", function () {
	hide_animation_items();
	is_in_view_checker();
	window.addEventListener("scroll", function () {
		is_in_view_checker();
		menu_navigation_enabler();
	});
})

function navigation_bar_setup() {
	document.querySelectorAll(".navbar-toggler").forEach(function (target_object) {
		target_object.addEventListener("click", function (e) {
			var target_all_menu_navigation = e.target.closest("nav");
			var target_certain_menu = target_all_menu_navigation.querySelector("ul.site-navigation");
			var bounding_parent_menu = target_certain_menu.parentNode.innerHTML;
			if (target_certain_menu.parentNode.matches(".navigation-siding")) {
				e.stopPropagation();
				target_certain_menu.parentNode.classList.add("nav-special");
				if (!e.target.classList.contains("selected-nav")) {
					e.target.classList.add("selected-nav");
					var crnt_menu_cls = target_all_menu_navigation.getAttribute("class").replace("navbar", "").replace("row", "").replace("hover-open-submenu", "");
					var crnt_collapsable_cls = target_certain_menu.parentNode.getAttribute("class").replace("navbar-collapse", "").replace("collapse", "").replace("collapsing", "");
					if (!document.querySelector(".content-tint")) {
						document.body.insertAdjacentHTML("beforeend", "<div class=\"content-tint\"></div>");
					}
					document.querySelector(".page-container").insertAdjacentHTML("beforebegin", "<div class=\"menu-deez-menu-position " + crnt_menu_cls + "\"><navdeeznuts class=\"" + crnt_collapsable_cls + "\">" + bounding_parent_menu + "</div>");
					document.querySelector("navdeeznuts").insertAdjacentHTML("afterbegin", "<a class=\"close-special-menu animated fadeIn animDelay06\"><div class=\"close-icon\"></div></a>");
					menu_animate_items();
					setTimeout(function () {
						document.querySelector(".menu-deez-menu-position navdeeznuts").classList.add("open");
						document.querySelector(".content-tint").classList.add("on");
						document.body.classList.add("lock-scroll");

					}, 10);
				} else {
					document.querySelector(".close-special-menu").remove();
					document.querySelector(".menu-deez-menu-position navdeeznuts").classList.remove("open");
					document.querySelector(".selected-nav").classList.remove("selected-nav");
					setTimeout(function () {
						document.querySelector(".menu-deez-menu-position").remove();
						document.body.classList.remove("lock-scroll");
						document.querySelector(".nav-special").classList.remove("nav-special");
					}, 230);
				}
			}
		})
	});

	delegate_selector("body", "mousedown touchstart", ".content-tint, .close-special-menu, .close-special-menu .close-icon", function (e) {
		we_do_a_little_hiding();
	});

	function we_do_a_little_hiding() {
		document.querySelector(".content-tint").classList.remove("on");
		document.querySelector(".selected-nav").click();
		setTimeout(function () {
			document.querySelector(".content-tint").remove();
		}, 12);
	}

	function menu_animate_items() {
		var anm_delay = 0;
		var anm_incresable_loop_delay = 50;
		var anm_decided_style = "fadeInRight";
		if (document.querySelector(".menu-deez-menu-position").classList.contains("nav-invert")) {
			anm_decided_style = "fadeInLeft";
		}
		document.querySelectorAll(".menu-deez-menu-position navdeeznuts li").forEach(menu_navigation_single => {
			anm_delay += anm_incresable_loop_delay;
			menu_navigation_single.classList.add.apply(menu_navigation_single.classList, ["animated", anm_decided_style]);
			menu_navigation_single.setAttribute("style", "animation-delay:" + anm_delay + "ms")
		});
	}
}

function menu_navigation_enabler() {
	var navigation_bar_stickified = document.querySelector(".sticky-nav");
	if (navigation_bar_stickified) {
		var target_rectangle_bounding = navigation_bar_stickified.getBoundingClientRect();
		var offsetVal = (target_rectangle_bounding.top + window.scrollY);
		var classes = ["sticky"];
		var targetContainer = document.querySelector(".page-container");
		if (navigation_bar_stickified.classList.contains("sticky")) {
			offsetVal = navigation_bar_stickified.getAttribute("data-original-offset")
		}
		var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (currentScrollTop > offsetVal) {
			if (!navigation_bar_stickified.classList.contains("sticky")) {
				navigation_bar_stickified.classList.add.apply(navigation_bar_stickified.classList, classes);
				navigation_bar_stickified.setAttribute("data-original-offset", offsetVal);
				offsetVal = navigation_bar_stickified.offsetHeight;
				targetContainer.style.paddingTop = offsetVal + "px";
			}
		} else if (navigation_bar_stickified.classList.contains("sticky")) {
			navigation_bar_stickified.classList.remove.apply(navigation_bar_stickified.classList, classes);
			navigation_bar_stickified.removeAttribute("style");
			targetContainer.removeAttribute("style");
		}
	}
}

function hide_animation_items() {
	document.querySelectorAll(".animated").forEach(target_object => {
		if ((!document.body.classList.contains("mob-disable-anim")) || (document.body.classList.contains("mob-disable-anim") && window.innerWidth > 767)) {
			var target_rectangle_bounding = target_object.getBoundingClientRect();
			var target_objectX = target_rectangle_bounding.top + (target_object.offsetHeight / 3);
			if (target_objectX > window.innerHeight) {
				target_object.classList.remove("animated");
				target_object.classList.add("hideMe");
			}
		}
	});
}

function is_in_view_checker() {
	const animated_hidden_list = [].slice.call(document.querySelectorAll(".hideMe"), 0).reverse();
	animated_hidden_list.forEach(target_object => {
		var target_rectangle_bounding = target_object.getBoundingClientRect();
		var top_edge_offset = (target_rectangle_bounding.top + window.scrollY);
		var offset_height_tobj = top_edge_offset + target_object.offsetHeight;
		var offset_height_window = window.pageYOffset + window.innerHeight;
		if (target_object.offsetHeight > window.innerHeight) {
			offset_height_tobj = top_edge_offset
		}
		if (offset_height_tobj < offset_height_window) {
			var obj_css_deeez = target_object.className.replace("hideMe", "animated");
			target_object.style.visibility = "hidden";
			target_object.removeAttribute("class");
			setTimeout(function () {
				target_object.style.visibility = "visible";
				target_object.setAttribute("class", obj_css_deeez);
			}, 0.01);
			var animation_events = ["webkitAnimationEnd", "mozAnimationEnd", "oAnimationEnd", "animationEnd"];
			animation_events.forEach(function (e) {
				window.addEventListener(e, function (event) {
					target_object.classList.remove(target_object.getAttribute("data-appear-anim-style"));
				});
			});
		}
	});
};

function delegate_selector(e, t, c, n) {
	t.split(" ").forEach(t => {
		var a = document.querySelectorAll(e);
		[].forEach.call(a, function (e, a) {
			e.addEventListener(t, function (e) {
				e.target.matches(c) && n(e)
			})
		})
	})
}

window.requestAnimFrame = (function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();