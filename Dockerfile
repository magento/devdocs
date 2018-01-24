FROM ruby:2.4.3
label maintainer="<mrollins@magento.com>"

ENV LANG C.UTF-8

COPY . /src

WORKDIR /src

RUN bundle install

RUN rake build

FROM nginx:stable-alpine
label maintainer="<mrollins@magento.com>"

COPY --from=0 /src/_site /usr/share/nginx/html
