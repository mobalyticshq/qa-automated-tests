# Vendored from simple-elf/allure-report-action@v1.15 (MIT, see LICENSE).
# Only change: base image comes from mirror.gcr.io instead of public.ecr.aws,
# whose anonymous pull quota is shared by all GitHub-hosted runners (429 "Data limit exceeded").
FROM mirror.gcr.io/library/amazoncorretto:8

ARG RELEASE=2.44.0
ARG ALLURE_REPO=https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline

RUN echo $RELEASE && \
    yum -y update && \
    yum -y install tar wget gzip findutils && \
    rm -rf /var/cache/yum/*

RUN wget --no-verbose -O /tmp/allure-$RELEASE.tgz $ALLURE_REPO/$RELEASE/allure-commandline-$RELEASE.tgz && \
    tar -zxvf /tmp/allure-$RELEASE.tgz && \
    rm -rf /tmp/* && \
    chmod -R +x /allure-$RELEASE/bin

ENV ROOT=/app \
    PATH=$PATH:/allure-$RELEASE/bin

RUN mkdir -p $ROOT

WORKDIR $ROOT
COPY ./entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
