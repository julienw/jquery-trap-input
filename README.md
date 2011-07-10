jQuery trap plugin
=====
Usage
----
Include jQuery and this plugin. Then, call `trap` on the element 
which should trap the tabbing.

See the `examples` directory for some example.

Important information
----
The current implementation doesn't work if there are any element with
the CSS property `visibility` set to `none`, due to the way the
`:visible` selector works in current jQuery versions.

Also, for the very same reason, there could be quirks when this plugin
is used with jQuery versions before 1.3.2.



