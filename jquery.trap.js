

;(function( $ ){
	function onfocusin(e) {
		console.log("onfocusin e ", e);
		console.log("onfocusin this ", this);
		
		var $this = $(this);
		
		var firstFocus = $this.data("firstFocus");
		if (! firstFocus) {
			$this.data("firstFocus", e.target);
		}
		$this.data("gotFocusIn", true);
		setTimeout(function() { $this.removeData("gotFocusIn");}, 20);
	}
	
	function onfocusout(e) {
		console.log("onfocusout e ", e);
		console.log("onfocusout this ", this);
		
		setTimeout($.proxy(checkFocusIn, $(this)), 0);
	}
	
	function checkFocusIn() {
		console.log("checkFocusIn");
		if (!this.data("gotFocusIn")) {
			console.log("we got out of the trapping element");
			var firstFocus = this.data("firstFocus");
			$(firstFocus).focus();
			
		}
		this.removeData("gotFocusIn");
	}
	
	
	function trap() {
		this.focusin(onfocusin);
		this.focusout(onfocusout);
	}
	$.fn.trap = trap;
})( jQuery );
