FROM python:3.9.6-alpine

WORKDIR /usr/src/app

COPY . .

RUN pip3 install Flask==2.1.0

CMD ["python3", "run.py"]