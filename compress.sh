#/bin/bash
# this build script was shamelessly taken from Modernizr
# then it is Copyright Paul Irish and under BSD and MIT dual licence
# as per http://www.modernizr.com/license/

IN='jquery.trap.js'
OUT='jquery.trap.min.js'

SIZE_MIN=`uglifyjs "$IN" --extra --unsafe | tee "$OUT" | wc -c`
SIZE_GZIP=`gzip -nfc --best "$OUT" | wc -c`

echo $SIZE_MIN bytes minified, $SIZE_GZIP bytes gzipped

if [ "$1" == "--test" ]; then
    rm "$OUT"
fi
