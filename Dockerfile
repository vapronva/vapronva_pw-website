FROM python:3.9.6-alpine

WORKDIR /usr/src/app

COPY . .

RUN pip3 install Flask==2.0.1

CMD ["python3", "./run.py"]