jQuery trap input plugin
=====
The jQuery trap input plugin implements input trapping as described by
the Web Accessibility Initiative.

Why is this useful ?
----
As explained in [the W3C document aria-practices in the WAI](http://www.w3.org/WAI/PF/aria-practices/#modal_dialog),
modal dialogs should trap the keyboard input.

This means that when a user navigates in the dialog using the
`tab` key (with or without `shift`), the focus should __not__ go
outside of the dialog.

[jQuery UI Dialog](http://jqueryui.com/demos/dialog/) implements this
when the dialog is modal, in a limited way, but I found this in no other
libraries.

This implementation is better than the one is jQuery UI
Dialog: faster, it works with tabIndex attributes (see the dialog
example), and it works with other browsers than Firefox.

This library does not work with usemaps for now.

I think it is a must for the accessibility of our rich web pages, so I
made this plugin because I thought at first that jQuery UI didn't
implement this.

Usage
----
Include jQuery and this plugin. Then, call the `trap` function on the element 
which should trap the tabbing.

Here is a simple example

```html
<!doctype html>

<html>
	<head>
		<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'></script>
		<script src='jquery.trap.min.js'></script>
	<script>
	function init() {
		/* this is the init function
		 *we find all elements with the "trap" class and we call the
		 * "trap" function on it.
		 * Yes, this is _that_ simple.
		 */
		$(".trap").trap();
	}
	
	// on dom content ready
	$(init);
	</script>
	</head>
<body>
<div id='first'>
<a href='http://perdu.com'>perdu</a>
<a href='http://google.fr'>google</a>
<a href='http://lemonde.fr'>le monde</a>

</div>
<!-- once the focus get inside, it will be trapped -->
<div id='second' class='trap'>
<a href='http://perdu.com'>perdu</a>
<a href='http://google.fr'>google</a>
<a href='http://lemonde.fr'>le monde</a>

</div>

<div id='third'>
<a href='http://perdu.com'>perdu</a>
<a href='http://google.fr'>google</a>
<a href='http://lemonde.fr'>le monde</a>

</div>

</body>

</html>
```

See the [examples](http://julienw.github.com/jquery-trap-input/examples/) directory for some more examples.

Useful links
----
* [Source code repository](https://github.com/julienw/jquery-trap-input)
* [Home page](http://julienw.github.com/jquery-trap-input)
* [WAI's aria practices document](http://www.w3.org/WAI/PF/aria-practices/#modal_dialog)
