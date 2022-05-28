from flask import Flask

app = Flask("web-vapronvapw", template_folder="vapronvapw/templates")

from vapronvapw import views  # skipcq: PY-W2000
