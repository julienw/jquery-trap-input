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

Also, the behaviour will be inconsistent in browsers whose `sort`
implementation is not stable.

According to some sources
this means the following browsers will have this problem :

* Firefox < 3
* Chrome all versions, but it depends on the size of the array, so it might work just good here
* Opera < 10
* IE (maybe)

This will be fixed later.

