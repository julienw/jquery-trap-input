/*
Copyright (c) 2011, Julien Wajsberg <felash@gmail.com>
All rights reserved.

Official repository: https://github.com/julienw/jquery-trap-input

Redistribution and use in source and binary forms, with or without
modification, are permitted without condition.

Although that's not an obligation, I would appreciate that you provide a
link to the official repository.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED.
*/

(function( $ ){
/*jshint boss: true, bitwise: true, curly: true, newcap: true, noarg: true, nonew: true, latedef: true, regexdash: true */

	function onkeypress(e) {
		e.preventDefault();
		
		if (e.keyCode === 9) {
			var goReverse = !!(e.shiftKey);
			processTab(this, e.target, goReverse);
		}
	}
	
	function processTab(container, elt, goReverse) {
		var $focussable = getFocusableElementsInContainer(container);
		var index = $focussable.index(elt),
			nextIndex = index + 1,
			prevIndex = index - 1;
		switch(index) {
			case -1:
				return;
			case 0:
				prevIndex = $focussable.length - 1;
				break;
			case ($focussable.length - 1):
				nextIndex = 0;
				break;
		}
						
		if (goReverse) {
			nextIndex = prevIndex;
		}
		
		$focussable.eq(nextIndex).focus();
	}
	
	function filterSpeciallyFocusable() {
		return this.tabIndex > -1;
	}
	
	function sortSpeciallyFocusable(a, b) {
		var aTab = a.tabIndex;
		var bTab = b.tabIndex;
		
		if (aTab < bTab) {
			return -1;
		} else if (bTab < aTab) {
			return 1;
		} else {
			return 0;
		}
	}
	
	function getFocusableElementsInContainer(container) {
		var $container = $(container);
		var normallyFocussable = $container.find("a:visible, :input:visible");
		var speciallyFocusable = $container
			.find("[tabindex]:visible")
			.filter(filterSpeciallyFocusable)
			.sort(sortSpeciallyFocusable);
			
		return speciallyFocusable.add(normallyFocussable);
		
	}
	
	function trap() {
		return this.keypress(onkeypress);
	}
	
	function untrap() {
		return this.unbind('keypress', onkeypress);
	}
	
	$.fn.extend({
		trap: trap,
		untrap: untrap
	});
	
})( jQuery );
