FROM python:3.10-alpine

WORKDIR /usr/src/app

RUN pip3 install gunicorn==20.1.0 Flask==2.2.2

COPY ./assets ./assets

COPY ./main.py .

COPY ./src/*.html ./templates

CMD VERSION="`cat VERSION`" gunicorn --workers 4 --bind "0.0.0.0:8000" --log-level "info" --access-logfile "-" --access-logformat '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %(D)s' main:app
