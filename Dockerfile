FROM golang

EXPOSE 5500

# RUN apk --no-cache add git bash go make gcc sqlite
RUN mkdir -p /go/src /go/pkg /go/bin && chmod -R 777 /go

# ENV GOROOT /usr/lib/go
ENV GOPATH /go
ENV PATH $GOPATH/bin:$PATH

ADD Makefile /usr/src/app/Makefile
# ADD dist/ /usr/src/app
ADD output/liberty-dev /usr/src/app/
# ADD public/ /usr/src/app/public/
ADD dist/ /usr/src/app/dist/

WORKDIR /usr/src/app

# ENTRYPOINT ["./output/sweet-basil-pesto-dev"]
CMD ["./liberty-dev"]

