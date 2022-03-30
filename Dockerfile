FROM python:3.10-alpine

WORKDIR /usr/src/app

COPY . .

RUN pip3 install Flask==2.1.0 gunicorn==20.1.0

CMD ["gunicorn", "--workers", "4", "--bind", "'127.0.0.1:8000'", "--log-level", "'info'", "--access-logfile", "'-'", "--access-logformat", "'%(h)s %(l)s %(u)s %(t)s \"%(r)s\" %(s)s %(b)s \"%(f)s\" \"%(a)s\" %(D)s'" "vapronvapw:app"]