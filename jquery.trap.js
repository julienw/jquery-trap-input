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
	
	var DATA_ISTRAPPING_KEY = "trap.isTrapping";

	function onkeypress(e) {
		if (e.keyCode === 9) {
			var goReverse = !!(e.shiftKey);
			if (processTab(this, e.target, goReverse)) {
				e.preventDefault();
			}
		}
	}
	
	function processTab(container, elt, goReverse) {
		var $focussable = getFocusableElementsInContainer(container),
			curElt = elt,
			index, nextIndex, prevIndex, lastIndex;
		
		do {
		
			index = $focussable.index(curElt);
			nextIndex = index + 1;
			prevIndex = index - 1;
			lastIndex = $focussable.length - 1;

			switch(index) {
				case -1:
					return false;
				case 0:
					prevIndex = lastIndex;
					break;
				case lastIndex:
					nextIndex = 0;
					break;
			}
							
			if (goReverse) {
				nextIndex = prevIndex;
			}
			
			curElt = $focussable.eq(nextIndex);
			curElt.focus();
		
		} while (elt === elt.ownerDocument.activeElement);

		return true;		
	}
	
	function filterSpeciallyFocusable() {
		return this.tabIndex > 0;
	}
	
	function sortFocusable(a, b) {
		return (a.t - b.t) || (a.i - b.i);
	}
	
	function getFocusableElementsInContainer(container) {
		var $container = $(container);
		var result = [],
			cnt = 0;
		$container.find("a, :input:enabled, [tabindex=0]")
			.filter(":visible")
			.not(filterSpeciallyFocusable)
			.each(function(i, val) {
				result.push({
					v: val, // value
					t: 0, // tabIndex
					i: cnt++ // index for stable sort
				});
			});
			
		$container
			.find("[tabindex]")
			.filter(":visible")
			.filter(filterSpeciallyFocusable)
			.each(function(i, val) {
				result.push({
					v: val, // value
					t: val.tabIndex, // tabIndex
					i: cnt++ // index
				});
			});
		
		result = $.map(result.sort(sortFocusable), // needs stable sort
			function(val) {
				return val.v;
			}
		);
			
		
		return $(result);
		
	}
	
	function trap() {
		this.keypress(onkeypress);
		this.data(DATA_ISTRAPPING_KEY, true);
		return this;
	}
	
	function untrap() {
		this.unbind('keypress', onkeypress);
		this.removeData(DATA_ISTRAPPING_KEY);
		return this;
	}
	
	function isTrapping() {
		return !!this.data(DATA_ISTRAPPING_KEY);
	}
	
	$.fn.extend({
		trap: trap,
		untrap: untrap,
		isTrapping: isTrapping
	});
	
})( jQuery );
