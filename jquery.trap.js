

;(function( $ ){
	function onkeypress(e) {
		console.log("e ", e);
		console.log("this ", this);
		
		if (e.keyCode === 9) {
			var goReverse = !!(e.shiftKey);
			processTab(this, e.target, goReverse);
		}
	}
	
	function processTab(container, elt, goReverse) {
		
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
			.filter(filterSpeciallyFocusable);
		
	}
	
	function trap() {
		this.keypress(onkeypress);
		return this;
	}
	$.fn.trap = trap;
})( jQuery );
