FROM wernight/phantomjs
MAINTAINER mcouto@gmail.com

COPY start.sh /

RUN mkdir /data
WORKDIR /data

VOLUME [ "/data" ]
ENV PHANTOMJS_SCRIPT  script.js

CMD ["/start.sh"]
