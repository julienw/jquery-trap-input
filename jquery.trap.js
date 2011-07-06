

;(function( $ ){
	function onkeypress(e) {
		console.log("e ", e);
		console.log("this ", this);
		
		e.preventDefault();
		
		if (e.keyCode === 9) {
			var goReverse = !!(e.shiftKey);
			processTab(this, e.target, goReverse);
		}
	}
	
	function processTab(container, elt, goReverse) {
		var $focussable = getFocusableElementsInContainer(container);
		var index = $focussable.index(elt);
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
		return this.tabindex > -1;
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
		this.keypress(onkeypress);
		return this;
	}
	$.fn.trap = trap;
})( jQuery );
