# build-docker-dev
build-docker-dev:
	cp -r project docker/dev/
	cp package.json docker/dev/
	cp Makefile docker/dev/
	cp run-prod.sh docker/dev/
	cd docker/dev/ && docker build -t "platzi/oss" .
	rm -rf docker/dev/project
	rm docker/dev/package.json
	rm docker/dev/Makefile
	rm docker/dev/run-prod.sh

# Run the microservice in the port 8000
start:
	npm run start:prod

start-dev:
	cd docker/dev/ && docker-compose up -d

stop-dev:
	cd docker/dev/ && docker-compose stop
