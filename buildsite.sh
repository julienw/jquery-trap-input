#!/bin/sh

DIR=website
BUILD_DIR=website-dist

rm -rf $BUILD_DIR
mkdir $BUILD_DIR
cp -r $DIR/js $DIR/css $BUILD_DIR/

upskirt README.md | sed -e 's/<pre><code class="/<pre class="sh_/' -e 's/<\/code><\/pre>/<\/pre>/' -e 's/<code>examples<\/code>/<a href="examples">examples<\/a>/' > ${BUILD_DIR}/index.pre.html

cat $DIR/head.html ${BUILD_DIR}/index.pre.html $DIR/foot.html > ${BUILD_DIR}/index.html

rm ${BUILD_DIR}/index.pre.html

cp -r examples/ ${BUILD_DIR}/
mkdir ${BUILD_DIR}/lib
cp -r lib/jquery ${BUILD_DIR}/lib
cp jquery.trap.js ${BUILD_DIR}/

