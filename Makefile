

IMAGE ?= liberty
ENVIRONMENT ?= dev
NAME ?= $(IMAGE)-$(ENVIRONMENT)
PORT ?= 5500

#
# The `all` target is just for producing an image from the meta project
#
all: clean
	@echo ""
	@echo "Build container ${NAME} in ${ENVIRONMENT}"
	@echo ""
	docker build --build-arg ENVIRONMENT_VARIABLE=${ENVIRONMENT} \
		--build-arg PORT=$(PORT) \
		-t ${IMAGE_NAME} .
	@echo "${IMAGE_NAME} Wmakas created from project ${NAME}"


go-build: 
	go build -o output/$(NAME)

run: go-build
	./${NAME}

docker-build: 
	docker build --no-cache -t build-container -f Dockerfile.build .
	docker run -v ${CURDIR}/:/go/src/github.com/iancullinane/new-sb-app build-container
	

run-docker: docker-build
	docker build --no-cache -t $(NAME) .
	docker run -p $(PORT):$(PORT) $(NAME) 

install: node_modules

webpack:
	webpack
# Build Steps
# -------------------
clean:
	@echo "Cleaning..."
	@-rm -r node_modules
	# @-rm -r dist
	@-rm $(NAME)

node_modules:
	@npm install

