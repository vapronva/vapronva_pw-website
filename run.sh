gunicorn --workers 4 --bind '0.0.0.0:8000' --log-level 'info' --access-logfile '-' --access-logformat '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %(D)s' vapronvapw:app
