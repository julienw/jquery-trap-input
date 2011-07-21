#!/bin/sh

DIR=website
BUILD_DIR=website-dist

if which upskirt > /dev/null ; then
    echo "we found upskirt, that's good, continuing."
    parser="upskirt";
elif which sundown > /dev/null ; then
	echo "we found sundown, that's good, continuing."
	parser="sundown";
else
    echo "sundown was not found in the PATH, exiting."
    echo "Clone https://github.com/tanoku/sundown.git to download it and"
    echo "then make it."
    exit
fi

rm -rf $BUILD_DIR
mkdir $BUILD_DIR
cp -r $DIR/js $DIR/css $BUILD_DIR/

${parser} README.md | sed -e 's/<pre><code class="/<pre class="sh_/' -e 's/<\/code><\/pre>/<\/pre>/' > ${BUILD_DIR}/index.pre.html

cat $DIR/head.html ${BUILD_DIR}/index.pre.html $DIR/foot.html > ${BUILD_DIR}/index.html

rm ${BUILD_DIR}/index.pre.html

cp -r examples/ ${BUILD_DIR}/
mkdir ${BUILD_DIR}/lib
cp -r lib/jquery ${BUILD_DIR}/lib
cp jquery.trap.js ${BUILD_DIR}/

