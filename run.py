from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
def main_root():
    return render_template("index.html")

@app.route("/about/")
def main_about():
    return render_template("about.html")

@app.route("/copyright/")
def main_copyright():
    return render_template("copyright.html")

@app.route("/privacy/")
def main_privacy():
    return render_template("privacy.html")

@app.route("/projects/")
def main_projects():
    return render_template("projects.html")

@app.route("/shse/")
def main_shse():
    return render_template("shse.html")

@app.route("/wcid/")
def main_wcid():
    return render_template("wcid.html")

@app.errorhandler(404)
def error_404(error):
    return redirect("https://error.vapronva.pw/main-website/404"), 302

app.run(debug=True, host="0.0.0.0", port=8000)
