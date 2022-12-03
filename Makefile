SHELL = /bin/bash

default:

dev:
	yarn dev

build:
	yarn build
	[ ! -f out/robots.txt.$$CONTEXT ] || cp out/robots.txt.$$CONTEXT out/robots.txt
	rm -f out/robots.txt.*

start:
	yarn start

clean:
	rm -rf .next out yarn-error.log data/contentful/*.json

server:
	python3 -m http.server --directory out/

# 1024x1024 area
# resize:
# 	mogrify -resize '1048576@>' -format jpg -quality 60 *.*
