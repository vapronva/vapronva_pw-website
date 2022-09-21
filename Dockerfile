FROM python:3.10-alpine

WORKDIR /usr/src/app

RUN pip3 install --no-cache-dir gunicorn==20.1.0 Flask==2.2.2

COPY ./assets ./assets
COPY ./main.py .
COPY ./templates ./templates
COPY ./VERSION ./VERSION
COPY ./RUN.sh ./RUN.sh

CMD ["sh", "RUN.sh"]
