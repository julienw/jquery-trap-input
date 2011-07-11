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

I found no library implementing this, especially [jQuery UI Dialog](http://jqueryui.com/demos/dialog/),
although I think it is a must for the accessibility of our rich
web pages.

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

See the `examples` directory for some more examples.
