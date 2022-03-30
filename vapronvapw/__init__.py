from flask import Flask
import logging

app = Flask("web-vapronvapw", template_folder="vapronvapw/templates")

from vapronvapw import views
