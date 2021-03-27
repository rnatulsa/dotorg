SHELL = /bin/bash

default:

dev:
	yarn dev

build:
	yarn build
	[ "$$CONTEXT" = "production" ] && rm out/robots.txt

start:
	yarn start

# 1024x1024 area
# resize:
# 	mogrify -resize '1048576@>' -format jpg -quality 60 *.*
