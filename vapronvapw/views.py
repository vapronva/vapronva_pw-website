from flask import render_template, redirect
from vapronvapw import app

# @app.after_request
# def add_custom_http_response_headers(response):
#     response.headers["X-Frame-Options"] = "SAMEORIGIN"
#     response.headers["X-XSS-Protection"] = "1; mode=block"
#     response.headers["X-Content-Type-Options"] = "nosniff"
#     response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, max-age=0"
#     return response

@app.route("/")
@app.route("/index.html")
def main_root():
    return render_template("index.html")

@app.route("/about")
@app.route("/about/")
@app.route("/about.html")
def main_about():
    return render_template("about.html")

@app.route("/copyright")
@app.route("/copyright/")
@app.route("/copyright.html")
def main_copyright():
    return render_template("copyright.html")

@app.route("/privacy")
@app.route("/privacy/")
@app.route("/privacy.html")
def main_privacy():
    return render_template("privacy.html")

@app.route("/projects")
@app.route("/projects/")
@app.route("/projects.html")
def main_projects():
    return render_template("projects.html")

@app.route("/shse")
@app.route("/shse/")
@app.route("/shse.html")
def main_shse():
    return render_template("shse.html")

@app.route("/wcid")
@app.route("/wcid/")
@app.route("/wcid.html")
def main_wcid():
    return render_template("wcid.html")

@app.errorhandler(404)
def error_404(error):
    return redirect("https://error.vapronva.pw/main-website/404"), 302
